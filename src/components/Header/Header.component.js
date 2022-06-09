import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header' style={{marginRight:'100px',width:'1200px'}}>
        <Navbar bg="transparent" expand="lg" style={{marginRight:'100px'}} >

  <Container fluid>
    <div> <img src='/assets/images/logo3.jpg' width={100} height={50} /></div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '80px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/auth">SignIn</Nav.Link>
        <Nav.Link href="/shop">Shop</Nav.Link>
        <NavDropdown title="Product" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Women</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Childern's</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            sPORTS
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

export default connect(mapStateToProps)(Header);