import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {getMoviesCount, getMoviesByGenre} from '../../reducer/data/selectors.js';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, moviesCount, onItemEnter, onItemLeave, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.slice(0, moviesCount).map((movie) => (
          <SmallMovieCard
            film={movie}
            key={movie.id}
            onMovieCardClick={onMovieCardClick}
            onMovieHover={onItemEnter}
            onMovieLeave={onItemLeave}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
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
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              rating: PropTypes.number.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
              }).isRequired,
              text: PropTypes.string.isRequired,
            })),
      })),

  moviesCount: PropTypes.number.isRequired,
  onMovieCardClick: PropTypes.func,
  onItemEnter: PropTypes.func.isRequired,
  onItemLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state),
  moviesCount: getMoviesCount(state),
});

export {MoviesList};

export default connect(mapStateToProps)(MoviesList);
