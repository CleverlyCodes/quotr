import React from 'react';
import './QuoteOutputSheet.css';
import {Row, Col, Button} from 'react-bootstrap';

function QuoteOutputSheet(props) {
  function undoQuote() {
    props.setGenerated(false);
  }

  function printQuote() {
    window.print();
  }

  return (
    <div className="QuoteOutputSheet" data-testid="QuoteOutputSheet">

      <div className="border-1 border border-secondary p-4 px-5 py-5">
        <h2 className="ts-6 text-dark text-start mb-4">{props.config.title}</h2>

        <p className="ts-6 text-dark text-start mb-5">{props.config.description}</p>

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

        <Row className="mt-3 mb-5 pb-4 section computation pt-2">
          <Col xs="8">
            <h5 className="ts-4 text-dark text-start fw-bolder">Total</h5>
          </Col>

          <Col xs="4">
            <h5 className="ts-4 text-dark text-start fw-bolder">{props.config.currency} {props.total}</h5>
          </Col>
        </Row>

        <Row className="mt-5 pb-3">
          <Col xs="12" className="px-0">
            <p className="ts-6 text-dark float-start mb-5">Prepared by:</p>
          </Col>

          <Col xs="4" className="border-top border-dark">
            <h6 className="ts-6 text-dark mb-0 mt-2 fw-bolder">{props.config.preparedByName}</h6>

            <h6 className="ts-6 text-dark">{props.config.preparedByPosition}</h6>
          </Col>

          <Col xs="4"></Col>
          

          {/* <Col xs="4" className="border-top border-dark">
            <p className="ts-6 text-dark text-start">Client</p>
          </Col> */}
        </Row>
      </div>

      <Row className="mt-5">
        <Col>
          <Button className="w-100 btn-danger fw-bold no-print" onClick={undoQuote}>Back</Button>
        </Col>

        <Col>
          <Button className="w-100 btn-primary fw-bold no-print" onClick={printQuote}>Print</Button>
        </Col>
      </Row>
    </div>
  )
}

QuoteOutputSheet.propTypes = {};

QuoteOutputSheet.defaultProps = {};

export default QuoteOutputSheet;
