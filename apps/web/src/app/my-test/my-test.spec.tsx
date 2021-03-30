import React from 'react';
import { render } from '@testing-library/react';

import MyTest from './my-test';

describe('MyTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyTest />);
    expect(baseElement).toBeTruthy();
  });
});
