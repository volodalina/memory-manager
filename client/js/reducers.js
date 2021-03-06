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
import  {
  CHANGE_POSITION_CONTAINER,
  ADD_SECTION
} from "./actions/manager_actions"
import  {
  START_OFFSET_PROCESS,
  END_OFFSET_PROCESS,
  ACTIVE_OFFSET_PROCESS,
  RESIZE_SLIDER,
  SCROLL_TO_NEAREST_SLIDE
} from "./actions/slider_actions"
import {MODE, LANG} from './constants'

const INITIAL_STATE = {
  user_name: '',
  password: '',
  confirm_password: '',
  account_mode: MODE.LOGIN,
  language: LANG.EN,
  sections: [],
  unique_id: 0,

  initialPointerX: 0,
  previousPointerX: 0,
  pointerDrag: false,
  viewportWidth: document.documentElement.clientWidth,
  viewportHeight: document.documentElement.clientHeight,
  trackLeft: 0,
  slides: [
    {
      color: 'bg-50',
      widthGrowRate: {
        mediumWidth: 0.4,
        largeWidth: 0.2
      }
    },
    {
      color: 'bg-60',
      widthGrowRate: {
        mediumWidth: 0.6,
        largeWidth: 0.6
      }
    },
    {
      color: 'bg-70',
      widthGrowRate: {
        mediumWidth: 0.4,
        largeWidth: 0.2
      }
    }
  ]
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //account_actions
    case OPEN_REGISTER_FORM:
      return Object.assign({}, state, {
        account_mode: action.account_mode,
        user_name: '',
        password: '',
      });
    case OPEN_LOGIN_FORM:
      return Object.assign({}, state, {
        account_mode: action.account_mode,
        user_name: '',
        password: '',
        confirm_password: '',
      });
    case INPUT_USERNAME:
      return Object.assign({}, state, {
        user_name: action.username,
      });
    case INPUT_USER_PASSWORD:
      return Object.assign({}, state, {
        password: action.user_password,
      });
    case INPUT_CONFIRM_PASSWORD:
      return Object.assign({}, state, {
        confirm_password: action.confirm_password,
      });
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language,
      });
    case SUBMIT_ACCOUNT:
      return Object.assign({}, state, {
        user_name: '',
        password: '',
        confirm_password: '',
      });

    //manager_actions
    case CHANGE_POSITION_CONTAINER:
      let new_state = Object.assign({}, state, {
          sections: [
            ...state.sections]
        }),
        index = state.sections.indexOf(action.section);
      new_state.sections[index].position = action.position;
      return new_state;
    case ADD_SECTION:
      return Object.assign({}, state, {
        unique_id: action.section.id,
        sections: [
          ...state.sections,
          action.section
        ]
      });

    //slide_actions
    case START_OFFSET_PROCESS:
      return Object.assign({}, state, {
        pointerDrag: action.pointerDrag,
        initialPointerX: action.initialPointerX,
        previousPointerX: action.initialPointerX,
      });
    case END_OFFSET_PROCESS:
      return Object.assign({}, state, {
        pointerDrag: action.pointerDrag,
        initialPointerX: 0,
        previousPointerX: 0,
      });
    case ACTIVE_OFFSET_PROCESS:
      return Object.assign({}, state, {
        previousPointerX: action.previousPointerX,
        trackLeft: state.trackLeft - action.difX,
      });
    case RESIZE_SLIDER:
      return Object.assign({}, state, {
        viewportWidth: document.documentElement.clientWidth,
        viewportHeight: document.documentElement.clientHeight
      });
    case SCROLL_TO_NEAREST_SLIDE:
      return Object.assign({}, state, {
        trackLeft: action.newLeftTrack
      });
    default:
      return state;
  }
};

export default reducer;