import React from 'react/addons';
let { TestUtils } = React.addons
global.React = React //expose React to tests so they can use jsx syntax when passing in components to the class
require('react/lib/ExecutionEnvironment').canUseDOM = true

import {Find, SetState, Simulate} from './middleware'

export default class Test {

  constructor(component, config){
    this.component = component

    if(config && config.shallow === true){
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(component);
      this.instance = shallowRenderer.getRenderOutput();
    }
    else{
      this.instance = TestUtils.renderIntoDocument(component)
    }

    this.helpers = {}
    return this
  }

  use(callback, data){
    callback.call(this, data)
    return this
  }

  element(select, callback) {
    if(!this.helpers) return

    let element
    if(typeof select === 'string') {
      element = this.helpers.elements[select]
      callback.call(this, element)
      return this
    }

    element = this.getFirst(this.helpers.elements)
    select.call(this, element)
    return this
  }

  test(callback) {
    var params = this.params()
    callback.call(params, params)
    return this
  }

  params(){
    var length = Object.keys(this.helpers).length
    if(this.helpers.elements && length === 1) {
      return Object.assign({}, this, this.helpers.elements)
    }
    return this
  }

  //private

  getFirst(object){
    for (let element in object) return object[element]
  }

  //Built in middleware

  find(data){
    Find.call(this, data)
    return this
  }

  setState(data){
    SetState.call(this, data)
    return this
  }

  simulate(data){
    Simulate.call(this, data)
    return this
  }

  renderToString(callback){
    var component = React.renderToStaticMarkup(this.component)
    callback.call(null, component)
    return this
  }

}
