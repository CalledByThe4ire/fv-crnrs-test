import React, { FC, ComponentPropsWithoutRef } from "react";

import { StyledSVG } from './SVG.styles';

const SVG: FC<ComponentPropsWithoutRef<"svg">> = ({
  width = "24px",
  height = "27px",
  fill = "#000",
}) => (
  <StyledSVG
    width={width}
    height={height || width}
    fill="none"
    viewBox="0 0 24 27"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 26V23.2222C23 21.7488 22.4205 20.3357 21.3891 19.2939C20.3576 18.252 18.9587 17.6667 17.5 17.6667H6.5C5.04131 17.6667 3.64236 18.252 2.61091 19.2939C1.57946 20.3357 1 21.7488 1 23.2222V26"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.1111C15.0376 12.1111 17.5 9.6238 17.5 6.55556C17.5 3.48731 15.0376 1 12 1C8.96243 1 6.5 3.48731 6.5 6.55556C6.5 9.6238 8.96243 12.1111 12 12.1111Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSVG>
);

export default SVG;
