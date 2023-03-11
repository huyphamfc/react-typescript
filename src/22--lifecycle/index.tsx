import React, { Component } from 'react';

import Counter from './Counter';

class MyComponent extends Component {
  state = {
    isShow: false,
  };

  toggleHandler = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleHandler}>Toggle</button>
        {this.state.isShow && <Counter />}
      </>
    );
  }
}

export default MyComponent;
