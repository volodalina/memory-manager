const
  reflect = require('../reflect'),
  messages = {
    $WELCOME: `Привет {name}, у вас {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`,

    $LOGIN: `Логин`,
    $REGISTER: `Регистрация`,
    $LANGUAGE: `Язык`,
    $EN: `Английский`,
    $RU: `Русский`,
    $USER_NAME: `Имя пользователя`,
    $USER_PASSWORD: `Пароль пользователя`,
    $PASSWORD_CONFIRM: `Подтверждение пароля`,
    $LOG_IN: `Войти`,
    $REGISTER_LOGIN: `Зарегистрировать и войти`,
  },
  keys = reflect(messages);

export {messages, keys};