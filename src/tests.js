import React from 'react/addons'
let { TestUtils } = React.addons
require('react/lib/ExecutionEnvironment').canUseDOM = true

import { Find, SetState, Simulate } from './middleware'

function Test(component, config) {

  let instance
  if (config && config.shallow === true) {
    const shallowRenderer = TestUtils.createRenderer()
    shallowRenderer.render(component)
    instance = shallowRenderer.getRenderOutput()
  } else {
    instance = TestUtils.renderIntoDocument(component)
  }

  function getFirst(object) {
    for (let element in object)
      return object[element]
  }

  const testComponent = {
    instance,
    helpers: {},
    params() {
      const length = Object.keys(this.helpers).length
      if (this.helpers.elements && length === 1) {
        return Object.assign({}, this, this.helpers.elements)
      }
      return this
    },
    element(select, callback) {
      if (!this.helpers) return

      let element
      if (typeof select === 'string') {
        element = this.helpers.elements[select]
        callback.call(this, element)
        return this
      }

      element = getFirst(this.helpers.elements)
      select.call(this, element)
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
      const param = this.params()
      callback.call(param, param)
      return this
    },
    renderToString(callback) {
      const componentString = React.renderToStaticMarkup(component)
      callback.call(null, componentString)
      return this
    }
  }

  return testComponent.mixin({
    find: Find,
    setState: SetState,
    simulate: Simulate
  })
}

export default Test
