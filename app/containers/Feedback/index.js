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

export class Feedback extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
                This site is just getting started to giving you
                the best possible user experience for
                finding a place to live. So your feedback is
                greatly appreciated!
              </p>
            </div>
            <br />
            <br />
            <p>
              Anonomyous Feedback! We really need you!
            </p>
            {!submitted ? <form method="POST">
              <textarea
                id="feedback"
                name="feedback"
                rows="8"
                cols="40"
                className={`form-control ${styles.textarea}`}
                required
              ></textarea>
              <button
                className={`btn btn-xs ${styles.button}`}
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
