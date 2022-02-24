import React from 'react';
import './QuoteOutputSheet.css';
import {Row, Col, Button} from 'react-bootstrap';

function QuoteOutputSheet(props) {
  function undoQuote() {
    props.setGenerated(false);
  }

  return (
    <div className="QuoteOutputSheet" data-testid="QuoteOutputSheet">

      <div className="border-1 border border-secondary p-4">
        <p className="ts-6 text-dark text-start">{props.config.description}</p>

        {
          props.items.map((item, index) => (
            <Row key={index} className="mt-0">
              <Col xs="8">
                <p className="ts-6 text-dark text-start">{item.description}</p>
              </Col>

              <Col xs="4">
                <p className="ts-6 text-dark text-start">{props.config.currency} {item.amount}</p>
              </Col>
            </Row>
          ))
        }

        <Row className="mt-3 border-top border-dark">
          <Col xs="8">
            <p className="ts-6 text-dark text-start">Total</p>
          </Col>

          <Col xs="4">
            <p className="ts-6 text-dark text-start">{props.config.currency} {props.total}</p>
          </Col>
        </Row>
      </div>

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
