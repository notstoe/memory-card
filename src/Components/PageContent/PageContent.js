import React, { useState } from "react";
import Card from "./Card/Card";
import "./PageContent.css";
import fruitsImg from "./imgObject";

function PageContent() {
	const [imgsObj, setImgsObj] = useState({ cardsImgs: fruitsImg });

	function handleClick() {
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

		let oldArr = imgsObj["cardsImgs"].map((element) => element);
		let shuffledArr = shuffleArray(oldArr); //shuffled array is saved into a variable for changing state

		setImgsObj({ cardsImgs: shuffledArr });
	}

	const cardComponents = imgsObj["cardsImgs"].map((currImgObj, idx) => {
		return (
			<Card
				key={idx}
				cardImg={currImgObj.image}
				imgAlt={currImgObj.alt}
				handleClick={handleClick}
			/>
		);
	});

	return <div className="cardsContainer">{cardComponents}</div>;
}

export default PageContent;
