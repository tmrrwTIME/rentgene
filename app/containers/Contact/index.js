/*
 *
 * Contact
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectContact from './selectors';
import styles from './styles.css';
import request from 'superagent'
import { submitContact as submit } from './actions';

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      isOk: false,
    }

  }

  render() {
    const { submitContact, submitted } = this.props;
    return (
      <div className={styles.contact}>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Description of Contact' }
          ]}  
        />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className={styles.text}>
              <h3>Contact Us</h3>
              {submitted ? <h4>We have received your comments, Thank you.</h4> : ''}
            </div>

            <form action='POST' onSubmit={submitContact}>
              <input ref='name' id="username" type="text" className="form-control" placeholder="Name" required /> <br/>
              <input ref='email' id="email" type="email" className="form-control" placeholder="Email" required />
              <textarea ref='message' id='message' className={`${styles.textarea} form-control`} rows="8" cols="40" required></textarea>
              <button className="btn btn-xs">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectContact();

function mapDispatchToProps(dispatch) {
  return {
    submitContact: (e) => {
      e.preventDefault();
      const messageEl = document.getElementById('message');
      const message = messageEl.value;
      const emailEl = document.getElementById('email');
      const email = emailEl.value;
      const usernameEl = document.getElementById('username');
      const username = usernameEl.value;
      dispatch(submit(message, email, username));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
