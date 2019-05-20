import React from 'react';

import TodoItem from './TodoItem';

import './TodoList.css';

function TodoList(props) {
    const { items, handleRemoveAll, handleDeleteItem, handleItemTextClick, handleEdit } = props;

    return (
        <ul className='todo-list'>
            <div className='caption'>
                <span className='caption-title'>
                    Your todos
                </span>
                <span
                    className='caption-action'
                    onClick={handleRemoveAll}
                >
                    Remove all
                </span>
            </div>

            {
                items.map(item => {
                    return <TodoItem
                        key={item.id}
                        todo={item.item}
                        isDone={item.isDone}
                        handleEdit={() => handleEdit(item)}
                        handleItemTextClick={() => handleItemTextClick(item.id)}
                        handleDeleteItem={() => handleDeleteItem(item.id)}
                    />
                })
            }
        </ul>
    );
}

export default TodoList;