import Test from '../src/legit-tests'
import { expect } from 'chai'

describe('Render into document.body', () => {

  it('should render and clean up component', () => {
    Test(<section />, {fullDOM: true})
    .test(function() {
      expect(global.window.document.querySelector('section'))
      .to.be.okay
    })
    .clean()

    // clean should clean up the document.body
    expect(global.window.document.body.innerHTML).to.equal('')
  })

})