
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

let clicked = false

squares.forEach(function(element){
    if(element.id % 2 && boardRow1.contains(element) || element.id % 2 ===0 && boardRow2.contains(element) || element.id % 2 && boardRow3.contains(element) || element.id % 2 === 0 && boardRow4.contains(element) || element.id % 2 && boardRow5.contains(element) || element.id % 2 === 0 && boardRow6.contains(element) || element.id % 2 && boardRow7.contains(element) || element.id % 2 === 0 && boardRow8.contains(element)){
        element.style.backgroundColor = 'wheat'}

    if(element.id % 2 === 0 && boardRow1.contains(element) || element.id % 2 && boardRow2.contains(element) || element.id % 2 === 0 && boardRow3.contains(element) || element.id % 2 && boardRow4.contains(element) || element.id % 2 === 0 && boardRow5.contains(element) || element.id % 2 && boardRow6.contains(element) || element.id % 2 === 0 && boardRow7.contains(element) || element.id % 2 && boardRow8.contains(element)){
        element.style.backgroundColor = 'saddlebrown'}
    


   element.addEventListener('click', function(){
    console.log(element.id)
    if (element.children[0].classList[0] === 'white-pawn') {
        const image = document.createElement('img')
        image.src = '/assets/green-dot.png'
        image.classList = 'green-dot'
        
        let currentSquare = Number(element.id) 

        console.log(currentSquare)
        let move = document.getElementById(currentSquare + 7)
        move.appendChild(image)

        let move2 = document.getElementById(currentSquare + 9)
        move2.appendChild(image)
        console.log(move)
        console.log(move2)

    }




    if (element.children[0].classList[0] === 'black-pawn') {
        element.removeChild(element.firstChild)
        console.log(currentSquare)
        let move = document.getElementById(currentSquare -= 9)
        move.appendChild(image)

    }


    })
    

})