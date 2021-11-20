import {categoryCard, categoriesPage, cancelQuitBtn, quitBtn, quitAlert, pictureQuiz} from "./values.js";

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
}