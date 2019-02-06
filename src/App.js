import React, { Component } from 'react';
import './App.css';
import TodoItems from "./TodoItems";

class App extends Component {
  constructor() {
    super()
    this.state = {
      list : [],
      newItemTextInput : "",
      completedItems : []
    }
  }

  buttonClick = () => {
    if(this.state.newItemTextInput!== "") {
      let newItem = {
        value: this.state.newItemTextInput,
        key: Date.now()
      }
      let newArray = this.state.list.slice();
      newArray.push(newItem);
      this.setState({
        list : newArray,
        newItemTextInput : ""
      });
    }
  }

  getInput = (event) => {
    this.setState({newItemTextInput: event.target.value});
  }

  moveItem = (key, complete = true) => {
    let from = this.state.list.slice();
    let to = this.state.completedItems.slice();
    if(!complete) {
      from = this.state.completedItems.slice();
      to = this.state.list.slice();
    }

    //remove some item from the array
    let item = from.find((item) => {
      return (item.key === key)
    });
    to.push(item);

    from = from.filter((item) => {
      return (item.key!==key)
    });

      this.setState((state,props) => {
        if(complete) {
          return {list: from, completedItems: to}
        } else {
          return {list: to, completedItems: from}
        }
      });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={(e) => this.getInput(e)} value = {this.state.newItemTextInput}></input>
          <button onClick={this.buttonClick}>Add Item</button>
          <TodoItems entries={this.state.list}
            deleted={this.state.completedItems}
            moveItem={this.moveItem}/>
        </header>
      </div>
    );
  }
}

export default App;
