import React from 'react'
import { Form,Input, Button, Checkbox,Card } from 'antd';
import 'antd/dist/antd.css';
import { gql, useMutation } from '@apollo/client';
import {ADD_LOCATION} from '../../apollo'


const Index = () => {


   


      const onFinish =async (values: any) => {
    console.log('Success:', values);
 
      // addLocation(
        
        
      //   // { 
      //   // variables: {
      //   //   location:{
      //   //   name:values.name,
      //   //  description:'',
      //   //  address:'',
      //   //  long:3243,
      //   //  lat:234234,
      //   //  sector:''}
      //   // } 
        
        
      //   // }
        
        
        // )
     
    };


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
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
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
          <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
          <Form.Item
        label="Longitude "
        name="longitude "
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input  type="number"  />
      </Form.Item>
              <Form.Item
        label="Latitude"
        name="latitude"
        
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type="number" />
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
