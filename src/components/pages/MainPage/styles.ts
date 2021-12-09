import styled from 'styled-components';


export const Wrapper = styled.div`
  background-color: blue;
  /* position: absolute;
  z-index: 10; */
  left: 50px;
  top:50px;
  height:50px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;

`;

export const Container=styled.div<{width,height}>`
display: flex;
flex-direction: column;
 width: ${props => props.width}px;
height: ${props => props.height}px;

`


