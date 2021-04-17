import React from "react";
import "./ListItems.style.css";

const ListItems = ({ item, onClick, itemIndex }) => {
	return (
		<li
			onClick={() => onClick(itemIndex)}
			className={`app-list-items ${item.completed ? "completed" : ""}`}
		>
			{item.task}
		</li>
	);
};

export default ListItems;
