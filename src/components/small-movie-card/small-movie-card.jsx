import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const VIDEO_PLAY_DELAY = 1000;

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._isHovered = false;
  }

  render() {
    const {movie, onMovieHover, onClick} = this.props;
    const {title, poster, video} = movie;
    const {isPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => onMovieHover(movie)}
        onClick={() => onClick(movie)}
        onMouseEnter={() => this._handleMouseEnter()}
        onMouseLeave={() => this._handleMouseLeave()}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            video={video}
            poster={poster}
            isPlaying={isPlaying}
          />
        </div>
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
  }

  _handleMouseEnter() {
    this._isHovered = true;

    setTimeout(() => {
      if (this._isHovered) {
        this.setState({isPlaying: true});
      }
    }, VIDEO_PLAY_DELAY);
  }

  _handleMouseLeave() {
    this._isHovered = false;
    this.setState({isPlaying: false});
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onMovieHover: PropTypes.func.isRequired
};

export default SmallMovieCard;
