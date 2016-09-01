/**
*
* Select
*
*/

import React from 'react';


const Select = (field) => {
  const { input, meta, items, ...others } = field;
  return (
    <div className="input-row">
      <select {...input} {...others}>
        {items.map((item, i) => <option key={`key-${input.name}-${i}`}>{item}</option>)}
      </select>
      {meta.touched && meta.error && <span className="error">{meta.error}</span>}
    </div>
  );
};

export default Select;
