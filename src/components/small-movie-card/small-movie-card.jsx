import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {movie, handleTitleClick, handleCardOver} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleCardOver(movie)}>
      <div className="small-movie-card__image">
        <img src={movie.img} alt={movie.title} width="280" height="175" />
      </div>
      <h3 onClick={handleTitleClick} className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }),
  handleTitleClick: PropTypes.func.isRequired,
  handleCardOver: PropTypes.func.isRequired
};

export default SmallMovieCard;

