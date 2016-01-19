import TestUtils from 'react-addons-test-utils'
import _ from 'lodash'

export default function find(selector){

  var self = this
  var foundElements = []
  var elements
  var selector

  if (_.isFunction(selector)){
    elements = TestUtils.scryRenderedComponentsWithType(this.instance, selector)
    selector = (selector.name || selector.displayName).toLowerCase()
  } else {

    var tokens = selector.split(/(?=\.)|(?=#)|(?=\[)/)
    tokens
    .forEach(function(subselector){
      var els
      switch (subselector[0]){
        // class
      case '.':
        els = TestUtils.scryRenderedDOMComponentsWithClass(self.instance, subselector.slice(1))
        foundElements.push( Array.isArray(els) ? els : [els] )
        break

      // id
      case '#':
        els = TestUtils.findAllInRenderedTree(self.instance, function(component){
          if (component.id === subselector.slice(1)){
            return true
          }
        })
        foundElements.push( Array.isArray(els) ? els : [els] )
        break

      // data attribute
      case '[':
        els = TestUtils.findAllInRenderedTree(self.instance, function(component){
          if (component.getAttribute) {
            return component.getAttribute(subselector.slice(1,-1))
          }
        })
        foundElements.push( Array.isArray(els) ? els : [els] )
        break

      // tag
      default:
        els = TestUtils.scryRenderedDOMComponentsWithTag(self.instance, subselector)
        foundElements.push( Array.isArray(els) ? els : [els] )
        break
      }
    })

    elements = _.intersection.apply(_, foundElements)
  }

  if (elements){
    if (Array.isArray(elements) && elements.length === 1) {
      this.elements[selector] = elements[0]
    } else {
      this.elements[selector] = elements
    }
  }

}
