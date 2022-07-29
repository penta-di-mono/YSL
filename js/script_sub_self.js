$(function(){
	

	$('header a.logo').animate({'left':'-10%'},500,'linear');
	$('header nav.leftmenu').animate({'left':'-10%'},500,'linear');
	$('header nav.rightmenu').animate({'right':'-10%'},500,'linear');

	// 어사이드
	$('aside ul li:nth-child(1) span').on('mouseover',function(){
		$(this).stop().animate({width:70},500,'swing')
	});
	$('aside ul li:nth-child(2) span').on('mouseover',function(){
		$(this).stop().animate({width:40},500,'swing')
	});
	$('aside ul li:nth-child(3) span').on('mouseover',function(){
		$(this).stop().animate({width:60},500,'swing')
	});
	$('aside ul li a').mouseout(function(){
		$('aside ul li:nth-child(1) span').stop().delay(300).animate({width:12.5},500,'swing');
		$('aside ul li:nth-child(2) span').stop().delay(300).animate({width:9.5},500,'swing');
		$('aside ul li:nth-child(3) span').stop().delay(300).animate({width:9},500,'swing');
	});
	
	// 마이페이지
	$('aside ul li:nth-child(1) span').click(function(event){
		event.preventDefault();
		$('div.back.login').removeClass('black');
		$('div.back.login div.modal.mypage').animate({marginRight:0},500,'swing');
	});
	$('div.modal.mypage p.close').click(function(event){
		event.preventDefault();
		$('div.back.login div.modal.mypage').animate({marginRight:'-28%'},500,'swing',function(){
			$('div.back.login').addClass('black');
		});
	});

	// 장바구니
	$('aside ul li:nth-child(2) span').click(function(event){
		event.preventDefault();
		$('div.back.mycart').removeClass('black');
		$('div.back.mycart div.modal.cart').animate({marginRight:0},500,'swing');
	});
	$('div.back.mycart div.modal.cart button.closebtn').click(function(){
		$('div.modal.cart').animate({marginRight:'-28%'},500,'swing',function(){
			$('div.back.mycart').addClass('black');
		});
	});

	// 고객서비스
	$('aside ul li:nth-child(3) span').click(function(event){
		event.preventDefault();
		$('div.back.myser').removeClass('black');
		$('div.back.myser div.modal.service').animate({marginRight:0},500,'swing');
	});
	$('div.modal.service p.close').click(function(event){
		event.preventDefault();
		$('div.modal.service').animate({marginRight:'-28%'},500,'swing',function(){
			$('div.back.myser').addClass('black');
		});
	});

	// 네비게이션
	// 1단계
	$('ul.at1st>li>a.mainmenu').click(function(){
		if($('ul.at2nd>li>a.subnmenu').is(':visible')){
			$('ul.at2nd').slideUp(300);
			$('ul.at3rd').slideUp(300);
			$('ul.at4th').slideUp(300);
			$('ul.at1st>li>a.mainmenu').css('fontWeight','normal');
			$(this).css('fontWeight','700');
			$(this).parent().find('ul.at2nd').slideDown(300);
		}else{
			$('ul.at1st>li>a.mainmenu').css('fontWeight','normal');
			$(this).css('fontWeight','700');
			$(this).parent().find('ul.at2nd').slideDown(300);
		}
	});
	// 2단계
	$('ul.at2nd>li>a.subnmenu').click(function(){
		if($('ul.at3rd>li>a.sub02menu').is(':visible')){
			$('ul.at3rd').slideUp(300);
			$('ul.at2nd>li>a.subnmenu').css('fontWeight','normal');
			$(this).css('fontWeight','700');
			$(this).parent().find('ul.at3rd').slideDown(300);
		}else{
			$('ul.at2nd>li>a.subnmenu').css('fontWeight','normal');
			$(this).css('fontWeight','700');
			$(this).parent().find('ul.at3rd').slideDown(300);
		}
	});
	// 3단계
	$('ul.at3rd>li>a.sub02menu').click(function(){
		if($('ul.at4th>li>a.sub03menu').is(':visible')){
			$('ul.at4th').slideUp(300);
			$('ul.at3rd>li>a.sub02menu').css('fontWeight','normal');
			$(this).css('fontWeight','700');
			$(this).parent().find('ul.at4th').slideDown(300);
		}else{
			$('ul.at3rd>li>a.sub02menu').css('fontWeight','normal');
			$(this).css('fontWeight','700');
			$(this).parent().find('ul.at4th').slideDown(300);
		}
	});
	$('ul.at2nd>li').on('click',function(){
		var index = $(this).index();
		console.log(index);
		$('section.selfindex div.selfwrap').removeClass('show');
		$('section.selfindex div.selfwrap').eq(index).addClass('show');
	})

	// 바탕 누르면 네비게이션 접히기
	$('div.blank').click(function(){
		$('ul.at1st li a').css('fontWeight','normal');
		$('ul.at2nd').slideUp(300);
		$('ul.at3rd').slideUp(300);
		$('ul.at4th').slideUp(300);
	});

	// 더보기 누르면 리스트 더 나타나기
	$('div.more').on('click',function(){
		$(this).addClass('none');
		$('ul.mainNew.second').css('display','block');
	});
});