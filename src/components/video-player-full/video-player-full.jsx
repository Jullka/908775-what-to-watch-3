import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayerFull extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
      progress: ``,
      progressValue: 0
    };
  }

  componentDidMount() {
    if (!this._videoRef.current) {
      return;
    }

    const video = this._videoRef.current;

    video.src = this.props.film.video;

    video.onended = () => this.setState({
      isPlaying: false,
    });

    video.ontimeupdate = () => this.setState({
      progress: Math.floor(video.duration - video.currentTime),
      progressValue: Math.floor((100 / video.duration) *
        video.currentTime),
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.ontimeupdate = null;
    video.onended = null;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    const timer = `0:00:${(this.state.progress < 10) ? `0` + this.state.progress : this.state.progress}`;
    const progressBar = {
      left: this.state.progressValue + `%`,
    };

    return (
      <div className="player" style={{zIndex: 10}}>
        <video
          ref={this._videoRef}
          className="player__video"
          poster={this.props.film.poster}
          autoPlay
        ></video>

        <button
          onClick={() => {
            this.props.onItemLeave();
            history.back();
          }}
          type="button"
          className="player__exit"
        >Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={this.state.progressValue} max="100"></progress>
              <div className="player__toggler" style={progressBar}>Toggler</div>
            </div>
            <div className="player__time-value">{timer}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={() => {
                this.setState({isPlaying: !this.state.isPlaying});
              }}
            >
              {this.state.isPlaying ? (
                <><svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg><span>Pause</span></>
              ) : (
                <><svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                  <span>Play</span></>
              )}
            </button>
            <div className="player__name">{this.props.film.title}</div>

            <button
              onClick={() => {
                const video = this._videoRef.current;
                video.requestFullscreen();
              }}
              type="button"
              className="player__full-screen"
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
VideoPlayerFull.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
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
    reviews: PropTypes.array,
  }),
  onItemLeave: PropTypes.func.isRequired,
};

export default VideoPlayerFull;
