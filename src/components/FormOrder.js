import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

function FormOrder(props){
    const [items, setItems] = useState({
        nama: "",
        quantity: "",
        harga: ""
    })

        const handleInputChange = e => {
        const {name, value} = e.target
        setItems({
            ...items, [name]: value
                    
        })

    };
    const handleFinalSubmit = (e) => {    
        e.preventDefault();
        props.handleAddItem(items)
        setItems({
            nama: "",
            quantity: "",
            harga: ""
        })
        console.log(items)
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
                value={items.nama}/> 
            </FormGroup>
            <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Input 
                name="quantity" 
                placeholder="input quantity barang" 
                onChange={handleInputChange}
                value={items.quantity}/>
            </FormGroup>
            <FormGroup>
                <Label for="harga">Harga</Label>
                <Input name="harga" 
                placeholder="input harga barang"
                onChange={handleInputChange}
                value={items.harga}/>
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

export default FormOrder