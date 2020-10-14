import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import mapMarker from '../images/map-marker.svg';

function OrphanagesMap() {
    return(
        <div id="page-map">
          <aside>
            <header>
              <img src={mapMarker} alt="Happy"/>
              <h2>Escolha um orfanato no mapa</h2>
              <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
              <strong>Salvador</strong>
              <span>Bahia</span>
            </footer>
          </aside>

          <div></div>

         <Link to="" className="create-orphanage">

           <FiPlus size={32} color="#FFF"/>
         </Link>
        </div>
    );
}

export default OrphanagesMap;