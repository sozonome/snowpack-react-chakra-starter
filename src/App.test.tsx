import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders hello', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Hello/i);
    expect(document.body.contains(textElement));
  });
});
