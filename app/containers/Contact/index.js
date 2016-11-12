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

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      isOk: false,
    }

    this.submit = this.submit.bind(this)
  }
  submit(e){
    e.preventDefault()
    request.post(e.target.action)
    .send({
      "subject":this.refs.name.value,
      "mail": this.refs.email.value,
      "message": this.refs.message.value
    })
    .withCredentials()
    .accept('application/json')
    .end((err, res)=>{
      if(err) throw err
      console.log(JSON.parse(res.text).code);
      if (JSON.parse(res.text).code === 'ok') {
        this.refs.name.value = ''
        this.refs.email.value = ''
        this.refs.message.value = ''
        this.setState({isOk: true})
      }
    })
  }
  render() {
    return (
      <div className={styles.contact}>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Description of Contact' },
          ]}
        />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className={styles.text}>
              <h3>Contact Us</h3>
              {this.state.isOk ? <h4>We have received your comments, Thank you.</h4> : ''}
            </div>
            <form onSubmit={this.submit} action="http://sendMail-dev.us-west-2.elasticbeanstalk.com/sendMail" method ="post">
              <input ref='name' type="text" className="form-control" placeholder="Name" required /> <br/>
              <input ref='email' type="email" className="form-control" placeholder="Email" required />
              <textarea ref='message' className={`${styles.textarea} form-control`} rows="8" cols="40" required></textarea>
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
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
