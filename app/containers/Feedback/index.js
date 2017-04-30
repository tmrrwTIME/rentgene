/*
 *
 * Feedback
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectFeedback from './selectors';
import styles from './styles.css';
import { submitFeedback as submit } from './actions';
import request from 'superagent'


export class Feedback extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      "subject": null,
      "mail": null,
      "message": this.refs.message.value
    })
    .withCredentials()
    .accept('application/json')
    .end((err, res)=>{
      if(err) throw err
      console.log(JSON.parse(res.text).code);
      if (JSON.parse(res.text).code === 'ok') {
        this.refs.message.value = ''
        this.setState({isOk: true})
      }
    })
  }
  render() {
    const { submitFeedback, submitted } = this.props;
    return (
      <div className={styles.feedback}>
        <Helmet
          title="Feedback"
          meta={[
            { name: 'description', content: 'Description of Feedback' },
          ]}
        />
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="fet-text">
              <p>
                We want to give you the best possible user experience when finding a place to live. 
So let us know what we can do to help!
              </p>
            </div>
            <br />
            <br />
            <p>
              Anonomyous Feedback! We really need you!
            </p>
            {/* {!this.state.isOk ? <form onSubmit={this.submit} action="http://sendMail-dev.us-west-2.elasticbeanstalk.com/sendMail" method="POST"> */}
            {!submitted ? <form method='POST'>
              <textarea
                id="feedback"
                name="feedback"
                rows="8"
                cols="40"
                className={`form-control ${styles.textarea}`}
                ref='message'
                required
              ></textarea>
              <button className={`btn btn-xs ${styles.button}`}
                onClick={submitFeedback}
              >
                Submit
              </button>
            </form> : <h1>Thanks</h1>}
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  submitFeedback: React.PropTypes.func.isRequired,
  submitted: React.PropTypes.bool,
};

const mapStateToProps = selectFeedback();

function mapDispatchToProps(dispatch) {
  return {
    submitFeedback: (e) => {
      e.preventDefault();
      const el = document.getElementById('feedback');
      const value = el.value;
      dispatch(submit(value));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
