import { render } from "react-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


const Detail = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  const [Category, setCategory] = useState('');
  const [Title, setTitle] = useState('');
  const [Price, setPrice] = useState('');
  const [Color, setColor] = useState('');
  const [Size, setSize] = useState('');
  const [Stock, setStock] = useState('');
  const [File, setEnteredFile] = useState('');
  const [userInput, setUserInput] = useState({
    Category: '',
    Title: '',
    Price: '',
    Color: '',
    Size: '',
    Stock:'',
    enteredFile:'',
  });

  const categoryHandler = (event) => {
    setCategory(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const stockHandler = (event) => {
    setStock(event.target.value);
    setUserInput({
      ...userInput,
      enteredTotal: event.target.value,
    });
  };

  const [file, setFile] = useState();

  const handleFile = (e) => {
    setEnteredFile(e.target.value);
    setUserInput({
      ...userInput,
      enteredFile: e.target.value,
    });
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      category: Category,
      title: Title,
      price: Price,
      color: Color,
      size: Size,
      stock: Stock,
      file: File,
    };

    props.onSaveExpenseData(expenseData);
    setCategory('');
    setTitle('');
    setPrice('');
    setColor('');
    setSize('');
    setStock('');
    setEnteredFile('');
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Detail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onClick={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <a variant="top" src="./jeans.webp" /> */}
              <Form.Label type='text' value={Title} onChange={titleHandler}>Celana Jeans</Form.Label>
              <br/>
              <Form.Label type='number' min='0.01' step='0.01' value={Price} onChange={priceHandler}>Rp 79.000</Form.Label>
              <br/>
              <Form.Label type='text' value={Color} onChange={stockHandler}>Color: Dark Blue</Form.Label>
              <br/>
              <Form.Label type='text' value={Size} onChange={stockHandler}>Size: 3L</Form.Label>
              <br/>
              <Form.Label type='text' value={Stock} onChange={stockHandler}>Sisa Stock: 99</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const targetContainer = document.getElementById("root");
render(<Detail />, targetContainer);

export default Detail;
