import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { PiPottedPlantDuotone } from "react-icons/pi";
import logo from '../images/botanical_logo.png';

const Header = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Botanical Bliss Logo"
              style={{ width: '50px' }}
            />
            Botanical Bliss
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-center">
              <Nav.Link as={Link} to="/products" className="mx-3 d-flex align-items-center">
                Products
                <PiPottedPlantDuotone size={30} className="ms-2" />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="mx-3 d-flex align-items-center">
                Cart
                <GiShoppingCart size={30} className="ms-2" />
                <Badge pill bg="primary" className="ms-1">
                  {totalQuantity}
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;