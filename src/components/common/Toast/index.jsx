
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Mask, Icon, Toast } from 'dragon-mobile-ui';



let StaticToast = {
  default: (message, callback, duration, theme) => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render((
        <Toast
          duration={ duration || 3500 }
          visible={ true }
          onMaskClick={ () => {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            callback && callback();
          }}>
          <Icon type={ theme || "close-round" } style={{ fontSize: '3rem' }} />
          <p>{ message }</p>
        </Toast>), div);
  },
  info: (message, callback, duration) => {
    StaticToast.default(message, callback, duration);
  },

  success: (message, callback, duration) => {
    StaticToast.default(message, callback, duration, "right-round-fill");
  },

  warning: (message, callback, duration) => {
    StaticToast.default(message, callback, duration);
  },

  error: (message, callback, duration) => {
    StaticToast.default(message, callback, duration, "close-round");
  }
}

export default StaticToast;