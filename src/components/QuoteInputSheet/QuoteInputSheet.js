import React from 'react';
import './QuoteInputSheet.css';
import ls from 'local-storage'
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Drawer from '../Drawer/Drawer'

function QuoteInputSheet(props) {
  const [projectList, setProjectList] = useState(ls.get('projectList'));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function saveTemplate() {
    let projects = projectList;

    const timer = setTimeout(() => {
      props.setAlert({
        isShown: false,
      });
    }, 3000);

    const result = projectList.filter(item => item.title === props.config.title);

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

    projects.push({
      title: props.config.title,
      description: props.config.description,
      currency: props.config.currency,
      items: props.items,
      tax: props.tax,
      preparedByName: props.config.preparedByName,
      preparedByPosition: props.config.preparedByPosition,
    });

    setProjectList(projects);

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

  function setTemplate(template) {
    const updatedTax = template.tax || 0;

    props.setConfig({
      title: template.title,
      description: template.description,
      currency: template.currency,
      tax: updatedTax,
      preparedByName: template.preparedByName,
      preparedByPosition: template.preparedByPosition,
    });

    props.setItems(template.items);
  }

  function changeTitle(value) {
    props.setConfig({
      ...props.config,
      title: value,
    });
  }

  function changeDescription(value) {
    props.setConfig({
      ...props.config,
      description: value,
    });
  }

  function changeCurrency(value) {
    props.setConfig({
      ...props.config,
      currency: value,
    });
  }

  function changeTax(value) {
    const floatValue = parseFloat(value);

    props.setConfig({
      ...props.config,
      tax: floatValue,
    });
  }

  function changePreparedByName(value) {
    props.setConfig({
      ...props.config,
      preparedByName: value,
    });
  }

  function changePreparedByPosition(value) {
    props.setConfig({
      ...props.config,
      preparedByPosition: value,
    });
  }

  return(
    <div className="QuoteInputSheet" data-testid="QuoteInputSheet">
      <Row className="mb-2">
        <Col md="12">
          <Button variant="primary" onClick={handleShow} className="float-end">
            Load Template
          </Button>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Control value={props.config.title} onChange={(e) => changeTitle(e.target.value)} placeholder="Quote Title" />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <textarea value={props.config.description} onChange={(e) => changeDescription(e.target.value)} placeholder="service description" className="w-100 px-3 py-1 fs-6"/>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Control value={props.config.preparedByName} onChange={(e) => changePreparedByName(e.target.value)} placeholder="Full Name" />
        </Col>

        <Col>
          <Form.Control value={props.config.preparedByPosition} onChange={(e) => changePreparedByPosition(e.target.value)} placeholder="Your Position" />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs="2">
          <Form.Control value={props.config.currency} onChange={(e) => changeCurrency(e.target.value)} title="Currency" placeholder="Currency" />
        </Col>
        <Col xs="3">
          <Form.Control value={props.config.tax} onChange={(e) => changeTax(e.target.value)} type="number" step="0.01" title="Tax in percent" placeholder="Tax in percent..." />
        </Col>
      </Row>

      {
        props.items.map((item, index) => (
          <Row key={index} className="mt-3">
            <Col md="8">
              <Form.Control value={item.description} onChange={(e) => editItemDescription(index, e.target.value)} placeholder="Description" />
            </Col>

            <Col md="3">
              <Form.Control type="number" value={item.amount} onChange={(e) => editItemAmount(index, e.target.value)} placeholder="Amount" />
            </Col>

            <Col md="1">
              <Button className="w-100 align-top btn-danger fs-6 px-1" onClick={() => deleteItem(index)}>&#10005;</Button>
            </Col>
          </Row>
        ))
      }

      <Row className="mt-3">
        <Col md="8" xs="6">
          <p className="ts-6 text-dark text-end mb-0">Subtotal</p>
        </Col>

        <Col md="3" xs="5">
          <p className="ts-6 text-dark text-start">{props.config.currency} {props.total}</p>
        </Col>

        <Col md="1" xs="1"></Col>
      </Row>

      <Row className="mt-0">
        <Col md="8" xs="6">
          <p className="ts-6 text-dark text-end mb-0">Tax</p>
        </Col>

        <Col md="3" xs="5">
          <p className="ts-6 text-dark text-start">{props.config.currency} {props.taxTotal}</p>
        </Col>

        <Col md="1" xs="1"></Col>
      </Row>

      <Row className="mt-0">
        <Col md="8" xs="6">
          <p className="ts-6 text-dark text-end mb-0">Grand Total</p>
        </Col>

        <Col md="3" xs="5">
          <p className="ts-6 text-dark text-start">{props.config.currency} {props.grandTotal}</p>
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

      <Drawer projectList={projectList} show={show} setTemplate={setTemplate} handleClose={handleClose}></Drawer>
    </div>
  );
}

QuoteInputSheet.propTypes = {};

QuoteInputSheet.defaultProps = {};

export default QuoteInputSheet;
