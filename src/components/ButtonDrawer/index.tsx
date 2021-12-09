import React,{useState} from 'react'
import { Drawer } from 'antd';
import 'antd/dist/antd.css';


const index = ({visible,setVisible,data}) => {


const onClose=()=>{
setVisible(false)
}

    return (
        <div>
              <Drawer
          title={data.name.en}
          placement="bottom"
          closable={false}
          onClose={onClose}
          visible={visible}
          key="bottom"
        >
               <p>{data.address.en}</p>
          <p>{data.description.en}</p>
       
     
        </Drawer>
        </div>
    )
}

export default index
