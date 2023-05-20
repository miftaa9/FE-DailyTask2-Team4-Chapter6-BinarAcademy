import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'

function BasicExample() {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/logo.png" />
      <Card.Body>
        <Card.Title>Celana Jeans</Card.Title>
        <Card.Text>
          <h6>Rp. 100000</h6>
          <p>Stock : 999</p>
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