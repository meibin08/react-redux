
import { fetchJson } from 'src/utils/fetch'
import StaticToast from 'src/components/common/Toast';
import { isIos } from 'src/utils/validate'
import $script from 'src/utils/loadJS';

const WeiXinJssdk = '//res.wx.qq.com/open/js/jweixin-1.1.0.js';//微信SDK
let isReady = false;

let Wechat = {
	isInitialization:false,
	config : (options) => {
		if(Wechat.isInitialization&&isIos()){
	 		console.info(12,"ios返回了");
	 		return ;
	 	};
	 	isReady = false;
	 	Wechat.isInitialization = true;
		$script(WeiXinJssdk,()=>{
			fetchJson({
				url: '/v1/wechat/getSignature?url='+encodeURIComponent(location.href.split('#')[0]),
				success: (res) => {
					if(res.code == 0){
					  let r = res.value;
					  Wechat.GetInit(r,options);
					}else{
					  StaticToast.info(res.message);
					};
					if(!isIos()){
						console.log("不是ios");
						Wechat.isInitialization = false;
					};
				},
				error:()=>{
					Wechat.isInitialization = false;
				}
			});
		});
	},
	ready : (func) => {
		setTimeout(() => {
		  if (isReady) {
			func && func(wx);
		  } else {
			Wechat.ready(func);
		  };
		}, 0);
	},
	//隐藏右上角菜单
	hideOptionMenu:() => {
		wx.hideOptionMenu();
	},
	GetInit(r,options){
		const { debug, jsApiList, ready } = (options||{});
		let APIList = (jsApiList||[].concat(['openEnterpriseChat','hideOptionMenu','showOptionMenu']));
		wx.config({
			  debug: debug || __DEBUG__,
			  appId: r.appId,
			  timestamp: r.timestamp,
			  nonceStr: r.nonceStr,
			  signature: r.signature,
			  jsApiList: APIList,
			  fail: (res) => {
				alert(JSON.stringify(res))
			  }
			});
			wx.ready(() => {
				isReady = true;
				Wechat.hideOptionMenu();
			});
		wx.error((err) =>{
			isReady = true;
		  StaticToast.info(err.errMsg);
		});
	}
};

module.exports = Wechat;


