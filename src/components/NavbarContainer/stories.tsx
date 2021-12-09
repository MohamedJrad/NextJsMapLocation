import React from 'react';
import { Meta, Story } from '@storybook/react';
import Index, { Props } from './index';

export default {
  title: `atoms/NavbarAtoms/NavbarContainer`,
  component: Index,
} as Meta;

const Template: Story<Props> = (args) => <Index {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
