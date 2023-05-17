import {Todo} from "./Todo";

export const TodoList = ({ list, toggleTodo, handleRemove}) => {


    return (
    <div>
        <h2 className='title-list'>To be done:</h2>
        <ul>
            {list.map((item) => (
                item.complete === false ?
                    <Todo {...item} key={item.id} toggleTodo={toggleTodo} todo={item} handleRemove={handleRemove}/> : null
            ))}
        </ul>
    </div>
    )};