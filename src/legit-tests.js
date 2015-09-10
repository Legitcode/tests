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
    this.middleware.push(callback.bind(this, data))
    return this
  }

  callMiddleware(){
    for (let middleware of this.middleware){
      middleware.call()
    }
  }

  end(callback) {
    this.callMiddleware()
    callback.call(this, this.component, this.helpers)
  }

}

export default function TestWrapper(component){
  return new Test(component)
}
