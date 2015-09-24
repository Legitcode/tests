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

  describe('#setState', () => {
    it('should wait for the state to be set before returning the promise', () => {
      TestStore(MyStore)
      .setState({ todos: todos })
      .then(({ store }) => {
        expect(store.state.todos).to.eql(todos);
      });
    });
  });

  describe('#wait', () => {
    it('should wait for the promise to return', () => {
      TestStore(MyStore)
      .wait(({ store }) => {
        store.setState({ todos: todos });
      })
      .then(({ store }) => {
        store.addTodo({ title: "Get Ber", complete: false });
      })
      .then(({ store }) => {
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

        expect(store.state.todos).to.eql(expected);
      });
    });
  });
});
