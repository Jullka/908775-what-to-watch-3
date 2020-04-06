import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import {getMovieDetails, getMoviesByGenre} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as CommentsOperation} from '../../reducer/review/review.js';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import withErrorsItem from '../hocs/with-error-items/with-error-items.jsx';
import {AuthorizationStatus} from '../const.js';

const MoviePageWrapped = withActiveItem(MoviePage);
const MainWrapped = withActiveItem(Main);
const SignInWrapped = withErrorsItem(SignIn);

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
    const {movies, film, authorizationStatus} = this.props;
    const {showMovieDetails} = this.state;

    if (!showMovieDetails) {
      return (
        <MainWrapped
          authorizationStatus={authorizationStatus}
          film={film}
          onMouseClick={this._clickHandler.bind(this)}
          onMovieHover={movieHoverHandler}
        />
      );
    }

    if (showMovieDetails) {
      return (
        <MoviePageWrapped
          authorizationStatus={authorizationStatus}
          movies={movies}
          film={film}
        />
      );
    }

    return null;
  }

  render() {
    const {film, login, authorizationStatus, sendComment} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainPage()}
          </Route>
          <Route exact path="/dev-review">
            <AddReview
              filmId={1}
              onSubmit={sendComment}
              film={film}/>
          </Route>
          <Route exact path="/dev-film">
            <MainWrapped
              film={film}/>
          </Route>
          <Route exact path="/auth-dev" render={() => {
            if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
              return <SignInWrapped
                onSubmit={login}/>;
            }
            if (authorizationStatus === AuthorizationStatus.AUTH) {
              return this._renderMainPage();
            }
            return null;
          }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  sendComment: PropTypes.func.isRequired,
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
        votes: PropTypes.number,
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
    votes: PropTypes.number,
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
    dispatch(CommentsOperation.sendComment(authData, filmId));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
