import React from 'react';

import './TodoItem.css';

function TodoItem (props) {
    const {todo, handleDeleteItem, handleItemTextClick, isDone, handleEdit} = props;

    return (
        <li className='todo-item'>
            <span 
                onClick={handleItemTextClick}
                className={isDone ? 'todo-item-text linethrough' : 'todo-item-text'}>
                {todo}
            </span>
            <span className='todo-item-action'>
                <i 
                    className="fas fa-pen"
                    onClick={handleEdit}
                    ></i>
                <i 
                    className="fas fa-trash"
                    onClick={handleDeleteItem}
                    ></i>
            </span>
        </li>
    );
}

export default TodoItem;