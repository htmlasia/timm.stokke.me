/*
 * Main JS
 */

$(document).ready(function() {

	// Avatar animations
	window.setTimeout(function() {
		$('.avatar').addClass('fadeInLeft').removeClass('invisible');
	}, 1000);


	// Headroom.js
	$('#headroom').headroom({
		"tolerance": 5,
		"offset": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideInDown",
			"unpinned": "slideOutUp"
		}
	});

	// Attempt to track link clicls:
	$('a').click(function(e) {

		var $this = $(this),
			href = $this.attr('href');

		// Send to GA:
		_gaq.push(['_trackEvent', 'Clicks', 'Visit', href]);

	});

	// Track how far the user scrolls
	// http://scrolldepth.parsnip.io/
	$.scrollDepth({
		minHeight: 2000
	});

	// Generic "show element" style snippet
	// todo: http://visionmedia.github.io/move.js/
	$('.js-expand').click(function(e){

		e.preventDefault();

		var $this = $(this),
			data = $this.data(),
			$target = $(data.target),
			targetAnimationIn = data.animationIn,
			targetAnimationOut = data.animationOut,
			btnAnimationOut = data.btnAnimationOut,
			hideTriggerAfterClick = data.hideTrigger,
			toggle = data.toggle;

		if (targetAnimationIn === undefined) {
			targetAnimationIn = 'slideInLeft';
		}

		if (targetAnimationOut === undefined) {
			targetAnimationOut = 'slideOutLeft';
		}

		if (btnAnimationOut === undefined) {
			btnAnimationOut = 'flipOutX';
		}

		if (hideTriggerAfterClick === undefined) {
			hideTriggerAfterClick = true;
		}

		if (toggle === undefined) {
			toggle = true;
		}

		// If target is active already, reset:
		if ($target.hasClass(targetAnimationIn) && toggle == true) {

			$target.removeClass(targetAnimationIn).addClass(targetAnimationOut);

			$target.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
				$target.addClass('hide invisible');
			});

		} else {

			$target.removeClass('hide invisible').removeClass(targetAnimationOut).addClass(targetAnimationIn);

		}

		if (hideTriggerAfterClick != false) {
			$this.addClass('animated ' + btnAnimationOut);
		}

	});

	// Carousel:
	$(".owl-carousel").owlCarousel({
		singleItem:true,
		lazyLoad : true,
		autoHeight : true,
		addClassActive : true,
		afterMove : toggleBrowserChrome
	});

	function toggleBrowserChrome(elem) {

		var $this = $(elem),
			$activeSlide = $this.find('.active'),
			$cover = $activeSlide.find('.cover'),
			$chrome = $this.parents('.browser').find('.chrome');
			showChrome = $activeSlide.find('div').data('showChrome');

			$chrome.removeClass('invisible');

			if (showChrome == 'on') {
				$chrome.removeClass('flipOutX').addClass('flipInX');
			} else {
				$chrome.addClass('flipOutX').removeClass('flipInX');
			}
	}

	// Custom Navigation Events
	$(".next-slide").click(function(){

		var $this = $(this),
			$owl = $this.parents('.owl-carousel');

		$owl.trigger('owl.next');
	})

	// Smooth scroll to #target's.
	// From: http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-7 // gives that top branding :P
				}, 400);
				return false;
			}
		}
	});

	// Animate timeline
	// Delay animations on history timeline
	$('#timeline').waypoint({
		//horizontal: true,
  		offset: '70%',
		handler: animateTimelineNodes
	});


	// Loop though timeline nodes and animate them after delay
	function animateTimelineNodes(selector) {

		// http://stackoverflow.com/questions/19597735/animate-each-child-jquery
		$('.timeline-node').not('.hide').each(function(i) {
			delay =(i)*200;
			setTimeout(function (div) {
				div.show().addClass('animated flipInX').removeClass('invisible');
			}, delay, $(this));
		});

	};

});

// Pre-Define HTML5 Elements in IE
// From: https://gist.github.com/benplum/8045366
(function(){ var els = "source|address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|picture|progress|ruby|section|time|video".split('|'); for(var i = 0; i < els.length; i++) { document.createElement(els[i]); } } )();
