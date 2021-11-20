import {settingsBtn, mainPage, categoryCard, categoriesPage, picturesQuizClose, categorySettingsBtn, settingsPage, 
       closeSettingsBtn, soundButton,menuItemCategories, soundControl,muteButton,picturesBtn, homeBtn, scoreBtn,
       artistBtn, menuItemHome, timeSwitch, pictureQuiz, quitAlert} from "./values.js";
import * as settings from './settings.js';
import * as categories from './categories.js';


// main page
settingsBtn.addEventListener('click', () => {
   mainPage.classList.remove("active-page");
   settingsPage.classList.add("active-page");
})
closeSettingsBtn.addEventListener('click', () => {
   mainPage.classList.add("active-page");
   settingsPage.classList.remove("active-page");
})
picturesBtn.addEventListener('click', () => {
   mainPage.classList.remove("active-page");
   categoriesPage.classList.add("active-page");
   menuItemCategories.classList.toggle("pink-font");
})
menuItemHome.addEventListener('click', () => {
   categoriesPage.classList.remove("active-page");
   mainPage.classList.add("active-page");
   menuItemCategories.classList.toggle("pink-font");
})


// settings page
soundButton.addEventListener('click', settings.playAudio);
soundControl.addEventListener('change', settings.changeVolumeButtons);
muteButton.addEventListener('click', settings.muteButtonFunc);

timeSwitch.addEventListener('click', () => {
   timeSwitch.classList.toggle("switch-on"); 
})

// categories page
categorySettingsBtn.addEventListener('click', () => {
   categoriesPage.classList.remove("active-page");
   settingsPage.classList.add("active-page");
})
homeBtn.addEventListener('click', () => {
   categoriesPage.classList.remove("active-page");
   mainPage.classList.add("active-page");
})
categoryCard.forEach(function (categoryCards) {
   categoryCards.addEventListener("click", () => {
     categories.openPictureQuiz();
   })
})
picturesQuizClose.addEventListener('click', () => {
   // pictureQuiz.classList.remove("active-page");
   quitAlert.style.opacity="1";
})

categories.quitCategoriesAlert();


// scoreBtn.addEventListener('click', () => {
//    categoriesPage.classList.remove("active-page");
//    settingsPage.classList.add("active-page");
// })



// picture quiz page
// picturesQuizClose.addEventListener('click', () => {
//    mainPage.classList.add("active-page");
//    settingsPage.classList.remove("active-page");
// })
