##Legit Tests

This is a super friendly testing library for React, inspired by express middleware, it's easily extendable. Why did I make this when you can use [React's Test Utils](https://facebook.github.io/react/docs/test-utils.html)? Because who likes typing out `scryRenderedDOMComponentsWithTag` and the other method names on there. Not only that, but setting up the render process is also a hassle.

**New in 0.3.0** jsdom is included by default, no need to setup anything for your components to render into. The library does this all for you. Take a look at the tests directory to see examples. The big change here is that you must be on node v4 or iojs for this to work now. Also, best practice is to import this at the very top of each test file.

###Install

`npm install legit-tests --save`

##Example

~~~js
import Test from 'legit-tests'
import { expect } from 'chai'
import sinon from 'sinon'
import TestComponent from './TestComponent'

let spy = sinon.spy()

Test(<TestComponent onClick={spy}/>)
.find('button')
.simulate({method: 'click', element: 'button'})
.test(() => {
  expect(spy.called).to.be.true
})
~~~
`Find` is a piece of included middleware that takes the component instance and finds a tag or class name for you. I'll explain that below.

##Middleware

[Current list of Middleware](https://github.com/Legitcode/tests/wiki/Bundled-Middleware)

You can write middleware to do anything you repeatedly use. You can pass `.use` a function, along with an object that it will take in. Each function will be injected with the current instance which includes:

- `component` - the rendered component instance
- `helpers` - an array you can add on to with data for the end function

**Example**:
This is the setState function used above.
~~~js

Test(<TestComponent onClick={spy}/>)
.use(SetState, {})

...

export default function setState(state){
  this.component.setState(state)
}
~~~

##test

The `.test` function will be given the component instance and the helpers array. You can use a regular function to reference `this` or an arrow function:

~~~js
.test(({helpers, component}) => { ... })
.test(function() {
  //this.component, this.helpers
})
~~~

You can see more examples in the tests directory.
