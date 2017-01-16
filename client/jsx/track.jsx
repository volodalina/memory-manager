import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Slide from './slide'

const Track = (props) => {
  let {
    viewportWidth, viewportSizeScope,
    trackLeft, slides
  } = props;

  let slideWidth = calcSliderWidth(viewportWidth, viewportSizeScope), trackWidth = slideWidth * slides.length;

  return <div className="track" style={{transform: `translate3d(${trackLeft}px, 0px, 0px)`, width: trackWidth}}>
    {slides.map(function(_slide, index) {
      return <Slide key={index} slide={_slide} slideWidth={slideWidth}>
        <h2>Slide - {index}</h2>
        <h3>Children</h3>
      </Slide>
    })}
  </div>
};

function calcSliderWidth(viewportWidth, viewportSizeScope) {
  if (viewportWidth > viewportSizeScope.viewportMediumWidth) {
    return viewportWidth / 3;
  } else if (viewportWidth > viewportSizeScope.viewportSmallWidth) {
    return viewportWidth / 2;
  }
  return viewportWidth;
}

const mapStateToProps = (state, props) => {
  return {
    viewportWidth: state.viewportWidth,
    trackLeft: state.trackLeft,
    slides: state.slides
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const WrappedTrack = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Track));

export default WrappedTrack;