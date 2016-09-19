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
import Loader from 'components/Loader';

import { loadEntries } from './actions';

export class Listings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadEntries(this.props.routeParams.type);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.routeParams.type !== nextProps.routeParams.type) {
      console.log('yeah')
      this.props.loadEntries(nextProps.routeParams.type);
    }
    return true;
  }

  render() {
    const { loading, entries } = this.props;
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
        {loading ? <Loader /> : <List entries={entries} />}
      </div>
    );
  }
}

Listings.propTypes = {
  loading: React.PropTypes.bool,
  entries: React.PropTypes.array,
  type: React.PropTypes.string,
  loadEntries: React.PropTypes.func,
  routeParams: React.PropTypes.object,
};

const mapStateToProps = selectListings();

function mapDispatchToProps(dispatch) {
  return {
    loadEntries: (type) => {
      dispatch(loadEntries(type));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
