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
/* harmony import */ var _js_ajax_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/ajax.js */ "./assets/js/ajax.js");
/* harmony import */ var _js_ajax_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_ajax_js__WEBPACK_IMPORTED_MODULE_5__);

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

/***/ "./assets/js/ajax.js":
/*!***************************!*\
  !*** ./assets/js/ajax.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-button');
  var resultsContainer = document.getElementById('results');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filterValue = button.getAttribute('data-filter');
      fetch("/filter-page?filterGetValue=".concat(encodeURIComponent(filterValue)), {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP error! status: ".concat(response.status));
        }
        return response.text();
      }).then(function (html) {
        resultsContainer.innerHTML = html;
      })["catch"](function (error) {
        console.error('Erreur lors du filtrage :', error);
      });
    });
  });
});

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
  console.log('🎯 Menuover OFF');
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_swiper_modules_effect-coverflow_css-node_modules_swiper_modules_navigati-f65172"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ2xDO0FBQ0o7QUFDQXZELE1BQU0sQ0FBQ3FELGNBQWMsR0FBR0EsY0FBYyxDOzs7Ozs7Ozs7Ozs7QUNoRHRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudW92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0YXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zd2lwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vanMvc3RhcnMuanMnO1xyXG5pbXBvcnQgJy4vanMvc3dpcHBlci5qcyc7XHJcbmltcG9ydCAnLi9qcy9tZW51b3Zlci5qcyc7XHJcbmltcG9ydCAnLi9qcy9hamF4LmpzJztcclxuXHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG5cclxuXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1idXR0b24nKTtcclxuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2goYC9maWx0ZXItcGFnZT9maWx0ZXJHZXRWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZSl9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgZmlsdHJhZ2UgOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIlxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZU1hc3F1ZXNcIik7XHJcbiAgICBjb25zdCBzdWJtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtZW51TWFzcXVlc1wiKTtcclxuXHJcbiAgICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDim5QgT24gYmxvcXVlIGxhIHJlZGlyZWN0aW9uIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgc3VibWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2lub24gKGRlc2t0b3ApLCBvbiBsYWlzc2UgbGEgcmVkaXJlY3Rpb24gc2UgZmFpcmUgbm9ybWFsZW1lbnRcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ/Cfjq8gTWVudW92ZXIgT0ZGJyk7XHJcbn0pO1xyXG4iLCJjb25zb2xlLmxvZygn8J+OryBEw6lidXQgZHUgc3RhcnMuanMnKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygn4pyoIHN0YXJzLmpzIERPTSBsb2FkZWQnKTtcclxuXHJcbiAgICAvLyDinIUgQ2VzIGRldXggbGlnbmVzIGRvaXZlbnQgw6p0cmUgYXZhbnQgbGVzIGNvbmRpdGlvbnMgOlxyXG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3Rhci13aWRnZXQgLnN0YXInKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGF0aW9uX25vdGVfaGlkZGVuJyk7XHJcbiAgICBjb25zdCBmb3JtID0gaW5wdXQ/LmZvcm07XHJcblxyXG4gICAgLy8g8J+UjSBSw6ljdXDDqHJlIGwnaW5mbyA6IGEtdC1pbCBkw6lqw6Agbm90w6kgP1xyXG4gICAgY29uc3QgYWxyZWFkeVJhdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXItd2lkZ2V0JykuZGF0YXNldC5hbHJlYWR5UmF0ZWQgPT09IFwiMVwiO1xyXG5cclxuICAgIGlmICghaW5wdXQgfHwgIWZvcm0gfHwgc3RhcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfim5QgTGUgY2hhbXAgb3UgbGUgZm9ybXVsYWlyZSBlc3QgbWFucXVhbnQuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJzLmZvckVhY2goKHN0YXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBpbmRleCArIDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWxyZWFkeVJhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSBjb25maXJtKCdWb3VzIGF2ZXogZMOpasOgIG5vdMOpIGNlIG1hc3F1ZS4gVm91bGV6LXZvdXMgbW9kaWZpZXIgdm90cmUgbm90ZSA/Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuOyAvLyBhbm51bGUgbGUgY2xpY1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICBoaWdobGlnaHRTdGFycyhpbmRleCk7XHJcbiAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7IC8vIOKchSBlbnZvaWUgbGUgZm9ybXVsYWlyZSBtYW51ZWxsZW1lbnRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBoaWdobGlnaHRTdGFycyhpbmRleCkpO1xyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiBoaWdobGlnaHRTdGFycyhwYXJzZUludChpbnB1dC52YWx1ZSkgLSAxKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0U3RhcnMoaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMykgaW5kZXggPSAzOyAvLyBjYXIgaW5kZXggPSB2YWxldXIgLSAxXHJcbiAgICAgICAgICAgIHN0YXJzLmZvckVhY2goKHN0YXIsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXIuc3R5bGUuY29sb3IgPSBpIDw9IGluZGV4ID8gJ2dvbGQnIDogJyM4ODgnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA+IDQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoaWdobGlnaHRTdGFycyhwYXJzZUludChpbnB1dC52YWx1ZSkgLSAxKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24sIEVmZmVjdENvdmVyZmxvdywgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL2VmZmVjdC1jb3ZlcmZsb3cnO1xyXG5cclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgRWZmZWN0Q292ZXJmbG93LCBBdXRvcGxheV0sXHJcbiAgZWZmZWN0OiAnY292ZXJmbG93JyxcclxuICBncmFiQ3Vyc29yOiB0cnVlLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICBsb29wOiB0cnVlLFxyXG4gIGNvdmVyZmxvd0VmZmVjdDoge1xyXG4gICAgcm90YXRlOiAwLFxyXG4gICAgc3RyZXRjaDogMCxcclxuICAgIGRlcHRoOiAxMDAsXHJcbiAgICBtb2RpZmllcjogMi41LFxyXG4gICAgc2xpZGVTaGFkb3dzOiBmYWxzZSxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDI1MDAsXHJcbiAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgfSxcclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgZmxhc2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nbG9iYWwtZmxhc2gnKTtcclxuICBmbGFzaGVzLmZvckVhY2goZmxhc2ggPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGZsYXNoLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gZmxhc2gucmVtb3ZlKCksIDUwMCk7IC8vIHJldGlyZSBsZSBmbGFzaCBhcHLDqHMgbCdhbmltYXRpb25cclxuICAgIH0sIDQwMDApOyAvLyBhcHLDqHMgNCBzZWNvbmRlc1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIEpTIHBvdXIgbGEgcmVjaGVyY2hlIGF2YW5jw6llXHJcbmZ1bmN0aW9uIHRvZ2dsZUFkdmFuY2VkKCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHZhbmNlZFNlYXJjaCcpO1xyXG4gICAgaWYgKHNlY3Rpb24uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IHNlY3Rpb24uc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcclxuICAgICAgICBzZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxud2luZG93LnRvZ2dsZUFkdmFuY2VkID0gdG9nZ2xlQWR2YW5jZWQ7XHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInJlc3VsdHNDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImZvckVhY2giLCJidXR0b24iLCJmaWx0ZXJWYWx1ZSIsImdldEF0dHJpYnV0ZSIsImZldGNoIiwiY29uY2F0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJ0ZXh0IiwiaHRtbCIsImlubmVySFRNTCIsImVycm9yIiwidG9nZ2xlQnRuIiwic3VibWVudSIsImUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzdGFycyIsImlucHV0IiwiZm9ybSIsImFscmVhZHlSYXRlZCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwibGVuZ3RoIiwid2FybiIsInN0YXIiLCJpbmRleCIsIm5ld1ZhbHVlIiwiY29uZmlybWVkIiwiY29uZmlybSIsInZhbHVlIiwiaGlnaGxpZ2h0U3RhcnMiLCJzdWJtaXQiLCJwYXJzZUludCIsImkiLCJzdHlsZSIsImNvbG9yIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIkVmZmVjdENvdmVyZmxvdyIsIkF1dG9wbGF5Iiwic3dpcGVyIiwibW9kdWxlcyIsImVmZmVjdCIsImdyYWJDdXJzb3IiLCJjZW50ZXJlZFNsaWRlcyIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJzbGlkZVNoYWRvd3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiZmxhc2hlcyIsImZsYXNoIiwic2V0VGltZW91dCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZUFkdmFuY2VkIiwic2VjdGlvbiIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9