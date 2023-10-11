/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import 'sortable-tablesort/sortable.min.js';
import PopupManager from './modules/PopupManager.js';
import VideoPlayer from './modules/VideoPlayer';
import SmoothScroll from './modules/SmoothScroll';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();
BaseHelpers.headerFixed();

// modal init
new PopupManager();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  const headerBtnToggle = new HeaderBtnToggle();

  // anchor scroll
  const smoothScroll = new SmoothScroll();

  // media video btn
  const videoButtons = document.querySelectorAll('.js-video-btn-play');
  const videos = document.querySelectorAll('.js-video-el');
  const videoPlayer = new VideoPlayer(videoButtons, videos);
});
