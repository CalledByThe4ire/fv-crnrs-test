import React, { useState } from "react";
import { Link } from "../../styles";
import { v4 as uuidv4 } from "uuid";

import { Breadcrumbs as BreadcrumbsStyled } from "./Breadcrumbs.styles";
import { Breadcrumb as BreadcrumbStyled } from "./parts/Breadcrumb.styles";

interface IBreadcrumbsProps {}

interface IBreadcrumb {
  id: string;
  label: string;
  link: string;
  isActive: boolean;
}

const breadcrumbs: IBreadcrumb[] = [
  {
    id: uuidv4(),
    label: "Главная",
    link: "!#",
    isActive: false,
  },
  {
    id: uuidv4(),
    label: "Корзина",
    link: "!#",
    isActive: true,
  },
];

const Breadcrumbs: React.FC<IBreadcrumbsProps> = () => {
  const [state, setState] = useState<{ items: IBreadcrumb[] }>({
    items: [...breadcrumbs],
  });

  return (
    <BreadcrumbsStyled>
      {state.items.length &&
        state.items.map((breadcrumb: IBreadcrumb) => (
          <Link
            to={breadcrumb.link}
            key={breadcrumb.id}
            onClick={(e) => {
              e.preventDefault();

              setState({
                items: state.items.map((item) =>
                  item.id === breadcrumb.id
                    ? { ...item, isActive: !item.isActive }
                    : { ...item, isActive: false }
                ),
              });
            }}
          >
            <BreadcrumbStyled isActive={breadcrumb.isActive}>
              {breadcrumb.label}
            </BreadcrumbStyled>
          </Link>
        ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
