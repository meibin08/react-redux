/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description： 示例 - 数据源
 */

let data = [
	{
		title:"动机",
		id:"base_001",
		status:true,
		children:[
			{
				title:"",
				id:"base_00101",
				content:"随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。"
			},
			{
				title:"",
				id:"base_00102",
				content:"管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。"
			},{
				title:"",
				id:"base_00103",
				content:"如果这还不够糟糕，考虑一些来自前端开发领域的新需求，如更新调优、服务端渲染、路由跳转前请求数据等等。前端开发者正在经受前所未有的复杂性，难道就这么放弃了吗？当然不是。"
			},
			{
				title:"",
				id:"base_00104",
				content:"这里的复杂性很大程度上来自于：我们总是将两个难以理清的概念混淆在一起：变化和异步。 我称它们为曼妥思和可乐。如果把二者分开，能做的很好，但混到一起，就变得一团糟。一些库如 React 试图在视图层禁止异步和直接操作 DOM 来解决这个问题。美中不足的是，React 依旧把处理 state 中数据的问题留给了你。Redux就是为了帮你解决这个问题。"
			},
			{
				title:"",
				id:"base_00105",
				content:"跟随 Flux、CQRS 和 Event Sourcing 的脚步，通过限制更新发生的时间和方式，Redux 试图让 state 的变化变得可预测。这些限制条件反映在 Redux 的三大原则中。"
			},
		]
	},
	{
		title:"三大原则",
		id:"base_002",
		status:false,
		children:[
			{
				title:"单一数据源",
				id:"base_00101",
				content:"整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。<br/>这让同构应用开发变得非常容易。来自服务端的 state 可以在无需编写更多代码的情况下被序列化并注入到客户端中。由于是单一的 state tree ，调试也变得非常容易。在开发中，你可以把应用的 state 保存在本地，从而加快开发速度。此外，受益于单一的 state tree ，以前难以实现的如“撤销/重做”这类功能也变得轻而易举。"
			},
			{
				title:"State 是只读的",
				id:"base_00202",
				content:"文字不重要，请主要看代码吧，哈哈……"
			},{
				title:"使用纯函数来执行修改",
				id:"base_00203",
				content:"正在整理中，敬请期待……"
			}
		]
	},
	{
		title:"生态系统",
		id:"base_003",
		status:false,
		children:[
			{
				title:"",
				id:"base_00301",
				content:"正在整理中，敬请期待……"
			}
		]
	},
	
];
export default data;