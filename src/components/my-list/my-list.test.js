import React from 'react';
import renderer from 'react-test-renderer';
import {MyList} from './my-list.jsx';
import {films} from '../../mocks/test-mocks.js';
import {BrowserRouter} from 'react-router-dom';
import {AuthorizationStatus} from '../../reducer/user/user.js';

it(`Render MyList`, () => {
  const main = renderer
    .create(
        <BrowserRouter >
          <MyList
            activeItem={null}
            authorizationStatus={AuthorizationStatus}
            user=""
            movies={films}
            onMovieCardClick={()=>{}}
            onMovieFavoriteStatusClick={()=>{}}
            onItemEnterHandler={()=>{}}
            onItemLeave={()=>{}}
            loading={()=>{}}
          />
        </BrowserRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(main).toMatchSnapshot();
});
