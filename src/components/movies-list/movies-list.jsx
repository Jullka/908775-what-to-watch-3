import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleMovieCardHover = this._handleMovieCardHover.bind(this);
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <SmallMovieCard
            key={movie.id}
            movie={movie}
            onMovieHover={this._handleMovieCardHover}
          />))}
      </div>
    );
  }
  _handleMovieCardHover(movie) {
    this.setState({activeCard: movie});
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      })
  ).isRequired
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies
});

const mapDispatchToProps = () => ({
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
