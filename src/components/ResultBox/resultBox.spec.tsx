import React from 'react';
import { render } from '@testing-library/react';
import Result from './index';

describe('Result Box Component', () => {
  test('Should calculate the correct amount based on Goal and months Input', () => {
    const amount = 13000;
    const expectedResult = amount / 13;
    const component = render(
      <Result year={2021} month={'October'} amount={amount} />
    );
    expect(component.getByTestId('result').textContent).toBe(
      `$${expectedResult.toFixed(2)}`
    );
  });
});
