import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import {POSITION} from '../js/constants'
import Section from './section'

import  {
  changePositionContainer,
  addSection
} from '../js/actions/manager_actions'

const App = (props) => {
  let {onAddSection, unique_id, sections} = props;

  return <div className="wh-100p-abs bg-50">
    <button onClick={onAddSection.bind(this, unique_id)}>+ Add new section</button>
    <div className="p-fx flex-col-row-center-wh100p">
    {sections.map(section => <Section key={section.id} section={section} />)}
    </div>
  </div>
};

const mapStateToProps = (state, props) => {
  return {
    position: state.position_container,
    unique_id: state.unique_id,
    sections: state.sections,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSection: (new_id, event) => {
      dispatch(addSection({
        position: POSITION.CENTER,
        id: ++new_id
      }))
    }
  }
};

const WrappedApp = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

export default WrappedApp;