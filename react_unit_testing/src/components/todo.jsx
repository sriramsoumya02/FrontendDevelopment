import React from 'react';
import { useState } from 'react';
const Todo = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }
    const newItem = {
      text,
      id: Date.now(),
    };
    setText('');
    setItems(items.concat(newItem));
  };
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input id="new-todo" value={text} onChange={handleChange} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  );
};

export default Todo;
