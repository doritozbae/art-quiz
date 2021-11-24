import {artistsCategory, artistsCategoryHome, artistsCategoryCategory, artistsCategoryScore,
   artPortrait, artImpressionism, artExpressionism, artLandscape, artStill, blackBg, redBg, greenBg,
   artAvantGarde, artRenaissance, artSurrealism, artKitsch, artMininalism, scoreResult,
   artInterior, gameoverAlert, wrongForArt, CorrectForArt,correctAlert, wrongAlertNext, correctAlertNext, wrongAlert, artistBtn,correctPicture, correctPictureName, correctAuthorName, wrongPicture, wrongPictureName, wrongAuthorName, artNude, artistsQuiz, artistQuestion, picture1, picture2, picture3, picture4, place0, place1,place2,place3,place4,place5, place6, place7, place8, place9, mainPage, imgButton} from "./values.js";
import images from "./img.js";
import * as sounds from "./settings.js";

let varsForArt = {
   currentQuestion: 0, 
   correctAnswers: 0,
   wrongAnswers: 0,
   indexOfWrong: [],     
   imageIndex: 0, 
   questionNumber: 0, 
   lastQuestion: 9      
 };

export function showArtQuestion() {
   let resultImgPlace = [place0, place1,place2, place3, place4, place5, place6, place7, place8, place9] 
   let question = images[varsForArt.imageIndex];
   let ImgArray = [picture1, picture2, picture3, picture4];
 
   if (varsForArt.imageIndex === varsForArt.lastQuestion) {
      scoreResult.innerHTML = `${varsForArt.correctAnswers}/10`

      varsForArt.currentQuestion = 0;
      varsForArt.correctAnswers = 0;
      varsForArt.wrongAnswers = 0;
      varsForArt.questionNumber = 0;
   
      for (let i=0; i< varsForArt.indexOfWrong.length; i++){
         resultImgPlace[varsForArt.indexOfWrong[i]].style.filter = "grayscale(100%)";
      }
      varsForArt.indexOfWrong = [];
      gameoverAlert.style.display="flex";
      blackBg.style.display="flex"; 
   }

   artistQuestion.innerHTML = `Какую картину написал ${images[varsForArt.imageIndex].author}`;

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
   let rightAnswer = ImgArray[randomNumber];

   ImgArray.splice(randomNumber, 1);

   rightAnswer.src = `./assets/img/img/${varsForArt.imageIndex}.jpg`;
   rightAnswer.classList.add('yes');
   ImgArray[0].src = `./assets/img/img/${varsForArt.imageIndex+1}.jpg`;
   ImgArray[1].src = `./assets/img/img/${varsForArt.imageIndex+2}.jpg`;
   ImgArray[2].src = `./assets/img/img/${varsForArt.imageIndex+3}.jpg`;

   correctPictureName.innerHTML = question.name;
   correctAuthorName.innerHTML = question.author;
   correctPicture.src = `./assets/img/img/${varsForArt.imageIndex}.jpg`;

   wrongPictureName.innerHTML = question.name;
   wrongAuthorName.innerHTML = question.author;
   wrongPicture.src = `./assets/img/img/${varsForArt.imageIndex}.jpg`;

   resultImgPlace[varsForArt.questionNumber].src = `./assets/img/img/${varsForArt.imageIndex}.jpg`;
   resultImgPlace[varsForArt.questionNumber].style.filter = "grayscale(0%)";

   varsForArt.questionNumber++;
   varsForArt.imageIndex++;
}


Array.from(imgButton).forEach(element => {
   element.addEventListener('click', () => {
      if(element.classList.contains('yes')) {
         correctAlert.style.display="block";
         greenBg.style.display="block";
         element.classList.remove('yes');

         varsForArt.currentQuestion++; 
         varsForArt.correctAnswers++;

         const audio = new Audio();
         audio.src = sounds.playlist[1].src;
         audio.play();
      }
      else {
         redBg.style.display="block";
         wrongAlert.style.display="block";
         varsForArt.currentQuestion++; 
         varsForArt.wrongAnswers++;
         // console.log(varsForCategories.currentQuestion)
         varsForArt.indexOfWrong.push(varsForArt.currentQuestion);
         // console.log(varsForCategories.indexOfWrong);

         const audio = new Audio();
         audio.src = sounds.playlist[2].src;
         audio.play();
         
           Array.from(imgButton).forEach(element => {
           element.classList.remove('yes'); 
           });
      }   
   }); 
});

export function closeArtSection() {
   artistsCategory.style.display="none"; 
}
export function openArtSection() {
   artistsCategory.style.display="block"; 
}

export function openArtQuiz() {
   artistsCategory.style.display="none";  
   artistsQuiz.style.display="block"; 
   wrongAlertNext.style.display="none";
   correctAlertNext.style.display="none";
   CorrectForArt.style.display="block";
   wrongForArt.style.display="block";
}

artistBtn.addEventListener('click', () => {
      mainPage.classList.remove("active-page");
      openArtSection(); 
      artistsCategoryCategory.style.color = "lightpink";
})
artistsCategoryHome.addEventListener('click', () => {
      artistsCategory.style.display="none";  
      mainPage.classList.add("active-page");
})
     
artPortrait.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 120;
   varsForArt.lastQuestion = 129;
   artPortrait.classList.add('category-card-content-active');
   showArtQuestion();
})
artImpressionism.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 130;
   varsForArt.lastQuestion = 139;
   artImpressionism.classList.add('category-card-content-active');
   showArtQuestion();
})
artExpressionism.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 140;
   varsForArt.lastQuestion = 149;
   artExpressionism.classList.add('category-card-content-active');
   showArtQuestion();
})
artLandscape.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 150;
   varsForArt.lastQuestion = 159;
   artLandscape.classList.add('category-card-content-active');
   showArtQuestion();
})
artStill.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 160;
   varsForArt.lastQuestion = 169;
   artStill.classList.add('category-card-content-active');
   showArtQuestion();
})
artAvantGarde.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 170;
   varsForArt.lastQuestion = 179;
   artAvantGarde.classList.add('category-card-content-active');
   showArtQuestion();
})
artRenaissance.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 180;
   varsForArt.lastQuestion = 189;
   artRenaissance.classList.add('category-card-content-active');
   showArtQuestion();
})
artSurrealism.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 190;
   varsForArt.lastQuestion = 199;
   artSurrealism.classList.add('category-card-content-active');
   showArtQuestion();
})
artKitsch.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 200;
   varsForArt.lastQuestion = 209;
   artKitsch.classList.add('category-card-content-active');
   showArtQuestion();
})
artMininalism.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 210;
   varsForArt.lastQuestion = 219;
   artMininalism.classList.add('category-card-content-active');
   showArtQuestion();
})
artInterior.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 220;
   varsForArt.lastQuestion = 229;
   artInterior.classList.add('category-card-content-active');
   showArtQuestion();
})
artNude.addEventListener('click', () => {
   openArtQuiz()
   varsForArt.imageIndex = 230;
   varsForArt.lastQuestion = 139;
   artNude.classList.add('category-card-content-active');
   showArtQuestion();
})

CorrectForArt.addEventListener('click', () => {
   // pictureQuiz.classList.remove("active-page");
   showArtQuestion();
   correctAlert.style.display="none";
   greenBg.style.display="none"; 
})
wrongForArt.addEventListener('click', () => {
   wrongAlert.style.display="none";
   redBg.style.display="none";
   showArtQuestion();
})
