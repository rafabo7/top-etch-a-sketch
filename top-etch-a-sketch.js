const container = document.querySelector('#container')

createGrid()

function createGrid(grid=16){
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < grid**2; i++){
        const cell = document.createElement('div')
        cell.classList.toggle('cell')


        cellSide = 600 / grid
        cell.style.width = `${cellSide}px`
        cell.style.height = `${cellSide}px`

        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = 'black'
        })
        cell.addEventListener('mouseout', (e) => {
            cell.style.backgroundColor = 'transparent'
            cell.style.transition = 'background-color 6s ease-in'
        })
        container.appendChild(cell)
    }
}

const area = document.querySelector('#grid-area')

area.addEventListener('change', () => {createGrid(area.value)})



