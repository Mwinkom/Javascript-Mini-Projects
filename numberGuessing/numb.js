/* const max = 100;
const min = 1;
const randomNum = Math.floor(Math.random()*(max-min+1));
console.log(randomNum);

let guess;
let running = true;
let attempts = 0

while (running){
    guess = window.prompt('Enter a value from 1-100 to guess the number!');
    guess = Number(guess);
    attempts++
    
    if(guess == "" || isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess > max || guess < min){
        alert('Please choose a number between 1-100');
    }
    else if(guess > randomNum){
        alert('Number is TOO HIGH')
    }
    else if(guess < randomNum){
        alert('Number is TOO LOW')
    }
    else{
        alert(`Congratulations! You Won! The answer is ${guess}. It took you ${attempts} attempts`)
        running = false;
    }
}; */

const max = 100;
const min = 1;
const randomNum = Math.floor(Math.random()*(max-min+1));
console.log(randomNum);

let guess;
let running = true;
let attempts = 0

while (running){
    guess = window.prompt('Enter a value from 1-100 to guess the number!');
    guess = Number(guess);
    attempts++

    if (attempts==10){
        alert(`YOU LOSE! It took you ${attempts} attempts. Try again! (Press F5)`);
        break;
    };
    
    if(guess == "" || isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess > max || guess < min){
        alert('Please choose a number between 1-100');
    }
    else if(guess > randomNum){
        alert('Number is TOO HIGH')
    }
    else if(guess < randomNum){
        alert('Number is TOO LOW')
    }
    else{
        alert(`Congratulations! YOU WON! The answer is ${guess}. It took you ${attempts} attempts`)
        running = false;
    }
};