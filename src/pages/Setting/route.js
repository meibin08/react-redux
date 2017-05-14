/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例
 */
import bridge from 'src/utils/bridge';

module.exports = {
	path: 'setting',
	childRoutes: [
		
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Index'));
			});
		},
		onEnter: () => bridge.doAction('setTitle', { title: '设置' })
		// onEnter: () => bridge.doAction('setWechat')
	}
}