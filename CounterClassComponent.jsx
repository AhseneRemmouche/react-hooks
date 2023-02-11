import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(count) {
    super(count);
    this.state = { count: 1 };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount(){
    this.setState({count : this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>{`${this.state.count}`}</h1>
       
        <button onClick={this.decrementCount}>Decrement -</button>
        <button onClick={this.incrementCount}>Increment +</button>
      </div>
    );
  }
}

export default CounterClass;
