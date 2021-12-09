import React from 'react'
import {lanVar} from '../../apollo'

import Flags from 'country-flag-icons/react/3x2'
const index = () => {

const onEnClick=()=>{
lanVar('en')
}
const onFrClick=()=>{
  lanVar('fr')  
}
const onArClick=()=>{
    lanVar('ar')
}


    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <Flags.US style={{width:'50px',margin:'10px',cursor:'pointer'}} onClick={onEnClick}/>
               <Flags.FR style={{width:'50px',margin:'10px',cursor:'pointer'}} onClick={onFrClick}/>
                  <Flags.TN style={{width:'50px',margin:'10px',cursor:'pointer'}} onClick={onArClick}/>
        </div>
    )
}

export default index
