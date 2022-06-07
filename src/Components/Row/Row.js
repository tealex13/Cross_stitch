import	'./Row.css';
import {renderHandhold} from '../Handhold/Handhold.js'

function renderRow(rowData){

	let row = [];
    for (let i = 0; i < rowData.length; i++){
      row.push(renderHandhold(rowData[i]));
    }
	return(

		<div className = 'Row'>
			{row}			
		</div>
		);
}

export {renderRow}