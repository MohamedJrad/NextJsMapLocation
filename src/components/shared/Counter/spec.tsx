import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories';
import Meta from './stories';
//import { increaseNumber, decreaseNumber } from './helpers';

const { Default, Count1, Count25 } = composeStories(stories, Meta);

describe(`Component in Default state`, () => {
  it(`renders `, () => {
    render(<Default />);
  });

  it(`shows the items`, () => {
    render(<Default />);

    const buttons = screen.getAllByRole(`button`);
    expect(buttons.length).toEqual(2);
    buttons.forEach((e) => {
      expect(e).toBeInTheDocument();
    });
  });
  it(`increase the counter`, async () => {
    render(<Default />);

    const button = screen.getByTestId(`add button`);
    await fireEvent.click(button);
    // expect(screen.getByText(`3`)).toBeInTheDocument();
  });

  it(`decrease the counter`, async () => {
    render(<Default />);

    const button = screen.getByTestId(`subtract button`);
    await fireEvent.click(button);
    // expect(screen.getByText(`1`)).toBeInTheDocument();
  });

  it(`disable the subtract button when the number is 1`, () => {
    render(<Default />);

    const button = screen.getByTestId(`subtract button`);
    fireEvent.click(button);
    // expect(screen.getByText(`1`)).toBeInTheDocument();

    //  expect(button).toBeDisabled();
  });
});

describe(`the counter in 25`, () => {
  it(`disable the add button when the number is 25`, async () => {
    render(<Count25 />);
    await waitFor(() => {
      const button = screen.getByTestId(`add button`);
      expect(screen.getByText(25)).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });
});

describe(`the counter in 1`, () => {
  it(`disable the subtract button when the number is 1`, async () => {
    render(<Count1 />);
    await waitFor(() => {
      const button = screen.getByTestId(`subtract button`);
      expect(screen.getByText(1)).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });
});

describe(`helpers`, () => {
  it(`increase the number`, () => {
    // expect(increaseNumber(1)).toEqual(2);
  });

  it(`decrease the number`, () => {
    // expect(decreaseNumber(2)).toEqual(1);
  });
});

// const cases = [
//   [2, 3],
//   [1, 2],
//   [7, 8],
// ];

describe(`'add' utility`, () => {
  // test.each(cases)(`given %p , returns %p`, (firstArg, expectedResult) => {
  //   // const result = increaseNumber(firstArg);
  //   // expect(result).toEqual(expectedResult);
  // });
});
