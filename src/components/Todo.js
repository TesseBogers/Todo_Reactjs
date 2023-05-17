
export const Todo = ({todo, toggleTodo, handleRemove, id}) => {

    const handleClick = () => {
        toggleTodo(todo.id)
    }

    return (
    <div>
        <label className="single-todo">
            <input type="checkbox" onChange={handleClick} checked={todo.complete} name={todo.id}/>
            {todo.name}
            <button type="button" onClick={() => handleRemove(id)} >VERWIJDER MIJ</button>
        </label>
    </div>
    );
}

