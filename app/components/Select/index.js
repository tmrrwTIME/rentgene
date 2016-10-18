/**
*
* Select
*
*/

import React from 'react';


const Select = (field) => {
  const { input, meta, items, firstEmpty, ...others } = field;
  return (
    <div className="input-row">
      <select {...input} {...others}>
        {items.map((item, i) => {
          const key = `key-${input.name}-${i}`;
          if (firstEmpty && i === 0) {
            return <option key={key} value="">{item}</option>;
          }
          return <option key={key} value={item}>{item}</option>;
        })}
      </select>
      {meta.touched && meta.error && <span className="error">{meta.error}</span>}
    </div>
  );
};

export default Select;
