import React, { useState } from "react";
import Card from "./Card/Card";
import "./PageContent.css";
import fruitsImg from "./imgObject";

function PageContent() {
	const [imgsObj, setImgsObj] = useState({ cardsImgs: fruitsImg });

	// Support Function to Shuffle ImgObjects Array
	function shuffleArray(arr) {
		let i = arr.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		const newArr = arr.map((element) => element);
		return newArr;
	}

	const cardComponents = imgsObj["cardsImgs"].map((currImgObj, idx) => {
		return (
			<Card
				key={idx}
				cardImg={currImgObj.image}
				imgAlt={currImgObj.alt}
				// shuffleArr={() => shuffleArray(cardsImgs)}
			/>
		);
	});

	return <div className="cardsContainer">{cardComponents}</div>;
}

export default PageContent;
