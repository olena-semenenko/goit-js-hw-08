import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });
var throttle = require('lodash.throttle');
player.on('timeupdate', throttle(setCurrentTime, 1000));

function setCurrentTime(e) {
  const currentTime = JSON.stringify(e);
  localStorage.setItem('videoplayer-current-time', currentTime);
}
const getTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(getTime.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
