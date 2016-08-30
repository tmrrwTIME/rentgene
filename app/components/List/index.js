/**
*
* List
*
*/

import React from 'react';
import { Link } from 'react-router';
import SizeImage from 'assets/images/size.png';

import styles from './styles.css';

function List() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.list}>

            <div className={`list-item col-sm-6 ${styles.item}`}>
              <div className={styles.ads}>
                <div className={styles.thumb}>
                  <Link className={styles.thumbMain} to={'/v/apartment-12312312'}>
                    <img className={styles.image} src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thum1.jpg" alt="" />
                  </Link>
                  <img src={SizeImage} className={styles.size} alt="" />
                </div>
                <Link className={styles.title} to={'/v/apartment-12312312'}>
                  <span>1234 Hoopda St</span> <span>Los Angeles,</span> <span>CA 90032</span>
                </Link>
                <div className="desc clearfix">
                  <div className="pull-left">
                    2 bed, 2 bath
                  </div>
                  <div className="pull-right">
                    1300 sq ft  -  $2500
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-sm-6">
        </div>
      </div>
    </div>
  );
}

export default List;
