import React from 'react'

import Test from '../src/legit-tests'
import { Find } from '../src/middleware'
import { expect } from 'chai'

import { TestComponent } from './components'

describe('Mixin method', () => {

  it('should add Find as method to Test', () => {
    Test(<TestComponent/>)
    .mixin({
      customFind: Find
    })
    .customFind('div')
    .element('div', div => {
      expect(div.length).to.equal(2)
    })
  })

})
