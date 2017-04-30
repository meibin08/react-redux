import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { hashHistory, browserHistory, Router } from 'react-router';
import Store from "src/store";
import bridge from 'src/utils/bridge'

const rootRoute = {
  path: 'redux',
  component: require('../components/app/App'),
  childRoutes: [
    require('./Home/route'),
    require('./Intro/route'),
    require('./Handler/route'),
    {
      path: '*',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./NotFoundPage'));
        });
      },
      onEnter: () => bridge.doAction('setTitle', { title: '出错啦' })
      // onEnter: () => bridge.doAction('setWechat')
    }
  ],
  indexRoute:{ onEnter: (nextState, replace) => replace('/redux/home') }, //默认重定向到->首页
};

ReactDOM.render(
  <Provider store={Store}>
    <Router routes={rootRoute} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);

