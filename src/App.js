import {TodoList} from "./components/TodoList";
import React, {useEffect, useRef, useState} from "react";
import {v4} from 'uuid';
import {Button} from "./components/Button";
import './App.css';
import {DoneList} from "./components/DoneList";
const App = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    const LOCAL_KEY = 'todo';

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) setTodos(savedTodos);
        }, [])


    useEffect((e) => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(Object.keys(todos))
        }, [todos])

    const toggleComplete = (id) => {
        const addTodos = [...todos];
        const todo = addTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(addTodos);
    }

    const handleDeleteClick = (id) => {
        const addTodos = [...todos];
        const todo = addTodos.find(todo => todo.id === id);
        localStorage.removeItem(todo.id);
        todo.complete = !todo.complete;
        setTodos(addTodos);
    }
    function handleAdd() {
        const name = inputRef.current.value;
        if(name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id: v4(), name: name, complete: false}]
        })
        inputRef.current.value = null;
    }

    function deleteAll() {
        localStorage.clear();
        window.location.reload();
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }


    return (
        <>
            <header className='App-header'>
                <h1>Todo</h1>
            </header>

            <div className='input'>
                <div>
                    <input ref={inputRef} type="text"/>
                    <Button onClick={handleAdd} text={"Add Todo"}/>
                    <Button onClick={deleteAll} text={"Delete all Todos"}/>
                </div>

            </div>
            <main className='complete-list'>

                <div className='list'>
                    <TodoList list={todos} toggleTodo={toggleComplete} handleRemove={deleteTodo}/>
                </div>

                <div className='list'>
                    <DoneList list={todos} toggleTodo={toggleComplete} handleRemove={deleteTodo}/>
                </div>
            </main>
        </>
    );
};
export default App;