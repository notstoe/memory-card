import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import PageContent from "./Components/PageContent/PageContent";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	function incScore() {
		setScore(score + 1);
		return score + 1;
	}

	function resetScore() {
		setScore(0);
	}

	function isHighScore(maxPoints) {
		if (maxPoints) {
			setHighScore(maxPoints);
			return;
		}
		if (score > highScore) setHighScore(score);
	}

	return (
		<div>
			<Header score={score} highScore={highScore} />
			<PageContent
				incScore={incScore}
				resetScore={resetScore}
				isHighScore={isHighScore}
			/>
		</div>
	);
}

export default App;
