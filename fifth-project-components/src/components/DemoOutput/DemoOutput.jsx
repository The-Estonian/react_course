import React from 'react';
import Para from './Para';

const DemoOutput = (props) => {
  console.log('Demo app!');
  return <Para>{props.show ? 'This is new!' : ''}</Para>;
};

export default React.memo(DemoOutput);
