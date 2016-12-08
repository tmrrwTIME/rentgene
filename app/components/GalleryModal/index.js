/**
*
* Gallery
*
*/

import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap'
import styles from './styles.css';

class GalleryModal extends Component{
  constructor(props){
    super(props)
    this.onEvent = this.onEvent.bind(this)
  }
  renderItems(){
    var images = this.props.images
    return(
      images.map((item, i)=>{
        return(
          <Carousel.Item key={i} animateIn={true} animateOut={false}>
            <img className='slides' style={{display:'block'}} src={item.original} alt="" />
          </Carousel.Item>
        )
      })
    )
  }
  onEvent(index){
    var images = this.props.images[index].original
    this.props.sizes.map((item)=>{
      if (item.id === images) {
        this.props.modalSize(item.width, item.height)
      }
    })
  }
  render(){
    return(
      <div id='modal'>
        <Carousel
          interval={0}
          defaultActiveIndex={this.props.startIndex}
          indicators={false}
          onSelect={this.onEvent}
        >
          {this.renderItems()}
        </Carousel>
      </div>
    )
  }
}


export default GalleryModal;
