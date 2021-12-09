import React,{useEffect} from 'react'
import {  Button } from 'antd';
import 'antd/dist/antd.css';
import {userVar} from '../../apollo'
import {Wrapper} from './styles'
import {  useMutation } from '@apollo/client';
import {DELETE_LOCATION} from '../../apollo'


const App = ({id}) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const [displayState,setDisplayState]=React.useState('none')
const [deleteLocation,{data,error,loading}]=useMutation(DELETE_LOCATION)

const onClick=()=>{
deleteLocation({
  variables:{id:id}
})
}
 


useEffect(() => {
  const user=userVar()
  //@ts-ignore
  if(user.role==='admin'){

    setDisplayState('absolute')
  }
  else{
     setDisplayState('none')
  }

  
}, [displayState])



  return (
<Wrapper displayState={displayState}>

    <div style={{margin:"10px"}}>
      <Button type="primary" onClick={onClick}>
       Delete Location
      </Button>
    </div>

  </Wrapper>

  );
};

export default App