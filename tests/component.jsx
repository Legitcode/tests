import React from 'react'

export default class TestComponent extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return <body>
      <div>{this.state.test}</div>
      <p className="box">found me!</p>
    </body>
  }
}
