import React from "react";
import "./Button.style.css";

const Button = (props) => {
	const { onClick } = props;
	return (
		<button className="button" onClick={onClick}>
			Ajouter
		</button>
	);
};

export default Button;
