##Legit Tests

This is a super friendly testing library for React, inspired by express middleware, it's easily extendable. Why did I make this when you can use [React's Test Utils](https://facebook.github.io/react/docs/test-utils.html)? Because who likes typing out `scryRenderedDOMComponentsWithTag` and the other method names on there. Not only that, but setting up the render process is also a hassle.

###0.4.0

In 0.4.0 there is a breaking change where `this.component` is now the component itself and the rendered instance is `this.instance`. This makes much more sense but sadly means tests need to be changed in order to update to the latest version.

###Install

`npm install legit-tests --save`

##Example

~~~js
import Test from 'legit-tests'
import { expect } from 'chai'
import sinon from 'sinon'
import TestComponent from './TestComponent'

let spy = sinon.spy()


//Calling a prop
Test(<TestComponent onClick={spy}/>) //or shallow render Test(<Component/>, {shallow: true})
.find('button')
.find('.box')
.simulate({method: 'click', element: 'button'})
.test(({box}) => {
  expect(spy.called).to.be.true
  expect(box.props.children).to.be.equal('found me!')
})
~~~

##Middleware

[Current list of Middleware](https://github.com/Legitcode/tests/wiki/Bundled-Middleware)

You can write middleware to do anything you repeatedly use. You can pass `.use` a function, along with an object that it will take in. Each function will be injected with the current instance which includes:
- `component` - the actual component itself
- `instance` - the rendered component instance
- `helpers` - an array you can add on to with data for the end function

**Example**:
This is the setState function used above.
~~~js

Test(<TestComponent onClick={spy}/>)
.use(SetState, {})

...

function setState(state){
  this.instance.setState(state)
}
~~~

##test

The `.test` function will be given the component instance and the helpers array. You can use a regular function to reference `this` or an arrow function:

~~~js
.test(({helpers, component}) => { ... })
.test(function() {
  //this.instance, this.helpers
})
~~~

You can see more examples in the tests directory.
