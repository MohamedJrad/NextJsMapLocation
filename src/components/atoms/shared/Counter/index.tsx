import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { GrAdd } from 'react-icons/gr';
import { FaMinus } from 'react-icons/fa';
import { Wrapper, AntButton, Number } from './styles';

export interface Props {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Index = ({ count, onIncrease, onDecrease }: Props): JSX.Element => {
  const [isAddDisabled, setIsAddDisabled] = useState(false);
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(false);

  useEffect((): void => {
    count === 1 ? setIsRemoveDisabled(true) : null;
    count > 1 ? setIsRemoveDisabled(false) : null;

    count === 25 ? setIsAddDisabled(true) : null;
    count < 25 ? setIsAddDisabled(false) : null;
  }, [count]);

  return (
    <Wrapper>
      <AntButton
        data-testid="subtract button"
        icon={<FaMinus size={10} color="black" />}
        size="small"
        color="white"
        disabled={isRemoveDisabled}
        onClick={() => {
          onDecrease();
        }}
      />
      <Number> {count}</Number>
      <AntButton
        data-testid="add button"
        icon={<GrAdd size={10} color="gray" />}
        size="small"
        disabled={isAddDisabled}
        onClick={() => {
          onIncrease();
        }}
      />
    </Wrapper>
  );
};

Index.defaultProps = {
  count: 2,
  onIncrease: () => {
    console.log('onIncrease');
  },
  onDecrease: () => {
    console.log('onDecrease');
  },
};

export default Index;
