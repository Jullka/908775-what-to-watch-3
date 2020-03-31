import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {MoviePage} from '../movie-page/movie-page.jsx';
import {Main} from '../main/main.jsx';
import {VideoPlayerFull} from '../video-player-full/video-player-full.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';
import {PrivateRoute} from '../private-route/private-route.jsx';
import {AppState, AppRoute} from '../const.js';
import withVideo from '../hocs/with-video/with-video.js';
import {getAppState, getSelectedMovie} from '../../reducer/app/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {history} from '../../routes/history.js';

const VideoPlayerFullWrapper = withVideo(VideoPlayerFull);

class App extends PureComponent {

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  render() {
    const {login, appState} = this.props;

    switch (appState) {
      case AppState.PENDING:
      default:
        return null;
      case AppState.ERROR:
        return <h1>Something bad just happend!</h1>;
      case AppState.READY:

        return (
          <Router history={history}>
            <Switch>
              <Route exact path={AppRoute.MAIN}>
                <Main />
              </Route>
              <Route exact path={AppRoute.SIGN_IN}>
                <SignIn onSubmit={login} />
              </Route>
              <Route exact path={AppRoute.FILM}>
                <MoviePage />
              </Route>
              <Route exact path={AppRoute.PLAYER}>
                <VideoPlayerFullWrapper />
              </Route>
              <PrivateRoute exact path={AppRoute.MY_LIST}
                render={() => <h1>My secret list!</h1>}/>
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
  selectedMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  })
};

const mapStateToProps = (state) => ({
  appState: getAppState(state),
  selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(UserOperation.checkAuthStatus());
    dispatch(DataOperation.loadMovies());
  },
  login: (authData) => {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
