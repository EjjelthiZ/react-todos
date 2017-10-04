import React, { Component } from 'react'
import { Map } from 'immutable'

import logo from './logo.svg'
import TodoList from './TodoList.js'
import './App.css'

class App extends Component {
  state = {
    todos: new Map()
  }

  _onTodosChange = todos => {
    this.setState({ todos })
  }
  _onTodoRemove = id => {
  //this.state = todos.filter((todo) => {})
  // filter out the todo that has to be removed
  let list = new Map()
  list= this.state.todos.delete(id)
  // update state
  this.setState({
    todos: list
  })
  }

  render() {
    const { state } = this
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Todos</h1>
        </header>

        {/* those two lists will share the same data */}
        <TodoList
          onChange={this._onTodosChange}
          todos={state.todos}
          onRemove={this._onTodoRemove}
        />
        /*
        <TodoList
          onChange={this._onTodosChange}
          todos={state.todos}
        />*/
      </div>
    )
  }
}

export default App
