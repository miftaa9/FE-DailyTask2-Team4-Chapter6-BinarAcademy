import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
import Detail from '../Modal/detail';

function BasicExample() {
  const [id, setId] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleUpdate = () => {
    fetch(`localhost:4000/api/v1/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ stock, price }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

  const handleDelete = () => {
    fetch(`localhost:4000/api/v1/products/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

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
        <Detail id={id} setId={setId} stock={stock} setStock={setStock} price={price} setPrice={setPrice}/>
        {/* <Button variant="success">Detail</Button> */}
        <Button style={{margin:'7px'}} variant="warning" onClick={handleUpdate}>Update</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;