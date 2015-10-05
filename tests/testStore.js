import alt from '../src/alt/alt'

class myActions {
  constructor() {
    this.generateActions('addTodo', 'setInitialState')
  }
}

const MyActions = alt.createActions(myActions)

class myStore {
  constructor() {
    this.bindActions(MyActions)
  }

  setInitialState(params) {
    this.setState(params)
  }

  addTodo(todo) {
    this.setState({ todos: this.todos.concat(todo) })
  }
}

const MyStore = alt.createStore(myStore, 'MyStore')
export { MyStore, MyActions }
