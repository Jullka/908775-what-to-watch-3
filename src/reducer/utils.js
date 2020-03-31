import AppActionCreator from '../reducer/app/app.js';
import UserActionCreator from '../reducer/user/user.js';
import {AppState, AuthorizationStatus, ErrorCode} from '../components/const.js';

const handleError = (err) => (dispatch) => {
  if (err.response.status === ErrorCode.UNAUTHORIZED) {
    return dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
  }

  return dispatch(AppActionCreator.changeAppState(AppState.ERROR));
};

export {handleError};
