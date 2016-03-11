import TestUtils from 'react-addons-test-utils'
import React from 'react'
import findAll from './find-all'

export default (component) => {
  let items
  
  const shallowRenderer = TestUtils.createRenderer()
  shallowRenderer.render(component)
  const instance = shallowRenderer.getRenderOutput();
  
  const find = (term, child) => {
    const selector = term.charAt(0)

    switch (selector) {
      case '.':
        items = findAll(instance, child => child.props ? child.props.className == term.slice(1) : false)
        return { ...items[0].props, ...utils}
      case '#':
        items = findAll(instance, child => child.props ? child.props.id == term.slice(1) : false)
        return { ...items[0].props, ...utils}
      default:
        items = findAll(instance, child => child.type ? child.type == term : false)
        return { ...items[0].props, ...utils}
    }
  }

  const first = () => items[0].props
  const last = () => items[items.length - 1].props
  const get = (index) => items[index].props

  const utils = {
    find,
    first,
    last,
    get,
  }

  return utils
}
