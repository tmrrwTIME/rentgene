/**
*
* Gallery
*
*/

import React from 'react';
import SizeImage from 'assets/images/size8x6.png';

import styles from './styles.css';

function changeMainImage(image) {
  document.getElementById('mainImage').src = image;
}
//
function Gallery(props) {
  const images =  [{name:'DSC_0096.JPG'},{name:'DSC_0096.JPG'}];
  let firstImage;
  if (images && images.length) {
    firstImage = images[0].name;
  }
  return (
    <div className={styles.gallery}>
      <div className={styles.thumb}>
        <div className={styles.main}>
          <img id="mainImage" className={styles.main} src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${firstImage}`} alt="" />
        </div>
        <img style={{ width: '100%' }} src={SizeImage} alt="" />
      </div>

      <div className={`clearfix ${styles.thumbList}`}>
        {images.map((image, i) => {
          const key = `image-${i}`;
          const img = `https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${image.name}`;
          return (
            <div key={key} className={styles.tl} onClick={() => changeMainImage(img)}>
              <div className={styles.thumb}>
                <div className={styles.main}>
                  <img className={styles.main} src={img} alt="" />
                </div>
                <img style={{ width: '100%' }} src={SizeImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
