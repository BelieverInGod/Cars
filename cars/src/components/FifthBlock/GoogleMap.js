import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function OurGoogleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDaVSOO3Osta4AqbvJ8WvzKks_BJK0dPh4',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default OurGoogleMap