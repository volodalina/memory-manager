import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage, injectIntl} from 'react-intl'

import {MODE, LANG} from '../js/constants'
import {keys} from '../js/nls/en/common'
import LockOpenIcon from './svg/lock_open'
import LockOutlineIcon from './svg/lock_outline'
import PersonIcon from './svg/person'

import  {
  openRegisterForm, openLoginForm,
  inputUsername, inputUserPassword, inputConfirmPassword, changeLanguage
} from "../js/actions/account_actions"

const Account = (props) => {
  const {formatMessage} = props.intl;

  return <div className="wh-100p-abs bg-90">
    <div className="p-fx flex-col-row-center-wh100p">
      <div className="choose-form-name">
        <button onClick={props.onOpenLoginForm}
                className={props.mode === MODE.LOGIN ? 'selected ' : ''}>
          <FormattedMessage id={keys.$LOGIN}/>
        </button>
        <label>|</label>
        <button onClick={props.onOpenRegisterForm}
                className={props.mode === MODE.REGISTER ? 'selected ' : ''}>
          <FormattedMessage id={keys.$REGISTER}/>
        </button>
      </div>
      <form className="account">
        <div className="w-100p text-center select-lang">
          <label className="color-white margin-r-10px">
            <FormattedMessage id={keys.$LANGUAGE}/>:
          </label>
          <select value={props.lang} onChange={props.onChangeLanguage} className="font-family-inh">
            <option value={LANG.EN}>
              {formatMessage({id: keys.$EN})}
            </option>
            <option value={LANG.RU}>
              {formatMessage({id: keys.$RU})}
            </option>
          </select>
        </div>
        <div className="w-100p-rel">
          <input type="text" value={props.user_name} placeholder={formatMessage({id: keys.$USER_NAME})}
                 onChange={props.onChangeUsername} className="input-textA100-with-icon"/>
          <label className="label-icon-for-input">
            <PersonIcon/>
          </label>
        </div>
        <div className="w-100p-rel">
          <input type="password" value={props.password} placeholder={formatMessage({id: keys.$USER_PASSWORD})}
                 onChange={props.onChangePassword} className="input-textA100-with-icon"/>
          <label className="label-icon-for-input">
            <LockOutlineIcon/>
          </label>
        </div>
        {props.mode === MODE.REGISTER ?
          <div className="w-100p p-rel">
            <input type="password" value={props.confirm_password} className="input-textA100-with-icon"
                   placeholder={formatMessage({id: keys.$PASSWORD_CONFIRM})} onChange={props.onChangeConfirmPassword}/>
            <label className="label-icon-for-input">
              <LockOpenIcon/>
            </label>
          </div> : null}
        {props.mode === MODE.LOGIN ?
          <div className="w-100p text-center">
            <button type="submit" className="btn-square-A700">
              <FormattedMessage id={keys.$LOG_IN}/>
            </button>
          </div> :
          <div className="w-100p text-center">
            <button type="submit" className="btn-square-A700">
              <FormattedMessage id={keys.$REGISTER_LOGIN}/>
            </button>
          </div>}
      </form>
    </div>
  </div>
};

const mapStateToProps = (state, props) => {
  return {
    intl: props.intl,
    mode: state.account_mode,
    user_name: state.user_name,
    password: state.password,
    confirm_password: state.confirm_password,
    lang: state.language
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenRegisterForm: (event) => {
      dispatch(openRegisterForm(MODE.REGISTER))
    },
    onOpenLoginForm: (event) => {
      dispatch(openLoginForm(MODE.LOGIN))
    },
    onChangeUsername: (event) => {
      dispatch(inputUsername(event.target.value))
    },
    onChangePassword: (event) => {
      dispatch(inputUserPassword(event.target.value))
    },
    onChangeConfirmPassword: (event) => {
      dispatch(inputConfirmPassword(event.target.value))
    },
    onChangeLanguage: (event) => {
      dispatch(changeLanguage(event.target.value))
    }
  }
};

const WrappedAccount = injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Account));

export default WrappedAccount;