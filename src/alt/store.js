import 'harmony-reflect'
import alt from './alt'
import AltTestingUtils from 'alt/utils/AltTestingUtils'

class TestStore {
  constructor(store, actions) {
    this.store = store
    this.actions = actions
  }

  setState(params = {}, callback = () => {}) {
    this.actions.setInitialState(params)
    callback.call(this, this.store)
    return this
  }

  action(funcName, data) {
    this.actions[funcName].call(this, data)
    return this
  }

  test(callback) {
    callback.call(this, this.store)
    return this
  }
}

export default function TestStoreWrapper(store, actions) {
  var proxy = new Proxy(new TestStore(store, actions), {
    get: function(target, name) {
      if (name in target) {
        return target[name]
      }
      else if (name in target.actions) {
        return (params) => {
          target.actions[name](params)
          return proxy
        }
      }
    }
  })
  return proxy
}
