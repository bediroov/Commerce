import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Header = ({ count,}) => {

 

  return (

   <>
    <Navbar expand="lg" className=" header bg-body-tertiary">
      <Container>
        <Navbar.Brand id='changecontext' href="#home">
         
    <h1>salam alekyumm</h1>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto me-4">
            <Nav.Link className='me-4' href="#home"> <i className='fa fa-user bar-icon' ></i> Sign in</Nav.Link>
            <Nav.Link className='me-4' href="#link"> <i className="fa fa-gift"></i> Gift Certificates</Nav.Link>
            <Nav.Link className='me-4' id='account' href="#home"> <i className="fa fa-user"></i> My Account
              <div className='features'>
                <ul>
                  <li>Check out</li>
                  <li>Sign in</li>
                  <li>Register</li>
                </ul>
              </div>
            </Nav.Link>
            <Nav.Link id='lang' href="#link">USD
              <div className="usdfeatures">
                <ul>
                  <li>Australian Dollar</li>
                  <li>US Dollar</li>

                </ul>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://cdn11.bigcommerce.com/s-3zqjz60dg3/images/stencil/original/logo-default_1515811017__78747.original.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            <Nav.Link className='ms-4' href="#home">Home</Nav.Link>
            <Nav.Link className='ms-4' href="#link">Layout</Nav.Link>
            <Nav.Link className='ms-4' href="#home">Features</Nav.Link>
            <Nav.Link  className='ms-4' href="#home">Home</Nav.Link>
          
            <Nav.Link  className='ms-4' href="#link">Bonus Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 


    
   
   </>







  )
}

export default Header 