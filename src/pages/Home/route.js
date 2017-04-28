/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例
 */
import bridge from 'src/utils/bridge';

module.exports = {
	path: 'home',
	childRoutes: [
		{
			path: 'list',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('./List'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '列表展示' })
		},{
			path: 'async',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('./Async'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '异步加载数据' })
		}
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Index'));
			});
		},
		onEnter: () => bridge.doAction('setTitle', { title: 'redux-首页' })
		// onEnter: () => bridge.doAction('setWechat')
	}
}