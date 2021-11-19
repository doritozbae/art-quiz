const mainPage = document.getElementById('main-page');
const settingsPage = document.getElementById('settings-page');
const categoriesPage = document.getElementById('categories-page');

const settingsBtn = document.querySelector('.settings-btn');
const closeSettingsBtn = document.querySelector('.close-btn');

const timeSwitch = document.querySelector('.setting-time-switch');
const soundButton = document.querySelector('.sound-button');
const muteButton = document.querySelector('.mute-button');
const soundControl = document.querySelector('.progress');

const artistBtn = document.querySelector('.artist-quiz');
const picturesBtn = document.querySelector('.pictures-quiz');

const menuItemCategories = document.querySelector('.categories-page-container-menu-categories');
const menuItemHome = document.querySelector('.categories-page-container-menu-home');
const menuItemScore = document.querySelector('.categories-page-container-menu-score');

// -SETTINGS------------------------------
settingsBtn.addEventListener('click', () => {
   mainPage.classList.remove("active-page");
   settingsPage.classList.add("active-page");
})
closeSettingsBtn.addEventListener('click', () => {
   mainPage.classList.add("active-page");
   settingsPage.classList.remove("active-page");
})
artistBtn.addEventListener('click', () => {
   mainPage.classList.remove("active-page");
   categoriesPage.classList.add("active-page");
   menuItemCategories.classList.toggle("pink-font");
})

// switch time
timeSwitch.addEventListener('click', () => {
   timeSwitch.classList.toggle("switch-on");
   
})


//volume functions
const playlist = [
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

function playAudio() {
   if(!isPlay) {
       audio.play();
       isPlay = true;
   } 
   else {
       audio.pause();
       isPlay = false;
   }
}
soundButton.addEventListener('click', playAudio);

function changeVolumeButtons() {
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
soundControl.addEventListener('change', changeVolumeButtons);

function muteButtonFunc() {
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
muteButton.addEventListener('click', muteButtonFunc);


// -----CATEGORIES-Page-----------------------------------------

menuItemHome.addEventListener('click', () => {
   categoriesPage.classList.remove("active-page");
   mainPage.classList.add("active-page");
   menuItemCategories.classList.toggle("pink-font");
})