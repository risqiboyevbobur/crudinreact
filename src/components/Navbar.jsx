import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbaritem() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">

     <Link to="/home">
     <li style={{textDecoration: " none", color: "black", paddingLeft: "15px"}}>Home</li>
     </Link>

     <Link to="/result">
            <li style={{textDecoration: " none", color: "black", paddingLeft: "15px"}}>Result</li>
     </Link>
        
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
