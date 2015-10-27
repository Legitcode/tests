import { expect } from 'chai'
import TestStore from '../src/alt/store'

import { MyStore, MyActions } from './testStore'

describe('TestStore', () => {
  let todos = [
    {
      title: "Get Milk",
      complete: false
    },
    {
      title: "Get Bread",
      complete: false
    }
  ]

  let expected = [
    {
      title: "Get Milk",
      complete: false
    },
    {
      title: "Get Bread",
      complete: false
    },
    {
      title: "Get Beer",
      complete: false
    }
  ]

  describe('proxy', () => {
    it('should proxy missing method calls to the call function', () => {
      TestStore(MyStore, MyActions)
      .setInitialState({ todos: todos })
      .addTodo({ title: "Get Beer", complete: false })
      .test(({ state }) => {
        expect(state.todos).to.eql(expected)
      })
    })
  })

  describe('wait', () => {
    it('should wait for the method to finish before running tests', (done) => {
      TestStore(MyStore, MyActions)
      .setInitialState({ todos: todos })
      .addTodo({ title: "Get Beer", complete: false })
      .wait(({ state }) => {
        expect(state.todos).to.eql(expected)
        done()
      }, 100)
    })
  })
})
