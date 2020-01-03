// 获取div元素
var divBox = document.getElementById("divBox");
var divs = divBox.getElementsByTagName("div");

// 阻止默认行为
function allowDrop(ev)  
{  
	ev.preventDefault();  				
	ev.stopPropagation();
	// var i = document.createElement("i");
	// ev.target.appendChild(i);
	// ev.target.removeChild(i)
}  
  
var srcdiv = null;  
// 设置被拖动的类型和值
function drag(ev,divdom)  
{  	
	// ev.target.style.border = "1px solid #afadaf";
	srcdiv=divdom;  
	ev.dataTransfer.setData("text/html",divdom.innerHTML);  		
}  

// 放置追加目标元素
function drop(ev,divdom)  
{ 
	ev.preventDefault();  
	if(srcdiv != divdom){  
	srcdiv.innerHTML = divdom.innerHTML;  
	divdom.innerHTML=ev.dataTransfer.getData("text/html");  
	// 该列头部小标签
	var span = document.createElement("span");
	span.innerText = "▼";
	// 左侧箭头
	var icon = document.createElement("span");
	icon.innerHTML = "<img src='./img/right.jpg' />"
	// 初始化
	for(var i=0 ;i<divs.length; i++){
		// divs[i].className = "none";
	}
	
	// 添加节点
	ev.target.appendChild(span);
	ev.target.appendChild(icon);
	ev.target.className = "change"
	
}  
}  