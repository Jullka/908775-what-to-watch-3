import {extend} from '../../utils.js';
import {AuthorizationStatus} from '../../components/const.js';

const SERVER_URL = `https://htmlacademy-react-3.appspot.com/`;

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AVATAR_URL: `SET_AVATAR_URL`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setUser: (user) => {
    return {
      type: ActionType.SET_AVATAR_URL,
      payload: user
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.SET_AVATAR_URL:
      return extend(state, {
        user: `${SERVER_URL}${action.payload}`
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUser(response.data.avatar_url));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api
      .post(`/login`, {
        email: authData.login,
        password: authData.password
      })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUser(response.data.avatar_url));
        window.location = `/`;
      })
      .catch((err) => {
        throw err;
      });
  }
};


export {ActionCreator, ActionType, AuthorizationStatus,
  Operation, reducer,
};
