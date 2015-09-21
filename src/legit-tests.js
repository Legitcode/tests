/* globals global */
import './dom'
import TestUtils from 'react-addons-test-utils';
import ReactDOMServer from 'react-dom/server'
import React from 'react'
global.React = React //expose React to tests so they can use jsx syntax when passing in components to the class

import {Find, SetState, Simulate} from './middleware'

class Test {

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
    var component = ReactDOMServer.renderToStaticMarkup(this.component)
    callback.call(null, component)
    return this
  }

}

export default function TestWrapper(component, config){
  return new Test(component, config)
}
