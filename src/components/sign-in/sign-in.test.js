import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';
// import {Router} from 'react-router-dom';
// import {history} from '../../routes/history.js';

it(`SignIn should render correctly`, () => {
  const tree = renderer
    .create(
        <SignIn
          onSubmit={() => {}}
          onHandleSubmit={() => {}}
          loginError={false}
          passwordError={false}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
