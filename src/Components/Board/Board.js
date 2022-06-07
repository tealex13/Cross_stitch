import	'./Board.css';
import {renderRow} from '../Row/Row.js'

function linspace(start, stop, num, endpoint = true) {
	const linArray = [];
    for (var i = start; i < stop; i++) {
	   linArray.push(i);
	}
	return (linArray);
}

function generateBoard(height, width){
	const totalHanholds = height*width - (height % 2);
	let handholdId_first = 0;
	const handholds = [];
		for(let i = 0; i < height; i++){
			const handholdId_last = handholdId_first + width - i % 2;
			const handholdRow = linspace(handholdId_first, handholdId_last, 1 );
			handholds.push(handholdRow);
			handholdId_first = handholdId_last;
		}
	return (handholds)

}

function renderBoard(){
	const numberOfRows = 8;
	const handholds = [{id: 1},{id: 2},{id: 3},{id: 4}];
	const row = [];
	for(let i = 0; i < handholds.length; i++){
		row.push(handholds);
	}

	const board = [];
    for (let i = 0; i < numberOfRows; i++){
      board.push(renderRow(row));
    }

	return(
		<div className = 'Board'>
			<div className = 'Wall'>
				{board}
			</div>
			<div className = 'AppendageStartPos'>
				<div className = 'Appendage'>
					left Hand
				</div>
				<div className = 'Appendage'>
					right Hand
				</div>
			</div>
		</div>

		);
}

export {renderBoard}
export {generateBoard}