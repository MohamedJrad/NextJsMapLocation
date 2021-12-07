import styled from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  width: 90px;
  border-radius: 5px;
`;

export const AntButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  &:hover {
    background-color: whitesmoke;
    filter: brightness(85%);
  }

  &:focus {
    border-color: #d9d9d9;
  }
`;

export const Number = styled.span`
  font-size: 18px;
`;
