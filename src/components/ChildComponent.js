import React, { Component } from 'react';

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <input type="button" onClick={this.props.handleClick}/>
        State is the source of truth {this.props.isSource.truth}
         <br/>
        State as a boolean {this.props.booleanString}
      </div>
    );
  }
}

export default ChildComponent