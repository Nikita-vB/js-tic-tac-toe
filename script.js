//find html element with class container and save it as variable called container
const container = document.querySelector('.container')
const cellValues = Array(9).fill(null) //create array with 9 null values
const symbols = ['O', 'X']

function drawBoard() {
    // reset all the HTML inside the container
    container.innerHTML = ''
    // for loop that creates 9 elements
    for (let i = 0; i < 9; i++){
        // create a HTML element:
        const cell = document.createElement('div')

        // add a css class to the element (class has to exist in the index HTML file)
        cell.classList.add('cell')

        // these 3 lines create <p class="symbol">X</p>
        const symbol = document.createElement('p')
        symbol.classList.add('symbol')
        symbol.innerText = cellValues[i]

         //put the symbol inside the cell
         cell.append(symbol)

         //put these cells on the page - append them to the container
         container.append(cell)

        cell.addEventListener('click', function(){
            symbols.reverse()
            cellValues[i] = symbols[0]
            console.log(cellValues)
            drawBoard()
        })

    }
}

drawBoard()