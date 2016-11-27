webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(189);

	var _reactRedux = __webpack_require__(245);

	var _redux = __webpack_require__(252);

	var _reducers = __webpack_require__(285);

	var _reducers2 = _interopRequireDefault(_reducers);

	__webpack_require__(288);

	var _language = __webpack_require__(294);

	var _account = __webpack_require__(323);

	var _account2 = _interopRequireDefault(_account);

	var _app = __webpack_require__(325);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _redux.createStore)(_reducers2.default);

	var noMatchRedirect = function noMatchRedirect(nextState, replace) {
	  replace('/account');
	},
	    requireAuth = function requireAuth(nextState, replace) {
	  // redirectToAccount
	};

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _language.WrappedLanguage,
	    null,
	    _react2.default.createElement(
	      _reactRouter.Router,
	      { history: _reactRouter.browserHistory },
	      _react2.default.createElement(_reactRouter.Route, { path: '/', onEnter: noMatchRedirect }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/' },
	        _react2.default.createElement(_reactRouter.Route, { path: 'account', component: _account2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'manager', component: _app2.default, onEnter: requireAuth })
	      ),
	      _react2.default.createElement(_reactRouter.Route, { path: '*', onEnter: noMatchRedirect })
	    )
	  )
	), document.getElementById('app'));

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _account_actions = __webpack_require__(286);

	var _constants = __webpack_require__(287);

	var INITIAL_STATE = {
	  user_name: '',
	  password: '',
	  confirm_password: '',
	  account_mode: 'LOGIN',
	  language: _constants.LANG.EN
	};

	var reducer = function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];

	  switch (action.type) {
	    case _account_actions.OPEN_REGISTER_FORM:
	      state.account_mode = action.account_mode;
	      state.user_name = '';
	      state.password = '';
	      return Object.assign({}, state);
	    case _account_actions.OPEN_LOGIN_FORM:
	      state.account_mode = action.account_mode;
	      state.user_name = '';
	      state.password = '';
	      state.confirm_password = '';
	      return Object.assign({}, state);
	    case _account_actions.INPUT_USERNAME:
	      state.user_name = action.username;
	      return Object.assign({}, state);
	    case _account_actions.INPUT_USER_PASSWORD:
	      state.password = action.user_password;
	      return Object.assign({}, state);
	    case _account_actions.INPUT_CONFIRM_PASSWORD:
	      state.confirm_password = action.confirm_password;
	      return Object.assign({}, state);
	    case _account_actions.CHANGE_LANGUAGE:
	      state.language = action.language;
	      return Object.assign({}, state);
	    default:
	      return state;
	  }
	};

	exports.default = reducer;

/***/ },

/***/ 286:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.openRegisterForm = openRegisterForm;
	exports.openLoginForm = openLoginForm;
	exports.inputUsername = inputUsername;
	exports.inputUserPassword = inputUserPassword;
	exports.inputConfirmPassword = inputConfirmPassword;
	exports.changeLanguage = changeLanguage;
	var OPEN_REGISTER_FORM = exports.OPEN_REGISTER_FORM = 'OPEN_REGISTER_FORM';
	var OPEN_LOGIN_FORM = exports.OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
	var INPUT_USERNAME = exports.INPUT_USERNAME = 'INPUT_USERNAME';
	var INPUT_USER_PASSWORD = exports.INPUT_USER_PASSWORD = 'INPUT_USER_PASSWORD';
	var INPUT_CONFIRM_PASSWORD = exports.INPUT_CONFIRM_PASSWORD = 'INPUT_CONFIRM_PASSWORD';
	var CHANGE_LANGUAGE = exports.CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

	function openRegisterForm(account_mode) {
	  return { type: OPEN_REGISTER_FORM, account_mode: account_mode };
	}
	function openLoginForm(account_mode) {
	  return { type: OPEN_LOGIN_FORM, account_mode: account_mode };
	}
	function inputUsername(username) {
	  return { type: INPUT_USERNAME, username: username };
	}
	function inputUserPassword(user_password) {
	  return { type: INPUT_USER_PASSWORD, user_password: user_password };
	}
	function inputConfirmPassword(confirm_password) {
	  return { type: INPUT_CONFIRM_PASSWORD, confirm_password: confirm_password };
	}
	function changeLanguage(language) {
	  return { type: CHANGE_LANGUAGE, language: language };
	}

/***/ },

/***/ 287:
/***/ function(module, exports) {

	'use strict';

	var MODE = {
	  LOGIN: 'LOGIN',
	  REGISTER: 'REGISTER'
	},
	    LANG = {
	  EN: 'EN',
	  RU: 'RU'
	},
	    NODE_ENV = {
	  PRODUCTION: 'production'
	};

	module.exports = { MODE: MODE, LANG: LANG, NODE_ENV: NODE_ENV };

/***/ },

/***/ 288:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WrappedLanguage = undefined;

	var _messages_dic;

	var _constants = __webpack_require__(287);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(245);

	var _reactIntl = __webpack_require__(295);

	var _en = __webpack_require__(318);

	var _en2 = _interopRequireDefault(_en);

	var _ru = __webpack_require__(319);

	var _ru2 = _interopRequireDefault(_ru);

	var _common = __webpack_require__(320);

	var _common2 = __webpack_require__(322);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var messages_dic = (_messages_dic = {}, _defineProperty(_messages_dic, _constants.LANG.EN, _common.messages), _defineProperty(_messages_dic, _constants.LANG.RU, _common2.messages), _messages_dic);

	(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en2.default), _toConsumableArray(_ru2.default)));

	var Language = function Language(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    { locale: props.language, messages: props.messages },
	    props.children
	  );
	};

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    language: state.language,
	    messages: messages_dic[state.language]
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {};
	};

	var WrappedLanguage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Language);

	exports.WrappedLanguage = WrappedLanguage;

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.en=a())}(this,function(){"use strict";var e=[{locale:"en",pluralRuleFunction:function(e,a){var n=String(e).split("."),l=!n[1],o=Number(n[0])==e,t=o&&n[0].slice(-1),r=o&&n[0].slice(-2);return a?1==t&&11!=r?"one":2==t&&12!=r?"two":3==t&&13!=r?"few":"other":1==e&&l?"one":"other"},fields:{year:{displayName:"year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}},month:{displayName:"month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},day:{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},hour:{displayName:"hour",relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},minute:{displayName:"minute",relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},second:{displayName:"second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}}}},{locale:"en-001",parentLocale:"en"},{locale:"en-150",parentLocale:"en-001"},{locale:"en-AG",parentLocale:"en-001"},{locale:"en-AI",parentLocale:"en-001"},{locale:"en-AS",parentLocale:"en"},{locale:"en-AT",parentLocale:"en-150"},{locale:"en-AU",parentLocale:"en-001"},{locale:"en-BB",parentLocale:"en-001"},{locale:"en-BE",parentLocale:"en-001"},{locale:"en-BI",parentLocale:"en"},{locale:"en-BM",parentLocale:"en-001"},{locale:"en-BS",parentLocale:"en-001"},{locale:"en-BW",parentLocale:"en-001"},{locale:"en-BZ",parentLocale:"en-001"},{locale:"en-CA",parentLocale:"en-001"},{locale:"en-CC",parentLocale:"en-001"},{locale:"en-CH",parentLocale:"en-150"},{locale:"en-CK",parentLocale:"en-001"},{locale:"en-CM",parentLocale:"en-001"},{locale:"en-CX",parentLocale:"en-001"},{locale:"en-CY",parentLocale:"en-001"},{locale:"en-DE",parentLocale:"en-150"},{locale:"en-DG",parentLocale:"en-001"},{locale:"en-DK",parentLocale:"en-150"},{locale:"en-DM",parentLocale:"en-001"},{locale:"en-Dsrt",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-ER",parentLocale:"en-001"},{locale:"en-FI",parentLocale:"en-150"},{locale:"en-FJ",parentLocale:"en-001"},{locale:"en-FK",parentLocale:"en-001"},{locale:"en-FM",parentLocale:"en-001"},{locale:"en-GB",parentLocale:"en-001"},{locale:"en-GD",parentLocale:"en-001"},{locale:"en-GG",parentLocale:"en-001"},{locale:"en-GH",parentLocale:"en-001"},{locale:"en-GI",parentLocale:"en-001"},{locale:"en-GM",parentLocale:"en-001"},{locale:"en-GU",parentLocale:"en"},{locale:"en-GY",parentLocale:"en-001"},{locale:"en-HK",parentLocale:"en-001"},{locale:"en-IE",parentLocale:"en-001"},{locale:"en-IL",parentLocale:"en-001"},{locale:"en-IM",parentLocale:"en-001"},{locale:"en-IN",parentLocale:"en-001"},{locale:"en-IO",parentLocale:"en-001"},{locale:"en-JE",parentLocale:"en-001"},{locale:"en-JM",parentLocale:"en-001"},{locale:"en-KE",parentLocale:"en-001"},{locale:"en-KI",parentLocale:"en-001"},{locale:"en-KN",parentLocale:"en-001"},{locale:"en-KY",parentLocale:"en-001"},{locale:"en-LC",parentLocale:"en-001"},{locale:"en-LR",parentLocale:"en-001"},{locale:"en-LS",parentLocale:"en-001"},{locale:"en-MG",parentLocale:"en-001"},{locale:"en-MH",parentLocale:"en"},{locale:"en-MO",parentLocale:"en-001"},{locale:"en-MP",parentLocale:"en"},{locale:"en-MS",parentLocale:"en-001"},{locale:"en-MT",parentLocale:"en-001"},{locale:"en-MU",parentLocale:"en-001"},{locale:"en-MW",parentLocale:"en-001"},{locale:"en-MY",parentLocale:"en-001"},{locale:"en-NA",parentLocale:"en-001"},{locale:"en-NF",parentLocale:"en-001"},{locale:"en-NG",parentLocale:"en-001"},{locale:"en-NL",parentLocale:"en-150"},{locale:"en-NR",parentLocale:"en-001"},{locale:"en-NU",parentLocale:"en-001"},{locale:"en-NZ",parentLocale:"en-001"},{locale:"en-PG",parentLocale:"en-001"},{locale:"en-PH",parentLocale:"en-001"},{locale:"en-PK",parentLocale:"en-001"},{locale:"en-PN",parentLocale:"en-001"},{locale:"en-PR",parentLocale:"en"},{locale:"en-PW",parentLocale:"en-001"},{locale:"en-RW",parentLocale:"en-001"},{locale:"en-SB",parentLocale:"en-001"},{locale:"en-SC",parentLocale:"en-001"},{locale:"en-SD",parentLocale:"en-001"},{locale:"en-SE",parentLocale:"en-150"},{locale:"en-SG",parentLocale:"en-001"},{locale:"en-SH",parentLocale:"en-001"},{locale:"en-SI",parentLocale:"en-150"},{locale:"en-SL",parentLocale:"en-001"},{locale:"en-SS",parentLocale:"en-001"},{locale:"en-SX",parentLocale:"en-001"},{locale:"en-SZ",parentLocale:"en-001"},{locale:"en-Shaw",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-TC",parentLocale:"en-001"},{locale:"en-TK",parentLocale:"en-001"},{locale:"en-TO",parentLocale:"en-001"},{locale:"en-TT",parentLocale:"en-001"},{locale:"en-TV",parentLocale:"en-001"},{locale:"en-TZ",parentLocale:"en-001"},{locale:"en-UG",parentLocale:"en-001"},{locale:"en-UM",parentLocale:"en"},{locale:"en-US",parentLocale:"en"},{locale:"en-VC",parentLocale:"en-001"},{locale:"en-VG",parentLocale:"en-001"},{locale:"en-VI",parentLocale:"en"},{locale:"en-VU",parentLocale:"en-001"},{locale:"en-WS",parentLocale:"en-001"},{locale:"en-ZA",parentLocale:"en-001"},{locale:"en-ZM",parentLocale:"en-001"},{locale:"en-ZW",parentLocale:"en-001"}];return e});

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ru=a())}(this,function(){"use strict";var e=[{locale:"ru",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=!t[1],n=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=l?"one":o&&n>=2&&n<=4&&(l<12||l>14)?"few":o&&0==n||o&&n>=5&&n<=9||o&&l>=11&&l<=14?"many":"other"},fields:{year:{displayName:"год",relative:{0:"в этом году",1:"в следующем году","-1":"в прошлом году"},relativeTime:{future:{one:"через {0} год",few:"через {0} года",many:"через {0} лет",other:"через {0} года"},past:{one:"{0} год назад",few:"{0} года назад",many:"{0} лет назад",other:"{0} года назад"}}},month:{displayName:"месяц",relative:{0:"в этом месяце",1:"в следующем месяце","-1":"в прошлом месяце"},relativeTime:{future:{one:"через {0} месяц",few:"через {0} месяца",many:"через {0} месяцев",other:"через {0} месяца"},past:{one:"{0} месяц назад",few:"{0} месяца назад",many:"{0} месяцев назад",other:"{0} месяца назад"}}},day:{displayName:"день",relative:{0:"сегодня",1:"завтра",2:"послезавтра","-2":"позавчера","-1":"вчера"},relativeTime:{future:{one:"через {0} день",few:"через {0} дня",many:"через {0} дней",other:"через {0} дней"},past:{one:"{0} день назад",few:"{0} дня назад",many:"{0} дней назад",other:"{0} дня назад"}}},hour:{displayName:"час",relativeTime:{future:{one:"через {0} час",few:"через {0} часа",many:"через {0} часов",other:"через {0} часа"},past:{one:"{0} час назад",few:"{0} часа назад",many:"{0} часов назад",other:"{0} часа назад"}}},minute:{displayName:"минута",relativeTime:{future:{one:"через {0} минуту",few:"через {0} минуты",many:"через {0} минут",other:"через {0} минуты"},past:{one:"{0} минуту назад",few:"{0} минуты назад",many:"{0} минут назад",other:"{0} минуты назад"}}},second:{displayName:"секунда",relative:{0:"сейчас"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунды",many:"через {0} секунд",other:"через {0} секунды"},past:{one:"{0} секунду назад",few:"{0} секунды назад",many:"{0} секунд назад",other:"{0} секунды назад"}}}}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}];return e});

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var reflect = __webpack_require__(321),
	    messages = {
	  $WELCOME: 'Hello {name}, you have {unreadCount, number} {unreadCount, plural,\n                        one {message}\n                        other {messages}\n                      }',
	  $LOGIN: 'Login',
	  $REGISTER: 'Registration',
	  $LANGUAGE: 'Language',
	  $EN: 'English',
	  $RU: 'Russian',
	  $USER_NAME: 'User name',
	  $USER_PASSWORD: 'User password',
	  $PASSWORD_CONFIRM: 'Confirm password',
	  $LOG_IN: 'Log in',
	  $REGISTER_LOGIN: 'Register and log in'
	},
	    keys = reflect(messages);

	exports.messages = messages;
	exports.keys = keys;

/***/ },

/***/ 321:
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (keys) {
	  return Object.keys(keys).reduce(function (key_a, key_b) {
	    var total = {};
	    if ((typeof key_a === 'undefined' ? 'undefined' : _typeof(key_a)) === 'object') {
	      total = key_a;
	    } else {
	      total[key_a] = key_a;
	    }
	    total[key_b] = key_b;
	    return total;
	  });
	};

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var reflect = __webpack_require__(321),
	    messages = {
	  $WELCOME: '\u041F\u0440\u0438\u0432\u0435\u0442 {name}, \u0443 \u0432\u0430\u0441 {unreadCount, number} {unreadCount, plural,\n                      one {message}\n                      other {messages}\n                    }',

	  $LOGIN: '\u041B\u043E\u0433\u0438\u043D',
	  $REGISTER: '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F',
	  $LANGUAGE: '\u042F\u0437\u044B\u043A',
	  $EN: '\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439',
	  $RU: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439',
	  $USER_NAME: '\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F',
	  $USER_PASSWORD: '\u041F\u0430\u0440\u043E\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F',
	  $PASSWORD_CONFIRM: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F',
	  $LOG_IN: '\u0412\u043E\u0439\u0442\u0438',
	  $REGISTER_LOGIN: '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0432\u043E\u0439\u0442\u0438'
	},
	    keys = reflect(messages);

	exports.messages = messages;
	exports.keys = keys;

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(245);

	var _reactIntl = __webpack_require__(295);

	var _constants = __webpack_require__(287);

	var _common = __webpack_require__(320);

	var _lock_open = __webpack_require__(328);

	var _lock_open2 = _interopRequireDefault(_lock_open);

	var _lock_outline = __webpack_require__(329);

	var _lock_outline2 = _interopRequireDefault(_lock_outline);

	var _person = __webpack_require__(330);

	var _person2 = _interopRequireDefault(_person);

	var _account_actions = __webpack_require__(286);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Account = function Account(props) {
	  var formatMessage = props.intl.formatMessage;


	  return _react2.default.createElement(
	    'div',
	    { className: 'w-100p h-100p p-abs bg-90' },
	    _react2.default.createElement(
	      'div',
	      { className: 'p-fx flex-outer-container flex-dir-col' },
	      _react2.default.createElement(
	        'div',
	        { className: 'w-350px forms-names' },
	        _react2.default.createElement(
	          'button',
	          { onClick: props.onOpenLoginForm,
	            className: props.mode === _constants.MODE.LOGIN ? 'selected ' : '' },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: _common.keys.$LOGIN })
	        ),
	        _react2.default.createElement(
	          'label',
	          null,
	          '|'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: props.onOpenRegisterForm,
	            className: props.mode === _constants.MODE.REGISTER ? 'selected ' : '' },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: _common.keys.$REGISTER })
	        )
	      ),
	      _react2.default.createElement(
	        'form',
	        { className: 'flex-inner-container flex-just-center' },
	        _react2.default.createElement(
	          'div',
	          { className: 'w-100p text-center select-lang' },
	          _react2.default.createElement(
	            'label',
	            null,
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: _common.keys.$LANGUAGE }),
	            ':'
	          ),
	          _react2.default.createElement(
	            'select',
	            { value: props.lang, onChange: props.onChangeLanguage },
	            _react2.default.createElement(
	              'option',
	              { value: _constants.LANG.EN },
	              formatMessage({ id: _common.keys.$EN })
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: _constants.LANG.RU },
	              formatMessage({ id: _common.keys.$RU })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'w-100p p-rel' },
	          _react2.default.createElement('input', { type: 'text', value: props.user_name, placeholder: formatMessage({ id: _common.keys.$USER_NAME }),
	            onChange: props.onChangeUsername }),
	          _react2.default.createElement(
	            'label',
	            { className: 'icon' },
	            _react2.default.createElement(_person2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'w-100p p-rel' },
	          _react2.default.createElement('input', { type: 'password', value: props.password, placeholder: formatMessage({ id: _common.keys.$USER_PASSWORD }),
	            onChange: props.onChangePassword }),
	          _react2.default.createElement(
	            'label',
	            { className: 'icon' },
	            _react2.default.createElement(_lock_outline2.default, null)
	          )
	        ),
	        props.mode === _constants.MODE.REGISTER ? _react2.default.createElement(
	          'div',
	          { className: 'w-100p p-rel' },
	          _react2.default.createElement('input', { type: 'password', value: props.confirm_password,
	            placeholder: formatMessage({ id: _common.keys.$PASSWORD_CONFIRM }), onChange: props.onChangeConfirmPassword }),
	          _react2.default.createElement(
	            'label',
	            { className: 'icon' },
	            _react2.default.createElement(_lock_open2.default, null)
	          )
	        ) : null,
	        props.mode === _constants.MODE.LOGIN ? _react2.default.createElement(
	          'div',
	          { className: 'w-100p text-center' },
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'submit' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: _common.keys.$LOG_IN })
	          )
	        ) : _react2.default.createElement(
	          'div',
	          { className: 'w-100p text-center' },
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'submit' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: _common.keys.$REGISTER_LOGIN })
	          )
	        )
	      )
	    )
	  );
	};

	var mapStateToProps = function mapStateToProps(state, props) {
	  return {
	    intl: props.intl,
	    mode: state.account_mode,
	    user_name: state.user_name,
	    password: state.password,
	    confirm_password: state.confirm_password,
	    lang: state.language
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onOpenRegisterForm: function onOpenRegisterForm(event) {
	      dispatch((0, _account_actions.openRegisterForm)(_constants.MODE.REGISTER));
	    },
	    onOpenLoginForm: function onOpenLoginForm(event) {
	      dispatch((0, _account_actions.openLoginForm)(_constants.MODE.LOGIN));
	    },
	    onChangeUsername: function onChangeUsername(event) {
	      dispatch((0, _account_actions.inputUsername)(event.target.value));
	    },
	    onChangePassword: function onChangePassword(event) {
	      dispatch((0, _account_actions.inputUserPassword)(event.target.value));
	    },
	    onChangeConfirmPassword: function onChangeConfirmPassword(event) {
	      dispatch((0, _account_actions.inputConfirmPassword)(event.target.value));
	    },
	    onChangeLanguage: function onChangeLanguage(event) {
	      dispatch((0, _account_actions.changeLanguage)(event.target.value));
	    }
	  };
	};

	var WrappedAccount = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Account));

	exports.default = WrappedAccount;

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'App password manager55'
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LockOpenIcon = function LockOpenIcon(props, context) {
	  return _react2.default.createElement(
	    "svg",
	    { fill: "#000000", height: "24", viewBox: "0 0 24 24", width: "24" },
	    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
	    _react2.default.createElement("path", {
	      d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" })
	  );
	};
	exports.default = LockOpenIcon;

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LockOutlineIcon = function LockOutlineIcon(props, context) {
	  return _react2.default.createElement(
	    "svg",
	    { fill: "#000000", height: "24", viewBox: "0 0 24 24", width: "24" },
	    _react2.default.createElement("path", { d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" })
	  );
	};
	exports.default = LockOutlineIcon;

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PersonIcon = function PersonIcon(props, context) {
	  return _react2.default.createElement(
	    "svg",
	    { fill: "#000000", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
	    _react2.default.createElement("path", {
	      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }),
	    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
	  );
	};
	exports.default = PersonIcon;

/***/ }

});