import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {Map,TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

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
            center={[-13.0226441,-38.6634685]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
          >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
          </Map>

         <Link to="" className="create-orphanage">

           <FiPlus size={32} color="#FFF"/>
         </Link>
        </div>
    );
}

export default OrphanagesMap;