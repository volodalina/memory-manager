import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Track from './track'
import Toolbar from './toolbar'

import  {
  startOffsetProcess,
  endOffsetProcess,
  activeOffsetProcess
} from '../js/actions/slider_actions'

const Viewport = (props) => {
  let {
    viewportWidth, viewportHeight,
    initialPointerX, pointerDrag,
    onStartOffsetProcess, onEndOffsetProcess, onActiveOffsetProcess
  } = props;

  return <div className="viewport" style={{width: viewportWidth, height: viewportHeight}}
         onMouseDown={onStartOffsetProcess.bind(this, pointerDrag)}
         onMouseUp={onEndOffsetProcess}
         onMouseMove={onActiveOffsetProcess.bind(this, pointerDrag, initialPointerX)}>

      <Track viewportSizeScope={props.viewportSizeScope}/>
      <Toolbar/>
    </div>
};

const mapStateToProps = (state, props) => {
  return {
    viewportWidth: state.viewportWidth,
    viewportHeight: state.viewportHeight,
    initialPointerX: state.initialPointerX,
    pointerDrag: state.pointerDrag
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
  }
};

const WrappedViewport = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewport));

export default WrappedViewport;