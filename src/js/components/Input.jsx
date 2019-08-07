import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange }) => (
  <div className="form-group">
    {
      text ? <label htmlFor={label}>{text}</label> :''
    }
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      placeholder ='Type in ES6 view in Ts'
      required
    />
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Input;