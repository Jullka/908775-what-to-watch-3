const ALL_GENRES = `All genres`;

export default (movies, selectedGenre) => selectedGenre === ALL_GENRES ?
  movies : movies.filter(({genre}) => genre === selectedGenre);
