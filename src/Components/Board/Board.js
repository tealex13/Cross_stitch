import React from 'react'
import	'./Board.css';
import {renderRow} from '../Row/Row.js'
import {} from '../../TypeDefs/HoldType.js'
import {Appendage} from '../Appendage/Appendage.js'


const initialBoardState = {	
	width: 6, 
	height: 8};

export class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = initialBoardState;
	}

	generateHts(numberOfHandholds){

	}

	linspace(start, stop, num, endpoint = true) {
		const linArray = [];
	    for (var i = start; i < stop; i++) {
		   linArray.push(i);
		}
		return (linArray);
	}

	mapIndexToHhCoords (index){
		let row = 0;
		let col = 0;
		const width = this.state.width;
		const wDoub = 2 * width - 1;
		const rDoub = Math.trunc(index/wDoub);
		const colOdd = index - rDoub * wDoub; 
		if (colOdd > width){ 
			row = 2 * rDoub + 1;
			col = colOdd - width; 
		}else{
			row = 2 * rDoub;
			col = colOdd; 
		}
		
		return([row,col])
	}

	mapHhCoordsToIndex ([row,col]){
		const index = row * this.state.width - Math.trunc(row/2) + col;
		return (index)
	}

	generateBoard(height, width){
		// const heigh = this.state.height;
		// const width = this.state.height;
		const totalHanholds = height*width - (height % 2);
		let handholdId_first = 0;
		const handholds = [];
			for(let i = 0; i < height; i++){
				const handholdId_last = handholdId_first + width - i % 2;
				const handholdRow = this.linspace(handholdId_first, handholdId_last, 1 );
				handholds.push(handholdRow);
				handholdId_first = handholdId_last;
			}
		return (handholds)
	}



	render(){

		const generatedBoard = this.generateBoard(this.state.height,this.state.width);
		const board = [];
	    for (let i = 0; i < generatedBoard.length; i++){
	    	console.log('row to add ' + generatedBoard[i]);
	      board.push(renderRow(generatedBoard[i]));
	    }

		return(
			<div className = 'Board'>
				<div className = 'Wall'>
					{board}
				</div>
				<div className = 'AppendageStartPos'>
					{Appendage()}
					{Appendage()}
				</div>
			</div>

			);
	}

}
