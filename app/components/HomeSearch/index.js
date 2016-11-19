/**
*
* HomeSearch
*
*/

import React, {Component} from 'react';
import { Link } from 'react-router';
// import Button from 'components/Button';
import serialize from 'form-serialize';
import styles from './styles.css';
//Import Collapse
import Accordion from '../Accordion/Accordion'

export class HomeSearch extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      routeRooms: '/listings/rooms',
      routeApartments: '/listings/apartments',
      routeHouses: '/listings/houses',
      anyRooms: false,
      anyApartments: false,
      anyHouses: false,
    };
    this.updateButton = this.updateButton.bind(this);
    this.updateAny = this.updateAny.bind(this);
  }
  updateButton(e) {
    const id = e.currentTarget.dataset.id;
    switch (id) {
      case 'roomSelect':
        this.setState({
          routeRooms: `/listings/rooms?${serialize(document.getElementById('formRooms'))}`,
          anyRooms: false,
        });
        break;
      case 'apartmentSelect':
        this.setState({
          routeApartments: `/listings/apartments?${serialize(document.getElementById('formApartments'))}`,
          anyApartments: false,
        });
        break;
      case 'housesSelect':
        this.setState({
          routeHouses: `/listings/houses?${serialize(document.getElementById('formHouses'))}`,
          anyHouses: false,
        });
        break;
      default:
        break;
    }
  }

  updateAny(e) {
    switch (e.currentTarget.dataset.any) {
      case 'rooms':
        this.setState({
          anyRooms: !this.state.anyRooms,
          anyApartments: false,
          anyHouses: false,
        }, () => {
          this.setState({
            routeRooms: this.state.anyRooms ? '/listings/rooms' : this.state.routeRooms,
          });
          document.getElementById('roomPriceSelect').getElementsByTagName('option')[0].selected = 'selected';
        });
        break;
      case 'apartments':
        this.setState({
          anyApartments: !this.state.anyApartments,
          anyHouses: false,
          anyRooms: false,
        }, () => {
          this.setState({
            routeApartments: this.state.anyApartments ? '/listings/apartments' : this.state.routeApartments,
          });
          document.getElementById('apartmentBedsSelect').getElementsByTagName('option')[0].selected = 'selected';
          document.getElementById('apartmentPriceSelect').getElementsByTagName('option')[0].selected = 'selected';
        });
        break;
      case 'city':
        this.setState({
          anyCity: !this.state.anyCity,
          anyApartments: false,
          anyHouses: false,
        });
        break;
      default:
        this.setState({
          anyHouses: !this.state.anyHouses,
        }, () => {
          this.setState({
            routeHouses: this.state.anyHouses ? '/listings/houses' : this.state.routeHouses,
          });
          document.getElementById('housesBedsSelect').getElementsByTagName('option')[0].selected = 'selected';
          document.getElementById('housesPriceSelect').getElementsByTagName('option')[0].selected = 'selected';
        });
        break;
    }
  }

  render() {
    const prices = [400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000];
    const roomPrices = [400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000, 2500];
    const beds = [1, 2, 3, 4, 5, 6, 7];
    const anyClassRooms = this.state.anyRooms ? styles.activeAnyLink : '';
    const anyClassApartments = this.state.anyApartments ? styles.activeAnyLink : '';
    const anyClassHouses = this.state.anyHouses ? styles.activeAnyLink : '';
    const anyClassCity = this.state.anyCity ? styles.activeAnyLink : '';
    return (
      <div className={styles.homeSearch}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className={`row ${styles.main}`}>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <div className={styles.searchContent}>
                  <h4 className={styles.title}>City</h4>
                  <p>
                    <button onClick={this.updateAny} data-any="city" className={`${styles.anyLink} ${anyClassCity}`}>
                      Los Angeles
                    </button>
                  </p>
                  <br />
                  <p style={{ fontSize: 11 }}>*Launching first in <br /> Los Angeles</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <div className={styles.searchContent}>
                  <h4 className={styles.title}>Rooms</h4>
                  <p>
                    <button onClick={this.updateAny} data-any="rooms" className={`${styles.anyLink} ${anyClassRooms}`}><b>Any</b></button>
                  </p>
                  <br />
                  <p>or</p>
                  <form id="formRooms">
                    <div className={styles.select} style={{ marginTop: 40 }}>
                      {/* <h6 style={{ marginBottom: 0, marginTop: 26 }}>Max</h6> */}
                      <select
                        id="roomPriceSelect"
                        data-id="roomSelect"
                        onChange={this.updateButton}
                        name="priceMax"
                        className={`form-control input-sm ${styles.formControl}`}
                      >
                        <option>Max Price</option>
                        {roomPrices.map((price, i) => {
                          const key = `price-room-${i}`;
                            return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                        })}
                      </select>
                    </div>
                  </form>
                  <Link className={`btn btn-block ${styles.link}`} to={this.state.routeRooms}>search</Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <div className={styles.searchContent}>
                  <h4 className={styles.title}>Apartments</h4>
                  <p>
                    <button onClick={this.updateAny} data-any="apartments" className={`${styles.anyLink} ${anyClassApartments}`}><b>Any</b></button>
                  </p>
                  <br />
                  <p>or</p>

                  <hr />
                  <form id="formApartments">
                    <div className={styles.select} style={{ marginBottom: 25 }}>
                      <select
                        id="apartmentBedsSelect"
                        onChange={this.updateButton}
                        className={`form-control input-sm ${styles.formControl}`}
                        data-id="apartmentSelect"
                        name="beds"
                        style={{ width: 78 }}
                      >
                        <option>Beds</option>
                        <option value="studio">Studio</option>
                        {beds.map((bed, i) => {
                          const key = `bed-apartment-${i}`;
                            return <option key={key} value={bed}>{bed}+</option>;
                        })}
                      </select>
                    </div>
                    <div className={styles.select}>
                      {/* <h6 style={{ marginBottom: 0, marginTop: 20 }}>Max</h6> */}
                      <select id="apartmentPriceSelect" onChange={this.updateButton} name="priceMax" className={`form-control input-sm ${styles.formControl}`} data-id="apartmentSelect">
                        <option value="">Max Price</option>
                        {prices.map((price, i) => {
                          const key = `price-apartment-${i}`;
                            return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                        })}
                      </select>
                    </div>
                  </form>
                  <Link className={`btn btn-block ${styles.link}`} to={this.state.routeApartments}>search</Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <div className={styles.searchContent}>
                  <h4 className={styles.title}>Houses</h4>
                  <p>
                    <button onClick={this.updateAny} data-any="houses" className={`${styles.anyLink} ${anyClassHouses}`}><b>Any</b></button>
                  </p>
                  <br />
                  <p>or</p>

                  <hr />
                  <form id="formHouses">
                    <div className={styles.select} style={{ marginBottom: 25 }}>
                      <select style={{ width: 78 }} id="housesBedsSelect" onChange={this.updateButton} name="beds" className={`form-control input-sm ${styles.formControl}`} data-id="housesSelect">
                        <option value="">Beds</option>
                        {beds.map((bed, i) => {
                          const key = `bed-houses-${i}`;
                            return <option key={key} value={bed}>{bed}+</option>;
                        })}
                      </select>
                    </div>
                    <div className={styles.select}>
                      {/* <h6 style={{ marginBottom: 0, marginTop: 20 }}>Max</h6> */}
                      <select id="housesPriceSelect" onChange={this.updateButton} name="priceMax" className={`form-control input-sm ${styles.formControl}`} data-id="housesSelect">
                        <option value="">Max Price</option>
                        {prices.map((price, i) => {
                          const key = `price-houses-${i}`;
                            return <option key={key} value={price}>{`$${price.toLocaleString()}`}</option>;
                        })}
                      </select>
                    </div>
                  </form>
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
