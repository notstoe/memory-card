import React from "react";
import "./Header.css";
import github from "./assets/github.png";

function Header() {
	return (
		<header>
			<div className="headerChildren">
				<h1 id="pageTitle">Memory Card</h1>
				<a href="https://github.com/notstoe/memory-card">
					<img id="github" src={github} alt="github" />
				</a>
				<div className="scoreboardContainer">
					<div className="scoreboard">Score: 0</div>
					<div className="scoreboard">Highest Score: 0</div>
				</div>
			</div>
			<p id="pageSubtitle">Don't click on the same card twice!</p>
		</header>
	);
}

export default Header;
