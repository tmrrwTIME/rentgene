/**
*
* Gallery
*
*/

import React,{Component} from 'react';
import { Link } from 'react-router';
import {Carousel} from 'react-bootstrap'

import styles from './styles.css';

class Gallery extends Component{
  constructor(props){
    super(props)
    this.state = {
      images:[]
    }
  }
  renderItems(){
    var id = this.props.id
    var images = this.state.images
    return(
      images.map((item, i)=>{
        return(
          <Carousel.Item key={i}>
            <Link to={this.props.to}>
              <img
                className={`${id}-slides`}
                src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${item.name}`}
                role="presentation"
                style={{height:250, margin:'0 auto'}}
              />
            </Link>
          </Carousel.Item>
        )
      })
    )
  }
  changeSize(e){
    console.log(e);
    var element = document.getElementsByClassName('carousel-inner')[0]
    var width = window.getComputedStyle(element).height;
    console.log(width);
  }
  componentWillReceiveProps(nextProps){
    this.setState({images: nextProps.images})

  }
  componentWillUpdate(){
  }
  onMouseOver(){
    console.log('hover');
  }
  render(){
    return(
      <Carousel indicators={false} interval={0} controls={true} onSelect={this.changeSize}>
        {this.renderItems()}
      </Carousel>
    )
  }
}


export default Gallery;
