import React from 'react';
import './QuoteInputSheet.css';
import ls from 'local-storage';
import { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Offcanvas } from 'react-bootstrap';

function QuoteInputSheet(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function saveTemplate() {
    let projectList = ls.get('projectList') || [];

    const timer = setTimeout(() => {
      props.setAlert({
        isShown: false,
      });
    }, 3000);

    const result = projectList.filter(item => item.title === props.config.title);
    console.log(result);
    if (result.length > 0) {
      props.setAlert({
        message: "the template already exists...",
        isShown: true,
        status: "danger"
      });
      return () => {
        clearTimeout(timer);
      };
    }

    projectList.push({
      title: props.config.title,
      description: props.config.description,
      currency: props.config.currency,
      items: props.items,
    });

    ls.set('projectList', projectList);

    props.setAlert({
      message: "template is saved!",
      isShown: true,
      status: "success"
    });

    return () => {
      clearTimeout(timer);
    };
  }

  function addItem() {
    props.setItems([...props.items, {
      description: '',
      amount: 0,
    }]);
  };

  function editItemDescription(index, value) {
    let currentItems = [...props.items];
    currentItems[index].description = value;
    props.setItems(currentItems);
  }

  function editItemAmount(index, value) {
    const realValue = value ? parseInt(value) : 0;

    let currentItems = [...props.items];
    currentItems[index].amount = realValue;
    props.setItems(currentItems);
  }

  function deleteItem(index) {
    props.setItems(props.items.filter((item, i) => i !== index));
  }

  function generateQuote() {
    props.setGenerated(true);
  }

  function changeTitle(value) {
    props.setConfig({
      title: value,
      description: props.config.description,
      currency: props.config.currency,
    });
  }

  function changeDescription(value) { 
    props.setConfig({
      title: props.config.title,
      description: value,
      currency: props.config.currency,
    });
  }

  function changeCurrency(value) {
    props.setConfig({
      title: props.config.title,
      description: props.config.description,
      currency: value,
    });
  }

  return(
    <div className="QuoteInputSheet" data-testid="QuoteInputSheet">
      <Row className="mb-2">
        <Col md="12">
          <Button variant="secondary" className="float-end" onClick={handleShow}>
            Load Template
          </Button>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Control value={props.config.title} onChange={(e) => changeTitle(e.target.value)} type="email" placeholder="Quote Title" />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <textarea value={props.config.description} onChange={(e) => changeDescription(e.target.value)} placeholder="service description" className="w-100 px-3 py-1 fs-6"/>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs="4">
          <Form.Control value={props.config.currency} onChange={(e) => changeCurrency(e.target.value)} type="email" placeholder="Add currency symbol here..." />
        </Col>
      </Row>

      {
        props.items.map((item, index) => (
          <Row key={index} className="mt-3">
            <Col md="8">
              <Form.Control value={item.description} onChange={(e) => editItemDescription(index, e.target.value)} type="email" placeholder="Description" />
            </Col>

            <Col md="3">
              <Form.Control type="number" value={item.amount} onChange={(e) => editItemAmount(index, e.target.value)} type="email" placeholder="Amount" />
            </Col>

            <Col md="1">
              <Button className="w-100 align-top btn-danger fs-6 px-1" onClick={() => deleteItem(index)}>&#10005;</Button>
            </Col>
          </Row>
        ))
      }

      <Row className="mt-3">
        <Col md="8" xs="6">
          <p className="ts-6 text-dark text-end">Grand Total</p>
        </Col>

        <Col md="3" xs="5">
          <p className="ts-6 text-dark text-start">{props.total}</p>
        </Col>

        <Col md="1" xs="1"></Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Button className="w-100 btn-primary fw-bold" onClick={addItem}>Add Item</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button className="w-100 btn-secondary fw-bold" onClick={saveTemplate}>Save Template</Button>
        </Col>

        <Col md="6">
          <Button className="w-100 btn-success fw-bold" onClick={generateQuote}>GeneRate</Button>
        </Col>
      </Row>

      <Offcanvas placement="end" name="sample" backdrop="true" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Saved Templates</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Choose from the existing saved templates below
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

QuoteInputSheet.propTypes = {};

QuoteInputSheet.defaultProps = {};

export default QuoteInputSheet;
