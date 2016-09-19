/**
*
* Navigation
*
*/

import React from 'react';
import { Link } from 'react-router';
import Logo from 'assets/images/logo.png';

import styles from './styles.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className="container-fluid">
        <Link to={'/'} className="logo">
          <img className={styles.logo} src={Logo} alt="Rentgene" />
        </Link>
        <div className="pull-right">
          <ul className={styles.list}>
            <li><Link to={'/listings/rooms'}>Room</Link></li>
            <li><Link to={'/listings/apartments'}>Apartments</Link></li>
            <li><Link to={'/listings/houses'}>Houses</Link></li>
          </ul>
          <ul className={styles.list}>
            <li><Link to={'/add'}>List your property</Link></li>
            <li><Link to={'/feedback'}>Give us feedback</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
