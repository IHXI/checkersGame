
const squares = document.querySelectorAll('.sqr')
const boardRow1 = document.getElementById('101') 
const boardRow2 = document.getElementById('102') 
const boardRow3 = document.getElementById('103') 
const boardRow4 = document.getElementById('104') 
const boardRow5 = document.getElementById('105') 
const boardRow6 = document.getElementById('106') 
const boardRow7 = document.getElementById('107') 
const boardRow8 = document.getElementById('108') 
const whitePawn = document.querySelectorAll('.white-pawn')
const blackPawn = document.querySelectorAll('.black-pawn')


const dot1 = document.createElement('img')
    dot1.src = '/assets/green-dot.png'
    dot1.classList = 'green-dot'

const dot2 = document.createElement('img')
    dot2.src = '/assets/green-dot.png'
    dot2.classList = 'green-dot'


let clicked = false

squares.forEach(function(element){
    if(element.id % 2 && boardRow1.contains(element) || element.id % 2 ===0 && boardRow2.contains(element) || element.id % 2 && boardRow3.contains(element) || element.id % 2 === 0 && boardRow4.contains(element) || element.id % 2 && boardRow5.contains(element) || element.id % 2 === 0 && boardRow6.contains(element) || element.id % 2 && boardRow7.contains(element) || element.id % 2 === 0 && boardRow8.contains(element)){
        element.style.backgroundColor = 'wheat'}

    if(element.id % 2 === 0 && boardRow1.contains(element) || element.id % 2 && boardRow2.contains(element) || element.id % 2 === 0 && boardRow3.contains(element) || element.id % 2 && boardRow4.contains(element) || element.id % 2 === 0 && boardRow5.contains(element) || element.id % 2 && boardRow6.contains(element) || element.id % 2 === 0 && boardRow7.contains(element) || element.id % 2 && boardRow8.contains(element)){
        element.style.backgroundColor = 'saddlebrown'}
    })

squares.forEach(function(element){
   element.addEventListener('click', function(){
    let currentSquare = Number(element.id) 

    if (element.children[0].classList[0] === 'white-pawn' && element.childElementCount != 0) {
        console.log(currentSquare)

        let move = document.getElementById(currentSquare + 7)
        move.appendChild(dot1)

        let move2 = document.getElementById(currentSquare + 9)
        move2.appendChild(dot2)
        console.log(move)
        console.log(move2)

        if (move.children[0].classList[0] === 'green-dot'){
            move.addEventListener('click', function(){
                let pawnwhite = document.createElement('img')
                pawnwhite.src = "/assets/white-pieces/white-pawn.jpg"
                pawnwhite.classList = 'white-pawn'
                move.replaceChild(pawnwhite, move.children[0])
                move2.removeChild(move2.children[0])
                element.removeChild(element.firstChild)
                console.log(element)})}

            if (move2.children[0].classList[0] === 'green-dot'){
                move2.addEventListener('click', function(){
                let pawnwhite = document.createElement('img')
                pawnwhite.src = "/assets/white-pieces/white-pawn.jpg"
                pawnwhite.classList = 'white-pawn'
                element.removeChild(element.firstChild)
                move2.replaceChild(pawnwhite, move2.children[0])
                move.removeChild(move.firstChild)
                element.removeChild(element.firstChild)})
            }
    }
    })

})


squares.forEach(function(element){
    let currentSquare = Number(element.id)
    element.addEventListener('click', function(){
    if(element.children[0].classList[0] === 'black-pawn'){
        console.log(currentSquare)
        let move = document.getElementById(currentSquare - 7)
        move.appendChild(dot1)

        let move2 = document.getElementById(currentSquare - 9)
        move2.appendChild(dot2)
        console.log(move)
        console.log(move2)
        console.log(Number(move.parentElement.id -1))

        if (move.children[0].classList[0] === 'green-dot'){
            move.addEventListener('click', function(){
                let pawnwhite = document.createElement('img')
                pawnwhite.src = "/assets/black-pieces/black-pawn.jpg"
                pawnwhite.classList = 'black-pawn'
                move.replaceChild(pawnwhite, move.children[0])
                move2.removeChild(move2.children[0])
                element.removeChild(element.firstChild)
                console.log(element)})}

            if (move2.children[0].classList[0] === 'green-dot'){
                move2.addEventListener('click', function(){
                let pawnwhite = document.createElement('img')
                pawnwhite.src = "/assets/black-pieces/black-pawn.jpg"
                pawnwhite.classList = 'black-pawn'
                element.removeChild(element.firstChild)
                move2.replaceChild(pawnwhite, move2.children[0])
                move.removeChild(move.firstChild)
                element.removeChild(element.firstChild)})
            }

    }

})
})