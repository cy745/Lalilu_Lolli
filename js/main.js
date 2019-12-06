/*var startx, starty;
//获得角度
function getAngle(angx, angy) {
	return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
	var angx = endx - startx;
	var angy = endy - starty;
	var result = 0;

	//如果滑动距离太短
	if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
		return result;
	}

	var angle = getAngle(angx, angy);
	if (angle >= -135 && angle <= -45) {
		result = 1;
	} else if (angle > 45 && angle < 135) {
		result = 2;
	} else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
		result = 3;
	} else if (angle >= -45 && angle <= 45) {
		result = 4;
	}

	return result;
}
//手指接触屏幕*/
/*
var screenHeight = $(window).height();
var screenWidth = $(window).width();
var scrollHeight = screenHeight;
var n = 1;
document.addEventListener("touchstart", function(e) {
	startx = e.touches[0].pageX;
	starty = e.touches[0].pageY;
	document.addEventListener("touchmove", function(e) {
		var moveX = e.changedTouches[0].pageX;
		var moveY = e.changedTouches[0].pageY;
		
		setTimeout(function(){
			if ((moveY - starty) < 0 && (moveX - startx) < 20 &&(moveX - startx) > -20) {
				console.log("向上");
				$("#leftSide").animate({scrollTop: scrollHeight + "px"},{duration: 500,easing: "swing"});
				
			} else if ((moveY - starty) > 0 && (moveX - startx) < 20 &&(moveX - startx) > -20) {
				console.log("向下");
				$("#leftSide").animate({scrollTop: 0 + "px"},{duration: 500,easing: "swing"});
			}
		}, 30);
		//console.log(moveX);
	});
}, false);
*/
/*
//手指离开屏幕
document.addEventListener("touchend", function(e) {
	var endx, endy;
	endx = e.changedTouches[0].pageX;
	endy = e.changedTouches[0].pageX;
	var direction = getDirection(startx, starty, endx, endy);
	switch (direction) {
		case 0:
			console.log("点");
			break;
		case 1:
			console.log("上");
			break;
		case 2:
			console.log("下");
			break;
		case 3:
			console.log("左");
			break;
		case 4:
			console.log("右");
			break;
		default:
	}
}, false);
*/
/*

document.addEventListener("touchend", function(e) {
	var topScroll = $("#leftSide").scrollTop();
	
	if((topScroll % scrollHeight) > (screenHeight / 2)){
		$("#leftSide").animate({scrollTop: scrollHeight*n + "px"},{duration: 500,easing: "swing"});
	}else if((topScroll % scrollHeight) < (screenHeight / 2)){
		$("#leftSide").animate({scrollTop: scrollHeight*n + "px"},{duration: 500,easing: "swing"});
	}
	console.log(scrollHeight);
})
$(window).scroll(function(e){
	var leftScroll = $(window).scrollLeft();
	console.log(leftScroll);
})*/
function insInputCheakbox(n){
	for(i=1;i<=n;i++){
		$("#guideBar").append("<input type=\"checkbox\" name=\"card"+i+"\" id=\"card"+i+"\"/>");
	}
}
$(document).ready(function() {
	var card_num = $(".cardDown").length;
	console.log(card_num);
	insInputCheakbox(card_num);
});

