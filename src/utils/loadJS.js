
const loadJS = (src, callback) => {
  let script = document.createElement('script');
  let head = document.getElementsByTagName('head')[0];
  let loaded;

  script.src = src;

  if(typeof callback === 'function'){
    script.onload = script.onreadystatechange = function(){
      if(!loaded && (!script.readyState || /loaded|complete/.test(script.readyState))){
        script.onload = script.onreadystatechange = null;
        loaded = true;
        callback();
      }
    }
  }
  
  head.appendChild(script);
}

module.exports = loadJS