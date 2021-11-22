import {categoryCard, portrait, menuScore, timer, timeInput, menuHome, quitAlertCloseBtn, categoriesPage, cancelQuitBtn, quitBtn, quitAlert, blackBg, pictureQuiz, menuCategory, mainPage, timeSwitch} from "./values.js";
import * as pictureQuizMod from "./picturequiz.js";

export function openPictureQuiz() {
   categoriesPage.classList.remove("active-page");
   pictureQuiz.classList.add("active-page");
}

export function quitCategoriesAlert() {
   cancelQuitBtn.addEventListener('click', () => {
      quitAlert.style.display="none";
      blackBg.style.display="none"; 
   })
   quitBtn.addEventListener('click', () => {
      pictureQuiz.classList.remove("active-page");
      categoriesPage.classList.add("active-page");
      quitAlert.style.display="none";
      blackBg.style.display="none"; 
   })
   quitAlertCloseBtn.addEventListener('click', () => {
      blackBg.style.display="none"; 
      quitAlert.style.display="none";
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
