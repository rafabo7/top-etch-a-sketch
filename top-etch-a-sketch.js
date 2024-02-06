const container = document.querySelector('#container')

function createGrid(){
    const cell = document.createElement('div')
    cell.classList.toggle('cell')
    container.appendChild(cell)
}

for (let i = 0; i < 16**2; i++){
    createGrid()
}

console.log('working')
