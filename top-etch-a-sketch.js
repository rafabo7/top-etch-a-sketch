const container = document.querySelector('#container')

createGrid()

function createGrid(grid=64, color='#000000'){
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    grid = grid*(grid/2)
    for (let i = 0; i < grid; i++){
        const cell = document.createElement('div')
        cell.classList.toggle('cell')

        cellSide = Math.sqrt((600*1200)/(grid))
        cell.style.width = `${cellSide}px`
        cell.style.height = `${cellSide}px`

        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = color
        })
        cell.addEventListener('mouseout', (e) => {
            cell.style.backgroundColor = 'transparent'
            cell.style.transition = 'background-color 6s ease-in'
        })
        container.appendChild(cell)
    }
}

const area = document.querySelector('#grid-area')

area.addEventListener('change', () => {createGrid(area.value, color.value)})

const color = document.querySelector('#color')

color.addEventListener('change', () => {createGrid(area.value, color.value)})





