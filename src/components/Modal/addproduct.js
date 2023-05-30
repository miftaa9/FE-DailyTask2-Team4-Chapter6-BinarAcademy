import { render } from "react-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Example = (props) => {
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
    console.log('test');
    setUserInput({
      ...userInput,
      enteredCategory: event.target.value,
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredCategory: event.target.value };
    });
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
    console.log('test');
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
    console.log('test');
    setUserInput({
      ...userInput,
      enteredPrice: event.target.value,
    });
  };

  const colorHandler = (event) => {
    setColor(event.target.value);
    console.log('test');
    setUserInput({
      ...userInput,
      enteredColor: event.target.value,
    });
  };

  const sizeHandler = (event) => {
    setSize(event.target.value);
    console.log('test');
    setUserInput({
      ...userInput,
      enteredSize: event.target.value,
    });
  };

  const stockHandler = (event) => {
    setStock(event.target.value);
    console.log('test');
    setUserInput({
      ...userInput,
      enteredStock: event.target.value,
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

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    return response.json();
  };
  
  const submitHandler = async (event) => {
    event.preventDefault();
    const expenseData = {
      category: Category,
      title: Title,
      price: Price,
      color: Color,
      size: Size,
      stock: Stock,
      // file: File,
    };
    const response = await postData('http://localhost:4000/api/v1/products/', expenseData);
    console.log(response);
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Tambah Produk
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Kategori</Form.Label> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  className="ms-auto mx-2"
                  aria-label="Default select example"
                  required
                  type='text' 
                  value={Category} 
                  onChange={categoryHandler}
                >
                  <option>Pilih Kategori</option>
                  <option href="#/baju">Baju</option>
                  <option href="#/celana">Celana</option>
                </Form.Select>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Label type='text'>Nama Produk</Form.Label>
              <Form.Control className="mb-3" value={Title} onChange={titleHandler} placeholder="Masukkan Nama Pakaian" autoFocus />
              <Form.Label type='number' min='0.01' step='0.01'>Harga</Form.Label>
              <Form.Control className="mb-3" value={Price} onChange={priceHandler} placeholder="Masukkan Harga Pakaian" />
              <Form.Label type='text'>Warna</Form.Label>
              <Form.Control className="mb-3" value={Color} onChange={colorHandler} placeholder="Masukkan Warna Pakaian" />
              <Form.Label type='text'>Ukuran</Form.Label>
              <Form.Control className="mb-3" value={Size} onChange={sizeHandler} placeholder="Masukkan Ukuran Pakaian" />
              <Form.Label type='text'>Sisa Stock</Form.Label>
              <Form.Control className="mb-3" value={Stock} onChange={stockHandler} placeholder="Masukkan Jumlah Stock Pakaian" />
              <Form.Label>Gambar</Form.Label>
              <div>
                <input type="file" onChange={handleFile} />
                <div>{file && `${file.name} - ${file.type}`}</div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={submitHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const targetContainer = document.getElementById("root");
render(<Example />, targetContainer);

export default Example;
