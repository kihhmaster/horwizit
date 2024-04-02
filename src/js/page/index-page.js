import $, { event } from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);

import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs, EffectFade, EffectCoverflow, EffectCards,  } from 'swiper'
Swiper.use([Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs, EffectFade, EffectCoverflow, EffectCards]);


//прелоадер project-preloader 
// function animationPreloader(){
// 	console.log("animationPreloader")
// 	$(".js-project-preloader").on("click", function(e) {
// 		var arrayData = this.getAttribute('data-img');
// 		var arr = arrayData.split(';');
// 		$( ".project-preloader__picture" ).each(function(index) {
// 			$( this ).css('background-image', 'url(' + arr[index] + ')');
// 		});
// 		$(".project-preloader").addClass("active")
// 		$.each($('.project-preloader__picture'), function(i, el) {
// 			setTimeout(function() {
// 				$(el).addClass("active");
// 			}, 50 + (i * 1500));
// 			setTimeout(function() {
// 				$(".project-preloader").addClass("no-active")
// 			}, 5800);
// 			setTimeout(function() {
// 				$(".project-preloader").removeClass("active")
// 				$(".project-preloader").removeClass("no-active")
// 				$(el).removeClass("active");
// 			}, 6500);
	
// 		});
// 	})
// }
$(".js-project-preloader").on("click", function(e) {
	e.preventDefault();
	var arrayData = this.getAttribute('data-img');
	var href = $(this).attr('href');
	var arr = arrayData.split(';');
	$( ".project-preloader__picture" ).each(function(index) {
		$( this ).css('background-image', 'url(' + arr[index] + ')');
	});
	$(".project-preloader").addClass("active")
	$.each($('.project-preloader__picture'), function(i, el) {
		setTimeout(function() {
			$(el).addClass("active");
		}, 50 + (i * 1500));
		setTimeout(function() {
			$(".project-preloader").addClass("no-active")
		}, 5800);
		setTimeout(function() {
			$(".project-preloader").removeClass("active")
			$(".project-preloader").removeClass("no-active")
			$(el).removeClass("active");
		}, 6500);
		setTimeout(function() {
			window.location.href = href;
		}, 6450);

	});
})


$('.contacts__form__input').on('input', function (e) {
	var state = e.target.value;
	if (state.length > 0) {
		$(this).addClass( "value" );
	} else {
		$(this).removeClass( "value" );
	}
});
$('.contacts__form__textarea').on('input', function (e) {
var state = e.target.value;
if (state.length > 0) {
	$(this).addClass( "value" );
} else {
	$(this).removeClass( "value" );
}
});

$(".js-modalReg").click(function(){
	$(".modal-reg").addClass("active");
	console.log("modal")
	bodyNoScroll()
});
$(".contacts__close").click(function(){
	$(".modal-reg").removeClass("active");
	bodyYesScroll()
});


// 

function bodyNoScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.add("Bodymotionless")
	
}
function bodyYesScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.remove("Bodymotionless")	
}
$(".project").click(function(){
	$(".project").removeClass("active");
	$(".project").removeClass("active-prev");
	$(this).addClass("active");
	$(this).prev().addClass("active-prev");
	
});

// $(window).resize(function() {
//   if(document.documentElement.clientWidth < 699) {
//     $(".team-list__item").click(function(){
// 			$(".team-list__item").removeClass("active");
// 			$(this).addClass("active");	
// 		});
//   }
// });

$(".team-list__item").click(function(){
	$(".team-list__item").removeClass("active");
	$(this).addClass("active");	
});
let overlayBg = document.querySelector(".mob-menu--overlay");
let mobMenuSection = document.querySelector(".js-mob-menu__section");
let mobMenu = document.querySelector(".mob-menu");
let mobMenuClose = document.querySelector(".mob-menu--close");
let humb = document.querySelector(".js-hamburger");
overlayBg.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  humb.classList.remove("is-active");
  bodyYesScroll()
});
humb.addEventListener("mousemove", function () {
  mobMenuSection.classList.add("active");
  bodyNoScroll()
});
humb.addEventListener("mousemove", function () {
  mobMenuSection.classList.add("active");
  bodyNoScroll()
});
overlayBg.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  bodyYesScroll()
});
mobMenuClose.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  bodyYesScroll()
});
mobMenuClose.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  bodyYesScroll()
});

var startSlider
$('.js-start__slider').each(function(){
	var slider=$(this)
	var startSlider = new Swiper(slider[0], {
		// watchOverflow: true,
		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// preventInteractionOnTransition: true,
		spaceBetween: 10,
		loop: false,
		slidesPerView: 1.3,
		// slidesPerView: "auto",
		navigation: {
			nextEl: slider.find('.swiper-button-next')[0],
			prevEl: slider.find('.swiper-button-prev')[0]
		},
		pagination: {
			el: slider.find('.swiper-pagination')[0],
			type: 'bullets',
			clickable: true
		},
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
			breakpoints: {
				// when window width is >= 480px
				1100: {
						slidesPerView: 1.5,
						spaceBetween: 0
				},
		}
	});

})
var projectsSlider
$('.js-projects__slider').each(function(){
	var slider=$(this)
	var projectsSlider = new Swiper(slider[0], {
		// watchOverflow: true,
		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// preventInteractionOnTransition: true,
		spaceBetween: 1,
		loop: true,
		slidesPerView: 1.2,
		// slidesPerView: "auto",
		navigation: {
			nextEl: slider.find('.swiper-button-next')[0],
			prevEl: slider.find('.swiper-button-prev')[0]
		},
		pagination: {
			el: slider.find('.swiper-pagination')[0],
			type: 'bullets',
			clickable: true
		},
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
			breakpoints: {
				// when window width is >= 480px
				699: {
						slidesPerView: 2,
						spaceBetween: 0
				},
		}
	});

})
var newsRecommendedSlider
$('.js-news-recommended').each(function(){
	var slider=$(this)
	var newsRecommendedSlider = new Swiper(slider[0], {
		// watchOverflow: true,
		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// preventInteractionOnTransition: true,
		spaceBetween: 1,
		loop: true,
		slidesPerView: 1.2,
		// slidesPerView: "auto",
		navigation: {
			nextEl: slider.find('.swiper-button-next')[0],
			prevEl: slider.find('.swiper-button-prev')[0]
		},
		pagination: {
			el: slider.find('.swiper-pagination')[0],
			type: 'bullets',
			clickable: true
		},
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
			breakpoints: {
				// when window width is >= 480px
				699: {
						slidesPerView: 2,
						spaceBetween: 0
				},
				1100: {
						slidesPerView: 4,
						spaceBetween: 0
				},
		}
	});

})
var teamListSlider
$('.js-team-list').each(function(){
	var slider=$(this)
	var teamListSlider = new Swiper(slider[0], {
		// watchOverflow: true,
		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// preventInteractionOnTransition: true,
		spaceBetween: 10,
		loop: false,
		slidesPerView: 4.1,
		centeredSlides: true,
		initialSlide: 2,
		// slidesPerView: "auto",
		navigation: {
			nextEl: slider.find('.swiper-button-next')[0],
			prevEl: slider.find('.swiper-button-prev')[0]
		},
		pagination: {
			el: slider.find('.swiper-pagination')[0],
			type: 'bullets',
			clickable: true
		},
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
			breakpoints: {
				// when window width is >= 480px
				1100: {
						slidesPerView: 5,
						spaceBetween: 0
				},
		}
	});

})

var projectsSingleListFotoSlider
$('.js-projects-single__list-foto').each(function(){
	var slider=$(this)
	var projectsSingleListFotoSlider = new Swiper(slider[0], {
		spaceBetween: 10,
		loop: true,
		slidesPerView: 1.2,
		mousewheel: true,
		// direction: "vertical",
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: slider.find('.swiper-button-next')[0],
			prevEl: slider.find('.swiper-button-prev')[0]
		},
		pagination: {
			el: slider.find('.swiper-pagination')[0],
			type: 'bullets',
			clickable: true
		},
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
			breakpoints: {
				// when window width is >= 480px
				1100: {
						slidesPerView: 1,
						spaceBetween: 0
				},
		}
	});

})


if (window.innerWidth > 1100){
	let servicesSingleListSlider = new Swiper(".js-services-single__list", {
		spaceBetween: 0,
		direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 20,
		mousewheel: true,
		navigation: {
			nextEl: '.services-single-next',
			prevEl: '.services-single-prev'
	},
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
		// breakpoints: {
		// 	// when window width is >= 480px
		// 	1100: {
		// 			slidesPerView: 4,
		// 			spaceBetween: 0
		// 	},
		// }
	})
	let servicesSingleListFotoSlider = new Swiper(".js-services-single__list-foto", {
		effect: "cards",
		grabCursor: true,
		mousewheel: true,
		// navigation: {
		// 	nextEl: slider.find('.swiper-button-next')[0],
		// 	prevEl: slider.find('.swiper-button-prev')[0]
		// },
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
		// breakpoints: {
		// 	// when window width is >= 480px
		// 	1100: {
		// 			slidesPerView: 4,
		// 			spaceBetween: 0
		// 	},
		// }
	});
	servicesSingleListSlider.controller.control = servicesSingleListFotoSlider;
	servicesSingleListFotoSlider.controller.control = servicesSingleListSlider;
}  else {
	let servicesSingleListSlider = new Swiper(".js-services-single__list", {
		spaceBetween: 0,
		slidesPerView: 1,
		spaceBetween: 20,
		mousewheel: true,
		navigation: {
			nextEl: '.services-single-next',
			prevEl: '.services-single-prev'
	},
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
		// breakpoints: {
		// 	// when window width is >= 480px
		// 	1100: {
		// 			slidesPerView: 4,
		// 			spaceBetween: 0
		// 	},
		// }
	})
	let servicesSingleListFotoSlider = new Swiper(".js-services-single__list-foto", {
		slidesPerView: 1,
		spaceBetween: 20,
		mousewheel: true,
		// navigation: {
		// 	nextEl: slider.find('.swiper-button-next')[0],
		// 	prevEl: slider.find('.swiper-button-prev')[0]
		// },
		// autoplay: {
		// 	delay: 2000,
		// 	// reverseDirection: true,
		// 	disableOnInteraction: false,
		// },	
		// breakpoints: {
		// 	// when window width is >= 480px
		// 	1100: {
		// 			slidesPerView: 4,
		// 			spaceBetween: 0
		// 	},
		// }
	});
	servicesSingleListSlider.controller.control = servicesSingleListFotoSlider;
	servicesSingleListFotoSlider.controller.control = servicesSingleListSlider;
}

let projectsPageListSlider = new Swiper(".js-projects-page__list", {
	direction: "vertical",
	slidesPerView: 7,
	spaceBetween: 16,
	centeredSlides: true,
	loop: false,
	pagination: true,
	autoHeight: true,
	mousewheel: true,
})
let projectsPageListFotoSlider = new Swiper(".js-projects-page__list-foto", {
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 2,
	loop: false,
	pagination: true,
	mousewheel: true,
	// navigation: {
	// 	nextEl: slider.find('.swiper-button-next')[0],
	// 	prevEl: slider.find('.swiper-button-prev')[0]
	// },
	// autoplay: {
	// 	delay: 2000,
	// 	// reverseDirection: true,
	// 	disableOnInteraction: false,
	// },	
	breakpoints: {
		// when window width is >= 480px
		1100: {
			direction: "vertical",
		},
	}
});
projectsPageListSlider.controller.control = projectsPageListFotoSlider;
projectsPageListFotoSlider.controller.control = projectsPageListSlider;




let tabNavs = document.querySelectorAll(".services__nav");
let tabPanes = document.querySelectorAll(".services__pane");
function tabAllClick(navs, panes) {
	console.log("click navs")
	var tabNavs = navs;
	var tabPanes = panes;
	// var tabNavs = document.querySelectorAll(".nav-tab");
	// var tabPanes = document.querySelectorAll(".tab-pane");
	if(tabNavs !==null & tabPanes !==null) {
		tabClick() 
	}
	function tabClick() {
		for (var i = 0; i < tabNavs.length; i++) {

			tabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < tabNavs.length; j++) {
					var contentAttr = tabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						tabNavs[j].classList.add("active");
						tabPanes[j].classList.add("active"); 
					} else {
						tabNavs[j].classList.remove("active");
						tabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}
}
tabAllClick(tabNavs, tabPanes);
///tabs

var initMode;
let addTime = 1200;
let addTime2 = 100;

let st1, st2, st3;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});

let s3Width, b1Width, b2Width, b3Width, b4Width;
let scHeight, s3Height, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height;


let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');


function initAnimation(){
	s3Width =  $('.scroll-page').innerWidth();
	b1Width =  $('.services').innerWidth();
	b2Height =  $('.footer__wrap').innerHeight();
	b3Height =  $('.control').innerHeight();
	b4Height =  $('.services').innerHeight();
	b5Height =  $('.projects').innerHeight();
	b6Height =  $('.news').innerHeight();
	scHeight =  $('.home-page').innerHeight();
	// b1Height =  $('.section3__block--1').innerHeight();


	if (window.innerWidth > 1100){
			initScrollAnimationDesktop();
			initMode = 'desk';
	} else if(window.innerWidth > 699){
			initScrollAnimationTablet();
			initMode = 'tablet';
	} else {
			initScrollAnimationMobile();
			initMode = 'mobile';
	}
}
let scrollPage = document.querySelector(".scroll-page")
if(scrollPage !== null) {
	initAnimation();
}


var dwidth = $(window).width();
$(window).on('resize',function (){
	var wwidth = $(window).width();
	if(dwidth!==wwidth){
			if (typeof st1 !== "undefined") st1.kill();
			if (typeof st2 !== "undefined") st2.kill();
			if (typeof st3 !== "undefined") st3.kill();
			// tl.clear();
			tl1.clear();
			tl2.clear();
			// tl3.clear();
			gsap.set(".loader__center, .loader__back, .section1__house, .section1 .header, .sidebar, .section1__title," +
					".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {clearProps:"all"});
			window.scrollTo({
					top: 0,
					behavior: "instant"
			});
			$('body').removeClass('active');
			$('.loader').removeClass('hide');
			$('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
			initAnimation();
	}
});
function initScrollAnimationDesktop(){
	// console.log ("initScrollAnimationDesktop")
	// gsap.to(".header", {

	// 	// onComplete: function (){
	// 	// 	startRotatingText (rotatingTextBlockFooter, 3000)
	// 	// }
	// });
	tl1.fromTo(".start-main", {
		width: "80vw",
	}, {
		width: "100vw",
		duration: 0.8,
		ease: "none",
		// OnStart: function () {
		// 	console.log ("js-start__slider")
		// 	$('js-start__slider').addClass('active');
		// },
		onComplete: function () {
			console.log ("js-start__slider")
			$('.start__slider').addClass('active');
		},
		// OnStart: function () {
		// 	console.log ("removeClass")
		// 	$('.start__slider').removeClass('active');
		// },
		onReverseComplete: function () {
			console.log ("removeClass")
			$('.start__slider').removeClass('active');
		},
		// onUpdate: function () {
		// 	console.log ("removeClass")
		// 	$('.start__slider').removeClass('active');
		// },

	}, "0");
	tl1.fromTo(".start__slider", {
		marginBottom: "5.2083333333vw",
	}, {
		marginBottom: "3.5vw",
		duration: 0.8,
		ease: "none",
	}, "<");
	tl1.fromTo(".swiper-slide-active", {
		height: "24.9479166667vw"
	}, {
		height: "30.8308457711vw",
		duration: 0.8,
		ease: "none",
	}, "<");
	tl1.fromTo(".swiper-slide-active", {
		height: "24.9479166667vw"
	}, {
		height: "30.8308457711vw",
		duration: 0.8,
		ease: "none",
	}, "<");
	tl1.fromTo(".control", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		// y: "0",
		y: -1 * (b3Height - scHeight),
		duration: Math.abs((scHeight - b3Height) / 460) + 1,
		ease: "none",
		onStart: function () {
			// console.log ("header")
			// $('.header').addClass('active');
			// $('.start__slider').removeClass('active');
		},
		// onComplete: function () {
		// 	console.log ("headerNone")
		// 	$('.header').removeClass('active');
		// },
	}, ">+=0.5");
	tl1.fromTo(".control__title", {
		x: '120%',
	}, {
		x: '0%',
		duration: 0.8,
		ease: "none",
	}, "<+=0.2");
	tl1.fromTo(".control__line", {
		x: '120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<+=0.2");
	tl1.fromTo(".control__text__wrap", {
		x: '150%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<-=0.2");
	tl1.fromTo(".control__picture ", {
		x: '140%',
	}, {
		x: '0%',
		duration: 1.2,
		ease: "none",
	}, "<+=0.3");
	tl1.fromTo(".control__object", {
		x: '150%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, ">-=0.8");
	tl1.fromTo(".services", {
		left: "-100vw",
	},
 {
		left: "0vw",
		duration:  1.5,
		ease: "none",
	} , ">+=0.5");
	tl1.fromTo(".services", {
		y: "0",
		top: "0"
	}, {
		top: "0",
		// y: "0",
		y: -1 * (b4Height - scHeight),
		duration: Math.abs((scHeight - b4Height) / 460) + 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".services__line", {
		x: '120%',
	}, {
		x: '0%',
		duration: 0.5,
		ease: "none",
	}, "<-=0.5");
	tl1.fromTo(".services__title", {
		x: '120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<-=0.5");
	tl1.fromTo(".projects", {
		y: "100%",
		top: "100%"
	}, {
		top: "0",
		// y: "0",
		y: -1 * (b5Height - scHeight),
		duration: Math.abs((scHeight - b5Height) / 460) + 1,
		ease: "none",
	}, ">+=0.5");
	tl1.fromTo(".projects__title", {
		x: '120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<+=0.2");
	tl1.fromTo(".projects__line", {
		x: '120%',
	}, {
		x: '0%',
		duration: 0.9,
		ease: "none",
	}, "<+=0.5");
	tl1.fromTo(".projects__list__col:nth-child(2)", {
		x: '120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".projects__text", {
		x: '-120%',
	}, {
		x: '0%',
		duration: 0.9,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".projects__btn", {
		x: '-120%',
	}, {
		x: '0%',
		duration: 0.9,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".trusted", {
		left: "-120%",
	},
 {
		left: "0",
		duration:  1.5,
		ease: "none",
	} , ">+=0.2");

	tl1.fromTo(".trusted__title", {
		x: '120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".trusted__line", {
		x: '-120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<+=0.3");
	tl1.fromTo(".trusted__list", {
		x: '-120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<+=0.3");
	tl1.fromTo(".news", {
		right: "-120%",
	},
 {
		right: "0",
		duration:  1.5,
		ease: "none",
	} , ">+=0.1");
	tl1.fromTo(".news__line", {
		x: '-120%',
	}, {
		x: '0%',
		duration: 2,
		ease: "none",
	}, "<-=0.3");
	tl1.fromTo(".news", {
		y: "0",
		top: "0"
	}, {
		top: "0",
		// y: "0",
		y: -1 * (b6Height - scHeight),
		duration: Math.abs((scHeight - b6Height) / 460) + 1,
		ease: "none",
	}, ">");

	tl1.fromTo(".footer__wrap", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		// y: "0",
		y: -1 * (b2Height - scHeight),
		duration: Math.abs((scHeight - b2Height) / 460) + 1,
		ease: "none",
	}, ">+=0.5");

	tl1.fromTo(".footer__content__picture", {
		x: '-120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<+=0.6");
	tl1.fromTo(".footer__line--1", {
		x: '-120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<+=0.6");
	tl1.fromTo(".footer__line--2", {
		x: '120%',
	}, {
		x: '0%',
		duration: 1,
		ease: "none",
	}, "<");
	st1 = ScrollTrigger.create({
		trigger: ".scroll-page",
		pin: true,
		start: "top top",
		end: () => "+=" + addTime + "%",
		scrub: 1.5,
		animation: tl1,
	});

}
function initScrollAnimationTablet(){}

function initScrollAnimationMobile(){}

