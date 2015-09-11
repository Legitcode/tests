import React from 'react/addons';
let { TestUtils } = React.addons

class Test {

  constructor(component){
    this.component = TestUtils.renderIntoDocument(component)
    this.middleware = []
    this.helpers = []
    return this
  }

  use(callback, data){
    callback.call(this, data)
    return this
  }

  test(callback) {
    let data = {
      component: this.component,
      helpers: this.helpers
    }
    callback.call(data, data)
    return this
  }

}

export default function TestWrapper(component){
  return new Test(component)
}
