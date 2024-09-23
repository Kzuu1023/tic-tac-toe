const tiles = document.querySelectorAll(".tiles");
const playerScore = document.querySelectorAll(".msg");
const restartBtn = document.querySelector(".restart");
let spaces = Array(9).fill(null);
let currentPlayer = "";
let player1, player2;

let score = "";

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

function startGame() {
    let ask = prompt("Wanna play a game?");
    if (ask.toUpperCase() === "Y") {
        gameBoard();
    }
}

function gameBoard() {
    let askPlayer = prompt("X or O").toUpperCase();

    if (askPlayer !== "X" && askPlayer !== "O") {
        alert("Invalid choice. Please choose X or O.");
        return;
    }

    switch (askPlayer) {
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

function checkTiles() {
    tiles.forEach((tile) => {
        tile.addEventListener("mouseover", function () {
            if (tile.classList.contains("occupied")) return;

            if (currentPlayer === "./assets/icon-x.svg") {
                tile.innerHTML = '<img src="./assets/icon-x-outline.svg"/>';
            } else {
                tile.innerHTML = '<img src="./assets/icon-o-outline.svg"/>';
            }
        });

        tile.addEventListener("mouseleave", function () {
            tile.querySelector("img").remove();
        });
    });
}

restart();
checkTiles();
startGame();
