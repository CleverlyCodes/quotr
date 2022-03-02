import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ls from 'local-storage';
import './Drawer.css';
import { Row, Col, Offcanvas } from 'react-bootstrap';

function Drawer (props) {
  const [projectList, setProjectList] = useState(ls.get('projectList'));

  useEffect(() => {
    // setProjectList(projects);
  }, [projectList]);
  
  return (
    <Offcanvas placement="end" name="sample" backdrop="true" show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Saved Templates</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {
          projectList.map((item, index) => (
            <Row key={index} className="mt-3">
              <Col>
                <label className="text-dark">{item.title}</label>
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
