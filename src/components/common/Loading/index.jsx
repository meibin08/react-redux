
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Loading } from 'dragon-mobile-ui';


let defaultLoad = "default-loading";
//处理特殊处理
let idDispose = (id)=>{ 
  return ( defaultLoad + ((id||"M").charCodeAt(0))+888 );
};


let StaticLoad = {
  default: (id,message) => {
    let div = document.createElement('div');
    div.id = idDispose(id)||defaultLoad;
    document.body.appendChild(div);
    ReactDOM.render((
      <Loading
          visible={true}
          message={message||"加载中"} />), div);
  },
  show: (id,message) => {
    StaticLoad.default(id,message);
  },

  remove: (id) => {
    let defaultId = "#"+(idDispose(id)||defaultLoad);
    let loadNode = document.querySelector(defaultId);

    loadNode&&document.body.removeChild(loadNode);
  }
}

export default StaticLoad;