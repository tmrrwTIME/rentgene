/**
*
* Filters
*
*/

import React from 'react';


import styles from './styles.css';
import animate from '../../assets/css/animate.css'
const beds = ['1+', '2+', '3+', '4+', '5+', '6+', '7+'];
const prices = [400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000];

function Filters(props) {
  const { handleChange, listType, toggleFilters, animations } = props;
  var animation
  var animate
  var rotate
  if (animations === 'contract' && screen.width <= 414) {
    animation = styles.contract
    animate = 'contract'
    rotate = styles.rotateDown
  }else {
    animation = styles.expand
    animate = 'expand'
    rotate = styles.rotateUp
  }
  return (
    <div>
      <div className={`${styles.showOnlyMobile} ${styles.dropdown}`} onClick={()=>toggleFilters(animate)}>
        <h2>Filters <i style={{fontSize:24}} className={`fa fa-arrow-down ${rotate}`} aria-hidden="true"></i></h2>
      </div>
      <form className={animation} id="filters" method="POST">
        <div className={styles.filters}>
          <div className={styles.content}>
            <div className={styles.title}>City</div>
            <select className={`form-control input-sm ${styles.select}`} name="">
              <option value="">Any</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Area</div>
            <select className={`form-control input-sm ${styles.select}`} name="">
              <option value="">Any</option>
              <option value="Westside">Westside</option>
              <option value="East LA">East LA</option>
              <option value="South LA">South LA</option>
              <option value="The Valley">The Valley</option>
              <option value="Central LA">Central LA</option>
              <option value="Beach Cities">Beach Cities</option>
            </select>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Price</div>
            <select onChange={handleChange} className={`form-control input-sm ${styles.select}`} name="priceMin">
              <option value="">min</option>
              {prices.map((price, i) => {
                const key = `price-min-${i}`;
                  return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
              })}
            </select>
            <span style={{ marginLeft: 4 }}></span>
            <select onChange={handleChange} className={`form-control input-sm ${styles.select}`} name="priceMax">
              <option value="">max</option>
              {prices.map((price, i) => {
                const key = `price-max-${i}`;
                  return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
              })}
            </select>
          </div>
          {listType !== 'rooms' ?
            <div className={styles.content}>
              <div className={styles.title}>Beds</div>
              <select onChange={handleChange} name="beds" className={`form-control input-sm ${styles.select}`}>
                {beds.map((bed, i) => {
                  const key = `bed-${i}`;
                    return <option key={key} value={i + 1}>{bed}</option>;
                })}
              </select>
            </div>
          : ''}
          {listType !== 'rooms' ?
            <div className={styles.content}>
              <div className={styles.title}>Baths</div>
              <select onChange={handleChange} name="baths" className={`form-control input-sm ${styles.select}`}>
                {beds.map((bed, i) => {
                  const key = `baths-${i}`;
                    return <option key={key} value={i + 1}>{bed}</option>;
                })}
              </select>
            </div>
          : ''}
          {listType !== 'rooms' ?
            <div className={styles.content}>
              <div className={styles.title}>sq. ft.</div>
              <select className={`form-control input-sm ${styles.select}`} onChange={handleChange} name="squareFeet">
                <option value="">sq. ft.</option>
                {prices.map((price, i) => {
                  const key = `squareFeet-${i}`;
                    return <option key={key} value={price}>{`${price.toLocaleString()}+`}</option>;
                })}
              </select>
            </div>
          : ''}
          <div className={`${animate.animated} ${animation} ${styles.filters}`}>
            <div className={styles.content}>
              <div className={styles.title}>Pets</div>
              <div className="checkbox">
                <label>
                  <input onChange={handleChange} type="checkbox" name="pets" value />
                </label>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Parking</div>
              <div className="checkbox">
                <label>
                  <input onChange={handleChange} type="checkbox" name="parking" value />
                </label>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Utilities</div>
              <div className="checkbox">
                <label htmlFor="utilities">
                  <input onChange={handleChange} type="checkbox" name="utilities" value />
                </label>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Furnished</div>
              <div className="checkbox">
                <label>
                  <input onChange={handleChange} type="checkbox" name="furnished" value />
                </label>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Laundry</div>
              <div className="checkbox">
                <label>
                  <input onChange={handleChange} type="checkbox" name="laundry" value />
                </label>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Kitchen</div>
              <div className="checkbox">
                <label>
                  <input onChange={handleChange} type="checkbox" name="kitchen" value />
                </label>
              </div>
            </div>
            <div className={styles.content}>
              <button type="button" onClick={props.handleRefine} className={`btn ${styles.button}`}>Refine</button>
            </div>
          </div>
          {/* Show Only mobile */}

        </div>
      </form>
    </div>
  );
}

Filters.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  handleRefine: React.PropTypes.func.isRequired,
};

export default Filters;
