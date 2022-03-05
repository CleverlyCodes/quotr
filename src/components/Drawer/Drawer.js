import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ls from 'local-storage';
import './Drawer.css';
import { Row, Col, Offcanvas, Button } from 'react-bootstrap';

function Drawer (props) {
  const [projectList, setProjectList] = useState(ls.get('projectList'));

  function loadTemplate(item) {
    props.setTemplate(item);
  }  

  return (
    <Offcanvas placement="end" name="sample" backdrop="true" show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Saved Templates</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {
          props.projectList.map((item, index) => (
            <Row key={index} className="mt-3">
              <Col>
                <Button className="text-dark btn-light w-100 text-start" onClick={() => loadTemplate(item)}>{item.title}</Button>
              </Col>
            </Row>
          ))
        }
      </Offcanvas.Body>
    </Offcanvas>
  );
}

Drawer.propTypes = {};

Drawer.defaultProps = {};

export default Drawer;
