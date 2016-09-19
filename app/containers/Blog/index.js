/*
 *
 * Blog
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBlog from './selectors';
import styles from './styles.css';
import Logo from 'assets/images/logo.png';

export class Blog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.blog}>
        <Helmet
          title="Blog"
          meta={[
            { name: 'description', content: 'Description of Blog' },
          ]}
        />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="text-center">
              <div className={styles.head}>
                <img src={Logo} alt="" />
                <span></span>
                blogga
              </div>
            </div>

            <div className={styles.news}>
              <h4>Los angles new web site coming soon</h4>
              By admin / <span className={styles.date}>Augst 28th 2016</span>
              <div className={styles.thumb}>
                <img src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thum1.jpg" alt="" />
              </div>
            </div>

            <div className={styles.news}>
              <h4>Los angles new web site coming soon</h4>
              By admin / <span className={styles.date}>Augst 28th 2016</span>
              <div className={styles.thumb}>
                <img src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thum1.jpg" alt="" />
              </div>
            </div>
            
            <div className={styles.news}>
              <h4>Los angles new web site coming soon</h4>
              By admin / <span className={styles.date}>Augst 28th 2016</span>
              <div className={styles.thumb}>
                <img src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thum1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectBlog();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
