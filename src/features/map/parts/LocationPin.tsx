import React from "react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import { Pin, PinIcon } from "./LocationPin.styles";

interface LocationPinProps {
  lat: number;
  lng: number;
}

const LocationPin: React.FC<LocationPinProps> = () => {
  return (
    <Pin>
      <PinIcon icon={locationIcon} />
    </Pin>
  );
};

export default LocationPin;
