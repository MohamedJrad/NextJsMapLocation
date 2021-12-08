import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories';
import Meta from './stories';

const { Default } = composeStories(stories, Meta);

describe(`Component in Default state`, () => {
  it(`renders `, () => {
    render(<Default />);
  });
});
