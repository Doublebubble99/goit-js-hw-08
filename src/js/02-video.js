import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const dataTime = data => {
  localStorage.setItem('videoplayer-current-time', data);
};
var throttle = require('lodash.throttle');
player.on(
  'timeupdate',
  throttle(data => {
    dataTime(data.seconds);
  }, 1000)
);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
