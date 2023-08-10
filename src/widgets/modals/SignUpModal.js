import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SignUpForm = () => (
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
        <label>Confirm Password</label>
        <br />
        <input className='form-control' type="password" />
        <br />
        <input className='btn btn-dark' type="submit" value="Submit"/>
    </form>
    </>
);

const SignUpModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm />
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
