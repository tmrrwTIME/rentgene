/**
*
* Gallery
*
*/

//listing gallery from where modal is executed


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
            <Link to={this.props.to} className='ScaledImg'>
                <img
                  className={`${id}-slides`}
                  src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads-reduced/images/${item.name}`}
                  role="presentation"
                />
            </Link>
          </Carousel.Item>
        )
      })
    )
  }
  
  changeSize(e){
    var element = document.getElementsByClassName('carousel-inner')[0]
    var height = window.getComputedStyle(element).height;
    var width = window.getComputedStyle(element).width;
  }

  componentWillReceiveProps(nextProps){
    this.setState({images: nextProps.images})
  }

  componentDidMount(){
    var element = document.getElementsByClassName('carousel-inner')[0]
    var image = document.getElementsByClassName('carousel-images')
    var height = window.getComputedStyle(element).height;
    var width = window.getComputedStyle(element).width;
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
