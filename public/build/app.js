(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/css/effect-coverflow */ "./node_modules/swiper/modules/effect-coverflow.css");








/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');





var swiper = new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]('.swiper', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_10__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_10__.EffectCoverflow, swiper_modules__WEBPACK_IMPORTED_MODULE_10__.Autoplay],
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
    stars.forEach(function (star, i) {
      star.style.color = i <= index ? 'gold' : '#888';
    });
  }
  if (input.value) {
    highlightStars(parseInt(input.value) - 1);
  }
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ (() => {



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDWSxLQUFLLEVBQUU7SUFDYkMsY0FBYyxDQUFDRSxRQUFRLENBQUNmLEtBQUssQ0FBQ1ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzdDO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcblxyXG5cclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBFZmZlY3RDb3ZlcmZsb3csIEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9lZmZlY3QtY292ZXJmbG93JztcclxuXHJcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb24sIEVmZmVjdENvdmVyZmxvdywgQXV0b3BsYXldLFxyXG4gIGVmZmVjdDogJ2NvdmVyZmxvdycsXHJcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuICAgIHJvdGF0ZTogMCxcclxuICAgIHN0cmV0Y2g6IDAsXHJcbiAgICBkZXB0aDogMTAwLFxyXG4gICAgbW9kaWZpZXI6IDIuNSxcclxuICAgIHNsaWRlU2hhZG93czogZmFsc2UsXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIGRlbGF5OiAyNTAwLFxyXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IGZsYXNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2xvYmFsLWZsYXNoJyk7XHJcbiAgZmxhc2hlcy5mb3JFYWNoKGZsYXNoID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmbGFzaC5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGZsYXNoLnJlbW92ZSgpLCA1MDApOyAvLyByZXRpcmUgbGUgZmxhc2ggYXByw6hzIGwnYW5pbWF0aW9uXHJcbiAgICB9LCA0MDAwKTsgLy8gYXByw6hzIDQgc2Vjb25kZXNcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBKUyBwb3VyIGxhIHJlY2hlcmNoZSBhdmFuY8OpZVxyXG5mdW5jdGlvbiB0b2dnbGVBZHZhbmNlZCgpIHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWR2YW5jZWRTZWFyY2gnKTtcclxuICAgIGlmIChzZWN0aW9uLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBzZWN0aW9uLnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XHJcbiAgICAgICAgc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy50b2dnbGVBZHZhbmNlZCA9IHRvZ2dsZUFkdmFuY2VkO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCfwn46vIETDqWJ1dCBkdSBzdGFycy5qcycpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCfinKggc3RhcnMuanMgRE9NIGxvYWRlZCcpO1xyXG5cclxuICAgIC8vIOKchSBDZXMgZGV1eCBsaWduZXMgZG9pdmVudCDDqnRyZSBhdmFudCBsZXMgY29uZGl0aW9ucyA6XHJcbiAgICBjb25zdCBzdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzdGFyLXdpZGdldCAuc3RhcicpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90YXRpb25fbm90ZV9oaWRkZW4nKTtcclxuICAgIGNvbnN0IGZvcm0gPSBpbnB1dD8uZm9ybTtcclxuXHJcbiAgICAvLyDwn5SNIFLDqWN1cMOocmUgbCdpbmZvIDogYS10LWlsIGTDqWrDoCBub3TDqSA/XHJcbiAgICBjb25zdCBhbHJlYWR5UmF0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Rhci13aWRnZXQnKS5kYXRhc2V0LmFscmVhZHlSYXRlZCA9PT0gXCIxXCI7XHJcblxyXG4gICAgaWYgKCFpbnB1dCB8fCAhZm9ybSB8fCBzdGFycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ+KblCBMZSBjaGFtcCBvdSBsZSBmb3JtdWxhaXJlIGVzdCBtYW5xdWFudC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnMuZm9yRWFjaCgoc3RhciwgaW5kZXgpID0+IHtcclxuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGluZGV4ICsgMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhbHJlYWR5UmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IGNvbmZpcm0oJ1ZvdXMgYXZleiBkw6lqw6Agbm90w6kgY2UgbWFzcXVlLiBWb3VsZXotdm91cyBtb2RpZmllciB2b3RyZSBub3RlID8nKTtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlybWVkKSByZXR1cm47IC8vIGFubnVsZSBsZSBjbGljXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodFN0YXJzKGluZGV4KTtcclxuICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTsgLy8g4pyFIGVudm9pZSBsZSBmb3JtdWxhaXJlIG1hbnVlbGxlbWVudFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IGhpZ2hsaWdodFN0YXJzKGluZGV4KSk7XHJcbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IGhpZ2hsaWdodFN0YXJzKHBhcnNlSW50KGlucHV0LnZhbHVlKSAtIDEpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZ2hsaWdodFN0YXJzKGluZGV4KSB7XHJcbiAgICAgICAgc3RhcnMuZm9yRWFjaCgoc3RhciwgaSkgPT4ge1xyXG4gICAgICAgICAgICBzdGFyLnN0eWxlLmNvbG9yID0gaSA8PSBpbmRleCA/ICdnb2xkJyA6ICcjODg4JztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUpIHtcclxuICAgICAgICBoaWdobGlnaHRTdGFycyhwYXJzZUludChpbnB1dC52YWx1ZSkgLSAxKTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIkVmZmVjdENvdmVyZmxvdyIsIkF1dG9wbGF5Iiwic3dpcGVyIiwibW9kdWxlcyIsImVmZmVjdCIsImdyYWJDdXJzb3IiLCJjZW50ZXJlZFNsaWRlcyIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJzbGlkZVNoYWRvd3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmxhc2hlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZmxhc2giLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlQWR2YW5jZWQiLCJzZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJzdGFycyIsImlucHV0IiwiZm9ybSIsImFscmVhZHlSYXRlZCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwibGVuZ3RoIiwid2FybiIsInN0YXIiLCJpbmRleCIsIm5ld1ZhbHVlIiwiY29uZmlybWVkIiwiY29uZmlybSIsInZhbHVlIiwiaGlnaGxpZ2h0U3RhcnMiLCJzdWJtaXQiLCJwYXJzZUludCIsImkiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=