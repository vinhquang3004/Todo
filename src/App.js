import './App.css';
import React,{ Fragment } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Fragment>
      <Header />
      <TodoList />
    </Fragment>
  )
}

export default App;
