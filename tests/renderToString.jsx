import Test from '../src/legit-tests'
import { expect } from 'chai'

import { TestComponent } from './components'

describe('Render To String', () => {

  it('should return the html of the component', () => {
    Test(<TestComponent test="wow"/>)
    .renderToString(string => {
      expect(string).to.match(/Click Me/)
    })
    .test(({instance}) => {
      expect(instance).to.be.ok
    })
  })
})
