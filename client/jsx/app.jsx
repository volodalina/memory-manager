import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import Slider from './slider'

const viewportSizeSteps = {
  smallWidth: 768,
  mediumWidth: 992,
};

const App = (props) => {

  return <div>
    <Slider viewportSizeSteps={viewportSizeSteps}/>
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