import React from "react";
import "./Topbar.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
	return (
		<nav id="app-nav">
			<div id="app-logo">
				Just show some <FontAwesomeIcon icon={faHeart} color="rebeccapurple" />
			</div>
		</nav>
	);
};

export default Topbar;
