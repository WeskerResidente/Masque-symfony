(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_stars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/stars.js */ "./assets/js/stars.js");
/* harmony import */ var _js_stars_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_stars_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_swipper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/swipper.js */ "./assets/js/swipper.js");
/* harmony import */ var _js_menuover_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/menuover.js */ "./assets/js/menuover.js");
/* harmony import */ var _js_menuover_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_menuover_js__WEBPACK_IMPORTED_MODULE_4__);

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */




console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./assets/js/menuover.js":
/*!*******************************!*\
  !*** ./assets/js/menuover.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.getElementById("toggleMasques");
  var submenu = document.getElementById("submenuMasques");
  toggleBtn.addEventListener("click", function (e) {
    if (window.innerWidth < 768) {
      e.preventDefault(); // ⛔ On bloque la redirection sur mobile
      submenu.classList.toggle("show");
    }
    // Sinon (desktop), on laisse la redirection se faire normalement
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      e.preventDefault();
      submenu.classList.toggle("show");
    }
  });
});

/***/ }),

/***/ "./assets/js/stars.js":
/*!****************************!*\
  !*** ./assets/js/stars.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
console.log('🎯 Début du stars.js');
document.addEventListener('DOMContentLoaded', function () {
  console.log('✨ stars.js DOM loaded');

  // ✅ Ces deux lignes doivent être avant les conditions :
  var stars = document.querySelectorAll('#star-widget .star');
  var input = document.getElementById('notation_note_hidden');
  var form = input === null || input === void 0 ? void 0 : input.form;

  // 🔍 Récupère l'info : a-t-il déjà noté ?
  var alreadyRated = document.querySelector('#star-widget').dataset.alreadyRated === "1";
  if (!input || !form || stars.length === 0) {
    console.warn('⛔ Le champ ou le formulaire est manquant.');
    return;
  }
  stars.forEach(function (star, index) {
    star.addEventListener('click', function () {
      var newValue = index + 1;
      if (alreadyRated) {
        var confirmed = confirm('Vous avez déjà noté ce masque. Voulez-vous modifier votre note ?');
        if (!confirmed) return; // annule le clic
      }
      input.value = newValue;
      highlightStars(index);
      form.submit(); // ✅ envoie le formulaire manuellement
    });
    star.addEventListener('mouseover', function () {
      return highlightStars(index);
    });
    star.addEventListener('mouseout', function () {
      return highlightStars(parseInt(input.value) - 1);
    });
  });
  function highlightStars(index) {
    if (index > 3) index = 3; // car index = valeur - 1
    stars.forEach(function (star, i) {
      star.style.color = i <= index ? 'gold' : '#888';
    });
  }
  if (input.value) {
    if (input.value > 4) {
      input.value = 4;
    }
    highlightStars(parseInt(input.value) - 1);
  }
});

/***/ }),

/***/ "./assets/js/swipper.js":
/*!******************************!*\
  !*** ./assets/js/swipper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/effect-coverflow */ "./node_modules/swiper/modules/effect-coverflow.css");











var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.swiper', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_7__.EffectCoverflow, swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Autoplay],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var flashes = document.querySelectorAll('.global-flash');
  flashes.forEach(function (flash) {
    setTimeout(function () {
      flash.classList.add('fade-out');
      setTimeout(function () {
        return flash.remove();
      }, 500); // retire le flash après l'animation
    }, 4000); // après 4 secondes
  });
});

// JS pour la recherche avancée
function toggleAdvanced() {
  var section = document.getElementById('advancedSearch');
  if (section.style.display === 'none' || section.style.display === '') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
}
window.toggleAdvanced = toggleAdvanced;

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_swiper_modules_effect-coverflow_css-node_modules_swiper_modules_navigati-975cd4"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxDOzs7Ozs7Ozs7Ozs7QUNoRHRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudW92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0YXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zd2lwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL2pzL3N0YXJzLmpzJztcclxuaW1wb3J0ICcuL2pzL3N3aXBwZXIuanMnO1xyXG5pbXBvcnQgJy4vanMvbWVudW92ZXIuanMnO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcblxyXG5cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZU1hc3F1ZXNcIik7XHJcbiAgICBjb25zdCBzdWJtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtZW51TWFzcXVlc1wiKTtcclxuXHJcbiAgICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDim5QgT24gYmxvcXVlIGxhIHJlZGlyZWN0aW9uIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgc3VibWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2lub24gKGRlc2t0b3ApLCBvbiBsYWlzc2UgbGEgcmVkaXJlY3Rpb24gc2UgZmFpcmUgbm9ybWFsZW1lbnRcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiY29uc29sZS5sb2coJ/Cfjq8gRMOpYnV0IGR1IHN0YXJzLmpzJyk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+KcqCBzdGFycy5qcyBET00gbG9hZGVkJyk7XHJcblxyXG4gICAgLy8g4pyFIENlcyBkZXV4IGxpZ25lcyBkb2l2ZW50IMOqdHJlIGF2YW50IGxlcyBjb25kaXRpb25zIDpcclxuICAgIGNvbnN0IHN0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N0YXItd2lkZ2V0IC5zdGFyJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RhdGlvbl9ub3RlX2hpZGRlbicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGlucHV0Py5mb3JtO1xyXG5cclxuICAgIC8vIPCflI0gUsOpY3Vww6hyZSBsJ2luZm8gOiBhLXQtaWwgZMOpasOgIG5vdMOpID9cclxuICAgIGNvbnN0IGFscmVhZHlSYXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFyLXdpZGdldCcpLmRhdGFzZXQuYWxyZWFkeVJhdGVkID09PSBcIjFcIjtcclxuXHJcbiAgICBpZiAoIWlucHV0IHx8ICFmb3JtIHx8IHN0YXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign4puUIExlIGNoYW1wIG91IGxlIGZvcm11bGFpcmUgZXN0IG1hbnF1YW50LicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFycy5mb3JFYWNoKChzdGFyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gaW5kZXggKyAxO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFscmVhZHlSYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gY29uZmlybSgnVm91cyBhdmV6IGTDqWrDoCBub3TDqSBjZSBtYXNxdWUuIFZvdWxlei12b3VzIG1vZGlmaWVyIHZvdHJlIG5vdGUgPycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtZWQpIHJldHVybjsgLy8gYW5udWxlIGxlIGNsaWNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0U3RhcnMoaW5kZXgpO1xyXG4gICAgICAgICAgICBmb3JtLnN1Ym1pdCgpOyAvLyDinIUgZW52b2llIGxlIGZvcm11bGFpcmUgbWFudWVsbGVtZW50XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gaGlnaGxpZ2h0U3RhcnMoaW5kZXgpKTtcclxuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gaGlnaGxpZ2h0U3RhcnMocGFyc2VJbnQoaW5wdXQudmFsdWUpIC0gMSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodFN0YXJzKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDMpIGluZGV4ID0gMzsgLy8gY2FyIGluZGV4ID0gdmFsZXVyIC0gMVxyXG4gICAgICAgICAgICBzdGFycy5mb3JFYWNoKChzdGFyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGFyLnN0eWxlLmNvbG9yID0gaSA8PSBpbmRleCA/ICdnb2xkJyA6ICcjODg4JztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPiA0KSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlnaGxpZ2h0U3RhcnMocGFyc2VJbnQoaW5wdXQudmFsdWUpIC0gMSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBFZmZlY3RDb3ZlcmZsb3csIEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9lZmZlY3QtY292ZXJmbG93JztcclxuXHJcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb24sIEVmZmVjdENvdmVyZmxvdywgQXV0b3BsYXldLFxyXG4gIGVmZmVjdDogJ2NvdmVyZmxvdycsXHJcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuICAgIHJvdGF0ZTogMCxcclxuICAgIHN0cmV0Y2g6IDAsXHJcbiAgICBkZXB0aDogMTAwLFxyXG4gICAgbW9kaWZpZXI6IDIuNSxcclxuICAgIHNsaWRlU2hhZG93czogZmFsc2UsXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIGRlbGF5OiAyNTAwLFxyXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IGZsYXNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2xvYmFsLWZsYXNoJyk7XHJcbiAgZmxhc2hlcy5mb3JFYWNoKGZsYXNoID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmbGFzaC5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGZsYXNoLnJlbW92ZSgpLCA1MDApOyAvLyByZXRpcmUgbGUgZmxhc2ggYXByw6hzIGwnYW5pbWF0aW9uXHJcbiAgICB9LCA0MDAwKTsgLy8gYXByw6hzIDQgc2Vjb25kZXNcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBKUyBwb3VyIGxhIHJlY2hlcmNoZSBhdmFuY8OpZVxyXG5mdW5jdGlvbiB0b2dnbGVBZHZhbmNlZCgpIHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWR2YW5jZWRTZWFyY2gnKTtcclxuICAgIGlmIChzZWN0aW9uLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBzZWN0aW9uLnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XHJcbiAgICAgICAgc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy50b2dnbGVBZHZhbmNlZCA9IHRvZ2dsZUFkdmFuY2VkO1xyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtZW51IiwiZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInN0YXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwiZm9ybSIsImFscmVhZHlSYXRlZCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwibGVuZ3RoIiwid2FybiIsImZvckVhY2giLCJzdGFyIiwiaW5kZXgiLCJuZXdWYWx1ZSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ2YWx1ZSIsImhpZ2hsaWdodFN0YXJzIiwic3VibWl0IiwicGFyc2VJbnQiLCJpIiwic3R5bGUiLCJjb2xvciIsIlN3aXBlciIsIk5hdmlnYXRpb24iLCJFZmZlY3RDb3ZlcmZsb3ciLCJBdXRvcGxheSIsInN3aXBlciIsIm1vZHVsZXMiLCJlZmZlY3QiLCJncmFiQ3Vyc29yIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsImNvdmVyZmxvd0VmZmVjdCIsInJvdGF0ZSIsInN0cmV0Y2giLCJkZXB0aCIsIm1vZGlmaWVyIiwic2xpZGVTaGFkb3dzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImZsYXNoZXMiLCJmbGFzaCIsInNldFRpbWVvdXQiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGVBZHZhbmNlZCIsInNlY3Rpb24iLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==