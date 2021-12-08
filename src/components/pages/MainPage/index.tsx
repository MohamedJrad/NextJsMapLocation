import React ,{useState,useEffect}from 'react'
import AddLocationModal from '../../AddLocationModal.tsx'
import Map from '../../Map'
import {Wrapper} from './styles'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { GET_LOCATIONS,GET_LOCATIONS_BY_SECTOR,useApollo ,createApolloClient} from '../../../apollo';
import { useQuery, useReactiveVar } from '@apollo/client';
const main = () => {

    const [markersState,setMarkersState]=useState('all')
    const [markers,setMarkers]=useState([])


 
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

useEffect(() => {
    if(markersState==='all')
    setMarkers(data.getLocations)
    else if(markersState==='public')
setMarkers(dPublic.getLocationsBySector)

 else if(markersState==='private')
setMarkers(dPrivate.getLocationsBySector)

}, [markersState])


    return (
        <div style={{height:'100vh'}}>
            Hello from Main
            <AddLocationModal/>
                  <Wrapper>
<Button onClick={()=>{setMarkersState('all')}}>all</Button>
<Button onClick={()=>{setMarkersState('public')}}>Public</Button>
<Button onClick={()=>{setMarkersState('private')}}>Private</Button>

      </Wrapper>
 <Map markers={markers}/>

      
            
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