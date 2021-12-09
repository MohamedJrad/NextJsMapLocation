import React, { useState, useEffect } from 'react'
import AddLocationModal from '../AddLocationModal.tsx'
import Map from '../Map'
import { Wrapper, Container } from './styles'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { GET_LOCATIONS, GET_LOCATIONS_BY_SECTOR, useApollo, createApolloClient } from '../../apollo';
import { useQuery, useReactiveVar } from '@apollo/client';
import { useWindowSize } from './useWindowSize'
import SinOutButton from '../SignOutButton'
import {lanVar,LAN} from '../../apollo'





const main = () => {
  const [text,setText]=React.useState({
     public:'public',
     all:'all',
     private:'private'
 })
const { data:ldata } = useQuery(LAN);

    const size = useWindowSize()
    console.log(size)

    const [markersState, setMarkersState] = useState('all')
    const [markers, setMarkers] = useState([])



    const { loading, error, data } = useQuery(GET_LOCATIONS);

    const { loading: lPublic, error: ePublic, data: dPublic } = useQuery(GET_LOCATIONS_BY_SECTOR, {
        variables: {
            sector: "PUBLIC"
        }
    });


    const { loading: lPrivate, error: ePrivate, data: dPrivate } = useQuery(GET_LOCATIONS_BY_SECTOR, {
        variables: {
            sector: "PRIVATE"
        }
    });






    if (error || ePrivate || ePublic) return <div>error</div>
    if (loading || lPrivate || lPublic) return <div>Loading ...</div>


console.log(dPrivate.getLocationsBySector)
useEffect(() => {

    if (data || dPublic || dPrivate) {
        if (markersState === 'all')
            setMarkers(data.getLocations)
        else if (markersState === 'public')
            setMarkers(dPublic.getLocationsBySector)

        else if (markersState === 'private')
            setMarkers(dPrivate.getLocationsBySector)
    }

}, )


    const height = size.height - 100


    useEffect(() => {
switch (ldata.language) {
  case 'fr':
 setText({
     public:'publique',
     all:'tout',
     private:'privée'
 })
    break;
  case 'en':
 setText({
     public:'public',
     all:'all',
     private:'private'
 })
    break;
    case 'ar':
 setText({
     public:'عام',
     all:'الكل',
     private:'خاص'
 })
    break
  default:
    //Statements executed when none of
    //the values match the value of the expression
    break
}
}, [ldata])

    return (
        <Container width={size.width} height={height}>
            <SinOutButton />

            <AddLocationModal />
            <Wrapper>
                <Button onClick={() => { setMarkersState('all') }}>{text.all}</Button>
                <Button onClick={() => { setMarkersState('public') }}>{text.public}</Button>
                <Button onClick={() => { setMarkersState('private') }}>{text.private}</Button>

            </Wrapper>
            <Map markers={markers} />



        </Container>
    )
}      

export default main

