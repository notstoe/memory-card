import React from "react";
import "./Card.css";

function Card(props) {
	const { handleClick, imgAlt, cardImg } = props;

	return (
		<img onClick={handleClick} className="card" alt={imgAlt} src={cardImg} />
	);
}

export default Card;
