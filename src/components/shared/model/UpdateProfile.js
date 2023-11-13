import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateCustomerProfile from '../../customer/UpdateCustomerProfile'
const UpdateProfile = () => {
    
    // console.log("Editing user profile--------->", value);

    const [show, setShow] = useState(false);
    const [data, setData] = useState();
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect(()=>{
    //     setData(value);
    // },[value])


    // useEffect(()=>{
    //     handleShow(true);
    // },[value])

  return (
    <div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <UpdateCustomerProfile editRecord={data}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default UpdateProfile
