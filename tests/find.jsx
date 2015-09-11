import React from 'react'
import { expect } from 'chai';

import TestComponent from './component'

import Test from '../src/legit-tests'
import {Find} from '../src/middleware'

describe('Find middleware', () => {

  it('should find div', () => {
    Test(<TestComponent/>)
    .use(Find, 'div') // {class: 'class'}
    .test(function() {
      expect(this.helpers.div.props.children).to.be.equal(undefined)
    })
  });

  it('should find p tag with class', () => {
    Test(<TestComponent/>)
    .use(Find, '.box') // {class: 'class'}
    .test(function() {
      expect(this.helpers.box.props.children).to.be.equal('found me!')
    })
  });

});
