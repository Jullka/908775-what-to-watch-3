const MAX_GENRES_COUNT = 9;

export default (movies) =>
  [...new Set(movies.map(({genre}) => genre))].slice(0, MAX_GENRES_COUNT);
