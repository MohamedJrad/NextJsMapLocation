import React from 'react'
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Container } from './styles';
import {isLoggedInVar} from '../../apollo'

 const onClick = () => {


    localStorage.removeItem("token")
    localStorage.removeItem("user")
     isLoggedInVar(false)


  }


const index = () => {
    return (
        <Container >
  <Button
            type="primary"
            icon={<PoweroffOutlined />}
        
            onClick={onClick}
          >
            Signout
          </Button>
        </Container>
  
    )
}

export default index
