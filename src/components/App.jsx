import React, { useState, useEffect } from "react";
import "./App.css";
import Topbar from "./Topbar/Topbar";
import HeroSection from "./HeroSection/HeroSection";
import List from "./List/List";

const App = () => {
	const [todos, setTodo] = useState(() => {
		const storedValue = localStorage.getItem('todos');
		return storedValue !== null ? JSON.parse(storedValue) : [];
	  });
	const [textInput, setTextInput] = useState("");

	const onInputChangeHandler = (e) => {
		setTextInput(e.target.value);
	};

	const onButtonClickHandler = () => {
		addTodo(textInput);
	};  
	
	useEffect(() => {
		if (todos !== null) {
		  localStorage.setItem('todos', JSON.stringify(todos));
		}
	  }, [todos]);

	const addTodo = (task, completed = false) => {
		if (!task) return;

		setTodo([...todos, { task, completed }]);
		setTextInput("");
	};
	
	const deleteTodo = (itemIndex) => {
		const todosArr = Array.from(todos);
		console.log(itemIndex);
		console.dir(todosArr);
		const newTodos = todosArr.filter((_,i) => i !== itemIndex);
		console.dir(newTodos);
		setTodo(newTodos);
	};

	const completeTodo = (itemIndex) => {
		const newTodos = Array.from(todos);
		newTodos[itemIndex].completed = !newTodos[itemIndex].completed;
		setTodo(newTodos);
	};

	const editTodo = (itemIndex,newTask) => {
		const todosArr = Array.from(todos);
		const editedTodos = todosArr.map((todo,i) => {
			if(i == itemIndex)
				todo.task = newTask;
			return todo;
		});
		setTodo(editedTodos);
	}

	const onListItemsClickHandler = (index) => {
		completeTodo(index);
	};
	const onDeleteItemsClickHandle = (index) => {
		console.log("Hi");
		deleteTodo(index);
	};
	const onEditItemsClickHandler = (index) => {
		
		editTodo(index,textInput);
	};

	return (
		<>
			<Topbar />
			<HeroSection
				onInputChange={onInputChangeHandler}
				inputTextValue={textInput}
				onButtonClick={onButtonClickHandler}
				onEditButtonClick={onEditItemsClickHandler}
			/>
			<List 
			onListItemsClick={onListItemsClickHandler} 
			onClickButtonDelete={onDeleteItemsClickHandle} 
			items={todos} 
			onEditButtonClick={onEditItemsClickHandler}
			/>
		</>
	);
};

export default App;
