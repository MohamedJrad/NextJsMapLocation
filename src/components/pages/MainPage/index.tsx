import React ,{useState,useEffect}from 'react'
import AddLocationModal from '../../AddLocationModal.tsx'
import Map from '../../Map'
import {Wrapper,Container} from './styles'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { GET_LOCATIONS,GET_LOCATIONS_BY_SECTOR,useApollo ,createApolloClient} from '../../../apollo';
import { useQuery, useReactiveVar } from '@apollo/client';
import {useWindowSize} from './useWindowSize'
import SinOutButton from '../../SignOutButton'
const main = () => {


const size=useWindowSize()
console.log(size)

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







const height =size.height-100

    return (
        <Container width={size.width} height={height}>
             <SinOutButton/>
         
            <AddLocationModal />
                  <Wrapper>
<Button onClick={()=>{setMarkersState('all')}}>all</Button>
<Button onClick={()=>{setMarkersState('public')}}>Public</Button>
<Button onClick={()=>{setMarkersState('private')}}>Private</Button>

      </Wrapper>
 <Map markers={markers}/>

      
            
        </Container>
    )
}

export default main

