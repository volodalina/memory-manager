webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(193);

	var _reactRedux = __webpack_require__(249);

	var _redux = __webpack_require__(256);

	var _reducers = __webpack_require__(289);

	var _reducers2 = _interopRequireDefault(_reducers);

	__webpack_require__(293);

	var _language = __webpack_require__(299);

	var _account = __webpack_require__(328);

	var _account2 = _interopRequireDefault(_account);

	var _app = __webpack_require__(332);

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

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(193);

	var _account_actions = __webpack_require__(290);

	var _manager_actions = __webpack_require__(291);

	var _slider_actions = __webpack_require__(335);

	var _constants = __webpack_require__(292);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var INITIAL_STATE = {
	  user_name: '',
	  password: '',
	  confirm_password: '',
	  account_mode: _constants.MODE.LOGIN,
	  language: _constants.LANG.EN,
	  sections: [],
	  unique_id: 0,

	  initialPointerX: 0,
	  currentPointerX: 0,
	  pointerDrag: false,
	  viewportWidth: document.documentElement.clientWidth,
	  viewportHeight: document.documentElement.clientHeight,
	  trackLeft: 0,
	  slides: [{
	    color: 'bg-50'
	  }, {
	    color: 'bg-60'
	  }, {
	    color: 'bg-70'
	  }]
	};

	var reducer = function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];

	  switch (action.type) {
	    //account_actions
	    case _account_actions.OPEN_REGISTER_FORM:
	      return Object.assign({}, state, {
	        account_mode: action.account_mode,
	        user_name: '',
	        password: ''
	      });
	    case _account_actions.OPEN_LOGIN_FORM:
	      return Object.assign({}, state, {
	        account_mode: action.account_mode,
	        user_name: '',
	        password: '',
	        confirm_password: ''
	      });
	    case _account_actions.INPUT_USERNAME:
	      return Object.assign({}, state, {
	        user_name: action.username
	      });
	    case _account_actions.INPUT_USER_PASSWORD:
	      return Object.assign({}, state, {
	        password: action.user_password
	      });
	    case _account_actions.INPUT_CONFIRM_PASSWORD:
	      return Object.assign({}, state, {
	        confirm_password: action.confirm_password
	      });
	    case _account_actions.CHANGE_LANGUAGE:
	      return Object.assign({}, state, {
	        language: action.language
	      });
	    case _account_actions.SUBMIT_ACCOUNT:
	      return Object.assign({}, state, {
	        user_name: '',
	        password: '',
	        confirm_password: ''
	      });

	    //manager_actions
	    case _manager_actions.CHANGE_POSITION_CONTAINER:
	      var new_state = Object.assign({}, state, {
	        sections: [].concat(_toConsumableArray(state.sections))
	      }),
	          index = state.sections.indexOf(action.section);
	      new_state.sections[index].position = action.position;
	      return new_state;
	    case _manager_actions.ADD_SECTION:
	      return Object.assign({}, state, {
	        unique_id: action.section.id,
	        sections: [].concat(_toConsumableArray(state.sections), [action.section])
	      });

	    //slide_actions
	    case _slider_actions.START_OFFSET_PROCESS:
	      return Object.assign({}, state, {
	        pointerDrag: action.pointerDrag,
	        initialPointerX: action.initialPointerX,
	        currentPointerX: action.initialPointerX
	      });
	    case _slider_actions.END_OFFSET_PROCESS:
	      return Object.assign({}, state, {
	        pointerDrag: action.pointerDrag,
	        initialPointerX: 0,
	        currentPointerX: 0
	      });
	    case _slider_actions.ACTIVE_OFFSET_PROCESS:
	      return Object.assign({}, state, {
	        currentPointerX: action.currentPointerX,
	        initialPointerX: action.currentPointerX,
	        trackLeft: state.trackLeft - action.difX
	      });
	    default:
	      return state;
	  }
	};

	exports.default = reducer;

/***/ },

/***/ 290:
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
	exports.submitAccount = submitAccount;
	var OPEN_REGISTER_FORM = exports.OPEN_REGISTER_FORM = 'OPEN_REGISTER_FORM';
	var OPEN_LOGIN_FORM = exports.OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
	var INPUT_USERNAME = exports.INPUT_USERNAME = 'INPUT_USERNAME';
	var INPUT_USER_PASSWORD = exports.INPUT_USER_PASSWORD = 'INPUT_USER_PASSWORD';
	var INPUT_CONFIRM_PASSWORD = exports.INPUT_CONFIRM_PASSWORD = 'INPUT_CONFIRM_PASSWORD';
	var CHANGE_LANGUAGE = exports.CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
	var SUBMIT_ACCOUNT = exports.SUBMIT_ACCOUNT = 'SUBMIT_ACCOUNT';

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
	function submitAccount(username, user_password, confirm_password) {
	  return { type: SUBMIT_ACCOUNT, username: username, user_password: user_password, confirm_password: confirm_password };
	}

/***/ },

/***/ 291:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changePositionContainer = changePositionContainer;
	exports.addSection = addSection;
	var CHANGE_POSITION_CONTAINER = exports.CHANGE_POSITION_CONTAINER = 'CHANGE_POSITION_CONTAINER';
	var ADD_SECTION = exports.ADD_SECTION = 'ADD_SECTION';

	function changePositionContainer(section, position) {
	  return { type: CHANGE_POSITION_CONTAINER, section: section, position: position };
	}
	function addSection(section) {
	  return { type: ADD_SECTION, section: section };
	}

/***/ },

/***/ 292:
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
	},
	    POSITION = {
	  LEFT: 'LEFT',
	  RIGHT: 'RIGHT',
	  CENTER: 'CENTER'
	};

	module.exports = { MODE: MODE, LANG: LANG, NODE_ENV: NODE_ENV, POSITION: POSITION };

/***/ },

/***/ 293:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WrappedLanguage = undefined;

	var _messages_dic;

	var _constants = __webpack_require__(292);

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(249);

	var _reactIntl = __webpack_require__(300);

	var _en = __webpack_require__(323);

	var _en2 = _interopRequireDefault(_en);

	var _ru = __webpack_require__(324);

	var _ru2 = _interopRequireDefault(_ru);

	var _common = __webpack_require__(325);

	var _common2 = __webpack_require__(327);

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

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.en=a())}(this,function(){"use strict";var e=[{locale:"en",pluralRuleFunction:function(e,a){var n=String(e).split("."),l=!n[1],o=Number(n[0])==e,t=o&&n[0].slice(-1),r=o&&n[0].slice(-2);return a?1==t&&11!=r?"one":2==t&&12!=r?"two":3==t&&13!=r?"few":"other":1==e&&l?"one":"other"},fields:{year:{displayName:"year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}},month:{displayName:"month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},day:{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},hour:{displayName:"hour",relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},minute:{displayName:"minute",relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},second:{displayName:"second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}}}},{locale:"en-001",parentLocale:"en"},{locale:"en-150",parentLocale:"en-001"},{locale:"en-AG",parentLocale:"en-001"},{locale:"en-AI",parentLocale:"en-001"},{locale:"en-AS",parentLocale:"en"},{locale:"en-AT",parentLocale:"en-150"},{locale:"en-AU",parentLocale:"en-001"},{locale:"en-BB",parentLocale:"en-001"},{locale:"en-BE",parentLocale:"en-001"},{locale:"en-BI",parentLocale:"en"},{locale:"en-BM",parentLocale:"en-001"},{locale:"en-BS",parentLocale:"en-001"},{locale:"en-BW",parentLocale:"en-001"},{locale:"en-BZ",parentLocale:"en-001"},{locale:"en-CA",parentLocale:"en-001"},{locale:"en-CC",parentLocale:"en-001"},{locale:"en-CH",parentLocale:"en-150"},{locale:"en-CK",parentLocale:"en-001"},{locale:"en-CM",parentLocale:"en-001"},{locale:"en-CX",parentLocale:"en-001"},{locale:"en-CY",parentLocale:"en-001"},{locale:"en-DE",parentLocale:"en-150"},{locale:"en-DG",parentLocale:"en-001"},{locale:"en-DK",parentLocale:"en-150"},{locale:"en-DM",parentLocale:"en-001"},{locale:"en-Dsrt",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-ER",parentLocale:"en-001"},{locale:"en-FI",parentLocale:"en-150"},{locale:"en-FJ",parentLocale:"en-001"},{locale:"en-FK",parentLocale:"en-001"},{locale:"en-FM",parentLocale:"en-001"},{locale:"en-GB",parentLocale:"en-001"},{locale:"en-GD",parentLocale:"en-001"},{locale:"en-GG",parentLocale:"en-001"},{locale:"en-GH",parentLocale:"en-001"},{locale:"en-GI",parentLocale:"en-001"},{locale:"en-GM",parentLocale:"en-001"},{locale:"en-GU",parentLocale:"en"},{locale:"en-GY",parentLocale:"en-001"},{locale:"en-HK",parentLocale:"en-001"},{locale:"en-IE",parentLocale:"en-001"},{locale:"en-IL",parentLocale:"en-001"},{locale:"en-IM",parentLocale:"en-001"},{locale:"en-IN",parentLocale:"en-001"},{locale:"en-IO",parentLocale:"en-001"},{locale:"en-JE",parentLocale:"en-001"},{locale:"en-JM",parentLocale:"en-001"},{locale:"en-KE",parentLocale:"en-001"},{locale:"en-KI",parentLocale:"en-001"},{locale:"en-KN",parentLocale:"en-001"},{locale:"en-KY",parentLocale:"en-001"},{locale:"en-LC",parentLocale:"en-001"},{locale:"en-LR",parentLocale:"en-001"},{locale:"en-LS",parentLocale:"en-001"},{locale:"en-MG",parentLocale:"en-001"},{locale:"en-MH",parentLocale:"en"},{locale:"en-MO",parentLocale:"en-001"},{locale:"en-MP",parentLocale:"en"},{locale:"en-MS",parentLocale:"en-001"},{locale:"en-MT",parentLocale:"en-001"},{locale:"en-MU",parentLocale:"en-001"},{locale:"en-MW",parentLocale:"en-001"},{locale:"en-MY",parentLocale:"en-001"},{locale:"en-NA",parentLocale:"en-001"},{locale:"en-NF",parentLocale:"en-001"},{locale:"en-NG",parentLocale:"en-001"},{locale:"en-NL",parentLocale:"en-150"},{locale:"en-NR",parentLocale:"en-001"},{locale:"en-NU",parentLocale:"en-001"},{locale:"en-NZ",parentLocale:"en-001"},{locale:"en-PG",parentLocale:"en-001"},{locale:"en-PH",parentLocale:"en-001"},{locale:"en-PK",parentLocale:"en-001"},{locale:"en-PN",parentLocale:"en-001"},{locale:"en-PR",parentLocale:"en"},{locale:"en-PW",parentLocale:"en-001"},{locale:"en-RW",parentLocale:"en-001"},{locale:"en-SB",parentLocale:"en-001"},{locale:"en-SC",parentLocale:"en-001"},{locale:"en-SD",parentLocale:"en-001"},{locale:"en-SE",parentLocale:"en-150"},{locale:"en-SG",parentLocale:"en-001"},{locale:"en-SH",parentLocale:"en-001"},{locale:"en-SI",parentLocale:"en-150"},{locale:"en-SL",parentLocale:"en-001"},{locale:"en-SS",parentLocale:"en-001"},{locale:"en-SX",parentLocale:"en-001"},{locale:"en-SZ",parentLocale:"en-001"},{locale:"en-Shaw",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-TC",parentLocale:"en-001"},{locale:"en-TK",parentLocale:"en-001"},{locale:"en-TO",parentLocale:"en-001"},{locale:"en-TT",parentLocale:"en-001"},{locale:"en-TV",parentLocale:"en-001"},{locale:"en-TZ",parentLocale:"en-001"},{locale:"en-UG",parentLocale:"en-001"},{locale:"en-UM",parentLocale:"en"},{locale:"en-US",parentLocale:"en"},{locale:"en-VC",parentLocale:"en-001"},{locale:"en-VG",parentLocale:"en-001"},{locale:"en-VI",parentLocale:"en"},{locale:"en-VU",parentLocale:"en-001"},{locale:"en-WS",parentLocale:"en-001"},{locale:"en-ZA",parentLocale:"en-001"},{locale:"en-ZM",parentLocale:"en-001"},{locale:"en-ZW",parentLocale:"en-001"}];return e});

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ru=a())}(this,function(){"use strict";var e=[{locale:"ru",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=!t[1],n=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=l?"one":o&&n>=2&&n<=4&&(l<12||l>14)?"few":o&&0==n||o&&n>=5&&n<=9||o&&l>=11&&l<=14?"many":"other"},fields:{year:{displayName:"год",relative:{0:"в этом году",1:"в следующем году","-1":"в прошлом году"},relativeTime:{future:{one:"через {0} год",few:"через {0} года",many:"через {0} лет",other:"через {0} года"},past:{one:"{0} год назад",few:"{0} года назад",many:"{0} лет назад",other:"{0} года назад"}}},month:{displayName:"месяц",relative:{0:"в этом месяце",1:"в следующем месяце","-1":"в прошлом месяце"},relativeTime:{future:{one:"через {0} месяц",few:"через {0} месяца",many:"через {0} месяцев",other:"через {0} месяца"},past:{one:"{0} месяц назад",few:"{0} месяца назад",many:"{0} месяцев назад",other:"{0} месяца назад"}}},day:{displayName:"день",relative:{0:"сегодня",1:"завтра",2:"послезавтра","-2":"позавчера","-1":"вчера"},relativeTime:{future:{one:"через {0} день",few:"через {0} дня",many:"через {0} дней",other:"через {0} дней"},past:{one:"{0} день назад",few:"{0} дня назад",many:"{0} дней назад",other:"{0} дня назад"}}},hour:{displayName:"час",relativeTime:{future:{one:"через {0} час",few:"через {0} часа",many:"через {0} часов",other:"через {0} часа"},past:{one:"{0} час назад",few:"{0} часа назад",many:"{0} часов назад",other:"{0} часа назад"}}},minute:{displayName:"минута",relativeTime:{future:{one:"через {0} минуту",few:"через {0} минуты",many:"через {0} минут",other:"через {0} минуты"},past:{one:"{0} минуту назад",few:"{0} минуты назад",many:"{0} минут назад",other:"{0} минуты назад"}}},second:{displayName:"секунда",relative:{0:"сейчас"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунды",many:"через {0} секунд",other:"через {0} секунды"},past:{one:"{0} секунду назад",few:"{0} секунды назад",many:"{0} секунд назад",other:"{0} секунды назад"}}}}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}];return e});

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var reflect = __webpack_require__(326),
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

/***/ 326:
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

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var reflect = __webpack_require__(326),
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

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(249);

	var _reactIntl = __webpack_require__(300);

	var _reactRouter = __webpack_require__(193);

	var _constants = __webpack_require__(292);

	var _common = __webpack_require__(325);

	var _lock_open = __webpack_require__(329);

	var _lock_open2 = _interopRequireDefault(_lock_open);

	var _lock_outline = __webpack_require__(330);

	var _lock_outline2 = _interopRequireDefault(_lock_outline);

	var _person = __webpack_require__(331);

	var _person2 = _interopRequireDefault(_person);

	var _account_actions = __webpack_require__(290);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var input_username = void 0,
	    input_password = void 0,
	    input_confirm_password = void 0;

	var Account = function Account(props) {
	  var formatMessage = props.intl.formatMessage;


	  return _react2.default.createElement(
	    'div',
	    { className: 'wh-100p-abs bg-90' },
	    _react2.default.createElement(
	      'div',
	      { className: 'p-fx flex-col-row-center-wh100p' },
	      _react2.default.createElement(
	        'div',
	        { className: 'choose-form-name' },
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
	        { className: 'account', onSubmit: props.onSubmit },
	        _react2.default.createElement(
	          'div',
	          { className: 'w-100p text-center select-lang' },
	          _react2.default.createElement(
	            'label',
	            { className: 'color-white margin-r-10px' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: _common.keys.$LANGUAGE }),
	            ':'
	          ),
	          _react2.default.createElement(
	            'select',
	            { value: props.lang, onChange: props.onChangeLanguage, className: 'font-family-inh' },
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
	          { className: 'w-100p-rel' },
	          _react2.default.createElement('input', { type: 'text', value: props.user_name, placeholder: formatMessage({ id: _common.keys.$USER_NAME }),
	            onChange: props.onChangeUsername, className: 'input-textA100-with-icon',
	            ref: function ref(node) {
	              input_username = node;
	            } }),
	          _react2.default.createElement(
	            'label',
	            { className: 'label-icon-for-input' },
	            _react2.default.createElement(_person2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'w-100p-rel' },
	          _react2.default.createElement('input', { type: 'password', value: props.password, placeholder: formatMessage({ id: _common.keys.$USER_PASSWORD }),
	            onChange: props.onChangePassword, className: 'input-textA100-with-icon',
	            ref: function ref(node) {
	              input_password = node;
	            } }),
	          _react2.default.createElement(
	            'label',
	            { className: 'label-icon-for-input' },
	            _react2.default.createElement(_lock_outline2.default, null)
	          )
	        ),
	        props.mode === _constants.MODE.REGISTER ? _react2.default.createElement(
	          'div',
	          { className: 'w-100p p-rel' },
	          _react2.default.createElement('input', { type: 'password', value: props.confirm_password, className: 'input-textA100-with-icon',
	            placeholder: formatMessage({ id: _common.keys.$PASSWORD_CONFIRM }), onChange: props.onChangeConfirmPassword,
	            ref: function ref(node) {
	              input_confirm_password = node;
	            } }),
	          _react2.default.createElement(
	            'label',
	            { className: 'label-icon-for-input' },
	            _react2.default.createElement(_lock_open2.default, null)
	          )
	        ) : null,
	        props.mode === _constants.MODE.LOGIN ? _react2.default.createElement(
	          'div',
	          { className: 'w-100p text-center' },
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'btn-square-A700' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: _common.keys.$LOG_IN })
	          )
	        ) : _react2.default.createElement(
	          'div',
	          { className: 'w-100p text-center' },
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'btn-square-A700' },
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
	    },

	    onSubmit: function onSubmit(event) {
	      event.preventDefault();

	      var confirm_password = input_confirm_password ? input_confirm_password.value : null;
	      dispatch((0, _account_actions.submitAccount)(input_username.value, input_password.value, confirm_password));
	      _reactRouter.browserHistory.push('/manager');
	    }
	  };
	};

	var WrappedAccount = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Account));

	exports.default = WrappedAccount;

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(11);

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

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(11);

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

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(11);

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

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(249);

	var _reactIntl = __webpack_require__(300);

	var _constants = __webpack_require__(292);

	var _slider_actions = __webpack_require__(335);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(props) {
	  var viewportWidth = props.viewportWidth,
	      viewportHeight = props.viewportHeight,
	      trackLeft = props.trackLeft,
	      slides = props.slides,
	      initialPointerX = props.initialPointerX,
	      currentPointerX = props.currentPointerX,
	      pointerDrag = props.pointerDrag,
	      onNextSlide = props.onNextSlide,
	      onStartOffsetProcess = props.onStartOffsetProcess,
	      onEndOffsetProcess = props.onEndOffsetProcess,
	      onActiveOffsetProcess = props.onActiveOffsetProcess;


	  var slideWidth = calcSlider(viewportWidth),
	      trackWidth = slideWidth * slides.length;

	  return _react2.default.createElement(
	    'div',
	    { id: 'slider' },
	    _react2.default.createElement(
	      'div',
	      { id: 'viewport', className: 'viewport', style: { width: viewportWidth, height: viewportHeight },
	        onMouseDown: onStartOffsetProcess.bind(undefined, pointerDrag),
	        onMouseUp: onEndOffsetProcess,
	        onMouseMove: onActiveOffsetProcess.bind(undefined, pointerDrag, initialPointerX) },
	      _react2.default.createElement(
	        'div',
	        { className: 'track', style: { transform: 'translate3d(' + trackLeft + 'px, 0px, 0px)', width: trackWidth } },
	        slides.map(function (_slide, index) {
	          return _react2.default.createElement(
	            'div',
	            { key: index, className: 'slide ' + _slide.color, style: { width: slideWidth } },
	            index
	          );
	        })
	      ),
	      _react2.default.createElement(
	        'div',
	        { id: 'prev-next-btns', className: 'slide-btns' },
	        _react2.default.createElement(
	          'div',
	          { id: 'prev-btn', className: 'prev-btn' },
	          _react2.default.createElement(
	            'button',
	            { onClick: onNextSlide.bind(undefined, initialPointerX) },
	            'Prev'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'next-btn', className: 'next-btn' },
	          _react2.default.createElement(
	            'button',
	            null,
	            'Next'
	          )
	        )
	      )
	    )
	  );
	};

	function calcSlider(viewportWidth) {
	  if (viewportWidth > 992) {
	    return viewportWidth / 3;
	  } else if (viewportWidth > 768) {
	    return viewportWidth / 2;
	  }
	  return viewportWidth;
	}

	var mapStateToProps = function mapStateToProps(state, props) {
	  return {
	    viewportWidth: state.viewportWidth,
	    viewportHeight: state.viewportHeight,
	    trackLeft: state.trackLeft,
	    initialPointerX: state.initialPointerX,
	    currentPointerX: state.currentPointerX,
	    pointerDrag: state.pointerDrag,
	    slides: state.slides
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onStartOffsetProcess: function onStartOffsetProcess(pointerDrag, event) {
	      if (pointerDrag) return;
	      dispatch((0, _slider_actions.startOffsetProcess)(true, event.clientX));
	    },
	    onEndOffsetProcess: function onEndOffsetProcess(event) {
	      dispatch((0, _slider_actions.endOffsetProcess)(false));
	    },
	    onActiveOffsetProcess: function onActiveOffsetProcess(pointerDrag, initialPointerX, event) {
	      if (pointerDrag) {
	        dispatch((0, _slider_actions.activeOffsetProcess)(event.clientX, initialPointerX));
	      }
	    },
	    onNextSlide: function onNextSlide(pointerX, pointerDrag, event) {
	      dispatch((0, _slider_actions.endOffsetProcess)(false));
	    }
	  };
	};

	var WrappedApp = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

	exports.default = WrappedApp;

/***/ },

/***/ 335:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nextSlide = nextSlide;
	exports.previousSlide = previousSlide;
	exports.startOffsetProcess = startOffsetProcess;
	exports.endOffsetProcess = endOffsetProcess;
	exports.activeOffsetProcess = activeOffsetProcess;
	var NEXT_SLIDE = exports.NEXT_SLIDE = 'NEXT_SLIDE';
	var PREVIOUS_SLIDE = exports.PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
	var START_OFFSET_PROCESS = exports.START_OFFSET_PROCESS = 'START_OFFSET_PROCESS';
	var END_OFFSET_PROCESS = exports.END_OFFSET_PROCESS = 'END_OFFSET_PROCESS';
	var ACTIVE_OFFSET_PROCESS = exports.ACTIVE_OFFSET_PROCESS = 'ACTIVE_OFFSET_PROCESS';

	function nextSlide(section, position) {
	  return { type: NEXT_SLIDE, section: section, position: position };
	}
	function previousSlide(section) {
	  return { type: PREVIOUS_SLIDE, section: section };
	}

	function startOffsetProcess(pointerDrag, initialPointerX) {
	  return { type: START_OFFSET_PROCESS, pointerDrag: pointerDrag, initialPointerX: initialPointerX };
	}

	function endOffsetProcess(pointerDrag) {
	  return { type: END_OFFSET_PROCESS, pointerDrag: pointerDrag };
	}

	function activeOffsetProcess(currentPointerX, initialPointerX) {
	  var difX = initialPointerX - currentPointerX;
	  return { type: ACTIVE_OFFSET_PROCESS, currentPointerX: currentPointerX, difX: difX };
	}

/***/ }

});