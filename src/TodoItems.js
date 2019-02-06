import React, {Component} from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

  }
  toDoItem = (item) => {
    return <li onClick={() => this.props.moveItem(item.key, true)} key={item.key}>{item.value}</li>
  }

  completedItems = (item) => {
    return <li onClick={() => this.props.moveItem(item.key, false)} key={item.key}>{item.value}</li>
  }


  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.toDoItem);
    let todoComplete = this.props.deleted;
    let deletedItems = todoComplete.map(this.completedItems);

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
