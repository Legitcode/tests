import React from 'react'
import test from '../src/legit-tests'
import { expect } from 'chai'

import Test from './components/test'

describe('Find', () => {
  it('should find id', () => {
    const legit = test(<Test />)
    expect(legit.find('#sick').first().id).to.equal('sick')
    expect(legit.find('#sick').id).to.equal('sick')
  })

  it('should find class', () => {
    const legit = test(<Test />)
    expect(legit.find('.wow').children).to.equal('this is a test')
  })

  it('should find first and last', () => {
    const legit = test(<Test />)

    expect(legit.find('.awesome').first().children.props.id).to.equal('sick')
    expect(legit.find('.awesome').last().children).to.equal('another one')
  })
})