/**
*
* List
*
*/

import React from 'react';
import { Link } from 'react-router';
import SizeImage from 'assets/images/size.png';

import styles from './styles.css';

function List(props) {
  const { entries } = props;
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.list}>
            {entries.map((entry, i) => {
              const key = `entry-${i}`;
              let image;
              if (entry.images.length) {
                image = entry.images[0].name;
              }
              return (
                <div key={key} className={`list-item col-sm-6 ${styles.item}`}>
                  <div className={styles.ads}>
                    <div className={styles.thumb}>
                      <Link className={styles.thumbMain} to={`/v/${entry.entryId}`}>
                        <img className={styles.image} src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${image}`} alt="" />
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
              );
            })}
          </div>
        </div>
        <div className="col-sm-6">
        </div>
      </div>
    </div>
  );
}

List.propTypes = {
  entries: React.PropTypes.array.isRequired,
};

export default List;
