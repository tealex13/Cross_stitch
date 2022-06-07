import	'./Game.css';
import {PlayArea} from '../PlayArea/PlayArea.js'
import {History} from '../History/History.js'

function Game() {
	return(
		<div className = 'Game'>
		{History()}
		{PlayArea()}
		</div>
		);
}

export {Game}