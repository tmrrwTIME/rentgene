/**
*
* Filters
*
*/

import React from 'react';


import styles from './styles.css';
const beds = ['1+', '2+', '3+', '4+', '5+', '6+', '7+'];

function Filters(props) {
  return (
    <form id="filters" method="POST">
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
            <option value="">Apartments</option>
            <option value="">Rooms</option>
            <option value="">Houses</option>
          </select>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Price</div>
          <input type="text" style={{ width: '60px' }} placeholder="min" name="priceMin" className={`form-control input-sm ${styles.input}`} />
          <span style={{ marginLeft: 4 }}></span>
          <input type="text" style={{ width: '60px' }} placeholder="max" name="priceMax" className={`form-control input-sm ${styles.input}`} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Beds</div>
          <select name="beds" className={`form-control input-sm ${styles.select}`}>
            {beds.map((bed, i) => {
              return <option key={`bed-${i}`} value={bed}>{bed}</option>;
            })}
          </select>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Baths</div>
          <select name="baths" className={`form-control input-sm ${styles.select}`}>
            {beds.map((bed, i) => {
              return <option key={`baths-${i}`} value={bed}>{bed}</option>;
            })}
          </select>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>sq.st</div>
          <input name="squareFeet" type="text" style={{ width: '60px' }} placeholder="min" className={`form-control input-sm ${styles.input}`} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Pets</div>
          <select name="pets" className={`form-control input-sm ${styles.select}`}>
            <option value="">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
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
              <input type="checkbox" name="furnished" />
            </label>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Laundry</div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="laundry" />
            </label>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Kitchen</div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="kitchen" />
            </label>
          </div>
        </div>
        <div className={styles.content}>
          <button type="button" onClick={props.handleRefine} className={`btn ${styles.button}`}>Refine</button>
        </div>
      </div>
    </form>
  );
}

export default Filters;
