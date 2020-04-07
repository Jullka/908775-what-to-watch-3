import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player.jsx';
import withVideo from '../hocs/with-video/with-video.jsx';

const VideoPlayerWrapped = withVideo(VideoPlayer);

const SmallMovieCard = (props) => {
  const {film, onMovieCardClick} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => {
        onMovieCardClick(film);
      }}>
      <VideoPlayerWrapped
        isPlaying={false}
        poster={film.image}
        src={film.video}
      />
      <h3 className="small-movie-card__title">
        <Link to={`/films/` + film.id} className="small-movie-card__link">{film.title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
    image: PropTypes.string,
    video: PropTypes.string,
    poster: PropTypes.string,
    background: PropTypes.string,
  }).isRequired,

  onMovieCardClick: PropTypes.func,
};

export default SmallMovieCard;
