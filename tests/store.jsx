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

  describe('#setState', () => {
    it('should wait for the state to be set before returning the promise', () => {
      TestStore(MyStore, MyActions)
      .setState({ todos: todos }, ({ state }) => {
        expect(state.todos).to.eql(todos);
      });
    });

    it('should work without a callback', () => {
      TestStore(MyStore, MyActions)
      .setState({ todos: todos })
      .test(({ state }) => {
        expect(state.todos).to.eql(todos);
      });
    });
  });

  describe('#action', () => {
    it('should call a method on the actions', () => {
      TestStore(MyStore, MyActions)
      .setState({ todos: todos })
      .action('addTodo', { title: "Get Beer", complete: false })
      .test(({ state }) => {
        expect(state.todos).to.eql(expected);
      });
    });
  });

  //describe('proxy', () => {
  //  it('should proxy missing method calls to the call function', () => {
  //    TestStore(MyStore, MyActions)
  //    .setState({ todos: todos })
  //    .addTodo({ title: "Get Beer", complete: false })
  //    .test(({ state }) => {
  //      expect(state.todos).to.eql(expected);
  //    });
  //  });

  //  //it('should error out when a bad method is called', () => {
  //  //  TestStore(MyStore)
  //  //  .noWay()
  //  //});
  //});
});
