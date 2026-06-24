const squares = document.querySelectorAll('.sqr')
const boardRow1 = document.querySelector('.row1') 
const boardRow2 = document.querySelector('.row2') 
const boardRow3 = document.querySelector('.row3') 
const boardRow4 = document.querySelector('.row4') 
const boardRow5 = document.querySelector('.row5') 
const boardRow6 = document.querySelector('.row6') 
const boardRow7 = document.querySelector('.row7') 



squares.forEach(function(element){
    if(element.id % 2 && boardRow1.contains(element) || element.id % 2 ===0 && boardRow2.contains(element) || element.id % 2 && boardRow3.contains(element) || element.id % 2 === 0 && boardRow4.contains(element)){
        element.style.backgroundColor = 'white'
        console.log(element)}

     if(element.id % 2 && boardRow2.contains(element)){
        element.style.backgroundColor = 'black'
        console.log(element)}
    
    
    
    
    })
