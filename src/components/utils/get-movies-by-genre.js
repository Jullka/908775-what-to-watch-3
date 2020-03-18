const ALL_GENRES = `All genres`;

const getMoviesByGenre = (movies, selectedGenre) =>
  selectedGenre === ALL_GENRES ?
    movies : movies.filter(({genre}) => genre === selectedGenre);

export {getMoviesByGenre};
