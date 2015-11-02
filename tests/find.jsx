import Test from '../src/legit-tests'
import { Find } from '../src/middleware'
import { expect } from 'chai'

import { TestComponent, TinyComponent } from './components'
import OtherComponent from './components/other-component'

describe('Find middleware', () => {
  it('should find div', () => {
    Test(<TestComponent/>)
    .find('div')
    .test(function() {
      expect(this.elements.div[0].props.children).to.be.equal(undefined)
    })
  })

  it('should find p tag with class', () => {
    Test(<TestComponent/>)
    .use(Find, '.box')
    .test(function() {
      expect(this.elements.box.props.children).to.be.equal('found me!')
    })

    Test(<TestComponent/>)
    .use(Find, '.box')
    .test(({box}) => {
      expect(box.innerHTML).to.be.equal('found me!')
    })

  })

  it('should find a rendered component', () => {
    Test(<TestComponent/>)
    .find(TinyComponent)
    .test(({tinycomponent}) => {
      expect(tinycomponent.props.test).to.be.equal('true')
    })
  })

  it('should find a rendered component created with `createClass`', () => {
    Test(<TestComponent/>)
    .find(OtherComponent)
    .test(function() {
      let otherComponent = this.elements['other-component']
      expect(otherComponent.props.test).to.be.equal('true')
    })
  })
})
