import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import useBasename from 'history/lib/useBasename';
import { hashHistory, browserHistory, Router } from 'react-router';
import Store from "src/store";
import bridge from 'src/utils/bridge'

const rootRoute = {
  path: '/',
  component: require('../components/app/App'),
  childRoutes: [
    require('./Home/route'),
    require('./Intro/route'),
    require('./Handler/route'),
    require('./Setting/route'),
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
  indexRoute:{ onEnter: (nextState, replace) => replace('/home') }, //默认重定向到->首页
};
function Basename(history, dirname) {
  return useBasename(() => history)({ basename: `/${dirname}` });
};
    // <Router routes={rootRoute} history={hashHistory} />
ReactDOM.render(
  <Provider store={Store}>
    <Router routes={rootRoute} history={Basename(hashHistory,'redux')} />
  </Provider>,
  document.getElementById('app')
);

