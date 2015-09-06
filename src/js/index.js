(function(global, $, undefined){
	'use strict';
	
	var $panel = null;
	var $inputImage = null;
	var $view_image = null
	var inputIamgeTemplate = null;
	var timerID = -1;
	
	
	init();
	initEvent();

	function init () {
		$panel = $('.panel');
	}

	function initEvent () {
		imageGet(); // 이미지 가져오기

		// 첫 화면에 이미지 보이기
		$view_image = $('.car_image_1');
		$('.car_image_1').addClass('view');
		
		// 자동재생 시작
		$('.play').on('click', function(){
			autoPlayStart();
		});

		// 자동재생 멈춤
		$('.stop').on('click', function(paly){
			autoPlayStop();
		});
		

		// 다음 사진 보기
		$('.next').on('click', function(){
			nextView();
		});

		// 이전 사진 보기
		$('.prev').on('click', function(){
			prevView();
		});
	}

	// 이미지 가져오기
	function imageGet(){
		for(var i = 1; i < 60; i++) {
			inputIamgeTemplate = '<img src="images/'+i+'.jpg" alt class="car_image_'+i+'"/>';
			// console.log(inputIamgeTemplate);
			$inputImage = $(inputIamgeTemplate);
			$panel.append($inputImage);
		}
		autoPlayStart();
	}

	// 다음 사진 보기
	function nextView(){
		var $temp = $view_image.next();
		console.log($temp);
		if($temp.length === 0) {
			$temp = $('.car_image_1');
		}
		$view_image.removeClass('view');
		$temp.addClass('view');
		$view_image = $temp;

	}

	// 이전 사진 보기
	function prevView(){
		var $temp = $view_image.prev();
		console.log($temp);
		if($temp.length === 0) {
			$temp = $('.car_image_59');
		}
		$view_image.removeClass('view');
		$temp.addClass('view');
		$view_image = $temp;
	}

	function autoPlayStart () {
		if(timerID === -1) {
			timerID = setInterval(function(){
				nextView();
			},100);
		}
	}

	function autoPlayStop () {
		clearInterval(timerID);
		timerID = -1;
	}


})(window, window.jQuery);