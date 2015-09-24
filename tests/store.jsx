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
        console.log("FOO!");
        expect("foo").to.equal("bar");
        expect(store.state.todos).to.eql("BAR!");
      });
    });

    it('should work without a callback', () => {
      TestStore(MyStore)
      .setState({ todos: todos })
      .test(({ store }) => {
        expect(store.state.todos).to.eql("FOO!");
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

  describe('proxy', () => {
    it('should proxy missing method calls to the call function', () => {
      TestStore(MyStore)
      .setState({ todos: todos })
      .addTodo({ title: "Get Beer", complete: false })
      .test(({ store }) => {
        expect(store.state.todos).to.eql(expected);
      });
    });

    it('should error out when a bad method is called', () => {
      TestStore(MyStore)
      .noWay()
    });
  });
});
