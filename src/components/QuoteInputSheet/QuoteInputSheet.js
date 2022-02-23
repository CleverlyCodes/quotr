import React from 'react';
import PropTypes from 'prop-types';
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

  return(
    <div className="QuoteInputSheet" data-testid="QuoteInputSheet">
      <Row className="mb-4">
        <Col>
          <textarea placeholder="service description" className="w-100 px-3 py-1 fs-6"/>
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
          <Button className="w-100 btn-success fw-bold" onClick={addItem}>Add Item</Button>
        </Col>
      </Row>
    </div>
  );
}

QuoteInputSheet.propTypes = {};

QuoteInputSheet.defaultProps = {};

export default QuoteInputSheet;
