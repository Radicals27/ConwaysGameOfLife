function conwaysGameOfLife(game) {
	let output = []

	for (let row = 0; row < game.length; row++) {
		output.push([])

		for (let column = 0; column < game[row].length; column++) {
			if(numNeighbours(game, row, column) < 2)
				output[row].push(0)
			else if (game[row][column] == 1 && numNeighbours(game, row, column) >1 && numNeighbours(game, row, column) <4)
				output[row].push(1)
			else if (numNeighbours(game, row, column) > 3)
				output[row].push(0)
			else if (game[row][column] == 0 && numNeighbours(game, row, column) == 3)
				output[row].push(1)
			else
				output[row].push(0)
		}
	}
	console.log(output)
	return output
}

function numNeighbours(array, row, column) {
	let numberOfNeighbours = 0

	if(array[row-1] != undefined && array[column-1] != undefined && array[row-1][column-1] == 1)
		numberOfNeighbours++
	if(array[row-1] != undefined && array[column] != undefined && array[row-1][column] == 1)
		numberOfNeighbours++
	if(array[row-1] != undefined && array[column+1] != undefined && array[row-1][column+1] == 1)
		numberOfNeighbours++

	if(array[row] != undefined && array[column-1] != undefined && array[row][column-1] == 1)
		numberOfNeighbours++
	if(array[row] != undefined && array[column+1] != undefined && array[row][column+1] == 1)
		numberOfNeighbours++

	if(array[row+1] != undefined && array[column-1] != undefined && array[row+1][column-1] == 1)
		numberOfNeighbours++
	if(array[row+1] != undefined && array[column] != undefined && array[row+1][column] == 1)
		numberOfNeighbours++				
	if(array[row+1] != undefined && array[column+1] != undefined && array[row+1][column+1] == 1)
		numberOfNeighbours++

	return numberOfNeighbours
}

conwaysGameOfLife([
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0]
      ])