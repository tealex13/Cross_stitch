import	'./PlayArea.css';
import {Board} from '../Board/Board.js'
import {Hud} from '../Hud/Hud.js'

function PlayArea() {
	 const localBoard = new Board;
	return(
		<div className = 'PlayArea'>
		{localBoard.render()}
		{Hud()}
		</div>
		);
}

export {PlayArea}