import React from 'react'
import { expect } from 'chai';
import sinon from 'sinon';

import TestComponent from './component'

import Test from '../src/legit-tests'
import {Find, Simulate} from '../src/middleware'

describe('simulate middleware', () => {

  it('should click a single element', () => {
    let spy = sinon.spy();

    Test(<TestComponent onClick={spy}/>)
    .use(Find, 'div')
    .use(Simulate, {method: 'click', element: 'div'})
    .test(() => {
      expect(spy.called).to.be.true;
    })

  });

  it('should click the first element in an array', () => {
    let spy = sinon.spy();

    Test(<TestComponent onClick={spy}/>)
    .find('button')
    .simulate({method: 'click', element: 'button'})
    .test(function() {
      expect(spy.called).to.be.true;
    })

  });

});
