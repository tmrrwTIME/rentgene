/**
*
* Loader
*
*/

import React from 'react';
import loadIcon from './load.svg';
import loadIconWhite from './load-white.svg';
import styles from './styles.css';

function Loader(props) {
  let loader = (
    <div className={styles.loader}>
      <img src={loadIcon} alt="" />
    </div>
  );
  if (props.overlay) {
    loader = (
      <div className={`${styles.loader}, ${styles.overlay}`}>
        <img src={loadIconWhite} alt="" />
      </div>
    );
  }
  return loader;
}

Loader.propTypes = {
  overlay: React.PropTypes.bool,
};

export default Loader;
