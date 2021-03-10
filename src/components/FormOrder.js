import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
export const InputForm = props => {
    const initialInputState = {nama: "", quantity: "", harga: ""};
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const {nama, quantity, harga} = eachEntry;
const handleInputChange = e => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  const handleFinalSubmit = e => {
    console.log(eachEntry);
    setEachEntry({
            nama: "", 
            quantity: "",
            harga: "",
    })
  };

  return (
  <div>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
        <h2>Aplikasi Kasir</h2>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form>
          <FormGroup>
            <Label for="nama">Nama</Label>
            <Input 
            name="nama" 
            placeholder="input nama barang" 
            onChange={handleInputChange}
            value={nama}/> 
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input 
            name="quantity" 
            placeholder="input quantity barang" 
            onChange={handleInputChange}
            value={quantity}/>
          </FormGroup>
          <FormGroup>
            <Label for="harga">Harga</Label>
            <Input name="harga" 
            placeholder="input harga barang"
            onChange={handleInputChange}
            value={harga}/>
          </FormGroup>
          <Button onClick={handleFinalSubmit}>
              Submit
              </Button>
        </Form>
      </Col>
    </Row>
  </div> 
  );
};