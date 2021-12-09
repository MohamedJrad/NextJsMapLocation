import React,{useEffect}from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import RegisterForm from '../RegisterForm'
import { useQuery } from '@apollo/client'
import {LAN} from '../../apollo'
const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const [text,setText]=React.useState('Login')
const { data } = useQuery(LAN);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  useEffect(() => {
switch (data.language) {
  case 'fr':
 setText('S inscrire')
    break;
  case 'en':
 setText('ٍSign Up')
    break;
    case 'ar':
setText('تسجيل')
    break
  default:
    //Statements executed when none of
    //the values match the value of the expression
    break
}
}, [data])


  return (
    <>
      <Button type="primary" onClick={showModal}>
  {text}
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
         footer={[]}
      >
       <RegisterForm/>
      </Modal>
    </>
  );
};

export default App