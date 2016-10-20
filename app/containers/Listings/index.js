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
import serialize from 'form-serialize';
import qs from 'querystring';
import { isEmpty } from 'lodash';

import { loadEntries } from './actions';

export class Listings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.filter = this.filter.bind(this);
    this.handleRefine = this.handleRefine.bind(this);
    this.clear = this.clear.bind(this);
    this.state = {
      listType: this.props.routeParams.type,
      sortBy: 'newest',
      filters: {},
    };
  }

  componentWillMount() {
    const filters = qs.parse(document.location.search.replace('?', ''));
    if (!isEmpty(filters)) {
      this.setState({ filters });
    }
  }

  componentDidMount() {
    this.props.loadEntries(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.routeParams.type !== nextProps.routeParams.type) {
      this.setState({ listType: nextProps.routeParams.type }, () => {
        this.props.loadEntries(this.state);
      });
    }
    return true;
  }

  search() {
    const text = document.getElementById('textSearch').value;
    if (text.length) {
      this.setState({ text }, () => {
        this.props.loadEntries(this.state);
      });
    }
  }

  sortBy(e) {
    const value = e.currentTarget.value;
    this.setState({ sortBy: value }, () => {
      this.props.loadEntries(this.state);
    });
  }

  filter(e) {
    const name = e.currentTarget.name;
    const filters = this.state.filters;
    if (e.currentTarget.type === 'checkbox') {
      if (e.currentTarget.checked) {
        filters[name] = e.currentTarget.value === 'true';
      } else {
        delete filters[name];
      }
    } else {
      filters[name] = e.currentTarget.value;
    }
    this.setState({ filters }, () => {
      console.log(this.state.filters);
    });
  }

  handleRefine() {
    this.props.loadEntries(this.state);
  }

  clear() {
    this.setState({
      filters: {},
      text: '',
    }, () => {
      this.props.loadEntries(this.state);
    });
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
        <Search
          handleSearch={this.search}
          handleSort={this.sortBy}
          values={this.state}
        />
        <Filters
          handleRefine={this.handleRefine}
          handleChange={this.filter}
          values={this.state.filters}
        />
        <button onClick={this.clear}>Clear filters</button>
        <p>{entries.length} results.</p>
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
  handleRefine: React.PropTypes.func,
};

const mapStateToProps = selectListings();

function mapDispatchToProps(dispatch) {
  return {
    loadEntries: (type) => {
      dispatch(loadEntries(type));
    },
    handleRefine: (e) => {
      const form = document.querySelector('form');
      const data = serialize(form, { hash: true });
      console.log('DATA', data);
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
