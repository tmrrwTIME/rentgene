/**
*
* Button
*
*/

import React from 'react';


import styles from './styles.css';

function Button(props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {React.Children.toArray(props.children)}
    </button>
  );
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.children,
};

export default Button;
