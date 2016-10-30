/*
 *
 * Blog
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBlog from './selectors';
import styles from './styles.css';
import Logo from 'assets/images/logo.png';
import Loader from 'components/Loader';
import moment from 'moment';

class BlogList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { blogs } = this.props;
    return (
      <div>
        {blogs.map((blog, key) => {
          return (
            <div key={`blog-${key}`} className={styles.news}>
              <h4>{blog.title}</h4>
              By admin / <span className={styles.date}>{moment(blog.createdAt).format('LL')}</span>
              <div className={styles.thumb}>
                <img src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/image/${blog.image}`} alt="" />
              </div>
              <p>
                {blog.body}
              </p>
            </div>
          );
        })}
      </div>
    )
  }
}

export class Blog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, blogs } = this.props;
    return (
      <div className={styles.blog}>
        <Helmet
          title="Blog"
          meta={[
            { name: 'description', content: 'Description of Blog' },
          ]}
        />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="text-center">
              <div className={styles.head}>
                <img src={Logo} alt="" />
                <span></span>
                blogga
              </div>
            </div>
            {loading ? <Loader /> : <BlogList blogs={blogs} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectBlog();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
