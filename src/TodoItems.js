import React, {Component} from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

  }
  createTasks = (item) => {
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.value}</li>
  }

  deletedTasks = (item) => {
    return <li onClick={() => this.addAgain(item.key)} key={item.key}>{item.value}</li>
  }

  delete = (key) => {
    this.props.delete(key);
  }

  addAgain = (key) => {
    this.props.addAgain(key);
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    let todoComplete = this.props.deleted;
    let deletedItems = todoComplete.map(this.deletedTasks);

    return (
      <div>
      <h6>ToDo Items</h6>
      <ul className="theList">
        {listItems}
      </ul>
      <h6>Completed Items</h6>
      <ul className="completeList">
        {deletedItems}
      </ul>
      </div>
    )
  }
}

export default TodoItems;
