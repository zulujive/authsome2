import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import LoginModal from './../modals/LoginModal';
import SignUpModal from './../modals/SignUpModal'; // Import SignUpModal
import { NavLink, Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false); // State for sign-up modal visibility

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Authsome</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link>
            <Button variant="outline-light" className="ms-2" onClick={handleLoginClick}>Login</Button>
            <Button variant="outline-light" className="ms-2" onClick={handleSignUpClick}>Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
      {children}

      {/* Login Modal */}
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />

      {/* Sign Up Modal */}
      <SignUpModal show={showSignUpModal} handleClose={handleCloseSignUpModal} />
    </div>
  );
};

export default Layout;
