import { Link } from "react-router-dom";
import styled from "styled-components";
import DESIGN_SYSTEM from "../../common/designSystem";

export const NavbarContainer = styled.header`
  display: flex;
  background: red;
  padding: 20px;
  align-items: center;
  background: ${DESIGN_SYSTEM.COLORS.DEFAULT_BACKGROUND};
  justify-content: space-between;
`;

export const MenuItem = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: ${DESIGN_SYSTEM.COLORS.MENU_ITEM.DEFAULT};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-right: 32px;
  &:hover {
    cursor: pointer;
    color: ${DESIGN_SYSTEM.COLORS.MENU_ITEM.HOVER};
  }
  ${({selected}) =>
    selected &&
    `color: ${DESIGN_SYSTEM.COLORS.MENU_ITEM.SELECTED.TEXT};
    box-shadow: inset 0px -2px 0px ${DESIGN_SYSTEM.COLORS.MENU_ITEM.SELECTED.BORDER};`}

  img {
    width: 36;
    height: 36;
    margin: "0 10px";
  }
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;
