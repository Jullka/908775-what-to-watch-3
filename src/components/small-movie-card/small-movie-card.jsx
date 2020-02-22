import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';


const SmallMovieCard = (props) => {

  const {title, img, video, isPlaying, onMovieHover} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={onMovieHover}>
      <div className="small-movie-card__image">
        {isPlaying ?
          <VideoPlayer src={video} poster={img} isPlaying={isPlaying}/>
          : <img src={img} alt={title} width="280" height="175"/>}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMovieHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;
