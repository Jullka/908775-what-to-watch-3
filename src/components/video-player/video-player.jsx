import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {video, poster} = this.props;
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
      progress: videoPlayer.currentTime
    });
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

  render() {
    return (
      <video
        width="100%"
        ref={this._videoRef} />
    );
  }

  componentDidUpdate() {
    const videoPlayer = this._videoRef.current;
    const {isPlaying} = this.props;

    videoPlayer[isPlaying ? `play` : `load`]();
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
