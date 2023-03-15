import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "./ErrorMessage.css";

function ErrorMessage() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Warning! 404 Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="error">
          <h3>Please enter a valid search!</h3>
          <img className="error-photo" src="https://raw.githubusercontent.com/jkpasaoa/images/main/404%20error%20robot.jpg" alt="" style={{ width: '100%', height: 'auto' }} />
          <p className='home' style={{ fontSize: 15 }}>
            <Link style={{ color: 'black' }} to='/'>
              Click Here to Go Back Home
            </Link>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorMessage;

