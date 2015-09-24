export default class MyStore {
  addTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) });
  }
}
