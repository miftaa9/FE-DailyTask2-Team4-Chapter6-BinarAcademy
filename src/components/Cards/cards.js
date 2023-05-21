import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'

function BasicExample() {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <div style={{ fontSize: '10px' }} className='kategori'>
        <p>Kategori: Celana</p>
      </div>
      <Card.Img variant="top" src="images/jeans.webp" />
      <Card.Body>
        <Card.Title>Celana Jeans</Card.Title>
        <Card.Text>
          <h6>Rp. 100.000</h6>
          <p>Stock: 999</p>
        </Card.Text>
        <div className='button'>
        <Button style={{margin:'7px'}} variant="warning">Update</Button>
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>

    
  );
}

export default BasicExample;