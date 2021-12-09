import styled from 'styled-components';
import { Card} from 'antd';
import 'antd/dist/antd.css';




export const Wrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const StyledCard=styled(Card)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:300px;
height: 100px;


`