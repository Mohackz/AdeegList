import React from "react";
import "./InputText.style.css";

const InputText = (props) => {
	const { onChange, value } = props;
	return (
		<input
			type="text"
			className="input"
			placeholder="Ex: 2kg tomato"
			onChange={onChange}
			value={value}
		/>
	);
};

export default InputText;
