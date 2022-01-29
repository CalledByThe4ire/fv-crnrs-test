import styled from "styled-components";

interface IBreadcrumbProp {
  isActive?: boolean;
}

export const Breadcrumb = styled.li<IBreadcrumbProp>`
  display: flex;
  font-size: 18px;
  color: ${(props) =>
    props.isActive ? props.theme.colors.black : props.theme.colors.grey};
  cursor: ${(props) => (props.isActive ? "auto" : "not-allowed")};
`;
