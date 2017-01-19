import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Viewport from './viewport'

import {VIEWPORT_MODE} from '../js/constants'

import  {
  resizeSlider
} from '../js/actions/slider_actions'

class Slider extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.props.onResizeSlider, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onResizeSlider);
  }

  render() {
    let {
      viewportWidth,
      slides, viewportSizeSteps
    } = this.props;
    let slidesWidth = [], currentPoint = 0, slidesPoint = [currentPoint],
      viewportMode = calcViewportMode(viewportWidth, viewportSizeSteps);

    slides.forEach(function(_slide) {
      let _slideWidth = calcSliderWidth(viewportMode, viewportWidth, _slide.widthGrowRate);
      slidesWidth.push(_slideWidth);
      currentPoint += _slideWidth;
      slidesPoint.push(currentPoint);
    });

    return <Viewport viewportSizeSteps={viewportSizeSteps} slidesWidth={slidesWidth} slidesPoint={slidesPoint}
                     viewportMode={viewportMode}/>
  }
}

function calcViewportMode(viewportWidth, viewportSizeSteps) {
  if (viewportWidth > viewportSizeSteps.mediumWidth) {
    return VIEWPORT_MODE.DESKTOP;
  } else if (viewportWidth > viewportSizeSteps.smallWidth) {
    return VIEWPORT_MODE.TABLET;
  }
  return VIEWPORT_MODE.MOBILE;
}

function calcSliderWidth(viewportMode, viewportWidth, slideWidthGrowRate) {
  switch (viewportMode) {
    case VIEWPORT_MODE.DESKTOP:
      return viewportWidth * slideWidthGrowRate.largeWidth;
      break;
    case VIEWPORT_MODE.TABLET:
      return viewportWidth * slideWidthGrowRate.mediumWidth;
      break;
    default:
      return viewportWidth;
  }
}

const mapStateToProps = (state, props) => {
  return {
    viewportWidth: state.viewportWidth,
    slides: state.slides
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