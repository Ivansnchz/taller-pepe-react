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
            <Link to='/'>
              <MDBNavbarLink active aria-current='page' href='/'>
                Inicio
              </MDBNavbarLink>
              </Link>
              <Link to='/servicios'>
              <MDBNavbarLink active aria-current='page' href='/servicios' >
                Servicios
              </MDBNavbarLink></Link>
              <Link to='/recomendamos'>
                <MDBNavbarLink active aria-current='page' href='/recomendamos'>
                Recomendamos
              </MDBNavbarLink></Link>
              <Link to='/contacto'>
              <MDBNavbarLink active aria-current='page' href='/contacto'>
                Contacto
              </MDBNavbarLink></Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
