import './styles.css';
import knightIMG from './images/knight.jpg'

/* let knight = document.createElement('img')
knight.src = knightIMG
knight.width = knight.height = 50
 */
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

function knightMoves(target) {
    //document.getElementById(start).textContent = ""
    let knight = document.createElement('img')
    knight.src = knightIMG
    knight.width = knight.height = 50
    document.getElementById(target).appendChild(knight)
}

function outputMoveList(node) {
    const moveList = []
    while(node != null) {
        moveList.push([node.row, node.col])
        node = node.predecessor
    }
    
    console.log("Hooray You Did it! Here are your moves!")
    for(let i = moveList.length-1; i >= 0; i--) {
        console.log(moveList[i])
        knightMoves(moveList[i][0] + "-" + moveList[i][1])
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
            /* row.addEventListener('mouseover', () =>{
                if(mouseToggle)
                {
                    row.setAttribute("style", "background-color:black;")
                }
                
            }) */
            
            row.textContent = (k+1) + '-' +(i+1);
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    document.getElementById("content").appendChild(grid);
}


generateGrid(8)
let result = getKnightShortestPath( 7, 7, 1, 5)
console.log(result)
outputMoveList(result)