import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Track from './track'
import Toolbar from './toolbar'

import  {
  startOffsetProcess,
  endOffsetProcess,
  activeOffsetProcess,
  scrollToNearestSlide
} from '../js/actions/slider_actions'

const Viewport = (props) => {
  let {
    viewportWidth, viewportHeight, viewportSizeSteps, trackLeft, previousPointerX,
    slidesWidth, slidesPoint,
    initialPointerX, pointerDrag,
    onStartOffsetProcess, onEndOffsetProcess, onActiveOffsetProcess,
    slides
  } = props;


  return <div className="viewport" style={{width: viewportWidth, height: viewportHeight}}
              onMouseDown={onStartOffsetProcess.bind(this, pointerDrag)}
              onMouseUp={onEndOffsetProcess.bind(this, viewportWidth, slidesWidth, slidesPoint, trackLeft)}
              onMouseMove={onActiveOffsetProcess.bind(this, pointerDrag, initialPointerX, previousPointerX)}>
    <Track slidesWidth={slidesWidth} slidesPoint={slidesPoint} viewportWidth={viewportWidth}/>
    <Toolbar/>
  </div>
};

const mapStateToProps = (state, props) => {
  return {
    viewportWidth: state.viewportWidth,
    viewportHeight: state.viewportHeight,
    initialPointerX: state.initialPointerX,
    pointerDrag: state.pointerDrag,
    slides: state.slides,
    trackLeft: state.trackLeft,
    previousPointerX: state.previousPointerX
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartOffsetProcess: (pointerDrag, event) => {
      if (pointerDrag) return;
      dispatch(startOffsetProcess(true, event.clientX))
    },
    onEndOffsetProcess: (viewportWidth, slidesWidth, slidesPoint, trackLeft, event) => {

      let startSlide, endSlide, newLeftTrack = 0;
      slidesPoint.forEach(function(_point, index) {
         startSlide = _point;
        endSlide = slidesPoint[index + 1];
        if (-trackLeft >= startSlide && -trackLeft <= endSlide ){
          newLeftTrack = -startSlide;
        }
        return newLeftTrack;
      });
      dispatch(scrollToNearestSlide(newLeftTrack));
      dispatch(endOffsetProcess(false));
    },
    onActiveOffsetProcess: (pointerDrag, initialPointerX, previousPointerX, event) => {
      if (pointerDrag) {
        dispatch(activeOffsetProcess(event.clientX, previousPointerX - event.clientX))
      }
    },
  }
};

const WrappedViewport = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewport));

export default WrappedViewport;