/*
 *
 * Listings
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectListings from './selectors';
import styles from './styles.css';

import Search from 'components/Search';
import Filters from 'components/Filters';
import List from 'components/List';

export class Listings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.listings}>
        <Helmet
          title="Listings"
          meta={[
            { name: 'description', content: 'Description of Listings' },
          ]}
        />
        <br />
        <Search />
        <Filters />
        <p>
          150 results
        </p>
        <List />
      </div>
    );
  }
}

const mapStateToProps = selectListings();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
