import {soundButton, soundControl,muteButton} from "./values.js";

//volume functions
export const playlist = [
   {      
     title: 'Aqua Caelestis',
     src: './assets/sounds/1.mp3',
     duration: '00:39'
   },  
   {
   title: 'River Flows In You',
   src: './assets/sounds/3.mp3',
   duration: '01:37'
   },
   {
   title: 'Summer Wind',
   src: './assets/sounds/4.mp3',
   duration: '01:50'
   }
 ]
const audio = new Audio();
let isPlay = false;
let currentAudio = 1;
audio.src = playlist[currentAudio].src;

export function playAudio() {
   if(!isPlay) {
       audio.play();
       isPlay = true;
   } 
   else {
       audio.pause();
       isPlay = false;
   }
}
// soundButton.addEventListener('click', playAudio);

export function changeVolumeButtons() {
   audio.volume = soundControl.value / 100;
   
   if (audio.volume === 0) {
      soundButton.style.color = '#A4A4A4';
      muteButton.style.color = 'white';
   }
   else {
      soundButton.style.color = 'white';
      muteButton.style.color = '#A4A4A4';
   }
}
// soundControl.addEventListener('change', changeVolumeButtons);

export function muteButtonFunc() {
   muteButton.classList.toggle('mute');
   if (muteButton.classList.contains('mute')) {
       audio.volume = 0;
       soundControl.value = 0;
       soundButton.style.color = '#A4A4A4';
       muteButton.style.color = 'white';
       soundControl.style.background = `linear-gradient(to right, lightpink 0%, lightpink 0%, #C4C4C4 0%, #C4C4C4)`;
   }
   else {
       audio.volume = 0.4;
       soundControl.value = 40;
       soundButton.style.color = 'white';
       muteButton.style.color = '#A4A4A4';
       soundControl.style.background = `linear-gradient(to right, lightpink 0%, lightpink 40%, #C4C4C4 40%, #C4C4C4)`;
   }
}
// muteButton.addEventListener('click', muteButtonFunc);

