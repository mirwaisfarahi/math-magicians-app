import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, Navbar, NavbarBrand, NavItem, NavLink,
} from 'reactstrap';

const Header = () => (
  <Navbar className="nav">
    <NavbarBrand className="navbrand">Math magicians</NavbarBrand>
    <Nav>
      <NavItem>
        <Link to="/" className="link">
          <NavLink className="navLink"> Home </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/calculator" className="link">
          <NavLink className="navLink"> Calculator </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/quote" className="link">
          <NavLink className="navLink"> Quote </NavLink>
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
