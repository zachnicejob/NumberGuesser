let valid_input = false;
let max_num, input;

while(!valid_input) {
    let instr = document.getElementById("instr");
    
    input = window.prompt("What should be the maximum number?");

    max_num = Math.round(Number(input));

    if(max_num != NaN && max_num > 0) {
        valid_input = true;
        instr.innerHTML = `Guess a number between 1 and ${max_num}.`;
    }
}



let num = Math.floor(Math.random() * max_num) + 1;

console.log(num);

let tries = [];

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    console.log(tries.indexOf(guess));

    if(guess == num) {
        tries.push(guess);
        if(tries.length == 1) {
            message.innerHTML = `You got it! And it only took you 1 try; nice!`;
        }
        else {
            message.innerHTML = `You got it! It took you ${tries.length} tries and your guesses were ${tries}`;
        }
    }
    else if(tries.indexOf(guess) != -1) {
        message.innerHTML = "Uh-oh! You've already guessed that...";
    }
    else if(isNaN(guess, true)) {
        message.innerHTML = "That is not a number!";
    }
    else if(guess < 1 || guess > max_num) {
        message.innerHTML = "That number is not in range, try again.";
    }
    else if (guess > num) {
        tries.push(guess)
        message.innerHTML = "No, try a lower number.";
    }
    else if (guess < num) {
        tries.push(guess)
        message.innerHTML = "No, try a higher number.";
    }
    console.log(tries);
    
}