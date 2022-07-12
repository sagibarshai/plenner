import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { MenuItem, MenuItemsContainer, NavbarContainer } from './styledComponents';
import Guests from '../Guests/Guests';
import Home from '../Home/Home';
import { getPathName } from '../../utils/getPathName';
import Tables from '../Tables/Tables';

export const NAVBAR_ITEMS = [
  {
    name: 'Home',
    route: '/',
    Component: (props) => <Home {...props}>Home</Home>
  },
  {
    name: 'Guests',
    route: '/guests',
    Component: (props) => <Guests {...props}>Guests</Guests>
  },
  {
    name: 'Tables',
    route: '/tables',
    Component: (props) => <Tables {...props}/>
  }
];
const Navbar = () => {
  const [selectedRoute, setSelectedRoute] = useState(getPathName());
  useEffect(() => {
    console.log(window.location.pathname);
    setSelectedRoute(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <NavbarContainer>
      <Logo />
      <MenuItemsContainer>
        {NAVBAR_ITEMS.map(({ name, route }) => (
          <MenuItem to={route} key={name} selected={route === selectedRoute} onClick={() => setSelectedRoute(route)}>
            {name}
          </MenuItem>
        ))}
        <Avatar alt='Remy Sharp' src='https://see.news/wp-content/uploads/2020/12/ladygaga.jpg' />
      </MenuItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
