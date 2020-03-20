import React from 'react';
import renderer from 'react-test-renderer';
import {reducer} from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ShowMore from './show-more.jsx';

const handleClick = () => { };
const store = createStore(reducer);

it(`ShowMore should render correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <ShowMore isVisible={true} onClick={handleClick} />
      </Provider>
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
