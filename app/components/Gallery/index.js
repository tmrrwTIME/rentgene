/**
*
* Gallery
*
*/

//listing gallery from where modal is executed


import React,{Component} from 'react';
import { Link } from 'react-router';
import {Carousel} from 'react-bootstrap'
import LazyLoad from 'react-lazy-load';

import styles from './styles.css';

class Gallery extends Component{
  constructor(props){
    super(props)
  }
  renderItems(){
    var id = this.props.id
    return(
      this.props.images.map((item, i)=>{
        return(
          <Carousel.Item key={i}>
            <Link to={this.props.to} className='ScaledImg'>
              <LazyLoad
                    onContentVisible={() => console.log('look ma I have been lazyloaded!')}
              >
                <img
                  className={`${id}-slides`}
                  src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${item.name}`}
                  role="presentation"
                />
              </LazyLoad>

            </Link>
          </Carousel.Item>
        )
      })
    )
  }
  changeSize(e){
    // console.log(e);
    var element = document.getElementsByClassName('carousel-inner')[0]
    var height = window.getComputedStyle(element).height;
    var width = window.getComputedStyle(element).width;

    // console.log(width);
  }
  componentWillReceiveProps(nextProps){
    this.setState({images: nextProps.images})

  }
  componentDidMount(){
    var element = document.getElementsByClassName('carousel-inner')[0]
    var image = document.getElementsByClassName('carousel-images')
    var height = window.getComputedStyle(element).height;
    var width = window.getComputedStyle(element).width;



    // console.log(image);
    // console.log(this.state.images);
    for (var i = 0; i < image.length; i++) {
      console.log(image[i]);

    }
    // images.map((image)=>{
    //   console.log(image);
    // })
    // console.log('heigth', height);
    // console.log('width', width);

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
