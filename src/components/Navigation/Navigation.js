import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  
} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";
import logo from '../../../src/images/logo-1-300x138.png';
import './Navigation.scss';
export default function Navigation() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img src={logo} alt="logo" /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' tag={Link} to='/'>
                Inicio
              </MDBNavbarLink>
              <MDBNavbarLink active aria-current='page' tag={Link} to='/servicios'>
                Servicios
              </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' tag={Link} to='/recomendamos'>
                Recomendamos
              </MDBNavbarLink>
              <MDBNavbarLink active aria-current='page'  tag={Link} to='/contacto'>
                Contacto
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
