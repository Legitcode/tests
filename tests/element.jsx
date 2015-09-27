import React from 'react'

import Test from '../src/legit-tests'
import { expect } from 'chai'

import { TestComponent } from './components'

describe('.element', () => {

  it('should find box', () => {
    Test(<TestComponent/>)
    .find('.box')
    .element(box => {
      expect(box.props.children).to.be.equal('found me!')
    })
  })

  it('should find box, not div', () => {
    Test(<TestComponent/>)
    .find('.box')
    .find('div')
    .element('box', box => {
      expect(box.props.children).to.be.equal('found me!')
    })
    .element('div', div => {
      expect(div.length).to.be.equal(2)
    })
  })

  it('should select multiple elements', () => {
    Test(<TestComponent />)
    .find('.box')
    .find('div')
    .element(['box', 'div'], (box, div) => {
      expect(div.length).to.be.equal(2)
      expect(box.props.children).to.be.equal('found me!')
    })
  })
})
