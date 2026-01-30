let playerScore = 0
let botScore = 0

// SELECTORS
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const player = document.getElementById("player")
const bot = document.getElementById("bot")
const log = document.getElementById("log")
const log2 = document.getElementById("log2")

// EVENT LISTENERS
rock.addEventListener("click", () => startGame(0));
paper.addEventListener("click", () => startGame(1));
scissors.addEventListener("click", () => startGame(2));


//GAME FUNCTIONS
function startGame(playerNumber) {
    if (typeof playerNumber != "number") {
        console.log("The input is not a number, please try again using numbers from 0 to 2")
    } else{
        if (playerNumber > 2 ) {
            console.log("The number you input is incorrect, please enter a number between 0 and 2")
        } 
        else {
            return getResult(playerNumber)
        }
    }
}

function getResult(playerNumber) {
    let botChoice = getBotChoice()
    let playerChoice = getPlayerChoice(playerNumber)
    log.textContent = `Your choice was ${playerChoice}, and the computer's choice was ${botChoice}\n`
    if (playerChoice == "rock") {
        if (botChoice == "rock") {
            result = `It was a draw! try again.`
            log2.textContent = result
            verifyWin()
        }
        else if (botChoice == "paper") {
            botScore += 1
            result = `The bot won that one! please try again`
            log2.textContent = result
            verifyWin()
        }
        else if(botChoice == "scissors") {
            playerScore += 1
            result = `You win! the computer's got nothing on you`
            log2.textContent = result
            verifyWin()
        }
    }
    else if (playerChoice == "paper") {
        if (botChoice == "paper") {
            result = `It was a draw! try again.`
            log2.textContent = result
            verifyWin()
        }
        else if (botChoice == "scissors") {
            botScore += 1
            result = `The bot won that one! please try again`
            log2.textContent = result
            verifyWin()
        }
        else {
            playerScore += 1
            result = `You win! the computer's got nothing on you`
            log2.textContent = result
            verifyWin()
        }
    }
    else if (playerChoice == "scissors") {
        if (botChoice == "scissors") {
            result = `It was a draw! try again.`
            log2.textContent = result
            verifyWin()
        }
        else if (botChoice == "paper") {
            botScore += 1
            result = `The bot won that one! please try again`
            log2.textContent = result
            verifyWin()
        }
        else {
            playerScore += 1
            result = `You win! the computer's got nothing on you`
            log2.textContent = result
            verifyWin()
        }
    }
    else {
        result = "Something has gone wrong :("
        return result
    }
}

function getNumber() {
    return Math.floor(Math.random() * 3)
}

function getBotChoice() {
    number = getNumber()

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

function getPlayerChoice(playerNumber) {
    if (playerNumber == 0) {
        playerChoice = "rock"
    }
    else if (playerNumber == 1) {
        playerChoice = "paper"
    }
    else if (playerNumber == 2) {
        playerChoice = "scissors"
    }
    else {
        playerChoice = "error"
    }

    return playerChoice
}

function verifyWin() {
    bot.textContent = `${botScore}`
    player.textContent = `${playerScore}`
    if (playerScore >= 50) {
        result = `You won 5 times, condragulations, you are the winner of this game! \n The final score was: Player ${playerScore} x ${botScore} Bot`
        return result
    } else if (botScore >= 50) {
        result = `Too bad, the bot won 5 times and took the win! Better luck next time \n The final score was: Player ${playerScore} x ${botScore} Bot`
        console.log(result)
    } else {
        startGame()
    }
}




