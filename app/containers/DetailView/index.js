/*
 *
 * DetailView
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectDetailView from './selectors';
import styles from './styles.css';
// import { Link } from 'react-router';

import { goBack } from 'react-router-redux';
import { loadEntry } from './actions';
import Gallery from 'components/Gallery';
import Map from 'components/Map';

export class DetailView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchEntry(this.props.routeParams.slug);
  }
  render() {
    const { entry } = this.props;
    const markers = [];
    if (entry.lat && entry.lng) {
      markers.push({
        position: {
          lat: entry.lat,
          lng: entry.lng,
        },
        key: entry.entryId,
        defaultAnimation: 2,
      });
    }
    return (
      <div className={styles.detailView}>
        <Helmet
          title="DetailView"
          meta={[
            { name: 'description', content: 'Description of DetailView' },
          ]}
        />
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <button className="btn" onClick={this.props.handleBack}>
              <b>Back</b>
            </button>
            <br />
            <br />
            <div className={`row ${styles.detail}`}>
              <div className="col-sm-7">
                <Gallery images={entry.images} />
                <h3>Description</h3>
                <p>
                  {entry.description}
                </p>
                <div className={styles.line}></div>
                <div className={styles.strong}>
                  Pets <span>{entry.pets}</span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.strong}>
                  Parking <span>{entry.parking}</span>
                </div>
              </div>
              <div className="col-sm-5">
                <div>{entry.address || `${entry.address1} ${entry.address2}`}</div>
                <div className={styles.price}>${entry.price}</div>
                {entry.deposit ? `<div><b>+$${entry.deposit} security deposit</b></div>` : ''}
                <Map
                  containerElement={
                    <div style={{ height: 200 }} />
                  }
                  mapElement={
                    <div style={{ height: 200 }} />
                  }
                  markers={markers}
                />
                <h4>Contact</h4>
                <div>
                  {entry.contactName}
                </div>
                <div>
                  email: {entry.contactEmail}
                </div>
                <div>
                  Phone: {entry.phone}
                </div>
                <div className={styles.option}>
                  <a href="#print" onClick={() => window.print()}>Print</a>
                  <a href="#">Share</a>
                </div>
                <div className={styles.date}>
                  Available 18/12/03
                </div>
                <h5>Utilities</h5>
                <div className={styles.lineLeft}></div>
                <div>split</div>
                <h5>Duration</h5>
                <div className={styles.lineLeft}></div>
                <div>{entry.leaseDuration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DetailView.propTypes = {
  handleBack: React.PropTypes.func,
};

const mapStateToProps = selectDetailView();

function mapDispatchToProps(dispatch) {
  return {
    handleBack: () => {
      dispatch(goBack());
    },
    fetchEntry: (entryId) => {
      dispatch(loadEntry(entryId));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
