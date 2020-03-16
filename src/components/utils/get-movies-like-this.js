import {Movies} from '../../mocks/movies.js';

const MOVIES_LIKE_THIS_MAX_LENGTH = 4;

export default (movie) => Movies.filter((item) => item.genre === movie.genre).slice(0, MOVIES_LIKE_THIS_MAX_LENGTH);
