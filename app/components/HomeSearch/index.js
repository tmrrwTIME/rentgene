/**
*
* HomeSearch
*
*/

import React from 'react';
import { Link } from 'react-router';
// import Button from 'components/Button';

import styles from './styles.css';

function HomeSearch() {
  const prices = [400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000];
  const beds = ['1+', '2+', '3+', '4+', '5+', '6+', '7+'];
  return (
    <div className={styles.homeSearch}>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className={`row ${styles.main}`}>
            <div className="col-sm-3">
              <div className={styles.searchContent}>
                <h4 className={styles.title}>City</h4>
                <p className={styles.alert}>*Launching First Los Angeles</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className={styles.searchContent}>
                <h4 className={styles.title}>Room</h4>
                <p><b>Any</b></p>
                <br />
                <p>or</p>
                <div className={styles.select}>
                  <h6>Max</h6>
                  <select name="" className={`form-control input-sm ${styles.formControl}`} id="">
                    <option>Price</option>
                    {prices.map((price, i) => {
                      const key = `price-room-${i}`;
                      return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                    })}
                  </select>
                </div>
                <Link className={`btn btn-block ${styles.link}`} to={'/'}>search</Link>
              </div>
            </div>
            <div className="col-sm-3">
              <div className={styles.searchContent}>
                <h4 className={styles.title}>Apartments</h4>
                <p><b>Any</b></p>
                <br />
                <p>or</p>

                <hr />
                <div className={styles.select}>
                  <select className={`form-control input-sm ${styles.formControl}`} id="">
                    <option>Beds</option>
                    {beds.map((bed, i) => {
                      const key = `bed-apartment-${i}`;
                      return <option key={key} value={bed}>{bed}</option>;
                    })}
                  </select>
                </div>
                <div className={styles.select}>
                  <h6>Max</h6>
                  <select name="" className={`form-control input-sm ${styles.formControl}`} id="">
                    <option value="">Price</option>
                    {prices.map((price, i) => {
                      const key = `price-apartment-${i}`;
                      return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                    })}
                  </select>
                </div>
                <Link className={`btn btn-block ${styles.link}`} to={'/'}>search</Link>
              </div>
            </div>
            <div className="col-sm-3">
              <div className={styles.searchContent}>
                <h4 className={styles.title}>Houses</h4>
                <p><b>Any</b></p>
                <br />
                <p>or</p>

                <hr />
                <div className={styles.select}>
                  <select name="" className={`form-control input-sm ${styles.formControl}`} id="">
                    <option value="">Beds</option>
                    {beds.map((bed, i) => {
                      const key = `bed-houses-${i}`;
                      return <option key={key} value={bed}>{bed}</option>;
                    })}
                  </select>
                </div>
                <div className={styles.select}>
                  <h6>Max</h6>
                  <select name="" className={`form-control input-sm ${styles.formControl}`} id="">
                    <option value="">Price</option>
                    {prices.map((price, i) => {
                      const key = `price-houses-${i}`;
                      return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                    })}
                  </select>
                </div>
                <Link className={`btn btn-block ${styles.link}`} to={'/'}>search</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
