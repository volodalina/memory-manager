import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

const Slide = (props) => {
  let {
    slide, slideWidth
  } = props;

  return <div className={'slide ' + slide.color} style={{width: slideWidth}}>
    {slide.color}
    {props.children}
  </div>
};

const mapStateToProps = (state, props) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const WrappedSlide = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Slide));

export default WrappedSlide;