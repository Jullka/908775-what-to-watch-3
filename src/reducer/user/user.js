import {extend} from '../../utils.js';
import User from '../data/adapter/user.js';
import {AuthorizationStatus} from '../../components/const.js';
import {handleError} from '../utils.js';
import {AppRoute} from '../../components/const.js';
import {history} from '../../routes/history.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null
};

const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  SET_USER: `SET_USER`
};

const ActionCreator = {
  setAuthorizationStatus: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status
    };
  },
  setUser: (user) => {
    return {
      type: ActionType.SET_USER,
      payload: user
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload
      });
    default:
      return state;
  }
};

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.checkAuthorizationStatus()
    .then(User.parseUser)
    .then((user) => {
      dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(user));
    })
    .catch((err) => dispatch(handleError(err)));
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.login(authData)
    .then(User.parseUser)
    .then((user) => {
      dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(user));
      history.push(AppRoute.MAIN);
    })
    .catch((err) => dispatch(handleError(err)));
  }
};

export {ActionType, Operation, reducer};
export default ActionCreator;
