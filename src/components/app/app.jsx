import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  render() {
    const {movieDetails} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="//dev-movie-page">
            <MoviePage
              movie={movieDetails}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {movieDetails, movies} = this.props;
    const {activeCard} = this.state;

    if (activeCard) {
      return <MoviePage
        movie={this.state.activeCard}
      />;
    }

    return (
      <Main
        movieDetails={movieDetails}
        movies={movies}
        onMovieClick={(movie) => {
          this.setState({activeCard: movie});
        }}
      />
    );
  }
}

App.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,

  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })
  ).isRequired
};

export default App;
