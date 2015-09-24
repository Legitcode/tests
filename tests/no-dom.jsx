import Test from '../src/no-dom'
import {Find} from '../src/middleware'
import { expect } from 'chai';

import TestComponent from './component'

describe('no dom', () => {

  it('should render the component', () => {
    Test(<TestComponent test="wow"/>, {shallow: true})
    .test(function() {
      expect(this.instance).to.be.ok
    })
  });
});
