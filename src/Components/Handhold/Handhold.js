import React from 'react';
import	'./Handhold.css';
import { useRef, useState, useEffect } from "react";



class Handhold extends React.Component {
	constructor(props){
		super(props);

		this.state = {id: 0}
	}
	// const boxRef = useRef();

	//   // X
	// const [x, setX] = useState();

	// // Y
	// const [y, setY] = useState();
	// const getPosition = () => {
	// // const x = boxRef.current.offsetLeft;
	// const x = 2;
	// setX(x);

	// // const y = boxRef.current.offsetTop;
	// const y = 3;
	// setY(y);
	// 	};

	// useEffect(() => {
	//     getPosition();
	//   }, []);


	 

	render(){
		return(
		<button className = 'Handhold'  key = {this.state.id}>
				{this.props.id}
		</button>
		)
		};
}

export {Handhold}