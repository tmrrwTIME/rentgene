/**
*
* Footer
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>Copyright &copy; 2016</li>
        <li><Link to={'/'}>Blog</Link></li>
        <li><Link to={'/'}>Submit listing</Link></li>
        <li><Link to={'/'}>Story</Link></li>
        <li><Link to={'/'}>Contact</Link></li>
        <li><Link to={'/'}><i className="fa fa-facebook"></i></Link></li>
        <li><Link to={'/'}><i className="fa fa-twitter"></i></Link></li>
        <li><Link to={'/'}><i className="fa fa-instagram"></i></Link></li>
      </ul>
    </div>
  );
}

export default Footer;
