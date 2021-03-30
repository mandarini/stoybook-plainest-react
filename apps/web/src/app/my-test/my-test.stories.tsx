import { text, number, boolean } from '@storybook/addon-knobs';
import React from 'react';
import { MyTest, MyTestProps } from './my-test';

export default {
  component: MyTest,
  title: 'MyTest',
};

export const primary = () => {
  const props: MyTestProps = {
    name: text('name', ''),
    age: number('age', 0),
    other: boolean('other', false),
  };

  return <MyTest name={props.name} age={props.age} other={props.other} />;
};
