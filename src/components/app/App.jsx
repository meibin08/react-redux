import React, { Component, PropTypes } from 'react'
import Events from 'src/utils/events'
import FastClick from 'fastclick';
import loadJS  from 'src/utils/loadJS';
import 'dragon-mobile-ui/styles/index.scss';
import './App.scss';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:true
    };
  }
  componentWillMount(){
  }
  componentDidMount() {
    Events.on(window, 'resize', window.__setFontSize__);
    setTimeout(() => {
      FastClick.attach(document.body);
    }, 100);
     __DEBUG__ && loadJS('http://cdn.jsdelivr.net/eruda/1.0.5/eruda.min.js', ()=>{
          eruda.init();
    });

  }
  render() {
    const {isLogin}=this.state;
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    )
  }
}

export default Index;