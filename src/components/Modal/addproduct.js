import { render } from "react-dom";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Kategori</Form.Label> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  className="ms-auto mx-2"
                  aria-label="Default select example"
                  required
                >
                  <option>Pilih Kategori</option>
                  <option href="#/baju">Baju</option>
                  <option href="#/celana">Celana</option>
                </Form.Select>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Pilih Kategori
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/baju">Baju</Dropdown.Item>
                  <Dropdown.Item href="#/celana">Celana</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Nama & Detail Pakaian" autoFocus />
              <Form.Label>Harga</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Harga Pakaian" />
              <Form.Label>Stock</Form.Label>
              <Form.Control className="mb-3" placeholder="Masukkan Jumlah Stock Pakaian" />
              <Form.Label>Gambar</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
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
