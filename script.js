let tiles = document.querySelectorAll(".tiles");
let spaces = Array(9).fill(null);
let currentPlayer = "";
function startGame() {
    let ask = prompt("Wanna play a game?");
    if (ask.toUpperCase() === "Y") {
        gameBoard();
    }
}

function gameBoard() {
    let askPlayer = prompt("X or O").toUpperCase();
    let player1, player2;

    let iconElem;

    if (askPlayer !== "X" && askPlayer !== "O") {
        alert("Invalid choice. Please choose X or O.");
        return;
    }

    currentPlayer = player1;

    tiles.forEach((tilesBtn) => {
        tilesBtn.addEventListener("click", function () {
            switch (askPlayer) {
                case "X":
                    player1 = "./assets/icon-x.svg";
                    player2 = "./assets/icon-o.svg";
                    iconElem = document.createElement("img");
                    iconElem.src = currentPlayer;
                    tilesBtn.appendChild(iconElem);
                    break;
                case "O":
                    player1 = "./assets/icon-o.svg";
                    player2 = "./assets/icon-x.svg";
                    iconElem = document.createElement("img");
                    iconElem.src = currentPlayer;
                    tilesBtn.appendChild(iconElem);
                    break;

                default:
                    return;
            }

            if (currentPlayer == player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }
        });
    });
}

startGame();
