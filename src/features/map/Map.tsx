import React from "react";
import GoogleMapReact from "google-map-react";

import { Map as MapStyled } from "./Map.styles";
import LocationPin from "./parts/LocationPin";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchLocation, selectCoords } from "./mapSlice";
import { selectTotal } from "../products/productsSlice";

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IMapProps {}

const defaultLocation: ILocation = {
  lat: 60.03171200819347,
  lng: 30.430280470401343,
};

const Map: React.FC<IMapProps> = (props) => {
  const dispatch = useAppDispatch();
  const coords = useAppSelector(selectCoords) as ILocation & {
    [key: string]: any;
  };
  const count = useAppSelector(selectTotal);
  const hasCoords = Object.keys(coords).every((key) => coords[key]);

  return (
    <MapStyled>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={hasCoords ? coords : defaultLocation}
        defaultCenter={defaultLocation}
        defaultZoom={17}
        options={{
          fullscreenControl: false,
          zoomControl: false,
        }}
        onClick={(e) => {
          const { lat, lng } = e;

          dispatch(fetchLocation({ coords: { lat, lng } }));
        }}
      >
        {hasCoords && <LocationPin lat={coords.lat} lng={coords.lng} />}
      </GoogleMapReact>
      <figcaption>
        <div>Итог:</div>
        <div>
          <span>{count}</span>
          <span>&nbsp;руб.</span>
        </div>
      </figcaption>
    </MapStyled>
  );
};

export default Map;
