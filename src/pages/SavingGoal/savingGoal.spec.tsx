import React from 'react';
import SavingGoal from '.';
import { fireEvent, RenderResult, render } from '@testing-library/react';

type SutTypes = {
  sut: RenderResult;
};

const INITIAL_AMMOUNT = 25000;

const makeSut = (): SutTypes => {
  const sut = render(<SavingGoal />);
  return {
    sut
  };
};

describe('Saving Goal Component', () => {
  test('Should only allow numbers in Currency Input', () => {
    const { sut } = makeSut();
    const Input = sut.getByTestId('currency-input') as HTMLInputElement;
    fireEvent.input(Input, {
      target: { value: 'L' }
    });
    expect(Input.value).toBe('NaN');
  });

  test('Currency Input Should format the number input', () => {
    const { sut } = makeSut();
    const Input = sut.getByTestId('currency-input') as HTMLInputElement;
    fireEvent.input(Input, {
      target: { value: INITIAL_AMMOUNT }
    });
    expect(Input.value).toBe('25.000');
  });
});
