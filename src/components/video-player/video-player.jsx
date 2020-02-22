import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {video} = this.props;
    const videoPlayer = this._videoRef.current;

    videoPlayer.video = video;

    videoPlayer.onplay = () => this.setState({
      isPlaying: true
    });

    videoPlayer.onpause = () => this.setState({
      isPlaying: false
    });

    video.ontimeupdate = () => this.setState({
      progress: videoPlayer.currentTime
    });
  }

  componentWillUnmount() {
    const videoPlayer = this._videoRef.current;
    videoPlayer.onplay = null;
    videoPlayer.onpause = null;
    videoPlayer.ontimeupdate = null;
    videoPlayer.video = ``;
  }

  componentDidUpdate() {
    const {video} = this.props;
    const videoPlayer = this._videoRef.current;
    if (this.props.isPlaying) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
      videoPlayer.video = video;
    }
  }

  render() {
    const {video, img} = this.props;

    return (
      <video
        className="player__video"
        ref={this._videoRef}
        width="auto" height="100%"
        muted
        video={video}
        poster={img}>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  img: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
