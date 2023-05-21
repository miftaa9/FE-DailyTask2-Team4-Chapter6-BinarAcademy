import { render } from "react-dom";
import Dropdown from "react-bootstrap/Dropdown";
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
      <Button variant="primary" onClick={handleShow}>
        Tambah Produk
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Masukkan Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onClick={submitHandler}>
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
              <Form.Label type='text' value={Title} onChange={titleHandler}>Nama Produk</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Nama Pakaian" autoFocus />
              <Form.Label type='number' min='0.01' step='0.01' value={Price} onChange={priceHandler}>Harga</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Harga Pakaian" />
              <Form.Label type='text' value={Color} onChange={stockHandler}>Warna</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Warna Pakaian" />
              <Form.Label type='text' value={Size} onChange={stockHandler}>Ukuran</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Ukuran Pakaian" />
              <Form.Label type='text' value={Stock} onChange={stockHandler}>Sisa Stock</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Jumlah Stock Pakaian" />
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
          <Button variant="primary" onClick={() => {handleClose(); handleUploadClick();}}>
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
