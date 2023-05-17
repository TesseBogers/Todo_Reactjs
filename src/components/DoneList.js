import {Todo} from "./Todo";

export const DoneList = ({ list, toggleTodo, handleRemove}) => (
    <div>
        <h2 className='title-list'>Good job!</h2>
        <ul>
            {list.map((item) => (
                item.complete === true ? <Todo {...item} key={item.id} toggleTodo={toggleTodo} todo={item} handleRemove={handleRemove}/> : null
            ))}
        </ul>
    </div>
);