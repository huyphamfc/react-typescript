import React from 'react';
import Color from './Color';
import Content from './Content';

function MyComponent() {
  console.log('Render: MyComponent');

  return (
    <>
      <Content />
      <Color />
    </>
  );
}

export default MyComponent;
