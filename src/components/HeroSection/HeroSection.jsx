import React from "react";
import "./HeroSection.style.css";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";

const HeroSection = (props) => {
	const { onInputChange, onButtonClick, inputTextValue } = props;
	return (
		<header id="app-header">
			<h1 id="app-header-title">Adeeg List</h1>
			<div id="app-header-fields">
				<InputText onChange={onInputChange} value={inputTextValue} />
				<Button onClick={onButtonClick} />
			</div>
		</header>
	);
};

export default HeroSection;
