import Test from '../src/legit-tests'
import {Find} from '../src/middleware'
import { expect } from 'chai';

import TestComponent from './component'

describe('Shallow Render', () => {

  it('should render the component', () => {
    Test(<TestComponent test="wow"/>, {shallow: true})
    .test(function() {
      expect(this.component).to.be.ok
    })
  });

});
