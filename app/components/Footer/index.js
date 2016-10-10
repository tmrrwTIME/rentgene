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
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/add'}>Submit listing</Link></li>
        <li><Link to={'/'}>Terms</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><a target="_blank" href="https://www.facebook.com/rentgene"><i className="fa fa-facebook"></i></a></li>
        <li><a target="_blank" href="https://twitter.com/rentgene"><i className="fa fa-twitter"></i></a></li>
        <li><a target="_blank" href="https://www.instagram.com/rentgene/"><i className="fa fa-instagram"></i></a></li>
      </ul>
    </div>
  );
}

export default Footer;
