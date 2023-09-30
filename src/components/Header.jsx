import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react'
import { Col, Form, InputGroup, NavDropdown, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {



  return (

    <>

      <header style={{ color: "black" }}>

        <Navbar expand="lg" className=" header bg-body-tertiary">
          <Container>
            <Navbar.Brand id='changecontext' href="#home">

              <div className="head"><h4>jed disgon full body sa</h4></div>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto me-4 drop">
                <div className="links d-flex">
                  <Nav.Link className='me-4' href="#home"> <i className='fa fa-user bar-icon' ></i> Sign in</Nav.Link>
                  <div className="none1">
                    <Nav.Link className='me-4' href="#link"> <i className="fa fa-gift"></i> Gift Certificates</Nav.Link>
                  </div>
                  <div className="d-flex">
                    <Nav.Link className='me-4' id='account' href="#home"> <i className="fa fa-user"></i> My Account
                      <div className='features'>
                        <ul>
                          <li>Check out</li>
                          <li>Sign in</li>
                          <li>Register</li>
                        </ul>
                      </div>
                    </Nav.Link>
                    <div className="none2">
                      <Nav.Link id='lang' href="#link">USD
                        <div className="usdfeatures">
                          <ul>
                            <li>Australian Dollar</li>
                            <li>US Dollar</li>

                          </ul>
                        </div>
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



        <div className="headerinner">
          <nav className="navbar navbar-expand-lg  navbar-light bg-light navbar-fixed-top ">
            <div className="container-fluid">

              <div className="image"> <img src="https://cdn11.bigcommerce.com/s-3zqjz60dg3/images/stencil/original/logo-default_1515811017__78747.original.png" alt="" /></div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a style={{ color: "black" }} className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={{ color: "black" }} className="nav-link" href="#">
                      Layout
                    </a>
                  </li>

                  <li className="nav-item">
                    <a style={{ color: "black" }} className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={{ color: "black" }} className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={{ color: "black" }} className="nav-link" href="#">
                      Bonus Page
                    </a>
                  </li>

                </ul>
                <form className="d-flex" role="search">
                  <div className="boxbottom  d-flex">
                    <div className="image me-2">
                      <img width={40} height={40} src="https://www.mytrendyphone.co.uk/images/Wireless-Gaming-Headset-L850-with-RGB-Light-Orange-13062023-01-p.webp" alt="" />
                    </div>
                    <div className="aboutbox ms-2">
                      <strong style={{ color: "black" }}>Call us now:</strong>
                      <span style={{ color: "black" }}>(+82) 526 726 28</span>
                      <br />
                      <span style={{ color: "black" }}> Email :  </span>
                      <a href="mailto:contact@revo.com"> contact@revo.com</a>
                    </div>


                  </div>
                </form>
              </div>
            </div>



          </nav>


        </div>


        {/* <div className="headerbottom ">
          <div class="container">
            <div class="row">
              <Col sm={6} md={3}>
                <div className=" leftside">
                  <i class="fa-solid fa-align-left"></i>
                  <span>All Categories</span>
                </div>
              </Col>

              <Col sm={6} >
                <div className=" inner">

                  <InputGroup className="mb-3 ">
                    <Form.Control
                      placeholder="Search the store"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                  </InputGroup>


                </div>

              </Col>

              <Col sm={6} md={3} >
                <div className=" right ms-5">
                  <i class="fa-solid fa-heart"></i>

                  <i class="fa-solid fa-cart-shopping"></i>
                </div>

              </Col>

            </div>

          </div>



        </div> */}


        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="header-bottom-left col-lg-3 col-md-2 col-3 ">
                <div className="top">
                  <i className="fa-solid fa-align-left"></i>
                  <span>All Categories</span>
                  <i className="fa-solid fa-caret-down"></i>
                </div>

              </div>

              <div className="header-bottom-right col-lg-9 col-md-10 col-9">
               <div className="row">
               <div className="search d-flex">
               <input class="form-control form-input" data-search-quick="" name="search_query" id="search_query" data-error-message="Search field cannot be empty." placeholder="Search the store" autocomplete="off"></input>
               <button class="btn btn-outline-secondary" id="btn-quickSearch" type="submit"><i class="fa fa-search"></i></button>
               </div>

              <div className="cart-bottom">
                <ul>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                </ul>
              </div>



             
               </div>
              </div>
            </div>
          </div>
        </div>











      </header >







    </>







  )
}


export default Header 