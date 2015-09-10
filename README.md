##Legit Tests

This is a super friendly testing framework for React, inspired by express middleware, it's easily extendable. Why did I make this when you can use [React's Test Utils](https://facebook.github.io/react/docs/test-utils.html)? Because who likes typing out `scryRenderedDOMComponentsWithTag` and the other method names on there. Not only that, but setting up the render process is also a hassle.

###Install

`npm install legit-tests --save`

##Example

~~~js
import Test from 'legit-tests'
import Find from 'legit-tests/middleware/find'
import SetState from 'legit-tests/middleware/setState'

Test(<TestComponent/>)
.use(SetState, {test: 'test'})
.use(Find, 'div')
.end((component, helpers) => {
  expect(helpers.div[0].props.children).to.be.equal('test')
})
~~~
`Find` is a piece of included middleware that takes the component instance and finds a tag or class name for you. I'll explain that below.

##Middleware

[Current list of Middleware](https://github.com/Legitcode/tests/wiki/Middleware)

You can write middleware to do anything you repeatedly use. You can pass `.use` a function, along with an object that it will take in. Each function will be injected with the current instance which includes:

- `component` - the rendered component instance
- `helpers` - an array you can add on to with data for the end function

**Example**:
This is the setState function used above.
~~~js
export default function setState(state){
  this.component.setState(state)
}
~~~

##End

The `.end` function will be given the component instance and the helpers array so that you can use arrow functions as  courtesy. If you use a regular function, the context of this will be the same as the middleware. You can access the component and helpers on `this`.

You can see more examples in the tests directory.
