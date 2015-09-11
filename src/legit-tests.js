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
    callback.call(this, this)
    return this
  }

}

export default function TestWrapper(component){
  return new Test(component)
}
