##Legit Tests

Legit Tests version 2.0 is completely rebuilt and much simpler. It has been influenced by [enzyme](https://github.com/airbnb/enzyme) and some code from [react-shallow-testutils](https://github.com/sheepsteak/react-shallow-testutils). It is meant to be a complete testing solution for shallow rendering. The syntax is as short as possible for testing your components!

```
npm install legit-tests@2.0.0-alpha-3
```

###Example

Find

```js
it('should find id', () => {
  const legit = test(<Test />)
  expect(legit.find('#sick').id).to.equal('sick')
})

```

Any method after .find is expected to be a prop on a component.

That is it. You can find multiple nodes and access them like so:

```js
legit.find('.awesome').first().children
legit.find('.awesome').last().children
legit.find('.awesome').get(3).children
```


##Supported methods

- Find

Coming soon

- Simulate