import './styles.css';
import startIMG from './images/white-knight.png'
import endIMG from './images/red-knight.png'
import completeIMG from './images/green-knight.png'

const sideBar = document.querySelector('.sidebar')
const submitPosition = document.createElement('button')
const clearBoard = document.createElement('button')
const outputBox = document.createElement('div')
sideBar.appendChild(submitPosition)
sideBar.appendChild(clearBoard)
sideBar.appendChild(outputBox)
submitPosition.className = "submitPosition"
submitPosition.textContent = "Submit Position"
clearBoard.className = "clearBoard"
clearBoard.textContent = "Clear Board"
outputBox.className = "outputBox"

let startKnight = document.createElement('img')
let endKnight = document.createElement('img')
startKnight.src = startIMG
endKnight.src = endIMG
startKnight.width = startKnight.height = endKnight.width = endKnight.height = 75

let startTarget = [4,4]
let endTarget = [6,6]

const knightDirections = [[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]]

class positionNode {
    constructor(row, col, distFromStart, predecessor) {
        this.row = row
        this.col = col
        this.distFromStart = distFromStart
        this.predecessor = predecessor
    }

    getPositionString() {
        return `${this.row}, ${this.col}`
    }
}

//Populates all possible moves from a given row and col position
const getNeighbors = (row, col) => {
    const neighbors = []

    for (const knightDirection of knightDirections) {
        const [rowChange, colChange] = knightDirection

        const neighborRow = row + rowChange
        const neighborCol = col + colChange

        if(0 < neighborRow && neighborRow <= 8 && 0 < neighborCol && neighborCol <= 8) {
            neighbors.push([neighborRow, neighborCol])
        }
    }

    return neighbors
}

function getKnightShortestPath(startRow, startCol, targetRow, targetCol) {
    const queue = []
    const startNode = new positionNode(startRow, startCol, 0)
    queue.push(startNode)

    // Make a set so we know all moves we have tried and dont re-attempt them
    const visited = new Set()

    while(queue.length > 0) {
        //Remove node.
        const node = queue.shift()
        // Gather data from removed node.
        const {row, col, distFromStart} = node

        //Process the removed node from queue
        //If node data equals our target then stop. Otherwise continue to search and add to visited.
        if(row === targetRow && col === targetCol) return node
        visited.add(node.getPositionString())

        //Add Neighbors since we did not find the position we were looking for.
        for(const neighbor of getNeighbors(row,col)) {
            const [neighborRow, neighborCol] = neighbor
            const neighborNode = new positionNode(neighborRow, neighborCol, distFromStart + 1, node)

            // If we have visited already, then dont bother adding to queue
            if(visited.has(neighborNode.getPositionString())) continue
            queue.push(neighborNode)
        }
    }

    return "Out of Bounds"
}

function appendKnight(target, img) {
    if(target === null) return
    let knight = document.createElement('img')
    knight.src = img
    knight.width = knight.height = 75
    document.getElementById(target).textContent = target
    document.getElementById(target).appendChild(knight)
}

function outputMoveList(node) {
    const moveList = []
    while(node != null) {
        moveList.push([node.row, node.col])
        node = node.predecessor
    }
    
    console.log("Hooray You Did it! Here are your moves!")
    var result = "Hooray You Did it! \nHere are your moves!\n"
    for(let i = moveList.length-1; i >= 0; i--) {
        console.log(moveList[i] + " => ")
        result = result + moveList[i] + (i > 0 ? " =>\n" : "")
        outputBox.textContent = result
        if(i == moveList.length-1) appendKnight(moveList[i][0] + "-" + moveList[i][1], startIMG)
        else if(i == 0) appendKnight(moveList[i][0] + "-" + moveList[i][1], endIMG)
        else appendKnight(moveList[i][0] + "-" + moveList[i][1], completeIMG)
        
    }

}

function generateGrid(size)
{
    let grid = document.createElement('grid');
    grid.className = 'grid';

    for(let i = 0; i < size; i++) // Columns
    {
        let column = document.createElement('div');
        column.className = 'column';
        for(let k = 0; k < size; k++) // Rows
        {
            let row = document.createElement('div');
            row.className = 'row';
            row.id = (k+1) + '-' +(i+1);
            if((i % 2) == 0) {
                if((k % 2) == 0) row.className = 'rowWhite'
                else row.className = 'rowGrey'
            }
            else {
                if((k % 2) == 0) row.className = 'rowGrey'
                else row.className = 'rowWhite'
            }
            // Add Event to assign start Position
            row.addEventListener('click', (event) =>{
                var id = event.target.id
                if(id == "") return
                //console.log("left-click: " + id + " sliced: " + id.slice(0,1) + " " + id.slice(2,3));
                startTarget[0] = id.slice(0,1)
                startTarget[1] = id.slice(2,3)
                let target = startTarget[0] + "-" + startTarget[1]
                document.getElementById(target).textContent = target
                document.getElementById(target).appendChild(startKnight)
                
            }) // Add Event to assign end Position
            row.addEventListener('contextmenu', (event) => {
                event.preventDefault()
                var id = event.target.id
                if(id == "") return
                //console.log("right-click: " + id + " sliced: " + id.slice(0,1) + " " + id.slice(2,3));
                endTarget[0] = id.slice(0,1)
                endTarget[1] = id.slice(2,3)
                let target = endTarget[0] + "-" + endTarget[1]
                document.getElementById(target).textContent = target
                document.getElementById(target).appendChild(endKnight)
                
            });
            
            row.textContent = (k+1) + '-' +(i+1);
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    document.getElementById("content").textContent = " "
    document.getElementById("content").appendChild(grid);
}

submitPosition.addEventListener('click', () =>{
    generateGrid(8)
    let result = getKnightShortestPath( parseInt(startTarget[0]), parseInt(startTarget[1]), parseInt(endTarget[0]), parseInt(endTarget[1]))
    console.log(result)
    outputMoveList(result)
})

clearBoard.addEventListener('click', () =>{
    generateGrid(8)
})

generateGrid(8)