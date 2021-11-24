import {categoryCard, portrait, closeArt, artistQuitBtn, menuScore, timer, timeInput, menuHome, quitAlertCloseBtn, categoriesPage, cancelQuitBtn, quitBtn, quitAlert, blackBg, pictureQuiz, menuCategory, mainPage, artistsQuiz, timeSwitch} from "./values.js";
import * as pictureQuizMod from "./picturequiz.js";

export function openPictureQuiz() {
   categoriesPage.classList.remove("active-page");
   pictureQuiz.classList.add("active-page");
   artistQuitBtn.style.display="none";
   quitBtn.style.display="block";
}

export function quitCategoriesAlert() {
   cancelQuitBtn.addEventListener('click', () => {
      quitAlert.style.display="none";
      blackBg.style.display="none"; 
   })
   quitBtn.addEventListener('click', () => {
      pictureQuiz.classList.remove("active-page");
      // artistsQuiz.style.display="none";
      categoriesPage.classList.add("active-page");
      quitAlert.style.display="none";
      blackBg.style.display="none"; 
   })
   quitAlertCloseBtn.addEventListener('click', () => {
      blackBg.style.display="none"; 
      quitAlert.style.display="none";
   })

   closeArt.addEventListener('click', () => {
      blackBg.style.display="block"; 
      quitAlert.style.display="block";
   })

   menuCategory.addEventListener('click', () => {
      mainPage.classList.add("active-page");
   })
   menuHome.addEventListener('click', () => {
      categoriesPage.classList.remove("active-page");
      mainPage.classList.add("active-page");
   })
}

export function timeSwitchFunction() {
   if(timeSwitch.classList.contains('switch-on')) {
      timeInput.style.display="block";
      timer.style.display="block";
   }
   else {
      timeInput.style.display="none";
      timer.style.display="none";
   }
}
