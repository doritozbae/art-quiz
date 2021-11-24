import {settingsBtn, mainPage, categoryCard, categoriesPage, picturesQuizClose, categorySettingsBtn, settingsPage, 
       closeSettingsBtn, soundButton,menuItemCategories, soundControl,muteButton,picturesBtn,
       gameoverAlert, gameoverHome, gameoverResults, wrongForArt, CorrectForArt,
       artistBtn,blackBg, artistsCategory, greenBg, artistsCategorySettings, resultsHome, resultsCategories, redBg, wrongAlert, wrongAlertNext, correctAlert, correctAlertNext, menuItemHome, timeSwitch, pictureQuiz, quitAlert, pictureAnswBtn2, pictureButton, resultPAGE, resultsSettingsBtn, artistsQuiz} from "./sript/values.js";
import * as settings from './sript/settings.js';
import * as categories from './sript/categories.js';
import * as pictureQuizMod from './sript/picturequiz.js';
import * as artistQuizMod from './sript/artistquiz.js';

console.log('lk');

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
   wrongAlertNext.style.display="block";
   correctAlertNext.style.display="block";
   CorrectForArt.style.display="none";
   wrongForArt.style.display="none";
   menuItemCategories.classList.toggle("pink-font");
})
menuItemHome.addEventListener('click', () => {
   categoriesPage.classList.remove("active-page");
   mainPage.classList.add("active-page");
   menuItemCategories.classList.toggle("pink-font");
})


// settings page
// soundButton.addEventListener('click', settings.playAudio);
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
menuItemCategories.addEventListener('click', () => {
   categoriesPage.classList.remove("active-page");
   mainPage.classList.add("active-page");
})
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
menuItemHome.addEventListener('click', () => {
   categoriesPage.classList.remove("active-page");
   // resultsPage.classList.remove("active-page");
   mainPage.classList.add("active-page");
})
// menuItemScore.addEventListener('click', () => {
   
// })

//results page 
resultsHome.addEventListener('click', () => {
   resultPAGE.style.display="none";
   mainPage.classList.add("active-page");
})
resultsCategories.addEventListener('click', () => {
   resultPAGE.style.display="none";
   categoriesPage.classList.add("active-page");
})
gameoverResults.addEventListener('click', () => {
   resultPAGE.style.display="block";
   pictureQuiz.classList.remove("active-page");   
   blackBg.style.display="none"; 
   gameoverAlert.style.display="none";
   artistsQuiz.style.display="none";
})
gameoverHome.addEventListener('click', () => {
   mainPage.classList.add("active-page");
   pictureQuiz.classList.remove("active-page");   
   blackBg.style.display="none"; 
   gameoverAlert.style.display="none";
   artistsQuiz.style.display="none";
})
resultsSettingsBtn.addEventListener('click', () => {
   settingsPage.classList.add("active-page");
   resultPAGE.style.display="none";
})
picturesQuizClose.addEventListener('click', () => {
   blackBg.style.display="block"; 
   quitAlert.style.display="block";
})
artistsCategorySettings.addEventListener('click', () => {
   settingsPage.classList.add("active-page");
   artistsCategory.style.display="none";
})

categories.quitCategoriesAlert();

timeSwitch.addEventListener('click', () => {
  categories.timeSwitchFunction();
})


// scoreBtn.addEventListener('click', () => {
//    categoriesPage.classList.remove("active-page");
//    settingsPage.classList.add("active-page");
// })


// picture quiz page
// picturesQuizClose.addEventListener('click', () => {
//    categoriesPage.classList.add("active-page");
//    pictureQuiz.classList.remove("active-page");
// })
