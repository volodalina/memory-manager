import {browserHistory} from 'react-router'


import  {
  OPEN_REGISTER_FORM,
  OPEN_LOGIN_FORM,
  INPUT_USERNAME,
  INPUT_USER_PASSWORD,
  INPUT_CONFIRM_PASSWORD,
  CHANGE_LANGUAGE,
  SUBMIT_ACCOUNT
} from "./actions/account_actions"
import {MODE, LANG} from './constants'

const INITIAL_STATE = {
  user_name: '',
  password: '',
  confirm_password: '',
  account_mode: MODE.LOGIN,
  language: LANG.EN
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_REGISTER_FORM:
      state.account_mode = action.account_mode;
      state.user_name = '';
      state.password = '';
      return Object.assign({}, state);
    case OPEN_LOGIN_FORM:
      state.account_mode = action.account_mode;
      state.user_name = '';
      state.password = '';
      state.confirm_password = '';
      return Object.assign({}, state);
    case INPUT_USERNAME:
      state.user_name = action.username;
      return Object.assign({}, state);
    case INPUT_USER_PASSWORD:
      state.password = action.user_password;
      return Object.assign({}, state);
    case INPUT_CONFIRM_PASSWORD:
      state.confirm_password = action.confirm_password;
      return Object.assign({}, state);
    case CHANGE_LANGUAGE:
      state.language = action.language;
      return Object.assign({}, state);
    case SUBMIT_ACCOUNT:
      //
      state.user_name = '';
      state.password = '';
      state.confirm_password = '';

      console.log('SUBMIT_ACCOUNT');
      browserHistory.push('/manager');
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default reducer;