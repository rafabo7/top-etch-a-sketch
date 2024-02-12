const container = document.querySelector('#container')

createGrid()

function createGrid(grid=64, color='#000000'){
    // Remove the current grid
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    // Correct users input, odd numbers lead to bugs
    if (grid%2 != 0){
        grid++
    }
    // Create the divs to be the cells of the grid
    grid = grid*(grid/2) // Formula to fit the aspect ratio of the grid
    for (let i = 0; i < grid; i++){
        const cell = document.createElement('div')
        cell.classList.toggle('cell')
        container.appendChild(cell)

        // Formula to get the size of the cell
        cellSide = Math.sqrt((600*1200)/(grid))
        cell.style.width = `${cellSide}px`
        cell.style.height = `${cellSide}px`

        // Event listener to change color when mouse pass over
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = color
        })
    }
}

const area = document.querySelector('#grid-area')

area.addEventListener('change', () => {createGrid(area.value, color.value)})

const color = document.querySelector('#color')

color.addEventListener('change', () => {createGrid(area.value, color.value)})

const resetBtn = document.querySelector('#reset')

resetBtn.addEventListener('click', () => {createGrid(area.value, color.value)})





