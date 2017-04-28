
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Mask, Icon, Toast } from 'dragon-mobile-ui';
import './empty.scss';

let EmptyTips = class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {props}=this;
    return (
      <div className="empty" >
        <p className="tips-img"><img className="max-img" src={require("./images/not.png")} alt="无数据提示"/></p>
        <p className="tips-txt">{props.message||'暂无活动'} ~~^_^~~~ </p>
      </div>
    )
  }
}

export default EmptyTips;