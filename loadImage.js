'use strict'
/*
 * 预加载图片函数
 * @param images 加载图片的数组或者对象
 * @param callback 全部图片加载完毕后的回调函数
 * @param timeout 加载超时的时长
*/
function loadImage(images, callback, timeout){
	//加载完成图片的计数器
	var count = 0;
	//全部图片加载成功的一个标志位
	var success = true;
	//超时timer的id
	var timeoutId = 0;
	//是否加载超时的标志
	var isTimeout = false;
	
	//对图片数组（或对象）进行遍历
	for(var key in images){
		//过滤原型上的属性
		if(!images.hasOwnProperty(key)){
			continue;
		}
		//获得每个图片元素
		//期望格式是object: {src:xxx}
		var item = images[key];
		
		if(typeof item === 'string'){
			item = images[key] = { src : item };
		}
		
		//如果格式不满足期望，则舍弃该item进行下一次遍历
		if( !item || !item.src){
			continue;
		}
		
		//满足item期望值则把计数值count++
		count++;
		//设置图片元素的id
		item.id = '__preLoadImage_'+ key + getId();
		//设置图片元素的img，它是一个Image对象
		item.img = window[item.id] = new Image();
		doLoad(item);
	}
	
	//遍历完成如果计数为0时（空数组），则直接调用callback回调函数
	if(!count){
		callback(success);
	}else if (timeout){
		timeoutId = setTimeout(onTimeout,timeout);
	}
	
}

//getId闭包，确保每次的id都不同
var __id = 0;
function getId(){
	return ++__id;
}

/*
 * 真正进行图片加载的函数
 * @param imgObj 图片元素对象
*/
function doLoad(imgObj){
	imgObj.state = 'loading';
	var img = imgObj.img;
	//定义图片加载成功的回调函数
	img.onload = function(){
		success = success & true;
		imgObj.state = 'ready';
		done(imgObj.id);
	}
	//定义图片加载失败的回调函数
	img.onerror = function(){
		success = false;
		imgObj.state = 'error';
		done(imgObj.id);
	}
	//设置Image对象的src
	img.src = imgObj.src;
}

/*
 *每张图片加载完成的回调函数  
*/
function done(itemId){
	//清空方法、变量，释放内存
	img.onload = img.onerror = null;
	try{
		delete window[itemId]
	}catch(e){
		
	}
	//每张图片加载完成，计数器count--
	//当所有图片加载完成且没有超时的情况下，清除超时计时器并执行callback
	if(!--count == 0 && !isTimeout){
		clearTimeout(timeoutId)
		callback(success);
	}
}

/*
 * 超时函数
*/
function onTimeout(){
	isTimeout = true;
}


module.export = loadImage;
