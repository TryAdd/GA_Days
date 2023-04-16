// Drawn our board
// Made our Pika Square appear Randomly every 3 seconds
//Make our cells Clickable
//Incremented the score when user clicks a pikachu

//End The Game after 10 pikachus have been generated
//Show the user their score, when the game ends 

// <--------------------------- how to add timer---------------------------->
// for the timer we use let
// let timerRemaining = 20 for example
// const timer = setInterval(()=>{
//     code()
//     timeRemaining --
// }, 1000)

function init(){
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score-display')

    const width = 10
    const gridCellCount = width * width
    const cells = []

    let pikaPosition = 0
    let score = 0
    let totalPikas = 0

    function createGrid() {
        for (let i = 0; i < gridCellCount; i++){
            const cell = document.createElement('div')
            cell.textContent = i
            cells.push(cell)
            grid.appendChild(cell)
        }
    }

    function handleWhack(event){
        if (event.target.classList.contains('pika')) {
            score = score + 100
            cells[pikaPosition].classList.remove('pika')
        }
        scoreDisplay.textContent = score
    }

    function startGame(){
        const timer = setInterval(() => {
            if (totalPikas >= 9){
                clearInterval(timer)
                alert(score)
                return
            }

            totalPikas ++
            cells[pikaPosition].classList.remove('pika')
            pikaPosition = Math.floor(Math.random() * gridCellCount)
            cells[pikaPosition].classList.add('pika')
        }, 500)
    }

    createGrid()
    startGame()
    cells.forEach(cell => {
        cell.addEventListener('click', handleWhack)
    })
    
}

window.addEventListener('DOMContentLoaded', init)