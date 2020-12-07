import React from "react";
import Card from "./Card/Card";
import cardImg from "./assets/tomato.jpg";

function PageContent() {
	return (
		<div className="cardsContainer">
			<Card cardImg={cardImg} imgAlt="tomatoes" />
		</div>
	);
}

export default PageContent;
