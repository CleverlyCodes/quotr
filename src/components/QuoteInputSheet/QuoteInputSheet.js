import React from 'react';
import './QuoteInputSheet.css';
import {Row, Col, Form, Button} from 'react-bootstrap';

function QuoteInputSheet(props) {
  function addItem() {
    props.setItems([...props.items, {
      description: '',
      amount: '',
    }]);
  };

  function editItemDescription(index, value) {
    let currentItems = [...props.items];
    currentItems[index].description = value;
    props.setItems(currentItems);
  }

  function editItemAmount(index, value) {
    let currentItems = [...props.items];
    currentItems[index].amount = value;
    props.setItems(currentItems);
  }

  function deleteItem(index) {
    props.setItems(props.items.filter((item, i) => i !== index));
  }

  function generateQuote() {
    props.setGenerated(true);
  }

  function changeDescription(value) { 
    props.setConfig({
      description: value,
      currency: props.config.currency,
    });
  }

  function changeCurrency(value) {
    props.setConfig({
      description: props.config.description,
      currency: value,
    });
  }

  return(
    <div className="QuoteInputSheet" data-testid="QuoteInputSheet">
      <Row className="mb-2">
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
            <Col xs="8">
              <Form.Control value={item.description} onChange={(e) => editItemDescription(index, e.target.value)} type="email" placeholder="Description" />
            </Col>

            <Col xs="3">
              <Form.Control value={item.amount} onChange={(e) => editItemAmount(index, e.target.value)} type="email" placeholder="Amount" />
            </Col>

            <Col xs="1">
              <Button className="w-100 align-top btn-danger fs-6 px-1" onClick={() => deleteItem(index)}>Remove</Button>
            </Col>
          </Row>
        ))
      }

      <Row className="mt-3">
        <Col>
          <Button className="w-100 btn-primary fw-bold" onClick={addItem}>Add Item</Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col></Col>

        <Col>
          <Button className="w-100 btn-success fw-bold" onClick={generateQuote}>GeneRate</Button>
        </Col>
      </Row>
    </div>
  );
}

QuoteInputSheet.propTypes = {};

QuoteInputSheet.defaultProps = {};

export default QuoteInputSheet;
