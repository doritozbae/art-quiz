import {soundButton, soundControl,muteButton} from "./values.js";

//volume functions
export const playlist = [
   {      
     title: 'Aqua Caelestis',
     src: './assets/sounds/1.mp3'
   },  
   {
   title: 'correct',
   src: './assets/sounds/correct.mp3'
   },
   {
   title: 'wrong',
   src: './assets/sounds/wrong.mp3'
   }
 ]
const audio = new Audio();
let isPlay = false;
let currentAudio = 1;
audio.src = playlist[currentAudio].src;

// export function playAudio() {
//    if(!isPlay) {
//        audio.play();
//        isPlay = true;
//    } 
//    else {
//        audio.pause();
//        isPlay = false;
//    }
// }
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
       playlist[1].src = '';
       playlist[2].src = '';
       audio.volume = 0;
       soundControl.value = 0;
       soundButton.style.color = '#A4A4A4';
       muteButton.style.color = 'white';
       soundControl.style.background = `linear-gradient(to right, lightpink 0%, lightpink 0%, #C4C4C4 0%, #C4C4C4)`;
       const audio = new Audio();
       
   }
   else {
       audio.volume = 0.4;
       soundControl.value = 40;
       soundButton.style.color = 'white';
       muteButton.style.color = '#A4A4A4';
       soundControl.style.background = `linear-gradient(to right, lightpink 0%, lightpink 40%, #C4C4C4 40%, #C4C4C4)`;
       playlist[1].src = './assets/sounds/correct.mp3';
       playlist[2].src = './assets/sounds/wrong.mp3';
   }
}

soundControl.addEventListener("input", function(){
   var x = soundControl.value;
   var color ='linear-gradient(90deg, lightpink ' + x + '%, rgb(196, 196, 196)' + x + '%)';
   soundControl.style.background = color;
})
// muteButton.addEventListener('click', muteButtonFunc);

// function setLocalStorage() {
//    localStorage.setItem('volume', audio.volume);
// }
// saveBtn.addEventListener('click', setLocalStorage);

// function getLocalStorage() {
//     if(localStorage.getItem('volume')) {
//      audio.volume = localStorage.getItem('volume');
//    }
//  }
//  window.addEventListener('load', getLocalStorage)

