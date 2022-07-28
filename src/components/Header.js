import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, Navbar, NavbarBrand, NavbarText, NavItem,
} from 'reactstrap';

const Header = () => (
  <Navbar className="nav">
    <NavbarBrand className="navbrand">Math magicians</NavbarBrand>
    <Nav>
      <NavItem>
        <Link to="/" className="link">
          <NavbarText className="navLink"> Home </NavbarText>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/calculator" className="link">
          <NavbarText className="navLink"> Calculator </NavbarText>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/quote" className="link">
          <NavbarText className="navLink"> Quote </NavbarText>
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
