import React from "react";
import "./Card.css";

function Card(props) {
	return <img className="card" alt={props.imgAlt} src={props.cardImg}></img>;
}

export default Card;
