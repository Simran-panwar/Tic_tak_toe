//console.log('Welcome to Tic Toc Toe')
// let music = new Audio(music.mp3);
// let turnMusic = new Audio(ting.mp3);
// let gameover = new Audio(gameover.mp3);

//Logic of the game
//--> at start turn = X then switch the turn to 0 
// change turn function call after each turn
//--> check if any one win after each turn
// check win function will call
//--> fill X or 0 on boxes at click

let turn = 'X';

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    //create a winning array
    let boxText = document.querySelectorAll('.boxText');
    let winer = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winer.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !== '')
        {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + ' Won';
            document.querySelector('img').style.width = '100px';
        }
    })
}

// Game Start Logic
const boxes = document.getElementsByClassName('box');
//it return html collections/node list
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    //console.log(boxText);
    element.addEventListener('click', () => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
        }
    })
})

