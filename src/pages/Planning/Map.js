import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';


function Map( {events, setSelected} ) {

  return (
    <div>
        <MapContainer center={[49.32934680202367, -1.322734136327801]} zoom={9} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {events.map((event) => (
                (event.display) && Number(event.long) && Number(event.lat) &&
                    <Marker
                        key={event.id}
                        position={[event.long, event.lat]}
                        eventHandlers={{
                            click: (e) => {
                              setSelected(event.id)
                            },
                          }}>
                        <Popup>
                           { event.lieu }
                        </Popup>
                    </Marker>
                ))}
        </MapContainer>
    </div>
  );
}


export default Map;