import React from 'react';
import './QuoteOutputSheet.css';
import {Row, Col, Button} from 'react-bootstrap';

function QuoteOutputSheet(props) {
  function undoQuote() {
    props.setGenerated(false);
  }

  return (
    <div className="QuoteOutputSheet" data-testid="QuoteOutputSheet">
      <p>description here</p>

      {
        props.items.map((item, index) => (
          <Row key={index} className="mt-3">
            <Col xs="8">
              <p className="ts-6 text-dark text-start">{item.description}</p>
            </Col>

            <Col xs="4">
              <p className="ts-6 text-dark text-start">{item.amount}</p>
            </Col>
          </Row>
        ))
      }

      <Row className="mt-5">
        <Col>
          <Button className="w-100 btn-danger fw-bold" onClick={undoQuote}>Back</Button>
        </Col>

        <Col>
          <Button className="w-100 btn-primary fw-bold">Print</Button>
        </Col>
      </Row>
    </div>
  )
}

QuoteOutputSheet.propTypes = {};

QuoteOutputSheet.defaultProps = {};

export default QuoteOutputSheet;
