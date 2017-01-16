import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

const Toolbar = (props) => {
  return <div className="slide-btns">
    <div className="prev-btn">
      <button>Prev</button>
    </div>
    <div className="next-btn">
      <button>Next</button>
    </div>
  </div>
};

const mapStateToProps = (state, props) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const WrappedToolbar = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar));

export default WrappedToolbar;