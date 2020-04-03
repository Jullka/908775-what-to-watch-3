import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
// import {connect} from 'react-redux';
import {MoviePage} from '../movie-page/movie-page.jsx';
import {Main} from '../main/main.jsx';
import {VideoPlayerFull} from '../video-player-full/video-player-full.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';
// import {PrivateRoute} from '../private-route/private-route.jsx';
import {AppState, AppRoute} from '../const.js';
import withVideo from '../hocs/with-video/with-video.js';
// import {getAppState} from '../../reducer/app/selectors.js';
// import {Operation as DataOperation} from '../../reducer/data/data.js';
// import {Operation as UserOperation} from '../../reducer/user/user.js';
// import {history} from '../../routes/history.js';
// import {createRoute} from '../../routes/create-route.js';
// import {getMoviesLikeThis, getMovie} from '../../reducer/data/selectors.js';

const VideoPlayerFullWrapper = withVideo(VideoPlayerFull);

class App extends PureComponent {

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  render() {
    const {login, appState, getMovie, onPlayMovie, onVideoPlayerExit, getMoviesLikeThis, onMovieCardClick} = this.props;

    switch (appState) {
      case AppState.PENDING:
      default:
        return null;
      case AppState.ERROR:
      case AppState.READY:

        return (
          <Router history={history}>
            <Switch>

              <Route exact path={AppRoute.MAIN} render={() => {
                return <Main
                  onPlayMovie={onPlayMovie}
                  onMovieCardClick={onMovieCardClick}/>;
              }} />

              <Route exact path={AppRoute.SIGN_IN}>
                <SignIn onSubmit={login} />
              </Route>

              <Route exact path={AppRoute.FILM}
                render={(props) => {
                  const {id: movieId} = props.match.params;
                  const movie = getMovie(movieId);
                  return <MoviePage
                    movie={movie}
                    moviesLikeThis={getMoviesLikeThis(movie)}
                    onPlayMovie={() => onPlayMovie(movieId)}
                    onMovieCardClick={onMovieCardClick}
                  />;
                }}
              />

              <Route exact path={AppRoute.PLAYER} render={(props) => {
                const {id: movieId} = props.match.params;
                const {title, runTime, video, bigPoster} = getMovie(movieId);
                return <VideoPlayerFullWrapper
                  title={title} runTime={runTime} video={video} bigPoster={bigPoster}
                  onExit={onVideoPlayerExit}
                />;
              }}/>

              {/* <PrivateRoute exact path={AppRoute.MY_LIST}
                render={() => <h1>My secret list!</h1>}/> */}
            </Switch>
          </Router>
        );
    }
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  appState: PropTypes.string.isRequired,
  getMovie: PropTypes.func.isRequired,
  onPlayMovie: PropTypes.func.isRequired,
  onVideoPlayerExit: PropTypes.func.isRequired,
  getMoviesLikeThis: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

// const mapStateToProps = (state) => ({
//   appState: getAppState(state),
//   getMovie: (id) => getMovie(state, id),
//   onPlayMovie: (id) => history.push(createRoute(AppRoute.PLAYER, id)),
//   onVideoPlayerExit: () => history.goBack(),
//   getMoviesLikeThis: (movie) => getMoviesLikeThis(state, movie),
//   onMovieCardClick: ({id}) => history.push(createRoute(AppRoute.FILM, id))
// });

// const mapDispatchToProps = (dispatch) => ({
//   init: () => {
//     dispatch(UserOperation.checkAuthStatus());
//     dispatch(DataOperation.loadMovies());
//   },
//   login: (authData) => dispatch(UserOperation.login(authData))
// });

export {App};
// export default connect(mapStateToProps, mapDispatchToProps)(App);
