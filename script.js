const tiles = document.querySelectorAll(".tiles");

const restartBtn = document.querySelector(".restart");
let winnerIndicator = document.querySelectorAll(".msg");
let tieScore = document.querySelector(".tie-score");
let spaces = Array(9).fill(null);
let currentPlayer = "";
let player1, player2;
let score = 0;

function startGame() {
    let ask = prompt("Wanna play a game?");
    if (ask.toUpperCase() === "Y") {
        askPlayer();
    }
}

function askPlayer() {
    let playerChoices = prompt("X or O").toUpperCase();

    if (playerChoices !== "X" && playerChoices !== "O") {
        alert("Invalid choice. Please choose X or O.");
        return;
    }

    switch (playerChoices) {
        case "X":
            player1 = "./assets/icon-x.svg";
            player2 = "./assets/icon-o.svg";
            break;
        case "O":
            player1 = "./assets/icon-o.svg";
            player2 = "./assets/icon-x.svg";
            break;
        default:
            return;
    }
    gameBoard();
}

function gameBoard() {
    currentPlayer = player1;

    tiles.forEach((tilesBtn, index) => {
        tilesBtn.addEventListener("click", function () {
            if (!spaces[index]) {
                spaces[index] = currentPlayer;
                let iconElem = document.createElement("img");
                iconElem.src = currentPlayer;
                tilesBtn.appendChild(iconElem);
            }

            //alternative value X and O
            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }

            let winner = determineWinner();

            if (winner) {
                console.log("Winner:", winner);
                score += 1;
                winnerIndicator.forEach((indicator) => {
                    indicator.innerHTML = score;
                });
            } else if (!spaces.includes(null)) {
                score += 1;
                tieScore.innerHTML = score;
            }
        });
    });
}

function restart() {
    restartBtn.addEventListener("click", function () {
        spaces.fill(null);
        tiles.forEach((box) => {
            box.innerHTML = "";

            currentPlayer = player1;
        });
    });
}

const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function determineWinner() {
    for (const board of winCombination) {
        let [a, b, c] = board;

        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            console.log([a, b, c]);
            return [a, b, c];
        }
    }
    return false;
}

restart();
startGame();
