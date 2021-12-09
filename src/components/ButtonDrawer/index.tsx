import React, { useState } from 'react'
import { Drawer } from 'antd';
import 'antd/dist/antd.css';
import DeleteButton from '../DeleteLocationButton'
import { Wrapper } from './styles'



const index = ({ visible, setVisible, data }) => {


    const onClose = () => {
        setVisible(false)
    }

    return (
        <div>
            <Drawer
                handler={<div>test</div>}
                title={data.name.en}
                placement="bottom"
                closable={false}
                onClose={onClose}
                visible={visible}
                key="bottom"
            >
                <Wrapper>
                    <div>
                        <p>{data.address.en}</p>
                        <p>{data.description.en}</p>
                    </div>
                    <DeleteButton id={data._id} />
                </Wrapper>



            </Drawer>
        </div>
    )
}

export default index
