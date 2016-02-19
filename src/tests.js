import TestUtils from 'react-addons-test-utils'
import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import React from 'react'
global.React = React

import { Find, SetState, Simulate, Clean } from './middleware'

function Test(component, config) {

  let instance
  if (config && config.shallow === true) {
    const shallowRenderer = TestUtils.createRenderer()
    shallowRenderer.render(component)
    instance = shallowRenderer.getRenderOutput()
  } else if (config && config.fullDOM && global.window) {
    var div = global.window.document.createElement('div')
    global.window.document.body.appendChild(div)
    instance = ReactDOM.render(component, div)
  } else {
    instance = TestUtils.renderIntoDocument(component)
  }

  const testComponent = {
    instance,
    component,
    elements: {},
    element(select, callback) {
      let element
      if (typeof select === 'string') {
        element = this.elements[select]
        callback.call(this, element)
        return this
      }

      if (Array.isArray(select)) {
        const args = select.map(elem => this.elements[elem])
        callback.call(this, ...args)
        return this
      }

      if (Object.keys(this.elements).length === 1) {
        select.call(this, this.elements[Object.keys(this.elements)[0]])
      } else {
        throw new Error("There are multiple elements select one")
      }
      return this
    },
    use(callback, data) {
      callback.call(this, data)
      return this
    },
    mixin(spec) {
      Object.keys(spec).forEach(key => {
        this[key] = (...args) => {
          spec[key].call(this, ...args)
          return this
        }
      })
      return this
    },
    test(callback) {
      const param = {...this, ...this.elements}
      callback.call(param, param)
      return this
    },
    renderToString(callback) {
      const componentString = ReactDOMServer.renderToStaticMarkup(component)
      callback.call(null, componentString)
      return this
    }
  }

  return testComponent.mixin({
    find: Find,
    setState: SetState,
    simulate: Simulate,
    clean: Clean
  })
}

export default Test
