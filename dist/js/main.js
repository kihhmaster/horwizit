/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {

// import $ from "jquery";
// import Swiper from 'swiper/bundle';
// import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
// import gsap from "gsap";

/***/ }),

/***/ "./src/js/import/libs/jquery.marquee.min.js":
/*!**************************************************!*\
  !*** ./src/js/import/libs/jquery.marquee.min.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.fn.marquee = function (options) {
    return this.each(function () {
      var o = $.extend({}, $.fn.marquee.defaults, options),
          $this = $(this),
          $marqueeWrapper,
          containerWidth,
          animationCss,
          verticalDir,
          elWidth,
          loopCount = 3,
          playState = "animation-play-state",
          css3AnimationIsSupported = false,
          _prefixedEvent = function _prefixedEvent(element, type, callback) {
        var pfx = ["webkit", "moz", "MS", "o", ""];

        for (var p = 0; p < pfx.length; p++) {
          if (!pfx[p]) type = type.toLowerCase();
          element.addEventListener(pfx[p] + type, callback, false);
        }
      },
          _objToString = function _objToString(obj) {
        var tabjson = [];

        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            tabjson.push(p + ":" + obj[p]);
          }
        }

        tabjson.push();
        return "{" + tabjson.join(",") + "}";
      },
          _startAnimationWithDelay = function _startAnimationWithDelay() {
        $this.timer = setTimeout(animate, o.delayBeforeStart);
      },
          methods = {
        pause: function pause() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "paused");
          } else {
            if ($.fn.pause) {
              $marqueeWrapper.pause();
            }
          }

          $this.data("runningStatus", "paused");
          $this.trigger("paused");
        },
        resume: function resume() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "running");
          } else {
            if ($.fn.resume) {
              $marqueeWrapper.resume();
            }
          }

          $this.data("runningStatus", "resumed");
          $this.trigger("resumed");
        },
        toggle: function toggle() {
          methods[$this.data("runningStatus") === "resumed" ? "pause" : "resume"]();
        },
        destroy: function destroy() {
          clearTimeout($this.timer);
          $this.find("*").addBack().off();
          $this.html($this.find(".js-marquee:first").html());
        }
      };

      if (typeof options === "string") {
        if ($.isFunction(methods[options])) {
          if (!$marqueeWrapper) {
            $marqueeWrapper = $this.find(".js-marquee-wrapper");
          }

          if ($this.data("css3AnimationIsSupported") === true) {
            css3AnimationIsSupported = true;
          }

          methods[options]();
        }

        return;
      }

      var dataAttributes = {},
          attr;
      $.each(o, function (key) {
        attr = $this.attr("data-" + key);

        if (typeof attr !== "undefined") {
          switch (attr) {
            case "true":
              attr = true;
              break;

            case "false":
              attr = false;
              break;
          }

          o[key] = attr;
        }
      });

      if (o.speed) {
        o.duration = parseInt($this.width(), 10) / o.speed * 1e3;
      }

      verticalDir = o.direction === "up" || o.direction === "down";
      o.gap = o.duplicated ? parseInt(o.gap) : 0;
      $this.wrapInner('<div class="js-marquee"></div>');
      var $el = $this.find(".js-marquee").css({
        "margin-right": o.gap,
        float: "left"
      });

      if (o.duplicated) {
        $el.clone(true).appendTo($this);
      }

      $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
      $marqueeWrapper = $this.find(".js-marquee-wrapper");

      if (verticalDir) {
        var containerHeight = $this.height();
        $marqueeWrapper.removeAttr("style");
        $this.height(containerHeight);
        $this.find(".js-marquee").css({
          float: "none",
          "margin-bottom": o.gap,
          "margin-right": 0
        });

        if (o.duplicated) {
          $this.find(".js-marquee:last").css({
            "margin-bottom": 0
          });
        }

        var elHeight = $this.find(".js-marquee:first").height() + o.gap;

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
          o.duration = parseInt(elHeight, 10) / parseInt(containerHeight, 10) * o.duration;
        } else {
          o.duration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
        }
      } else {
        elWidth = $this.find(".js-marquee:first").width() + o.gap;
        containerWidth = $this.width();

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
          o.duration = parseInt(elWidth, 10) / parseInt(containerWidth, 10) * o.duration;
        } else {
          o.duration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
        }
      }

      if (o.duplicated) {
        o.duration = o.duration / 2;
      }

      if (o.allowCss3Support) {
        var elm = document.body || document.createElement("div"),
            animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
            domPrefixes = "Webkit Moz O ms Khtml".split(" "),
            animationString = "animation",
            animationCss3Str = "",
            keyframeString = "";

        if (elm.style.animation !== undefined) {
          keyframeString = "@keyframes " + animationName + " ";
          css3AnimationIsSupported = true;
        }

        if (css3AnimationIsSupported === false) {
          for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
              var prefix = "-" + domPrefixes[i].toLowerCase() + "-";
              animationString = prefix + animationString;
              playState = prefix + playState;
              keyframeString = "@" + prefix + "keyframes " + animationName + " ";
              css3AnimationIsSupported = true;
              break;
            }
          }
        }

        if (css3AnimationIsSupported) {
          animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing;
          $this.data("css3AnimationIsSupported", true);
        }
      }

      var _rePositionVertically = function _rePositionVertically() {
        $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + elHeight + "px") + ")");
      },
          _rePositionHorizontally = function _rePositionHorizontally() {
        $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + elWidth + "px") + ")");
      };

      if (o.duplicated) {
        if (verticalDir) {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateY(0)");
          } else {
            $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + (elHeight * 2 - o.gap) + "px") + ")");
          }
        } else {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateX(0)");
          } else {
            $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + (elWidth * 2 - o.gap) + "px") + ")");
          }
        }

        if (!o.startVisible) {
          loopCount = 1;
        }
      } else if (o.startVisible) {
        loopCount = 2;
      } else {
        if (verticalDir) {
          _rePositionVertically();
        } else {
          _rePositionHorizontally();
        }
      }

      var animate = function animate() {
        if (o.duplicated) {
          if (loopCount === 1) {
            o._originalDuration = o.duration;

            if (verticalDir) {
              o.duration = o.direction === "up" ? o.duration + containerHeight / (elHeight / o.duration) : o.duration * 2;
            } else {
              o.duration = o.direction === "left" ? o.duration + containerWidth / (elWidth / o.duration) : o.duration * 2;
            }

            if (animationCss3Str) {
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
            }

            loopCount++;
          } else if (loopCount === 2) {
            o.duration = o._originalDuration;

            if (animationCss3Str) {
              animationName = animationName + "0";
              keyframeString = $.trim(keyframeString) + "0 ";
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
            }

            loopCount++;
          }
        }

        if (verticalDir) {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? 0 : "-" + elHeight + "px") + ")");
            }

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : containerHeight + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionVertically();
            }
          } else {
            _rePositionVertically();

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + $marqueeWrapper.height() + "px" : containerHeight + "px") + ")"
            };
          }
        } else {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? 0 : "-" + elWidth + "px") + ")");
            }

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionHorizontally();
            }
          } else {
            _rePositionHorizontally();

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
            };
          }
        }

        $this.trigger("beforeStarting");

        if (css3AnimationIsSupported) {
          $marqueeWrapper.css(animationString, animationCss3Str);
          var keyframeCss = keyframeString + " { 100%  " + _objToString(animationCss) + "}",
              $styles = $marqueeWrapper.find("style");

          if ($styles.length !== 0) {
            $styles.filter(":last").html(keyframeCss);
          } else {
            $("head").append("<style>" + keyframeCss + "</style>");
          }

          _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () {
            $this.trigger("finished");
          });

          _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () {
            animate();
            $this.trigger("finished");
          });
        } else {
          $marqueeWrapper.animate(animationCss, o.duration, o.easing, function () {
            $this.trigger("finished");

            if (o.pauseOnCycle) {
              _startAnimationWithDelay();
            } else {
              animate();
            }
          });
        }

        $this.data("runningStatus", "resumed");
      };

      $this.on("pause", methods.pause);
      $this.on("resume", methods.resume);

      if (o.pauseOnHover) {
        $this.on("mouseenter", methods.pause);
        $this.on("mouseleave", methods.resume);
      }

      if (css3AnimationIsSupported && o.allowCss3Support) {
        animate();
      } else {
        _startAnimationWithDelay();
      }
    });
  };

  $.fn.marquee.defaults = {
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: false,
    duration: 5e3,
    speed: 0,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: false
  };
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function() {

// import $ from "jquery";
// import Isotope from 'isotope-layout';

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/libs/jquery.marquee.min */ "./src/js/import/libs/jquery.marquee.min.js");
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/index-page */ "./src/js/page/index-page.js");
 // import "./libs/jquery.fancybox.min";
// import "./import/libs/select2.min";





/***/ }),

/***/ "./src/js/page/index-page.js":
/*!***********************************!*\
  !*** ./src/js/page/index-page.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import "@fancyapps/ui/dist/fancybox/fancybox.css";

gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5__["default"]);

swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_6__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_6__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_6__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_6__.Controller, swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_6__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_6__.Thumbs, swiper__WEBPACK_IMPORTED_MODULE_6__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCoverflow, swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCards]); //прелоадер project-preloader 
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

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-project-preloader").on("click", function (e) {
  e.preventDefault();
  var arrayData = this.getAttribute('data-img');
  var href = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'); // добавили

  if (arrayData === "") {
    window.location.href = href;
    return;
  }

  var arr = arrayData.split(';');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".project-preloader__picture").each(function (index) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('background-image', 'url(' + arr[index] + ')');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".project-preloader").addClass("active");
  jquery__WEBPACK_IMPORTED_MODULE_0___default().each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project-preloader__picture'), function (i, el) {
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).addClass("active");
    }, 50 + i * 1500); // setTimeout(function() {
    // 	$(".project-preloader").addClass("no-active")
    // }, 5800);
    // setTimeout(function() {
    // 	$(".project-preloader").removeClass("active")
    // 	$(".project-preloader").removeClass("no-active")
    // 	$(el).removeClass("active");
    // }, 6500);
  });
  setTimeout(function () {
    window.location.href = href;
  }, 50 + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project-preloader__picture').length * 1500);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts__form__input').on('input', function (e) {
  var state = e.target.value;

  if (state.length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("value");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("value");
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts__form__textarea').on('input', function (e) {
  var state = e.target.value;

  if (state.length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("value");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("value");
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-modalReg").click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal-reg").addClass("active");
  console.log("modal");
  bodyNoScroll();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".contacts__close").click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal-reg").removeClass("active");
  bodyYesScroll();
}); // 

function bodyNoScroll() {
  var bodyBodymotionless = document.querySelector('body');
  bodyBodymotionless.classList.add("Bodymotionless");
}

function bodyYesScroll() {
  var bodyBodymotionless = document.querySelector('body');
  bodyBodymotionless.classList.remove("Bodymotionless");
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".project").click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".project").removeClass("active");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".project").removeClass("active-prev");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev().addClass("active-prev");
}); // $(window).resize(function() {
//   if(document.documentElement.clientWidth < 699) {
//     $(".team-list__item").click(function(){
// 			$(".team-list__item").removeClass("active");
// 			$(this).addClass("active");	
// 		});
//   }
// });

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".team-list__item").click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".team-list__item").removeClass("active");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
});
var overlayBg = document.querySelector(".mob-menu--overlay");
var mobMenuSection = document.querySelector(".js-mob-menu__section");
var mobMenu = document.querySelector(".mob-menu");
var mobMenuClose = document.querySelector(".mob-menu--close");
var humb = document.querySelector(".js-hamburger");
overlayBg.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  humb.classList.remove("is-active");
  bodyYesScroll();
});
humb.addEventListener("click", function () {
  mobMenuSection.classList.add("active");
  bodyNoScroll();
});
humb.addEventListener("click", function () {
  mobMenuSection.classList.add("active");
  bodyNoScroll();
});
overlayBg.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  bodyYesScroll();
});
mobMenuClose.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  bodyYesScroll();
});
mobMenuClose.addEventListener("click", function () {
  mobMenuSection.classList.remove("active");
  bodyYesScroll();
});
var startSlider;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-start__slider').each(function () {
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var startSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(slider[0], {
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
      }
    }
  });
});
var projectsSlider;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-projects__slider').each(function () {
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var projectsSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(slider[0], {
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
      }
    }
  });
});
var newsRecommendedSlider;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-news-recommended').each(function () {
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var newsRecommendedSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(slider[0], {
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
      }
    }
  });
});
var teamListSlider;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-team-list').each(function () {
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var teamListSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(slider[0], {
    // watchOverflow: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // preventInteractionOnTransition: true,
    spaceBetween: 10,
    loop: false,
    slidesPerView: 3.1,
    centeredSlides: true,
    initialSlide: 3,
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
        spaceBetween: 0,
        initialSlide: 3,
        centeredSlides: true
      }
    }
  });
});
var projectsSingleListFotoSlider;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-projects-single__list-foto').each(function () {
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var projectsSingleListFotoSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(slider[0], {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 1.2,
    mousewheel: true,
    // direction: "vertical",
    autoplay: {
      delay: 4000
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
      }
    }
  });
});

if (window.innerWidth > 1100) {
  var _Swiper;

  var servicesSingleListSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(".js-services-single__list", (_Swiper = {
    spaceBetween: 0,
    direction: "vertical",
    slidesPerView: 1
  }, _defineProperty(_Swiper, "spaceBetween", 20), _defineProperty(_Swiper, "mousewheel", true), _defineProperty(_Swiper, "navigation", {
    nextEl: '.services-single-next',
    prevEl: '.services-single-prev'
  }), _Swiper));
  var servicesSingleListFotoSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(".js-services-single__list-foto", {
    effect: "cards",
    grabCursor: true,
    mousewheel: true // navigation: {
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
} else {
  var _Swiper2;

  var _servicesSingleListSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(".js-services-single__list", (_Swiper2 = {
    spaceBetween: 0,
    slidesPerView: 1
  }, _defineProperty(_Swiper2, "spaceBetween", 20), _defineProperty(_Swiper2, "mousewheel", true), _defineProperty(_Swiper2, "navigation", {
    nextEl: '.services-single-next',
    prevEl: '.services-single-prev'
  }), _Swiper2));

  var _servicesSingleListFotoSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(".js-services-single__list-foto", {
    slidesPerView: 1,
    spaceBetween: 20,
    mousewheel: true // navigation: {
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

  _servicesSingleListSlider.controller.control = _servicesSingleListFotoSlider;
  _servicesSingleListFotoSlider.controller.control = _servicesSingleListSlider;
}

var projectsPageListSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(".js-projects-page__list", {
  direction: "vertical",
  slidesPerView: 7,
  spaceBetween: 16,
  centeredSlides: true,
  loop: false,
  pagination: true,
  autoHeight: true,
  mousewheel: true
});
var projectsPageListFotoSlider = new swiper__WEBPACK_IMPORTED_MODULE_6__.Swiper(".js-projects-page__list-foto", {
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
      direction: "vertical"
    }
  }
});
projectsPageListSlider.controller.control = projectsPageListFotoSlider;
projectsPageListFotoSlider.controller.control = projectsPageListSlider;
var tabNavs = document.querySelectorAll(".services__nav");
var tabPanes = document.querySelectorAll(".services__pane");

function tabAllClick(navs, panes) {
  console.log("click navs");
  var tabNavs = navs;
  var tabPanes = panes; // var tabNavs = document.querySelectorAll(".nav-tab");
  // var tabPanes = document.querySelectorAll(".tab-pane");

  if (tabNavs !== null & tabPanes !== null) {
    tabClick();
  }

  function tabClick() {
    for (var i = 0; i < tabNavs.length; i++) {
      tabNavs[i].addEventListener("click", function (e) {
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
        }

        ;
      });
    }
  }
}

tabAllClick(tabNavs, tabPanes); ///tabs

var initMode;
var addTime = 1800;
var addTime2 = 100;
var st1, st2, st3;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({});
var s3Width, b1Width, b2Width, b3Width, b4Width;
var scHeight, s3Height, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height;
var urlParams = new URLSearchParams(window.location.search);
var yValue = urlParams.get('y');

function initAnimation() {
  s3Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerWidth();
  b1Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.services').innerWidth();
  b2Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.footer__wrap').innerHeight();
  b3Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.control').innerHeight();
  b4Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.services').innerHeight();
  b5Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.projects').innerHeight();
  b6Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.news').innerHeight();
  b7Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.information').innerHeight();
  scHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').innerHeight(); // b1Height =  $('.section3__block--1').innerHeight();

  if (window.innerWidth > 1100) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationMobile();
    initMode = 'mobile';
  }
}

var scrollPage = document.querySelector(".scroll-page");

if (scrollPage !== null) {
  initAnimation();
}

var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    if (typeof st3 !== "undefined") st3.kill(); // tl.clear();

    tl1.clear();
    tl2.clear(); // tl3.clear();

    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(".loader__center, .loader__back, .section1__house, .section1 .header, .sidebar, .section1__title," + ".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').removeClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  // console.log ("initScrollAnimationDesktop")
  // gsap.to(".header", {
  // 	// onComplete: function (){
  // 	// 	startRotatingText (rotatingTextBlockFooter, 3000)
  // 	// }
  // });
  tl1.fromTo(".start-main", {
    width: "80vw"
  }, {
    width: "100vw",
    duration: 0.8,
    ease: "none",
    // OnStart: function () {
    // 	console.log ("js-start__slider")
    // 	$('js-start__slider').addClass('active');
    // },
    onComplete: function onComplete() {
      console.log("js-start__slider");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.start__slider').addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').removeClass('active');
    },
    // OnStart: function () {
    // 	console.log ("removeClass")
    // 	$('.start__slider').removeClass('active');
    // },
    onReverseComplete: function onReverseComplete() {
      console.log("removeClass");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.start__slider').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').removeClass('active');
    } // onUpdate: function () {
    // 	console.log ("removeClass")
    // 	$('.start__slider').removeClass('active');
    // },

  }, "0");
  tl1.fromTo(".start__slider", {
    marginBottom: "5.2083333333vw"
  }, {
    marginBottom: "3.5vw",
    duration: 0.8,
    ease: "none"
  }, "<");
  tl1.fromTo(".swiper-slide-active", {
    height: "24.9479166667vw"
  }, {
    height: "30.8308457711vw",
    duration: 0.8,
    ease: "none"
  }, "<");
  tl1.fromTo(".swiper-slide-active", {
    height: "24.9479166667vw"
  }, {
    height: "30.8308457711vw",
    duration: 0.8,
    ease: "none"
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
    onStart: function onStart() {
      // console.log ("header")
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').addClass('active'); // $('.start__slider').removeClass('active');
    } // onComplete: function () {
    // 	console.log ("headerNone")
    // 	$('.header').removeClass('active');
    // },

  }, ">+=0.5");
  tl1.fromTo(".control__title", {
    x: '120%'
  }, {
    x: '0%',
    duration: 0.8,
    ease: "none"
  }, "<+=0.2");
  tl1.fromTo(".control__line", {
    x: '120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<+=0.2");
  tl1.fromTo(".control__text__wrap", {
    x: '150%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<-=0.2");
  tl1.fromTo(".control__picture ", {
    x: '140%'
  }, {
    x: '0%',
    duration: 1.2,
    ease: "none"
  }, "<+=0.3");
  tl1.fromTo(".control__object", {
    x: '150%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, ">-=0.8");
  tl1.fromTo(".services", {
    left: "-100vw"
  }, {
    left: "0vw",
    duration: 1.5,
    ease: "none"
  }, ">+=0.5");
  tl1.fromTo(".services", {
    y: "0",
    top: "0"
  }, {
    top: "0",
    // y: "0",
    y: -1 * (b4Height - scHeight),
    duration: Math.abs((scHeight - b4Height) / 460) + 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".services__line", {
    x: '120%'
  }, {
    x: '0%',
    duration: 0.5,
    ease: "none"
  }, "<-=0.5");
  tl1.fromTo(".services__title", {
    x: '120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<-=0.5");
  tl1.fromTo(".projects", {
    y: "100%",
    top: "100%"
  }, {
    top: "0",
    // y: "0",
    y: -1 * (b5Height - scHeight),
    duration: Math.abs((scHeight - b5Height) / 460) + 1,
    ease: "none"
  }, ">+=0.5");
  tl1.fromTo(".projects__title", {
    x: '120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<+=0.2");
  tl1.fromTo(".projects__line", {
    x: '120%'
  }, {
    x: '0%',
    duration: 0.9,
    ease: "none"
  }, "<+=0.5");
  tl1.fromTo(".projects__list__col:nth-child(2)", {
    x: '120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".projects__text", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 0.9,
    ease: "none"
  }, "<+=0.1");
  tl1.fromTo(".projects__btn", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 0.9,
    ease: "none"
  }, "<+=0.1");
  tl1.fromTo(".trusted", {
    left: "-120%"
  }, {
    left: "0",
    duration: 1.5,
    ease: "none"
  }, ">+=0.2");
  tl1.fromTo(".trusted__title", {
    x: '120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".trusted__line", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<+=0.3");
  tl1.fromTo(".trusted__list", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<+=0.3");
  tl1.fromTo(".news", {
    right: "-120%"
  }, {
    right: "0",
    duration: 1.5,
    ease: "none"
  }, ">+=0.1");
  tl1.fromTo(".news__line", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 2,
    ease: "none"
  }, "<-=0.3");
  tl1.fromTo(".news", {
    y: "0",
    top: "0"
  }, {
    top: "0",
    // y: "0",
    y: -1 * (b6Height - scHeight),
    duration: Math.abs((scHeight - b6Height) / 460) + 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".information", {
    left: "-120%"
  }, {
    left: "0",
    duration: 1.5,
    ease: "none"
  }, ">+=0.1");
  tl1.fromTo(".information__line", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 2,
    ease: "none"
  }, "<-=0.3");
  tl1.fromTo(".information", {
    y: "0",
    top: "0"
  }, {
    top: "0",
    // y: "0",
    y: -1 * (b7Height - scHeight),
    duration: Math.abs((scHeight - b7Height) / 460) + 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".footer__wrap", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    // y: "0",
    y: -1 * (b2Height - scHeight),
    duration: Math.abs((scHeight - b2Height) / 460) + 1,
    ease: "none"
  }, ">+=0");
  tl1.fromTo(".footer__content__picture", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<+=0.6");
  tl1.fromTo(".footer__line--1", {
    x: '-120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<+=0.6");
  tl1.fromTo(".footer__line--2", {
    x: '120%'
  }, {
    x: '0%',
    duration: 1,
    ease: "none"
  }, "<");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"].create({
    trigger: ".scroll-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl1
  });
}

function initScrollAnimationTablet() {}

function initScrollAnimationMobile() {}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug"] = self["webpackChunkgulp_pug"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map