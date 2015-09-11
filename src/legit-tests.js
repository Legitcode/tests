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
    for (let i in this.middleware){
      this.middleware[i].call()
    }
    this.middleware = []
  }

  test(callback) {
    this.callMiddleware()
    callback.call({
      component: this.component,
      helpers: this.helpers
    })
    return this
  }

}

export default function TestWrapper(component){
  return new Test(component)
}
