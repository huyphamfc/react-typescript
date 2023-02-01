import React, { memo } from 'react';

function Content() {
  console.log('Render: Content');

  return <p>memo lets you skip re-rendering a component when its props are unchanged.</p>;
}

export default memo(Content);
