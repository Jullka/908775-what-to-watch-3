import {connect} from 'react-redux';
import {App} from './app.jsx';
import {getAppState} from '../../reducer/data/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {createRoute} from '../../routes/create-route.js';
import {AppRoute} from '../const.js';
import {getMoviesLikeThis, getMovie} from '../../reducer/data/selectors.js';
import {history} from '../../routes/history.js';


const mapStateToProps = (state) => ({
  appState: getAppState(state),
  getMovie: (id) => getMovie(state, id),
  onPlayMovie: (id) => history.push(createRoute(AppRoute.PLAYER, id)),
  onVideoPlayerExit: () => history.goBack(),
  getMoviesLikeThis: (movie) => getMoviesLikeThis(state, movie),
  onMovieCardClick: ({id}) => history.push(createRoute(AppRoute.FILM, id))
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(UserOperation.checkAuthStatus());
    dispatch(DataOperation.loadMovies());
  },
  login: (authData) => dispatch(UserOperation.login(authData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
