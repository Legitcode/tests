import TestUtils from 'react-addons-test-utils'
import React from 'react'
import findAll from './find-all'

export default (component) => {
  let items, selectedIndex

  const shallowRenderer = TestUtils.createRenderer()
  shallowRenderer.render(component)
  const instance = shallowRenderer.getRenderOutput();
  
  const find = (term, child) => {
    const selector = term.charAt(0)
    switch (selector) {
      case '.':
        items = findAll(instance, child => child.props ? child.props.className == term.slice(1) : false)
        return proxy
      case '#':
        items = findAll(instance, child => child.props ? child.props.id == term.slice(1) : false)
        return proxy
      default:
        return proxy
    }
  }

  const first = () => {
    selectedIndex = 0
    return proxy
  }

  const last = () => {
    selectedIndex = items.length - 1
    return proxy
  }

  const get = (index) => {
    selectedIndex = index
    return proxy
  }

  const utils = {
    props: instance.props,
    find,
    first,
    last,
    get
  }

  const proxy = Proxy.create({
    get: (proxy, name) => {
      if(utils[name]) return value => utils[name](value)
      return items[selectedIndex || 0].props[name]
    }
  })
  return proxy
}
