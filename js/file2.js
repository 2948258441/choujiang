window.onload=function(){
	var mySwiper = new Swiper ('.swiper', {
	    loop: true, // 循环模式选项
	    
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  })
}

// 监听滚动事件
window.onscroll = function() {
	// 获取滚动条位置
	// 根据滚动位置改变按钮的透明度
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementById('Button').style.opacity = '1';
	} else {
		document.getElementById('Button').style.opacity = '0';
	}
};

function button1(){
	img.src="img/箭头下(红).png";
}
function button2(){
	img.src="img/箭头下.png";
}
// 定义scrollToTop函数，用于回到页面顶部
function button0() {
  window.scrollTo({ top: 0, behavior: 'instant' });
}