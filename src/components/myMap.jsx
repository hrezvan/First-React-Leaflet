import React, { Component } from "react";
import { Map, TileLayer,LayersControl,withLeaflet,FeatureGroup , Popup,Rectangle, Circle} from "react-leaflet";
import data from "./cities";
import "leaflet/dist/leaflet.css";
import MeasureControlDefault from 'react-leaflet-measure';
import './navBar.css';
import '../App.css';

const MeasureControl = withLeaflet(MeasureControlDefault);


class MyMap extends Component {
    render() {
      var distanceLat = data.maxLat - data.minLat;
      var bufferLat = distanceLat * 0.05;
      var distanceLong = data.maxLong - data.minLong;
      var bufferLong = distanceLong * 0.05;
      var {BaseLayer , Overlay }=LayersControl;
      const measureOptions = {
        position: 'topleft',
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'kilometers',
        primaryAreaUnit: 'sqmeters',
        secondaryAreaUnit: 'acres',
        activeColor: '#db4a29',
        completedColor: '#9b2d14'
      };
      const rectangle = [[36.3, 51], [36.8, 51.5]];
      //"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      return (
        <div id='mymap'>
            <Map
              zoom={5}
              center={[37.5, 53.0]}
              bounds={[
                [data.minLat - bufferLat, data.minLong - bufferLong],
                [data.maxLat + bufferLat, data.maxLong + bufferLong]
              ]}
            >
              <LayersControl>
                <BaseLayer checked name="Open Street Map">
                  <TileLayer
                      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  />
                </BaseLayer>
                <BaseLayer name="Satellite Map">
                  <TileLayer
                      url= "https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
                      Attribution= '© NASA Blue Marble, image service by OpenGeo'
                  />
                </BaseLayer>
                <Overlay name="Features">
                  <FeatureGroup color="purple">
                    <Popup>
                      <span>Popup goes here</span>
                    </Popup>
                    <Circle center={[37.5, 53.0]} radius={12000} />
                    <Rectangle bounds={rectangle} />
                  </FeatureGroup>
                </Overlay>
                <MeasureControl {...measureOptions} />
              </LayersControl>
            </Map>
            
        </div>
      );
    }
}
  
export default MyMap;