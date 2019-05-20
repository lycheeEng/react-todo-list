import React, { Component } from 'react';
import uuid from 'uuid';

import Title from './Title';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

import './Body.css';

class Body extends Component {
    state = {
        items: [],
        id: uuid(),
        currentItem: '',
        isEdit: false,
        line: false
    }

    componentWillMount = () => {
        let oldItems = window.localStorage.getItem('todo_items');
        if (oldItems === null || oldItems === '') return;
        this.setState({
            items: JSON.parse(oldItems)
        });
    }

    componentDidMount() {
        window.addEventListener('beforeunload', e => {
            e.preventDefault();
            return window.localStorage.setItem('todo_items', JSON.stringify(this.state.items));
        })
    }

    onFormSubmit = e => {
        e.preventDefault();
    }

    handleInputChange = val => {
        this.setState({
            id: uuid(),
            currentItem: val.target.value,
        });

    }

    handleButtonClick = e => {
        if (this.state.currentItem === '') return;

        const newItem = {
            id: this.state.id,
            item: this.state.currentItem,
            isDone: false
        }

        const newItems = [...this.state.items, newItem];

        this.setState({
            items: newItems,
            currentItem: '',
            isEdit: false
        });
    }

    handleKeyUp = e => {
        if (e.keyCode === 13) this.handleButtonClick(e);
    }

    handleRemoveAll = () => {
        this.setState({
            items: [],
            isEdit: false,
            currentItem: ''
        });
    }

    handleDeleteItem = id => {
        const items = this.state.items;

        const filteredItems = items.filter(item => item.id !== id);

        this.setState({
            items: filteredItems,
            isEdit: false,
            currentItem: ''
        });
    }

    handleItemTextClick = id => {
        const items = Array.from(this.state.items);

        items.filter(item => {
            if (item.id === id) {
                item.isDone = true;
            };
            return item;
        });

        this.setState({
            items
        });
    }

    handleEdit = item => {
        this.handleDeleteItem(item.id);

        this.setState({
            isEdit: true,
            id: item.id,
            currentItem: item.item
        });
    }

    render() {
        return (
            <section>
                <Title />
                <TodoInput
                    isEdit={this.state.isEdit}
                    handleKeyUp={this.handleKeyUp}
                    handleButtonClick={this.handleButtonClick}
                    currentItem={this.state.currentItem}
                    onFormSubmit={this.onFormSubmit}
                    handleInputChange={this.handleInputChange} />
                <TodoList
                    handleItemTextClick={this.handleItemTextClick}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteItem={this.handleDeleteItem}
                    handleEdit={this.handleEdit}
                    items={this.state.items}
                />
            </section>
        );
    }
}

export default Body;