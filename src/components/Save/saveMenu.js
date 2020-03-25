import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import "./style.css"
import { Button } from 'react-bootstrap'

function SaveMenu(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Save menu
        </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="menu">
            
            <h5>
              Save 1
            </h5>
            <h5>
              Save 2
            </h5>
            <h5>
              Save 3
            </h5>

          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Game
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SaveMenu;



// const MenuContainer = ({ children, style }) =>
{/* <div className="menu" style={style}>
  {children}
  <h1>
    Save 1
     </h1>

</div> */}




// export default MenuContainer;