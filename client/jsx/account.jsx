import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage, injectIntl} from 'react-intl'

import {MODE, LANG} from '../js/constants'
import {keys} from '../js/nls/en/common'

import  {
  openRegisterForm, openLoginForm,
  inputUsername, inputUserPassword, inputConfirmPassword, changeLanguage
} from "../js/actions/account_actions"



const Account = (props) => {
  const {formatMessage} = props.intl;

  return <div className="w-100p h-100p p-abs bg-90">
    <div className="p-fx flex-outer-container flex-dir-col">
      <div className="w-350px forms-names">
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
      <form className="flex-inner-container flex-just-center">
        <div className="w-100p text-center select-lang">
          <label>
            <FormattedMessage id={keys.$LANGUAGE}/>:
          </label>
          <select value={props.lang} onChange={props.onChangeLanguage}>
            <option value={LANG.EN}>
              {formatMessage({ id: keys.$EN})}
            </option>
            <option value={LANG.RU}>
              {formatMessage({ id: keys.$RU})}
            </option>
          </select>
        </div>
        <div className="w-100p p-rel">
          <input type="text" value={props.user_name} placeholder={formatMessage({ id: keys.$USER_NAME})}
                 onChange={props.onChangeUsername}/>
          <label className="icon name"></label>
        </div>
        <div className="w-100p p-rel">
          <input type="password" value={props.password} placeholder={formatMessage({ id: keys.$USER_PASSWORD})}
                 onChange={props.onChangePassword}/>
          <label className="icon password"></label>
        </div>
        {props.mode === MODE.REGISTER ?
          <div className="w-100p p-rel">
            <input type="password" value={props.confirm_password}
                   placeholder={formatMessage({ id: keys.$PASSWORD_CONFIRM})} onChange={props.onChangeConfirmPassword}/>
            <label className="icon confirm-password"></label>
          </div> : null}
        {props.mode === MODE.LOGIN ?
          <div className="w-100p text-center">
            <button type="submit" className="submit">
              <FormattedMessage id={keys.$LOG_IN}/>
            </button>
          </div> :
          <div className="w-100p text-center">
            <button type="submit" className="submit">
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