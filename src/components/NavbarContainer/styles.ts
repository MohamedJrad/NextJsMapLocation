import styled from 'styled-components';

export const Nav = styled.nav<{ bg: string | undefined }>`
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  margin-left: 20px;
  margin-right: 20px;
`;
