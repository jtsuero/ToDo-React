import React, { Component } from 'react';
import './App.css';
import TodoItems from "./TodoItems";

class App extends Component {
  constructor() {
    super()
    this.state = {
      list : [],
      newItem : {},
      completedItems : []
    }
  }

  buttonClick = () => {
    if(this.state.newItem.value!== "") {
      let newArray = this.state.list.slice();
      newArray.push(this.state.newItem);
      this.setState({list : newArray})
      console.log(this.state.list)
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
    let deletedItem = this.state.list.filter(function (item){
      return (item.key === key)
    });
    let filteredItems = this.state.list.filter(function (item) {
      return (item.key!==key)
    });
    let completedItemsArray = this.state.completedItems.slice();
    completedItemsArray.push(deletedItem[deletedItem.length -1]);
    console.log(completedItemsArray)
    this.setState({completedItems: completedItemsArray});
    this.setState({list: filteredItems});
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      <input onChange={(e) => this.addToList(e)} placeholder = "Enter item here"></input>
      <button onClick={this.buttonClick}>Add Item</button>
      <TodoItems entries={this.state.list}
      delete={this.deleteItem}
      deleted={this.state.completedItems}/>
      </header>
      </div>
    );
  }
}

export default App;
