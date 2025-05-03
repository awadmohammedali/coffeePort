import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

const hero = "hero";
const brands = "brands";
const aboutUs = "about-us";
const theCptin = "the-captin";
const missions = "mission-and-vision";
const contactUs = "contact-us";

export default function MainNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {}, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      className={`${classes.navbar} ${scrolled ? classes.scrolled : ""}`}
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Row>
          <Navbar.Brand href="#home">
            <Logo />
            {/* <strong>Coffee Port</strong>  */}
          </Navbar.Brand>
        </Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas id="offcanvas-navbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                href="#hero"
                onClick={() => setActiveSection(hero)}
                className={`${classes.navLink} ${
                  activeSection === hero ? classes.active : ""
                }`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about-us"
                onClick={() => setActiveSection(aboutUs)}
                className={`${classes.navLink} ${
                  activeSection === aboutUs ? classes.active : ""
                }`}
              >
                About Us
              </Nav.Link>

              <Nav.Link
                href="#brands"
                onClick={() => setActiveSection(brands)}
                className={`${classes.navLink} ${
                  activeSection === brands ? classes.active : ""
                }`}
              >
                Our Brands
              </Nav.Link>
              {/* <Nav.Link href="#the-captin" className={classes.navLink}>
              The Captain
            </Nav.Link> */}
              <Nav.Link
                href="#mission-and-vision"
                onClick={() => setActiveSection(missions)}
                className={`${classes.navLink} ${
                  activeSection === missions ? classes.active : ""
                }`}
              >
                Mission & Vision
              </Nav.Link>
              <Nav.Link
                href="#contact-us"
                onClick={() => setActiveSection(contactUs)}
                className={`${classes.navLink} ${
                  activeSection === contactUs ? classes.active : ""
                }`}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>{" "}
      </Container>
    </Navbar>
  );
}
