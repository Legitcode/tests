import Test from '../src/legit-tests'
import { expect } from 'chai';
import TestComponent from './component'
import {SetState, Find} from '../src/middleware'


describe('setState middleware', () => {

  it('should change state', () => {
    Test(<TestComponent />)
    .use(SetState, {test: 'test'})
    .use(Find, 'div')
    .test(({helpers}) => {
      expect(helpers.elements.div[0].innerHTML).to.be.equal('test')
    })
    .setState({test: 'changed!'})
    .test(function() {
      expect(this.instance.state.test).to.be.equal('changed!')
    })
  });

});
