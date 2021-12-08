import React from 'react'
import {Formik,Form} from 'formik'
import Yup from 'yup'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const loginForm = () => {
    const initialValues={
        email:'',
        password:''
    }
    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid email format').required('Required'),
        password:Yup.string().required('Required')
    })
    const onSubmit =values=>{
        console.log('form data',values)

    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik=>{
                    return <Form>
                        <Input placeholder="Email" type='email' />
                       <Space direction="vertical">
    <Input.Password placeholder="input password" />
    <Input.Password
      placeholder="input password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  </Space>
                        <button type='submit' disabled={!formik.isValid}></button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default loginForm
