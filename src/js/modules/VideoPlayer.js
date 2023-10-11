class VideoPlayer {
  constructor(videoButtons, videos) {
    this.videoButtons = videoButtons;
    this.videos = videos;
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.videoButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.toggleVideo(index);
      });
    });
  }

  toggleVideo(index) {
    if (this.videos[index].paused) {
      this.videos[index].play();
      this.videoButtons[index].classList.add('is-playing');
    } else {
      this.videos[index].pause();
      this.videoButtons[index].classList.remove('is-playing');
    }
  }
}

export default VideoPlayer;