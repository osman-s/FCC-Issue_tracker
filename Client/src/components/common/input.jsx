import React from "react";

const Input = ({ name, label, placeholder, id, error, ...rest }) => {
  return (
    <div className="form-group">
{ (label) && <label htmlFor={name}>{label}</label> }
      <input {...rest} name={name} placeholder={placeholder} id={id} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
