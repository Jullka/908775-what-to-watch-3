import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';
import VideoPlayerFull from '../../components/video-player-full/video-player-full.jsx';
import MyList from '../my-list/my-list.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import {getMovieDetails, getMoviesByGenre} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as ReviewOperation} from '../../reducer/review/review.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import SignIn from '../sign-in/sign-in.jsx';

import AddReview from '../add-review/add-review.jsx';
import withErrorItem from '../hocs/with-error-item/with-error-item.jsx';
import {AuthorizationStatus} from '../const.js';
import history from '../../history.js';

const MoviePageWrapped = withActiveItem(MoviePage);
const MainWrapped = withActiveItem(Main);
const SignInWrapped = withErrorItem(SignIn);
const MyListWrapped = withActiveItem(MyList);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._onMovieClick = this._onMovieClick.bind(this);
  }

  _onMovieClick(film) {
    this.props.onItemEnter(film);
    history.push(`/films/${film.id}`);
  }

  render() {
    const {movies, film, authorizationStatus, changeFavoriteStatus, login, sendComment, onItemLeave} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <MainWrapped
              authorizationStatus={authorizationStatus}
              film={film}
              onMovieCardClick={this._onMovieClick}
              onMovieFavoriteStatusClick={changeFavoriteStatus}
            />
          </Route>
          <PrivateRoute
            exact
            path="/mylist"
            render={() => {
              return (
                <MyListWrapped
                  authorizationStatus={authorizationStatus}
                  movies={movies}
                  onMovieCardClick={this._onMovieClick}
                  onMovieFavoriteStatusClick={changeFavoriteStatus}
                />
              );
            }}
          />
          <Route exact path="/login" render={(props) => {
            return (authorizationStatus === AuthorizationStatus.AUTH) ?
              props.history.goBack() :
              <SignInWrapped onSubmit={login} />;
          }} />
          <Route exact path="/films/:id" render={(props) => {
            const selectedMovie = movies.find((item) => item.id === props.match.params.id);
            return selectedMovie && (
              <MoviePageWrapped
                authorizationStatus={authorizationStatus}
                film={selectedMovie}
                movies={movies}
                onMovieCardClick={this._onMovieClick}
                onMovieFavoriteStatusClick={changeFavoriteStatus}
              />
            );
          }} />
          <Route exact path="/player/:id" render={(props) => {
            const selectedMovie = movies.find((item) => item.id === props.match.params.id);
            return selectedMovie && <VideoPlayerFull
              film={selectedMovie}
              onItemLeaveHandler={onItemLeave}
            />;
          }} />
          <PrivateRoute
            exact
            path="/films/:id/review"
            render={(props) => {
              const selectedMovie = movies.find((item) => item.id === props.match.params.id);
              return selectedMovie && (
                <AddReview
                  onSubmit={sendComment}
                  film={selectedMovie}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  sendComment: PropTypes.func.isRequired,
  onItemEnter: PropTypes.func,
  onItemLeave: PropTypes.func,
  changeFavoriteStatus: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        releaseDate: PropTypes.number,
        image: PropTypes.string,
        poster: PropTypes.string,
        background: PropTypes.string,
        video: PropTypes.string,
        runtime: PropTypes.string,
        rating: PropTypes.number,
        score: PropTypes.number,
        director: PropTypes.string,
        description: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        reviews: PropTypes.array,
      })
  ),

  film: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
    image: PropTypes.string,
    poster: PropTypes.string,
    background: PropTypes.string,
    video: PropTypes.string,
    runtime: PropTypes.string,
    rating: PropTypes.number,
    score: PropTypes.number,
    director: PropTypes.string,
    description: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.array,
  }),
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  movies: getMoviesByGenre(state),
  film: getMovieDetails(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  sendComment(authData, filmId) {
    dispatch(ReviewOperation.sendComment(authData, filmId));
  },
  changeFavoriteStatus(filmId, status) {
    dispatch(DataOperation.changeFavoriteStatus(filmId, status));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
