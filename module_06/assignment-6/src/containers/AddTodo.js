import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  state = {
    todo: "",
    titleError: ""
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  submitHandler = e => {
    const { todo } = this.state;
    e.preventDefault();
    if (todo === "") {
      this.setState({
        titleError: "Todo item cannot be blank"
      });
    } else {
      this.props.add(todo);
      this.setState({
        todo: "",
        titleError: ""
      });
    }
  };

  render() {
    const { todo, titleError } = this.state;

    return (
      <div>
        <h3>Add Todo</h3>
        <hr />
        <form onSubmit={this.submitHandler}>
          {titleError && <p style={{ color: "red" }}>{titleError}</p>}
          <input name="todo" value={todo} onChange={this.changeHandler} />
          <button type="submit">Add Value</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  //store.dispatch
  return {
    add: todo => {
      dispatch(addTodo(todo));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);

/*
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Value
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
*/
