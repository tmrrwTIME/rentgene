/**
*
* Search
*
*/

import React from 'react';

import SearchImage from './search.png';
import styles from './styles.css';

function Search() {
  return (
    <div>
      <div className={styles.search}>
        <div className={styles.content}>
          <input type="text" placeholder="Search" className={`form-control ${styles.input}`} />
          <button className={`btn ${styles.button}`}>
            <img className={styles.image} src={SearchImage} alt="" />
          </button>
        </div>
        <div className={styles.content}>
          <select className={`form-control ${styles.select}`}>
            <option value=""><b>Sort By</b></option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
