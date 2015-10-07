import TestUtils from 'react-addons-test-utils'

export default function simulate(data) {
  let element
  if (data.element !== undefined ) {
    element = Array.isArray(this.elements[data.element]) ?
      this.elements[data.element][0] : this.elements[data.element]
  } else {
    throw new Error(`No element "${data.element}" is in elements`)
  }
  TestUtils.Simulate[data.method].call(this,
    element,
    data.options || null
  )
}
