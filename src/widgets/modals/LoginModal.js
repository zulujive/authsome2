import React from 'react';
import Modal from 'react-bootstrap/Modal';

const LoginForm = () => (
    <>
    <form>
        <label>Email</label>
        <br />
        <input className='form-control' type="text" />
        <br />
        <label>Password</label>
        <br />
        <input className='form-control' type="password" />
        <br />
        <input className='btn btn-dark' type="submit" value="Login"/>
    </form>
    </>
);

const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
