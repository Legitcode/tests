import React from 'react'
import { expect } from 'chai';

import TestComponent from './component'

import Test from '../src/legit-tests'
import Find from '../src/middleware/find'

describe('Find middleware', () => {

  it('should find div', () => {
    Test(<TestComponent/>)
    .use(Find, 'div') // {class: 'class'}
    .end((component, helpers) => {
      expect(helpers.div[0].props.children).to.be.equal(undefined)
    })
  });

  it('should find p tag with class', () => {
    Test(<TestComponent/>)
    .use(Find, {class: 'box'}) // {class: 'class'}
    .end((component, helpers) => {
      expect(helpers.box[0].props.children).to.be.equal('found me!')
    })
  });

});
