import {extend} from "../utils.js";
import {Movies} from '../mocks/movies.js';

const initialState = {
  selectedGenre: `All genres`,
  Movies
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType};
