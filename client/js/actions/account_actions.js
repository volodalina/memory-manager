export const OPEN_REGISTER_FORM = 'OPEN_REGISTER_FORM';
export const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
export const INPUT_USERNAME = 'INPUT_USERNAME';
export const INPUT_USER_PASSWORD = 'INPUT_USER_PASSWORD';
export const INPUT_CONFIRM_PASSWORD = 'INPUT_CONFIRM_PASSWORD';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const SUBMIT_ACCOUNT = 'SUBMIT_ACCOUNT';

export function openRegisterForm(account_mode) {
  return {type: OPEN_REGISTER_FORM, account_mode}
}
export function openLoginForm(account_mode) {
  return {type: OPEN_LOGIN_FORM, account_mode}
}
export function inputUsername(username) {
  return {type: INPUT_USERNAME, username}
}
export function inputUserPassword(user_password) {
  return {type: INPUT_USER_PASSWORD, user_password}
}
export function inputConfirmPassword(confirm_password) {
  return {type: INPUT_CONFIRM_PASSWORD, confirm_password}
}
export function changeLanguage(language) {
  return {type: CHANGE_LANGUAGE, language}
}
export function submitAccount(username, user_password, confirm_password) {
  return {type: SUBMIT_ACCOUNT, username, user_password, confirm_password}
}
