import alt from './alt';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

class TestStore {
  constructor(store) {
    this.store = AltTestingUtils.makeStoreTestable(alt, store);
  }

  async callFunc(func, params) {
    await func.call(this, params);
    return this;
  }

  async timeOut(timeout = 0) {
    await setTimeout(() => {}, timeout);
    return this;
  }

  setState(params = {}, callback = () => {}) {
    this.callFunc(this.store.setState, params).then(() => {
      callback.call(this, this);
    });

    return this;
  }

  wait(callback, timeout) {
    this.timeOut(timeout).then(() => {
      callback.call(this, this);
    });

    return this;
  }

  call(funcName, data) {
    this.callFunc(this.store[funcName], data).then(() => {});
    return this;
  }

  test(callback) {
    this.wait(callback);

    return this;
  }
}

export default function TestStoreWrapper(store) {
  return new TestStore(store)
}
