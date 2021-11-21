import {picturePlace, place0, place1,place2,place3,place4,place5, place6, place7, place8, place9, portrait, resultsContainer, correctPicture, correctPictureName, correctAuthorName, wrongPicture, wrongPictureName, wrongAuthorName, greenBg, redBg, pictureContainer, pictureQuestion, pictureAnswBtn1, pictureAnswBtn2, pictureAnswBtn3, pictureAnswBtn4, correctAlert, wrongAlert, pictureButton} from "./values.js";
import images from "./img.js";
import * as categories from './categories.js';

let imageIndex = 0;

// let buttonArray = [pictureAnswBtn1, pictureAnswBtn2, pictureAnswBtn3, pictureAnswBtn4];
// let min = 0;
// let max = 3;
let userCorrectAnswers = 0;

export function showQuestion() { 
   let question = images[imageIndex];
   let buttonArray = [pictureAnswBtn1, pictureAnswBtn2, pictureAnswBtn3, pictureAnswBtn4];

   pictureQuestion.innerHTML = 'Кто написал эту картину?';
   picturePlace.src = `./assets/img/img/${imageIndex}.jpg`;

   // generate answers, getting random num for correct answer btn
   function getRandomBtn(min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      let random = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      getRandomBtn.randomNum = random;
      // console.log(random);
   }
   getRandomBtn(0,3);

   let randomNumber = getRandomBtn.randomNum;
   let rightAnswer = buttonArray[randomNumber];

   // console.log(randomNumber)

   // deleting correct and leaving incorrect answers array
   buttonArray.splice(randomNumber, 1);

   // generating answers
   rightAnswer.innerHTML = question.author;
   rightAnswer.classList.add('yes');
   buttonArray[0].innerHTML = images[imageIndex+1].author;
   buttonArray[1].innerHTML = images[imageIndex+2].author;
   buttonArray[2].innerHTML = images[imageIndex+3].author;

   // console.log(rightAnswer); 
   // console.log(buttonArray); 

   //generating alert content 
   correctPictureName.innerHTML = question.name;
   correctAuthorName.innerHTML = question.author;
   correctPicture.src = `./assets/img/img/${imageIndex}.jpg`;

   wrongPictureName.innerHTML = question.name;
   wrongAuthorName.innerHTML = question.author;
   wrongPicture.src = `./assets/img/img/${imageIndex}.jpg`;

   //generate results page 
   let resultImgPlace = [place0, place1,place2, place3, place4, place5, place6, place7, place8, place9]
   resultImgPlace[imageIndex].src = `./assets/img/img/${imageIndex}.jpg`;

   imageIndex++;
}


Array.from(pictureButton).forEach(element => {
   element.addEventListener('click', () => {
      if(element.classList.contains('yes')) {
         userCorrectAnswers++;
         correctAlert.style.display="block";
         greenBg.style.display="block";
         element.classList.remove('yes');
      }
      else {
         redBg.style.display="block";
         wrongAlert.style.display="block";
         // console.log('wrong');
           Array.from(pictureButton).forEach(element => {
           element.classList.remove('yes'); 
           });
      }   
   }); 
});


// portrait.addEventListener('click', () => {
//    categories.openPictureQuiz();
//    let imageIndex = 0;
//    showQuestion();
// })