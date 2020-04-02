import {NameSpace} from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getUser = (state) => {
  return state[NAME_SPACE].user;
};

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export {getUser, getAuthorizationStatus};
