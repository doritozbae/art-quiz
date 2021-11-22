import {picturePlace,pictureQuiz, place0, place1,place2,place3,place4,place5, place6, place7, place8, place9, portrait, resultsContainer, 
   correctPicture, correctPictureName, correctAuthorName, wrongPicture, wrongPictureName, wrongAuthorName, greenBg, redBg, pictureContainer, 
   pictureQuestion, pictureAnswBtn1, pictureAnswBtn2, pictureAnswBtn3, pictureAnswBtn4, correctAlert, wrongAlert, pictureButton,
   impressionism, expressionism, landscape, still, avantGarde, renaissance, surrealism,
   kitsch, mininalism, interior, nudep} from "./values.js";
import images from "./img.js";
import * as categories from './categories.js';

// let imageIndex = 0;
let varsForCategories = {
   currentQuestion: 0, 
   correctAnswers: 0,
   wrongAnswers: 0,
   indexOfWrong: [],     
   imageIndex: 0,  
   lastQuestion: 9      
 };

//  varsForCategories.indexOfWrong.push(3)
//  console.log(varsForCategories.indexOfWrong)
let questionNumber = 0;
let userCorrectAnswers = 0;

export function showQuestion() { 
   let resultImgPlace = [place0, place1,place2, place3, place4, place5, place6, place7, place8, place9] 
   let question = images[varsForCategories.imageIndex];
   let buttonArray = [pictureAnswBtn1, pictureAnswBtn2, pictureAnswBtn3, pictureAnswBtn4];
  
   if (varsForCategories.imageIndex === varsForCategories.lastQuestion) {
      varsForCategories.currentQuestion = 0;
      varsForCategories.correctAnswers = 0;
      varsForCategories.wrongAnswers = 0;
      for (let i=0; i< varsForCategories.indexOfWrong.length; i++){
         resultImgPlace[varsForCategories.indexOfWrong[i]].style.filter = "grayscale(100%)";
      }
      pictureQuiz.classList.remove("active-page");
   }

   pictureQuestion.innerHTML = 'Кто написал эту картину?';
   picturePlace.src = `./assets/img/img/${varsForCategories.imageIndex}.jpg`;

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
   buttonArray[0].innerHTML = images[varsForCategories.imageIndex+1].author;
   buttonArray[1].innerHTML = images[varsForCategories.imageIndex+2].author;
   buttonArray[2].innerHTML = images[varsForCategories.imageIndex+3].author;

   // console.log(rightAnswer); 
   // console.log(buttonArray); 

   //generating alert content 
   correctPictureName.innerHTML = question.name;
   correctAuthorName.innerHTML = question.author;
   correctPicture.src = `./assets/img/img/${varsForCategories.imageIndex}.jpg`;

   wrongPictureName.innerHTML = question.name;
   wrongAuthorName.innerHTML = question.author;
   wrongPicture.src = `./assets/img/img/${varsForCategories.imageIndex}.jpg`;

   //generate results page 
   // let resultImgPlace = [place0, place1,place2, place3, place4, place5, place6, place7, place8, place9]
   resultImgPlace[questionNumber].src = `./assets/img/img/${varsForCategories.imageIndex}.jpg`;

   questionNumber++;
   varsForCategories.imageIndex++;
}

Array.from(pictureButton).forEach(element => {
   element.addEventListener('click', () => {
      if(element.classList.contains('yes')) {
         correctAlert.style.display="block";
         greenBg.style.display="block";
         element.classList.remove('yes');

         varsForCategories.currentQuestion++; 
         varsForCategories.correctAnswers++;
         // console.log(varsForCategories.currentQuestion)
      }
      else {
         redBg.style.display="block";
         wrongAlert.style.display="block";
         varsForCategories.currentQuestion++; 
         varsForCategories.wrongAnswers++;
         console.log(varsForCategories.currentQuestion)
         varsForCategories.indexOfWrong.push(varsForCategories.currentQuestion);
         console.log(varsForCategories.indexOfWrong);
         
           Array.from(pictureButton).forEach(element => {
           element.classList.remove('yes'); 
           });
      }   
   }); 
});



portrait.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 0;
   varsForCategories.lastQuestion = 9;
   showQuestion();
})
impressionism.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 10;
   varsForCategories.lastQuestion = 19;
   showQuestion();
})
expressionism.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 20;
   varsForCategories.lastQuestion = 29;
   showQuestion();
})
landscape.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 30;
   varsForCategories.lastQuestion = 39;
   showQuestion();
})
still.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 40;
   varsForCategories.lastQuestion = 49;
   showQuestion();
})
avantGarde.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 50;
   varsForCategories.lastQuestion = 59;
   showQuestion();
})
renaissance.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 60;
   varsForCategories.lastQuestion = 69;
   showQuestion();
})
// surrealism.addEventListener('click', () => {
//    categories.openPictureQuiz();
//    varsForCategories.imageIndex = 70;
//    varsForCategories.lastQuestion = 79;
//    showQuestion();
// })
kitsch.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 80;
   varsForCategories.lastQuestion = 89;
   showQuestion();
})
mininalism.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 90;
   varsForCategories.lastQuestion = 99;
   showQuestion();
})
interior.addEventListener('click', () => {
   categories.openPictureQuiz();
   varsForCategories.imageIndex = 100;
   varsForCategories.lastQuestion = 109;
   showQuestion();
})
// nudep.addEventListener('click', () => {
//    categories.openPictureQuiz();
//    varsForCategories.imageIndex = 110;
//    varsForCategories.lastQuestion = 119;
//    showQuestion();
// })