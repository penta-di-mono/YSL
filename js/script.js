$(function(){
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
	// 바탕 누르면 네비게이션 접히기
	$('div.blank').click(function(){
		$('ul.at1st li a').css('fontWeight','normal');
		$('ul.at2nd').slideUp(300);
		$('ul.at3rd').slideUp(300);
		$('ul.at4th').slideUp(300);
	});

	// 레디 투 웨어 - 화살표.right
	$('section#first p.right').on('click',function(){
		// 다섯번째 화보가 보이면 p를 비활성화 해주세요.
		if($('div.new div.new5th').is(':visible')){
			$(this).children('i').addClass('workoff');
			//세번째 화보가 보이면 5,6번째 화보의 off클래스를 없애고 움직여주세요.
		}else if($('div.new div.new3rd').is(':visible')){
			$('div.new div.new5th').removeClass('off');
			$('div.new').animate({'marginLeft':'-200%'},500,'swing', function(){
				$('div.new div.new4th>span').addClass('disnone');
			});
		}else {
			// 둘다 보이지 않으면 3번째 화보의 off클래스를 없애고 움직여주세요.
			$('section#first p.left i').removeClass('workoff')
			$('div.new div.new3rd').removeClass('off');
			$('div.new').animate({'marginLeft':'-100%'},500,'swing',function(){
				$('div.new div.new1st>span').addClass('disnone');
			});
		}
		if($('div.new>div ul.itemwrap').is(':visible')){
			$('div.new>div ul.itemwrap').animate({'right':"-28%"},300,'linear',function(){
			$('ul.itemwrap').removeClass('showing');
			$('ul.itemwrap').parent('div').next().children('p').removeClass('highIndex');
			});
		}
	});
	// 레디 투 웨어 - 화살표.left
	$('section#first p.left').on('click',function(){
		// 첫번째 화보의 span이 보이면 비활성화 해주세요
		if($('div.new div.new1st>span').is(':visible')){
			$(this).children('i').addClass('workoff')
			// 4번째 화보의 span이 보이면 맨 처음으로 슬라이딩
		}else if($('div.new div.new4th>span').is(':visible')){
			$('div.new').animate({'marginLeft':0},500,'swing',function(){
				$('div.new div.new3rd').addClass('off');
				$('div.new div.new1st>span').removeClass('disnone');
			}); 
		}else {
			$('div.new').animate({'marginLeft':'-100%'},500,'swing',function(){
				$('div.new div.new5th').addClass('off');
				$('div.new div.new4th>span').removeClass('disnone');
			});
		}

		if($('div.new>div ul.itemwrap').is(':visible')){
			$('div.new>div ul.itemwrap').animate({'right':"-28%"},300,'linear',function(){
			$('ul.itemwrap').removeClass('showing');
			$('ul.itemwrap').parent('div').next().children('p').removeClass('highIndex');
			});
		}
	});

	// 레디 투 웨어 - 다른 시즌 네비게이션
	$('div.awrap ul li:nth-child(1) span').click(function(){
		$('div.new').addClass('off');
		$('div.sum22woman:nth-child(1)>span').removeClass();
		$('div.sum22woman:nth-child(4)>span').removeClass();
		$('div.sum22woman:nth-child(3)').addClass('off');
		$('div.sum22woman:nth-child(5)').addClass('off');
		$('div.new').css('marginLeft','0%');
		$('div.new.sum22wo').removeClass('off');
		$('section#first p.arrow>i').removeClass('workoff');
		$('section#first div.awrap ul li').removeClass();
		$('section#first div.awrap ul li:nth-child(1)').addClass('select')
	});
	$('div.awrap ul li:nth-child(3) span').click(function(){
		$('div.new').addClass('off');
		$('div.spr22woman:nth-child(1)>span').removeClass();
		$('div.spr22woman:nth-child(4)>span').removeClass();
		$('div.spr22woman:nth-child(3)').addClass('off');
		$('div.spr22woman:nth-child(5)').addClass('off');
		$('div.new').css('marginLeft','0');
		$('div.new.spring22wo').removeClass('off');
		$('section#first p.arrow>i').removeClass('workoff');
		$('section#first div.awrap ul li').removeClass();
		$('section#first div.awrap ul li:nth-child(3)').addClass('select')
	});
	$('div.awrap ul li:nth-child(5) span').click(function(){
		$('div.new').addClass('off');
		$('div.sprsum22man:nth-child(1)>span').removeClass();
		$('div.sprsum22man:nth-child(4)>span').removeClass();
		$('div.sprsum22man:nth-child(3)').addClass('off');
		$('div.sprsum22man:nth-child(5)').addClass('off');
		$('div.new').css('marginLeft','0');
		$('div.new.ss22man').removeClass('off');
		$('section#first p.arrow>i').removeClass('workoff');
		$('section#first div.awrap ul li').removeClass();
		$('section#first div.awrap ul li:nth-child(5)').addClass('select')
	});

	//레디 투 웨어 - 아이템보기 
	$('div.new div p').on('mouseover',function(){
		$(this).children('span').show();
	});


	// 레디 투 웨어 - 아이템슬라이드
	$('article.frame div.new div p span').on('click',function(){
		$(this).parent('p').parent('div').next().children('p').addClass('highIndex');
		$(this).parent('p').parent('div').children('ul.itemwrap').addClass('showing')
		$(this).parent('p').parent('div').children('ul.itemwrap').animate({'right':"-.5%"},300,'linear');
	});
	$('ul.itemwrap li.close').on('click', function(event){
		event.preventDefault();
		$(this).parent('ul.itemwrap').animate ({'right':"-28%"},300,'linear',function(){
			$('ul.itemwrap').removeClass('showing');
			$('ul.itemwrap').parent('div').next().children('p').removeClass('highIndex');
		});
	});

	// 클래식 아이템
	setInterval(function(){
		$('section#second div.classwrap ul:first-child').fadeOut(800).next().fadeIn(800).end().appendTo('section#second div.classwrap');
	},5000);

	// SUSTAINABILITY
	$('section#third div.sustainmenu ul>li').on('click',function(){
		var index = $(this).index();
		console.log(index)
		$('article.sustainability div.sustain').hide();
		$('article.sustainability div.sustain').eq(index).fadeIn(300);
	});
});
