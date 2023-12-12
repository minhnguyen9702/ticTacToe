const gameBoard = [
["", "", ""],
["", "", ""],
["", "", ""]
]

const turnNumber = 2;

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
            drawGameBoard();
        });
    };
}

function drawMarker(row, column) {
    if (gameBoard[row][column] = "") {
    }
    gameBoard[row][column] = "X";
}

drawGameBoard()


