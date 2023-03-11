import React, { Component } from 'react';

interface CounterState {
  value: number;
}

class Counter extends Component<Record<string, never>, CounterState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      value: 0,
    };

    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Mount');
  }

  componentDidUpdate(
    prevProps: Record<string, never>,
    prevState: CounterState,
    snapshot?: unknown,
  ) {
    console.log('Previous Props: ', prevProps);
    console.log('Previous State: ', prevState);
    if (snapshot) console.log(snapshot);

    console.log('Update');
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  increaseCounter = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decreaseCounter = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    console.log('Render');

    return (
      <div>
        <button onClick={this.decreaseCounter}>Decrease</button>
        <span>{this.state.value}</span>
        <button onClick={this.increaseCounter}>Increase</button>
      </div>
    );
  }
}

export default Counter;
