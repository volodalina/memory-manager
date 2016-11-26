const
  reflect = require('../reflect'),
  messages = {
    $WELCOME: `Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                        one {message}
                        other {messages}
                      }`,
    $LOGIN: `Login`,
    $REGISTER: `Registration`,
    $LANGUAGE: `Language`,
    $EN: `English`,
    $RU: `Russian`,
    $USER_NAME: `User name`,
    $USER_PASSWORD: `User password`,
    $PASSWORD_CONFIRM: `Confirm password`,
    $LOG_IN: `Log in`,
    $REGISTER_LOGIN: `Register and log in`,
  },
  keys = reflect(messages);

export {messages, keys};