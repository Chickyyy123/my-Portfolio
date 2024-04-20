import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" position-sticky top-0 z-1">
      <Navbar expand="lg" className="bg-white shadow">
        <Container fluid className="px-5">
          <Navbar.Brand as={Link} to="/" className=" font-nunito fs-3">
            KIMHAK <span className="text-danger">.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="pt-3" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="pt-3" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="pt-3" as={Link} to="/services">
                Services
              </Nav.Link>
              <NavDropdown
                className="pt-2"
                title="Blog"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/bloggrid">
                  Blog Grid
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogdetail">
                  Blog Detail
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="pt-2"
                title="Pages"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/pricingplan">
                  Pricing Plan
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ourfeatures">
                  Our Features
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/teammembers">
                  Team Members
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonial">
                  Testimonial
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/freequote">
                  Free Quote
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="pt-3" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="pt-3">
                <FontAwesomeIcon icon={faSearch} className="text-blue" />
              </Nav.Link>
              <Nav.Link>
                <button className="buttons py-2">Download Pro Version</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
