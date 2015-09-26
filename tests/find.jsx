/* globals React */

import Test from '../src/legit-tests'
import {Find} from '../src/middleware'
import { expect } from 'chai';

import TestComponent from './component'
import TinyComponent from './tiny-component'

describe('Find middleware', () => {

  it('should find div', () => {
    Test(<TestComponent/>)
    .find('div')
    .test(function() {
      expect(this.helpers.elements.div[0].props.children).to.be.equal(undefined)
    })
  });

  it('should find p tag with class', () => {
    Test(<TestComponent/>)
    .use(Find, '.box')
    .test(function() {
      expect(this.helpers.elements.box.props.children).to.be.equal('found me!')
    })

    Test(<TestComponent/>)
    .use(Find, '.box')
    .test(({box}) => {
      expect(box.props.children).to.be.equal('found me!')
    })

  });

  it('should find a rendered component', () => {
    Test(<TestComponent/>)
    .find(TinyComponent)
    .test(({tinycomponent}) => {
      expect(tinycomponent.props.test).to.be.equal('true');
    });
  });
});
