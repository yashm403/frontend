import React, { Component } from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
 
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }
 
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
 
    render() {
        return(

                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Ressource Sharing Platform</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#resources">Resources</Nav.Link>
      <Nav.Link href="#manage">Manage</Nav.Link>
      <Nav.Link href="#cart">Cart</Nav.Link>
      <Nav.Link href="#contact us">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

        );
    }
}
 
export default Header;
