import React from 'react';
import DisplayList from './DisplayList';

const items = ['apple', 'mango', 'grapes', 'watermelon', 'pineapple', 'banana'];

export default function PassedProps() {
    return (
        <div>
            <h1>Fruit List</h1>
            <DisplayList items={items} />
        </div>
    );
}
