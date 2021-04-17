import React, { useState } from "react";
import "./App.css";
import Topbar from "./Topbar/Topbar";
import HeroSection from "./HeroSection/HeroSection";
import List from "./List/List";

const App = () => {
	const [todos, setTodo] = useState([]);
	const [textInput, setTextInput] = useState("");

	const onInputChangeHandler = (e) => {
		setTextInput(e.target.value);
	};

	const onButtonClickHandler = () => {
		addTodo(textInput);
	};

	const addTodo = (task, completed = false) => {
		if (!task) return;

		setTodo([...todos, { task, completed }]);
		setTextInput("");
	};

	const completeTodo = (itemIndex) => {
		const newTodos = Array.from(todos);
		newTodos[itemIndex].completed = !newTodos[itemIndex].completed;
		setTodo(newTodos);
	};

	const onListItemsClickHandler = (index) => {
		completeTodo(index);
	};

	return (
		<>
			<Topbar />
			<HeroSection
				onInputChange={onInputChangeHandler}
				inputTextValue={textInput}
				onButtonClick={onButtonClickHandler}
			/>
			<List onListItemsClick={onListItemsClickHandler} items={todos} />
		</>
	);
};

export default App;
