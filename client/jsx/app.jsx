import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import {POSITION} from '../js/constants'

import  {
  nextSlide,
  previousSlide,
  startOffsetProcess,
  endOffsetProcess,
  activeOffsetProcess
} from '../js/actions/slider_actions'

const App = (props) => {
  let {
    viewportWidth, viewportHeight, trackLeft, slides, initialPointerX, currentPointerX, pointerDrag,
    onNextSlide, onStartOffsetProcess, onEndOffsetProcess, onActiveOffsetProcess
  } = props;

  let slideWidth = calcSlider(viewportWidth), trackWidth = slideWidth * slides.length;

  return <div id="slider">
    <div id="viewport" className="viewport" style={{width: viewportWidth, height: viewportHeight}}
         onMouseDown={onStartOffsetProcess.bind(this, pointerDrag)}
         onMouseUp={onEndOffsetProcess}
         onMouseMove={onActiveOffsetProcess.bind(this, pointerDrag, initialPointerX)}>
      <div className="track" style={{transform: `translate3d(${trackLeft}px, 0px, 0px)`, width: trackWidth}}>
        {slides.map(function(_slide, index) {
          return <div key={index} className={'slide ' + _slide.color} style={{width: slideWidth}}>
            {index}
          </div>
        })}
      </div>

      <div id="prev-next-btns" className="slide-btns">
        <div id="prev-btn" className="prev-btn">
          <button onClick={onNextSlide.bind(this, initialPointerX,)}>Prev</button>
        </div>
        <div id="next-btn" className="next-btn">
          <button>Next</button>
        </div>
      </div>
    </div>
  </div>
};

function calcSlider(viewportWidth) {
  if (viewportWidth > 992) {
    return viewportWidth / 3;
  } else if (viewportWidth > 768) {
    return viewportWidth / 2;
  }
  return viewportWidth;
}

const mapStateToProps = (state, props) => {
  return {
    viewportWidth: state.viewportWidth,
    viewportHeight: state.viewportHeight,
    trackLeft: state.trackLeft,
    initialPointerX: state.initialPointerX,
    currentPointerX: state.currentPointerX,
    pointerDrag: state.pointerDrag,
    slides: state.slides
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartOffsetProcess: (pointerDrag, event) => {
      if (pointerDrag) return;
      dispatch(startOffsetProcess(true, event.clientX))
    },
    onEndOffsetProcess: (event) => {
      dispatch(endOffsetProcess(false))
    },
    onActiveOffsetProcess: (pointerDrag, initialPointerX, event) => {
      if (pointerDrag) {
        dispatch(activeOffsetProcess(event.clientX, initialPointerX))
      }
    },
    onNextSlide: (pointerX, pointerDrag, event) => {
      dispatch(endOffsetProcess(false))
    },
  }
};

const WrappedApp = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

export default WrappedApp;