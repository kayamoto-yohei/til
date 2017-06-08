// sp menu
$(function(){
  var $wrap = $('#wrap');
  var $spBtn = $('#globalNav-spTrigger');
  var $spMenu = $('.globalNav-sp');
  var state = false;

  $spBtn.on('click', function(){
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $wrap.addClass('is-open');
      $spMenu.fadeIn();
      state = true;
    } else {
      $wrap.removeClass('is-open');
      $spMenu.fadeOut();
      window.scrollTo( 0 , scrollpos );
      state = false;
    }
  });
});

// 宿泊 modal
$(function(){
  $('.BottomBox_reserveBtn').on('click', function(){
    $('.overlay').fadeIn();
  });
  $('.searchBox_closeBtn').on('click', function(){
    $('.overlay').fadeOut();
  });
});


// 画像切り替え
$(function(){
		var $setElem = $('.switch'),
		pcName = '_pc',
		spName = '_sp',
		replaceWidth = 769;
 
		$setElem.each(function(){
				var $this = $(this);
				function imgSize(){
						var windowWidth = parseInt($(window).width());
						if(windowWidth >= replaceWidth) {
								$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
						} else if(windowWidth < replaceWidth) {
								$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
						}
				}
				$(window).resize(function(){imgSize();});
				imgSize();
		});
});

// スクロールトップ
$(function() {
    var topBtn = $('#pageTop');
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// スムーズスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// globalNav プルダウンメニュー
$(function(){
  var gNavBtn = $('.globalNav-pc_listRestaurant');

  gNavBtn.hover(function(e){
    var target = $(this).children('.globalNav-pc_listChild');
    target.stop().slideDown();
  },
  function(e){
    var target = $(this).children('.globalNav-pc_listChild');
    target.stop().slideUp();
  }
  );
});
