import React, { FC, ComponentPropsWithoutRef } from "react";

import { StyledSVG } from './SVG.styles';

const SVG: FC<ComponentPropsWithoutRef<"svg">> = ({
  width = "30px",
  height = "27px",
  fill = "#000",
}) => (
  <StyledSVG
    width={width}
    height={width}
    viewBox="0 0 30 27"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.8409 3.21018C26.1568 2.50949 25.3445 1.95365 24.4504 1.57442C23.5563 1.19519 22.598 1 21.6302 1C20.6625 1 19.7042 1.19519 18.8101 1.57442C17.916 1.95365 17.1037 2.50949 16.4195 3.21018L14.9996 4.66368L13.5798 3.21018C12.1978 1.7955 10.3234 1.00073 8.36905 1.00073C6.41466 1.00073 4.54031 1.7955 3.15835 3.21018C1.77638 4.62487 1 6.54359 1 8.54426C1 10.5449 1.77638 12.4637 3.15835 13.8783L4.57823 15.3318L14.9996 26L25.4211 15.3318L26.8409 13.8783C27.5254 13.178 28.0684 12.3464 28.4389 11.4312C28.8093 10.5159 29 9.53496 29 8.54426C29 7.55356 28.8093 6.57258 28.4389 5.65734C28.0684 4.7421 27.5254 3.91054 26.8409 3.21018V3.21018Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSVG>
);

export default SVG;
