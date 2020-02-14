import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };

    this.handleCardOver = this.handleCardOver.bind(this);
  }

  handleCardOver(movie) {
    this.setState({
      activeCard: movie
    });
  }

  render() {
    const {movies, handleTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map(({title, img}) => (
          <SmallMovieCard key={title} title={title} img={img} onMouseOver={this.handleCardOver} handleTitleClick={handleTitleClick}/>
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })),
  handleCardOver: PropTypes.func,
  handleTitleClick: PropTypes.func
};

export default MoviesList;
