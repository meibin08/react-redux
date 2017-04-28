/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例
 */
import bridge from 'src/utils/bridge';

module.exports = {
	path: 'handler',
	childRoutes: [
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Index'));
			});
		},
		onEnter: () => bridge.doAction('setTitle', { title: 'redux-增删操作' })
		// onEnter: () => bridge.doAction('setWechat')
	}
}