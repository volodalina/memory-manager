import {LANG} from '../js/constants'
import React from 'react'
import {connect} from 'react-redux'
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import {messages as en_messages} from '../js/nls/en/common'
import {messages as ru_messages} from '../js/nls/ru/common'

const
  messages_dic = {
    [LANG.EN]: en_messages,
    [LANG.RU]: ru_messages,
  };

addLocaleData([...en, ...ru]);

const Language = (props) => {
  return <IntlProvider locale={props.language} messages={props.messages}>
      {props.children}
    </IntlProvider>
};

const mapStateToProps = (state) => {
  return {
    language: state.language,
    messages: messages_dic[state.language]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const WrappedLanguage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);

export {WrappedLanguage};