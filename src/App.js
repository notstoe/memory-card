import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import PageContent from "./Components/PageContent/PageContent";

function App() {
	const [score, setScore] = useState(0);

	function incScore() {
		setScore(score + 1);
	}

	function resetScore() {
		setScore(0);
	}

	return (
		<div>
			<Header score={score} />
			<PageContent incScore={incScore} resetScore={resetScore} />
		</div>
	);
}

export default App;
