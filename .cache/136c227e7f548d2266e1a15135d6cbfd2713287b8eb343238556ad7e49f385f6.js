{"source":"webpackJsonp([3],{579:function(e,t,n){\"use strict\";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return{_introList:e.introIndex.introList}}function r(e){return{ACTIONS:(0,k.bindActionCreators)(L.default,e)}}Object.defineProperty(t,\"__esModule\",{value:!0});var c=n(587),u=a(c),i=n(318),s=a(i),o=n(316),f=a(o),d=n(317),m=a(d),p=n(319),E=a(p),N=n(320),v=a(N),h=n(1),g=a(h),k=n(71),_=n(322),w=n(3),x=a(w),C=(n(51),n(321)),b=(n(116),n(50)),y=(a(b),n(583)),I=(a(y),n(584)),A=a(I),O=n(585),L=a(O);n(611);var M=function(e){function t(e){(0,f.default)(this,t);var n=(0,E.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return n.state={},n}return(0,v.default)(t,e),(0,m.default)(t,[{key:\"componentDidMount\",value:function(){(0,A.default)(this),this.props.ACTIONS.introInit()}},{key:\"render\",value:function(){var e=this.props,t=e._introList,a=e.ACTIONS;return g.default.createElement(\"section\",{className:\"i-introduction\"},g.default.createElement(\"header\",{className:\"hd\"},g.default.createElement(\"p\",{className:\"message\"},\"Hi, 以下是Redux的基\",g.default.createElement(\"br\",null),\"本理念介绍\"),g.default.createElement(\"p\",{className:\"logo\"},g.default.createElement(\"img\",{src:n(612)}))),g.default.createElement(\"div\",{className:\"list\"},g.default.createElement(\"h2\",{className:\"tit\"},\"其实我也是瞎掰的，哈哈~~\"),t.map(function(e,t){return g.default.createElement(\"section\",{id:e.id,className:(0,x.default)(\"faq-row\",{active:e.status}),key:\"abc\"+e.id},g.default.createElement(C.Cell,{type:\"link\",title:e.title,onClick:function(){return a.toggle(e.id)},icon:g.default.createElement(S,{herf:n(613)+\"#svg-contact1\"})}),g.default.createElement(\"ul\",{className:\"row-list\"},e.children.map(function(e,t){return g.default.createElement(\"li\",{className:\"item\",key:e.id},\"\"!=e.title?g.default.createElement(\"h3\",{className:\"row-title\"},e.title):null,g.default.createElement(\"div\",{className:\"content\"},e.content))})))})))}}]),t}(h.Component),S=function(e){return g.default.createElement(\"svg\",{className:(0,x.default)(\"contact-svg\",(0,u.default)({},\"\"+e.className,!!e.className))},g.default.createElement(\"use\",{xmlnsXlink:\"http://www.w3.org/1999/xlink\",xlinkHref:e.herf}))};t.default=(0,_.connect)(l,r)(M),e.exports=t.default},611:function(e,t){},612:function(e,t,n){e.exports=n.p+\"fonts/logo.3d593052.svg\"},613:function(e,t,n){e.exports=n.p+\"fonts/icon.5b38262a.svg\"}});","map":null}