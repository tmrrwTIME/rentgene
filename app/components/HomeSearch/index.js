/**
*
* HomeSearch
*
*/

import React from 'react';
import { Link } from 'react-router';
// import Button from 'components/Button';

import styles from './styles.css';


export class HomeSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      routeRooms: '/listings/rooms?filter=on',
      routeApartments: '/listings/apartments?filter=on',
      routeHouses: '/listings/houses?filter=on',
    };
    this.updateButton = this.updateButton.bind(this);
  }
  updateButton(e) {
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.getAttribute('name');
    switch (id) {
      case 'roomSelect':
        this.setState({
          routeRooms: `/listings/rooms?${name}=${e.currentTarget.value}`,
        });
        break;
      case 'apartmentSelect':
        this.setState({
          routeApartments: `/listings/apartments?${name}=${e.currentTarget.value}`,
        });
        break;
      case 'housesSelect':
        this.setState({
          routeHouses: `/listings/houses?${name}=${e.currentTarget.value}`,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const prices = [400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000];
    const roomPrices = [400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000, 2500];
    const beds = ['Studio', '1+', '2+', '3+', '4+', '5+', '6+', '7+'];
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
                  <p>
                    <Link to={'/listings/rooms'} className={styles.anyLink}><b>Any</b></Link>
                  </p>
                  <br />
                  <p>or</p>
                  <div className={styles.select}>
                    <h6>Max</h6>
                    <select data-id="roomSelect" onChange={this.updateButton} name="priceMax" className={`form-control input-sm ${styles.formControl}`}>
                      <option>Price</option>
                      {roomPrices.map((price, i) => {
                        const key = `price-room-${i}`;
                        return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                      })}
                    </select>
                  </div>
                  <Link className={`btn btn-block ${styles.link}`} to={this.state.routeRooms}>search</Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className={styles.searchContent}>
                  <h4 className={styles.title}>Apartments</h4>
                  <p>
                    <Link to={'/listings/apartments'} className={styles.anyLink}><b>Any</b></Link>
                  </p>
                  <br />
                  <p>or</p>

                  <hr />
                  <div className={styles.select}>
                    <select onChange={this.updateButton} className={`form-control input-sm ${styles.formControl}`} data-id="apartmentSelect" name="beds">
                      <option>Beds</option>
                      {beds.map((bed, i) => {
                        const key = `bed-apartment-${i}`;
                        return <option key={key} value={bed}>{bed}</option>;
                      })}
                    </select>
                  </div>
                  <div className={styles.select}>
                    <h6>Max</h6>
                    <select onChange={this.updateButton} name="priceMax" className={`form-control input-sm ${styles.formControl}`} data-id="apartmentSelect">
                      <option value="">Price</option>
                      {prices.map((price, i) => {
                        const key = `price-apartment-${i}`;
                        return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                      })}
                    </select>
                  </div>
                  <Link className={`btn btn-block ${styles.link}`} to={this.state.routeApartments}>search</Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className={styles.searchContent}>
                  <h4 className={styles.title}>Houses</h4>
                  <p>
                    <Link to={'/listings/houses'} className={styles.anyLink}><b>Any</b></Link>
                  </p>
                  <br />
                  <p>or</p>

                  <hr />
                  <div className={styles.select}>
                    <select onChange={this.updateButton} name="beds" className={`form-control input-sm ${styles.formControl}`} data-id="housesSelect">
                      <option value="">Beds</option>
                      {beds.map((bed, i) => {
                        const key = `bed-houses-${i}`;
                        return <option key={key} value={bed}>{bed}</option>;
                      })}
                    </select>
                  </div>
                  <div className={styles.select}>
                    <h6>Max</h6>
                    <select onChange={this.updateButton} name="priceMax" className={`form-control input-sm ${styles.formControl}`} data-id="housesSelect">
                      <option value="">Price</option>
                      {prices.map((price, i) => {
                        const key = `price-houses-${i}`;
                        return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                      })}
                    </select>
                  </div>
                  <Link className={`btn btn-block ${styles.link}`} to={this.state.routeHouses}>search</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSearch;
