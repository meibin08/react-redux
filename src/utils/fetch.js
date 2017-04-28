import promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
import StaticToast from 'src/components/common/Toast';

promise.polyfill();


export const fetchJson = (options) => {
  const { url, type, data, ...others } = options;

  Loading(true);

  let opts = {
	...others,
	method: type || 'get',
	credentials: 'include',
	headers: {
	  'Accept': 'application/json',
	  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
  }
  if(['POST'].indexOf(opts.method.toUpperCase()) >= 0){
	opts.body = jsonConvert(data);

  }else if (['PUT'].indexOf(opts.method.toUpperCase()) >= 0) {
	opts.body = JSON.stringify(data)

  }
  fetch(url, opts)
	.then(resData => toJson(resData, opts))
	.then(resData => resHandler(resData, opts))
	// .catch(error => errorHandler(error, opts))
}

function toJson(resp, options) {
  if (resp.status >= 400) {
	return errorHandler(null, options, resp.status)
  }
  return resp.json()
}

// 请求成功处理
function resHandler(resData, options) { 
  Loading(false);
  if (resData.status && resData.status != 200) {
	return errorHandler(resData.error, options, resData.status);
  }

  if (!resData || resData.code > 10000) {
	options.error && options.error(resData)
	console.log(resData)
	StaticToast.error(resData.error);
  } else {
	options.success && options.success(resData);
  }
}

// 异常处理
function errorHandler(error, options, status) {
  Loading(false);
  options.error && options.error(error);
  StaticToast.error(`网络异常，请稍后重试(${status})`)
}

function Loading(IsShow){
	var loading = document.querySelector('#loadTips');
	if(!loading&&!IsShow){
	  return ;
	};
	if(loading){
		loading.className=!IsShow?"wb-fix hide":"wb-fix";
	}else{
		var str = '<div class="ui-loading ui-loading-open" ><div class="ui-loading-container"><div class="ui-loading-items" ><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item"></div><div class="ui-loading-item"></div></div></div><div class="ui-mask transparent"></div></div>';
		var CreateLoad = document.createElement("div");
		CreateLoad.id="loadTips";
		CreateLoad.className=!IsShow?"wb-fix hide":"wb-fix";
		CreateLoad.innerHTML=(str);
		document.body.appendChild(CreateLoad);
	};
};

function urlEncode(param, key, encode) {
	if(param==null) return '';
		var paramStr = '';
		var t = typeof (param);
		if (t == 'string' || t == 'number' || t == 'boolean') {
		paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
	} else {
		for (var i in param) {
			var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
			paramStr += urlEncode(param[i], k, encode);
		};
	};
	return paramStr;
};
function jsonConvert(param, key, encode){
	var ret = (urlEncode(param, key, encode)).substring(1);
	console.log(ret)
	return ret;
}