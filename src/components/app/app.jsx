import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';

class App extends PureComponent {

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
    const {movieDetails, selectedMovie} = this.props;

    if (selectedMovie) {
      return <MoviePage
        movie={selectedMovie}
      />;
    }

    return (
      <Main
        movieDetails={movieDetails}
      />
    );
  }
}

App.propTypes = {
  movieDetails: PropTypes.shape({
    // id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,

  selectedMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  })
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie
});

const mapDispatchToProps = () => ({
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
