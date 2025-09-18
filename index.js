function getNumber() {
    return Math.floor(Math.random() * 3)
}

function getBotChoice() {
    number = 2

    if (number == 0) {
        choice = "rock"
    }
    else if (number == 1) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }

    return choice
}

function getPlayerChoice() {
    if (playerNumber == 0) {
        playerChoice = "rock"
    }
    else if (playerNumber == 1) {
        playerChoice = "paper"
    }
    else {
        playerChoice = "scissors"
    }

    return playerChoice
}

function getResult() {
    let botChoice = getBotChoice()
    let playerChoice = getPlayerChoice()
    console.log("Your choice was", playerChoice, "and the computer's choice was", botChoice, "\n")
    if (playerChoice == "rock") {
        if (botChoice == "rock") {
            result = "It was a draw! try again."
            return result
        }
        else if (botChoice == "paper") {
            result = "The bot won that one! please try again"
            return result
        }
        else if(botChoice == "scissors") {
            result = "You win! the computer's got nothing on you"
            return result
        }
    }
    else if (playerChoice == "paper") {
        if (botChoice == "paper") {
            result = "It was a draw! try again."
            return result
        }
        else if (botChoice == "scissors") {
            result = "The bot won that one! please try again"
            return result
        }
        else {
            result = "You win! the computer's got nothing on you"
            return result
        }
    }
    else {
        if (botChoice == "scissors") {
            result = "It was a draw! try again."
            return result
        }
        else if (botChoice == "paper") {
            result = "The bot won that one! please try again"
            return result
        }
        else {
            result = "You win! the computer's got nothing on you"
            return result
        }
    }
}

let playerNumber = parseInt(prompt("Input 0 for Rock, 1 for Paper or 2 for Scissors"))

function startGame() {
    if (playerNumber > 2) {
        console.log("The number you input is incorrect, please enter a number between 0 and 2")
    } 
    else {
        return getResult()
    }
}

console.log(startGame())