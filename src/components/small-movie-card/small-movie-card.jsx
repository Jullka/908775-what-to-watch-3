import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
import VideoPlayer from '../video-player/video-player.jsx';

export class SmallMovieCard extends PureComponent {
  render() {
    const {movie, onClick, isActive} = this.props;
    const {title, poster, video} = movie;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => onClick(movie)}
        onMouseEnter={() => this._handleMouseEnter()}
        onMouseLeave={() => this._handleMouseLeave()}>

        <VideoPlayer
          video={video}
          poster={poster}
          isPlaying={isActive}/>

        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            onClick={(evt) => evt.preventDefault()}>
            {title}
          </a>
        </h3>
      </article>
    );
  }

  componentWillUnmount() {
    this._clearTimer();
  }

  _handleMouseEnter() {
    const {onActiveChange} = this.props;

    this._timerId = setTimeout(() => {
      onActiveChange(true);
    }, SmallMovieCard.VIDEO_PLAY_DELAY);
  }

  _handleMouseLeave() {
    const {onActiveChange} = this.props;

    this._clearTimer();
    onActiveChange(false);
  }

  _clearTimer() {
    if (this._timerId) {
      clearTimeout(this._timerId);
    }
  }
}
SmallMovieCard.VIDEO_PLAY_DELAY = 1000;
SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(ActionCreator.selectMovie(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SmallMovieCard);
