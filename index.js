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

const choices = ["rock", "paper", "scissors"]

const winners = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function getResult(playerNumber) {
    let botChoice = getBotChoice()
    let playerChoice = choices[playerNumber]
    log.textContent = `Your choice: ${playerChoice} | Bot choice: ${botChoice}`

    if (playerChoice == botChoice) {
        log2.textContent = `It's a draw!`
    }
    else if (winners[playerChoice] == botChoice) {
        log2.textContent = `You won!`
        playerScore++
    }
    else if (winners[botChoice] == playerChoice) {
        log2.textContent = `You lose!`
        botScore++
    }

    verifyWin()

}

function getNumber() {
    return Math.floor(Math.random() * 3)
}

function getBotChoice() {
    number = getNumber()
    choice = choices[number]
    return choice
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




