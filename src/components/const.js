const AppState = {
  PENDING: `pending`,
  ERROR: `error`,
  READY: `ready`
};

const MovieScore = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const ErrorCode = {
  UNAUTHORIZED: 401
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

export {AppState, MovieScore, ErrorCode, AuthorizationStatus, AppRoute};
