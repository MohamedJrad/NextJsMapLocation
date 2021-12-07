module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-controls',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-jest',
    'storybook-addon-apollo-client',
    'storybook-mobile',
    '@storybook/addon-actions',
    '@storybook/testing-react',
  ],
};
