import	'./Handhold.css';

function renderHandhold(handholdData) {
	const id = handholdData;
	return(
		<button className = 'Handhold'  key = {id}>
				{id}
		</button>
		);
}

export {renderHandhold}