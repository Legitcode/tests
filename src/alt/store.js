import alt from './alt';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

class TestStore {
  constructor(store) {
    this.store = AltTestingUtils.makeStoreTestable(alt, store);
  }

  setState(params = {}) {
    let promise = new Promise((resolve) => {
      this.store.setState(params);
      resolve(this);
    });

    return promise;
  }

  wait(callback, duration = 10) {
    let promise = new Promise((resolve) => {
      callback.call(this, this);
      resolve(this);
    });

    return promise;
  }


  test(callback) {
    callback.call(this, this);
    return this;
  }
}

export default function TestStoreWrapper(store) {
  return new TestStore(store)
}
