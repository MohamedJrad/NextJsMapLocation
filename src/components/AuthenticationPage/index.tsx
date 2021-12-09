import React from 'react';
import RegisterModal from '../RegisterModal'
import LoginModal from '../LoginModal'

import {Wrapper,StyledCard} from './styles'


const Index = () => {


    return (
        <Wrapper>
           
               <div >
                 <p>Admin:</p>
                 <p> admin@test.com</p>
                 <p>123456</p>
                
             </div>
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
