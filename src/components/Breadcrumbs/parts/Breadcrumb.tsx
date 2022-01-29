import React from "react";
import { Breadcrumb as BreadcrumbStyled } from "./Breadcrumb.styles";

const Breadcrumb: React.FC = (props) => {
  return <BreadcrumbStyled>{props.children}</BreadcrumbStyled>;
};

export default Breadcrumb;
