import NameSpace from "../name-space.js";

const NAME_APP = NameSpace.APP;

const getSelectedGenre = (state) => {
  return state[NAME_APP].selectedGenre;
};

const getSelectedMovie = (state) => {
  return state[NAME_APP].selectedMovie;
};

const getShownMoviesNumber = (state) => {
  return state[NAME_APP].shownMoviesNumber;
};

const getAppState = (state) => {
  return state[NAME_APP].appState;
};

export {getSelectedGenre, getSelectedMovie, getShownMoviesNumber, getAppState};

