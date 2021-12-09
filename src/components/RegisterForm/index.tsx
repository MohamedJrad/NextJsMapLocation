import React from 'react'
import { Form,Input, Button, Checkbox,Card } from 'antd';
import 'antd/dist/antd.css';
import { gql, useMutation } from '@apollo/client';
import {REGISTER_USER,userVar,isLoggedInVar} from '../../apollo'



const Index = () => {
const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);


      const onFinish =async (values: any) => {
          
console.log('Success:', values);
       registerUser({ variables: {email:values.email,password:values.password} })
    };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

if(error) return <div>error</div>
if(loading)return <div>Loading ...</div>
    if(data){
       
         //@ts-ignore
      const token=data.registerUser.token
      //@ts-ignore
      const user=data.registerUser.user
     userVar(user)
    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("user",JSON.stringify(user))
     isLoggedInVar(true)

       }

    return (
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

   

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    )
}   

export default Index
