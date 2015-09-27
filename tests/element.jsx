import React from 'react'

import Test from '../src/legit-tests'
import { Find } from '../src/middleware'
import { expect } from 'chai';

import { TestComponent, TinyComponent } from './components'

describe('.element', () => {

  it('should find box', () => {
    Test(<TestComponent/>)
    .find('.box')
    .element(box => {
      expect(box.props.children).to.be.equal('found me!')
    })
  });

  it('should find box, not div', () => {
    Test(<TestComponent/>)
    .find('.box')
    .find('div')
    .element('box', box => {
      expect(box.props.children).to.be.equal('found me!')
    })
  });
});
