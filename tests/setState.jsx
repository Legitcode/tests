import Test from '../src/legit-tests'
import { expect } from 'chai'
import { SetState, Find } from '../src/middleware'

import { TestComponent } from './components'

describe('setState middleware', () => {

  it('should change state', () => {
    Test(<TestComponent />)
    .use(SetState, {test: 'test'})
    .use(Find, 'div')
    .test(({elements}) => {
      expect(elements.div[0].props.children).to.be.equal('test')
    })
    .setState({test: 'changed!'})
    .test(function() {
      expect(this.instance.state.test).to.be.equal('changed!')
    })
  })

})
