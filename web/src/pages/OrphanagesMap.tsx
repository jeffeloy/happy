import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map,TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,

  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor:[0,-60]
})
function OrphanagesMap() {
    return(
        <div id="page-map">
          <aside>
            <header>
              <img src={mapMarker} alt="Happy"/>
              <h2>Escolha um orfanato no mapa</h2>
              <p>Muitas crianças estão esperando a sua visita</p>
            </header>

            <footer>
              <strong>Salvador</strong>
              <span>Bahia</span>
            </footer>
          </aside>

          <Map 
            center={[-13.022378,-38.655771]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
          >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

            <Marker
              icon={mapIcon}
              position={[-13.022380,-38.6563205]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                Lar Maria da Glória

                <Link to="">
                  <FiArrowRight size={20} color="#FFF"/>
                </Link>
              </Popup>
            </Marker>
          </Map>

         <Link to="/orfanatos/criar" className="create-orphanage">

           <FiPlus size={32} color="#FFF"/>
         </Link>
        </div>
    );
}

export default OrphanagesMap;