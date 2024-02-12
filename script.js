'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct number "
*/
let  secretNumber =Math.trunc(Math.random() *20 + 1);
let score =20;
let highScore = 0;

//check click functionality

document.querySelector('.check').addEventListener('click' , function(){
 //  document.querySelector('.message').textContent="correct number";
   let guess =document.querySelector('.guess').value;
   if(!guess){
      document.querySelector('.message').textContent="no number entered"
   }
   else if (guess > secretNumber){
      if(score>0){
      document.querySelector('.message').textContent="too High!"
      score--;
      document.querySelector('.score').textContent=score;
      }
      else{
         document.querySelector('.message').textContent="you lost the game";
         document.querySelector('.score').textContent=0;
      }
   }

   else if (guess <secretNumber){
      if(score>0){
      document.querySelector('.message').textContent="too low";
      score--;
      document.querySelector('.score').textContent=score;
      }
      else{
         document.querySelector('.message').textContent="you lost the game";
         document.querySelector('.score').textContent=0;
      }
   }
   else if ( guess == secretNumber){
      document.querySelector('.message').textContent="Congratulations you have won"
      
      document.querySelector('body').style.backgroundColor= '#60b347';
      document.querySelector('.number').textContent=secretNumber;
      document.querySelector('.number').style.width='30rem'
      if (score >highScore){
         highScore=score;
         document.querySelector('.highscore').textContent=highScore;
      }


   }
});
   //again button implementation

   document.querySelector('.again').addEventListener('click', function() {
      score=20;
      console.log("clicked");
      secretNumber = Math.trunc(Math.random() *20 + 1);
      document.querySelector('.score').textContent= score;

      document.querySelector('.message').textContent= "start guessing.....";
    
      document.querySelector('.guess').value= '';

      document.querySelector('body').style.backgroundColor= '#222';
      document.querySelector('.number').textContent= '?';
      document.querySelector('.number').style.width= '15rem';


   });

  /* highscore implementation
   if (highScore>document.querySelector(".highscore").value){
      document.querySelector('.highscore').textContent=highScore;
   
   }*/
   
   
   

  // document.querySelector('.message').textContent="correct number "
   


