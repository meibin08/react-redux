
import { fetchJson } from 'src/utils/fetch'
import StaticToast from 'src/components/common/Toast';
import StaticLoad from 'src/components/common/Loading';
import { isIos } from 'src/utils/validate'
import $script from 'src/utils/loadJS';

const aMapUrl = "//webapi.amap.com/maps?v=1.3&key=d7994333dff1e479f9f57d12c48a8b23";

let isReady = false;

let aMap = {
	isInitialization:false,
	config : (func) => {
	 	isReady = false;
		StaticLoad.show("a");
		$script(aMapUrl,()=>{
			// console.log(AMap);
			isReady= true;
			aMap.ready(func);
		});
	},
	ready : (func) => {
		setTimeout(() => {
		  if (isReady && AMap && AMap.hasOwnProperty("Map")) {
			func && func(AMap);
			StaticLoad.remove("a");
		  } else {
			aMap.ready(func);
		  };
		}, 0);
	},
	getLocation:(options)=>{
		let {map,complete,error}= options;
		let geolocation;
		StaticLoad.show("b");
		map.plugin('AMap.Geolocation',()=>{
			geolocation = new AMap.Geolocation({
	            enableHighAccuracy: true,//是否使用高精度定位，默认:true
	            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
	            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	            zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
	        });
	        map.addControl(geolocation);
	        // geolocation.setAnimation('AMAP_ANIMATION_BOUNCE');
	        geolocation.getCurrentPosition();

	        //返回定位信息
	        AMap.event.addListener(geolocation, 'complete',(data)=>{
	        	complete&&complete(data);
	        	StaticLoad.remove("b");
	        });

	        //返回定位出错信息
	        AMap.event.addListener(geolocation, 'error', (res)=>{
	        	StaticToast.error("定位失败,请检查是否开启 '允许定位' 功能");
	        	error&&error(res);
	        	StaticLoad.remove("b");
	        });
		});
	}
};

module.exports = aMap;


