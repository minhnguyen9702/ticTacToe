const gameBoard = [
["", "", ""],
["", "", ""],
["", "", ""]
]

const $gameBoard = document.querySelector("#gameBoard")

function drawGameBoard() {
    $gameBoard.innerHTML = ""
    for(let i = 0; i < gameBoard.length; i++) {
        const gameRow = `
            <tr>
                <td>${gameBoard[i][0]}</td>
                <td>${gameBoard[i][1]}</td>
                <td>${gameBoard[i][2]}</td>
            </tr>`;
        $gameBoard.innerHTML += gameRow;
    }
}

drawGameBoard()

const turnNumber = 2;


