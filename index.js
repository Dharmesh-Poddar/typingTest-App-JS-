window.addEventListner('load',init);

// globals
let time =5;
let score=0;
let isPlaying;


//Available levels
 const levels={
  easy: 5,
  medium: 3,
  hard: 2


 }
 const currentLevel= level.easy;


//Dom Elements
const wordInput =document.querySelector('#word-input');
const currentWord=document.querySelector('#currentWord');
const scoreDisplay =document.querySelector('#score');
const timeDisplay= document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');


//random array of words
const words=[
'Dharmesh','hello','India','Life','Friends','Summers','Code','revolve','Million','Girls','Family','Budapest','Mumbai','Sneha','Siblings'
];


//Initialize the game

function init(){ 
	//show number of seconds in UI
	seconds.innerHTML=currentLevel;

   //Load word from array
   showWord(words);
   //start matching on word input

   wordInput.addEventListner('input',startMatch);


   //call countdown every second
   setInterval(countdown,1000);

   //check game status
   setInterval(checkStatus,50);



}

//start match

function startMatch(){

	if(matchWords()) {

		isPlaying=true;
		time=currentLevel+1;

		showWord(words);
		wordInput.value='';
		score++;


	}
	if(score==-1)
	{
		scoreDisplay.innerHTML=0;

	}else{

	scoreDisplay.innerHTML=score;
      }
}

function matchWords(){


         if(wordInput.value==currentWord.innerHTML){

         	message.innerHTML='Correct!!';
         	return true;

         }

     else{

     	message.innerHTML=' ';
     	return false;

     }
}

//Pick and show random word
function showWord(words)
{
   //Generate random array index
   const randIndex =Math.floor(Math.random()*word.length);

   //output random word
   currentWord.innerHTML =words[randIndex];


}

//countdown timer
function countdown(){
   //make sure time is not run out 
   if(time>0)
   {

   	 //decreement
   	 time--;

   }
   else if(time==0)
   {

    //Game is over
    isPlaying=false;


   }
 //show time 
 timeDisplay.innerHTML=time;

  
}

//check the game status
function checkStatus(){
   if(!isPlaying &&time==0){

   	message.innerHTML='Are Bhai Ruk Game Over'!!!;

    score=-1;

   }


}