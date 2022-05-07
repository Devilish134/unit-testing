import '@testing-library/jest-dom/extend-expect';
import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import ResultBox from './ResultBox';

describe('Component ResultBox', () => {
  it('should render proper info about conversion when PLN -> USD', () => {
    const testCases = [
      {
        amount: 100,
        from: 'PLN',
        to: 'USD',
        result: 'PLN 100.00 = $28.57',
      },
      {
        amount: 20,
        from: 'USD',
        to: 'PLN',
        result: '$20.00 = PLN 70.00',
      },
      {
        amount: 200,
        from: 'PLN',
        to: 'USD',
        result: 'PLN 200.00 = $57.14',
      },
      {
        amount: 345,
        from: 'USD',
        to: 'PLN',
        result: '$345.00 = PLN 1,207.50',
      },
      {
        amount: 345,
        from: 'PLN',
        to: 'PLN',
        result: 'PLN 345.00 = PLN 345.00',
      },
      {
        amount: 35,
        from: 'USD',
        to: 'USD',
        result: '$35.00 = $35.00',
      },
    ];
    for (const testObj of testCases) {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={testObj.amount}
        />
      );

      //find div
      const resultField =
        screen.getByTestId('result');

      //check if values are right
      expect(resultField).toHaveTextContent(
        testObj.result
      );

      cleanup();
    }
  });
});
