import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';
import VideoPlayerFull from '../video-player-full/video-player-full.jsx';
import {GameScreen} from '../const.js';
import withVideo from '../hocs/with-video/with-video.js';

const VideoPlayerFullWrapper = withVideo(VideoPlayerFull);

class App extends PureComponent {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="//dev-movie-page">
            <MoviePage/>
          </Route>
          <Route exact path="/dev-player">
            <VideoPlayerFullWrapper />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {gameScreen} = this.props;

    switch (gameScreen) {
      case GameScreen.MOVIE_DETAILS:
        return <MoviePage />;
      case GameScreen.VIDEO_PLAYER:
        return <VideoPlayerFullWrapper />;
      case GameScreen.MAIN:
      default:
        return <Main />;
    }
  }
}

App.propTypes = {
  gameScreen: PropTypes.string.isRequired,
  selectedMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  })
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
  gameScreen: state.gameScreen
});

const mapDispatchToProps = () => ({
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
