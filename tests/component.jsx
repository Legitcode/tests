import React from 'react'
import TinyComponent from './tiny-component';

export default class TestComponent extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return <section>
      <div onClick={this.props.onClick}>{this.state.test}</div>
      <p className="box">found me!</p>
      <button
        type="button"
        onClick={this.props.onClick}>
        Click Me
      </button>
      <button
        type="button"
        onClick={this.props.onClick}>
        Click Me
      </button>
      <TinyComponent test="true"/>
    </section>
  }
}
