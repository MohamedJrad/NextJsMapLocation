import React from 'react';
import RegisterModal from '../../RegisterModal'
import LoginModal from '../../LoginModal'

import {Wrapper,StyledCard} from './styles'


const Index = () => {


    return (
        <Wrapper>
           
        
            <StyledCard >
                   <LoginModal/>
     
     
             </StyledCard>
                <StyledCard >
                       <RegisterModal/>
     
             </StyledCard>
    
        </Wrapper>
    );
};



export default Index;
