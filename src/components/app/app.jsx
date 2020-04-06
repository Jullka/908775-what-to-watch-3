import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import {getMovieDetails, getMoviesByGenre} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import SignIn from '../sign-in/sign-in.jsx';
// import AddReview from '../add-review/add-review.jsx';
import withErrorItem from '../hocs/with-error-item/with-error-item.jsx';
import {AuthorizationStatus} from '../const.js';
import history from '../../history.js';

const MoviePageWrapped = withActiveItem(MoviePage);
const MainWrapped = withActiveItem(Main);
const SignInWrapped = withErrorItem(SignIn);

const movieHoverHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showMovieDetails: false
    };
  }

  _clickHandler() {
    this.setState((state) => ({
      showMovieDetails: !state.showMovieDetails
    }));
  }

  _renderMainPage() {
    const {movies, film, authorizationStatus, changeFavoriteMovieStatus} = this.props;
    const {showMovieDetails} = this.state;

    if (!showMovieDetails) {
      return (
        <MainWrapped
          authorizationStatus={authorizationStatus}
          film={film}
          onMouseClick={this._clickHandler.bind(this)}
          onMovieHover={movieHoverHandler}
          onMovieFavoriteStatusClick={changeFavoriteMovieStatus}
        />
      );
    }

    if (showMovieDetails) {
      return (
        <MoviePageWrapped
          authorizationStatus={authorizationStatus}
          movies={movies}
          film={film}
          onMovieFavoriteStatusClick={changeFavoriteMovieStatus}
        />
      );
    }

    return null;
  }

  render() {
    const {login, authorizationStatus} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            {this._renderMainPage()}
          </Route>
          <Route exact path="/login" render={() => {
            return (authorizationStatus === AuthorizationStatus.AUTH) ?
              <Redirect to="/" /> :
              <SignInWrapped onSubmit={login} />;
          }}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  changeFavoriteMovieStatus: PropTypes.func.isRequired,
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
  changeFavoriteMovieStatus(filmId, status) {
    dispatch(DataOperation.changeFavoriteStatus(filmId, status));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
