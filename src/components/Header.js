import { Link } from "gatsby"
import React from "react"
import "../styles/global.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../assets/logo-clean.png"

export default function Header() {
  return (
    //   <header className="bg-dark">
    //   <Container>
    //     <Navbar expand="sm" variant="dark">
    //       <Navbar.Brand href="/">
    //         {" "}
    //         <img src={logo} width="60" heigth="60" alt="Thiago Logo" /> Dr.
    //         Thiago Brandão
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav as="ul" className="ml-auto">
    //           <Nav.Item as="li">
    //             <Link to="/" className="nav-link" activeClassName="active">
    //               Página Inicial
    //             </Link>
    //           </Nav.Item>
    //           <Nav.Item as="li">
    //             <Link to="/blog" className="nav-link" activeClassName="active">
    //               Blog
    //             </Link>
    //           </Nav.Item>
    //           <Nav.Item as="li">
    //             <Link
    //               to="https://www.doctoralia.com.br/thiago-queiroz-brandao/psiquiatra/sao-jose-do-rio-preto?utm_source=widget&utm_medium=link"
    //               className="nav-link"
    //               target="_blank"
    //             >
    //               {" "}
    //               Agendar Consulta
    //             </Link>
    //           </Nav.Item>
    //           <Nav.Item as="li">
    //             <Link to="/contato" className="nav-link">
    //               Contato
    //             </Link>
    //           </Nav.Item>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </Container>
    // </header>

    // <Navbar bg="dark" variant="dark" expand="sm">
    //   <Container>
    //     <Navbar.Brand href="/">
    //       {" "}
    //       <img src={logo} width="60" heigth="60" alt="Thiago Logo" /> Dr. Thiago
    //       Brandão
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="nav-items ml-auto">
    //       <Link to="/" className="nav-link" activeClassName="active">
    //         Página Inicial{" "}
    //       </Link>
    //       <Link to="/blog" className="nav-link" activeClassName="active">
    //         Blog
    //       </Link>
    //       <Link
    //         to="https://www.doctoralia.com.br/thiago-queiroz-brandao/psiquiatra/sao-jose-do-rio-preto?utm_source=widget&utm_medium=link"
    //         className="nav-link"
    //         target="_blank"
    //       >
    //         {" "}
    //         Agendar Consulta
    //       </Link>
    //       <Link to="/contato" className="nav-link">
    //         Contato
    //       </Link>
    //     </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey="1" href="#home">
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" href="#link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <header>
    //   <Container>
    //     <Navbar expand="md">
    //       <Navbar.Brand href="/">Torino</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="navbarResponsive" />
    //       <Navbar.Collapse id="navbarResponsive">
    //         <Nav as="ul" className="ml-auto">
    //           <Nav.Item as="li">
    //             <Link to="/" className="nav-link" activeClassName="active">
    //               Inicial
    //             </Link>
    //           </Nav.Item>
    //           <Nav.Item as="li">
    //             <Link to="/" className="nav-link" activeClassName="active">
    //               Inicial
    //             </Link>
    //           </Nav.Item>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </Container>
    // </header>
  )
}
