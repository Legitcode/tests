import React from 'react'
let { TestUtils } = React.addons

export default function find(selector){
  let elements, name
  if (!(typeof selector === "string")) {
    name = new selector().constructor.name //eslint-disable-line
    elements = TestUtils.scryRenderedComponentsWithType(this.component, selector)
  } else if (selector.match(/\./)) {
    selector = selector.replace(/\./, '')
    elements = TestUtils.scryRenderedDOMComponentsWithClass(this.component, selector)
  }
  else elements = TestUtils.scryRenderedDOMComponentsWithTag(this.component, selector)

  if(elements.length === 1) elements = elements[0]
  if(!this.helpers.elements) this.helpers.elements = []
  this.helpers.elements[name || selector] = elements
}
