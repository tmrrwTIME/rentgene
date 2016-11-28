/**
*
* Gallery
*
*/

import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap'
import styles from './styles.css';

class GalleryModal extends Component{
  renderItems(){
    var images = this.props.images
    return(
      images.map((item, i)=>{
        return(
          <Carousel.Item>
            <img key={i} className='slides' style={{display:'block'}} src={item.original} alt="" />
          </Carousel.Item>
        )
      })
    )
  }

  render(){
    return(
      <Carousel interval={0} defaultActiveIndex={this.props.startIndex} indicators={false}>
        {this.renderItems()}
      </Carousel>
    )
  }
}


export default GalleryModal;
