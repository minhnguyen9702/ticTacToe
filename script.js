const gameBoard = [
["", "", ""],
["", "", ""],
["", "", ""]
]

let turnNumber = 2;

const $gameBoard = document.querySelector("#gameBoard")

function drawGameBoard() {
    $gameBoard.innerHTML = ""
    for(let i = 0; i < gameBoard.length; i++) {
        const gameRow = `
            <tr>
                <td class="cell" data-row="${i}" data-column="${0}">${gameBoard[i][0]}</td>
                <td class="cell" data-row="${i}" data-column="${1}">${gameBoard[i][1]}</td>
                <td class="cell" data-row="${i}" data-column="${2}">${gameBoard[i][2]}</td>
            </tr>`;
        $gameBoard.innerHTML += gameRow;
    };
    addGameButtonListeners();
}


function addGameButtonListeners() {
    const cells = document.querySelectorAll(".cell");
    for (const cell of cells) {
        cell.addEventListener("click", function() {
            const row = this.getAttribute("data-row");
            const column = this.getAttribute("data-column");
            drawMarker(row, column);
        });
    };
}

function drawMarker(row, column) {
    if (gameBoard[row][column] == "") {
        if (turnNumber % 2 == 0) {
            gameBoard[row][column] = "X";
            drawGameBoard();
            checkForVictory("X");
        } else {
            gameBoard[row][column] = "O"
            drawGameBoard();
            checkForVictory("O");
        }
        turnNumber++;
    }
}

function checkForVictory(marker) {
    for(let i = 0; i < gameBoard.length; i++) {
        if(gameBoard[i][0] == marker && gameBoard[i][1] == marker && gameBoard[i][2] == marker) {
            displayResult(marker+ " Wins!")
        } else if (gameBoard[0][i] == marker && gameBoard[1][i] == marker && gameBoard[2][i] == marker) {
            displayResult(marker+ " Wins!")
        }
    }

    if (gameBoard[0][0] == marker && gameBoard[1][1] == marker && gameBoard[2][2] == marker) {
        displayResult(marker+ " Wins!")
    }
    if (gameBoard[0][2] == marker && gameBoard[1][1] == marker && gameBoard[2][0] == marker) {
        displayResult(marker+ " Wins!")
    }

    if (gameBoard[0][0] != "" && gameBoard[0][1] != "" && gameBoard[0][2] != ""
    && gameBoard[1][0] != "" && gameBoard[1][1] != "" && gameBoard[1][2] != ""
    && gameBoard[2][0] != "" && gameBoard[2][1] != "" && gameBoard[2][2] != "") {
        displayResult("Draw!")
    }
}

function displayResult(string) {
    const dialog = `
        <dialog open>
            <p>${string}</p>
            <form method="dialog">
            <button>Play Again?</button>
            </form>
        </dialog>
    `;
    $gameBoard.innerHTML += dialog;
}

drawGameBoard()


