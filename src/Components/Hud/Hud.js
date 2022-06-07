import	'./Hud.css';
import {Card} from '../Card/Card.js'
function Hud(){
	return(
		<button className = 'Hud'>
			{Card()}
			{Card()}

		</button>
		);
}

export {Hud}