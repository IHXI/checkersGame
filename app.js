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


let selected = null
let clicked = false



squares.forEach(function(element){
        if(element.id % 2 && boardRow1.contains(element) || element.id % 2 ===0 && boardRow2.contains(element) || element.id % 2 && boardRow3.contains(element) || element.id % 2 === 0 && boardRow4.contains(element) || element.id % 2 && boardRow5.contains(element) || element.id % 2 === 0 && boardRow6.contains(element) || element.id % 2 && boardRow7.contains(element) || element.id % 2 === 0 && boardRow8.contains(element)){
        element.style.backgroundColor = 'wheat'}

        if(element.id % 2 === 0 && boardRow1.contains(element) || element.id % 2 && boardRow2.contains(element) || element.id % 2 === 0 && boardRow3.contains(element) || element.id % 2 && boardRow4.contains(element) || element.id % 2 === 0 && boardRow5.contains(element) || element.id % 2 && boardRow6.contains(element) || element.id % 2 === 0 && boardRow7.contains(element) || element.id % 2 && boardRow8.contains(element)){
        element.style.backgroundColor = 'saddlebrown'}
    })




    


squares.forEach(function(element){
    element.addEventListener('click', function(){
        
        if(element.children[0] && element.children[0].classList[0] === 'green-dot'){
                let pawn = document.createElement('img') 

                if(selected.children[0].classList[0] === 'white-pawn'){
                pawn.src = '/assets/white-pieces/white-pawn.jpg'
                pawn.classList = 'white-pawn'  
                }

                
                if(selected.children[0].classList[0] === 'black-pawn'){
                pawn.src = '/assets/black-pieces/black-pawn.jpg'
                pawn.classList = 'black-pawn' 
                }

            selected.innerHTML = ''
            element.replaceChild(pawn, element.children[0])


        } else {
            squares.forEach(function(element){
                if(element.children[0] && element.children[0].classList[0] === 'green-dot'){
                element.innerHTML= ''
        
                }
            })

            let currentSquare = Number(element.id) 

            if (element.children[0] && element.children[0].classList[0] === 'white-pawn') {

            selected = element
            let move = document.getElementById(currentSquare + 7)
            let move2 = document.getElementById(currentSquare + 9)

            if(Number(element.parentElement.id) +1 === Number(move.parentElement.id) && move.childElementCount === 0){
                let dot1 = document.createElement('img')
                dot1.src = '/assets/green-dot.png'
                dot1.classList = 'green-dot'
                move.appendChild(dot1)
            }

            if(Number(element.parentElement.id) +1 === Number(move2.parentElement.id) &&  move2.childElementCount === 0){
                let dot2 = document.createElement('img')
                dot2.src = '/assets/green-dot.png'
                dot2.classList = 'green-dot'
                move2.appendChild(dot2)
            }
        
    
        }


        if (element.children[0] && element.children[0].classList[0] === 'black-pawn') {

            selected = element

            let move = document.getElementById(currentSquare - 7)
            let move2 = document.getElementById(currentSquare - 9)

            if(Number(element.parentElement.id) -1 === Number(move.parentElement.id) && move.childElementCount === 0){
                let dot1 = document.createElement('img')
                dot1.src = '/assets/green-dot.png'
                dot1.classList = 'green-dot'
                move.appendChild(dot1)
            }

            if(Number(element.parentElement.id) -1 === Number(move2.parentElement.id) &&  move2.childElementCount === 0){
                let dot2 = document.createElement('img')
                dot2.src = '/assets/green-dot.png'
                dot2.classList = 'green-dot'
                move2.appendChild(dot2)
            }

        }

        }












        













    })  
    
})




