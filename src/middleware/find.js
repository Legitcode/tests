import TestUtils from 'react-addons-test-utils';

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

  if(elements.length === 1) elements = elements[0]
  if(!this.helpers.elements) this.helpers.elements = []
  this.helpers.elements[name || selector] = elements
}
