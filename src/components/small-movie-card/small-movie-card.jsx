import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../reducer/action-creator.js';
import VideoPlayer from '../video-player/video-player.jsx';
import {AppRoute} from '../const.js';
import {history} from '../../routes/history.js';

const VIDEO_PLAY_DELAY = 1000;

export const SmallMovieCard = (props) => {
  const {movie, onClick, isActive, onActiveChange, setTimeout, clearTimeout} = props;
  const {title, poster, video} = movie;

  const _handleMouseEnter = () => setTimeout(() => onActiveChange(true), VIDEO_PLAY_DELAY);
  const _handleMouseLeave = () => {
    clearTimeout();
    onActiveChange(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onClick(movie)}
      onMouseEnter={() => _handleMouseEnter()}
      onMouseLeave={() => _handleMouseLeave()}
    >
      <VideoPlayer
        video={video}
        poster={poster}
        isPlaying={isActive}
      />
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => evt.preventDefault()}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  setTimeout: PropTypes.func.isRequired,
  clearTimeout: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(ActionCreator.selectMovie(movie));
    history.push(AppRoute.FILM);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SmallMovieCard);
