import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Index, { Props } from './index';

export default {
  title: `atoms/shared/Counter`,
  component: Index
} 
//as Meta ;

const Template: Story<Props> = (args): JSX.Element => {
  const [count, setCount] = useState(args.count);
  const onDecrease = () => {
    setCount(count - 1);
  };
  const onIncrease = () => {
    setCount(count + 1);
  };
  return <Index count={count} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export const Default = Template.bind({});
Default.args = {
  count: 3,
};
export const Count25 = Template.bind({});
Count25.args = {
  count: 25,
};
export const Count1 = Template.bind({});
Count1.args = {
  count: 1,
};
