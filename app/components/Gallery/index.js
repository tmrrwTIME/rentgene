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
      slideIndex: 1,
      display:'none',
      slides:''
    }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.showDivs = this.showDivs.bind(this)
    this.plusDivs = this.plusDivs.bind(this)
  }
  renderItems(){
    var id = this.props.id
    var images = this.state.images
    return(
      images.map((item, i)=>{
        return(
          <img key={i} style={{width:"100%", height:'100%'}} className={`${id}-slides`} src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${item.name}`} alt="" />
        )
      })
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({images: nextProps.images})
    let slides = document.getElementsByClassName(`${this.props.id}-slides`)
    this.setState({slides: slides})
    this.showDivs(this.state.slideIndex)
  }
  showDivs(index){
    var width, height;
    var slideIndex = this.state.slideIndex
    var slides = this.state.slides
    if (this.state.slides) {
      if (index > slides.length-1) {
        console.log('se cumple');
        this.setState({slideIndex: 0})
      }
      if (index < 1) {
        slideIndex = slides.length
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      slides[slideIndex-1].style.display = 'block'
    }
  }
  plusDivs(index){
    var i = (index === -1)? 1:index
    this.showDivs(this.state.slideIndex += i)
  }
  onMouseOver(){
    if (screen.width > 414) {
      this.setState({display:'inline'})
    }
  }
  onMouseOut(){
    if (screen.width > 414) {
      this.setState({display: 'none'})
    }
  }
  componentDidMount(){
    if (screen.width < 414) {
      this.setState({display:'inline'})
    }
  }
  render(){
    return(
      <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <div className={styles.slider}>
          {this.renderItems()}
        </div>
        <span onClick={()=>this.plusDivs(-1)} style={{display:this.state.display}} className={styles.left} id='left'>&#10094;</span>
        <span onClick={()=>this.plusDivs(1)} style={{display:this.state.display}} className={styles.right} id='right'>&#10095;</span>
      </div>
    )
  }
}


export default Gallery;
