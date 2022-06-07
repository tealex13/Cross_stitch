import	'./PlayArea.css';
import {renderBoard} from '../Board/Board.js'
import {Hud} from '../Hud/Hud.js'

function PlayArea() {
	return(
		<div className = 'PlayArea'>
		{renderBoard()}
		{Hud()}
		</div>
		);
}

export {PlayArea}