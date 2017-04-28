import { isNotEmpty, isIdCard } from './validate';
import Events from './events';

const format = {

  // 格式化日期
  date: function (date, fmt) {
	if (!date || !fmt) {
	  return date;
	}
	if (date.length == 8) {
	  date = date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2)
	}
	date = new Date(date.toString().replace(/-/g, "/"));
	var o = {
	  "M+": date.getMonth() + 1, //月份
	  "d+": date.getDate(), //日
	  "h+": date.getHours(), //小时
	  "m+": date.getMinutes(), //分
	  "s+": date.getSeconds(), //秒
	  "q+": Math.floor((date.getMonth() + 3) / 3), //季度
	  "S": date.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
  },

  // 根据身份证获取出生年月
  getBirthdayByIdCard(idCard) {
	if (!isIdCard(idCard)) {
	  return;
	}
	let tmpStr;
	if (idCard.length == 15) {
	  tmpStr = idCard.substring(6, 12);
	  tmpStr = "19" + tmpStr;
	  tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
	  return tmpStr;
	} else {
	  tmpStr = idCard.substring(6, 14);
	  tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
	  return tmpStr;
	}
  },

  // 根据身份证获取性别
  getSexByIdCard(idCard) {
	if (!isIdCard(idCard)) {
	  return;
	}
	return (parseInt(idCard.substr(16, 1)) % 2)
  },
  decimal(val,matrixing){
  	var Rate  = 100;
  	if(matrixing){Rate=matrixing;};
	if(isNaN(val)){
	  return (0).toFixed(2);
	};
	if(!isNaN(Rate)){
		return (parseFloat(val)/Rate).toFixed(2);
	};
	return (parseFloat(val)).toFixed(2);
  },
  DisableScroll(status,node){
  	let Node = (node&&document.querySelector(node))||'';
  	
	if(status){
	  Events.on((Node||document), 'touchmove', stopTouchmove);
	}else{
	  Events.off((Node||document), 'touchmove', stopTouchmove);
	};
	function stopTouchmove(e){
		e.preventDefault();
	}
  },
  getConvertWeek(date) { //日期转换周几
		if(!date){
			return '';
		}
		var day = new Date(date); //将日期值格式化
		var week = ["日","一","二","三","四","五","六"];
		var result = "周"+week[day.getDay()];
		return result;
	},
	n(num){
		if(num<10){
			return '0'+num;
		};
		return ''+num;
	}
};

module.exports = format;