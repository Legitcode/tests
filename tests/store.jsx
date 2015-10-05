import { expect } from 'chai';
import TestStore from '../src/alt/store';

import { MyStore, MyActions } from './testStore';

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
  ];

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
  ];

  describe('#action', () => {
    it('should call a method on the actions', () => {
      TestStore(MyStore, MyActions)
      .setInitialState({ todos: todos })
      .action('addTodo', { title: "Get Beer", complete: false })
      .test(({ state }) => {
        expect(state.todos).to.eql(expected);
      });
    });
  });

  describe('proxy', () => {
    it('should proxy missing method calls to the call function', () => {
      TestStore(MyStore, MyActions)
      .setInitialState({ todos: todos })
      .addTodo({ title: "Get Beer", complete: false })
      .test(({ state }) => {
        expect(state.todos).to.eql(expected);
      });
    });
  });
});
