import React from "react";

import { Map as MapStyled } from "./Map.styles";
import mapImagePlaceholder from "../../../../assets/images/map.jpg";

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  return (
    <MapStyled>
      <img
        src={mapImagePlaceholder}
        alt="Изображение карты"
        width="100%"
        height="100%"
      />
      <figcaption>
        <div>Итог:</div>
        <div>
          <span>3790</span>
          <span>&nbsp;руб.</span>
        </div>
      </figcaption>
    </MapStyled>
  );
};

export default Map;
