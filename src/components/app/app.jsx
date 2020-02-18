import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';

// const mouseClickHandler = () => {};
const movieHoverHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._onCardClickHandle = this._onCardClickHandle.bind(this);
  }

  _onCardClickHandle(card) {
    this.setState({activeCard: card});
  }

  _renderMain() {
    const {title, genre, releaseDate, movies, movieDetails} = this.props;
    const {activeCard} = this.state;

    if (!activeCard) {
      return (
        <Main
          title={title}
          genre={genre}
          releaseDate={releaseDate}
          movies={movies}
          onMouseClick={this._onCardClickHandle}
          onMovieHover={movieHoverHandler}/>
      );
    }

    if (activeCard) {
      return (
        <MoviePage
          movieDetails={movieDetails}
        />
      );
    }
    return null;
  }

  render() {
    const {movieDetails} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="//dev-film">
            <MoviePage
              movieDetails={movieDetails}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,

  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  ).isRequired,

  movieDetails: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  })
};

export default App;
