const container = document.querySelector('#container')

function createGrid(){
    const cell = document.createElement('div')
    cell.classList.toggle('cell')
    cell.addEventListener('mouseover', (e) => {
        cell.style.backgroundColor = 'black'
    })
    cell.addEventListener('mouseout', (e) => {
        cell.style.backgroundColor = 'transparent'
        cell.style.transition = 'background-color 6s ease-in'
    })
    container.appendChild(cell)
}

for (let i = 0; i < 16**2; i++){
    createGrid()
}


