import {categoryCard, portrait, quitAlertCloseBtn, categoriesPage, cancelQuitBtn, quitBtn, quitAlert, pictureQuiz} from "./values.js";
import * as pictureQuizMod from "./picturequiz.js";

export function openPictureQuiz() {
   categoriesPage.classList.remove("active-page");
   pictureQuiz.classList.add("active-page");
}

export function quitCategoriesAlert() {
   cancelQuitBtn.addEventListener('click', () => {
      quitAlert.style.opacity="0";
   })
   quitBtn.addEventListener('click', () => {
      pictureQuiz.classList.remove("active-page");
      categoriesPage.classList.add("active-page");
      quitAlert.style.opacity="0";
   })
   quitAlertCloseBtn.addEventListener('click', () => {
      quitAlert.style.opacity="0";
   })
}

