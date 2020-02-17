import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from '../movies-list/movies-list.jsx';

const Movies = [
  {
    id: `001`,
    title: `mock-test-Bohemian Rhapsody`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `002`,
    title: `mock-test-Macbeth`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `003`,
    title: `mock-test-Aviator`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `004`,
    title: `mock-test-Revenant`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `005`,
    title: `mock-test-Johnny English`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `006`,
    title: `mock-test-Pulp Fiction`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `007`,
    title: `mock-test-Snatch`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `008`,
    title: `mock-test-Moonrise Kingdom`,
    img: `img/macbeth.jpg`,
  },
];

it(`Render App`, () => {
  const tree = renderer
   .create(<MoviesList
     movies={Movies}
     onMovieHover={() => {}}
   />)
   .toJSON();

  expect(tree).toMatchSnapshot();
});
