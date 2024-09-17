let tiles = document.querySelectorAll(".tiles");

function startGame() {
    let ask = prompt("Wanna play a game?");
    if (ask.toUpperCase() === "Y") {
        gameBoard();
    }
}

function gameBoard() {
    let iconElem = "";
    let askPlayer = prompt("X or O").toUpperCase();
    let playerX, playerO;

    if (askPlayer !== "X" && askPlayer !== "O") {
        alert("Invalid choice. Please choose X or O.");
        return;
    }

    tiles.forEach((tilesBtn) => {
        tilesBtn.addEventListener("click", function () {
            switch (askPlayer) {
                case "X":
                    playerX = "./assets/icon-x.svg";
                    iconElem = document.createElement("img");
                    iconElem.src = playerX;
                    tilesBtn.appendChild(iconElem);
                    break;
                case "O":
                    playerO = "./assets/icon-o.svg";
                    iconElem = document.createElement("img");
                    iconElem.src = playerO;
                    tilesBtn.appendChild(iconElem);
                    break;
                default:
                    playerX, (playerO = "");
                    break;
            }
        });
    });
}

startGame();
