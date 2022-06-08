import	'./Row.css';
import {renderHandhold} from '../Handhold/Handhold.js'

function renderRow(rowData){
	// console.log( 'row data ' + rowData);	
	const row = [];
	const id = rowData[0];
    for (let i = 0; i < rowData.length; i++){
      row.push(renderHandhold(rowData[i]));
    }

	return(

		<div className = 'Row' key = {id}>
			{row}			
		</div>
		);
}

export {renderRow}