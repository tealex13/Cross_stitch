import	'./Row.css';
import {Handhold} from '../Handhold/Handhold.js'

function renderRow(rowData){
	// console.log( 'row data ' + rowData);	
	const row = [];
	const id = rowData[0];
    for (let i = 0; i < rowData.length; i++){
      row.push(<Handhold id = {rowData[i]}/>)
      // row.push(<div>hello</div>);
    }

	return(

		<div className = 'Row' key = {id}>
			{row}			
		</div>
		);
}

export {renderRow}