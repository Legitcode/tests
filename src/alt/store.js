import 'harmony-reflect'
import alt from './alt';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

class TestStore {
  constructor(store) {
    this.store = AltTestingUtils.makeStoreTestable(alt, store);
  }

  async timeOut(timeout = 0) {
    await setTimeout(() => {}, timeout);
    return this;
  }

  async callFunc(func, params) {
    await func.call(this, params);
    return this;
  }

  setState(params = {}, callback = () => {}) {
    this.callFunc(this.store.setState, params).then(function(val) {
      console.log(this, val);
      callback.call(this, this);
    });

    return this;
  }

  wait(callback, timeout) {
    this.timeOut(timeout).then(function() {
      callback.call(this, this);
    });

    return this;
  }

  call(funcName, data) {
    this.callFunc(this.store[funcName], data);
    return this;
  }

  test(callback) {
    this.wait(callback);

    return this;
  }
}

export default function TestStoreWrapper(store) {
  return new Proxy(new TestStore(store), {
    get: function(target, name) {
      if (name in target) {
        return target[name];
      } else {
        return target.call;
      }
    }
  })
}
