/*
 *
 * Listings
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
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

import { loadEntries, loadMore } from './actions';

export class Listings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.filter = this.filter.bind(this);
    this.handleRefine = this.handleRefine.bind(this);
    this.clear = this.clear.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      listType: this.props.routeParams.type,
      sortBy: 'newest',
      filters: {},
      animation:'contract',
      from: 0,
      size: 10
    };
  }

  handleScroll() {
    // console.log("handleScroll")
    // console.log(this)
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    // console.log(this.props.entries);
    // console.log("loadingMore: " + this.props.loadingMore + "   entries.length" + this.props.entries.length);
    if (windowBottom >= docHeight - 200 && this.props.loadingMore == false) {
      console.log("bottom")
      console.log((this.state.from + this.state.size + 1) + "  -  "+this.props.totalEntries)
      if(this.state.from + this.state.size + 1 <= this.props.totalEntries){
        this.setState({ from: this.state.from + this.state.size }, () => {
          this.props.loadMore(this.state);
        });
      }
      

    }
  }

  componentWillMount() {
    const filters = qs.parse(document.location.search.replace('?', ''));
    if (!isEmpty(filters)) {
      this.setState({ filters });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.props.loadEntries(this.state);

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Listings: componentWillReceiveProps")
    if (this.props.routeParams.type !== nextProps.routeParams.type) {
      this.setState({ listType: nextProps.routeParams.type }, () => {
        this.props.loadEntries(this.state);
      });
    }
    return true;
  }

  search() {
    console.log("handleScroll")
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
      // console.log(this.state.filters);
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
      this.props.loadEntries(this.state)
    })
    document.getElementById('filters').reset()
  }
  toggleFilters(animate, rotate){
    if (animate === 'contract') {
      this.setState({animation:'expand'})
    }else{
      this.setState({animation:'contract'})
    }
  }

  render() {
    const { loading, entries, loadingMore, totalEntries } = this.props;
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
          listType={this.props.routeParams.type}
          animations={this.state.animation}
          toggleFilters={this.toggleFilters}
        />
        <button onClick={this.clear}>Clear filters</button>
        <p>{totalEntries} results.</p>
        {loading ? <Loader /> : <List ref="list" entries={entries} />}
      </div>
    );
  }
}

Listings.propTypes = {
  loading: React.PropTypes.bool,
  loadingMore: React.PropTypes.bool,
  entries: React.PropTypes.array,
  totalEntries: React.PropTypes.number,
  type: React.PropTypes.string,
  loadEntries: React.PropTypes.func,
  loadMore: React.PropTypes.func,
  routeParams: React.PropTypes.object,
  handleRefine: React.PropTypes.func,
};

const mapStateToProps = selectListings();
// const mapStateToProps = (state) => {
//   return state.toJS().listings
// }

function mapDispatchToProps(dispatch) {
  return {
    loadEntries: (type) => {
      dispatch(loadEntries(type));
    },
    loadMore: (type) => {
      dispatch(loadMore(type));
    },
    handleRefine: (e) => {
      const form = document.querySelector('form');
      const data = serialize(form, { hash: true });
      // console.log('DATA', data);
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
