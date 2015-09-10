import React from 'react'
let { TestUtils } = React.addons

export default function find(selector){
  let elements
  if(typeof selector === 'string'){
    elements = TestUtils.scryRenderedDOMComponentsWithTag(this.component, selector)
    this.helpers[selector] = elements
  }
  else{
    if(selector.class){
      elements = TestUtils.scryRenderedDOMComponentsWithClass(this.component, selector.class)
      this.helpers[selector.class] = elements
    }
  }
}
