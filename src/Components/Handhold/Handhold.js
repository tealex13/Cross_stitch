import	'./Handhold.css';

function renderHandhold(handholdData) {
	return(
		<button className = 'Handhold'>
		Handhol
			<button>
				{handholdData.id + 'handhold'}
			</button>
		</button>
		);
}

export {renderHandhold}