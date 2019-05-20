import React from 'react';

import './TodoInput.css';

function TodoInput(props) {
    const { currentItem, onFormSubmit, handleInputChange, handleButtonClick, handleKeyUp, isEdit } = props;

    return (
        <div className='todo-input'>
            <form onSubmit={onFormSubmit}>
                <input
                    value={currentItem}
                    type="text"
                    className="todo-input-field"
                    placeholder="Add your todos..."
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp} />
                <button
                    onClick={handleButtonClick}
                    type="submit"
                    className={isEdit ? 'btn btn-primary btn-inside btn-edit' : 'btn btn-primary btn-inside'}>
                    {isEdit ? 'Edit' : 'Add'}
                </button>
            </form>
        </div>
    );
}

export default TodoInput;