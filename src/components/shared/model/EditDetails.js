import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditBankDetails from '../../bank/EditBankDetails'

const EditDetails = ({value}) => {
    
    console.log("Editing details value--------->", value);

    const [show, setShow] = useState(false);
    const [data, setData] = useState();
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        setData(value);
    },[value])


    useEffect(()=>{
        handleShow(true);
    },[value])

  return (
    <div>
      
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditBankDetails editRecord={data}/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>

    </div>
  )
}

export default EditDetails
