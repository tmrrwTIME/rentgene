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

export class Feedback extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius blanditiis quas quidem incidunt magnam, fuga, expedita inventore vel odit, quos aperiam beatae tenetur est culpa? Eius animi nam, amet aperiam?
              </p>
            </div>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <textarea name="name" rows="8" cols="40" className={`form-control ${styles.textarea}`}></textarea>
            <button className={`btn btn-xs ${styles.button}`}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectFeedback();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
