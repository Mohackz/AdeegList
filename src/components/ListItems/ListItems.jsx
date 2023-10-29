import React from "react";
import "./ListItems.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItems = ({ item, onClick,onEditClick, onDeleteClick, itemIndex }) => {
	return (
		<div className="wrapper-list-items">
			<li
				onClick={() => onClick(itemIndex)}
				className={`app-list-items ${item.completed ? "completed" : ""}`}
			>
				{item.task}
			</li>
			<button 
				className="myButton infoButton" 
				onClick={() => onEditClick(itemIndex)}><FontAwesomeIcon 
				icon={faEdit} color="whitesmoke" /></button> 
			<button 
				className="myButton" 
				onClick={() => onDeleteClick(itemIndex)}><FontAwesomeIcon 
				icon={faTrash} color="whitesmoke" /></button> 
		</div>

	);
};

export default ListItems;
