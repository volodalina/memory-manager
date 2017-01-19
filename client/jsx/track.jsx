import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Slide from './slide'

const Track = (props) => {
  let {
    viewportWidth, slidesWidth, slidesPoint,
    trackLeft, slides
  } = props;


  let trackWidth = slidesWidth.reduce(function(sum, current){
    return sum + current;
  });

  return <div className="track" style={{transform: `translate3d(${trackLeft}px, 0px, 0px)`, width: trackWidth}}>
    {slides.map(function(_slide, index) {
      return <Slide key={index} slide={_slide} slideWidth={slidesWidth[index]} >
        <h2>Slide - {index}</h2>
        <h3>Children</h3>
      </Slide>
    })}
  </div>
};

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