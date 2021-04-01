import React from 'react';
import Header from './components/header/header';
import Todo from './components/todo/todo';
import Input from './components/input/input';

import './App.css';

function App() {
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem('react')) || []);
  const [choose, setChoose] = React.useState('all');
  localStorage.setItem('Message', JSON.stringify(todos));
  const addTodos = (newMessage) => {
    let newTodos = {
      id: Math.random(),
      message: newMessage,
      complete: false
    }
    setTodos([...todos, newTodos]);
    //localStorage.setItem('Message', JSON.stringify([...todos, newTodos]));
  }
  const removeTodos = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
    //localStorage.setItem('Message', JSON.stringify([...todos]));
  }
  const handleToggle = (id) => {
    setTodos([...todos.map(todo => {
      if(todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo
    })]);
    //localStorage.setItem('Message', JSON.stringify([...todos]));
  }
  let out = todos.filter(e => {
      if(choose === 'all') {
         return true
      } else if(choose === 'done') {
         return e.complete
      } else {
         return !e.complete
      }
   }).map(function(i) {
    return <Todo key={i.id} id={i.id} message={i.message} complete={i.complete}
    i={i} removeTodos={removeTodos} handleToggle={handleToggle} /> 
  }) 
  return (
    <div className="App">
      <header className="App-header">
        <Header todos={todos} choose={choose} setChoose={setChoose} />
        {out}
        <Input addTodos={addTodos} />
      </header>
    </div>
  );
}

export default App;