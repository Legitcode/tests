import { expect } from 'chai';
import TestStore from '../src/alt/store';

import MyStore from './testStore';

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
      TestStore(MyStore)
      .setState({ todos: todos }, ({ store }) => {
        expect(store.state.todos).to.eql(todos);
      });
    });

    it('should work without a callback', () => {
      TestStore(MyStore)
      .setState({ todos: todos })
      .test(({ store }) => {
        expect(store.state.todos).to.eql(todos);
      });
    });
  });

  describe('#wait', () => {
    it('should wait for the promise to return', () => {
      TestStore(MyStore)
      .setState({ todos: todos }, ({ store }) => {
        store.addTodo({ title: "Get Beer", complete: false });
      })
      .wait(({ store }) => {
        expect(store.state.todos).to.eql(expected);
      });
    });
  });

  describe('#call', () => {
    it('should call a method on the store with a timeout', () => {
      TestStore(MyStore)
      .setState({ todos: todos })
      .call('addTodo', { title: "Get Beer", complete: false })
      .test(({ store }) => {
        expect(store.state.todos).to.eql(expected);
      });
    });
  });

  describe('#test', () => {
    it('should delegate to the wait function with a zero timeout', () => {
      TestStore(MyStore)
      .setState({ todos: todos }, ({ store }) => {
        store.addTodo({ title: "Get Beer", complete: false });
      })
      .test(({ store }) => {
        expect(store.state.todos).to.eql(expected);
      });
    });
  });
});
