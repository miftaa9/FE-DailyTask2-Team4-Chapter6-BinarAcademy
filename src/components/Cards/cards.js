import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
<<<<<<< HEAD
import Detail from '../Modal/detail';
=======
import Popup from '../Popup/popup';
import React, { useState } from "react";
>>>>>>> dcc82abef14ff628e3179128543f1b1cf67569b6

function BasicExample() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Card className='card' style={{ width: '18rem' }}>
      <div style={{ fontSize: '10px' }} className='kategori'>
        <p>Kategori: Celana</p>
      </div>
      <a href='https://github.com/zodplugin/react-daily-task'>
      <Card.Img variant="top" src="images/jeans.webp" />
      </a>
      <Card.Body>
        <Card.Title>Celana Jeans</Card.Title>
        <Card.Text>
          <h6>Rp. 100.000</h6>
        </Card.Text>
        <div className='button'>
<<<<<<< HEAD
        <Detail/>
        {/* <Button variant="success">Detail</Button> */}
=======
        <div>
          {isPopupOpen ? (
            <Popup onClose={handleClosePopup} />
              ) : (
            <Button variant="success" onClick={handleOpenPopup}>Detail</Button>
            )}
        </div>
>>>>>>> dcc82abef14ff628e3179128543f1b1cf67569b6
        <Button style={{margin:'7px'}} variant="warning">Update</Button>
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>

    
  );
}

export default BasicExample;