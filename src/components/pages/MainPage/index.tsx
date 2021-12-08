import React ,{useState}from 'react'
import AddLocationModal from '../../AddLocationModal.tsx'
import Map from '../../Map'
import {Wrapper} from './styles'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { GET_LOCATIONS,GET_LOCATIONS_BY_SECTOR,useApollo ,createApolloClient} from '../../../apollo';
import { useQuery, useReactiveVar } from '@apollo/client';
const main = ({markers}) => {
console.log(markers)
    const [markersState,setMarkersState]=useState('all')


 
  const { loading, error, data } = useQuery(GET_LOCATIONS);

         const { loading:lPublic, error:ePublic, data:dPublic } = useQuery(GET_LOCATIONS_BY_SECTOR,{
             variables:{
                 sector:"PUBLIC"
             }
         });

   
         const { loading:lPrivate, error:ePrivate, data:dPrivate } = useQuery(GET_LOCATIONS_BY_SECTOR,{
             variables:{
                 sector:"PRIVATE"
             }
         });

   



    if( error&& ePrivate&&ePublic )return <div>error</div>
if(loading&&lPrivate&&lPublic)return <div>Loading ...</div>

console.log(dPrivate,dPublic)

    return (
        <div style={{height:'100vh'}}>
            Hello from Main
            <AddLocationModal/>
                  <Wrapper>
<Button onClick={()=>{setMarkersState('all')}}>all</Button>
<Button onClick={()=>{setMarkersState('public')}}>Private</Button>
<Button onClick={()=>{setMarkersState('private')}}>Public</Button>

      </Wrapper>{
(markersState==='all')?  <Map markers={data.getLocations}/>:<div/>}
{(markersState==='public')? <Map markers={dPublic.getLocations}/>:<div/>}
{(markersState==='private')? <Map markers={dPrivate.getLocations}/>:<div/>}

      
            
        </div>
    )
}

export default main

export async function getServerSideProps() {
    const client = createApolloClient()
  const { data } = await client.query({
    query: GET_LOCATIONS
  });

  return {
    props: {
     markers: data.getLocations
    },
  };
}