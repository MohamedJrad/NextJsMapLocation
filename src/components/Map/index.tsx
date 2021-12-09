import React,{useState,useEffect} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {Wrapper,Container } from './styles'
import BottomDrawer from '../ButtonDrawer'


export default function GoogleMaps({markers}){
console.log(markers)


const [visible,setVisible]=useState(false)
const [selectedLocation,setLocatedLocation]=useState({

name:{en:'',ar:'',fr:''},
description:{en:'',ar:'',fr:''},
address:{en:'',ar:'',fr:''}


})


const defaultCenter = { lat: 40.748817, lng: -73.985428 };

const defaultOptions = { scrollwheel: false };



const onMarkerClicked=({marker})=>{

console.log('marker clicked',marker)
setVisible(true)
setLocatedLocation(marker)
}

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
        {
            markers.map((marker)=>{
   return <Marker position={{lat:marker.lat,lng:marker.long} } onClick={()=>{onMarkerClicked({marker})}} />
            })
        }
  
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '100%' };
const mapElementStyle = { height: '100%' };





  return (<Container>
<BottomDrawer visible={visible} setVisible={setVisible } data={selectedLocation}/>
          <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCswyDaCzBZXWDM6fQIv_G32I6YE85vyM8"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle } />}
      mapElement={<div style={ mapElementStyle } />}
    />
  </Container>

  );
}


