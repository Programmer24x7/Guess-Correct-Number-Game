let input =document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');
let ans = Math.floor(Math.random()*100+1);
console.log(ans);
let numguesses=0;
btn.addEventListener('click',()=>
{
    guessnumber();
})

function guessnumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrng.innerHTML="Enter the Valid Number";
    }
    else{
        numguesses++;
        guesses.innerHTML="No. of Guess: " + numguesses;
        if(input.value>ans){
            wrng.innerHTML="Number is too high";
            input.value='';

        }
        else if(input.value<ans){
            wrng.innerHTML="Number is too low";
            input.value='';
        }
        else{
            wrng.innerHTML="Number Guessed is Correct!"
        
         btn.disabled=true;
         setTimeout(() => {
            resetgame();
          }, 5000);
        }
    }
    
}

function resetgame(){
    numguesses = 0;
    ans=Math.floor(Math.random()*100+1);
    input.value='';
    wrng.innerHTML='';
    guesses.innerHTML="No. of Guess: 0"; 
}