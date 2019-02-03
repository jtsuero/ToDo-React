import React, { Component } from 'react';
import './App.css';
import TodoItems from "./TodoItems";

class App extends Component {
  constructor() {
    super()
    this.state = {
      list : [],
      newItem : {}
    }
  }

  buttonClick = () => {
    console.log("clicked")
    if(this.state.newItem.value!== "") {
      let newArray = this.state.list.slice();
      console.log("clicked2")
      newArray.push(this.state.newItem);
      console.log(this.state.newItem);
      this.setState({list : newArray})
    }
  }


  addToList = (event) => {
    let newestItem = {
      value: event.target.value,
      key: Date.now()
    }
    this.setState({newItem: newestItem}) 
  }


  deleteItem = (key) => {
    let filteredItems = this.state.list.filter(function (item) {
      return (item.key!==key)
    });
    console.log(filteredItems)
    this.setState({
      list: filteredItems
    });
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      <input onChange={(e) => this.addToList(e)} placeholder = "Enter item here"></input>
      <button onClick={this.buttonClick}>Add Item</button>
      <TodoItems entries={this.state.list}
      delete={this.deleteItem}/>
      </header>
      </div>
    );
  }
}

export default App;
