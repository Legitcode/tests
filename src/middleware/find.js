import React from 'react'
let { TestUtils } = React.addons

export default function find(selector){
  let elements, name
  if (!(typeof selector === "string")) {
    name = selector.name.toLowerCase()
    elements = TestUtils.scryRenderedComponentsWithType(this.instance, selector)
  } else if (selector.match(/\./)) {
    selector = selector.replace(/\./, '')
    elements = TestUtils.scryRenderedDOMComponentsWithClass(this.instance, selector)
  }
  else elements = TestUtils.scryRenderedDOMComponentsWithTag(this.instance, selector)

  if (Array.isArray(elements) && elements.length === 1) {
    this.elements[name || selector] = elements[0]
  } else {
    this.elements[name || selector] = elements
  }
}
