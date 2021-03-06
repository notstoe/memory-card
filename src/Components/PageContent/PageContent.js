import React, { useState } from "react";
import Card from "./Card/Card";
import "./PageContent.css";
import fruitsImg from "./imgObject";

function PageContent(props) {
	const { incScore, resetScore, isHighScore } = props;
	const [imgsObj, setImgsObj] = useState({ cardsImgs: fruitsImg });
	const [scoreObj, setScoreObj] = useState({});

	function handleClick(e) {
		const { alt } = e.target;

		if (scoreObj.hasOwnProperty(alt)) {
			isHighScore();
			resetScore();
			setScoreObj({});
		} else {
			setScoreObj({ ...scoreObj, [alt]: true });
			let newScore = incScore();
			if (newScore > 14) {
				alert("Congrats for winning the game!");
				isHighScore(15);
				resetScore();
				setScoreObj({});
			}
		}

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
