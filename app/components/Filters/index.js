/**
*
* Filters
*
*/

import React from 'react';


import styles from './styles.css';

function Filters() {
  return (
    <div className={styles.filters}>
      <div className={styles.content}>
        <div className={styles.title}>City</div>
        <select className={`form-control input-sm ${styles.select}`} name="">
          <option value="">Any</option>
          <option value="Los Angelos">Los Angelos</option>
        </select>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Area</div>
        <select className={`form-control input-sm ${styles.select}`} name="">
          <option value="">Any</option>
        </select>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Property type</div>
        <select className={`form-control input-sm ${styles.select}`} name="">
          <option value="">Any</option>
        </select>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Price</div>
        <input type="text" style={{ width: '60px' }} placeholder="min" className={`form-control input-sm ${styles.input}`} />
        <span style={{ marginLeft: 4 }}></span>
        <input type="text" style={{ width: '60px' }} placeholder="max" className={`form-control input-sm ${styles.input}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Beds</div>
        <input type="text" style={{ width: '60px' }} placeholder="min" className={`form-control input-sm ${styles.input}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Baths</div>
        <input type="text" style={{ width: '60px' }} placeholder="min" className={`form-control input-sm ${styles.input}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>sq.st</div>
        <input type="text" style={{ width: '60px' }} placeholder="min" className={`form-control input-sm ${styles.input}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pets</div>
        <select className={`form-control input-sm ${styles.select}`} name="">
          <option value="">Any</option>
        </select>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Utilities</div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
          </label>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Furnished</div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
          </label>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Laundry</div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
          </label>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Kitchen</div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
          </label>
        </div>
      </div>
      <div className={styles.content}>
        <button className={`btn ${styles.button}`}>Refine</button>
      </div>
    </div>
  );
}

export default Filters;
