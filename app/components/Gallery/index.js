/**
*
* Gallery
*
*/

import React,{Component} from 'react';

import styles from './styles.css';

class Gallery extends Component{
  constructor(props){
    super(props)
    this.state = {
      images:[],
      index: 1,
      display:'none'
    }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.showDivs = this.showDivs.bind(this)
    this.plusDivs = this.plusDivs.bind(this)
  }
  renderItems(){
    var images = this.state.images
    return(
      images.map((item, i)=>{
        return(
          <img key={i} className="slides" src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${item.name}`} alt="" />
        )
      })
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({images: nextProps.images})
    this.showDivs(this.state.index)
  }
  showDivs(index){
    var index = this.state.index
    var slides = document.getElementsByClassName('slides')
    if (index > slides.length) {
      this.setState({index: 1})
    }
    if (index < 1) {
      this.setState({index:slides.length})
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slides[(index - 1)].style.display = 'block'
  }
  plusDivs(index){
    this.showDivs(this.state.index += index)
  }
  onMouseOver(){
    this.setState({display:'inline'})
  }
  onMouseOut(){
    this.setState({display: 'none'})
  }
  render(){
    return(
      <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <div className={styles.slider}>
          {this.renderItems()}
        </div>
        <a onClick={()=>this.plusDivs(-1)} style={{display:this.state.display}} className={styles.left} id='left'>&#10094;</a>
        <a onClick={()=>this.plusDivs(1)} style={{display:this.state.display}} className={styles.right} id='right'>&#10095;</a>
      </div>
    )
  }
}


export default Gallery;
