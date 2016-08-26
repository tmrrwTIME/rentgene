/**
*
* Navigation
*
*/

import React from 'react';
import { Link } from 'react-router';
import Logo from './logo.png';

import styles from './styles.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className="container-fluid">
        <a href="index.html" className="logo">
          <img className={styles.logo} src={Logo} alt="Rentgene" />
        </a>
        <div className="pull-right">
          <ul className={styles.list}>
            <li><Link to={'/'}>Room</Link></li>
            <li><Link to={'/'}>Apartments</Link></li>
            <li><Link to={'/'}>Houses</Link></li>
          </ul>
          <ul className={styles.list}>
            <li><Link to={'/'}>List your property</Link></li>
            <li><Link to={'/'}>Give us feedback</Link></li>
            <li><Link to={'/'}>Blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
