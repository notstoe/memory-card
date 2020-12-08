import React from "react";
import "./Card.css";

function Card(props) {
	const { imgAlt, cardImg } = props;

	return (
		<img
			onClick={() => console.log("clicked")}
			className="card"
			alt={imgAlt}
			src={cardImg}
		/>
	);
}

export default Card;
