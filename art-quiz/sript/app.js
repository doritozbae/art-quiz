import {settingsBtn, mainPage, categoryCard, categoriesPage, picturesQuizClose, categorySettingsBtn, settingsPage, 
       closeSettingsBtn, soundButton,menuItemCategories, soundControl,muteButton,picturesBtn, homeBtn, scoreBtn,
       artistBtn, greenBg, redBg, wrongAlert, wrongAlertNext, correctAlert, correctAlertNext, menuItemHome, timeSwitch, pictureQuiz, quitAlert, pictureAnswBtn2, pictureButton} from "./values.js";
import * as settings from './settings.js';
import * as categories from './categories.js';
import * as pictureQuizMod from './picturequiz.js';

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
// categoryCard.forEach(function (categoryCards) {
//    categoryCards.addEventListener("click", () => {
//      categories.openPictureQuiz();
//      pictureQuizMod.showQuestion();
//    })
// })
picturesQuizClose.addEventListener('click', () => {
   // pictureQuiz.classList.remove("active-page");
   // quitAlert.style.display="block";
})

correctAlertNext.addEventListener('click', () => {
   // pictureQuiz.classList.remove("active-page");
   pictureQuizMod.showQuestion();
   correctAlert.style.display="none";
   greenBg.style.display="none"; 
})
wrongAlertNext.addEventListener('click', () => {
   pictureQuizMod.showQuestion();
   wrongAlert.style.display="none";
   redBg.style.display="none";
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
