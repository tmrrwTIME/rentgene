/**
*
* Search
*
*/

import React from 'react';

import SearchImage from './search.png';
import styles from './styles.css';

function Search(props) {
  const { handleSearch, handleSort, values } = props;
  return (
    <div>
      <div className={styles.search}>
        <div className={styles.content}>
          <input id="textSearch" type="text" placeholder="Search" className={`form-control ${styles.input}`} />
          <button onClick={handleSearch} className={`btn ${styles.button}`}>
            <img className={styles.image} src={SearchImage} alt="" />
          </button>
        </div>
        <div className={styles.content}>
          <select
            onChange={handleSort}
            className={`form-control ${styles.select}`}
            value={values.sortBy}
            style={{
              width: 60,
            }}
          >
            <option value="newest">Newest</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  handleSort: React.PropTypes.func.isRequired,
  values: React.PropTypes.object.isRequired,
};

export default Search;
