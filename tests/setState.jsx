import React from 'react'
import { expect } from 'chai';

import TestComponent from './component'

import Test from '../src/legit-tests'
import {SetState, Find} from '../src/middleware'


describe('setState middleware', () => {

  it('should change state', () => {
    Test(<TestComponent/>)
    .use(SetState, {test: 'test'})
    .use(Find, 'div')
    .test(function(component, helpers) {
      expect(this.helpers.div.props.children).to.be.equal('test')
    })
    .use(SetState, {test: 'changed!'})
    .test(function() {
      expect(this.helpers.div.props.children).to.be.equal('changed!')
    })
  });

});
