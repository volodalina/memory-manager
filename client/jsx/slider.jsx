import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Viewport from './viewport'

import  {
  resizeSlider
} from '../js/actions/slider_actions'

class Slider  extends React.Component {
  componentDidMount(){
    window.addEventListener('resize', this.props.onResizeSlider, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onResizeSlider);
  }

  render(){
    return <Viewport viewportSizeScope={this.props.viewportSizeScope}/>
  }
};

const mapStateToProps = (state, props) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onResizeSlider: (event) => {
      dispatch(resizeSlider())
    },
  }
};

const WrappedSlider = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider));

export default WrappedSlider;