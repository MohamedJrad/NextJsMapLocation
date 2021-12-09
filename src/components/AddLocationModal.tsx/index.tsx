import React,{useEffect} from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import AddLocationForm from '../AddLocationForm'
import {userVar} from '../../apollo'
import {Wrapper} from './styles'


const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const [displayState,setDisplayState]=React.useState('none')


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
  const user=userVar()
  //@ts-ignore
  if(user.role==='admin'){

    setDisplayState('flex')
  }
  else{
     setDisplayState('none')
  }

  
}, [displayState])



  return (
<Wrapper displayState={displayState}>




  
    <div style={{margin:"10px"}}>
      <Button type="primary" onClick={showModal}>
        Add Location
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
         footer={[]}
      >
       <AddLocationForm/>
      </Modal>
    </div>

  </Wrapper>

  );
};

export default App