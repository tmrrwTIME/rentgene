/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import PowEmoji from 'assets/images/poo-emoji.png';
import CowEmoji from 'assets/images/cow-emoji.png';

import HomeSearch from 'components/HomeSearch';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.homepage}>
        <div className={`text-center ${styles.headText}`}>
          <div style={{ lineHeight: '20px', marginRight: -10 }}>Apartment hunting without the</div>
          <div className={styles.link}>
            <img src={CowEmoji} alt="" style={{ height: 50, marginLeft: 10 }} />
            <img src={PowEmoji} alt="" style={{ height: 42, marginTop: 10 }} />
          </div>
        </div>

        <HomeSearch />

        <p className="text-center">
          *No Scams. All listings are checked by us! for perfect listings with all details and perfect photos!
        </p>
      </div>
    );
  }
}
