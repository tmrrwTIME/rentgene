/**
*
* Input
*
*/

import React from 'react';

const Input = (field) => {
  const { input, meta, ...others } = field;
  return (
    <div className="input-row">
      <input {...input} {...others} />
      {meta.touched && meta.error && <span className="error" style={{ color: 'red' }}>{meta.error}</span>}
    </div>
  );
};

export default Input;
