import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list.jsx';

const genres = [`Action`, `Comedy`, `Drama`, `Thriller`];

const selectedGenre = `Drama`;

const onGenreSelect = () => { };


it(`GenresList should render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreSelect={onGenreSelect}
        />,
        {
          createNodeMock: () => ({})
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
