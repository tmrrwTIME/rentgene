import React, {Component} from 'react'

var styles = {
  inActive:{
    display:'none'
  },
  active:{
    display:'inherit',
    borderBottom:'1px solid black'
  },
  title:{
    textDecoration: 'none',
    color: '#000',
    fontSize:24,
  }
}

export class Accordion extends Component{
  constructor(props){
    super(props)
    this.state = {
    isActive:false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(e){
    e.preventDefault()
    var state = this.state.isActive
    if (!state) {
      this.setState({isActive:!state})
    }else {
      this.setState({isActive: !state})
    }
  }
  render(){
    var style = (this.state.isActive)? styles.active: styles.inActive;
    return(
      <section>
        <h1 onClick={this.toggle} style={styles.title}>
          {this.props.title}
        </h1>
        <div style={style}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default Accordion
