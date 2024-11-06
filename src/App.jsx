import { useState, useRef } from "react";
import "./App.css";
import logo from "./to-do-list.png";
import add from "./add.png";
import remove from "./delete.png";
function App() {
	const [todos, setTodos] = useState([]);
	const inputRef = useRef();
	const handelAddTodo = () => {
		const text = inputRef.current.value;
		if (text.length < 1) {
			return;
		}
		const newItem = { completed: false, text };
		setTodos([...todos, newItem]);
		inputRef.current.value = "";
	};
	const handleItemDone = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};
	const handelDeleteItem = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	return (
		<div className="App container py-5 d-flex flex-column justify-content-center align-items-center">
			<img src={logo} alt="logo" width={50} height={50} className="logo" />
			<h1 className="text-center mb-5 title">To-do List</h1>
			<div className="d-flex justify-content-between w-100">
				<input
					type="text"
					placeholder="Enter To-do Item"
					className="p-2 rounded-3 border-1 w-100 me-3 input"
					ref={inputRef}
				/>
				<img
					src={add}
					alt="add"
					width={50}
					height={50}
					className="add"
					onClick={handelAddTodo}
				/>
			</div>
			<ul className="w-100 my-5 list-unstyled d-flex flex-column p-3">
				{todos.map(({ completed, text }, index) => (
					<div key={index} className="d-flex justify-content-between">
						<li
							className={completed ? "done w-100" : ""}
							onClick={() => handleItemDone(index)}
						>
							{text}
						</li>
						<img
							src={remove}
							alt="add"
							width={20}
							height={20}
							className="delete  me-0"
							onClick={() => handelDeleteItem(index)}
						/>
					</div>
				))}
			</ul>
		</div>
	);
}

export default App;
