import React from 'react'
let { TestUtils } = React.addons

export default function find(selector){
  let elements
  if(selector.match(/\./)){
    selector = selector.replace(/\./, '')
    elements = TestUtils.scryRenderedDOMComponentsWithClass(this.component, selector)
  }
  else elements = TestUtils.scryRenderedDOMComponentsWithTag(this.component, selector)

  if(elements.length === 1) elements = elements[0]
  this.helpers[selector] = elements
}
