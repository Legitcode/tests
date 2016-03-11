import React from 'react'

export default class Test extends React.Component{
  
  constructor() {
    super()
    this.state = {
      test: 'this is a test'
    }
  }

  render() {
    return (
      <div>
        Hey there
        <p className="awesome">
          <div id="sick">
            <div className="wow">
              {this.state.test}
            </div>
            <div className="awesome">
              another one
            </div>
          </div>
        </p>
      </div>
    )
  }
}