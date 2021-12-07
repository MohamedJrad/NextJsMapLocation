import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import results from '../src/.jest-test-results.json';

const GlobalWrapper = (storyFn) => <div>{storyFn()}</div>;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
  jest: 'spec.tsx',

  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [withTests({ results }), withKnobs, GlobalWrapper];
