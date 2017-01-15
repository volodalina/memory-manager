import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Slider from './slider'

const App = (props) => {
  let viewportSizeScope = {
    viewportSmallWidth: 768,
    viewportMediumWidth: 992
  };
  return <div>
    <Slider viewportSizeScope={viewportSizeScope}/>
  </div>
};

const mapStateToProps = (state, props) => {
  return {
    slides: state.slides
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const WrappedApp = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

export default WrappedApp;