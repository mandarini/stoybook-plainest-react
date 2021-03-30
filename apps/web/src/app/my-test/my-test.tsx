import React from 'react';

import './my-test.module.css';

/* eslint-disable-next-line */
export interface MyTestProps {
  name: string;
  age: number;
  other: boolean;
}

export function MyTest(props: MyTestProps) {
  return (
    <div>
      <h1>Welcome to my-test!</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Other: {props.other}</p>
    </div>
  );
}

export default MyTest;
