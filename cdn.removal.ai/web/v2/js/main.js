//
// This is The Scripts used for Simply Theme
//
function main() {
(function () {
   'use strict'
	//Script
	//-----------------------------------
    jQuery(document).ready(function($){
		//var wd = $(window).width();
		
		var wd = jQuery(window).width();
		if(wd < 1024){
			$('.menu-item-has-children').click(function(){
				$(this).stop().find('.sub-menu').slideToggle();
				$(this).stop().find('.rst-container-submenu').slideToggle();
				
				return false;
			});
			$('.rst-lang-menu').click(function(){
				$(this).stop().find('.rst-list-lang').slideToggle();
				return false;
			});
		}
		/* ---------------------------------------------- /*
			* MenuMobie
		/* ---------------------------------------------- */
		
		$('.rst-toggle-menu').click(function(){
			$('.header-right').slideToggle(400);
			$(this).toggleClass('exit');
			$('body').toggleClass('menu_show');
			return false;
		});
		/*
		$('.rst-lang-menu a.global').click(function(){
			$('.rst-list-lang').toggleClass('active');
			return false;
		});
		*/
		$('.rst_click_show_pass').on('click', function () {
			let input = $(this).parent().find("input");
			input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
			return false;
		});
		$('.video_tutorials').on('click', function () {
			var id = $(this).attr('href');
			 $('html, body').animate({
				scrollTop: $(id).offset().top
			  }, 800, function(){
			  });
			return false;
		});
		$(".click_show_video").click(function(){
			var url = $(this).attr('data-url');
			url = url + "?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1";
			var iframe = $(this).parent().find("iframe");
			iframe.attr("src", url); 
			$(this).closest('.container-videos').find('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
			$(this).hide()
			$(this).parents('.container-videos').find(".title-videos").hide();
			$(this).parents('.container-videos').find(".thumbnail_video").hide();
			$(this).parents('.container-videos').find('.youtube-video').addClass('active');
			return false;
		});
		$('.rst-tab-scenarios li a').click(function(){
			var id = $(this).attr('href');
			$('.rst-tab-scenarios li a').removeClass('active');
			$(this).addClass('active');
			$('.rst-list-image-scenarios').hide();
			$(id).show();
			return false;
		});
		$('.list-title-videos ul a').click(function(){
			$(".title-videos").show();
			$('.youtube-video').removeClass('active');
			$(".click_show_video").show();
			$(".thumbnail_video").show();
			$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
			var id = $(this).attr('href');
			$('.list-title-videos ul a').removeClass('active');
			$(this).addClass('active');
			$('.container-videos').hide();
			$(id).show();
			
			return false;
		});
		$('.rst-item-tab-profile a').click(function(){
			var id = $(this).attr('href');
			$('.rst-item-tab-profile a').removeClass('active');
			$(this).addClass('active');
			$('.tab-profile').hide();
			$(id).show();
			return false;
		});
		$('.logged').click(function(){
			$('.menu-account').toggleClass('active');
			return false;
		});
		$('.rst-button-drop').click(function(){
			$('.rst-button-download').toggleClass('open');
			return false;
		});
		
		$('.field-item-radio label').click(function(){
			$('.field-item-radio label').parent().find('input').prop('checked', false);
			$(this).parent().find('input').prop('checked', true);
			$('.field-item-radio label').removeClass('active');
			$(this).addClass('active');
			return false;
		});
		
		$('.rst-tab-login a').click(function(){
			var id = $(this).attr('href');
			$('.rst-tab-login a').removeClass('active');
			$(this).addClass('active');
			$('.rst-inner-tabs-login').hide();
			$(id).show();
			return false;
		});
		
		$('.tab-your-company ul li a').click(function(){
			var id = $(this).attr('href');
			$('.tab-your-company ul li a').removeClass('active');
			$(this).addClass('active');
			$('.inner-content-your-company').hide();
			$(id).show();
			return false;
		});
		$('.rst-title-faq').click(function(){
			if($(this).hasClass('active')){
				$(this).parent().find('.rst-content-faq').slideUp();
				$(this).removeClass('active');
			}else{
				$('.rst-content-faq').slideUp();
				$(this).parent().find('.rst-content-faq').slideDown();
				$('.rst-title-faq').removeClass('active');
				$(this).addClass('active');
			}
			return false;
		});
		
		$('.rst-heading-box-benefits').click(function(){
			if($(this).parents('.rst-box-benefits').hasClass('active')){
				$(this).parents('.rst-box-benefits').find('.rst-show-content-box-benefits').slideUp();
				$(this).parents('.rst-box-benefits').find('.rst-image-box-benefits').slideUp();
				$(this).parents('.rst-box-benefits').removeClass('active');
			}else{
				$('.rst-box-benefits .rst-show-content-box-benefits').slideUp();
				$('.rst-image-box-benefits').slideUp();
				$(this).parents('.rst-box-benefits').find('.rst-show-content-box-benefits').slideDown();
				$(this).parents('.rst-box-benefits').find('.rst-image-box-benefits').slideDown();
				$('.rst-box-benefits').removeClass('active');
				$(this).parents('.rst-box-benefits').addClass('active');
			}
			return false;
		});
		
		$('.rm-pricing--package').click(function(){
			$('.rm-pricing--package').removeClass('active');
			$(this).addClass('active');
			// Uncheck
			$(".rm-pricing--package-input").attr("checked", false);
			// Check
			$(this).find('.rm-pricing--package-input').attr("checked", true);
			var price = $(this).find('.rm-pricing--package-avg').attr('data-avg');
			$(this).parents('.rm-pricing__table').find('.price_select').text(price);
			return false;
		});
		$('.package_showmore').click(function(){
			$(this).parents('.rm-pricing__table-content').find('.rm-pricing--package').removeClass('hidden');
			$(this).hide();
			return false;
		});
		$('.close_popup,.overlay ').click(function(){
			$('.overlay').removeClass('show');
			$('.popup-wrap').removeClass('show');
			return false;
		});
		$('.rst_popup_help').click(function(){
			var id = $(this).attr('href');
			$('.overlay').addClass('show');
			$('.popup-wrap').removeClass('show');
			$(id).addClass('show');
			return false;
		});
		
		$('.x-button-drop').click(function(){
			$(this).parent().toggleClass('open');
			return false;
		});
		
		$('.rst-menu-tab-who li a').click(function(){
			var id = $(this).attr('href');
			var index = $(this).attr('data-index');
			$('.rst-menu-tab-who li a').removeClass('active');
			$(this).addClass('active');
			$('.image-who-tab').removeClass('lever1');
			$('.image-who-tab').removeClass('lever2');
			$('.image-who-tab').removeClass('lever3');
			$(id+'_image').addClass('lever1');
			$(id+'_image').next().addClass('lever2');
			$(id+'_image').next().next().addClass('lever3');
			if(index == 5){
				$('#who_tab1_image').addClass('lever3');
				//$('#who_tab2_image').addClass('lever3');
			}
			if(index == 6){
				$('#who_tab1_image').addClass('lever2');
				$('#who_tab2_image').addClass('lever3');
			}
			$('.content-who-tab').hide();
			$(id).show();
			return false;
		});
		$('.slider-testimonials').slick({
			slidesToShow: 3,
			slidesToScroll: 2,
			autoplay: false,
			adaptiveHeight: true,
			autoplaySpeed: 2000,
			dots: false,
			cssEase: 'cubic-bezier(.3, .86, .36, .95)',
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
			  }
			}
			
		  ]
		});
		if(jQuery('.twentytwenty-container').length){
			jQuery(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5});
		}

	});
	
	

	//---------------- fixed -----------------
	jQuery(window).scroll(function($) {	
		
		var hg_scroll = jQuery(window).scrollTop();
		if (jQuery(this).scrollTop() > 1) {
			jQuery('header').stop().addClass('rst_sticky');
			
		} else {
			jQuery('header').stop().removeClass('rst_sticky');
			
		}
		/*
		if (jQuery(this).scrollTop() > 200) {
			jQuery('.rst_sticky').stop().addClass('header-fixed-show');
		} else {
			jQuery('.rst_sticky').stop().removeClass('header-fixed-show');
		}
		*/
		
	});
	
}());
}
main();