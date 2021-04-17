import React from "react";
import ListItems from "../ListItems/ListItems";
import "./List.style.css";

const List = ({ items, onListItemsClick }) => {
	return (
		<ul id="app-list">
			{items.map((item, index) => (
				<ListItems
					key={index}
					itemIndex={index}
					item={item}
					onClick={onListItemsClick}
				/>
			))}
		</ul>
	);
};

export default List;
