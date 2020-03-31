import NameSpace from "../name-space.js";

const getSelectedGenre = (state) => state[NameSpace.APP].selectedGenre;

const getSelectedMovie = (state) => state[NameSpace.APP].selectedMovie;

const getShownMoviesNumber = (state) => state[NameSpace.APP].shownMoviesNumber;

const getAppState = (state) => state[NameSpace.APP].appState;

export {getSelectedGenre, getSelectedMovie, getShownMoviesNumber, getAppState};

