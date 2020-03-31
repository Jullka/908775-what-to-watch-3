import NameSpace from '../name-space.js';

const getUser = (state) => state[NameSpace.USER].user;

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export {getUser, getAuthorizationStatus};
