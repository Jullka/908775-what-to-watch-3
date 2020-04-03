import ActionCreator from '../reducer/action-creator.js';
import {AppState, AuthorizationStatus, ErrorCode} from '../components/const.js';

const handleError = (err) => (dispatch) => {
  if (err.response.status === ErrorCode.UNAUTHORIZED) {
    return dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
  }

  return dispatch(ActionCreator.changeAppState(AppState.ERROR));
};

export {handleError};
