import axios from 'axios';

const BASE_URL = `https://htmlacademy-react-3.appspot.com/wtw`;
const DEFAULT_TIMEOUT = 5000;

export default class Api {

  constructor(onError) {
    this._api = this._createAPI(onError);
  }

  loadMovies() {
    return this._api.get(`/films`)
      .then((response) => response.data);
  }

  loadMovieDetails() {
    return this._api.get(`/films/details`)
      .then((response) => response.data);
  }

  loadComments(movieId) {
    return this._api.get(`/comments/${movieId}`)
      .then((response) => response.data);
  }

  login({login, password}) {
    return this._api.post(`/login`, {
      email: login,
      password
    })
    .then((response) => response.data);
  }

  checkAuthorizationStatus() {
    return this._api.get(`/login`)
      .then((response) => response.data);
  }

  _createAPI() {
    const api = axios.create({
      baseURL: BASE_URL,
      timeout: DEFAULT_TIMEOUT,
      withCredentials: true,
    });

    return api;
  }
}
