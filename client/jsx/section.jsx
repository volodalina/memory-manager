import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'


import {POSITION} from '../js/constants'

import  {
  changePositionContainer
} from '../js/actions/manager_actions'

const Section = (props) => {
  let {onChangePositionContainer, section} = props,
    {position} = section;

  let className = position === POSITION.CENTER ? "w-350px bg-60" :
    position === POSITION.LEFT ? "w-350px bg-60 p-abs-left-top-0" : "w-350px bg-60 p-abs-right-top-0"

  return      <div className={className} style={{border: '1px solid blue'}}>
        <div className="w-100p">
          <input type="radio"
                 name={'position_container_' + section.id}
                 value={POSITION.LEFT}
                 checked={position === POSITION.LEFT}
                 onChange={onChangePositionContainer.bind(this, section)}/>
          <label className="">
            I am left panel
          </label>
        </div>
        <hr/>
        <div className="w-100p-rel">
          <input type="radio"
                 name={'position_container_' + section.id}
                 value={POSITION.CENTER}
                 checked={position === POSITION.CENTER}
                 onChange={onChangePositionContainer.bind(this, section)}/>
          <label className="">
            I am center container
          </label>
        </div>
        <hr/>
        <div className="w-100p-rel">
          <input type="radio"
                 name={'position_container_' + section.id}
                 value={POSITION.RIGHT}
                 checked={position === POSITION.RIGHT}
                 onChange={onChangePositionContainer.bind(this, section)}/>
          <label className="">
            I am right panel
          </label>
        </div>
      </div>
};

const mapStateToProps = (state, props) => {
  return {
    unique_id: state.unique_id,
    sections: state.sections,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePositionContainer: (section, event) => {
      dispatch(changePositionContainer(section, event.target.value))
    }
  }
};

const WrappedSection = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Section));

export default WrappedSection;