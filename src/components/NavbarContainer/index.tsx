import React from 'react';
import { Nav, Container } from './styles';
import Flags from '../Flags'
export interface Props {
  bg: string;
  children: React.ReactNode | React.ReactNode[];
}

const Index = ({ bg, children }: Props): JSX.Element => (
  <Nav bg={bg}>
    <Container>{children}</Container>
    <Flags></Flags>
  </Nav>
);

Index.defaultProps = {
  bg: `#f4f4f7`,
};

export default Index;
