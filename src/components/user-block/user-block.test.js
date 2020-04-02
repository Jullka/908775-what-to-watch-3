import React from 'react';
import renderer from 'react-test-renderer';
import {UserBlock} from './user-block.jsx';
import {Provider} from 'react-redux';
import {NameSpace} from '../../reducer/name-space.js';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../const.js';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null
  }
});

it(`UserBlock should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <UserBlock />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
