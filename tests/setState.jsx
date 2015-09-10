import React from 'react'
import { expect } from 'chai';

import TestComponent from './component'

import Test from '../src/legit-tests'
import Find from '../src/middleware/find'
import SetState from '../src/middleware/setState'

describe('setState middleware', () => {

  it('should change state', () => {
    Test(<TestComponent/>)
    .use(SetState, {test: 'test'})
    .use(Find, 'div') // {class: 'class'}
    .end((component, helpers) => {
      expect(helpers.div[0].props.children).to.be.equal('test')
    })

  });

});
