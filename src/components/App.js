import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSource: {truth: 'true'},
      booleanString: 'true'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const isSource = this.state.isSource
    isSource.truth = 'false'
    this.setState({isSource: isSource, booleanString: 'false'})
    console.log('after set state', isSource)
  }
  render() {
    console.log(this.state.isSource.truth, this.state.boolean)
    return (
      <div>
        State is the source of truth {this.state.isSource.truth}
        <br/>
        State as a boolean {this.state.booleanString}
        <ChildComponent 
          isSource={this.state.isSource}
          booleanString={this.state.booleanString}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App