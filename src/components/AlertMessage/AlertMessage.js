import React from 'react';
import PropTypes from 'prop-types';
import './AlertMessage.css';

const AlertMessage = (props) => (
  <div className={`alert alert-${props.alert.status} d-flex align-items-end position-absolute bottom-0 end-0 px-5 fs-6 ${props.alert.isShown ? "d-block" : "d-none"}`} role="alert">
    {props.alert.message}
  </div>
);

AlertMessage.propTypes = {};

AlertMessage.defaultProps = {};

export default AlertMessage;
