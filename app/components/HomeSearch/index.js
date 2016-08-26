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
                    <option value="">Price</option>
                  </select>
                </div>
                <Link className={`btn btn-block ${styles.link}`} to={'/'}>search</Link>
              </div>
            </div>
            <div className="col-sm-3">
              <div className={styles.searchContent}>
                <h4 className={styles.title}>Apertments</h4>
                <p><b>Any</b></p>
                <br />
                <p>or</p>

                <hr />
                <div className={styles.select}>
                  <select name="" className={`form-control input-sm ${styles.formControl}`} id="">
                    <option value="">Beds</option>
                  </select>
                </div>
                <div className={styles.select}>
                  <h6>Max</h6>
                  <select name="" className={`form-control input-sm ${styles.formControl}`} id="">
                    <option value="">Price</option>
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
                  </select>
                </div>
                <div className={styles.select}>
                  <h6>Max</h6>
                  <select name="" className={`form-control input-sm ${styles.formControl}`} id="">
                    <option value="">Price</option>
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
