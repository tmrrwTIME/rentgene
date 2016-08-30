/*
 *
 * DetailView
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectDetailView from './selectors';
import styles from './styles.css';
// import { Link } from 'react-router';
import SizeImage from 'assets/images/size8x6.png';
import { goBack } from 'react-router-redux';

export class DetailView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.detailView}>
        <Helmet
          title="DetailView"
          meta={[
            { name: 'description', content: 'Description of DetailView' },
          ]}
        />
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <br />
            <button className="btn" onClick={this.props.handleBack}>
              <b>Back</b>
            </button>
            <br />
            <br />
            <div className={`row ${styles.detail}`}>
              <div className="col-sm-7">
                <div className={styles.gallery}>
                  <div className={styles.thumb}>
                    <div className={styles.main}>
                      <img className={styles.main} src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thum1.jpg" alt="" />
                    </div>
                    <img style={{ width: '100%' }} src={SizeImage} alt="" />
                  </div>
                  <div className={`clearfix ${styles.thumbList}`}>
                    <div className={styles.tl}>
                      <div className={styles.thumb}>
                        <div className={styles.main}>
                          <img className={styles.main} src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thum1.jpg" alt="" />
                        </div>
                        <img style={{ width: '100%' }} src={SizeImage} alt="" />
                      </div>
                    </div>
                    <div className={styles.tl}>
                      <div className={styles.thumb}>
                        <div className={styles.main}>
                          <img className={styles.main} src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thumb2.jpg" alt="" />
                        </div>
                        <img style={{ width: '100%' }} src={SizeImage} alt="" />
                      </div>
                    </div>
                    <div className={styles.tl}>
                      <div className={styles.thumb}>
                        <div className={styles.main}>
                          <img className={styles.main} src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thum1.jpg" alt="" />
                        </div>
                        <img style={{ width: '100%' }} src={SizeImage} alt="" />
                      </div>
                    </div>
                    <div className={styles.tl}>
                      <div className={styles.thumb}>
                        <div className={styles.main}>
                          <img className={styles.main} src="https://dl.dropboxusercontent.com/u/35568161/ret/img/thumb3.jpg" alt="" />
                        </div>
                        <img style={{ width: '100%' }} src={SizeImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi, in perferendis minima ut, sequi accusantium. Voluptates fuga necessitatibus animi, iusto unde. Atque voluptatum iste dicta enim aliquid optio magni.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi, in perferendis minima ut, sequi accusantium. Voluptates fuga necessitatibus animi, iusto unde. Atque voluptatum iste dicta enim aliquid optio magni.
                </p>
                <div className={styles.line}></div>
                <div className={styles.strong}>
                  Pets <span>YES</span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.strong}>
                  Parking <span>YES</span>
                </div>
              </div>
              <div className="col-sm-5">
                <div>1234 Merry Ln Los Angeles, CA 91202 1200 sq. ft 2 bed, 2 bath</div>
                <div className={styles.price}>$17,000</div>
                <div><b>+500$ security deposit</b></div>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423274.8219121267!2d-118.35409507050439!3d34.02245769511813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sau!4v1471611530989" width="800" height="200" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
                <h4>Contact</h4>
                <div>
                  John lennon
                </div>
                <div>
                  email: John@wild.com
                </div>
                <div>
                  Phone: 041-137-4371
                </div>
                <div className={styles.option}>
                  <a href="#">Print</a>
                  <a href="#">Share</a>
                </div>
                <div className={styles.date}>
                  Available 18/12/03
                </div>
                <h5>Untilities</h5>
                <div className={styles.lineLeft}></div>
                <div>split</div>
                <h5>Duration</h5>
                <div className={styles.lineLeft}></div>
                <div>6 months min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DetailView.propTypes = {
  handleBack: React.PropTypes.func,
};

const mapStateToProps = selectDetailView();

function mapDispatchToProps(dispatch) {
  return {
    handleBack: () => {
      dispatch(goBack());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
