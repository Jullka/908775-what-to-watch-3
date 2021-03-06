const ErrorCode = {
  UNAUTHORIZED: 401,
};

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const AppRoute = {
  SIGN_IN: `/login`,
  MAIN: `/`,
  PLAYER: `/player/:id`,
  FILM: `/films/:id`,
  MY_LIST: `/mylist`
};

export {ErrorCode, AuthorizationStatus, AppRoute};
