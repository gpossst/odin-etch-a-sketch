const board = document.querySelector('#board');
const button = document.querySelector('#btn')
let myInput = document.getElementById('userInput').value;
let square = myInput*myInput;
let pixelSize = `${500/myInput}px`;
console.log(pixelSize)

for (let i=0; i<square; i++){
    populateBoard()
}

function populateBoard(){
    const pixel = document.createElement('div');
    let pixelSize = `${500/myInput}px`;
    pixel.classList.add('pixel');
    pixel.style.width = pixelSize;
    pixel.style.height = pixelSize;
    board.appendChild(pixel);
    pixel.addEventListener('mouseover', function(e){
        pixel.classList.add('hovered')
    })
    console.log(pixelSize)
}

function btnFunction(){
    removeAllChildNodes();
    let myInput = document.getElementById('userInput').value;
    let square = myInput*myInput;
    //let pixelSize = `${500/myInput}px`;//
    for (let i=0; i<square; i++){
        populateBoard()
    }
}

function removeAllChildNodes() {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}











/*document.getElementById('userButton').onclick = function(){
    let myInput = document.getElementById("userInput").value;
    let square = myInput*myInput;
    let size = `'${square}px'`;

    for (let i = 0; i < square; i++){
        populateBoard();
    }
}

function populateBoard(square){
    let myInput = document
    const board = document.querySelector('#board');
    const content = document.createElement('div');
    content.classList.add('content');
    let size = `'${square}px'`;

    content.style.width = size;
    content.style.height = size;

    board.appendChild(content);
    console.log(square)
}




document.getElementById('userButton').onclick = function(){
    let myInput = document.getElementById("userInput").value;
}*/

//const userInput = document.querySelector('#userInput');//