import React from "react";
import Card from "./Card/Card";
import "./PageContent.css";
import cardsImgs from "./imgObject";

function PageContent() {
	const cardComponents = cardsImgs.map((currImgObj) => {
		return <Card cardImg={currImgObj.image} imgAlt={currImgObj.alt} />;
	});

	return <div className="cardsContainer">{cardComponents}</div>;
}

export default PageContent;
