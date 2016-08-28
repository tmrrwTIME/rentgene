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
          Apartment hunting without the
          <div className={styles.link}>
            <Link to={'/'}><img src={CowEmoji} alt="" /></Link>
            <Link to={'/'}><img src={PowEmoji} alt="" /></Link>
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
