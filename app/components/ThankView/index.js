/**
*
* ThankView
*
*/

import React from 'react';
import LeftLineImage from 'assets/images/line3.jpg';
import Line2 from 'assets/images/line2.jpg';
import Line3 from 'assets/images/line1.jpg';
import { Link } from 'react-router';

import styles from './styles.css';

function ThankView() {
  return (
    <div className="col-md-6 col-md-offset-3">
      <div className={`text-center ${styles.thankView}`}>
        <div className={styles.line}>
          <img src={LeftLineImage} alt="" />
        </div>
        <div className={`${styles.line} ${styles.lineRight}`}>
          <img src={LeftLineImage} alt="" />
        </div>
        <img src={Line2} alt="" />
        <br />
        <br />
        <p>
          Thank you! For Listing us. If your listing is up tp standards it
          should be posted within the next hour!
        </p>
        <br />
        <Link to={'/'} className="btn">click here to go back to the home page</Link>
        <br />
        <br />
        <img src={Line3} alt="" />
      </div>
    </div>
  );
}

export default ThankView;
