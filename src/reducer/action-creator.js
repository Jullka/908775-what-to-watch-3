import AppActionCreator from '../reducer/app/app.js';
import DataActionCreator from '../reducer/data/data.js';
import UserActionCreator from '../reducer/user/user.js';

export default Object.assign({}, AppActionCreator, DataActionCreator, UserActionCreator);
