import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function NavbarH() {
  return (
    <Navbar variant="light" className="navbar-custom" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <div>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                cssclass="e-carat-hide"
                title={
                  <span style={{ color: "rgb(38, 52, 159)" }}>About Us</span>
                }
                menuVariant="Light"
              >
                <NavDropdown.Item href="#action/3.1">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Who We Are
                    </span>
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Why Apeace Care Solutions
                    </span>
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Vision & Mission Statements
                    </span>
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  {<span style={{ color: "rgb(38, 52, 159)" }}>Our Team</span>}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <span style={{ color: "rgb(38, 52, 159)" }}>Services</span>
                }
                menuVariant="Light"
              >
                <NavDropdown.Item href="#action/3.1">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Live In Care
                    </span>
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Domiciliary Care
                    </span>
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Dementia Care
                    </span>
                  }
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Children Care
                    </span>
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Respite Care
                    </span>
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  {
                    <span style={{ color: "rgb(38, 52, 159)" }}>
                      Learning Disability Care
                    </span>
                  }
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Careers">
                {<span style={{ color: "rgb(38, 52, 159)" }}>Careers</span>}
              </Nav.Link>
              <Nav.Link href="#Contacts">
                {<span style={{ color: "rgb(38, 52, 159)" }}>Contacts</span>}
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarH;
