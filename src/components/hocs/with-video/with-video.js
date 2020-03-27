import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      const {isPlaying} = this.props;

      this._videoRef = createRef();
      this._handlePlay = this._handlePlay.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);

      this.state = {
        time: 0,
        isLoading: true,
        isPlaying
      };
    }

    componentDidMount() {
      const {video, poster, isPlaying} = this.props;
      const videoPlayer = this._videoRef.current;

      videoPlayer.src = video;
      videoPlayer.poster = poster;
      videoPlayer.muted = true;

      videoPlayer.oncanplaythrough = () => this.setState({
        isLoading: false
      });

      videoPlayer.onplay = () => this.setState({
        isPlaying: true
      });

      videoPlayer.onpause = () => this.setState({
        isPlaying: false
      });

      videoPlayer.onload = () => this.setState({
        isPlaying: false
      });

      videoPlayer.ontimeupdate = () => this.setState({
        time: Math.floor(videoPlayer.currentTime)
      });

      if (isPlaying) {
        videoPlayer.play();
      }
    }

    componentWillUnmount() {
      const videoPlayer = this._videoRef.current;

      videoPlayer.oncanplaythrough = null;
      videoPlayer.onplay = null;
      videoPlayer.onpause = null;
      videoPlayer.onload = null;
      videoPlayer.ontimeupdate = null;
      videoPlayer.src = ``;
      videoPlayer.poster = ``;
    }

    componentDidUpdate(prevProps) {
      const {isPlaying} = this.props;
      if (prevProps.isPlaying !== isPlaying) {
        const videoPlayer = this._videoRef.current;
        videoPlayer[isPlaying ? `play` : `load`]();
      }
    }

    render() {
      const {time, isPlaying} = this.state;
      const {title, onExit} = this.props;

      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          time={time}
          title={title}
          progress={this._calculateProgress()}
          isPlaying={isPlaying}
          onPlay={this._handlePlay}
          onExit={onExit}
          onFullScreen={this._handleFullScreen}
        />
      );
    }

    _handlePlay() {
      const videoPlayer = this._videoRef.current;
      videoPlayer[this.state.isPlaying ? `pause` : `play`]();
    }

    _handleFullScreen() {
      const videoPlayer = this._videoRef.current;

      videoPlayer.requestFullscreen();
    }

    _calculateProgress() {
      const {time} = this.state;
      const {runTime} = this.props;

      return Math.floor(100 * time / runTime);
    }
  }

  WithVideo.propTypes = {
    title: PropTypes.string,
    runTime: PropTypes.number,
    poster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onExit: PropTypes.func
  };

  return WithVideo;
};

export default withVideo;
