(function () {
  'use strict';

  /**
   *  Copyright 2018 Adobe. All rights reserved.
   *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
   *  you may not use this file except in compliance with the License. You may obtain a copy
   *  of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   *  Unless required by applicable law or agreed to in writing, software distributed under
   *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   *  OF ANY KIND, either express or implied. See the License for the specific language
   *  governing permissions and limitations under the License.
   */

  // Provides explicit indication of elements receiving focus through keyboard interaction rather than mouse or touch.
  (function(doc) {
    // In case file is imported in SSR context, don't polyfill anything
    if (!doc) {
      return;
    }

    var NAVIGATION_KEYS = [
      'Tab',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'ArrowLeft',
      'Home',
      'End',
      'PageUp',
      'PageDown',
      'Enter',
      ' ',
      'Escape',

      /* IE9 and Firefox < 37 */
      'Up',
      'Right',
      'Down',
      'Left',
      'Esc'
    ];
    var TEXT_INPUT_TYPES = [
      'text',
      'date',
      'datetime-local',
      'email',
      'month',
      'number',
      'password',
      'search',
      'tel',
      'time',
      'url',
      'week'
    ];
    var keyboardFocus = false;
    var elements = doc.getElementsByClassName('focus-ring');

    function onKeydownHandler(event) {
      if (event.ctrlKey || event.altKey || event.metaKey || NAVIGATION_KEYS.indexOf(event.key) === -1) {
        return;
      }
      keyboardFocus = true;

      if (doc.activeElement &&
          doc.activeElement !== doc.body &&
          doc.activeElement.tagName !== 'TEXTAREA' &&
          !(doc.activeElement.tagName === 'INPUT' &&
            TEXT_INPUT_TYPES.indexOf(doc.activeElement.type) !== -1)) {
        doc.activeElement.classList.add('focus-ring');
      }
    }

    function onMousedownHandler() {
      keyboardFocus = false;

      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('focus-ring');
      }

    }

    function onFocusHandler(event) {
      var classList = event.target.classList;
      if (classList && keyboardFocus) {
        classList.add('focus-ring');
      }
    }

    function onBlurHandler(event) {
      var classList = event.target.classList;
      classList && classList.remove('focus-ring');
    }

    doc.addEventListener('keydown', onKeydownHandler, true);
    doc.addEventListener('mousedown', onMousedownHandler, true);
    doc.addEventListener('focus', onFocusHandler, true);
    doc.addEventListener('blur', onBlurHandler, true);
  })(typeof window === "undefined" ? undefined : document);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@import url('https://use.typekit.net/xcj1vcp.css');\n\n.spectrum {  /* spectrum-animationGlobals.css */\n  --spectrum-global-animation-duration-0: 0ms;\n  --spectrum-global-animation-duration-100: 130ms;\n  --spectrum-global-animation-duration-200: 160ms;\n  --spectrum-global-animation-duration-300: 190ms;\n  --spectrum-global-animation-duration-400: 220ms;\n  --spectrum-global-animation-duration-500: 250ms;\n  --spectrum-global-animation-duration-600: 300ms;\n  --spectrum-global-animation-duration-700: 350ms;\n  --spectrum-global-animation-duration-800: 400ms;\n  --spectrum-global-animation-duration-900: 450ms;\n  --spectrum-global-animation-duration-1000: 500ms;\n  --spectrum-global-animation-duration-2000: 1000ms;\n  --spectrum-global-animation-duration-4000: 2000ms;\n  --spectrum-global-animation-ease-in-out: cubic-bezier(.45, 0, .40, 1);\n  --spectrum-global-animation-ease-in: cubic-bezier(.50, 0, 1, 1);\n  --spectrum-global-animation-ease-out: cubic-bezier(0, 0, 0.40, 1);\n  --spectrum-global-animation-linear: cubic-bezier(0, 0, 1, 1);\n\n\n  /* spectrum-colorGlobals.css */\n  --spectrum-global-color-static-black: rgb(0, 0, 0);\n  --spectrum-global-color-static-white: rgb(255, 255, 255);\n  --spectrum-global-color-static-blue: rgb(20, 115, 230);\n  --spectrum-global-color-static-gray-50: rgb(255, 255, 255);\n  --spectrum-global-color-static-gray-75: rgb(255, 255, 255);\n  --spectrum-global-color-static-gray-100: rgb(255, 255, 255);\n  --spectrum-global-color-static-gray-200: rgb(244, 244, 244);\n  --spectrum-global-color-static-gray-300: rgb(234, 234, 234);\n  --spectrum-global-color-static-gray-400: rgb(211, 211, 211);\n  --spectrum-global-color-static-gray-500: rgb(188, 188, 188);\n  --spectrum-global-color-static-gray-600: rgb(149, 149, 149);\n  --spectrum-global-color-static-gray-700: rgb(116, 116, 116);\n  --spectrum-global-color-static-gray-800: rgb(80, 80, 80);\n  --spectrum-global-color-static-gray-900: rgb(50, 50, 50);\n  --spectrum-global-color-static-blue-200: rgb(90, 169, 250);\n  --spectrum-global-color-static-blue-300: rgb(75, 156, 245);\n  --spectrum-global-color-static-blue-400: rgb(55, 142, 240);\n  --spectrum-global-color-static-blue-500: rgb(38, 128, 235);\n  --spectrum-global-color-static-blue-600: rgb(20, 115, 230);\n  --spectrum-global-color-static-blue-700: rgb(13, 102, 208);\n  --spectrum-global-color-static-red-400: rgb(236, 91, 98);\n  --spectrum-global-color-static-red-500: rgb(227, 72, 80);\n  --spectrum-global-color-static-red-600: rgb(215, 55, 63);\n  --spectrum-global-color-static-red-700: rgb(201, 37, 45);\n  --spectrum-global-color-static-orange-400: rgb(242, 148, 35);\n  --spectrum-global-color-static-orange-500: rgb(230, 134, 25);\n  --spectrum-global-color-static-orange-600: rgb(218, 123, 17);\n  --spectrum-global-color-static-orange-700: rgb(203, 111, 16);\n  --spectrum-global-color-static-green-400: rgb(51, 171, 132);\n  --spectrum-global-color-static-green-500: rgb(45, 157, 120);\n  --spectrum-global-color-static-green-600: rgb(38, 142, 108);\n  --spectrum-global-color-static-green-700: rgb(18, 128, 92);\n  --spectrum-global-color-static-celery-200: rgb(88, 224, 111);\n  --spectrum-global-color-static-celery-300: rgb(81, 210, 103);\n  --spectrum-global-color-static-celery-400: rgb(75, 195, 95);\n  --spectrum-global-color-static-celery-500: rgb(68, 181, 86);\n  --spectrum-global-color-static-celery-600: rgb(61, 167, 78);\n  --spectrum-global-color-static-celery-700: rgb(55, 153, 71);\n  --spectrum-global-color-static-chartreuse-300: rgb(155, 236, 84);\n  --spectrum-global-color-static-chartreuse-400: rgb(142, 222, 73);\n  --spectrum-global-color-static-chartreuse-500: rgb(133, 208, 68);\n  --spectrum-global-color-static-chartreuse-600: rgb(124, 195, 63);\n  --spectrum-global-color-static-chartreuse-700: rgb(115, 181, 58);\n  --spectrum-global-color-static-yellow-200: rgb(255, 226, 46);\n  --spectrum-global-color-static-yellow-300: rgb(250, 217, 0);\n  --spectrum-global-color-static-yellow-400: rgb(237, 204, 0);\n  --spectrum-global-color-static-yellow-500: rgb(223, 191, 0);\n  --spectrum-global-color-static-yellow-600: rgb(210, 178, 0);\n  --spectrum-global-color-static-yellow-700: rgb(196, 166, 0);\n  --spectrum-global-color-static-magenta-200: rgb(245, 107, 183);\n  --spectrum-global-color-static-magenta-300: rgb(236, 90, 170);\n  --spectrum-global-color-static-magenta-400: rgb(226, 73, 157);\n  --spectrum-global-color-static-magenta-500: rgb(216, 55, 144);\n  --spectrum-global-color-static-magenta-600: rgb(202, 41, 130);\n  --spectrum-global-color-static-magenta-700: rgb(188, 28, 116);\n  --spectrum-global-color-static-fuchsia-400: rgb(207, 62, 220);\n  --spectrum-global-color-static-fuchsia-500: rgb(192, 56, 204);\n  --spectrum-global-color-static-fuchsia-600: rgb(177, 48, 189);\n  --spectrum-global-color-static-fuchsia-700: rgb(162, 40, 173);\n  --spectrum-global-color-static-purple-400: rgb(157, 100, 225);\n  --spectrum-global-color-static-purple-500: rgb(146, 86, 217);\n  --spectrum-global-color-static-purple-600: rgb(134, 76, 204);\n  --spectrum-global-color-static-purple-700: rgb(122, 66, 191);\n  --spectrum-global-color-static-purple-800: rgb(111, 56, 177);\n  --spectrum-global-color-static-indigo-200: rgb(144, 144, 250);\n  --spectrum-global-color-static-indigo-300: rgb(130, 130, 246);\n  --spectrum-global-color-static-indigo-400: rgb(117, 117, 241);\n  --spectrum-global-color-static-indigo-500: rgb(103, 103, 236);\n  --spectrum-global-color-static-indigo-600: rgb(92, 92, 224);\n  --spectrum-global-color-static-indigo-700: rgb(81, 81, 211);\n  --spectrum-global-color-static-seafoam-200: rgb(38, 192, 199);\n  --spectrum-global-color-static-seafoam-300: rgb(35, 178, 184);\n  --spectrum-global-color-static-seafoam-400: rgb(32, 163, 168);\n  --spectrum-global-color-static-seafoam-500: rgb(27, 149, 154);\n  --spectrum-global-color-static-seafoam-600: rgb(22, 135, 140);\n  --spectrum-global-color-static-seafoam-700: rgb(15, 121, 125);\n  --spectrum-global-color-opacity-100: 1;\n  --spectrum-global-color-opacity-90: 0.9;\n  --spectrum-global-color-opacity-80: 0.8;\n  --spectrum-global-color-opacity-60: 0.6;\n  --spectrum-global-color-opacity-50: 0.5;\n  --spectrum-global-color-opacity-40: 0.4;\n  --spectrum-global-color-opacity-30: 0.3;\n  --spectrum-global-color-opacity-25: 0.25;\n  --spectrum-global-color-opacity-20: 0.2;\n  --spectrum-global-color-opacity-15: 0.15;\n  --spectrum-global-color-opacity-10: 0.1;\n  --spectrum-global-color-opacity-8: 0.08;\n  --spectrum-global-color-opacity-7: 0.07;\n  --spectrum-global-color-opacity-6: 0.06;\n  --spectrum-global-color-opacity-5: 0.05;\n  --spectrum-global-color-opacity-4: 0.04;\n  --spectrum-global-color-sequential-cerulean: [\"#E9FFF1\",\"#C8F1E4\",\"#A5E3D7\",\"#82D5CA\",\"#68C5C1\",\"#54B4BA\",\"#3FA2B2\",\"#2991AC\",\"#2280A2\",\"#1F6D98\",\"#1D5C8D\",\"#1A4B83\",\"#1A3979\",\"#1A266F\",\"#191264\",\"#180057\"];\n  --spectrum-global-color-sequential-forest: [\"#FFFFDF\", \"#E2F6BA\", \"#C4EB95\", \"#A4E16D\", \"#8DD366\", \"#77C460\", \"#5FB65A\", \"#48A754\", \"#36984F\", \"#2C894D\", \"#237A4A\", \"#196B47\", \"#105C45\", \"#094D41\", \"#033F3E\", \"#00313A\"];\n  --spectrum-global-color-sequential-rose: [\"#FFF4DD\", \"#FFDDD7\", \"#FFC5D2\", \"#FEAECB\", \"#FA96C4\", \"#F57EBD\", \"#EF64B5\", \"#E846AD\", \"#D238A1\", \"#BB2E96\", \"#A3248C\", \"#8A1B83\", \"#71167C\", \"#560F74\", \"#370B6E\", \"#000968\"];\n  --spectrum-global-color-diverging-orange-yellow-seafoam: [\"#580000\", \"#79260B\", \"#9C4511\", \"#BD651A\", \"#DD8629\", \"#F5AD52\", \"#FED693\", \"#FFFFE0\", \"#BBE4D1\", \"#76C7BE\", \"#3EA8A6\", \"#208288\", \"#076769\", \"#00494B\", \"#002C2D\"];\n  --spectrum-global-color-diverging-red-yellow-blue: [\"#4A001E\", \"#751232\", \"#A52747\", \"#C65154\", \"#E47961\", \"#F0A882\", \"#FAD4AC\", \"#FFFFE0\", \"#BCE2CF\", \"#89C0C4\", \"#579EB9\", \"#397AA8\", \"#1C5796\", \"#163771\", \"#10194D\"];\n  --spectrum-global-color-diverging-red-blue: [\"#4A001E\", \"#731331\", \"#9F2945\", \"#CC415A\", \"#E06E85\", \"#ED9AB0\", \"#F8C3D9\", \"#FAF0FF\", \"#C6D0F2\", \"#92B2DE\", \"#5D94CB\", \"#2F74B3\", \"#265191\", \"#163670\", \"#0B194C\"];\n\n\n  /* spectrum-colorSemantics.css */\n  --spectrum-semantic-negative-color-background: var(--spectrum-global-color-static-red-700);\n  --spectrum-semantic-negative-color-default: var(--spectrum-global-color-red-500);\n  --spectrum-semantic-negative-color-dark: var(--spectrum-global-color-red-600);\n  --spectrum-semantic-negative-color-border: var(--spectrum-global-color-red-400);\n  --spectrum-semantic-negative-color-icon: var(--spectrum-global-color-red-600);\n  --spectrum-semantic-negative-color-status: var(--spectrum-global-color-red-400);\n  --spectrum-semantic-negative-color-text-large: var(--spectrum-global-color-red-500);\n  --spectrum-semantic-negative-color-text-small: var(--spectrum-global-color-red-600);\n  --spectrum-semantic-negative-color-state-down: var(--spectrum-global-color-red-700);\n  --spectrum-semantic-negative-color-state-focus: var(--spectrum-global-color-red-400);\n  --spectrum-semantic-notice-color-background: var(--spectrum-global-color-static-orange-700);\n  --spectrum-semantic-notice-color-default: var(--spectrum-global-color-orange-500);\n  --spectrum-semantic-notice-color-dark: var(--spectrum-global-color-orange-600);\n  --spectrum-semantic-notice-color-border: var(--spectrum-global-color-orange-400);\n  --spectrum-semantic-notice-color-icon: var(--spectrum-global-color-orange-600);\n  --spectrum-semantic-notice-color-status: var(--spectrum-global-color-orange-400);\n  --spectrum-semantic-notice-color-text-large: var(--spectrum-global-color-orange-500);\n  --spectrum-semantic-notice-color-text-small: var(--spectrum-global-color-orange-600);\n  --spectrum-semantic-notice-color-state-down: var(--spectrum-global-color-orange-700);\n  --spectrum-semantic-notice-color-state-focus: var(--spectrum-global-color-orange-400);\n  --spectrum-semantic-positive-color-background: var(--spectrum-global-color-static-green-700);\n  --spectrum-semantic-positive-color-default: var(--spectrum-global-color-green-500);\n  --spectrum-semantic-positive-color-dark: var(--spectrum-global-color-green-600);\n  --spectrum-semantic-positive-color-border: var(--spectrum-global-color-green-400);\n  --spectrum-semantic-positive-color-icon: var(--spectrum-global-color-green-600);\n  --spectrum-semantic-positive-color-status: var(--spectrum-global-color-green-400);\n  --spectrum-semantic-positive-color-text-large: var(--spectrum-global-color-green-500);\n  --spectrum-semantic-positive-color-text-small: var(--spectrum-global-color-green-600);\n  --spectrum-semantic-positive-color-state-down: var(--spectrum-global-color-green-700);\n  --spectrum-semantic-positive-color-state-focus: var(--spectrum-global-color-green-400);\n  --spectrum-semantic-informative-color-background: var(--spectrum-global-color-static-blue-700);\n  --spectrum-semantic-informative-color-default: var(--spectrum-global-color-blue-500);\n  --spectrum-semantic-informative-color-dark: var(--spectrum-global-color-blue-600);\n  --spectrum-semantic-informative-color-border: var(--spectrum-global-color-blue-400);\n  --spectrum-semantic-informative-color-icon: var(--spectrum-global-color-blue-600);\n  --spectrum-semantic-informative-color-status: var(--spectrum-global-color-blue-400);\n  --spectrum-semantic-informative-color-text-large: var(--spectrum-global-color-blue-500);\n  --spectrum-semantic-informative-color-text-small: var(--spectrum-global-color-blue-600);\n  --spectrum-semantic-informative-color-state-down: var(--spectrum-global-color-blue-700);\n  --spectrum-semantic-informative-color-state-focus: var(--spectrum-global-color-blue-400);\n  --spectrum-semantic-cta-color-background-default: var(--spectrum-global-color-static-blue-600);\n  --spectrum-semantic-cta-color-background-hover: var(--spectrum-global-color-static-blue-700);\n  --spectrum-semantic-cta-color-background-down: var(--spectrum-global-color-static-blue-700);\n  --spectrum-semantic-cta-color-background-key-focus: var(--spectrum-global-color-static-blue-600);\n  --spectrum-semantic-background-color-key-focus: var(--spectrum-global-color-static-blue-600);\n  --spectrum-semantic-neutral-color-background: var(--spectrum-global-color-static-gray-700);\n  --spectrum-semantic-presence-color-1: var(--spectrum-global-color-static-red-500);\n  --spectrum-semantic-presence-color-2: var(--spectrum-global-color-static-orange-400);\n  --spectrum-semantic-presence-color-3: var(--spectrum-global-color-static-yellow-400);\n  --spectrum-semantic-presence-color-4: rgb(75, 204, 162);\n  --spectrum-semantic-presence-color-5: rgb(0, 199, 255);\n  --spectrum-semantic-presence-color-6: rgb(0, 140, 184);\n  --spectrum-semantic-presence-color-7: rgb(126, 75, 243);\n  --spectrum-semantic-presence-color-8: var(--spectrum-global-color-static-fuchsia-600);\n\n\n  /* spectrum-dimensionGlobals.css */\n  --spectrum-global-dimension-static-size-0: 0px;\n  --spectrum-global-dimension-static-size-10: 1px;\n  --spectrum-global-dimension-static-size-25: 2px;\n  --spectrum-global-dimension-static-size-50: 4px;\n  --spectrum-global-dimension-static-size-40: 3px;\n  --spectrum-global-dimension-static-size-65: 5px;\n  --spectrum-global-dimension-static-size-100: 8px;\n  --spectrum-global-dimension-static-size-115: 9px;\n  --spectrum-global-dimension-static-size-125: 10px;\n  --spectrum-global-dimension-static-size-150: 12px;\n  --spectrum-global-dimension-static-size-175: 14px;\n  --spectrum-global-dimension-static-size-200: 16px;\n  --spectrum-global-dimension-static-size-225: 18px;\n  --spectrum-global-dimension-static-size-250: 20px;\n  --spectrum-global-dimension-static-size-300: 24px;\n  --spectrum-global-dimension-static-size-400: 32px;\n  --spectrum-global-dimension-static-size-450: 36px;\n  --spectrum-global-dimension-static-size-500: 40px;\n  --spectrum-global-dimension-static-size-550: 44px;\n  --spectrum-global-dimension-static-size-600: 48px;\n  --spectrum-global-dimension-static-size-700: 56px;\n  --spectrum-global-dimension-static-size-800: 64px;\n  --spectrum-global-dimension-static-size-900: 72px;\n  --spectrum-global-dimension-static-size-1000: 80px;\n  --spectrum-global-dimension-static-size-1200: 96px;\n  --spectrum-global-dimension-static-size-1700: 136px;\n  --spectrum-global-dimension-static-size-2400: 192px;\n  --spectrum-global-dimension-static-size-2600: 208px;\n  --spectrum-global-dimension-static-size-3400: 272px;\n  --spectrum-global-dimension-static-size-3600: 288px;\n  --spectrum-global-dimension-static-size-4600: 368px;\n  --spectrum-global-dimension-static-size-5000: 400px;\n  --spectrum-global-dimension-static-size-6000: 480px;\n  --spectrum-global-dimension-static-font-size-50: 11px;\n  --spectrum-global-dimension-static-font-size-75: 12px;\n  --spectrum-global-dimension-static-font-size-100: 14px;\n  --spectrum-global-dimension-static-font-size-150: 15px;\n  --spectrum-global-dimension-static-font-size-200: 16px;\n  --spectrum-global-dimension-static-font-size-300: 18px;\n  --spectrum-global-dimension-static-font-size-400: 20px;\n  --spectrum-global-dimension-static-font-size-500: 22px;\n  --spectrum-global-dimension-static-font-size-600: 25px;\n  --spectrum-global-dimension-static-font-size-700: 28px;\n  --spectrum-global-dimension-static-font-size-800: 32px;\n  --spectrum-global-dimension-static-font-size-900: 36px;\n  --spectrum-global-dimension-static-font-size-1000: 40px;\n  --spectrum-global-dimension-static-percent-50: 50%;\n  --spectrum-global-dimension-static-percent-100: 100%;\n  --spectrum-global-dimension-static-breakpoint-xsmall: 304px;\n  --spectrum-global-dimension-static-breakpoint-small: 768px;\n  --spectrum-global-dimension-static-breakpoint-medium: 1280px;\n  --spectrum-global-dimension-static-breakpoint-large: 1768px;\n  --spectrum-global-dimension-static-breakpoint-xlarge: 2160px;\n  --spectrum-global-dimension-static-grid-columns: 12;\n  --spectrum-global-dimension-static-grid-fluid-width: 100%;\n  --spectrum-global-dimension-static-grid-fixed-max-width: 1280px;\n\n\n  /* spectrum-fontGlobals.css */\n  --spectrum-global-font-family-base: adobe-clean, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;\n  --spectrum-global-font-family-serif: adobe-clean-serif, 'Source Serif Pro', Georgia, serif;\n  --spectrum-global-font-family-code: 'Source Code Pro', Monaco, monospace;\n  --spectrum-global-font-weight-thin: 100;\n  --spectrum-global-font-weight-ultra-light: 200;\n  --spectrum-global-font-weight-light: 300;\n  --spectrum-global-font-weight-regular: 400;\n  --spectrum-global-font-weight-medium: 500;\n  --spectrum-global-font-weight-semi-bold: 600;\n  --spectrum-global-font-weight-bold: 700;\n  --spectrum-global-font-weight-extra-bold: 800;\n  --spectrum-global-font-weight-black: 900;\n  --spectrum-global-font-style-regular: normal;\n  --spectrum-global-font-style-italic: italic;\n  --spectrum-global-font-letter-spacing-none: 0;\n  --spectrum-global-font-letter-spacing-small: 0.0125em;\n  --spectrum-global-font-letter-spacing-han: 0.05em;\n  --spectrum-global-font-letter-spacing-medium: 0.06em;\n  --spectrum-global-font-line-height-large: 1.7;\n  --spectrum-global-font-line-height-medium: 1.5;\n  --spectrum-global-font-line-height-small: 1.3;\n  --spectrum-global-font-multiplier-25: 0.25em;\n  --spectrum-global-font-multiplier-75: 0.75em;\n\n\n  /* spectrum-staticAliases.css */\n  --spectrum-alias-border-size-thin: var(--spectrum-global-dimension-static-size-10);\n  --spectrum-alias-border-size-thick: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-alias-border-size-thicker: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-alias-border-size-thickest: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-alias-border-offset-thin: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-alias-border-offset-thick: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-alias-border-offset-thicker: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-alias-border-offset-thickest: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-alias-grid-baseline: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-alias-grid-gutter-xsmall: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-alias-grid-gutter-small: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-alias-grid-gutter-medium: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-alias-grid-gutter-large: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-alias-grid-gutter-xlarge: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-alias-grid-margin-xsmall: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-alias-grid-margin-small: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-alias-grid-margin-medium: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-alias-grid-margin-large: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-alias-grid-margin-xlarge: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-alias-grid-layout-region-margin-bottom-xsmall: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-alias-grid-layout-region-margin-bottom-small: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-alias-grid-layout-region-margin-bottom-medium: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-alias-grid-layout-region-margin-bottom-large: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-alias-grid-layout-region-margin-bottom-xlarge: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-alias-radial-reaction-size-default: var(--spectrum-global-dimension-static-size-550);\n  --spectrum-alias-font-family-ar: myriad-arabic, adobe-clean, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;\n  --spectrum-alias-font-family-he: myriad-hebrew, adobe-clean, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;\n  --spectrum-alias-font-family-zh: adobe-clean-han-traditional, source-han-traditional, 'MingLiu', 'Heiti TC Light','sans-serif';\n  --spectrum-alias-font-family-zhhans: adobe-clean-han-simplified-c, source-han-simplified-c, 'SimSun', 'Heiti SC Light', 'sans-serif';\n  --spectrum-alias-font-family-ko: adobe-clean-han-korean, source-han-korean, 'Malgun Gothic', 'Apple Gothic', 'sans-serif';\n  --spectrum-alias-font-family-ja: adobe-clean-han-japanese, source-han-japanese, 'Yu Gothic', '\\30E1 \\30A4 \\30EA \\30AA', '\\30D2 \\30E9 \\30AE \\30CE \\89D2 \\30B4  Pro W3', 'Hiragino Kaku Gothic Pro W3', 'Osaka', '\\FF2D \\FF33 \\FF30 \\30B4 \\30B7 \\30C3 \\30AF', 'MS PGothic', 'sans-serif';\n  --spectrum-alias-font-family-condensed: adobe-clean-han-traditional, source-han-traditional, 'MingLiu', 'Heiti TC Light', adobe-clean, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;\n  --spectrum-alias-line-height-body: var(--spectrum-global-font-line-height-medium);\n  --spectrum-alias-line-height-title: var(--spectrum-global-font-line-height-small);\n  --spectrum-alias-body-han-text-line-height: var(--spectrum-global-font-line-height-large);\n  --spectrum-alias-body-text-font-family: var(--spectrum-global-font-family-base);\n  --spectrum-alias-body-text-line-height: var(--spectrum-global-font-line-height-medium);\n  --spectrum-alias-body-text-font-weight: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-body-text-font-weight-strong: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-button-text-line-height: var(--spectrum-global-font-line-height-small);\n  --spectrum-alias-heading-han-text-line-height: var(--spectrum-global-font-line-height-medium);\n  --spectrum-alias-heading-text-line-height: var(--spectrum-global-font-line-height-small);\n  --spectrum-alias-heading-text-font-weight-regular: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-heading-text-font-weight-regular-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-heading-text-font-weight-quiet: var(--spectrum-global-font-weight-light);\n  --spectrum-alias-heading-text-font-weight-quiet-strong: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-heading-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-heading-text-font-weight-strong-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-subheading-text-font-weight: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-subheading-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-detail-text-font-weight: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-detail-text-font-weight-light: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-detail-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-serif-text-font-family: var(--spectrum-global-font-family-serif);\n  --spectrum-alias-article-text-font-family: var(--spectrum-global-font-family-serif);\n  --spectrum-alias-article-body-text-font-weight: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-article-body-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-article-heading-text-font-weight: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-article-heading-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-article-heading-text-font-weight-quiet: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-article-heading-text-font-weight-quiet-strong: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-article-subheading-text-font-weight: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-article-subheading-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-article-detail-text-font-weight: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-article-detail-text-font-weight-strong: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-code-text-font-family: var(--spectrum-global-font-family-code);\n  --spectrum-alias-han-heading-text-font-weight-regular: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-han-heading-text-font-weight-regular-emphasis: var(--spectrum-global-font-weight-extra-bold);\n  --spectrum-alias-han-heading-text-font-weight-regular-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-heading-text-font-weight-quiet: var(--spectrum-global-font-weight-light);\n  --spectrum-alias-han-heading-text-font-weight-quiet-emphasis: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-han-heading-text-font-weight-quiet-strong: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-han-heading-text-font-weight-light: var(--spectrum-global-font-weight-light);\n  --spectrum-alias-han-heading-text-font-weight-light-emphasis: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-han-heading-text-font-weight-light-strong: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-han-heading-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-heading-text-font-weight-strong-emphasis: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-heading-text-font-weight-strong-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-heading-text-font-weight-heavy: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-heading-text-font-weight-heavy-emphasis: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-heading-text-font-weight-heavy-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-body-text-font-weight-regular: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-han-body-text-font-weight-emphasis: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-han-body-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-subheading-text-font-weight-regular: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-han-subheading-text-font-weight-emphasis: var(--spectrum-global-font-weight-extra-bold);\n  --spectrum-alias-han-subheading-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-han-detail-text-font-weight: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-han-detail-text-font-weight-emphasis: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-han-detail-text-font-weight-strong: var(--spectrum-global-font-weight-black);\n  --spectrum-alias-code-text-font-weight-regular: var(--spectrum-global-font-weight-regular);\n  --spectrum-alias-code-text-font-weight-strong: var(--spectrum-global-font-weight-bold);\n  --spectrum-alias-code-text-line-height: var(--spectrum-global-font-line-height-medium);\n  --spectrum-alias-heading-margin-bottom: var(--spectrum-global-font-multiplier-25);\n  --spectrum-alias-body-margin-bottom: var(--spectrum-global-font-multiplier-75);\n  --spectrum-alias-focus-ring-gap: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-alias-focus-ring-size: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-alias-loupe-entry-animation-duration: var(--spectrum-global-animation-duration-300);\n  --spectrum-alias-loupe-exit-animation-duration: var(--spectrum-global-animation-duration-300);\n\n}\n\n.spectrum--medium,\n.spectrum--large {\n  /* spectrum-dimensionAliases.css */\n  --spectrum-alias-dropshadow-blur: var(--spectrum-global-dimension-size-50);\n  --spectrum-alias-dropshadow-offset-y: var(--spectrum-global-dimension-size-10);\n  --spectrum-alias-font-size-default: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-alias-line-height-small: var(--spectrum-global-dimension-size-200);\n  --spectrum-alias-line-height-medium: var(--spectrum-global-dimension-size-250);\n  --spectrum-alias-line-height-large: var(--spectrum-global-dimension-size-300);\n  --spectrum-alias-line-height-xlarge: var(--spectrum-global-dimension-size-400);\n  --spectrum-alias-line-height-xxlarge: var(--spectrum-global-dimension-size-600);\n  --spectrum-alias-layout-label-gap-size: var(--spectrum-global-dimension-size-100);\n  --spectrum-alias-pill-button-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-alias-pill-button-text-baseline: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-alias-border-radius-xsmall: var(--spectrum-global-dimension-size-10);\n  --spectrum-alias-border-radius-small: var(--spectrum-global-dimension-size-25);\n  --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-50);\n  --spectrum-alias-border-radius-medium: var(--spectrum-global-dimension-size-100);\n  --spectrum-alias-border-radius-large: var(--spectrum-global-dimension-size-200);\n  --spectrum-alias-single-line-height: var(--spectrum-global-dimension-size-400);\n  --spectrum-alias-single-line-width: var(--spectrum-global-dimension-size-2400);\n  --spectrum-alias-workflow-icon-size: var(--spectrum-global-dimension-size-225);\n  --spectrum-alias-heading-display1-text-size: var(--spectrum-global-dimension-font-size-1300);\n  --spectrum-alias-heading-xxxl-text-size: var(--spectrum-global-dimension-font-size-1300);\n  --spectrum-alias-heading-han-display1-text-size: var(--spectrum-global-dimension-font-size-1300);\n  --spectrum-alias-heading-han-xxxl-text-size: var(--spectrum-global-dimension-font-size-1300);\n  --spectrum-alias-heading-han-display1-margin-top: var(--spectrum-global-dimension-font-size-1200);\n  --spectrum-alias-heading-han-xxxl-margin-top: var(--spectrum-global-dimension-font-size-1200);\n  --spectrum-alias-heading-display1-margin-top: var(--spectrum-global-dimension-font-size-1200);\n  --spectrum-alias-heading-xxxl-margin-top: var(--spectrum-global-dimension-font-size-1200);\n  --spectrum-alias-heading-display2-text-size: var(--spectrum-global-dimension-font-size-1100);\n  --spectrum-alias-heading-xxl-text-size: var(--spectrum-global-dimension-font-size-1100);\n  --spectrum-alias-heading-display2-margin-top: var(--spectrum-global-dimension-font-size-900);\n  --spectrum-alias-heading-xxl-margin-top: var(--spectrum-global-dimension-font-size-900);\n  --spectrum-alias-heading-han-display2-text-size: var(--spectrum-global-dimension-font-size-900);\n  --spectrum-alias-heading-han-xxl-text-size: var(--spectrum-global-dimension-font-size-900);\n  --spectrum-alias-heading-han-display2-margin-top: var(--spectrum-global-dimension-font-size-800);\n  --spectrum-alias-heading-han-xxl-margin-top: var(--spectrum-global-dimension-font-size-800);\n  --spectrum-alias-heading1-text-size: var(--spectrum-global-dimension-font-size-900);\n  --spectrum-alias-heading-xl-text-size: var(--spectrum-global-dimension-font-size-900);\n  --spectrum-alias-heading1-margin-top: var(--spectrum-global-dimension-font-size-800);\n  --spectrum-alias-heading-xl-margin-top: var(--spectrum-global-dimension-font-size-800);\n  --spectrum-alias-heading1-han-text-size: var(--spectrum-global-dimension-font-size-800);\n  --spectrum-alias-heading-han-xl-text-size: var(--spectrum-global-dimension-font-size-800);\n  --spectrum-alias-heading1-han-margin-top: var(--spectrum-global-dimension-font-size-700);\n  --spectrum-alias-heading-han-xl-margin-top: var(--spectrum-global-dimension-font-size-700);\n  --spectrum-alias-heading2-text-size: var(--spectrum-global-dimension-font-size-700);\n  --spectrum-alias-heading-l-text-size: var(--spectrum-global-dimension-font-size-700);\n  --spectrum-alias-heading2-margin-top: var(--spectrum-global-dimension-font-size-600);\n  --spectrum-alias-heading-l-margin-top: var(--spectrum-global-dimension-font-size-600);\n  --spectrum-alias-heading2-han-text-size: var(--spectrum-global-dimension-font-size-600);\n  --spectrum-alias-heading-han-l-text-size: var(--spectrum-global-dimension-font-size-600);\n  --spectrum-alias-heading2-han-margin-top: var(--spectrum-global-dimension-font-size-500);\n  --spectrum-alias-heading-han-l-margin-top: var(--spectrum-global-dimension-font-size-500);\n  --spectrum-alias-heading3-text-size: var(--spectrum-global-dimension-font-size-500);\n  --spectrum-alias-heading-m-text-size: var(--spectrum-global-dimension-font-size-500);\n  --spectrum-alias-heading3-margin-top: var(--spectrum-global-dimension-font-size-400);\n  --spectrum-alias-heading-m-margin-top: var(--spectrum-global-dimension-font-size-400);\n  --spectrum-alias-heading3-han-text-size: var(--spectrum-global-dimension-font-size-400);\n  --spectrum-alias-heading-han-m-text-size: var(--spectrum-global-dimension-font-size-400);\n  --spectrum-alias-heading3-han-margin-top: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-alias-heading-han-m-margin-top: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-alias-heading4-text-size: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-alias-heading-s-text-size: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-alias-heading4-margin-top: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-alias-heading-s-margin-top: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-alias-heading5-text-size: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-alias-heading-xs-text-size: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-alias-heading5-margin-top: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-alias-heading-xs-margin-top: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-alias-heading6-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-alias-heading-xxs-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-alias-heading6-margin-top: var(--spectrum-global-dimension-font-size-75);\n  --spectrum-alias-heading-xxs-margin-top: var(--spectrum-global-dimension-font-size-75);\n}\n\n.spectrum--darkest,\n.spectrum--dark,\n.spectrum--light,\n.spectrum--lightest {\n  /* spectrum-colorAliases.css */\n  --spectrum-alias-background-color-default: var(--spectrum-global-color-gray-100);\n  --spectrum-alias-background-color-transparent: transparent;\n  --spectrum-alias-background-color-label-gray: rgb(112, 112, 112);\n  --spectrum-alias-background-color-quickactions-overlay: rgba(0,0,0,0.2);\n  --spectrum-alias-placeholder-text-color: var(--spectrum-global-color-gray-600);\n  --spectrum-alias-placeholder-text-color-hover: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-placeholder-text-color-down: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-placeholder-text-color-selected: var(--spectrum-global-color-gray-800);\n  --spectrum-alias-label-text-color: var(--spectrum-global-color-gray-700);\n  --spectrum-alias-text-color: var(--spectrum-global-color-gray-800);\n  --spectrum-alias-text-color-hover: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-text-color-down: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-text-color-key-focus: var(--spectrum-global-color-blue-600);\n  --spectrum-alias-text-color-mouse-focus: var(--spectrum-global-color-blue-600);\n  --spectrum-alias-text-color-disabled: var(--spectrum-global-color-gray-500);\n  --spectrum-alias-text-color-invalid: var(--spectrum-global-color-red-500);\n  --spectrum-alias-text-color-selected: var(--spectrum-global-color-blue-600);\n  --spectrum-alias-text-color-selected-neutral: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-title-text-color: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-heading-text-color: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-border-color: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-border-color-hover: var(--spectrum-global-color-gray-400);\n  --spectrum-alias-border-color-focus: var(--spectrum-global-color-blue-400);\n  --spectrum-alias-border-color-down: var(--spectrum-global-color-blue-500);\n  --spectrum-alias-border-color-extralight: var(--spectrum-global-color-gray-100);\n  --spectrum-alias-border-color-light: var(--spectrum-global-color-gray-200);\n  --spectrum-alias-border-color-mid: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-border-color-dark: var(--spectrum-global-color-gray-400);\n  --spectrum-alias-border-color-transparent: transparent;\n  --spectrum-alias-border-color-translucent-dark: rgba(0,0,0,0.05);\n  --spectrum-alias-border-color-translucent-darker: rgba(0,0,0,0.1);\n  --spectrum-alias-focus-color: var(--spectrum-global-color-blue-400);\n  --spectrum-alias-focus-ring-color: var(--spectrum-alias-focus-color);\n  --spectrum-alias-focus-ring-gap-color: var(--spectrum-global-color-gray-75);\n  --spectrum-alias-track-color-default: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-track-color-disabled: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-track-color-over-background: rgba(255,255,255,0.2);\n  --spectrum-alias-icon-color: var(--spectrum-global-color-gray-700);\n  --spectrum-alias-icon-color-over-background: var(--spectrum-global-color-static-white);\n  --spectrum-alias-icon-color-hover: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-icon-color-down: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-icon-color-focus: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-icon-color-disabled: var(--spectrum-global-color-gray-400);\n  --spectrum-alias-icon-color-selected-neutral: var(--spectrum-global-color-gray-900);\n  --spectrum-alias-icon-color-selected: var(--spectrum-global-color-blue-500);\n  --spectrum-alias-icon-color-selected-hover: var(--spectrum-global-color-blue-600);\n  --spectrum-alias-icon-color-selected-down: var(--spectrum-global-color-blue-700);\n  --spectrum-alias-icon-color-selected-focus: var(--spectrum-global-color-blue-600);\n  --spectrum-alias-icon-color-error: var(--spectrum-global-color-red-400);\n  --spectrum-alias-toolbar-background-color: var(--spectrum-global-color-gray-100);\n  --spectrum-alias-categorical-color-1: var(--spectrum-global-color-static-seafoam-200);\n  --spectrum-alias-categorical-color-2: var(--spectrum-global-color-static-indigo-700);\n  --spectrum-alias-categorical-color-3: var(--spectrum-global-color-static-orange-500);\n  --spectrum-alias-categorical-color-4: var(--spectrum-global-color-static-magenta-500);\n  --spectrum-alias-categorical-color-5: var(--spectrum-global-color-static-indigo-200);\n  --spectrum-alias-categorical-color-6: var(--spectrum-global-color-static-celery-200);\n  --spectrum-alias-categorical-color-7: var(--spectrum-global-color-static-blue-500);\n  --spectrum-alias-categorical-color-8: var(--spectrum-global-color-static-purple-800);\n  --spectrum-alias-categorical-color-9: var(--spectrum-global-color-static-yellow-500);\n  --spectrum-alias-categorical-color-10: var(--spectrum-global-color-static-orange-700);\n  --spectrum-alias-categorical-color-11: var(--spectrum-global-color-static-green-600);\n  --spectrum-alias-categorical-color-12: var(--spectrum-global-color-static-chartreuse-300);\n  --spectrum-alias-categorical-color-13: var(--spectrum-global-color-static-blue-200);\n  --spectrum-alias-categorical-color-14: var(--spectrum-global-color-static-fuchsia-500);\n  --spectrum-alias-categorical-color-15: var(--spectrum-global-color-static-magenta-200);\n  --spectrum-alias-categorical-color-16: var(--spectrum-global-color-static-yellow-200);\n}\n\n.spectrum--darkest {\n  --spectrum-global-color-celery-400: rgb(61, 167, 78);\n  --spectrum-global-color-celery-500: rgb(68, 181, 86);\n  --spectrum-global-color-celery-600: rgb(75, 195, 95);\n  --spectrum-global-color-celery-700: rgb(81, 210, 103);\n  --spectrum-global-color-chartreuse-400: rgb(124, 195, 63);\n  --spectrum-global-color-chartreuse-500: rgb(133, 208, 68);\n  --spectrum-global-color-chartreuse-600: rgb(142, 222, 73);\n  --spectrum-global-color-chartreuse-700: rgb(155, 236, 84);\n  --spectrum-global-color-yellow-400: rgb(210, 178, 0);\n  --spectrum-global-color-yellow-500: rgb(223, 191, 0);\n  --spectrum-global-color-yellow-600: rgb(237, 204, 0);\n  --spectrum-global-color-yellow-700: rgb(250, 217, 0);\n  --spectrum-global-color-magenta-400: rgb(202, 41, 150);\n  --spectrum-global-color-magenta-500: rgb(216, 55, 144);\n  --spectrum-global-color-magenta-600: rgb(226, 73, 157);\n  --spectrum-global-color-magenta-700: rgb(236, 90, 170);\n  --spectrum-global-color-fuchsia-400: rgb(177, 48, 189);\n  --spectrum-global-color-fuchsia-500: rgb(192, 56, 204);\n  --spectrum-global-color-fuchsia-600: rgb(207, 62, 220);\n  --spectrum-global-color-fuchsia-700: rgb(217, 81, 229);\n  --spectrum-global-color-purple-400: rgb(134, 76, 204);\n  --spectrum-global-color-purple-500: rgb(146, 86, 217);\n  --spectrum-global-color-purple-600: rgb(157, 100, 225);\n  --spectrum-global-color-purple-700: rgb(168, 115, 223);\n  --spectrum-global-color-indigo-400: rgb(92, 92, 224);\n  --spectrum-global-color-indigo-500: rgb(103, 103, 236);\n  --spectrum-global-color-indigo-600: rgb(117, 117, 241);\n  --spectrum-global-color-indigo-700: rgb(130, 130, 246);\n  --spectrum-global-color-seafoam-400: rgb(22, 135, 140);\n  --spectrum-global-color-seafoam-500: rgb(27, 149, 154);\n  --spectrum-global-color-seafoam-600: rgb(32, 163, 168);\n  --spectrum-global-color-seafoam-700: rgb(35, 178, 184);\n  --spectrum-global-color-red-400: rgb(215, 55, 63);\n  --spectrum-global-color-red-500: rgb(227, 72, 80);\n  --spectrum-global-color-red-600: rgb(236, 91, 98);\n  --spectrum-global-color-red-700: rgb(247, 109, 116);\n  --spectrum-global-color-orange-400: rgb(218, 123, 17);\n  --spectrum-global-color-orange-500: rgb(230, 134, 25);\n  --spectrum-global-color-orange-600: rgb(242, 148, 35);\n  --spectrum-global-color-orange-700: rgb(249, 164, 63);\n  --spectrum-global-color-green-400: rgb(38, 142, 108);\n  --spectrum-global-color-green-500: rgb(45, 157, 120);\n  --spectrum-global-color-green-600: rgb(51, 171, 132);\n  --spectrum-global-color-green-700: rgb(57, 185, 144);\n  --spectrum-global-color-blue-400: rgb(20, 115, 230);\n  --spectrum-global-color-blue-500: rgb(38, 128, 235);\n  --spectrum-global-color-blue-600: rgb(55, 142, 240);\n  --spectrum-global-color-blue-700: rgb(75, 156, 245);\n  --spectrum-global-color-gray-50: rgb(8, 8, 8);\n  --spectrum-global-color-gray-75: rgb(26, 26, 26);\n  --spectrum-global-color-gray-100: rgb(30, 30, 30);\n  --spectrum-global-color-gray-200: rgb(44, 44, 44);\n  --spectrum-global-color-gray-300: rgb(57, 57, 57);\n  --spectrum-global-color-gray-400: rgb(73, 73, 73);\n  --spectrum-global-color-gray-500: rgb(92, 92, 92);\n  --spectrum-global-color-gray-600: rgb(124, 124, 124);\n  --spectrum-global-color-gray-700: rgb(162, 162, 162);\n  --spectrum-global-color-gray-800: rgb(200, 200, 200);\n  --spectrum-global-color-gray-900: rgb(239, 239, 239);\n  --spectrum-alias-background-color-modal-overlay: rgba(0,0,0,0.6);\n  --spectrum-alias-dropshadow-color: rgba(0,0,0,0.8);\n  --spectrum-alias-background-color-hover-overlay: rgba(239,239,239,0.08);\n  --spectrum-alias-highlight-hover: rgba(239,239,239,0.08);\n  --spectrum-alias-highlight-active: rgba(239,239,239,0.15);\n  --spectrum-alias-highlight-selected: rgba(38,128,235,0.2);\n  --spectrum-alias-highlight-selected-hover: rgba(38,128,235,0.3);\n  --spectrum-alias-text-highlight-color: rgba(38,128,235,0.3);\n  --spectrum-alias-background-color-quickactions: rgba(30,30,30,0.9);\n  --spectrum-alias-radial-reaction-color-default: rgba(200,200,200,0.6);\n  --spectrum-alias-pasteboard-background-color: var(--spectrum-global-color-gray-50);\n  --spectrum-alias-appframe-border-color: var(--spectrum-global-color-gray-50);\n  --spectrum-alias-appframe-separator-color: var(--spectrum-global-color-gray-50);\n  --spectrum-colorarea-border-color: rgba(239,239,239,0.1);\n  --spectrum-colorarea-border-color-hover: rgba(239,239,239,0.1);\n  --spectrum-colorarea-border-color-down: rgba(239,239,239,0.1);\n  --spectrum-colorarea-border-color-key-focus: rgba(239,239,239,0.1);\n  --spectrum-colorslider-border-color: rgba(239,239,239,0.1);\n  --spectrum-colorslider-border-color-hover: rgba(239,239,239,0.1);\n  --spectrum-colorslider-border-color-down: rgba(239,239,239,0.1);\n  --spectrum-colorslider-border-color-key-focus: rgba(239,239,239,0.1);\n  --spectrum-colorslider-vertical-border-color: rgba(239,239,239,0.1);\n  --spectrum-colorslider-vertical-border-color-hover: rgba(239,239,239,0.1);\n  --spectrum-colorslider-vertical-border-color-down: rgba(239,239,239,0.1);\n  --spectrum-colorslider-vertical-border-color-key-focus: rgba(239,239,239,0.1);\n  --spectrum-colorwheel-border-color: rgba(239,239,239,0.1);\n  --spectrum-colorwheel-border-color-hover: rgba(239,239,239,0.1);\n  --spectrum-colorwheel-border-color-down: rgba(239,239,239,0.1);\n  --spectrum-colorwheel-border-color-key-focus: rgba(239,239,239,0.1);\n  --spectrum-miller-column-item-background-color-selected: rgba(38,128,235,0.1);\n  --spectrum-miller-column-item-background-color-selected-hover: rgba(38,128,235,0.2);\n  --spectrum-tabs-compact-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-compact-vertical-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-compact-vertical-emphasized-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-well-background-color: rgba(200,200,200,0.02);\n  --spectrum-well-border-color: rgba(239,239,239,0.05);\n}\n\n.spectrum--lightest {\n  --spectrum-global-color-celery-400: rgb(75, 195, 95);\n  --spectrum-global-color-celery-500: rgb(68, 181, 86);\n  --spectrum-global-color-celery-600: rgb(61, 167, 78);\n  --spectrum-global-color-celery-700: rgb(55, 153, 71);\n  --spectrum-global-color-chartreuse-400: rgb(142, 222, 73);\n  --spectrum-global-color-chartreuse-500: rgb(133, 208, 68);\n  --spectrum-global-color-chartreuse-600: rgb(124, 195, 63);\n  --spectrum-global-color-chartreuse-700: rgb(115, 181, 58);\n  --spectrum-global-color-yellow-400: rgb(237, 204, 0);\n  --spectrum-global-color-yellow-500: rgb(223, 191, 0);\n  --spectrum-global-color-yellow-600: rgb(210, 178, 0);\n  --spectrum-global-color-yellow-700: rgb(196, 166, 0);\n  --spectrum-global-color-magenta-400: rgb(226, 73, 157);\n  --spectrum-global-color-magenta-500: rgb(216, 55, 144);\n  --spectrum-global-color-magenta-600: rgb(202, 41, 130);\n  --spectrum-global-color-magenta-700: rgb(188, 28, 116);\n  --spectrum-global-color-fuchsia-400: rgb(207, 62, 220);\n  --spectrum-global-color-fuchsia-500: rgb(192, 56, 204);\n  --spectrum-global-color-fuchsia-600: rgb(177, 48, 189);\n  --spectrum-global-color-fuchsia-700: rgb(162, 40, 173);\n  --spectrum-global-color-purple-400: rgb(157, 100, 225);\n  --spectrum-global-color-purple-500: rgb(146, 86, 217);\n  --spectrum-global-color-purple-600: rgb(134, 76, 204);\n  --spectrum-global-color-purple-700: rgb(122, 66, 191);\n  --spectrum-global-color-indigo-400: rgb(117, 117, 241);\n  --spectrum-global-color-indigo-500: rgb(103, 103, 236);\n  --spectrum-global-color-indigo-600: rgb(92, 92, 224);\n  --spectrum-global-color-indigo-700: rgb(81, 81, 211);\n  --spectrum-global-color-seafoam-400: rgb(32, 163, 168);\n  --spectrum-global-color-seafoam-500: rgb(27, 149, 154);\n  --spectrum-global-color-seafoam-600: rgb(22, 135, 140);\n  --spectrum-global-color-seafoam-700: rgb(15, 121, 125);\n  --spectrum-global-color-red-400: rgb(236, 91, 98);\n  --spectrum-global-color-red-500: rgb(227, 72, 80);\n  --spectrum-global-color-red-600: rgb(215, 55, 63);\n  --spectrum-global-color-red-700: rgb(201, 37, 45);\n  --spectrum-global-color-orange-400: rgb(242, 148, 35);\n  --spectrum-global-color-orange-500: rgb(230, 134, 25);\n  --spectrum-global-color-orange-600: rgb(218, 123, 17);\n  --spectrum-global-color-orange-700: rgb(203, 111, 16);\n  --spectrum-global-color-green-400: rgb(51, 171, 132);\n  --spectrum-global-color-green-500: rgb(45, 157, 120);\n  --spectrum-global-color-green-600: rgb(38, 142, 108);\n  --spectrum-global-color-green-700: rgb(18, 128, 92);\n  --spectrum-global-color-blue-400: rgb(55, 142, 240);\n  --spectrum-global-color-blue-500: rgb(38, 128, 235);\n  --spectrum-global-color-blue-600: rgb(20, 115, 230);\n  --spectrum-global-color-blue-700: rgb(13, 102, 208);\n  --spectrum-global-color-gray-50: rgb(255, 255, 255);\n  --spectrum-global-color-gray-75: rgb(255, 255, 255);\n  --spectrum-global-color-gray-100: rgb(255, 255, 255);\n  --spectrum-global-color-gray-200: rgb(244, 244, 244);\n  --spectrum-global-color-gray-300: rgb(234, 234, 234);\n  --spectrum-global-color-gray-400: rgb(211, 211, 211);\n  --spectrum-global-color-gray-500: rgb(188, 188, 188);\n  --spectrum-global-color-gray-600: rgb(149, 149, 149);\n  --spectrum-global-color-gray-700: rgb(116, 116, 116);\n  --spectrum-global-color-gray-800: rgb(80, 80, 80);\n  --spectrum-global-color-gray-900: rgb(50, 50, 50);\n  --spectrum-alias-background-color-modal-overlay: rgba(0,0,0,0.4);\n  --spectrum-alias-dropshadow-color: rgba(0,0,0,0.15);\n  --spectrum-alias-background-color-hover-overlay: rgba(50,50,50,0.04);\n  --spectrum-alias-highlight-hover: rgba(50,50,50,0.06);\n  --spectrum-alias-highlight-active: rgba(50,50,50,0.1);\n  --spectrum-alias-highlight-selected: rgba(38,128,235,0.1);\n  --spectrum-alias-highlight-selected-hover: rgba(38,128,235,0.2);\n  --spectrum-alias-text-highlight-color: rgba(38,128,235,0.2);\n  --spectrum-alias-background-color-quickactions: rgba(255,255,255,0.9);\n  --spectrum-alias-radial-reaction-color-default: rgba(80,80,80,0.6);\n  --spectrum-alias-pasteboard-background-color: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-appframe-border-color: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-appframe-separator-color: var(--spectrum-global-color-gray-300);\n  --spectrum-tabs-compact-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-compact-vertical-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-compact-vertical-emphasized-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-colorarea-border-color: rgba(50,50,50,0.1);\n  --spectrum-colorarea-border-color-hover: rgba(50,50,50,0.1);\n  --spectrum-colorarea-border-color-down: rgba(50,50,50,0.1);\n  --spectrum-colorarea-border-color-key-focus: rgba(50,50,50,0.1);\n  --spectrum-colorslider-border-color: rgba(50,50,50,0.1);\n  --spectrum-colorslider-border-color-hover: rgba(50,50,50,0.1);\n  --spectrum-colorslider-border-color-down: rgba(50,50,50,0.1);\n  --spectrum-colorslider-border-color-key-focus: rgba(50,50,50,0.1);\n  --spectrum-colorslider-vertical-border-color: rgba(50,50,50,0.1);\n  --spectrum-colorslider-vertical-border-color-hover: rgba(50,50,50,0.1);\n  --spectrum-colorslider-vertical-border-color-down: rgba(50,50,50,0.1);\n  --spectrum-colorslider-vertical-border-color-key-focus: rgba(50,50,50,0.1);\n  --spectrum-colorwheel-border-color: rgba(50,50,50,0.1);\n  --spectrum-colorwheel-border-color-hover: rgba(50,50,50,0.1);\n  --spectrum-colorwheel-border-color-down: rgba(50,50,50,0.1);\n  --spectrum-colorwheel-border-color-key-focus: rgba(50,50,50,0.1);\n  --spectrum-miller-column-item-background-color-selected: rgba(38,128,235,0.1);\n  --spectrum-miller-column-item-background-color-selected-hover: rgba(38,128,235,0.2);\n  --spectrum-well-background-color: rgba(80,80,80,0.02);\n  --spectrum-well-border-color: rgba(50,50,50,0.05);\n}\n\n.spectrum--dark {\n  --spectrum-global-color-celery-400: rgb(68, 181, 86);\n  --spectrum-global-color-celery-500: rgb(75, 195, 95);\n  --spectrum-global-color-celery-600: rgb(81, 210, 103);\n  --spectrum-global-color-celery-700: rgb(88, 224, 111);\n  --spectrum-global-color-chartreuse-400: rgb(133, 208, 68);\n  --spectrum-global-color-chartreuse-500: rgb(142, 222, 73);\n  --spectrum-global-color-chartreuse-600: rgb(155, 236, 84);\n  --spectrum-global-color-chartreuse-700: rgb(163, 248, 88);\n  --spectrum-global-color-yellow-400: rgb(223, 191, 0);\n  --spectrum-global-color-yellow-500: rgb(237, 204, 0);\n  --spectrum-global-color-yellow-600: rgb(250, 217, 0);\n  --spectrum-global-color-yellow-700: rgb(255, 226, 46);\n  --spectrum-global-color-magenta-400: rgb(216, 55, 144);\n  --spectrum-global-color-magenta-500: rgb(226, 73, 157);\n  --spectrum-global-color-magenta-600: rgb(236, 90, 170);\n  --spectrum-global-color-magenta-700: rgb(245, 107, 183);\n  --spectrum-global-color-fuchsia-400: rgb(192, 56, 204);\n  --spectrum-global-color-fuchsia-500: rgb(207, 62, 220);\n  --spectrum-global-color-fuchsia-600: rgb(217, 81, 229);\n  --spectrum-global-color-fuchsia-700: rgb(227, 102, 239);\n  --spectrum-global-color-purple-400: rgb(146, 86, 217);\n  --spectrum-global-color-purple-500: rgb(157, 100, 225);\n  --spectrum-global-color-purple-600: rgb(168, 115, 233);\n  --spectrum-global-color-purple-700: rgb(180, 131, 240);\n  --spectrum-global-color-indigo-400: rgb(103, 103, 236);\n  --spectrum-global-color-indigo-500: rgb(117, 117, 241);\n  --spectrum-global-color-indigo-600: rgb(130, 130, 246);\n  --spectrum-global-color-indigo-700: rgb(144, 144, 250);\n  --spectrum-global-color-seafoam-400: rgb(27, 149, 154);\n  --spectrum-global-color-seafoam-500: rgb(32, 163, 168);\n  --spectrum-global-color-seafoam-600: rgb(35, 178, 184);\n  --spectrum-global-color-seafoam-700: rgb(38, 192, 199);\n  --spectrum-global-color-red-400: rgb(227, 72, 80);\n  --spectrum-global-color-red-500: rgb(236, 91, 98);\n  --spectrum-global-color-red-600: rgb(247, 109, 116);\n  --spectrum-global-color-red-700: rgb(255, 123, 130);\n  --spectrum-global-color-orange-400: rgb(230, 134, 25);\n  --spectrum-global-color-orange-500: rgb(242, 148, 35);\n  --spectrum-global-color-orange-600: rgb(249, 164, 63);\n  --spectrum-global-color-orange-700: rgb(255, 181, 91);\n  --spectrum-global-color-green-400: rgb(45, 157, 120);\n  --spectrum-global-color-green-500: rgb(51, 171, 132);\n  --spectrum-global-color-green-600: rgb(57, 185, 144);\n  --spectrum-global-color-green-700: rgb(63, 200, 156);\n  --spectrum-global-color-blue-400: rgb(38, 128, 235);\n  --spectrum-global-color-blue-500: rgb(55, 142, 240);\n  --spectrum-global-color-blue-600: rgb(75, 156, 245);\n  --spectrum-global-color-blue-700: rgb(90, 169, 250);\n  --spectrum-global-color-gray-50: rgb(37, 37, 37);\n  --spectrum-global-color-gray-75: rgb(47, 47, 47);\n  --spectrum-global-color-gray-100: rgb(50, 50, 50);\n  --spectrum-global-color-gray-200: rgb(62, 62, 62);\n  --spectrum-global-color-gray-300: rgb(74, 74, 74);\n  --spectrum-global-color-gray-400: rgb(90, 90, 90);\n  --spectrum-global-color-gray-500: rgb(110, 110, 110);\n  --spectrum-global-color-gray-600: rgb(144, 144, 144);\n  --spectrum-global-color-gray-700: rgb(185, 185, 185);\n  --spectrum-global-color-gray-800: rgb(227, 227, 227);\n  --spectrum-global-color-gray-900: rgb(255, 255, 255);\n  --spectrum-alias-background-color-modal-overlay: rgba(0,0,0,0.5);\n  --spectrum-alias-dropshadow-color: rgba(0,0,0,0.5);\n  --spectrum-alias-background-color-hover-overlay: rgba(255,255,255,0.06);\n  --spectrum-alias-highlight-hover: rgba(255,255,255,0.07);\n  --spectrum-alias-highlight-active: rgba(255,255,255,0.1);\n  --spectrum-alias-highlight-selected: rgba(55,142,240,0.15);\n  --spectrum-alias-highlight-selected-hover: rgba(55,142,240,0.25);\n  --spectrum-alias-text-highlight-color: rgba(55,142,240,0.25);\n  --spectrum-alias-background-color-quickactions: rgba(50,50,50,0.9);\n  --spectrum-alias-radial-reaction-color-default: rgba(227,227,227,0.6);\n  --spectrum-alias-pasteboard-background-color: var(--spectrum-global-color-gray-50);\n  --spectrum-alias-appframe-border-color: var(--spectrum-global-color-gray-50);\n  --spectrum-alias-appframe-separator-color: var(--spectrum-global-color-gray-50);\n  --spectrum-colorarea-border-color: rgba(255,255,255,0.1);\n  --spectrum-colorarea-border-color-hover: rgba(255,255,255,0.1);\n  --spectrum-colorarea-border-color-down: rgba(255,255,255,0.1);\n  --spectrum-colorarea-border-color-key-focus: rgba(255,255,255,0.1);\n  --spectrum-colorslider-border-color: rgba(255,255,255,0.1);\n  --spectrum-colorslider-border-color-hover: rgba(255,255,255,0.1);\n  --spectrum-colorslider-border-color-down: rgba(255,255,255,0.1);\n  --spectrum-colorslider-border-color-key-focus: rgba(255,255,255,0.1);\n  --spectrum-colorslider-vertical-border-color: rgba(255,255,255,0.1);\n  --spectrum-colorslider-vertical-border-color-hover: rgba(255,255,255,0.1);\n  --spectrum-colorslider-vertical-border-color-down: rgba(255,255,255,0.1);\n  --spectrum-colorslider-vertical-border-color-key-focus: rgba(255,255,255,0.1);\n  --spectrum-colorwheel-border-color: rgba(255,255,255,0.1);\n  --spectrum-colorwheel-border-color-hover: rgba(255,255,255,0.1);\n  --spectrum-colorwheel-border-color-down: rgba(255,255,255,0.1);\n  --spectrum-colorwheel-border-color-key-focus: rgba(255,255,255,0.1);\n  --spectrum-miller-column-item-background-color-selected: rgba(55,142,240,0.1);\n  --spectrum-miller-column-item-background-color-selected-hover: rgba(55,142,240,0.2);\n  --spectrum-tabs-compact-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-compact-vertical-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-compact-vertical-emphasized-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-well-background-color: rgba(227,227,227,0.02);\n  --spectrum-well-border-color: rgba(255,255,255,0.05);\n}\n\n.spectrum--light {\n  --spectrum-global-color-celery-400: rgb(68, 181, 86);\n  --spectrum-global-color-celery-500: rgb(61, 167, 78);\n  --spectrum-global-color-celery-600: rgb(55, 153, 71);\n  --spectrum-global-color-celery-700: rgb(49, 139, 64);\n  --spectrum-global-color-chartreuse-400: rgb(133, 208, 68);\n  --spectrum-global-color-chartreuse-500: rgb(124, 195, 63);\n  --spectrum-global-color-chartreuse-600: rgb(115, 181, 58);\n  --spectrum-global-color-chartreuse-700: rgb(106, 168, 52);\n  --spectrum-global-color-yellow-400: rgb(223, 191, 0);\n  --spectrum-global-color-yellow-500: rgb(210, 178, 0);\n  --spectrum-global-color-yellow-600: rgb(196, 166, 0);\n  --spectrum-global-color-yellow-700: rgb(183, 153, 0);\n  --spectrum-global-color-magenta-400: rgb(216, 55, 144);\n  --spectrum-global-color-magenta-500: rgb(206, 39, 131);\n  --spectrum-global-color-magenta-600: rgb(188, 28, 116);\n  --spectrum-global-color-magenta-700: rgb(174, 14, 102);\n  --spectrum-global-color-fuchsia-400: rgb(192, 56, 204);\n  --spectrum-global-color-fuchsia-500: rgb(177, 48, 189);\n  --spectrum-global-color-fuchsia-600: rgb(162, 40, 173);\n  --spectrum-global-color-fuchsia-700: rgb(147, 33, 158);\n  --spectrum-global-color-purple-400: rgb(146, 86, 217);\n  --spectrum-global-color-purple-500: rgb(134, 76, 204);\n  --spectrum-global-color-purple-600: rgb(122, 66, 191);\n  --spectrum-global-color-purple-700: rgb(111, 56, 177);\n  --spectrum-global-color-indigo-400: rgb(103, 103, 236);\n  --spectrum-global-color-indigo-500: rgb(92, 92, 224);\n  --spectrum-global-color-indigo-600: rgb(81, 81, 211);\n  --spectrum-global-color-indigo-700: rgb(70, 70, 198);\n  --spectrum-global-color-seafoam-400: rgb(27, 149, 154);\n  --spectrum-global-color-seafoam-500: rgb(22, 135, 140);\n  --spectrum-global-color-seafoam-600: rgb(15, 121, 125);\n  --spectrum-global-color-seafoam-700: rgb(9, 108, 111);\n  --spectrum-global-color-red-400: rgb(227, 72, 80);\n  --spectrum-global-color-red-500: rgb(215, 55, 63);\n  --spectrum-global-color-red-600: rgb(201, 37, 45);\n  --spectrum-global-color-red-700: rgb(187, 18, 26);\n  --spectrum-global-color-orange-400: rgb(230, 134, 25);\n  --spectrum-global-color-orange-500: rgb(218, 123, 17);\n  --spectrum-global-color-orange-600: rgb(203, 111, 16);\n  --spectrum-global-color-orange-700: rgb(189, 100, 13);\n  --spectrum-global-color-green-400: rgb(45, 157, 120);\n  --spectrum-global-color-green-500: rgb(38, 142, 108);\n  --spectrum-global-color-green-600: rgb(18, 128, 92);\n  --spectrum-global-color-green-700: rgb(16, 113, 84);\n  --spectrum-global-color-blue-400: rgb(38, 128, 235);\n  --spectrum-global-color-blue-500: rgb(20, 115, 230);\n  --spectrum-global-color-blue-600: rgb(13, 102, 208);\n  --spectrum-global-color-blue-700: rgb(9, 90, 186);\n  --spectrum-global-color-gray-50: rgb(255, 255, 255);\n  --spectrum-global-color-gray-75: rgb(250, 250, 250);\n  --spectrum-global-color-gray-100: rgb(245, 245, 245);\n  --spectrum-global-color-gray-200: rgb(234, 234, 234);\n  --spectrum-global-color-gray-300: rgb(225, 225, 225);\n  --spectrum-global-color-gray-400: rgb(202, 202, 202);\n  --spectrum-global-color-gray-500: rgb(179, 179, 179);\n  --spectrum-global-color-gray-600: rgb(142, 142, 142);\n  --spectrum-global-color-gray-700: rgb(110, 110, 110);\n  --spectrum-global-color-gray-800: rgb(75, 75, 75);\n  --spectrum-global-color-gray-900: rgb(44, 44, 44);\n  --spectrum-alias-background-color-modal-overlay: rgba(0,0,0,0.4);\n  --spectrum-alias-dropshadow-color: rgba(0,0,0,0.15);\n  --spectrum-alias-background-color-hover-overlay: rgba(44,44,44,0.04);\n  --spectrum-alias-highlight-hover: rgba(44,44,44,0.06);\n  --spectrum-alias-highlight-active: rgba(44,44,44,0.1);\n  --spectrum-alias-highlight-selected: rgba(20,115,230,0.1);\n  --spectrum-alias-highlight-selected-hover: rgba(20,115,230,0.2);\n  --spectrum-alias-text-highlight-color: rgba(20,115,230,0.2);\n  --spectrum-alias-background-color-quickactions: rgba(245,245,245,0.9);\n  --spectrum-alias-radial-reaction-color-default: rgba(75,75,75,0.6);\n  --spectrum-alias-pasteboard-background-color: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-appframe-border-color: var(--spectrum-global-color-gray-300);\n  --spectrum-alias-appframe-separator-color: var(--spectrum-global-color-gray-300);\n  --spectrum-colorarea-border-color: rgba(44,44,44,0.1);\n  --spectrum-colorarea-border-color-hover: rgba(44,44,44,0.1);\n  --spectrum-colorarea-border-color-down: rgba(44,44,44,0.1);\n  --spectrum-colorarea-border-color-key-focus: rgba(44,44,44,0.1);\n  --spectrum-colorslider-border-color: rgba(44,44,44,0.1);\n  --spectrum-colorslider-border-color-hover: rgba(44,44,44,0.1);\n  --spectrum-colorslider-border-color-down: rgba(44,44,44,0.1);\n  --spectrum-colorslider-border-color-key-focus: rgba(44,44,44,0.1);\n  --spectrum-colorslider-vertical-border-color: rgba(44,44,44,0.1);\n  --spectrum-colorslider-vertical-border-color-hover: rgba(44,44,44,0.1);\n  --spectrum-colorslider-vertical-border-color-down: rgba(44,44,44,0.1);\n  --spectrum-colorslider-vertical-border-color-key-focus: rgba(44,44,44,0.1);\n  --spectrum-colorwheel-border-color: rgba(44,44,44,0.1);\n  --spectrum-colorwheel-border-color-hover: rgba(44,44,44,0.1);\n  --spectrum-colorwheel-border-color-down: rgba(44,44,44,0.1);\n  --spectrum-colorwheel-border-color-key-focus: rgba(44,44,44,0.1);\n  --spectrum-miller-column-item-background-color-selected: rgba(20,115,230,0.1);\n  --spectrum-miller-column-item-background-color-selected-hover: rgba(20,115,230,0.2);\n  --spectrum-tabs-compact-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-compact-vertical-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-compact-vertical-emphasized-rule-color: var(--spectrum-global-color-gray-200);\n  --spectrum-tabs-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-compact-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-tabs-quiet-vertical-emphasized-selection-indicator-color: var(--spectrum-global-color-blue-500);\n  --spectrum-well-background-color: rgba(75,75,75,0.02);\n  --spectrum-well-border-color: rgba(44,44,44,0.05);\n}\n\n.spectrum--medium {\n  --spectrum-global-dimension-scale-factor: 1;\n  --spectrum-global-dimension-size-0: 0px;\n  --spectrum-global-dimension-size-10: 1px;\n  --spectrum-global-dimension-size-25: 2px;\n  --spectrum-global-dimension-size-40: 3px;\n  --spectrum-global-dimension-size-50: 4px;\n  --spectrum-global-dimension-size-65: 5px;\n  --spectrum-global-dimension-size-75: 6px;\n  --spectrum-global-dimension-size-85: 7px;\n  --spectrum-global-dimension-size-100: 8px;\n  --spectrum-global-dimension-size-115: 9px;\n  --spectrum-global-dimension-size-125: 10px;\n  --spectrum-global-dimension-size-130: 11px;\n  --spectrum-global-dimension-size-150: 12px;\n  --spectrum-global-dimension-size-160: 13px;\n  --spectrum-global-dimension-size-175: 14px;\n  --spectrum-global-dimension-size-200: 16px;\n  --spectrum-global-dimension-size-225: 18px;\n  --spectrum-global-dimension-size-250: 20px;\n  --spectrum-global-dimension-size-300: 24px;\n  --spectrum-global-dimension-size-350: 28px;\n  --spectrum-global-dimension-size-400: 32px;\n  --spectrum-global-dimension-size-450: 36px;\n  --spectrum-global-dimension-size-500: 40px;\n  --spectrum-global-dimension-size-550: 44px;\n  --spectrum-global-dimension-size-600: 48px;\n  --spectrum-global-dimension-size-675: 54px;\n  --spectrum-global-dimension-size-700: 56px;\n  --spectrum-global-dimension-size-800: 64px;\n  --spectrum-global-dimension-size-900: 72px;\n  --spectrum-global-dimension-size-1000: 80px;\n  --spectrum-global-dimension-size-1200: 96px;\n  --spectrum-global-dimension-size-1250: 100px;\n  --spectrum-global-dimension-size-1600: 128px;\n  --spectrum-global-dimension-size-1700: 136px;\n  --spectrum-global-dimension-size-2000: 160px;\n  --spectrum-global-dimension-size-2400: 192px;\n  --spectrum-global-dimension-size-3000: 240px;\n  --spectrum-global-dimension-size-3400: 272px;\n  --spectrum-global-dimension-size-3600: 288px;\n  --spectrum-global-dimension-size-4600: 368px;\n  --spectrum-global-dimension-size-5000: 400px;\n  --spectrum-global-dimension-size-6000: 480px;\n  --spectrum-global-dimension-font-size-25: 10px;\n  --spectrum-global-dimension-font-size-50: 11px;\n  --spectrum-global-dimension-font-size-75: 12px;\n  --spectrum-global-dimension-font-size-100: 14px;\n  --spectrum-global-dimension-font-size-150: 15px;\n  --spectrum-global-dimension-font-size-200: 16px;\n  --spectrum-global-dimension-font-size-300: 18px;\n  --spectrum-global-dimension-font-size-400: 20px;\n  --spectrum-global-dimension-font-size-500: 22px;\n  --spectrum-global-dimension-font-size-600: 25px;\n  --spectrum-global-dimension-font-size-700: 28px;\n  --spectrum-global-dimension-font-size-800: 32px;\n  --spectrum-global-dimension-font-size-900: 36px;\n  --spectrum-global-dimension-font-size-1000: 40px;\n  --spectrum-global-dimension-font-size-1100: 45px;\n  --spectrum-global-dimension-font-size-1200: 50px;\n  --spectrum-global-dimension-font-size-1300: 60px;\n  --spectrum-actionbutton-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-actionbutton-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-actionbutton-emphasized-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-actionbutton-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-actionbutton-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-actionbutton-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-actionbutton-quiet-emphasized-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-actionbutton-quiet-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-barloader-large-border-radius: 3px;\n  --spectrum-barloader-large-indeterminate-border-radius: 3px;\n  --spectrum-barloader-large-over-background-border-radius: 3px;\n  --spectrum-barloader-small-border-radius: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-barloader-small-indeterminate-border-radius: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-barloader-small-over-background-border-radius: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-breadcrumb-compact-item-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-breadcrumb-compact-button-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-breadcrumb-item-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-breadcrumb-button-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-breadcrumb-multiline-item-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-breadcrumb-multiline-button-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-cta-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-cta-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-cta-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-cta-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-over-background-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-over-background-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-over-background-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-over-background-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-primary-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-primary-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-primary-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-primary-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-quiet-over-background-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-quiet-over-background-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-quiet-over-background-touch-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-quiet-over-background-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-quiet-over-background-cursor-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-quiet-primary-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-quiet-primary-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-quiet-primary-touch-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-quiet-primary-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-quiet-primary-cursor-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-quiet-secondary-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-quiet-secondary-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-quiet-secondary-touch-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-quiet-secondary-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-quiet-secondary-cursor-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-quiet-warning-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-quiet-warning-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-quiet-warning-touch-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-quiet-warning-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-quiet-warning-cursor-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-button-secondary-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-secondary-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-secondary-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-secondary-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-warning-text-padding-bottom: var(--spectrum-global-dimension-size-85);\n  --spectrum-button-warning-min-width: var(--spectrum-global-dimension-size-900);\n  --spectrum-button-warning-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-button-warning-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-checkbox-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-text-gap-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-text-gap-error-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-checkbox-emphasized-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-emphasized-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-emphasized-text-gap-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-emphasized-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-emphasized-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-emphasized-text-gap-error-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-checkbox-quiet-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-quiet-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-quiet-text-gap-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-quiet-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-quiet-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-quiet-text-gap-error-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-checkbox-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-circleloader-medium-border-size: 3px;\n  --spectrum-circleloader-medium-over-background-border-size: 3px;\n  --spectrum-circleloader-small-border-size: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-circleloader-small-over-background-border-size: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-colorhandle-loupe-margin: var(--spectrum-global-dimension-static-size-125);\n  --spectrum-colorslider-touch-hit-y: var(--spectrum-global-dimension-size-150);\n  --spectrum-colorslider-vertical-touch-hit-x: var(--spectrum-global-dimension-size-150);\n  --spectrum-colorwheel-min-size: var(--spectrum-global-dimension-size-2400);\n  --spectrum-colorwheel-touch-hit-outer: var(--spectrum-global-dimension-size-150);\n  --spectrum-colorwheel-touch-hit-inner: var(--spectrum-global-dimension-size-150);\n  --spectrum-cyclebutton-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-cyclebutton-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-dialog-confirm-max-width: var(--spectrum-global-dimension-static-size-6000);\n  --spectrum-dialog-confirm-title-text-size: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-dialog-confirm-description-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-dialog-confirm-padding: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-confirm-description-margin-bottom: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-dialog-max-width: var(--spectrum-global-dimension-static-size-6000);\n  --spectrum-dialog-title-text-size: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-dialog-content-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-dialog-padding: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-content-margin-bottom: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-dialog-destructive-max-width: var(--spectrum-global-dimension-static-size-6000);\n  --spectrum-dialog-destructive-title-text-size: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-dialog-destructive-description-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-dialog-destructive-padding: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-destructive-description-margin-bottom: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-dialog-error-max-width: var(--spectrum-global-dimension-static-size-6000);\n  --spectrum-dialog-error-title-text-size: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-dialog-error-description-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-dialog-error-padding: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-error-description-margin-bottom: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-dialog-info-max-width: var(--spectrum-global-dimension-static-size-6000);\n  --spectrum-dialog-info-title-text-size: var(--spectrum-global-dimension-font-size-300);\n  --spectrum-dialog-info-description-text-size: var(--spectrum-global-dimension-font-size-100);\n  --spectrum-dialog-info-padding: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-info-description-margin-bottom: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-dropdown-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-dropdown-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-dropdown-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-dropdown-thumbnail-small-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-dropdown-thumbnail-small-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-fieldbutton-quiet-min-width: var(--spectrum-global-dimension-size-225);\n  --spectrum-icon-arrow-down-small-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-arrow-left-medium-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-checkmark-medium-width: var(--spectrum-global-dimension-size-150);\n  --spectrum-icon-checkmark-medium-height: var(--spectrum-global-dimension-size-150);\n  --spectrum-icon-checkmark-small-width: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-checkmark-small-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-chevron-down-medium-width: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-chevron-left-large-width: var(--spectrum-global-dimension-size-150);\n  --spectrum-icon-chevron-left-medium-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-chevron-right-large-width: var(--spectrum-global-dimension-size-150);\n  --spectrum-icon-chevron-right-medium-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-cross-large-width: var(--spectrum-global-dimension-size-150);\n  --spectrum-icon-cross-large-height: var(--spectrum-global-dimension-size-150);\n  --spectrum-icon-dash-small-width: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-dash-small-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-skip-left-width: 9px;\n  --spectrum-icon-skip-left-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-skip-right-width: 9px;\n  --spectrum-icon-skip-right-height: var(--spectrum-global-dimension-size-125);\n  --spectrum-icon-triplegripper-width: var(--spectrum-global-dimension-size-125);\n  --spectrum-loader-bar-large-border-radius: 3px;\n  --spectrum-loader-bar-large-over-background-border-radius: 3px;\n  --spectrum-loader-bar-small-border-radius: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-loader-bar-small-over-background-border-radius: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-loader-circle-medium-border-size: 3px;\n  --spectrum-loader-circle-medium-over-background-border-size: 3px;\n  --spectrum-loader-circle-small-border-size: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-loader-circle-small-over-background-border-size: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-meter-large-border-radius: 3px;\n  --spectrum-meter-small-border-radius: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-pagination-page-button-line-height: 26px;\n  --spectrum-radio-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-margin-bottom: 0px;\n  --spectrum-radio-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-radio-emphasized-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-emphasized-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-emphasized-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-emphasized-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-emphasized-margin-bottom: 0px;\n  --spectrum-radio-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-radio-quiet-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-quiet-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-quiet-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-quiet-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-radio-quiet-margin-bottom: 0px;\n  --spectrum-radio-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-rating-icon-width: 24px;\n  --spectrum-rating-indicator-width: 16px;\n  --spectrum-rating-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-rating-emphasized-icon-width: 24px;\n  --spectrum-rating-emphasized-indicator-width: 16px;\n  --spectrum-rating-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-rating-quiet-icon-width: 24px;\n  --spectrum-rating-quiet-indicator-width: 16px;\n  --spectrum-rating-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-search-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-search-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-search-icon-frame: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-search-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-search-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-search-quiet-icon-frame: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-selectlist-option-icon-size: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-selectlist-option-icon-padding-y: var(--spectrum-global-dimension-static-size-125);\n  --spectrum-selectlist-option-icon-margin-top: var(--spectrum-global-dimension-static-size-65);\n  --spectrum-selectlist-option-height: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-selectlist-thumbnail-option-icon-padding-y: var(--spectrum-global-dimension-static-size-125);\n  --spectrum-selectlist-thumbnail-small-option-icon-padding-y: var(--spectrum-global-dimension-static-size-125);\n  --spectrum-sidenav-item-touch-hit-bottom: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-sidenav-multilevel-item-touch-hit-bottom: var(--spectrum-global-dimension-static-size-25);\n  --spectrum-slider-track-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-slider-handle-touch-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-slider-handle-touch-hit-y: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-slider-editable-track-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-slider-editable-handle-touch-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-slider-editable-handle-touch-hit-y: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-slider-fill-track-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-slider-fill-handle-touch-hit-x: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-slider-fill-handle-touch-hit-y: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-switch-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-track-width: 26px;\n  --spectrum-switch-handle-border-radius: 7px;\n  --spectrum-switch-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-switch-emphasized-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-emphasized-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-emphasized-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-emphasized-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-emphasized-track-width: 26px;\n  --spectrum-switch-emphasized-handle-border-radius: 7px;\n  --spectrum-switch-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-switch-quiet-text-gap-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-quiet-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-quiet-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-quiet-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-115);\n  --spectrum-switch-quiet-track-width: 26px;\n  --spectrum-switch-quiet-handle-border-radius: 7px;\n  --spectrum-switch-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-tabs-compact-focus-ring-border-radius: 5px;\n  --spectrum-tabs-compact-margin-left: -8px;\n  --spectrum-tabs-compact-margin-right: -8px;\n  --spectrum-tabs-compact-vertical-focus-ring-border-radius: 5px;\n  --spectrum-tabs-compact-vertical-emphasized-focus-ring-border-radius: 5px;\n  --spectrum-tabs-baseline: var(--spectrum-global-dimension-size-225);\n  --spectrum-tabs-focus-ring-border-radius: 5px;\n  --spectrum-tabs-margin-left: -8px;\n  --spectrum-tabs-margin-right: -8px;\n  --spectrum-tabs-emphasized-baseline: var(--spectrum-global-dimension-size-225);\n  --spectrum-tabs-emphasized-focus-ring-border-radius: 5px;\n  --spectrum-tabs-emphasized-margin-left: -8px;\n  --spectrum-tabs-emphasized-margin-right: -8px;\n  --spectrum-tabs-quiet-baseline: var(--spectrum-global-dimension-size-225);\n  --spectrum-tabs-quiet-focus-ring-border-radius: 5px;\n  --spectrum-tabs-quiet-margin-left: -8px;\n  --spectrum-tabs-quiet-margin-right: -8px;\n  --spectrum-tabs-quiet-compact-focus-ring-border-radius: 5px;\n  --spectrum-tabs-quiet-compact-margin-left: -8px;\n  --spectrum-tabs-quiet-compact-margin-right: -8px;\n  --spectrum-tabs-quiet-compact-emphasized-focus-ring-border-radius: 5px;\n  --spectrum-tabs-quiet-compact-emphasized-margin-left: -8px;\n  --spectrum-tabs-quiet-compact-emphasized-margin-right: -8px;\n  --spectrum-tabs-quiet-compact-vertical-focus-ring-border-radius: 5px;\n  --spectrum-tabs-quiet-compact-vertical-emphasized-focus-ring-border-radius: 5px;\n  --spectrum-tabs-quiet-emphasized-baseline: var(--spectrum-global-dimension-size-225);\n  --spectrum-tabs-quiet-emphasized-focus-ring-border-radius: 5px;\n  --spectrum-tabs-quiet-emphasized-margin-left: -8px;\n  --spectrum-tabs-quiet-emphasized-margin-right: -8px;\n  --spectrum-tabs-quiet-vertical-baseline: var(--spectrum-global-dimension-size-225);\n  --spectrum-tabs-quiet-vertical-focus-ring-border-radius: 5px;\n  --spectrum-tabs-quiet-vertical-emphasized-baseline: var(--spectrum-global-dimension-size-225);\n  --spectrum-tabs-quiet-vertical-emphasized-focus-ring-border-radius: 5px;\n  --spectrum-tabs-vertical-baseline: var(--spectrum-global-dimension-size-225);\n  --spectrum-tabs-vertical-focus-ring-border-radius: 5px;\n  --spectrum-textarea-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textarea-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textarea-icon-frame: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-textarea-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textarea-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textarea-quiet-icon-frame: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-textfield-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textfield-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textfield-icon-frame: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-textfield-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textfield-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-textfield-quiet-icon-frame: var(--spectrum-global-dimension-static-size-400);\n  --spectrum-tool-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-tool-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-tool-high-emphasis-touch-hit-x: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-tool-high-emphasis-touch-hit-y: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-tooltip-padding-bottom: 5px;\n  --spectrum-tooltip-content-max-width: 101px;\n  --spectrum-tooltip-info-padding-bottom: 5px;\n  --spectrum-tooltip-info-content-max-width: 101px;\n  --spectrum-tooltip-negative-padding-bottom: 5px;\n  --spectrum-tooltip-negative-content-max-width: 101px;\n  --spectrum-tooltip-positive-padding-bottom: 5px;\n  --spectrum-tooltip-positive-content-max-width: 101px;\n}\n\n.spectrum--large {\n  --spectrum-global-dimension-scale-factor: 1.25;\n  --spectrum-global-dimension-size-0: 0px;\n  --spectrum-global-dimension-size-10: 1px;\n  --spectrum-global-dimension-size-25: 2px;\n  --spectrum-global-dimension-size-40: 4px;\n  --spectrum-global-dimension-size-50: 5px;\n  --spectrum-global-dimension-size-65: 6px;\n  --spectrum-global-dimension-size-75: 8px;\n  --spectrum-global-dimension-size-85: 9px;\n  --spectrum-global-dimension-size-100: 10px;\n  --spectrum-global-dimension-size-115: 11px;\n  --spectrum-global-dimension-size-125: 13px;\n  --spectrum-global-dimension-size-130: 14px;\n  --spectrum-global-dimension-size-150: 15px;\n  --spectrum-global-dimension-size-160: 16px;\n  --spectrum-global-dimension-size-175: 18px;\n  --spectrum-global-dimension-size-200: 20px;\n  --spectrum-global-dimension-size-225: 22px;\n  --spectrum-global-dimension-size-250: 25px;\n  --spectrum-global-dimension-size-300: 30px;\n  --spectrum-global-dimension-size-350: 35px;\n  --spectrum-global-dimension-size-400: 40px;\n  --spectrum-global-dimension-size-450: 45px;\n  --spectrum-global-dimension-size-500: 50px;\n  --spectrum-global-dimension-size-550: 56px;\n  --spectrum-global-dimension-size-600: 60px;\n  --spectrum-global-dimension-size-675: 68px;\n  --spectrum-global-dimension-size-700: 70px;\n  --spectrum-global-dimension-size-800: 80px;\n  --spectrum-global-dimension-size-900: 112px;\n  --spectrum-global-dimension-size-1000: 100px;\n  --spectrum-global-dimension-size-1200: 120px;\n  --spectrum-global-dimension-size-1250: 125px;\n  --spectrum-global-dimension-size-1600: 160px;\n  --spectrum-global-dimension-size-1700: 212px;\n  --spectrum-global-dimension-size-2000: 200px;\n  --spectrum-global-dimension-size-2400: 240px;\n  --spectrum-global-dimension-size-3000: 300px;\n  --spectrum-global-dimension-size-3400: 340px;\n  --spectrum-global-dimension-size-3600: 360px;\n  --spectrum-global-dimension-size-4600: 460px;\n  --spectrum-global-dimension-size-5000: 500px;\n  --spectrum-global-dimension-size-6000: 600px;\n  --spectrum-global-dimension-font-size-25: 12px;\n  --spectrum-global-dimension-font-size-50: 13px;\n  --spectrum-global-dimension-font-size-75: 15px;\n  --spectrum-global-dimension-font-size-100: 17px;\n  --spectrum-global-dimension-font-size-150: 18px;\n  --spectrum-global-dimension-font-size-200: 19px;\n  --spectrum-global-dimension-font-size-300: 22px;\n  --spectrum-global-dimension-font-size-400: 24px;\n  --spectrum-global-dimension-font-size-500: 27px;\n  --spectrum-global-dimension-font-size-600: 31px;\n  --spectrum-global-dimension-font-size-700: 34px;\n  --spectrum-global-dimension-font-size-800: 39px;\n  --spectrum-global-dimension-font-size-900: 44px;\n  --spectrum-global-dimension-font-size-1000: 49px;\n  --spectrum-global-dimension-font-size-1100: 55px;\n  --spectrum-global-dimension-font-size-1200: 62px;\n  --spectrum-global-dimension-font-size-1300: 70px;\n  --spectrum-actionbutton-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-actionbutton-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-actionbutton-emphasized-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-actionbutton-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-actionbutton-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-actionbutton-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-actionbutton-quiet-emphasized-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-actionbutton-quiet-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-barloader-large-border-radius: 4px;\n  --spectrum-barloader-large-indeterminate-border-radius: 4px;\n  --spectrum-barloader-large-over-background-border-radius: 4px;\n  --spectrum-barloader-small-border-radius: 3px;\n  --spectrum-barloader-small-indeterminate-border-radius: 3px;\n  --spectrum-barloader-small-over-background-border-radius: 3px;\n  --spectrum-breadcrumb-compact-item-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-breadcrumb-compact-button-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-breadcrumb-item-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-breadcrumb-button-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-breadcrumb-multiline-item-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-breadcrumb-multiline-button-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-cta-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-cta-min-width: 90px;\n  --spectrum-button-cta-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-cta-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-over-background-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-over-background-min-width: 90px;\n  --spectrum-button-over-background-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-over-background-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-primary-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-primary-min-width: 90px;\n  --spectrum-button-primary-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-primary-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-quiet-over-background-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-quiet-over-background-min-width: 90px;\n  --spectrum-button-quiet-over-background-touch-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-quiet-over-background-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-quiet-over-background-cursor-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-quiet-primary-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-quiet-primary-min-width: 90px;\n  --spectrum-button-quiet-primary-touch-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-quiet-primary-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-quiet-primary-cursor-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-quiet-secondary-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-quiet-secondary-min-width: 90px;\n  --spectrum-button-quiet-secondary-touch-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-quiet-secondary-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-quiet-secondary-cursor-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-quiet-warning-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-quiet-warning-min-width: 90px;\n  --spectrum-button-quiet-warning-touch-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-quiet-warning-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-quiet-warning-cursor-hit-x: var(--spectrum-global-dimension-static-size-250);\n  --spectrum-button-secondary-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-secondary-min-width: 90px;\n  --spectrum-button-secondary-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-secondary-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-warning-text-padding-bottom: var(--spectrum-global-dimension-size-100);\n  --spectrum-button-warning-min-width: 90px;\n  --spectrum-button-warning-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-button-warning-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-checkbox-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-text-gap-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-text-gap-error-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-checkbox-emphasized-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-emphasized-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-emphasized-text-gap-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-emphasized-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-emphasized-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-emphasized-text-gap-error-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-checkbox-quiet-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-quiet-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-quiet-text-gap-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-quiet-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-quiet-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-quiet-text-gap-error-indeterminate-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-checkbox-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-circleloader-medium-border-size: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-circleloader-medium-over-background-border-size: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-circleloader-small-border-size: 3px;\n  --spectrum-circleloader-small-over-background-border-size: 3px;\n  --spectrum-colorhandle-loupe-margin: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-colorslider-touch-hit-y: var(--spectrum-global-dimension-size-85);\n  --spectrum-colorslider-vertical-touch-hit-x: var(--spectrum-global-dimension-size-85);\n  --spectrum-colorwheel-min-size: var(--spectrum-global-dimension-static-size-2600);\n  --spectrum-colorwheel-touch-hit-outer: var(--spectrum-global-dimension-size-85);\n  --spectrum-colorwheel-touch-hit-inner: var(--spectrum-global-dimension-size-85);\n  --spectrum-cyclebutton-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-cyclebutton-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-dialog-confirm-max-width: var(--spectrum-global-dimension-static-size-5000);\n  --spectrum-dialog-confirm-title-text-size: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-dialog-confirm-description-text-size: var(--spectrum-global-dimension-font-size-75);\n  --spectrum-dialog-confirm-padding: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-dialog-confirm-description-margin-bottom: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-max-width: var(--spectrum-global-dimension-static-size-5000);\n  --spectrum-dialog-title-text-size: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-dialog-content-text-size: var(--spectrum-global-dimension-font-size-75);\n  --spectrum-dialog-padding: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-dialog-content-margin-bottom: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-destructive-max-width: var(--spectrum-global-dimension-static-size-5000);\n  --spectrum-dialog-destructive-title-text-size: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-dialog-destructive-description-text-size: var(--spectrum-global-dimension-font-size-75);\n  --spectrum-dialog-destructive-padding: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-dialog-destructive-description-margin-bottom: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-error-max-width: var(--spectrum-global-dimension-static-size-5000);\n  --spectrum-dialog-error-title-text-size: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-dialog-error-description-text-size: var(--spectrum-global-dimension-font-size-75);\n  --spectrum-dialog-error-padding: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-dialog-error-description-margin-bottom: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dialog-info-max-width: var(--spectrum-global-dimension-static-size-5000);\n  --spectrum-dialog-info-title-text-size: var(--spectrum-global-dimension-font-size-200);\n  --spectrum-dialog-info-description-text-size: var(--spectrum-global-dimension-font-size-75);\n  --spectrum-dialog-info-padding: var(--spectrum-global-dimension-static-size-300);\n  --spectrum-dialog-info-description-margin-bottom: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-dropdown-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-dropdown-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-dropdown-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-dropdown-thumbnail-small-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-dropdown-thumbnail-small-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-fieldbutton-quiet-min-width: var(--spectrum-global-dimension-size-200);\n  --spectrum-icon-arrow-down-small-height: 12px;\n  --spectrum-icon-arrow-left-medium-height: 12px;\n  --spectrum-icon-checkmark-medium-width: 16px;\n  --spectrum-icon-checkmark-medium-height: 16px;\n  --spectrum-icon-checkmark-small-width: 12px;\n  --spectrum-icon-checkmark-small-height: 12px;\n  --spectrum-icon-chevron-down-medium-width: 12px;\n  --spectrum-icon-chevron-left-large-width: 16px;\n  --spectrum-icon-chevron-left-medium-height: 12px;\n  --spectrum-icon-chevron-right-large-width: 16px;\n  --spectrum-icon-chevron-right-medium-height: 12px;\n  --spectrum-icon-cross-large-width: 16px;\n  --spectrum-icon-cross-large-height: 16px;\n  --spectrum-icon-dash-small-width: 12px;\n  --spectrum-icon-dash-small-height: 12px;\n  --spectrum-icon-skip-left-width: 10px;\n  --spectrum-icon-skip-left-height: 12px;\n  --spectrum-icon-skip-right-width: 10px;\n  --spectrum-icon-skip-right-height: 12px;\n  --spectrum-icon-triplegripper-width: 12px;\n  --spectrum-loader-bar-large-border-radius: 4px;\n  --spectrum-loader-bar-large-over-background-border-radius: 4px;\n  --spectrum-loader-bar-small-border-radius: 3px;\n  --spectrum-loader-bar-small-over-background-border-radius: 3px;\n  --spectrum-loader-circle-medium-border-size: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-loader-circle-medium-over-background-border-size: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-loader-circle-small-border-size: 3px;\n  --spectrum-loader-circle-small-over-background-border-size: 3px;\n  --spectrum-meter-large-border-radius: 4px;\n  --spectrum-meter-small-border-radius: 3px;\n  --spectrum-pagination-page-button-line-height: 32px;\n  --spectrum-radio-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-margin-bottom: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-radio-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-radio-emphasized-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-emphasized-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-emphasized-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-emphasized-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-emphasized-margin-bottom: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-radio-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-radio-quiet-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-quiet-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-quiet-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-quiet-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-radio-quiet-margin-bottom: var(--spectrum-global-dimension-static-size-100);\n  --spectrum-radio-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-rating-icon-width: 30px;\n  --spectrum-rating-indicator-width: 20px;\n  --spectrum-rating-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-rating-emphasized-icon-width: 30px;\n  --spectrum-rating-emphasized-indicator-width: 20px;\n  --spectrum-rating-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-rating-quiet-icon-width: 30px;\n  --spectrum-rating-quiet-indicator-width: 20px;\n  --spectrum-rating-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-search-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-search-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-search-icon-frame: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-search-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-search-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-search-quiet-icon-frame: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-selectlist-option-icon-size: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-selectlist-option-icon-padding-y: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-selectlist-option-icon-margin-top: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-selectlist-option-height: var(--spectrum-global-dimension-static-size-600);\n  --spectrum-selectlist-thumbnail-option-icon-padding-y: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-selectlist-thumbnail-small-option-icon-padding-y: var(--spectrum-global-dimension-static-size-200);\n  --spectrum-sidenav-item-touch-hit-bottom: 3px;\n  --spectrum-sidenav-multilevel-item-touch-hit-bottom: 3px;\n  --spectrum-slider-track-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-slider-handle-touch-hit-x: var(--spectrum-global-dimension-static-size-175);\n  --spectrum-slider-handle-touch-hit-y: var(--spectrum-global-dimension-static-size-175);\n  --spectrum-slider-editable-track-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-slider-editable-handle-touch-hit-x: var(--spectrum-global-dimension-static-size-175);\n  --spectrum-slider-editable-handle-touch-hit-y: var(--spectrum-global-dimension-static-size-175);\n  --spectrum-slider-fill-track-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-slider-fill-handle-touch-hit-x: var(--spectrum-global-dimension-static-size-175);\n  --spectrum-slider-fill-handle-touch-hit-y: var(--spectrum-global-dimension-static-size-175);\n  --spectrum-switch-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-track-width: var(--spectrum-global-dimension-static-size-450);\n  --spectrum-switch-handle-border-radius: 9px;\n  --spectrum-switch-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-switch-emphasized-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-emphasized-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-emphasized-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-emphasized-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-emphasized-track-width: var(--spectrum-global-dimension-static-size-450);\n  --spectrum-switch-emphasized-handle-border-radius: 9px;\n  --spectrum-switch-emphasized-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-switch-quiet-text-gap-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-quiet-text-gap-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-quiet-text-gap-error-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-quiet-text-gap-error-selected-key-focus: var(--spectrum-global-dimension-static-size-150);\n  --spectrum-switch-quiet-track-width: var(--spectrum-global-dimension-static-size-450);\n  --spectrum-switch-quiet-handle-border-radius: 9px;\n  --spectrum-switch-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-tabs-compact-focus-ring-border-radius: 6px;\n  --spectrum-tabs-compact-margin-left: -11px;\n  --spectrum-tabs-compact-margin-right: -11px;\n  --spectrum-tabs-compact-vertical-focus-ring-border-radius: 6px;\n  --spectrum-tabs-compact-vertical-emphasized-focus-ring-border-radius: 6px;\n  --spectrum-tabs-baseline: var(--spectrum-global-dimension-size-250);\n  --spectrum-tabs-focus-ring-border-radius: 6px;\n  --spectrum-tabs-margin-left: -11px;\n  --spectrum-tabs-margin-right: -11px;\n  --spectrum-tabs-emphasized-baseline: var(--spectrum-global-dimension-size-250);\n  --spectrum-tabs-emphasized-focus-ring-border-radius: 6px;\n  --spectrum-tabs-emphasized-margin-left: -11px;\n  --spectrum-tabs-emphasized-margin-right: -11px;\n  --spectrum-tabs-quiet-baseline: var(--spectrum-global-dimension-size-250);\n  --spectrum-tabs-quiet-focus-ring-border-radius: 6px;\n  --spectrum-tabs-quiet-margin-left: -11px;\n  --spectrum-tabs-quiet-margin-right: -11px;\n  --spectrum-tabs-quiet-compact-focus-ring-border-radius: 6px;\n  --spectrum-tabs-quiet-compact-margin-left: -11px;\n  --spectrum-tabs-quiet-compact-margin-right: -11px;\n  --spectrum-tabs-quiet-compact-emphasized-focus-ring-border-radius: 6px;\n  --spectrum-tabs-quiet-compact-emphasized-margin-left: -11px;\n  --spectrum-tabs-quiet-compact-emphasized-margin-right: -11px;\n  --spectrum-tabs-quiet-compact-vertical-focus-ring-border-radius: 6px;\n  --spectrum-tabs-quiet-compact-vertical-emphasized-focus-ring-border-radius: 6px;\n  --spectrum-tabs-quiet-emphasized-baseline: var(--spectrum-global-dimension-size-250);\n  --spectrum-tabs-quiet-emphasized-focus-ring-border-radius: 6px;\n  --spectrum-tabs-quiet-emphasized-margin-left: -11px;\n  --spectrum-tabs-quiet-emphasized-margin-right: -11px;\n  --spectrum-tabs-quiet-vertical-baseline: var(--spectrum-global-dimension-size-250);\n  --spectrum-tabs-quiet-vertical-focus-ring-border-radius: 6px;\n  --spectrum-tabs-quiet-vertical-emphasized-baseline: var(--spectrum-global-dimension-size-250);\n  --spectrum-tabs-quiet-vertical-emphasized-focus-ring-border-radius: 6px;\n  --spectrum-tabs-vertical-baseline: var(--spectrum-global-dimension-size-250);\n  --spectrum-tabs-vertical-focus-ring-border-radius: 6px;\n  --spectrum-textarea-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textarea-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textarea-icon-frame: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-textarea-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textarea-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textarea-quiet-icon-frame: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-textfield-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textfield-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textfield-icon-frame: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-textfield-quiet-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textfield-quiet-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-textfield-quiet-icon-frame: var(--spectrum-global-dimension-static-size-500);\n  --spectrum-tool-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-tool-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-tool-high-emphasis-touch-hit-x: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-tool-high-emphasis-touch-hit-y: var(--spectrum-global-dimension-static-size-50);\n  --spectrum-tooltip-padding-bottom: 6px;\n  --spectrum-tooltip-content-max-width: 126px;\n  --spectrum-tooltip-info-padding-bottom: 6px;\n  --spectrum-tooltip-info-content-max-width: 126px;\n  --spectrum-tooltip-negative-padding-bottom: 6px;\n  --spectrum-tooltip-negative-content-max-width: 126px;\n  --spectrum-tooltip-positive-padding-bottom: 6px;\n  --spectrum-tooltip-positive-content-max-width: 126px;\n}\n\n.spectrum-Icon,\n.spectrum-UIIcon {\n  display: inline-block;\n  color: inherit;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.spectrum-Icon:not(:root), .spectrum-UIIcon:not(:root) {\n    overflow: hidden;\n  }\n\n.spectrum-Icon--sizeXXS,\n  .spectrum-Icon--sizeXXS img,\n  .spectrum-Icon--sizeXXS svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Icon--sizeXS,\n  .spectrum-Icon--sizeXS img,\n  .spectrum-Icon--sizeXS svg {\n    height: calc(var(--spectrum-global-dimension-size-300) / 2);\n    width: calc(var(--spectrum-global-dimension-size-300) / 2);\n  }\n\n.spectrum-Icon--sizeS,\n  .spectrum-Icon--sizeS img,\n  .spectrum-Icon--sizeS svg {\n    height: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n    width: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n  }\n\n.spectrum-Icon--sizeM,\n  .spectrum-Icon--sizeM img,\n  .spectrum-Icon--sizeM svg {\n    height: var(--spectrum-global-dimension-size-300);\n    width: var(--spectrum-global-dimension-size-300);\n  }\n\n.spectrum-Icon--sizeL,\n  .spectrum-Icon--sizeL img,\n  .spectrum-Icon--sizeL svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n  }\n\n.spectrum-Icon--sizeXL,\n  .spectrum-Icon--sizeXL img,\n  .spectrum-Icon--sizeXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 2);\n    width: calc(var(--spectrum-global-dimension-size-300) * 2);\n  }\n\n.spectrum-Icon--sizeXXL,\n  .spectrum-Icon--sizeXXL img,\n  .spectrum-Icon--sizeXXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 3);\n    width: calc(var(--spectrum-global-dimension-size-300) * 3);\n  }\n\n.spectrum--medium .spectrum-UIIcon--large {\n    display: none;\n  }\n\n.spectrum--medium .spectrum-UIIcon--medium {\n    display: inline;\n  }\n\n.spectrum--large .spectrum-UIIcon--medium {\n    display: none;\n  }\n\n.spectrum--large .spectrum-UIIcon--large {\n    display: inline;\n  }\n\n.spectrum--large {\n  --ui-icon-large-display: block;\n  --ui-icon-medium-display: none;\n}\n\n.spectrum--medium {\n  --ui-icon-medium-display: block;\n  --ui-icon-large-display: none;\n}\n\n.spectrum-UIIcon--large {\n  display: var(--ui-icon-large-display);\n}\n\n.spectrum-UIIcon--medium {\n  display: var(--ui-icon-medium-display);\n}\n\n.spectrum-UIIcon-AlertMedium {\n  width: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-alert-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-AlertSmall {\n  width: var(--spectrum-icon-alert-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-alert-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-ArrowDownSmall {\n  width: var(--spectrum-icon-arrow-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-arrow-down-small-height);\n}\n\n.spectrum-UIIcon-ArrowLeftMedium {\n  width: var(--spectrum-icon-arrow-left-medium-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-arrow-left-medium-height);\n}\n\n.spectrum-UIIcon-Asterisk {\n  width: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CheckmarkMedium {\n  width: var(--spectrum-icon-checkmark-medium-width);\n  height: var(--spectrum-icon-checkmark-medium-height);\n}\n\n.spectrum-UIIcon-CheckmarkSmall {\n  width: var(--spectrum-icon-checkmark-small-width);\n  height: var(--spectrum-icon-checkmark-small-height);\n}\n\n.spectrum-UIIcon-ChevronDownMedium {\n  width: var(--spectrum-icon-chevron-down-medium-width);\n  height: var(--spectrum-icon-chevron-down-medium-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronDownSmall {\n  width: var(--spectrum-icon-chevron-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-down-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronLeftLarge {\n  width: var(--spectrum-icon-chevron-left-large-width);\n  height: var(--spectrum-icon-chevron-left-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronLeftMedium {\n  width: var(--spectrum-icon-chevron-left-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-left-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightLarge {\n  width: var(--spectrum-icon-chevron-right-large-width);\n  height: var(--spectrum-icon-chevron-right-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronRightMedium {\n  width: var(--spectrum-icon-chevron-right-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightSmall {\n  width: var(--spectrum-icon-chevron-right-small-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-ChevronUpSmall {\n  width: var(--spectrum-icon-chevron-up-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-up-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-CornerTriangle {\n  width: var(--spectrum-icon-cornertriangle-width, var(--spectrum-global-dimension-size-65));\n  height: var(--spectrum-icon-cornertriangle-height, var(--spectrum-global-dimension-size-65));\n}\n\n.spectrum-UIIcon-CrossLarge {\n  width: var(--spectrum-icon-cross-large-width);\n  height: var(--spectrum-icon-cross-large-height);\n}\n\n.spectrum-UIIcon-CrossMedium {\n  width: var(--spectrum-icon-cross-medium-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-medium-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CrossSmall {\n  width: var(--spectrum-icon-cross-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-DashSmall {\n  width: var(--spectrum-icon-dash-small-width);\n  height: var(--spectrum-icon-dash-small-height);\n}\n\n.spectrum-UIIcon-DoubleGripper {\n  width: var(--spectrum-icon-doublegripper-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-doublegripper-height, var(--spectrum-global-dimension-size-50));\n}\n\n.spectrum-UIIcon-FolderBreadcrumb {\n  width: var(--spectrum-icon-folderbreadcrumb-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-folderbreadcrumb-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-InfoMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-InfoSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-Magnifier {\n  width: var(--spectrum-icon-magnifier-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-magnifier-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-SkipLeft {\n  width: var(--spectrum-icon-skip-left-width);\n  height: var(--spectrum-icon-skip-left-height);\n}\n\n.spectrum-UIIcon-SkipRight {\n  width: var(--spectrum-icon-skip-right-width);\n  height: var(--spectrum-icon-skip-right-height);\n}\n\n.spectrum-UIIcon-Star {\n  width: var(--spectrum-icon-star-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-StarOutline {\n  width: var(--spectrum-icon-star-outline-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-outline-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessMedium {\n  width: var(--spectrum-icon-success-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-success-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessSmall {\n  width: var(--spectrum-icon-success-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-success-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-TripleGripper {\n  width: var(--spectrum-icon-triplegripper-width);\n  height: var(--spectrum-icon-triplegripper-height, var(--spectrum-global-dimension-size-85));\n}\n\n.spectrum-StatusLight {\n  min-height: var(--spectrum-statuslight-height, var(--spectrum-alias-single-line-height));\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: start;\n      align-items: flex-start;\n\n  padding: calc(var(--spectrum-global-dimension-size-65) - 1px) 0 calc(var(--spectrum-global-dimension-size-65) + 1px) 0;\n  box-sizing: border-box;\n\n  font-size: var(--spectrum-statuslight-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-statuslight-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: 1.44;\n}\n\n.spectrum-StatusLight::before {\n    content: '';\n    -ms-flex-positive: 0;\n        flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    display: inline-block;\n    width: var(--spectrum-statuslight-dot-size, var(--spectrum-global-dimension-size-100));\n    height: var(--spectrum-statuslight-dot-size, var(--spectrum-global-dimension-size-100));\n    border-radius: 50%;\n    margin: calc(var(--spectrum-global-dimension-size-65) + 1px) var(--spectrum-statuslight-text-gap, var(--spectrum-global-dimension-size-150)) calc(var(--spectrum-global-dimension-size-65) - 1px) var(--spectrum-statuslight-text-gap, var(--spectrum-global-dimension-size-150));\n    -ms-high-contrast-adjust: none;\n    forced-color-adjust: none;\n  }\n\n.spectrum-StatusLight--neutral {\n  font-style: italic;\n}\n\n.spectrum-StatusLight {\n  color: var(--spectrum-statuslight-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-StatusLight[disabled],\n  .spectrum-StatusLight.is-disabled {\n    color: var(--spectrum-statuslight-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-StatusLight[disabled]::before, .spectrum-StatusLight.is-disabled::before {\n      background-color: var(--spectrum-statuslight-dot-color-disabled, var(--spectrum-global-color-gray-400));\n    }\n\n.spectrum-StatusLight--negative::before {\n  background-color: var(--spectrum-statuslight-negative-dot-color, var(--spectrum-semantic-negative-color-status));\n}\n\n.spectrum-StatusLight--notice::before {\n  background-color: var(--spectrum-statuslight-notice-dot-color, var(--spectrum-semantic-notice-color-status));\n}\n\n.spectrum-StatusLight--positive::before {\n  background-color: var(--spectrum-statuslight-positive-dot-color, var(--spectrum-semantic-positive-color-status));\n}\n\n.spectrum-StatusLight--info::before,\n/** @deprecated */.spectrum-StatusLight--active::before {\n  background-color: var(--spectrum-statuslight-info-dot-color, var(--spectrum-semantic-informative-color-status));\n}\n\n.spectrum-StatusLight--neutral {\n  color: var(--spectrum-statuslight-neutral-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-StatusLight--neutral::before {\n    background-color: var(--spectrum-statuslight-neutral-dot-color, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-StatusLight--celery::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-celery, var(--spectrum-global-color-celery-400));\n}\n\n.spectrum-StatusLight--yellow::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-yellow, var(--spectrum-global-color-yellow-400));\n}\n\n.spectrum-StatusLight--fuchsia::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-fuchsia, var(--spectrum-global-color-fuchsia-400));\n}\n\n.spectrum-StatusLight--indigo::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-indigo, var(--spectrum-global-color-indigo-400));\n}\n\n.spectrum-StatusLight--seafoam::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-seafoam, var(--spectrum-global-color-seafoam-400));\n}\n\n.spectrum-StatusLight--chartreuse::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-chartreuse, var(--spectrum-global-color-chartreuse-400));\n}\n\n.spectrum-StatusLight--magenta::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-magenta, var(--spectrum-global-color-magenta-400));\n}\n\n.spectrum-StatusLight--purple::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-purple, var(--spectrum-global-color-purple-400));\n}\n\n.spectrum-Link {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n  text-decoration: none;\n  transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n  outline: none;\n}\n\n.spectrum-Link:hover {\n    text-decoration: underline;\n  }\n\n.spectrum-Link.focus-ring {\n    text-decoration: underline;\n  }\n\n.spectrum-Link.focus-ring {\n    text-decoration: underline;\n    -webkit-text-decoration-style: double;\n            text-decoration-style: double;\n  }\n\n.spectrum-Link.is-disabled {\n    cursor: default;\n    pointer-events: none;\n  }\n\n.spectrum-Link.is-disabled:hover,\n    .spectrum-Link.is-disabled:focus {\n      text-decoration: none;\n    }\n\n.spectrum-Link--subtle,\n/** @deprecated */.spectrum-Link--quiet {\n  text-decoration: underline;\n}\n\n.spectrum-Link--overBackground {\n  text-decoration: underline;\n}\n\n.spectrum-Link {\n  color: var(--spectrum-link-text-color, var(--spectrum-global-color-blue-600));\n}\n\n.spectrum-Link:hover {\n    color: var(--spectrum-link-text-color-hover, var(--spectrum-global-color-blue-600));\n  }\n\n.spectrum-Link:active {\n    color: var(--spectrum-link-text-color-down, var(--spectrum-global-color-blue-700));\n  }\n\n.spectrum-Link.focus-ring {\n    color: var(--spectrum-link-text-color-key-focus, var(--spectrum-alias-text-color-key-focus));\n  }\n\n.spectrum-Link.is-disabled {\n    color: var(--spectrum-link-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-Link--quiet,\n/** @deprecated */.spectrum-Link--subtle {\n  color: inherit;\n}\n\n.spectrum-Link--quiet:hover, .spectrum-Link--subtle:hover {\n    color: inherit;\n  }\n\n.spectrum-Link--quiet:active, .spectrum-Link--subtle:active {\n    color: inherit;\n  }\n\n.spectrum-Link--quiet:focus, .spectrum-Link--subtle:focus {\n    color: inherit;\n  }\n\n.spectrum-Link--overBackground {\n  color: var(--spectrum-link-over-background-text-color, var(--spectrum-global-color-static-white));\n}\n\n.spectrum-Link--overBackground:hover {\n    color: var(--spectrum-link-over-background-text-color-hover, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Link--overBackground:active {\n    color: var(--spectrum-link-over-background-text-color-down, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Link--overBackground:focus {\n    color: var(--spectrum-link-over-background-text-color-key-focus, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Link--overBackground.is-disabled {\n    color: var(--spectrum-link-over-background-text-color-disabled, rgba(255,255,255,0.5));\n  }\n\n.spectrum {\n  background-color: var(--spectrum-alias-background-color-default, var(--spectrum-global-color-gray-100));\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\n.spectrum-Site {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.spectrum-Site-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  max-height: 100%;\n  height: 100%;\n}\n\n.spectrum-Site-header {\n  display: none;\n\n  box-sizing: border-box;\n  height: var(--spectrum-global-dimension-size-600);\n  padding: var(--spectrum-global-dimension-size-100);\n\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.spectrum-Site-sideBar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  max-width: 100%;\n\n  transition: none;\n}\n\n.spectrum-Site-sideBarHeader {\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n\n  padding: var(--spectrum-global-dimension-size-400);\n\n  text-decoration: none;\n}\n\n.spectrum-Site-sideBarHeader:focus {\n  outline: none;\n}\n\n.spectrum-Site-sideBarHeader:focus h2 {\n  text-decoration: underline;\n}\n\n.spectrum-Site-search {\n  padding: 0 var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-400);\n}\n\n.spectrum-Site-searchResults {\n  top: -100%;\n  left: -100%;\n  max-height: calc(90vh - 120px);\n  z-index: 101;\n  position: absolute;\n\n  overflow-y: auto;\n}\n\n.spectrum-Site-noSearchResults {\n  padding: var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-400);\n}\n\n.spectrum-Site-logo {\n  margin-right: var(--spectrum-global-dimension-size-175);\n  color: rgb(225, 37, 27);\n}\n\n.spectrum--medium .spectrum-Site-logo {\n    height: 31px;\n  }\n\n.spectrum--large .spectrum-Site-logo {\n    height: 39px;\n  }\n\n.spectrum-Site-nav {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n\n  padding: 0px var(--spectrum-global-dimension-static-size-300, 24px) var(--spectrum-global-dimension-static-size-500, 40px);\n}\n\n.spectrum-Site-bottomNav {\n  margin-top: var(--spectrum-global-dimension-static-size-1000, 80px);\n}\n\n.spectrum-Site-mainContainer {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  border: none;\n\n  overflow-y: auto;\n}\n\n.spectrum-Site-page {\n  padding: 40px 52px 24px 52px;\n  max-width: 1080px;\n  margin: auto;\n}\n\n.spectrum-Site-hero {\n  max-width: 75%;\n  margin: auto;\n}\n\n.spectrum-Site-heroHeading {\n  margin-bottom: 16px;\n}\n\n.spectrum-Site-heroImage {\n  margin-top: 40px;\n  margin-bottom: 80px;\n  max-width: 100%;\n}\n\n.spectrum-Site-footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n\n.spectrum-Site-overlay {\n  display: none;\n  visibility: hidden;\n\n  opacity: 0;\n\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n\n  overflow: hidden;\n}\n\n@media screen and (max-width: 960px) {\n  .spectrum-Site-overlay {\n    display: block;\n    transition: opacity var(--spectrum-global-animation-duration-200, 160ms) ease-out 0ms,\n                visibility 0ms linear calc(0ms + var(--spectrum-global-animation-duration-200, 160ms));\n  }\n\n  .spectrum-Site-overlay.is-open {\n    visibility: visible;\n\n    opacity: 1;\n\n    pointer-events: auto;\n    transition: opacity var(--spectrum-global-animation-duration-200, 160ms) ease-in 0ms;\n  }\n\n  .spectrum-Site-overlay {\n    visibility: visible;\n  }\n\n  .spectrum-Site-sideBar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 100%;\n    z-index: 100;\n\n    transform: translateX(0);\n    transition: transform var(--spectrum-global-animation-duration-200, 160ms) ease-in-out;\n  }\n\n  .spectrum-Site-sideBar.is-open {\n    transform: translateX(100%);\n  }\n\n  .spectrum-Site-header {\n    display: block;\n  }\n\n  .spectrum-Site-page {\n    padding-left: var(--spectrum-global-dimension-size-300);\n    padding-right: var(--spectrum-global-dimension-size-300);\n  }\n\n  .spectrum-Site-hero {\n    max-width: 100%;\n  }\n\n  .spectrum-Site-heroHeading h1.spectrum-Heading1--display {\n    font-size: var(--spectrum-global-dimension-font-size-900);\n  }\n}\n\n.spectrum-CSSComponent {\n  max-width: 1080px;\n  margin: var(--spectrum-global-dimension-size-500) auto;\n  padding: 0 var(--spectrum-global-dimension-size-700);\n}\n\n.spectrum-CSSComponent-heading {\n  margin-bottom: var(--spectrum-global-dimension-size-500);\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n\n.spectrum-CSSComponent-link {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  color: inherit;\n  text-decoration: none;\n  outline: none;\n}\n\n.spectrum-CSSComponent-link.focus-ring,\n.spectrum-CSSComponent-link:hover {\n  text-decoration: underline;\n}\n\n.spectrum-CSSComponent-statusContainer {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  vertical-align: bottom;\n  margin: 0 var(--spectrum-global-dimension-size-200);\n}\n\n.spectrum-CSSComponent-detailsTable th {\n  text-align: left;\n  height: var(--spectrum-global-dimension-size-350);\n  font-weight: var(--spectrum-global-font-weight-regular, 400);\n  padding-right: var(--spectrum-global-dimension-size-300);\n}\n\n.spectrum-CSSComponent-detailsTable {\n  border-spacing: 0;\n  margin-top: var(--spectrum-global-dimension-size-500);\n  margin-bottom: var(--spectrum-global-dimension-size-450);\n}\n\n.spectrum-CSSComponent-sectionHeading {\n  margin-top: var(--spectrum-global-dimension-size-700);\n  margin-bottom: var(--spectrum-global-dimension-size-500);\n}\n\n.spectrum-CSSExample-status,\n.spectrum-CSSComponent-status {\n  padding: 0 !important;\n  min-height: 0 !important;\n}\n\n.spectrum-CSSComponent-status::before {\n  margin-left: 0 !important;\n}\n\n.spectrum-CSSExample-status {\n  margin-left: var(--spectrum-global-dimension-size-200);\n}\n\n.spectrum-CSSComponent-version {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  text-align: right;\n}\n\n.spectrum-CSSComponent-description {\n  margin-top: var(--spectrum-global-dimension-size-300);\n  margin-bottom: var(--spectrum-global-dimension-size-900);\n}\n\n.spectrum-CSSComponent-resources {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  margin-bottom: var(--spectrum-global-dimension-size-700);\n}\n\n.spectrum-CSSComponent-resources .spectrum-Card {\n  margin-right: var(--spectrum-global-dimension-size-300);\n  margin-bottom: var(--spectrum-global-dimension-size-300);\n}\n\n.spectrum--dark .spectrum-CSSComponent-resource--github, .spectrum--darkest .spectrum-CSSComponent-resource--github {\n    background-color: rgba(245, 245, 245, 0.1) !important;\n    color: rgb(245, 245, 245);\n  }\n\n.spectrum-CSSComponent-resource--npm {\n  background-color: rgba(203, 56, 55, 0.1) !important;\n}\n\n.spectrum-CSSComponent-cardImage {\n  text-decoration: none;\n}\n\n.spectrum-CSSComponent-switcher {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n.spectrum-CSS-switcherContainer {\n  margin-left: var(--spectrum-global-dimension-size-400);\n  white-space: nowrap;\n}\n\n.spectrum-CSSExample {\n  margin-bottom: var(--spectrum-global-dimension-size-800);\n}\n\n.spectrum-CSSExample-container {\n  position: relative;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n\n  border-radius: var(--spectrum-global-dimension-size-50);\n}\n\n.spectrum-CSSExample-heading {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-bottom: var(--spectrum-global-dimension-size-100) !important;\n}\n\n.spectrum-CSSExample-example,\n.spectrum-CSSExample-markup {\n  box-sizing: border-box;\n}\n\n.spectrum-CSSExample-example {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n\n  min-height: --spectrum-global-dimension-size-2400;\n\n  padding: var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-500);\n\n  border-radius: var(--spectrum-global-dimension-size-50) var(--spectrum-global-dimension-size-50) 0 0;\n}\n\n.spectrum-CSSExample-markup {\n  position: relative;\n  max-width: 100%;\n  max-height: var(--spectrum-global-dimension-size-2400);\n\n  padding: var(--spectrum-global-dimension-size-125) var(--spectrum-global-dimension-size-225);\n\n  border-radius: 0 0 var(--spectrum-global-dimension-size-50) var(--spectrum-global-dimension-size-50);\n\n  overflow: hidden;\n}\n\n.spectrum-CSSExample-markup.is-open {\n  max-height: 100%;\n\n  padding-bottom: var(--spectrum-global-dimension-size-700);\n}\n\n.spectrum-CSSExample-markup.is-open .spectrum-CSSExample-markupToggle::before {\n  display: none;\n}\n\n.spectrum-CSSExample-markupToggle + pre {\n  padding-bottom: var(--spectrum-global-dimension-size-100);\n}\n\n.spectrum-CSSExample-example--overlay {\n  position: relative;\n}\n\n.spectrum-Dialog.spectrum-CSSExample-dialog {\n  position: relative !important;\n  transform: none !important;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  transition: none;\n}\n\n.spectrum-CSSExample-overlayShowButton {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spectrum-CSSExample-markup pre code {\n  white-space: pre-wrap;\n}\n\n.spectrum-CSSExample-markupToggle {\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  box-sizing: border-box;\n  padding: var(--spectrum-global-dimension-size-300) var(--spectrum-global-dimension-size-300);\n\n  font-size: var(--spectrum-global-dimension-font-size-150);\n  text-align: left\n}\n\n@media screen and (max-width: 960px) {\n  .spectrum-CSSComponent {\n    padding: 0 var(--spectrum-global-dimension-size-250);\n    margin: var(--spectrum-global-dimension-size-100) auto;\n  }\n\n  .spectrum-CSSComponent-description {\n    margin-bottom: var(--spectrum-global-dimension-size-150);\n  }\n\n  .spectrum-CSSExample {\n    margin-bottom: var(--spectrum-global-dimension-size-200);\n  }\n\n  .spectrum-CSSExample-example {\n    padding: var(--spectrum-global-dimension-size-200) var(--spectrum-global-dimension-size-200);\n  }\n\n  .spectrum-CSSComponent-header {\n    margin-bottom: var(--spectrum-global-dimension-size-150);\n  }\n\n  .spectrum-CSSComponent-statusContainer,\n  .spectrum-CSSComponent-version {\n    display: none;\n  }\n  .spectrum-CSSComponent-title {\n    font-size: var(--spectrum-global-dimension-font-size-700);\n  }\n}\n\n.u-scrollable {\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  -webkit-overflow-scrolling: touch;\n}\n\n.u-scrollable::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.u-scrollable::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n}\n\n.spectrum-Site {\n  background-color: var(--spectrum-global-color-gray-50);\n}\n\n.spectrum-Site-header {\n  border-bottom-color: var(--spectrum-global-color-gray-300);\n  background-color: var(--spectrum-global-color-gray-50);\n}\n\n.spectrum-Site-sideBar {\n  background-color: var(--spectrum-global-color-gray-75);\n}\n\n.spectrum-Site-mainContainer {\n  background: var(--spectrum-global-color-gray-50);\n}\n\n.spectrum-Site-overlay {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.spectrum-CSSComponent-resource--github {\n  background-color: rgba(0, 0, 0, 0.1) !important;\n  color: black;\n}\n\n.spectrum-CSSComponent-resource--adobe {\n  color: rgb(255, 2, 1) !important;\n  background-color: var(--spectrum-global-color-gray-100) !important;\n}\n\n.u-scrollable::-webkit-scrollbar-track,\n.u-scrollable::-webkit-scrollbar-track-piece {\n  background: var(--spectrum-global-color-gray-75);\n}\n\n.u-scrollable::-webkit-scrollbar-thumb {\n  background-color: var(--spectrum-global-color-gray-75);\n}\n\n.u-scrollable:hover::-webkit-scrollbar-thumb {\n  background-color: var(--spectrum-global-color-gray-400);\n}\n\n.spectrum-CSSExample-example {\n  background-color: var(--spectrum-global-color-gray-100);\n}\n\n.spectrum-CSSExample-markup {\n  border-top: 1px solid var(--spectrum-global-color-gray-100);\n\n  background: var(--spectrum-global-color-gray-75);\n}\n\n.spectrum-CSSExample-markupToggle {\n  z-index: 1;\n\n  background: var(--spectrum-global-color-gray-75);\n}\n\n.spectrum-CSSExample-markup.is-open .spectrum-CSSExample-markupToggle {\n  background-color: transparent;\n}\n\n.spectrum-CSSExample-example--overlay {\n  background: rgba(0,0,0,0.4);\n  color: rgba(0,0,0,0.4);\n}\n\n.spectrum-CSSExample-oldAPI {\n  color: var(--spectrum-semantic-negative-color-text-small, var(--spectrum-global-color-red-600));\n}\n\n.spectrum {\n  font-family: var(--spectrum-alias-body-text-font-family, var(--spectrum-global-font-family-base));\n  font-size: var(--spectrum-alias-font-size-default, var(--spectrum-global-dimension-font-size-100));\n}\n\n.spectrum:lang(ar) {\n    font-family: var(--spectrum-alias-font-family-ar, myriad-arabic, adobe-clean, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif);\n  }\n\n.spectrum:lang(he) {\n    font-family: var(--spectrum-alias-font-family-he, myriad-hebrew, adobe-clean, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif);\n  }\n\n.spectrum:lang(zh-Hans) {\n    font-family: var(--spectrum-alias-font-family-zhhans, adobe-clean-han-simplified-c, source-han-simplified-c, 'SimSun', 'Heiti SC Light', 'sans-serif');\n  }\n\n.spectrum:lang(zh-Hant) {\n    font-family: var(--spectrum-alias-font-family-zh, adobe-clean-han-traditional, source-han-traditional, 'MingLiu', 'Heiti TC Light','sans-serif');\n  }\n\n.spectrum:lang(zh) {\n    font-family: var(--spectrum-alias-font-family-zh, adobe-clean-han-traditional, source-han-traditional, 'MingLiu', 'Heiti TC Light','sans-serif');\n  }\n\n.spectrum:lang(ko) {\n    font-family: var(--spectrum-alias-font-family-ko, adobe-clean-han-korean, source-han-korean, 'Malgun Gothic', 'Apple Gothic', 'sans-serif');\n  }\n\n.spectrum:lang(ja) {\n    font-family: var(--spectrum-alias-font-family-ja, adobe-clean-han-japanese, source-han-japanese, 'Yu Gothic', '\\30E1 \\30A4 \\30EA \\30AA', '\\30D2 \\30E9 \\30AE \\30CE \\89D2 \\30B4  Pro W3', 'Hiragino Kaku Gothic Pro W3', 'Osaka', '\\FF2D \\FF33 \\FF30 \\30B4 \\30B7 \\30C3 \\30AF', 'MS PGothic', 'sans-serif');\n  }\n\n.spectrum,\n.spectrum.spectrum-Body,\n.spectrum-Body {\n  font-size: var(--spectrum-body-4-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-body-4-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-4-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-4-text-font-style, var(--spectrum-global-font-style-regular));\n}\n\n.spectrum-Body--italic {\n  font-style: var(--spectrum-body-4-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n}\n\n.spectrum-Body1 {\n  \n\n    font-size: var(--spectrum-body-1-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-body-1-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-1-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body2,\n.spectrum-Body--large {\n  \n\n    font-size: var(--spectrum-body-2-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-body-2-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-2-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body3 {\n  \n\n    font-size: var(--spectrum-body-3-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-body-3-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-3-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-3-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-3-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-3-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body4,\n.spectrum-Body--secondary {\n  \n\n    font-size: var(--spectrum-body-4-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-body-4-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-4-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-4-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-4-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-4-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body5,\n.spectrum-Body--small {\n  \n\n    font-size: var(--spectrum-body-5-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-body-5-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-5-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-5-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-5-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-5-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading1 {\n  \n\n    font-size: var(--spectrum-heading-1-text-size, var(--spectrum-alias-heading1-text-size));\n  font-weight: var(--spectrum-heading-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading2 {\n  \n\n    font-size: var(--spectrum-heading-2-text-size, var(--spectrum-alias-heading2-text-size));\n  font-weight: var(--spectrum-heading-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading3 {\n  \n\n    font-size: var(--spectrum-heading-3-text-size, var(--spectrum-alias-heading3-text-size));\n  font-weight: var(--spectrum-heading-3-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-3-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-3-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-3-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-3-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading4,\n.spectrum-Heading--subtitle1 {\n  \n\n    font-size: var(--spectrum-heading-4-text-size, var(--spectrum-alias-heading4-text-size));\n  font-weight: var(--spectrum-heading-4-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-4-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-4-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-4-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-4-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading5 {\n  \n\n    font-size: var(--spectrum-heading-5-text-size, var(--spectrum-alias-heading5-text-size));\n  font-weight: var(--spectrum-heading-5-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-5-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-5-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-5-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-5-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading6,\n.spectrum-Heading--subtitle2 {\n  \n\n    font-size: var(--spectrum-heading-6-text-size, var(--spectrum-alias-heading6-text-size));\n  font-weight: var(--spectrum-heading-6-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-6-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-6-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-6-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-6-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Subheading,\n.spectrum-Heading--subtitle3 {\n  \n\n    font-size: var(--spectrum-subheading-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-subheading-text-font-weight, var(--spectrum-alias-subheading-text-font-weight));\n  line-height: var(--spectrum-subheading-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-subheading-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-subheading-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-subheading-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Detail {\n  \n\n    font-size: var(--spectrum-detail-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading1--quiet {\n  \n\n    font-size: var(--spectrum-heading-quiet-1-text-size, var(--spectrum-alias-heading1-text-size));\n  font-weight: var(--spectrum-heading-quiet-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-heading-quiet-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-quiet-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-quiet-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-quiet-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading2--quiet,\n.spectrum-Heading--pageTitle {\n  \n\n    font-size: var(--spectrum-heading-quiet-2-text-size, var(--spectrum-alias-heading2-text-size));\n  font-weight: var(--spectrum-heading-quiet-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-heading-quiet-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-quiet-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-quiet-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-quiet-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading1--strong {\n  \n\n    font-size: var(--spectrum-heading-strong-1-text-size, var(--spectrum-alias-heading1-text-size));\n  font-weight: var(--spectrum-heading-strong-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-strong));\n  line-height: var(--spectrum-heading-strong-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-strong-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-strong-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-strong-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading2--strong {\n  \n\n    font-size: var(--spectrum-heading-strong-2-text-size, var(--spectrum-alias-heading2-text-size));\n  font-weight: var(--spectrum-heading-strong-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-strong));\n  line-height: var(--spectrum-heading-strong-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-strong-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-strong-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-strong-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading1--display {\n  \n\n    font-size: var(--spectrum-display-1-text-size, var(--spectrum-alias-heading-display1-text-size));\n  font-weight: var(--spectrum-display-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-display-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-display-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading2--display {\n  \n\n    font-size: var(--spectrum-display-2-text-size, var(--spectrum-alias-heading-display2-text-size));\n  font-weight: var(--spectrum-display-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-display-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-display-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading1--display.spectrum-Heading1--strong {\n  \n\n    font-size: var(--spectrum-display-strong-1-text-size, var(--spectrum-alias-heading-display1-text-size));\n  font-weight: var(--spectrum-display-strong-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-strong));\n  line-height: var(--spectrum-display-strong-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-strong-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-strong-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-display-strong-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading2--display.spectrum-Heading2--strong {\n  \n\n    font-size: var(--spectrum-display-strong-2-text-size, var(--spectrum-alias-heading-display2-text-size));\n  font-weight: var(--spectrum-display-strong-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-strong));\n  line-height: var(--spectrum-display-strong-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-strong-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-strong-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-display-strong-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading1--display.spectrum-Heading1--quiet {\n  \n\n    font-size: var(--spectrum-display-quiet-1-text-size, var(--spectrum-alias-heading-display1-text-size));\n  font-weight: var(--spectrum-display-quiet-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-display-quiet-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-quiet-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-quiet-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-display-quiet-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum-Heading--display {\n  \n\n    font-size: var(--spectrum-display-quiet-2-text-size, var(--spectrum-alias-heading-display2-text-size));\n  font-weight: var(--spectrum-display-quiet-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-display-quiet-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-quiet-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-quiet-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-display-quiet-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Typography .spectrum-Body1 {\n    margin-top: var(--spectrum-body-1-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-1-margin-bottom, var(--spectrum-global-dimension-size-200));\n  }\n\n.spectrum-Typography .spectrum-Body2,\n.spectrum-Typography .spectrum-Body--large {\n    margin-top: var(--spectrum-body-2-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-2-margin-bottom, var(--spectrum-global-dimension-size-160));\n  }\n\n.spectrum-Typography .spectrum-Body3 {\n    margin-top: var(--spectrum-body-3-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-3-margin-bottom, var(--spectrum-global-dimension-size-150));\n  }\n\n.spectrum-Typography .spectrum-Body4,\n.spectrum-Typography .spectrum-Body--secondary {\n    margin-top: var(--spectrum-body-4-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-4-margin-bottom, var(--spectrum-global-dimension-size-125));\n  }\n\n.spectrum-Typography .spectrum-Body5,\n.spectrum-Typography .spectrum-Body--small {\n    margin-top: var(--spectrum-body-5-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-5-margin-bottom, var(--spectrum-global-dimension-size-115));\n  }\n\n.spectrum-Typography .spectrum-Heading1 {\n    margin-top: var(--spectrum-heading-1-margin-top, var(--spectrum-alias-heading1-margin-top));\n    margin-bottom: var(--spectrum-heading-1-margin-bottom, var(--spectrum-global-dimension-size-115));\n  }\n\n.spectrum-Typography .spectrum-Heading2 {\n    margin-top: var(--spectrum-heading-2-margin-top, var(--spectrum-alias-heading2-margin-top));\n    margin-bottom: var(--spectrum-heading-2-margin-bottom, var(--spectrum-global-dimension-size-85));\n  }\n\n.spectrum-Typography .spectrum-Heading3 {\n    margin-top: var(--spectrum-heading-3-margin-top, var(--spectrum-alias-heading3-margin-top));\n    margin-bottom: var(--spectrum-heading-3-margin-bottom, var(--spectrum-global-dimension-size-75));\n  }\n\n.spectrum-Typography .spectrum-Heading4,\n.spectrum-Typography .spectrum-Heading--subtitle1 {\n    margin-top: var(--spectrum-heading-4-margin-top, var(--spectrum-alias-heading4-margin-top));\n    margin-bottom: var(--spectrum-heading-4-margin-bottom, var(--spectrum-global-dimension-size-65));\n  }\n\n.spectrum-Typography .spectrum-Heading5 {\n    margin-top: var(--spectrum-heading-5-margin-top, var(--spectrum-alias-heading5-margin-top));\n    margin-bottom: var(--spectrum-heading-5-margin-bottom, var(--spectrum-global-dimension-size-50));\n  }\n\n.spectrum-Typography .spectrum-Heading6,\n.spectrum-Typography .spectrum-Heading--subtitle2 {\n    margin-top: var(--spectrum-heading-6-margin-top, var(--spectrum-alias-heading6-margin-top));\n    margin-bottom: var(--spectrum-heading-6-margin-bottom, var(--spectrum-global-dimension-size-40));\n  }\n\n.spectrum-Typography .spectrum-Subheading,\n.spectrum-Typography .spectrum-Heading--subtitle3 {\n    margin-top: var(--spectrum-subheading-margin-top, var(--spectrum-global-dimension-font-size-75));\n    margin-bottom: var(--spectrum-subheading-margin-bottom, var(--spectrum-global-dimension-size-40));\n  }\n\n.spectrum-Typography .spectrum-Detail {\n    margin-top: var(--spectrum-detail-margin-top, 0px);\n    margin-bottom: var(--spectrum-detail-margin-bottom, var(--spectrum-global-dimension-size-100));\n  }\n\n.spectrum-Typography .spectrum-Heading1--quiet {\n    margin-top: var(--spectrum-heading-quiet-1-margin-top, var(--spectrum-alias-heading1-margin-top));\n    margin-bottom: var(--spectrum-heading-quiet-1-margin-bottom, var(--spectrum-global-dimension-size-115));\n  }\n\n.spectrum-Typography .spectrum-Heading2--quiet,\n.spectrum-Typography .spectrum-Heading--pageTitle {\n    margin-top: var(--spectrum-heading-quiet-2-margin-top, var(--spectrum-alias-heading2-margin-top));\n    margin-bottom: var(--spectrum-heading-quiet-2-margin-bottom, var(--spectrum-global-dimension-size-85));\n  }\n\n.spectrum-Typography .spectrum-Heading1--strong {\n    margin-top: var(--spectrum-heading-strong-1-margin-top, var(--spectrum-alias-heading1-margin-top));\n    margin-bottom: var(--spectrum-heading-strong-1-margin-bottom, var(--spectrum-global-dimension-size-115));\n  }\n\n.spectrum-Typography .spectrum-Heading2--strong {\n    margin-top: var(--spectrum-heading-strong-2-margin-top, var(--spectrum-alias-heading2-margin-top));\n    margin-bottom: var(--spectrum-heading-strong-2-margin-bottom, var(--spectrum-global-dimension-size-85));\n  }\n\n.spectrum-Typography .spectrum-Heading1--display {\n    margin-top: var(--spectrum-display-1-margin-top, var(--spectrum-alias-heading-display1-margin-top));\n    margin-bottom: var(--spectrum-display-1-margin-bottom, var(--spectrum-global-dimension-size-130));\n  }\n\n.spectrum-Typography .spectrum-Heading2--display {\n    margin-top: var(--spectrum-display-2-margin-top, var(--spectrum-alias-heading-display2-margin-top));\n    margin-bottom: var(--spectrum-display-2-margin-bottom, var(--spectrum-global-dimension-size-125));\n  }\n\n.spectrum-Typography .spectrum-Heading1--display.spectrum-Heading1--strong {\n    margin-top: var(--spectrum-display-strong-1-margin-top, var(--spectrum-alias-heading-display1-margin-top));\n    margin-bottom: var(--spectrum-display-strong-1-margin-bottom, var(--spectrum-global-dimension-size-130));\n  }\n\n.spectrum-Typography .spectrum-Heading2--display.spectrum-Heading2--strong {\n    margin-top: var(--spectrum-display-strong-2-margin-top, var(--spectrum-alias-heading-display2-margin-top));\n    margin-bottom: var(--spectrum-display-strong-2-margin-bottom, var(--spectrum-global-dimension-size-125));\n  }\n\n.spectrum-Typography .spectrum-Heading1--display.spectrum-Heading1--quiet {\n    margin-top: var(--spectrum-display-quiet-1-margin-top, var(--spectrum-alias-heading-display1-margin-top));\n    margin-bottom: var(--spectrum-display-quiet-1-margin-bottom, var(--spectrum-global-dimension-size-130));\n  }\n\n.spectrum-Typography .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum-Typography .spectrum-Heading--display {\n    margin-top: var(--spectrum-display-quiet-2-margin-top, var(--spectrum-alias-heading-display2-margin-top));\n    margin-bottom: var(--spectrum-display-quiet-2-margin-bottom, var(--spectrum-global-dimension-size-125));\n  }\n\n.spectrum-Article {\n  font-family: var(--spectrum-body-article-1-text-font-family, var(--spectrum-alias-article-text-font-family));\n}\n\n.spectrum-Article .spectrum-Body1 {\n  \n\n    font-size: var(--spectrum-body-article-1-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-body-article-1-text-font-weight, var(--spectrum-alias-article-body-text-font-weight));\n  line-height: var(--spectrum-body-article-1-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-article-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-article-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-article-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Body2,\n.spectrum-Article .spectrum-Body--large {\n  \n\n    font-size: var(--spectrum-body-article-2-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-body-article-2-text-font-weight, var(--spectrum-alias-article-body-text-font-weight));\n  line-height: var(--spectrum-body-article-2-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-article-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-article-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-article-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Body3 {\n  \n\n    font-size: var(--spectrum-body-article-3-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-body-article-3-text-font-weight, var(--spectrum-alias-article-body-text-font-weight));\n  line-height: var(--spectrum-body-article-3-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-article-3-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-article-3-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-article-3-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Body4,\n.spectrum-Article .spectrum-Body--secondary {\n  \n\n    font-size: var(--spectrum-body-article-4-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-body-article-4-text-font-weight, var(--spectrum-alias-article-body-text-font-weight));\n  line-height: var(--spectrum-body-article-4-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-article-4-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-article-4-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-article-4-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Body5,\n.spectrum-Article .spectrum-Body--small {\n  \n\n    font-size: var(--spectrum-body-article-5-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-body-article-5-text-font-weight, var(--spectrum-alias-article-body-text-font-weight));\n  line-height: var(--spectrum-body-article-5-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-article-5-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-article-5-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-article-5-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading1 {\n  \n\n    font-size: var(--spectrum-heading-article-1-text-size, var(--spectrum-alias-heading1-text-size));\n  font-weight: var(--spectrum-heading-article-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-article-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-article-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-article-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-article-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading2 {\n  \n\n    font-size: var(--spectrum-heading-article-2-text-size, var(--spectrum-alias-heading2-text-size));\n  font-weight: var(--spectrum-heading-article-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-article-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-article-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-article-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-article-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading3 {\n  \n\n    font-size: var(--spectrum-heading-article-3-text-size, var(--spectrum-alias-heading3-text-size));\n  font-weight: var(--spectrum-heading-article-3-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-article-3-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-article-3-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-article-3-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-article-3-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading4,\n.spectrum-Article .spectrum-Heading--subtitle1 {\n  \n\n    font-size: var(--spectrum-heading-article-4-text-size, var(--spectrum-alias-heading4-text-size));\n  font-weight: var(--spectrum-heading-article-4-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-article-4-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-article-4-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-article-4-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-article-4-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading5 {\n  \n\n    font-size: var(--spectrum-heading-article-5-text-size, var(--spectrum-alias-heading5-text-size));\n  font-weight: var(--spectrum-heading-article-5-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-article-5-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-article-5-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-article-5-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-article-5-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading6,\n.spectrum-Article .spectrum-Heading--subtitle2 {\n  \n\n    font-size: var(--spectrum-heading-article-6-text-size, var(--spectrum-alias-heading6-text-size));\n  font-weight: var(--spectrum-heading-article-6-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-article-6-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-article-6-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-article-6-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-article-6-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Subheading,\n.spectrum-Article .spectrum-Heading--subtitle3 {\n  \n\n    font-size: var(--spectrum-subheading-article-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-subheading-article-text-font-weight, var(--spectrum-alias-article-subheading-text-font-weight));\n  line-height: var(--spectrum-subheading-article-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-subheading-article-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-subheading-article-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-subheading-article-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Detail {\n  \n\n    font-size: var(--spectrum-detail-article-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-article-text-font-weight, var(--spectrum-alias-article-body-text-font-weight));\n  line-height: var(--spectrum-detail-article-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-article-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-article-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-detail-article-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading1--quiet {\n  \n\n    font-size: var(--spectrum-heading-quiet-article-1-text-size, var(--spectrum-alias-heading1-text-size));\n  font-weight: var(--spectrum-heading-quiet-article-1-text-font-weight, var(--spectrum-alias-article-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-heading-quiet-article-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-quiet-article-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-quiet-article-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-quiet-article-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading2--quiet,\n.spectrum-Article .spectrum-Heading--pageTitle {\n  \n\n    font-size: var(--spectrum-heading-quiet-article-2-text-size, var(--spectrum-alias-heading2-text-size));\n  font-weight: var(--spectrum-heading-quiet-article-2-text-font-weight, var(--spectrum-alias-article-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-heading-quiet-article-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-quiet-article-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-quiet-article-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-heading-quiet-article-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading1--display {\n  \n\n    font-size: var(--spectrum-display-article-1-text-size, var(--spectrum-alias-heading-display1-text-size));\n  font-weight: var(--spectrum-display-article-1-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-display-article-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-article-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-article-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-display-article-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading2--display {\n  \n\n    font-size: var(--spectrum-display-article-2-text-size, var(--spectrum-alias-heading-display2-text-size));\n  font-weight: var(--spectrum-display-article-2-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-display-article-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-article-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-article-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-display-article-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading1--display.spectrum-Heading1--quiet {\n  \n\n    font-size: var(--spectrum-display-quiet-article-1-text-size, var(--spectrum-alias-heading-display1-text-size));\n  font-weight: var(--spectrum-display-quiet-article-1-text-font-weight, var(--spectrum-alias-article-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-display-quiet-article-1-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-quiet-article-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-quiet-article-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-display-quiet-article-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Article .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum-Article .spectrum-Heading--display {\n  \n\n    font-size: var(--spectrum-display-quiet-article-2-text-size, var(--spectrum-alias-heading-display2-text-size));\n  font-weight: var(--spectrum-display-quiet-article-2-text-font-weight, var(--spectrum-alias-article-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-display-quiet-article-2-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-display-quiet-article-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-quiet-article-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-small));\n  text-transform: var(--spectrum-display-quiet-article-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body1, .spectrum:lang(ko) .spectrum-Body1, .spectrum:lang(zh) .spectrum-Body1 {\n  \n\n    font-size: var(--spectrum-body-han-1-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-body-han-1-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-1-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body2,\n.spectrum:lang(ko) .spectrum-Body2,\n.spectrum:lang(zh) .spectrum-Body2,\n.spectrum:lang(ja) .spectrum-Body--large,\n.spectrum:lang(ko) .spectrum-Body--large,\n.spectrum:lang(zh) .spectrum-Body--large {\n  \n\n    font-size: var(--spectrum-body-han-2-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-body-han-2-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-2-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body3, .spectrum:lang(ko) .spectrum-Body3, .spectrum:lang(zh) .spectrum-Body3 {\n  \n\n    font-size: var(--spectrum-body-han-3-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-body-han-3-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-3-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-3-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-3-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-3-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body4,\n.spectrum:lang(ko) .spectrum-Body4,\n.spectrum:lang(zh) .spectrum-Body4,\n.spectrum:lang(ja) .spectrum-Body--secondary,\n.spectrum:lang(ko) .spectrum-Body--secondary,\n.spectrum:lang(zh) .spectrum-Body--secondary {\n  \n\n    font-size: var(--spectrum-body-han-4-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-body-han-4-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-4-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-4-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-4-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-4-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body5,\n.spectrum:lang(ko) .spectrum-Body5,\n.spectrum:lang(zh) .spectrum-Body5,\n.spectrum:lang(ja) .spectrum-Body--small,\n.spectrum:lang(ko) .spectrum-Body--small,\n.spectrum:lang(zh) .spectrum-Body--small {\n  \n\n    font-size: var(--spectrum-body-han-5-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-body-han-5-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-5-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-5-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-5-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-5-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading1, .spectrum:lang(ko) .spectrum-Heading1, .spectrum:lang(zh) .spectrum-Heading1 {\n  \n\n    font-size: var(--spectrum-heading-han-1-text-size, var(--spectrum-alias-heading1-han-text-size));\n  font-weight: var(--spectrum-heading-han-1-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-1-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading2, .spectrum:lang(ko) .spectrum-Heading2, .spectrum:lang(zh) .spectrum-Heading2 {\n  \n\n    font-size: var(--spectrum-heading-han-2-text-size, var(--spectrum-alias-heading2-han-text-size));\n  font-weight: var(--spectrum-heading-han-2-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-2-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading3, .spectrum:lang(ko) .spectrum-Heading3, .spectrum:lang(zh) .spectrum-Heading3 {\n  \n\n    font-size: var(--spectrum-heading-han-3-text-size, var(--spectrum-alias-heading3-han-text-size));\n  font-weight: var(--spectrum-heading-han-3-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-3-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-3-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-3-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-3-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading4,\n.spectrum:lang(ko) .spectrum-Heading4,\n.spectrum:lang(zh) .spectrum-Heading4,\n.spectrum:lang(ja) .spectrum-Heading--subtitle1,\n.spectrum:lang(ko) .spectrum-Heading--subtitle1,\n.spectrum:lang(zh) .spectrum-Heading--subtitle1 {\n  \n\n    font-size: var(--spectrum-heading-han-4-text-size, var(--spectrum-alias-heading4-text-size));\n  font-weight: var(--spectrum-heading-han-4-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-4-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-4-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-4-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-4-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading5, .spectrum:lang(ko) .spectrum-Heading5, .spectrum:lang(zh) .spectrum-Heading5 {\n  \n\n    font-size: var(--spectrum-heading-han-5-text-size, var(--spectrum-alias-heading5-text-size));\n  font-weight: var(--spectrum-heading-han-5-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-5-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-5-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-5-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-5-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading6,\n.spectrum:lang(ko) .spectrum-Heading6,\n.spectrum:lang(zh) .spectrum-Heading6,\n.spectrum:lang(ja) .spectrum-Heading--subtitle2,\n.spectrum:lang(ko) .spectrum-Heading--subtitle2,\n.spectrum:lang(zh) .spectrum-Heading--subtitle2 {\n  \n\n    font-size: var(--spectrum-heading-han-6-text-size, var(--spectrum-alias-heading6-text-size));\n  font-weight: var(--spectrum-heading-han-6-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-6-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-6-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-6-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-6-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Subheading,\n.spectrum:lang(ko) .spectrum-Subheading,\n.spectrum:lang(zh) .spectrum-Subheading,\n.spectrum:lang(ja) .spectrum-Heading--subtitle3,\n.spectrum:lang(ko) .spectrum-Heading--subtitle3,\n.spectrum:lang(zh) .spectrum-Heading--subtitle3 {\n  \n\n    font-size: var(--spectrum-subheading-han-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-subheading-han-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-subheading-han-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-subheading-han-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-subheading-han-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-subheading-han-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Detail, .spectrum:lang(ko) .spectrum-Detail, .spectrum:lang(zh) .spectrum-Detail {\n  \n\n    font-size: var(--spectrum-detail-han-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-han-text-font-weight, var(--spectrum-alias-han-detail-text-font-weight));\n  line-height: var(--spectrum-detail-han-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-detail-han-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--quiet, .spectrum:lang(ko) .spectrum-Heading1--quiet, .spectrum:lang(zh) .spectrum-Heading1--quiet {\n  \n\n    font-size: var(--spectrum-heading-quiet-han-1-text-size, var(--spectrum-alias-heading1-han-text-size));\n  font-weight: var(--spectrum-heading-quiet-han-1-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-heading-quiet-han-1-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-quiet-han-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-quiet-han-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-quiet-han-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--quiet,\n.spectrum:lang(ko) .spectrum-Heading2--quiet,\n.spectrum:lang(zh) .spectrum-Heading2--quiet,\n.spectrum:lang(ja) .spectrum-Heading--pageTitle,\n.spectrum:lang(ko) .spectrum-Heading--pageTitle,\n.spectrum:lang(zh) .spectrum-Heading--pageTitle {\n  \n\n    font-size: var(--spectrum-heading-quiet-han-2-text-size, var(--spectrum-alias-heading2-han-text-size));\n  font-weight: var(--spectrum-heading-quiet-han-2-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-heading-quiet-han-2-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-quiet-han-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-quiet-han-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-quiet-han-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--strong, .spectrum:lang(ko) .spectrum-Heading1--strong, .spectrum:lang(zh) .spectrum-Heading1--strong {\n  \n\n    font-size: var(--spectrum-heading-strong-han-1-text-size, var(--spectrum-alias-heading1-han-text-size));\n  font-weight: var(--spectrum-heading-strong-han-1-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-strong));\n  line-height: var(--spectrum-heading-strong-han-1-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-strong-han-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-strong-han-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-strong-han-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--strong, .spectrum:lang(ko) .spectrum-Heading2--strong, .spectrum:lang(zh) .spectrum-Heading2--strong {\n  \n\n    font-size: var(--spectrum-heading-strong-han-2-text-size, var(--spectrum-alias-heading2-han-text-size));\n  font-weight: var(--spectrum-heading-strong-han-2-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-strong));\n  line-height: var(--spectrum-heading-strong-han-2-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-strong-han-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-strong-han-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-strong-han-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--display, .spectrum:lang(ko) .spectrum-Heading1--display, .spectrum:lang(zh) .spectrum-Heading1--display {\n  \n\n    font-size: var(--spectrum-display-han-1-text-size, var(--spectrum-alias-heading-han-display1-text-size));\n  font-weight: var(--spectrum-display-han-1-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-display-han-1-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-display-han-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-han-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-display-han-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--display, .spectrum:lang(ko) .spectrum-Heading2--display, .spectrum:lang(zh) .spectrum-Heading2--display {\n  \n\n    font-size: var(--spectrum-display-han-2-text-size, var(--spectrum-alias-heading-han-display2-text-size));\n  font-weight: var(--spectrum-display-han-2-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-display-han-2-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-display-han-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-han-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-display-han-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--strong, .spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--strong, .spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--strong {\n  \n\n    font-size: var(--spectrum-display-strong-han-1-text-size, var(--spectrum-alias-heading-han-display1-text-size));\n  font-weight: var(--spectrum-display-strong-han-1-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-strong));\n  line-height: var(--spectrum-display-strong-han-1-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-display-strong-han-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-strong-han-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-display-strong-han-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--strong, .spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--strong, .spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--strong {\n  \n\n    font-size: var(--spectrum-display-strong-han-2-text-size, var(--spectrum-alias-heading-han-display2-text-size));\n  font-weight: var(--spectrum-display-strong-han-2-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-strong));\n  line-height: var(--spectrum-display-strong-han-2-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-display-strong-han-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-strong-han-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-display-strong-han-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--quiet, .spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--quiet, .spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--quiet {\n  \n\n    font-size: var(--spectrum-display-quiet-han-1-text-size, var(--spectrum-alias-heading-han-display1-text-size));\n  font-weight: var(--spectrum-display-quiet-han-1-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-display-quiet-han-1-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-display-quiet-han-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-quiet-han-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-display-quiet-han-1-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum:lang(ja) .spectrum-Heading--display,\n.spectrum:lang(ko) .spectrum-Heading--display,\n.spectrum:lang(zh) .spectrum-Heading--display {\n  \n\n    font-size: var(--spectrum-display-quiet-han-2-text-size, var(--spectrum-alias-heading-han-display2-text-size));\n  font-weight: var(--spectrum-display-quiet-han-2-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-quiet));\n  line-height: var(--spectrum-display-quiet-han-2-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-display-quiet-han-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-display-quiet-han-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-display-quiet-han-2-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Code1 {\n  \n\n    font-size: var(--spectrum-body-code-1-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-body-code-1-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-body-code-1-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-body-code-1-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-code-1-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-body-code-1-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code2 {\n  \n\n    font-size: var(--spectrum-body-code-2-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-body-code-2-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-body-code-2-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-body-code-2-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-code-2-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-body-code-2-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code3 {\n  \n\n    font-size: var(--spectrum-body-code-3-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-body-code-3-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-body-code-3-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-body-code-3-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-code-3-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-body-code-3-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code4 {\n  \n\n    font-size: var(--spectrum-body-code-4-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-body-code-4-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-body-code-4-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-body-code-4-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-code-4-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-body-code-4-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code5 {\n  \n\n    font-size: var(--spectrum-body-code-5-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-body-code-5-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-body-code-5-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-body-code-5-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-code-5-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-body-code-5-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Heading--XXXL {\n  \n\n    font-size: var(--spectrum-heading-xxxl-text-size, var(--spectrum-alias-heading-xxxl-text-size));\n  font-weight: var(--spectrum-heading-xxxl-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-xxxl-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-xxxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-xxxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading--XXL {\n  \n\n    font-size: var(--spectrum-heading-xxl-text-size, var(--spectrum-alias-heading-xxl-text-size));\n  font-weight: var(--spectrum-heading-xxl-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-xxl-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-xxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-xxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading--XL {\n  \n\n    font-size: var(--spectrum-heading-xl-text-size, var(--spectrum-alias-heading-xl-text-size));\n  font-weight: var(--spectrum-heading-xl-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-xl-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-xl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading--L {\n  \n\n    font-size: var(--spectrum-heading-l-text-size, var(--spectrum-alias-heading-l-text-size));\n  font-weight: var(--spectrum-heading-l-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-l-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-l-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading--M {\n  \n\n    font-size: var(--spectrum-heading-m-text-size, var(--spectrum-alias-heading-m-text-size));\n  font-weight: var(--spectrum-heading-m-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-m-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-m-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading--S {\n  \n\n    font-size: var(--spectrum-heading-s-text-size, var(--spectrum-alias-heading-s-text-size));\n  font-weight: var(--spectrum-heading-s-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-s-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-s-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading--XS {\n  \n\n    font-size: var(--spectrum-heading-xs-text-size, var(--spectrum-alias-heading-xs-text-size));\n  font-weight: var(--spectrum-heading-xs-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-xs-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-xs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-xs-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading--XXS {\n  \n\n    font-size: var(--spectrum-heading-xxs-text-size, var(--spectrum-alias-heading-xxs-text-size));\n  font-weight: var(--spectrum-heading-xxs-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-xxs-text-line-height, var(--spectrum-alias-heading-text-line-height));\n  font-style: var(--spectrum-heading-xxs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-xxs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-heading-xxs-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Heading {\n  font-family: var(--spectrum-heading-xl-text-font-family, var(--spectrum-alias-body-text-font-family));\n  font-weight: var(--spectrum-heading-xl-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n}\n\n.spectrum-Heading em, .spectrum-Heading .spectrum-Heading-emphasis {\n    font-style: var(--spectrum-heading-xl-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  }\n\n.spectrum-Heading strong, .spectrum-Heading .spectrum-Heading-strong {\n    font-weight: var(--spectrum-heading-xl-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  }\n\n.spectrum-Heading--serif {\n  font-family: var(--spectrum-body-serif-xl-text-font-family, var(--spectrum-alias-serif-text-font-family));\n}\n\n.spectrum-Heading--heavy {\n  font-weight: var(--spectrum-heading-heavy-xl-text-font-weight, var(--spectrum-global-font-weight-black));\n}\n\n.spectrum-Heading--heavy em, .spectrum-Heading--heavy .spectrum-Heading-emphasis {\n    font-style: var(--spectrum-heading-heavy-xl-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  }\n\n.spectrum-Heading--heavy strong, .spectrum-Heading--heavy .spectrum-Heading-strong {\n    font-weight: var(--spectrum-heading-heavy-xl-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  }\n\n.spectrum-Heading--light {\n  font-weight: var(--spectrum-heading-light-xl-emphasis-text-font-weight, var(--spectrum-global-font-weight-light));\n}\n\n.spectrum-Heading--light em, .spectrum-Heading--light .spectrum-Heading-emphasis {\n    font-style: var(--spectrum-heading-light-xl-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  }\n\n.spectrum-Heading--light strong, .spectrum-Heading--light .spectrum-Heading-strong {\n    font-weight: var(--spectrum-heading-light-xl-strong-text-font-weight, var(--spectrum-global-font-weight-bold));\n  }\n\n.spectrum-Body--XXXL {\n  \n\n    font-size: var(--spectrum-body-xxxl-text-size, var(--spectrum-global-dimension-font-size-600));\n  font-weight: var(--spectrum-body-xxxl-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-xxxl-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-xxxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-xxxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body--XXL {\n  \n\n    font-size: var(--spectrum-body-xxl-text-size, var(--spectrum-global-dimension-font-size-500));\n  font-weight: var(--spectrum-body-xxl-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-xxl-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-xxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-xxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body--XL {\n  \n\n    font-size: var(--spectrum-body-xl-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-body-xl-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-xl-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-xl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body--L {\n  \n\n    font-size: var(--spectrum-body-l-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-body-l-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-l-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-l-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body--M {\n  \n\n    font-size: var(--spectrum-body-m-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-body-m-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-m-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-m-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body--S {\n  \n\n    font-size: var(--spectrum-body-s-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-body-s-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-s-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-s-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body--XS {\n  \n\n    font-size: var(--spectrum-body-xs-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-body-xs-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n  line-height: var(--spectrum-body-xs-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-body-xs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  text-transform: var(--spectrum-body-xs-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum-Body {\n  font-family: var(--spectrum-body-xl-text-font-family, var(--spectrum-alias-body-text-font-family));\n}\n\n.spectrum-Body strong, .spectrum-Body .spectrum-Body-strong {\n    font-weight: var(--spectrum-body-xl-strong-text-font-weight, var(--spectrum-global-font-weight-bold));\n  }\n\n.spectrum-Body em, .spectrum-Body .spectrum-Body-emphasis {\n    font-style: var(--spectrum-body-xl-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  }\n\n.spectrum-Body--serif {\n  font-family: var(--spectrum-body-serif-xl-text-font-family, var(--spectrum-alias-serif-text-font-family));\n}\n\n.spectrum-Detail {\n  font-family: var(--spectrum-heading-xl-text-font-family, var(--spectrum-alias-body-text-font-family));\n}\n\n.spectrum-Detail strong, .spectrum-Detail .spectrum-Detail-strong {\n    font-weight: var(--spectrum-detail-xl-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  }\n\n.spectrum-Detail em, .spectrum-Detail .spectrum-Detail-emphasis {\n    font-style: var(--spectrum-detail-xl-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  }\n\n.spectrum-Detail--light {\n  font-style: var(--spectrum-detail-light-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  font-weight: var(--spectrum-detail-light-xl-text-font-weight, var(--spectrum-alias-detail-text-font-weight-light));\n}\n\n.spectrum-Detail--serif {\n  font-family: var(--spectrum-body-serif-xl-text-font-family, var(--spectrum-alias-serif-text-font-family));\n}\n\n.spectrum-Detail--XL {\n  \n\n    font-size: var(--spectrum-detail-xl-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-detail-xl-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-xl-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-xl-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum-Detail--XL em {\n        font-size: var(--spectrum-detail-xl-emphasis-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-detail-xl-emphasis-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-xl-emphasis-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-xl-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  letter-spacing: var(--spectrum-detail-xl-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-xl-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Detail--XL strong {\n        font-size: var(--spectrum-detail-xl-strong-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-detail-xl-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-xl-strong-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-xl-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-xl-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-xl-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Detail--L {\n  \n\n    font-size: var(--spectrum-detail-l-text-size, var(--spectrum-global-dimension-font-size-100));\n  font-weight: var(--spectrum-detail-l-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-l-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-l-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum-Detail--L em {\n        font-size: var(--spectrum-detail-l-emphasis-text-size, var(--spectrum-global-dimension-font-size-100));\n  font-weight: var(--spectrum-detail-l-emphasis-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-l-emphasis-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-l-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  letter-spacing: var(--spectrum-detail-l-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-l-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Detail--L strong {\n        font-size: var(--spectrum-detail-l-strong-text-size, var(--spectrum-global-dimension-font-size-100));\n  font-weight: var(--spectrum-detail-l-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-l-strong-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-l-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-l-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-l-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Detail--M {\n  \n\n    font-size: var(--spectrum-detail-m-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-detail-m-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-m-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-m-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum-Detail--M em {\n        font-size: var(--spectrum-detail-m-emphasis-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-detail-m-emphasis-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-m-emphasis-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-m-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  letter-spacing: var(--spectrum-detail-m-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-m-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Detail--M strong {\n        font-size: var(--spectrum-detail-m-strong-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-detail-m-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-m-strong-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-m-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-m-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-m-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Detail--S {\n  \n\n    font-size: var(--spectrum-detail-s-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-s-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-s-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-s-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum-Detail--S em {\n        font-size: var(--spectrum-detail-s-emphasis-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-s-emphasis-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-s-emphasis-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-s-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  letter-spacing: var(--spectrum-detail-s-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-s-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Detail--S strong {\n        font-size: var(--spectrum-detail-s-strong-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-s-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-s-strong-text-line-height, var(--spectrum-alias-body-text-line-height));\n  font-style: var(--spectrum-detail-s-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-s-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n  text-transform: var(--spectrum-detail-s-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum-Code {\n  font-family: var(--spectrum-heading-xl-text-font-family, var(--spectrum-alias-body-text-font-family));\n}\n\n.spectrum-Code strong, .spectrum-Code .spectrum-Code-strong {\n    font-weight: var(--spectrum-code-xl-strong-text-font-weight, var(--spectrum-global-font-weight-bold));\n  }\n\n.spectrum-Code em, .spectrum-Code .spectrum-Code-emphasis {\n    font-style: var(--spectrum-code-xl-emphasis-text-font-style, var(--spectrum-global-font-style-italic));\n  }\n\n.spectrum-Code--serif {\n  font-family: var(--spectrum-body-serif-xl-text-font-family, var(--spectrum-alias-serif-text-font-family));\n}\n\n.spectrum-Code--XL {\n  \n\n    font-size: var(--spectrum-code-xl-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-code-xl-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-code-xl-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-code-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-code-xl-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code--L {\n  \n\n    font-size: var(--spectrum-code-l-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-code-l-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-code-l-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-code-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-code-l-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code--M {\n  \n\n    font-size: var(--spectrum-code-m-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-code-m-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-code-m-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-code-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-code-m-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code--S {\n  \n\n    font-size: var(--spectrum-code-s-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-code-s-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-code-s-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-code-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-code-s-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Code--XS {\n  \n\n    font-size: var(--spectrum-code-xs-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-code-xs-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));\n  line-height: var(--spectrum-code-xs-text-line-height, var(--spectrum-alias-code-text-line-height));\n  font-style: var(--spectrum-code-xs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: var(--spectrum-code-xs-text-font-family, var(--spectrum-alias-code-text-font-family));\n\n    \n  }\n\n.spectrum-Typography .spectrum-Heading--XXXL {\n    margin-top: var(--spectrum-heading-xxxl-margin-top, var(--spectrum-alias-heading-xxxl-margin-top));\n    margin-bottom: var(--spectrum-heading-xxxl-margin-bottom, var(--spectrum-global-dimension-size-130));\n  }\n\n.spectrum-Typography .spectrum-Heading--XXL {\n    margin-top: var(--spectrum-heading-xxl-margin-top, var(--spectrum-alias-heading-xxl-margin-top));\n    margin-bottom: var(--spectrum-heading-xxl-margin-bottom, var(--spectrum-global-dimension-size-125));\n  }\n\n.spectrum-Typography .spectrum-Heading--XL {\n    margin-top: var(--spectrum-heading-xl-margin-top, var(--spectrum-alias-heading-xl-margin-top));\n    margin-bottom: var(--spectrum-heading-xl-margin-bottom, var(--spectrum-global-dimension-size-115));\n  }\n\n.spectrum-Typography .spectrum-Heading--L {\n    margin-top: var(--spectrum-heading-l-margin-top, var(--spectrum-alias-heading-l-margin-top));\n    margin-bottom: var(--spectrum-heading-l-margin-bottom, var(--spectrum-global-dimension-size-85));\n  }\n\n.spectrum-Typography .spectrum-Heading--M {\n    margin-top: var(--spectrum-heading-m-margin-top, var(--spectrum-alias-heading-m-margin-top));\n    margin-bottom: var(--spectrum-heading-m-margin-bottom, var(--spectrum-global-dimension-size-75));\n  }\n\n.spectrum-Typography .spectrum-Heading--S {\n    margin-top: var(--spectrum-heading-s-margin-top, var(--spectrum-alias-heading-s-margin-top));\n    margin-bottom: var(--spectrum-heading-s-margin-bottom, var(--spectrum-global-dimension-size-65));\n  }\n\n.spectrum-Typography .spectrum-Heading--XS {\n    margin-top: var(--spectrum-heading-xs-margin-top, var(--spectrum-alias-heading-xs-margin-top));\n    margin-bottom: var(--spectrum-heading-xs-margin-bottom, var(--spectrum-global-dimension-size-50));\n  }\n\n.spectrum-Typography .spectrum-Heading--XXS {\n    margin-top: var(--spectrum-heading-xxs-margin-top, var(--spectrum-alias-heading-xxs-margin-top));\n    margin-bottom: var(--spectrum-heading-xxs-margin-bottom, var(--spectrum-global-dimension-size-40));\n  }\n\n.spectrum-Typography .spectrum-Body--XXXL {\n    margin-top: var(--spectrum-body-xxxl-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-xxxl-margin-bottom, var(--spectrum-global-dimension-size-400));\n  }\n\n.spectrum-Typography .spectrum-Body--XXL {\n    margin-top: var(--spectrum-body-xxl-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-xxl-margin-bottom, var(--spectrum-global-dimension-size-300));\n  }\n\n.spectrum-Typography .spectrum-Body--XL {\n    margin-top: var(--spectrum-body-xl-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-xl-margin-bottom, var(--spectrum-global-dimension-size-200));\n  }\n\n.spectrum-Typography .spectrum-Body--L {\n    margin-top: var(--spectrum-body-l-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-l-margin-bottom, var(--spectrum-global-dimension-size-160));\n  }\n\n.spectrum-Typography .spectrum-Body--M {\n    margin-top: var(--spectrum-body-m-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-m-margin-bottom, var(--spectrum-global-dimension-size-150));\n  }\n\n.spectrum-Typography .spectrum-Body--S {\n    margin-top: var(--spectrum-body-s-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-s-margin-bottom, var(--spectrum-global-dimension-size-125));\n  }\n\n.spectrum-Typography .spectrum-Body--XS {\n    margin-top: var(--spectrum-body-xs-margin-top, 0px);\n    margin-bottom: var(--spectrum-body-xs-margin-bottom, var(--spectrum-global-dimension-size-115));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XXXL, .spectrum:lang(ko) .spectrum-Heading--XXXL, .spectrum:lang(zh) .spectrum-Heading--XXXL {\n  \n\n    font-size: var(--spectrum-heading-han-xxxl-text-size, var(--spectrum-alias-heading-xxxl-text-size));\n  font-weight: var(--spectrum-heading-han-xxxl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-xxxl-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-xxxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-xxxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XXL, .spectrum:lang(ko) .spectrum-Heading--XXL, .spectrum:lang(zh) .spectrum-Heading--XXL {\n  \n\n    font-size: var(--spectrum-heading-han-xxl-text-size, var(--spectrum-alias-heading-han-xxl-text-size));\n  font-weight: var(--spectrum-heading-han-xxl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-xxl-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-xxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-xxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XL, .spectrum:lang(ko) .spectrum-Heading--XL, .spectrum:lang(zh) .spectrum-Heading--XL {\n  \n\n    font-size: var(--spectrum-heading-han-xl-text-size, var(--spectrum-alias-heading-han-xl-text-size));\n  font-weight: var(--spectrum-heading-han-xl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-xl-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-xl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--L, .spectrum:lang(ko) .spectrum-Heading--L, .spectrum:lang(zh) .spectrum-Heading--L {\n  \n\n    font-size: var(--spectrum-heading-han-l-text-size, var(--spectrum-alias-heading-han-l-text-size));\n  font-weight: var(--spectrum-heading-han-l-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-l-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-l-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--M, .spectrum:lang(ko) .spectrum-Heading--M, .spectrum:lang(zh) .spectrum-Heading--M {\n  \n\n    font-size: var(--spectrum-heading-han-m-text-size, var(--spectrum-alias-heading-han-m-text-size));\n  font-weight: var(--spectrum-heading-han-m-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-m-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-m-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--S, .spectrum:lang(ko) .spectrum-Heading--S, .spectrum:lang(zh) .spectrum-Heading--S {\n  \n\n    font-size: var(--spectrum-heading-han-s-text-size, var(--spectrum-alias-heading-s-text-size));\n  font-weight: var(--spectrum-heading-han-s-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-s-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-s-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XS, .spectrum:lang(ko) .spectrum-Heading--XS, .spectrum:lang(zh) .spectrum-Heading--XS {\n  \n\n    font-size: var(--spectrum-heading-han-xs-text-size, var(--spectrum-alias-heading-xs-text-size));\n  font-weight: var(--spectrum-heading-han-xs-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-xs-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-xs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-xs-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XXS, .spectrum:lang(ko) .spectrum-Heading--XXS, .spectrum:lang(zh) .spectrum-Heading--XXS {\n  \n\n    font-size: var(--spectrum-heading-han-xxs-text-size, var(--spectrum-alias-heading-xxs-text-size));\n  font-weight: var(--spectrum-heading-han-xxs-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n  line-height: var(--spectrum-heading-han-xxs-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-heading-han-xxs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-heading-han-xxs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-heading-han-xxs-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Heading--heavy, .spectrum:lang(ko) .spectrum-Heading--heavy, .spectrum:lang(zh) .spectrum-Heading--heavy {\n      font-weight: var(--spectrum-heading-han-xl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n    }\n\n.spectrum:lang(ja) .spectrum-Heading--heavy em, .spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--emphasis, .spectrum:lang(ko) .spectrum-Heading--heavy em, .spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--emphasis, .spectrum:lang(zh) .spectrum-Heading--heavy em, .spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--emphasis {\n        font-style: var(--spectrum-heading-han-heavy-xl-emphasis-text-font-style, var(--spectrum-global-font-style-regular));\n        font-weight: var(--spectrum-heading-han-heavy-xl-emphasis-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-heavy-emphasis));\n      }\n\n.spectrum:lang(ja) .spectrum-Heading--heavy strong, .spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--strong, .spectrum:lang(ko) .spectrum-Heading--heavy strong, .spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--strong, .spectrum:lang(zh) .spectrum-Heading--heavy strong, .spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--strong {\n        font-style: var(--spectrum-heading-heavy-xl-strong-text-font-style, var(--spectrum-global-font-style-regular));\n        font-weight: var(--spectrum-heading-heavy-xl-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n      }\n\n.spectrum:lang(ja) .spectrum-Heading--light, .spectrum:lang(ko) .spectrum-Heading--light, .spectrum:lang(zh) .spectrum-Heading--light {\n      font-weight: var(--spectrum-heading-han-xl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));\n    }\n\n.spectrum:lang(ja) .spectrum-Heading--light em, .spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--emphasis, .spectrum:lang(ko) .spectrum-Heading--light em, .spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--emphasis, .spectrum:lang(zh) .spectrum-Heading--light em, .spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--emphasis {\n        font-style: var(--spectrum-heading-han-light-xl-emphasis-text-font-style, var(--spectrum-global-font-style-regular));\n        font-weight: var(--spectrum-heading-han-light-xl-emphasis-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-light-emphasis));\n      }\n\n.spectrum:lang(ja) .spectrum-Heading--light strong, .spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--strong, .spectrum:lang(ko) .spectrum-Heading--light strong, .spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--strong, .spectrum:lang(zh) .spectrum-Heading--light strong, .spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--strong {\n        font-style: var(--spectrum-heading-han-light-xl-strong-text-font-style, var(--spectrum-global-font-style-regular));\n        font-weight: var(--spectrum-heading-han-light-xl-strong-text-font-weight, var(--spectrum-global-font-weight-bold));\n      }\n\n.spectrum:lang(ja) .spectrum-Body--XXXL, .spectrum:lang(ko) .spectrum-Body--XXXL, .spectrum:lang(zh) .spectrum-Body--XXXL {\n  \n\n    font-size: var(--spectrum-body-han-xxxl-text-size, var(--spectrum-global-dimension-font-size-600));\n  font-weight: var(--spectrum-body-han-xxxl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-xxxl-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-xxxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-xxxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body--XXL, .spectrum:lang(ko) .spectrum-Body--XXL, .spectrum:lang(zh) .spectrum-Body--XXL {\n  \n\n    font-size: var(--spectrum-body-han-xxl-text-size, var(--spectrum-global-dimension-font-size-500));\n  font-weight: var(--spectrum-body-han-xxl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-xxl-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-xxl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-xxl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body--XL, .spectrum:lang(ko) .spectrum-Body--XL, .spectrum:lang(zh) .spectrum-Body--XL {\n  \n\n    font-size: var(--spectrum-body-han-xl-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-body-han-xl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-xl-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-xl-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body--L, .spectrum:lang(ko) .spectrum-Body--L, .spectrum:lang(zh) .spectrum-Body--L {\n  \n\n    font-size: var(--spectrum-body-han-l-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-body-han-l-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-l-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-l-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body--M, .spectrum:lang(ko) .spectrum-Body--M, .spectrum:lang(zh) .spectrum-Body--M {\n  \n\n    font-size: var(--spectrum-body-han-m-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-body-han-m-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-m-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-m-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body--S, .spectrum:lang(ko) .spectrum-Body--S, .spectrum:lang(zh) .spectrum-Body--S {\n  \n\n    font-size: var(--spectrum-body-han-s-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-body-han-s-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-s-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-s-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Body--XS, .spectrum:lang(ko) .spectrum-Body--XS, .spectrum:lang(zh) .spectrum-Body--XS {\n  \n\n    font-size: var(--spectrum-body-han-xs-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-body-han-xs-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-body-han-xs-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-body-han-xs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-body-han-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-body-han-xs-text-transform, none);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Detail--XL, .spectrum:lang(ko) .spectrum-Detail--XL, .spectrum:lang(zh) .spectrum-Detail--XL {\n  \n\n    font-size: var(--spectrum-detail-han-xl-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-detail-han-xl-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-han-xl-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-xl-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum:lang(ja) .spectrum-Detail--XL em, .spectrum:lang(ko) .spectrum-Detail--XL em, .spectrum:lang(zh) .spectrum-Detail--XL em {\n        font-size: var(--spectrum-detail-han-xl-emphasis-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-detail-han-xl-emphasis-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));\n  line-height: var(--spectrum-detail-han-xl-emphasis-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-xl-emphasis-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-xl-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-xl-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--XL strong, .spectrum:lang(ko) .spectrum-Detail--XL strong, .spectrum:lang(zh) .spectrum-Detail--XL strong {\n        font-size: var(--spectrum-detail-han-xl-strong-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-detail-han-xl-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-han-xl-strong-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-xl-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-xl-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-xl-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--L, .spectrum:lang(ko) .spectrum-Detail--L, .spectrum:lang(zh) .spectrum-Detail--L {\n  \n\n    font-size: var(--spectrum-detail-han-l-text-size, var(--spectrum-global-dimension-font-size-100));\n  font-weight: var(--spectrum-detail-han-l-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-han-l-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-l-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum:lang(ja) .spectrum-Detail--L em, .spectrum:lang(ko) .spectrum-Detail--L em, .spectrum:lang(zh) .spectrum-Detail--L em {\n        font-size: var(--spectrum-detail-han-l-emphasis-text-size, var(--spectrum-global-dimension-font-size-100));\n  font-weight: var(--spectrum-detail-han-l-emphasis-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));\n  line-height: var(--spectrum-detail-han-l-emphasis-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-l-emphasis-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-l-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-l-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--L strong, .spectrum:lang(ko) .spectrum-Detail--L strong, .spectrum:lang(zh) .spectrum-Detail--L strong {\n        font-size: var(--spectrum-detail-han-l-strong-text-size, var(--spectrum-global-dimension-font-size-100));\n  font-weight: var(--spectrum-detail-han-l-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-han-l-strong-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-l-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-l-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-l-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--M, .spectrum:lang(ko) .spectrum-Detail--M, .spectrum:lang(zh) .spectrum-Detail--M {\n  \n\n    font-size: var(--spectrum-detail-han-m-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-detail-han-m-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-han-m-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-m-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum:lang(ja) .spectrum-Detail--M em, .spectrum:lang(ko) .spectrum-Detail--M em, .spectrum:lang(zh) .spectrum-Detail--M em {\n        font-size: var(--spectrum-detail-han-m-emphasis-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-detail-han-m-emphasis-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));\n  line-height: var(--spectrum-detail-han-m-emphasis-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-m-emphasis-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-m-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-m-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--M strong, .spectrum:lang(ko) .spectrum-Detail--M strong, .spectrum:lang(zh) .spectrum-Detail--M strong {\n        font-size: var(--spectrum-detail-han-m-strong-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-detail-han-m-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-han-m-strong-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-m-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-m-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-m-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--S, .spectrum:lang(ko) .spectrum-Detail--S, .spectrum:lang(zh) .spectrum-Detail--S {\n  \n\n    font-size: var(--spectrum-detail-han-s-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-han-s-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n  line-height: var(--spectrum-detail-han-s-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-s-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n  \n  }\n\n.spectrum:lang(ja) .spectrum-Detail--S em, .spectrum:lang(ko) .spectrum-Detail--S em, .spectrum:lang(zh) .spectrum-Detail--S em {\n        font-size: var(--spectrum-detail-han-s-emphasis-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-han-s-emphasis-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));\n  line-height: var(--spectrum-detail-han-s-emphasis-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-s-emphasis-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-s-emphasis-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-s-emphasis-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--S strong, .spectrum:lang(ko) .spectrum-Detail--S strong, .spectrum:lang(zh) .spectrum-Detail--S strong {\n        font-size: var(--spectrum-detail-han-s-strong-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-detail-han-s-strong-text-font-weight, var(--spectrum-global-font-weight-black));\n  line-height: var(--spectrum-detail-han-s-strong-text-line-height, var(--spectrum-alias-heading-han-text-line-height));\n  font-style: var(--spectrum-detail-han-s-strong-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-detail-han-s-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  text-transform: var(--spectrum-detail-han-s-strong-text-transform, uppercase);\n  margin-top: 0;\n  margin-bottom: 0;\n\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--light, .spectrum:lang(ko) .spectrum-Detail--light, .spectrum:lang(zh) .spectrum-Detail--light {\n      font-weight: var(--spectrum-detail-han-xl-text-font-weight, var(--spectrum-alias-detail-text-font-weight));\n    }\n\n.spectrum:lang(ja) .spectrum-Detail--light em, .spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--emphasis, .spectrum:lang(ko) .spectrum-Detail--light em, .spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--emphasis, .spectrum:lang(zh) .spectrum-Detail--light em, .spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--emphasis {\n        font-style: var(--spectrum-detail-han-light-xl-emphasis-text-font-style, var(--spectrum-global-font-style-regular));\n        font-weight: var(--spectrum-detail-han-light-xl-emphasis-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-light-emphasis));\n      }\n\n.spectrum:lang(ja) .spectrum-Detail--light strong, .spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--strong, .spectrum:lang(ko) .spectrum-Detail--light strong, .spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--strong, .spectrum:lang(zh) .spectrum-Detail--light strong, .spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--strong {\n        font-style: var(--spectrum-detail-han-light-xl-strong-text-font-style, var(--spectrum-global-font-style-regular));\n        font-weight: var(--spectrum-detail-han-light-xl-strong-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));\n      }\n\n.spectrum:lang(ja) .spectrum-Code--XL, .spectrum:lang(ko) .spectrum-Code--XL, .spectrum:lang(zh) .spectrum-Code--XL {\n  \n\n    font-size: var(--spectrum-code-han-xl-text-size, var(--spectrum-global-dimension-font-size-400));\n  font-weight: var(--spectrum-code-han-xl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-code-han-xl-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-code-han-xl-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  margin-top: 0;\n  margin-bottom: 0;\n      font-family: var(--spectrum-code-han-xl-text-font-family, var(--spectrum-alias-font-family-zh));\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Code--L, .spectrum:lang(ko) .spectrum-Code--L, .spectrum:lang(zh) .spectrum-Code--L {\n  \n\n    font-size: var(--spectrum-code-han-l-text-size, var(--spectrum-global-dimension-font-size-300));\n  font-weight: var(--spectrum-code-han-l-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-code-han-l-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-code-han-l-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  margin-top: 0;\n  margin-bottom: 0;\n      font-family: var(--spectrum-code-han-l-text-font-family, var(--spectrum-alias-font-family-zh));\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Code--M, .spectrum:lang(ko) .spectrum-Code--M, .spectrum:lang(zh) .spectrum-Code--M {\n  \n\n    font-size: var(--spectrum-code-han-m-text-size, var(--spectrum-global-dimension-font-size-200));\n  font-weight: var(--spectrum-code-han-m-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-code-han-m-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-code-han-m-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  margin-top: 0;\n  margin-bottom: 0;\n      font-family: var(--spectrum-code-han-m-text-font-family, var(--spectrum-alias-font-family-zh));\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Code--S, .spectrum:lang(ko) .spectrum-Code--S, .spectrum:lang(zh) .spectrum-Code--S {\n  \n\n    font-size: var(--spectrum-code-han-s-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-code-han-s-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-code-han-s-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-code-han-s-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  margin-top: 0;\n  margin-bottom: 0;\n      font-family: var(--spectrum-code-han-s-text-font-family, var(--spectrum-alias-font-family-zh));\n\n    \n  }\n\n.spectrum:lang(ja) .spectrum-Code--XS, .spectrum:lang(ko) .spectrum-Code--XS, .spectrum:lang(zh) .spectrum-Code--XS {\n  \n\n    font-size: var(--spectrum-code-han-xs-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-code-han-xs-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));\n  line-height: var(--spectrum-code-han-xs-text-line-height, var(--spectrum-alias-body-han-text-line-height));\n  font-style: var(--spectrum-code-han-xs-text-font-style, var(--spectrum-global-font-style-regular));\n  letter-spacing: var(--spectrum-code-han-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));\n  margin-top: 0;\n  margin-bottom: 0;\n      font-family: var(--spectrum-code-han-xs-text-font-family, var(--spectrum-alias-font-family-zh));\n\n    \n  }\n\n.spectrum-Heading--XXXL {\n    \n    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading--XXL {\n    \n    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading--XL {\n    \n    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading--L {\n    \n    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading--M {\n    \n    color: var(--spectrum-heading-m-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading--S {\n    \n    color: var(--spectrum-heading-s-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading--XS {\n    \n    color: var(--spectrum-heading-xs-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading--XXS {\n    \n    color: var(--spectrum-heading-xxs-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XXXL--light {\n    \n    color: var(--spectrum-heading-light-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XXL--light {\n    \n    color: var(--spectrum-heading-light-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XL--light {\n    \n    color: var(--spectrum-heading-light-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-L--light {\n    \n    color: var(--spectrum-heading-light-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XXXL--heavy {\n    \n    color: var(--spectrum-heading-heavy-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XXL--heavy {\n    \n    color: var(--spectrum-heading-heavy-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XL--heavy {\n    \n    color: var(--spectrum-heading-heavy-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-L--heavy {\n    \n    color: var(--spectrum-heading-heavy-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XXXL--heading {\n    \n    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XXL--heading {\n    \n    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-XL--heading {\n    \n    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading-L--heading {\n    \n    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Body--XXXL {\n    \n    color: var(--spectrum-body-xxxl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body--XXL {\n    \n    color: var(--spectrum-body-xxl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body--XL {\n    \n    color: var(--spectrum-body-xl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body--L {\n    \n    color: var(--spectrum-body-l-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body--M {\n    \n    color: var(--spectrum-body-m-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body--S {\n    \n    color: var(--spectrum-body-s-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body--XS {\n    \n    color: var(--spectrum-body-xs-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Detail--XL {\n    \n    color: var(--spectrum-detail-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Detail--L {\n    \n    color: var(--spectrum-detail-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Detail--M {\n    \n    color: var(--spectrum-detail-m-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Detail--S {\n    \n    color: var(--spectrum-detail-s-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Code--XL {\n    \n    color: var(--spectrum-code-xl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code--L {\n    \n    color: var(--spectrum-code-l-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code--M {\n    \n    color: var(--spectrum-code-m-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code--S {\n    \n    color: var(--spectrum-code-s-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code--XS {\n    \n    color: var(--spectrum-code-xs-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body--XXXL, .spectrum:lang(ko) .spectrum-Body--XXXL, .spectrum:lang(zh) .spectrum-Body--XXXL {\n    \n    color: var(--spectrum-body-han-xxxl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body--XXL, .spectrum:lang(ko) .spectrum-Body--XXL, .spectrum:lang(zh) .spectrum-Body--XXL {\n    \n    color: var(--spectrum-body-han-xxl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body--XL, .spectrum:lang(ko) .spectrum-Body--XL, .spectrum:lang(zh) .spectrum-Body--XL {\n    \n    color: var(--spectrum-body-han-xl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body--L, .spectrum:lang(ko) .spectrum-Body--L, .spectrum:lang(zh) .spectrum-Body--L {\n    \n    color: var(--spectrum-body-han-l-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body--M, .spectrum:lang(ko) .spectrum-Body--M, .spectrum:lang(zh) .spectrum-Body--M {\n    \n    color: var(--spectrum-body-han-m-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body--S, .spectrum:lang(ko) .spectrum-Body--S, .spectrum:lang(zh) .spectrum-Body--S {\n    \n    color: var(--spectrum-body-han-s-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body--XS, .spectrum:lang(ko) .spectrum-Body--XS, .spectrum:lang(zh) .spectrum-Body--XS {\n    \n    color: var(--spectrum-body-han-xs-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XXXL, .spectrum:lang(ko) .spectrum-Heading--XXXL, .spectrum:lang(zh) .spectrum-Heading--XXXL {\n    \n    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XXL, .spectrum:lang(ko) .spectrum-Heading--XXL, .spectrum:lang(zh) .spectrum-Heading--XXL {\n    \n    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XL, .spectrum:lang(ko) .spectrum-Heading--XL, .spectrum:lang(zh) .spectrum-Heading--XL {\n    \n    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--L, .spectrum:lang(ko) .spectrum-Heading--L, .spectrum:lang(zh) .spectrum-Heading--L {\n    \n    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--M, .spectrum:lang(ko) .spectrum-Heading--M, .spectrum:lang(zh) .spectrum-Heading--M {\n    \n    color: var(--spectrum-heading-m-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--S, .spectrum:lang(ko) .spectrum-Heading--S, .spectrum:lang(zh) .spectrum-Heading--S {\n    \n    color: var(--spectrum-heading-s-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XS, .spectrum:lang(ko) .spectrum-Heading--XS, .spectrum:lang(zh) .spectrum-Heading--XS {\n    \n    color: var(--spectrum-heading-xs-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading--XXS, .spectrum:lang(ko) .spectrum-Heading--XXS, .spectrum:lang(zh) .spectrum-Heading--XXS {\n    \n    color: var(--spectrum-heading-xxs-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XXXL--light, .spectrum:lang(ko) .spectrum-Heading-XXXL--light, .spectrum:lang(zh) .spectrum-Heading-XXXL--light {\n    \n    color: var(--spectrum-heading-light-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XXL--light, .spectrum:lang(ko) .spectrum-Heading-XXL--light, .spectrum:lang(zh) .spectrum-Heading-XXL--light {\n    \n    color: var(--spectrum-heading-light-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XL--light, .spectrum:lang(ko) .spectrum-Heading-XL--light, .spectrum:lang(zh) .spectrum-Heading-XL--light {\n    \n    color: var(--spectrum-heading-light-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-L--light, .spectrum:lang(ko) .spectrum-Heading-L--light, .spectrum:lang(zh) .spectrum-Heading-L--light {\n    \n    color: var(--spectrum-heading-light-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XXXL--heavy, .spectrum:lang(ko) .spectrum-Heading-XXXL--heavy, .spectrum:lang(zh) .spectrum-Heading-XXXL--heavy {\n    \n    color: var(--spectrum-heading-heavy-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XXL--heavy, .spectrum:lang(ko) .spectrum-Heading-XXL--heavy, .spectrum:lang(zh) .spectrum-Heading-XXL--heavy {\n    \n    color: var(--spectrum-heading-heavy-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XL--heavy, .spectrum:lang(ko) .spectrum-Heading-XL--heavy, .spectrum:lang(zh) .spectrum-Heading-XL--heavy {\n    \n    color: var(--spectrum-heading-heavy-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-L--heavy, .spectrum:lang(ko) .spectrum-Heading-L--heavy, .spectrum:lang(zh) .spectrum-Heading-L--heavy {\n    \n    color: var(--spectrum-heading-heavy-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XXXL--heading, .spectrum:lang(ko) .spectrum-Heading-XXXL--heading, .spectrum:lang(zh) .spectrum-Heading-XXXL--heading {\n    \n    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XXL--heading, .spectrum:lang(ko) .spectrum-Heading-XXL--heading, .spectrum:lang(zh) .spectrum-Heading-XXL--heading {\n    \n    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-XL--heading, .spectrum:lang(ko) .spectrum-Heading-XL--heading, .spectrum:lang(zh) .spectrum-Heading-XL--heading {\n    \n    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading-L--heading, .spectrum:lang(ko) .spectrum-Heading-L--heading, .spectrum:lang(zh) .spectrum-Heading-L--heading {\n    \n    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Detail--XL, .spectrum:lang(ko) .spectrum-Detail--XL, .spectrum:lang(zh) .spectrum-Detail--XL {\n    \n    color: var(--spectrum-detail-xl-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Detail--L, .spectrum:lang(ko) .spectrum-Detail--L, .spectrum:lang(zh) .spectrum-Detail--L {\n    \n    color: var(--spectrum-detail-l-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Detail--M, .spectrum:lang(ko) .spectrum-Detail--M, .spectrum:lang(zh) .spectrum-Detail--M {\n    \n    color: var(--spectrum-detail-m-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Detail--S, .spectrum:lang(ko) .spectrum-Detail--S, .spectrum:lang(zh) .spectrum-Detail--S {\n    \n    color: var(--spectrum-detail-s-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Code--XL, .spectrum:lang(ko) .spectrum-Code--XL, .spectrum:lang(zh) .spectrum-Code--XL {\n    \n    color: var(--spectrum-code-xl-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Code--L, .spectrum:lang(ko) .spectrum-Code--L, .spectrum:lang(zh) .spectrum-Code--L {\n    \n    color: var(--spectrum-code-l-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Code--M, .spectrum:lang(ko) .spectrum-Code--M, .spectrum:lang(zh) .spectrum-Code--M {\n    \n    color: var(--spectrum-code-m-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Code--S, .spectrum:lang(ko) .spectrum-Code--S, .spectrum:lang(zh) .spectrum-Code--S {\n    \n    color: var(--spectrum-code-s-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Code--XS, .spectrum:lang(ko) .spectrum-Code--XS, .spectrum:lang(zh) .spectrum-Code--XS {\n    \n    color: var(--spectrum-code-xs-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body1 {\n    \n    color: var(--spectrum-body-1-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body2,\n.spectrum-Body--large {\n    \n    color: var(--spectrum-body-2-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body3 {\n    \n    color: var(--spectrum-body-3-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body4,\n.spectrum-Body--secondary {\n    \n    color: var(--spectrum-body-4-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Body5,\n.spectrum-Body--small {\n    \n    color: var(--spectrum-body-5-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Heading1 {\n    \n    color: var(--spectrum-heading-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading2 {\n    \n    color: var(--spectrum-heading-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading3 {\n    \n    color: var(--spectrum-heading-3-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading4,\n.spectrum-Heading--subtitle1 {\n    \n    color: var(--spectrum-heading-4-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading5 {\n    \n    color: var(--spectrum-heading-5-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading6,\n.spectrum-Heading--subtitle2 {\n    \n    color: var(--spectrum-heading-6-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Subheading,\n.spectrum-Heading--subtitle3 {\n    \n    color: var(--spectrum-subheading-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Detail {\n    \n    color: var(--spectrum-detail-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Heading1--quiet {\n    \n    color: var(--spectrum-heading-quiet-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading2--quiet,\n.spectrum-Heading--pageTitle {\n    \n    color: var(--spectrum-heading-quiet-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading1--strong {\n    \n    color: var(--spectrum-heading-strong-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading2--strong {\n    \n    color: var(--spectrum-heading-strong-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading1--display {\n    \n    color: var(--spectrum-display-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading2--display {\n    \n    color: var(--spectrum-display-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading1--display.spectrum-Heading1--strong {\n    \n    color: var(--spectrum-display-strong-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading2--display.spectrum-Heading2--strong {\n    \n    color: var(--spectrum-display-strong-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading1--display.spectrum-Heading1--quiet {\n    \n    color: var(--spectrum-display-quiet-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum-Heading--display {\n    \n    color: var(--spectrum-display-quiet-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Body1 {\n    \n    color: var(--spectrum-body-article-1-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Article .spectrum-Body2,\n.spectrum-Article .spectrum-Body--large {\n    \n    color: var(--spectrum-body-article-2-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Article .spectrum-Body3 {\n    \n    color: var(--spectrum-body-article-3-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Article .spectrum-Body4,\n.spectrum-Article .spectrum-Body--secondary {\n    \n    color: var(--spectrum-body-article-4-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Article .spectrum-Body5,\n.spectrum-Article .spectrum-Body--small {\n    \n    color: var(--spectrum-body-article-5-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading1 {\n    \n    color: var(--spectrum-heading-article-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading2 {\n    \n    color: var(--spectrum-heading-article-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading3 {\n    \n    color: var(--spectrum-heading-article-3-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading4,\n.spectrum-Article .spectrum-Heading--subtitle1 {\n    \n    color: var(--spectrum-heading-article-4-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading5 {\n    \n    color: var(--spectrum-heading-article-5-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading6,\n.spectrum-Article .spectrum-Heading--subtitle2 {\n    \n    color: var(--spectrum-heading-article-6-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Subheading,\n.spectrum-Article .spectrum-Heading--subtitle3 {\n    \n    color: var(--spectrum-subheading-article-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Detail {\n    \n    color: var(--spectrum-detail-article-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading1--quiet {\n    \n    color: var(--spectrum-heading-quiet-article-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading2--quiet,\n.spectrum-Article .spectrum-Heading--pageTitle {\n    \n    color: var(--spectrum-heading-quiet-article-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading1--display {\n    \n    color: var(--spectrum-display-article-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading2--display {\n    \n    color: var(--spectrum-display-article-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading1--display.spectrum-Heading1--quiet {\n    \n    color: var(--spectrum-display-quiet-article-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Article .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum-Article .spectrum-Heading--display {\n    \n    color: var(--spectrum-display-quiet-article-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body1, .spectrum:lang(ko) .spectrum-Body1, .spectrum:lang(zh) .spectrum-Body1 {\n    \n    color: var(--spectrum-body-han-1-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body2,\n.spectrum:lang(ko) .spectrum-Body2,\n.spectrum:lang(zh) .spectrum-Body2,\n.spectrum:lang(ja) .spectrum-Body--large,\n.spectrum:lang(ko) .spectrum-Body--large,\n.spectrum:lang(zh) .spectrum-Body--large {\n    \n    color: var(--spectrum-body-han-2-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body3, .spectrum:lang(ko) .spectrum-Body3, .spectrum:lang(zh) .spectrum-Body3 {\n    \n    color: var(--spectrum-body-han-3-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body4,\n.spectrum:lang(ko) .spectrum-Body4,\n.spectrum:lang(zh) .spectrum-Body4,\n.spectrum:lang(ja) .spectrum-Body--secondary,\n.spectrum:lang(ko) .spectrum-Body--secondary,\n.spectrum:lang(zh) .spectrum-Body--secondary {\n    \n    color: var(--spectrum-body-han-4-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Body5,\n.spectrum:lang(ko) .spectrum-Body5,\n.spectrum:lang(zh) .spectrum-Body5,\n.spectrum:lang(ja) .spectrum-Body--small,\n.spectrum:lang(ko) .spectrum-Body--small,\n.spectrum:lang(zh) .spectrum-Body--small {\n    \n    color: var(--spectrum-body-han-5-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading1, .spectrum:lang(ko) .spectrum-Heading1, .spectrum:lang(zh) .spectrum-Heading1 {\n    \n    color: var(--spectrum-heading-han-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading2, .spectrum:lang(ko) .spectrum-Heading2, .spectrum:lang(zh) .spectrum-Heading2 {\n    \n    color: var(--spectrum-heading-han-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading3, .spectrum:lang(ko) .spectrum-Heading3, .spectrum:lang(zh) .spectrum-Heading3 {\n    \n    color: var(--spectrum-heading-han-3-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading4,\n.spectrum:lang(ko) .spectrum-Heading4,\n.spectrum:lang(zh) .spectrum-Heading4,\n.spectrum:lang(ja) .spectrum-Heading--subtitle1,\n.spectrum:lang(ko) .spectrum-Heading--subtitle1,\n.spectrum:lang(zh) .spectrum-Heading--subtitle1 {\n    \n    color: var(--spectrum-heading-han-4-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading5, .spectrum:lang(ko) .spectrum-Heading5, .spectrum:lang(zh) .spectrum-Heading5 {\n    \n    color: var(--spectrum-heading-han-5-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading6,\n.spectrum:lang(ko) .spectrum-Heading6,\n.spectrum:lang(zh) .spectrum-Heading6,\n.spectrum:lang(ja) .spectrum-Heading--subtitle2,\n.spectrum:lang(ko) .spectrum-Heading--subtitle2,\n.spectrum:lang(zh) .spectrum-Heading--subtitle2 {\n    \n    color: var(--spectrum-heading-han-6-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Subheading,\n.spectrum:lang(ko) .spectrum-Subheading,\n.spectrum:lang(zh) .spectrum-Subheading,\n.spectrum:lang(ja) .spectrum-Heading--subtitle3,\n.spectrum:lang(ko) .spectrum-Heading--subtitle3,\n.spectrum:lang(zh) .spectrum-Heading--subtitle3 {\n    \n    color: var(--spectrum-subheading-han-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Detail, .spectrum:lang(ko) .spectrum-Detail, .spectrum:lang(zh) .spectrum-Detail {\n    \n    color: var(--spectrum-detail-han-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--quiet, .spectrum:lang(ko) .spectrum-Heading1--quiet, .spectrum:lang(zh) .spectrum-Heading1--quiet {\n    \n    color: var(--spectrum-heading-quiet-han-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--quiet,\n.spectrum:lang(ko) .spectrum-Heading2--quiet,\n.spectrum:lang(zh) .spectrum-Heading2--quiet,\n.spectrum:lang(ja) .spectrum-Heading--pageTitle,\n.spectrum:lang(ko) .spectrum-Heading--pageTitle,\n.spectrum:lang(zh) .spectrum-Heading--pageTitle {\n    \n    color: var(--spectrum-heading-quiet-han-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--strong, .spectrum:lang(ko) .spectrum-Heading1--strong, .spectrum:lang(zh) .spectrum-Heading1--strong {\n    \n    color: var(--spectrum-heading-strong-han-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--strong, .spectrum:lang(ko) .spectrum-Heading2--strong, .spectrum:lang(zh) .spectrum-Heading2--strong {\n    \n    color: var(--spectrum-heading-strong-han-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--display, .spectrum:lang(ko) .spectrum-Heading1--display, .spectrum:lang(zh) .spectrum-Heading1--display {\n    \n    color: var(--spectrum-display-han-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--display, .spectrum:lang(ko) .spectrum-Heading2--display, .spectrum:lang(zh) .spectrum-Heading2--display {\n    \n    color: var(--spectrum-display-han-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--strong, .spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--strong, .spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--strong {\n    \n    color: var(--spectrum-display-strong-han-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--strong, .spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--strong, .spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--strong {\n    \n    color: var(--spectrum-display-strong-han-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--quiet, .spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--quiet, .spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--quiet {\n    \n    color: var(--spectrum-display-quiet-han-1-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--quiet,\n.spectrum:lang(ja) .spectrum-Heading--display,\n.spectrum:lang(ko) .spectrum-Heading--display,\n.spectrum:lang(zh) .spectrum-Heading--display {\n    \n    color: var(--spectrum-display-quiet-han-2-text-color, var(--spectrum-alias-heading-text-color));\n  }\n\n.spectrum-Code1 {\n    \n    color: var(--spectrum-body-code-1-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code2 {\n    \n    color: var(--spectrum-body-code-2-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code3 {\n    \n    color: var(--spectrum-body-code-3-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code4 {\n    \n    color: var(--spectrum-body-code-4-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-Code5 {\n    \n    color: var(--spectrum-body-code-5-text-color, var(--spectrum-alias-text-color));\n  }\n\n.spectrum,\n.spectrum-Body {\n  color: var(--spectrum-body-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Body--large {\n  color: var(--spectrum-body-large-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Body--small {\n  color: var(--spectrum-body-small-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Body--secondary {\n  color: var(--spectrum-body-secondary-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Heading--display {\n  color: var(--spectrum-heading-display-text-color, var(--spectrum-alias-heading-text-color));\n}\n\n.spectrum-Heading--pageTitle {\n  color: var(--spectrum-heading-page-title-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Heading--subtitle1 {\n  color: var(--spectrum-heading-subtitle1-text-color, var(--spectrum-alias-heading-text-color));\n}\n\n.spectrum-Heading--subtitle2 {\n  color: var(--spectrum-heading-subtitle2-text-color, var(--spectrum-alias-heading-text-color));\n}\n\n.spectrum-Heading--subtitle3 {\n  color: var(--spectrum-heading-subtitle3-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Button,\n.spectrum-ActionButton,\n.spectrum-LogicButton,\n.spectrum-FieldButton,\n.spectrum-ClearButton,\n.spectrum-Tool {\n  position: relative;\n\n  display: -ms-inline-flexbox;\n\n  display: inline-flex;\n  box-sizing: border-box;\n\n  -ms-flex-align: center;\n\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  overflow: visible;\n  margin: 0;\n\n  border-style: solid;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-appearance: button;\n  vertical-align: top;\n\n  transition: background var(--spectrum-global-animation-duration-100, 130ms) ease-out,\n              border-color var(--spectrum-global-animation-duration-100, 130ms) ease-out,\n              color var(--spectrum-global-animation-duration-100, 130ms) ease-out,\n              box-shadow var(--spectrum-global-animation-duration-100, 130ms) ease-out;\n\n  text-decoration: none;\n  font-family: var(--spectrum-alias-body-text-font-family, var(--spectrum-global-font-family-base));\n\n  line-height: 1.3;\n\n  cursor: pointer;\n\n}\n\n.spectrum-Button:focus,\n.spectrum-ActionButton:focus,\n.spectrum-LogicButton:focus,\n.spectrum-FieldButton:focus,\n.spectrum-ClearButton:focus,\n.spectrum-Tool:focus {\n    outline: none;\n  }\n\n.spectrum-Button::-moz-focus-inner,\n.spectrum-ActionButton::-moz-focus-inner,\n.spectrum-LogicButton::-moz-focus-inner,\n.spectrum-FieldButton::-moz-focus-inner,\n.spectrum-ClearButton::-moz-focus-inner,\n.spectrum-Tool::-moz-focus-inner {\n    border: 0;\n    border-style: none;\n    padding: 0;\n    margin-top: -2PX;\n    margin-bottom: -2PX;\n  }\n\n.spectrum-Button:disabled,\n.spectrum-ActionButton:disabled,\n.spectrum-LogicButton:disabled,\n.spectrum-FieldButton:disabled,\n.spectrum-ClearButton:disabled,\n.spectrum-Tool:disabled {\n    cursor: default;\n  }\n\n.spectrum-Button .spectrum-Icon,\n.spectrum-ActionButton .spectrum-Icon,\n.spectrum-LogicButton .spectrum-Icon,\n.spectrum-FieldButton .spectrum-Icon,\n.spectrum-ClearButton .spectrum-Icon,\n.spectrum-Tool .spectrum-Icon {\n    max-height: 100%;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n  }\n\n.spectrum-Button:after,\n.spectrum-LogicButton:after {\n    border-radius: calc(var(--spectrum-button-primary-border-radius, var(--spectrum-alias-border-radius-large)) + var(--spectrum-alias-focus-ring-gap, var(--spectrum-global-dimension-static-size-25)));\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    margin: calc(var(--spectrum-alias-focus-ring-gap, var(--spectrum-global-dimension-static-size-25)) * -1);\n\n    transition: box-shadow var(--spectrum-global-animation-duration-100, 130ms) ease-out,\n                margin var(--spectrum-global-animation-duration-100, 130ms) ease-out;\n  }\n\n.spectrum-Button.focus-ring:after,\n.spectrum-LogicButton.focus-ring:after {\n      margin: calc(var(--spectrum-alias-focus-ring-gap, var(--spectrum-global-dimension-static-size-25)) * -2);\n    }\n\n.spectrum-Button {\n\n  border-width: var(--spectrum-button-primary-border-size, var(--spectrum-alias-border-size-thick));\n  border-style: solid;\n  border-radius: var(--spectrum-button-primary-border-radius, var(--spectrum-alias-border-radius-large));\n\n  min-height: var(--spectrum-button-primary-height, var(--spectrum-alias-single-line-height));\n  height: auto;\n  min-width: var(--spectrum-button-primary-min-width);\n\n  padding: var(--spectrum-global-dimension-size-50) calc(var(--spectrum-button-primary-padding-x, var(--spectrum-global-dimension-size-200)) - var(--spectrum-button-primary-border-size, var(--spectrum-alias-border-size-thick)));\n  padding-bottom: calc(var(--spectrum-global-dimension-size-50) + 1px);\n  padding-top: calc(var(--spectrum-global-dimension-size-50) - 1px);\n\n  font-size: var(--spectrum-button-primary-text-size, var(--spectrum-alias-pill-button-text-size));\n  font-weight: var(--spectrum-button-primary-text-font-weight, var(--spectrum-global-font-weight-bold));\n}\n\n.spectrum-Button:hover,\n  .spectrum-Button:active {\n    box-shadow: none;\n  }\n\n.spectrum-Button .spectrum-Icon + .spectrum-Button-label {\n    margin-left: var(--spectrum-button-primary-text-gap, var(--spectrum-global-dimension-size-100));\n  }\n\n.spectrum-Button .spectrum-Button-label + .spectrum-Icon {\n    margin-left: calc(var(--spectrum-button-primary-text-gap, var(--spectrum-global-dimension-size-100)) / 2);\n  }\n\n.spectrum-ClearButton--overBackground.focus-ring:after {\n      margin: calc(var(--spectrum-alias-focus-ring-gap, var(--spectrum-global-dimension-static-size-25)) * -1);\n    }\n\na.spectrum-Button,\na.spectrum-ActionButton {\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.spectrum-ActionButton,\n.spectrum-Tool {\n  position: relative;\n\n  height: var(--spectrum-actionbutton-height, var(--spectrum-alias-single-line-height));\n  min-width: var(--spectrum-actionbutton-min-width, var(--spectrum-global-dimension-size-400));\n  padding: 0 calc(var(--spectrum-actionbutton-icon-padding-x, var(--spectrum-global-dimension-size-85)) - var(--spectrum-actionbutton-border-size, var(--spectrum-alias-border-size-thin)));\n\n  border-width: var(--spectrum-actionbutton-border-size, var(--spectrum-alias-border-size-thin));\n  border-radius: var(--spectrum-actionbutton-border-radius, var(--spectrum-alias-border-radius-regular));\n\n  font-size: var(--spectrum-actionbutton-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-actionbutton-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n}\n\n.spectrum-ActionButton .spectrum-Icon + .spectrum-ActionButton-label,\n.spectrum-Tool .spectrum-Icon + .spectrum-ActionButton-label {\n    padding-left: var(--spectrum-actionbutton-icon-padding-x, var(--spectrum-global-dimension-size-85));\n    padding-right: calc(var(--spectrum-actionbutton-text-padding-x, var(--spectrum-global-dimension-size-150)) - var(--spectrum-actionbutton-icon-padding-x, var(--spectrum-global-dimension-size-85)));\n  }\n\n.spectrum-ActionButton .spectrum-Icon--sizeS:only-child,\n.spectrum-Tool .spectrum-Icon--sizeS:only-child {\n    position: absolute;\n    top: calc(50% - var(--spectrum-actionbutton-icon-size, var(--spectrum-alias-workflow-icon-size)) / 2);\n    left: calc(50% - var(--spectrum-actionbutton-icon-size, var(--spectrum-alias-workflow-icon-size)) / 2);\n  }\n\n.spectrum-ActionButton .spectrum-ActionButton-label:only-child,\n.spectrum-Tool .spectrum-ActionButton-label:only-child {\n    padding: 0 calc(var(--spectrum-actionbutton-text-padding-x, var(--spectrum-global-dimension-size-150)) - var(--spectrum-actionbutton-icon-padding-x, var(--spectrum-global-dimension-size-85)));\n  }\n\n.spectrum-ActionButton-hold {\n  position: absolute;\n  right: var(--spectrum-actionbutton-hold-icon-padding-right, var(--spectrum-global-dimension-size-40));\n  bottom: var(--spectrum-actionbutton-hold-icon-padding-bottom, var(--spectrum-global-dimension-size-40));\n}\n\n.spectrum-ActionButton-label,\n.spectrum-Button-label {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  justify-self: center;\n  text-align: center;\n  width: 100%;\n}\n\n.spectrum-ActionButton-label:empty, .spectrum-Button-label:empty {\n    display: none;\n  }\n\n.spectrum-ActionButton-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.spectrum-ActionButton--quiet,\n.spectrum-Tool {\n  border-width: var(--spectrum-actionbutton-quiet-border-size, var(--spectrum-alias-border-size-thin));\n  border-radius: var(--spectrum-actionbutton-quiet-border-radius, var(--spectrum-alias-border-radius-regular));\n\n  font-size: var(--spectrum-actionbutton-quiet-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-actionbutton-quiet-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n}\n\n.spectrum-LogicButton {\n\n  height: var(--spectrum-logicbutton-and-height, 24px);\n  padding: var(--spectrum-logicbutton-and-padding-x, var(--spectrum-global-dimension-size-100));\n\n  border-width: var(--spectrum-logicbutton-and-border-size, var(--spectrum-alias-border-size-thick));\n  border-radius: var(--spectrum-logicbutton-and-border-radius, var(--spectrum-alias-border-radius-regular));\n\n  font-size: var(--spectrum-logicbutton-and-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-logicbutton-and-text-font-weight, var(--spectrum-global-font-weight-bold));\n  line-height: 0;\n}\n\n.spectrum-LogicButton:after {\n    border-radius: calc(var(--spectrum-logicbutton-and-border-radius, var(--spectrum-alias-border-radius-regular)) + var(--spectrum-alias-focus-ring-gap, var(--spectrum-global-dimension-static-size-25)));\n  }\n\n.spectrum-FieldButton {\n\n  height: var(--spectrum-dropdown-height, var(--spectrum-global-dimension-size-400));\n\n  padding: 0 var(--spectrum-dropdown-padding-x, var(--spectrum-global-dimension-size-150));\n\n  font-family: inherit;\n  font-weight: normal;\n  font-size: var(--spectrum-dropdown-text-size, var(--spectrum-alias-font-size-default));\n  line-height: normal;\n  -webkit-font-smoothing: initial;\n\n  cursor: pointer;\n  outline: none;\n}\n\n.spectrum-FieldButton {\n  margin: 0;\n  padding: 0 var(--spectrum-dropdown-padding-x, var(--spectrum-global-dimension-size-150));\n\n  border-width: var(--spectrum-dropdown-border-size, var(--spectrum-alias-border-size-thin));\n  border-style: solid;\n  border-radius: var(--spectrum-global-dimension-size-50);\n\n  transition: background-color var(--spectrum-global-animation-duration-100, 130ms),\n    box-shadow var(--spectrum-global-animation-duration-100, 130ms),\n    border-color var(--spectrum-global-animation-duration-100, 130ms);\n}\n\n.spectrum-FieldButton:disabled,\n  .spectrum-FieldButton.is-disabled {\n    border-width: 0;\n    cursor: default;\n  }\n\n.spectrum-FieldButton.is-open {\n    border-width: var(--spectrum-dropdown-border-size, var(--spectrum-alias-border-size-thin));\n  }\n\n.spectrum-FieldButton--quiet {\n  margin: 0;\n  padding: 0;\n\n  border-width: 0;\n  border-radius: var(--spectrum-fieldbutton-quiet-border-radius, 0px);\n}\n\n.spectrum-FieldButton--quiet:disabled.focus-ring, .spectrum-FieldButton--quiet.is-disabled.focus-ring {\n      box-shadow: none;\n    }\n\n.spectrum-ClearButton {\n\n  width: var(--spectrum-clearbutton-medium-width, var(--spectrum-alias-single-line-height));\n  height: var(--spectrum-clearbutton-medium-height, var(--spectrum-alias-single-line-height));\n\n  border-radius: 100%;\n\n  padding: 0;\n  margin: 0;\n\n  border: none;\n}\n\n.spectrum-ClearButton > .spectrum-Icon {\n    margin: 0 auto;\n  }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    .spectrum-ClearButton > .spectrum-Icon {\n      margin: 0\n    }\n}\n\n.spectrum-ClearButton--small {\n  width: var(--spectrum-clearbutton-small-width, var(--spectrum-global-dimension-size-300));\n  height: var(--spectrum-clearbutton-small-height, var(--spectrum-global-dimension-size-300));\n}\n\n.spectrum-Tool {\n\n  position: relative;\n\n  -ms-flex-pack: center;\n\n      justify-content: center;\n\n  width: var(--spectrum-tool-min-width, var(--spectrum-global-dimension-size-400));\n  height: var(--spectrum-tool-height, var(--spectrum-alias-single-line-height));\n\n  padding: 0;\n}\n\n.spectrum-Tool-hold {\n  position: absolute;\n  right: var(--spectrum-tool-hold-icon-padding-right, var(--spectrum-global-dimension-size-40));\n  bottom: var(--spectrum-tool-hold-icon-padding-bottom, var(--spectrum-global-dimension-size-40));\n}\n\n.spectrum-Button + .spectrum-Button {\n  margin-left: var(--spectrum-buttongroup-button-gap-x, var(--spectrum-global-dimension-static-size-200));\n}\n\n.spectrum-ActionButton + .spectrum-ActionButton,\n.spectrum-Tool + .spectrum-Tool {\n  margin-left: var(--spectrum-actionbuttongroup-text-button-gap-x, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-Tool + .spectrum-Tool {\n  margin-left: var(--spectrum-toolgroup-text-button-gap-x, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-LogicButton.focus-ring:after, .spectrum-LogicButton.is-focused:after, .spectrum-Button.focus-ring:after, .spectrum-Button.is-focused:after {\n      box-shadow: 0 0 0 var(--spectrum-button-primary-focus-ring-size-key-focus, var(--spectrum-alias-focus-ring-size)) var(--spectrum-button-primary-focus-ring-color-key-focus, var(--spectrum-alias-focus-ring-color));\n    }\n\n.spectrum-ClearButton {\n  background-color: var(--spectrum-clearbutton-medium-background-color, var(--spectrum-alias-background-color-transparent));\n\n  color: var(--spectrum-clearbutton-medium-icon-color, var(--spectrum-alias-icon-color));\n}\n\n.spectrum-ClearButton:hover {\n    background-color: var(--spectrum-clearbutton-medium-background-color-hover, var(--spectrum-alias-background-color-transparent));\n\n    color: var(--spectrum-clearbutton-medium-icon-color-hover, var(--spectrum-alias-icon-color-hover));\n  }\n\n.spectrum-ClearButton:active {\n    background-color: var(--spectrum-clearbutton-medium-background-color-down, var(--spectrum-alias-background-color-transparent));\n\n    color: var(--spectrum-clearbutton-medium-icon-color-down, var(--spectrum-alias-icon-color-down));\n  }\n\n.spectrum-ClearButton.focus-ring {\n    background-color: var(--spectrum-clearbutton-medium-background-color-key-focus, var(--spectrum-alias-background-color-transparent));\n\n    color: var(--spectrum-clearbutton-medium-icon-color-key-focus, var(--spectrum-alias-icon-color-focus));\n  }\n\n.spectrum-ClearButton:disabled,\n  .spectrum-ClearButton.is-disabled {\n    background-color: var(--spectrum-clearbutton-medium-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n\n    color: var(--spectrum-clearbutton-medium-icon-color-disabled, var(--spectrum-alias-icon-color-disabled));\n  }\n\n.spectrum-Button--cta {\n  background-color: var(--spectrum-button-cta-background-color, var(--spectrum-semantic-cta-color-background-default));\n  border-color: var(--spectrum-button-cta-border-color, var(--spectrum-semantic-cta-color-background-default));\n  color: var(--spectrum-button-cta-text-color, var(--spectrum-global-color-static-white));\n}\n\n.spectrum-Button--cta:hover {\n    background-color: var(--spectrum-button-cta-background-color-hover, var(--spectrum-semantic-cta-color-background-hover));\n    border-color: var(--spectrum-button-cta-border-color-hover, var(--spectrum-semantic-cta-color-background-hover));\n    color: var(--spectrum-button-cta-text-color-hover, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Button--cta.focus-ring {\n    background-color: var(--spectrum-button-cta-background-color-key-focus, var(--spectrum-semantic-cta-color-background-hover));\n    border-color: var(--spectrum-button-cta-border-color-key-focus, var(--spectrum-semantic-cta-color-background-hover));\n    color: var(--spectrum-button-cta-text-color-key-focus, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Button--cta:active {\n    background-color: var(--spectrum-button-cta-background-color-down, var(--spectrum-semantic-cta-color-background-down));\n    border-color: var(--spectrum-button-cta-border-color-down, var(--spectrum-semantic-cta-color-background-down));\n    color: var(--spectrum-button-cta-text-color-down, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Button--cta:disabled,\n  .spectrum-Button--cta.is-disabled {\n    background-color: var(--spectrum-button-cta-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-cta-border-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-cta-text-color-disabled, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-Button--primary {\n  background-color: var(--spectrum-button-primary-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-primary-border-color, var(--spectrum-global-color-gray-800));\n  color: var(--spectrum-button-primary-text-color, var(--spectrum-global-color-gray-800));\n}\n\n.spectrum-Button--primary:hover {\n    background-color: var(--spectrum-button-primary-background-color-hover, var(--spectrum-global-color-gray-800));\n    border-color: var(--spectrum-button-primary-border-color-hover, var(--spectrum-global-color-gray-800));\n    color: var(--spectrum-button-primary-text-color-hover, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--primary.focus-ring {\n    background-color: var(--spectrum-button-primary-background-color-key-focus, var(--spectrum-global-color-gray-800));\n    border-color: var(--spectrum-button-primary-border-color-key-focus, var(--spectrum-global-color-gray-800));\n    color: var(--spectrum-button-primary-text-color-key-focus, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--primary:active {\n    background-color: var(--spectrum-button-primary-background-color-down, var(--spectrum-global-color-gray-900));\n    border-color: var(--spectrum-button-primary-border-color-down, var(--spectrum-global-color-gray-900));\n    color: var(--spectrum-button-primary-text-color-down, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--primary:disabled,\n  .spectrum-Button--primary.is-disabled {\n    background-color: var(--spectrum-button-primary-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-primary-border-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-primary-text-color-disabled, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-Button--secondary {\n  background-color: var(--spectrum-button-secondary-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-secondary-border-color, var(--spectrum-global-color-gray-700));\n  color: var(--spectrum-button-secondary-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Button--secondary:hover {\n    background-color: var(--spectrum-button-secondary-background-color-hover, var(--spectrum-global-color-gray-700));\n    border-color: var(--spectrum-button-secondary-border-color-hover, var(--spectrum-global-color-gray-700));\n    color: var(--spectrum-button-secondary-text-color-hover, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--secondary.focus-ring {\n    background-color: var(--spectrum-button-secondary-background-color-key-focus, var(--spectrum-global-color-gray-700));\n    border-color: var(--spectrum-button-secondary-border-color-key-focus, var(--spectrum-global-color-gray-700));\n    color: var(--spectrum-button-secondary-text-color-key-focus, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--secondary:active {\n    background-color: var(--spectrum-button-secondary-background-color-down, var(--spectrum-global-color-gray-800));\n    border-color: var(--spectrum-button-secondary-border-color-down, var(--spectrum-global-color-gray-800));\n    color: var(--spectrum-button-secondary-text-color-down, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--secondary:disabled,\n  .spectrum-Button--secondary.is-disabled {\n    background-color: var(--spectrum-button-secondary-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-secondary-border-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-secondary-text-color-disabled, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-Button--warning {\n  background-color: var(--spectrum-button-warning-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-warning-border-color, var(--spectrum-semantic-negative-color-text-small));\n  color: var(--spectrum-button-warning-text-color, var(--spectrum-semantic-negative-color-text-small));\n}\n\n.spectrum-Button--warning:hover {\n    background-color: var(--spectrum-button-warning-background-color-hover, var(--spectrum-semantic-negative-color-text-small));\n    border-color: var(--spectrum-button-warning-border-color-hover, var(--spectrum-semantic-negative-color-text-small));\n    color: var(--spectrum-button-warning-text-color-hover, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--warning.focus-ring {\n    background-color: var(--spectrum-button-warning-background-color-key-focus, var(--spectrum-semantic-negative-color-text-small));\n    border-color: var(--spectrum-button-warning-border-color-key-focus, var(--spectrum-semantic-negative-color-text-small));\n    color: var(--spectrum-button-warning-text-color-key-focus, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--warning:active {\n    background-color: var(--spectrum-button-warning-background-color-down, var(--spectrum-global-color-red-700));\n    border-color: var(--spectrum-button-warning-border-color-down, var(--spectrum-global-color-red-700));\n    color: var(--spectrum-button-warning-text-color-down, var(--spectrum-global-color-gray-50));\n  }\n\n.spectrum-Button--warning:disabled,\n  .spectrum-Button--warning.is-disabled {\n    background-color: var(--spectrum-button-warning-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-warning-border-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-warning-text-color-disabled, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-Button--overBackground {\n  background-color: var(--spectrum-button-over-background-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-over-background-border-color, var(--spectrum-global-color-static-white));\n  color: var(--spectrum-button-over-background-text-color, var(--spectrum-global-color-static-white));\n}\n\n.spectrum-Button--overBackground:hover {\n    background-color: var(--spectrum-button-over-background-background-color-hover, var(--spectrum-global-color-static-white));\n    border-color: var(--spectrum-button-over-background-border-color-hover, var(--spectrum-global-color-static-white));\n    color: inherit;\n  }\n\n.spectrum-Button--overBackground.focus-ring {\n    background-color: var(--spectrum-button-over-background-background-color-hover, var(--spectrum-global-color-static-white));\n    border-color: var(--spectrum-button-over-background-border-color-hover, var(--spectrum-global-color-static-white));\n    color: inherit;\n  }\n\n.spectrum-Button--overBackground.focus-ring:after {\n      box-shadow: 0 0 0 var(--spectrum-alias-focus-ring-size, var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-border-color-key-focus, var(--spectrum-global-color-static-white));\n    }\n\n.spectrum-Button--overBackground:active {\n    background-color: var(--spectrum-button-over-background-background-color-down, var(--spectrum-global-color-static-white));\n    border-color: var(--spectrum-button-over-background-border-color-down, var(--spectrum-global-color-static-white));\n    color: inherit;\n  }\n\n.spectrum-Button--overBackground:disabled,\n  .spectrum-Button--overBackground.is-disabled {\n    background-color: var(--spectrum-button-over-background-background-color-disabled, rgba(255,255,255,0.1));\n    border-color: var(--spectrum-button-over-background-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-over-background-text-color-disabled, rgba(255,255,255,0.35));\n  }\n\n.spectrum-Button--overBackground.spectrum-Button--quiet,\n.spectrum-ClearButton--overBackground {\n  background-color: var(--spectrum-button-quiet-over-background-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-quiet-over-background-border-color, var(--spectrum-alias-border-color-transparent));\n  color: var(--spectrum-button-quiet-over-background-text-color, var(--spectrum-global-color-static-white));\n}\n\n.spectrum-Button--overBackground.spectrum-Button--quiet:hover, .spectrum-ClearButton--overBackground:hover {\n    background-color: var(--spectrum-button-quiet-over-background-background-color-hover, rgba(255,255,255,0.1));\n    border-color: var(--spectrum-button-quiet-over-background-border-color-hover, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-quiet-over-background-text-color-hover, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Button--overBackground.spectrum-Button--quiet.focus-ring, .spectrum-ClearButton--overBackground.focus-ring {\n    background-color: var(--spectrum-button-quiet-over-background-background-color-hover, rgba(255,255,255,0.1));\n    border-color: var(--spectrum-button-quiet-over-background-border-color-hover, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-quiet-over-background-text-color-hover, var(--spectrum-global-color-static-white));\n    box-shadow: none;\n  }\n\n.spectrum-Button--overBackground.spectrum-Button--quiet.focus-ring:after, .spectrum-ClearButton--overBackground.focus-ring:after {\n      box-shadow: 0 0 0 var(--spectrum-alias-focus-ring-size, var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-border-color-key-focus, var(--spectrum-global-color-static-white));\n    }\n\n.spectrum-Button--overBackground.spectrum-Button--quiet:active, .spectrum-ClearButton--overBackground:active {\n    background-color: var(--spectrum-button-quiet-over-background-background-color-down, rgba(255,255,255,0.15));\n    border-color: var(--spectrum-button-quiet-over-background-border-color-down, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-quiet-over-background-text-color-down, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Button--overBackground.spectrum-Button--quiet:disabled,\n  .spectrum-Button--overBackground.spectrum-Button--quiet.is-disabled,\n  .spectrum-ClearButton--overBackground:disabled,\n  .spectrum-ClearButton--overBackground.is-disabled {\n    background-color: var(--spectrum-button-quiet-over-background-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-button-quiet-over-background-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-quiet-over-background-text-color-disabled, rgba(255,255,255,0.15));\n  }\n\n.spectrum-Button--primary.spectrum-Button--quiet {\n  background-color: var(--spectrum-button-quiet-primary-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-quiet-primary-border-color, var(--spectrum-alias-border-color-transparent));\n  color: var(--spectrum-button-quiet-primary-text-color, var(--spectrum-global-color-gray-800));\n}\n\n.spectrum-Button--primary.spectrum-Button--quiet:hover {\n    background-color: var(--spectrum-button-quiet-primary-background-color-hover, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-quiet-primary-border-color-hover, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-quiet-primary-text-color-hover, var(--spectrum-global-color-gray-900));\n  }\n\n.spectrum-Button--primary.spectrum-Button--quiet.focus-ring {\n    background-color: var(--spectrum-button-quiet-primary-background-color-key-focus, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-quiet-primary-border-color-key-focus, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-quiet-primary-text-color-key-focus, var(--spectrum-global-color-gray-900));\n  }\n\n.spectrum-Button--primary.spectrum-Button--quiet:active {\n    background-color: var(--spectrum-button-quiet-primary-background-color-down, var(--spectrum-global-color-gray-300));\n    border-color: var(--spectrum-button-quiet-primary-border-color-down, var(--spectrum-global-color-gray-300));\n    color: var(--spectrum-button-quiet-primary-text-color-down, var(--spectrum-global-color-gray-900));\n  }\n\n.spectrum-Button--primary.spectrum-Button--quiet:disabled,\n  .spectrum-Button--primary.spectrum-Button--quiet.is-disabled {\n    background-color: var(--spectrum-button-quiet-primary-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-button-quiet-primary-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-quiet-primary-text-color-disabled, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-Button--secondary.spectrum-Button--quiet {\n  background-color: var(--spectrum-button-quiet-secondary-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-quiet-secondary-border-color, var(--spectrum-alias-border-color-transparent));\n  color: var(--spectrum-button-quiet-secondary-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Button--secondary.spectrum-Button--quiet:hover {\n    background-color: var(--spectrum-button-quiet-secondary-background-color-hover, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-quiet-secondary-border-color-hover, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-quiet-secondary-text-color-hover, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Button--secondary.spectrum-Button--quiet.focus-ring {\n    background-color: var(--spectrum-button-quiet-secondary-background-color-key-focus, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-quiet-secondary-border-color-key-focus, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-quiet-secondary-text-color-key-focus, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Button--secondary.spectrum-Button--quiet:active {\n    background-color: var(--spectrum-button-quiet-secondary-background-color-down, var(--spectrum-global-color-gray-300));\n    border-color: var(--spectrum-button-quiet-secondary-border-color-down, var(--spectrum-global-color-gray-300));\n    color: var(--spectrum-button-quiet-secondary-text-color-down, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Button--secondary.spectrum-Button--quiet:disabled,\n  .spectrum-Button--secondary.spectrum-Button--quiet.is-disabled {\n    background-color: var(--spectrum-button-quiet-secondary-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-button-quiet-secondary-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-quiet-secondary-text-color-disabled, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-ActionButton,\n.spectrum-Tool {\n  background-color: var(--spectrum-actionbutton-background-color, var(--spectrum-global-color-gray-75));\n  border-color: var(--spectrum-actionbutton-border-color, var(--spectrum-alias-border-color));\n  color: var(--spectrum-actionbutton-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-ActionButton .spectrum-Icon,\n.spectrum-Tool .spectrum-Icon {\n    color: var(--spectrum-actionbutton-icon-color, var(--spectrum-alias-icon-color));\n  }\n\n.spectrum-ActionButton .spectrum-ActionButton-hold,\n.spectrum-Tool .spectrum-ActionButton-hold {\n    color: var(--spectrum-actionbutton-hold-icon-color, var(--spectrum-alias-icon-color));\n  }\n\n.spectrum-ActionButton:hover,\n.spectrum-Tool:hover {\n    background-color: var(--spectrum-actionbutton-background-color-hover, var(--spectrum-global-color-gray-50));\n    border-color: var(--spectrum-actionbutton-border-color-hover, var(--spectrum-alias-border-color-hover));\n    color: var(--spectrum-actionbutton-text-color-hover, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-ActionButton:hover .spectrum-Icon,\n.spectrum-Tool:hover .spectrum-Icon {\n      color: var(--spectrum-actionbutton-icon-color-hover, var(--spectrum-alias-icon-color-hover));\n    }\n\n.spectrum-ActionButton:hover .spectrum-ActionButton-hold,\n.spectrum-Tool:hover .spectrum-ActionButton-hold {\n      color: var(--spectrum-actionbutton-hold-icon-color-hover, var(--spectrum-alias-icon-color-hover));\n    }\n\n.spectrum-ActionButton.focus-ring,\n.spectrum-Tool.focus-ring {\n    background-color: var(--spectrum-actionbutton-background-color-key-focus, var(--spectrum-global-color-gray-50));\n    border-color: var(--spectrum-actionbutton-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    box-shadow: 0 0 0 var(--spectrum-button-primary-border-size-increase-key-focus, 1px) var(--spectrum-actionbutton-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    color: var(--spectrum-actionbutton-text-color-key-focus, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-ActionButton.focus-ring .spectrum-Icon,\n.spectrum-Tool.focus-ring .spectrum-Icon {\n      color: var(--spectrum-actionbutton-icon-color-key-focus, var(--spectrum-alias-icon-color-focus));\n    }\n\n.spectrum-ActionButton.focus-ring .spectrum-ActionButton-hold,\n.spectrum-Tool.focus-ring .spectrum-ActionButton-hold {\n      color: var(--spectrum-actionbutton-hold-icon-color-key-focus, var(--spectrum-alias-icon-color-hover));\n    }\n\n.spectrum-ActionButton:active,\n.spectrum-Tool:active {\n    background-color: var(--spectrum-actionbutton-background-color-down, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-actionbutton-border-color-down, var(--spectrum-global-color-gray-400));\n    color: var(--spectrum-actionbutton-text-color-down, var(--spectrum-alias-text-color-down));\n  }\n\n.spectrum-ActionButton:active .spectrum-ActionButton-hold,\n.spectrum-Tool:active .spectrum-ActionButton-hold {\n      color: var(--spectrum-actionbutton-hold-icon-color-down, var(--spectrum-alias-icon-color-down));\n    }\n\n.spectrum-ActionButton:disabled,\n.spectrum-ActionButton.is-disabled,\n.spectrum-Tool:disabled {\n    background-color: var(--spectrum-actionbutton-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-actionbutton-border-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-actionbutton-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-ActionButton:disabled .spectrum-Icon,\n.spectrum-ActionButton.is-disabled .spectrum-Icon,\n.spectrum-Tool:disabled .spectrum-Icon {\n      color: var(--spectrum-actionbutton-icon-color-disabled, var(--spectrum-alias-icon-color-disabled));\n    }\n\n.spectrum-ActionButton:disabled .spectrum-ActionButton-hold,\n.spectrum-ActionButton.is-disabled .spectrum-ActionButton-hold,\n.spectrum-Tool:disabled .spectrum-ActionButton-hold {\n      color: var(--spectrum-actionbutton-hold-icon-color-disabled, var(--spectrum-alias-icon-color-disabled));\n    }\n\n.spectrum-ActionButton.is-selected {\n    background-color: var(--spectrum-actionbutton-background-color-selected, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-actionbutton-border-color-selected, var(--spectrum-global-color-gray-300));\n    color: var(--spectrum-actionbutton-text-color-selected, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-ActionButton.is-selected .spectrum-Icon {\n      color: var(--spectrum-actionbutton-icon-color-selected, var(--spectrum-alias-icon-color));\n    }\n\n.spectrum-ActionButton.is-selected.focus-ring {\n      background-color: var(--spectrum-actionbutton-background-color-selected-key-focus, var(--spectrum-global-color-gray-200));\n      border-color: var(--spectrum-actionbutton-border-color-selected-key-focus, var(--spectrum-alias-border-color-focus));\n      color: var(--spectrum-actionbutton-text-color-selected-key-focus, var(--spectrum-alias-text-color-hover));\n    }\n\n.spectrum-ActionButton.is-selected.focus-ring .spectrum-Icon {\n        color: var(--spectrum-actionbutton-icon-color-selected-key-focus, var(--spectrum-alias-icon-color-hover));\n      }\n\n.spectrum-ActionButton.is-selected:hover {\n      background-color: var(--spectrum-actionbutton-background-color-selected-hover, var(--spectrum-global-color-gray-200));\n      border-color: var(--spectrum-actionbutton-border-color-selected-hover, var(--spectrum-global-color-gray-400));\n      color: var(--spectrum-actionbutton-text-color-selected-hover, var(--spectrum-alias-text-color-hover));\n    }\n\n.spectrum-ActionButton.is-selected:hover .spectrum-Icon {\n        color: var(--spectrum-actionbutton-icon-color-selected-hover, var(--spectrum-alias-icon-color-hover));\n      }\n\n.spectrum-ActionButton.is-selected:active {\n      background-color: var(--spectrum-actionbutton-background-color-selected-down, var(--spectrum-global-color-gray-200));\n      border-color: var(--spectrum-actionbutton-border-color-selected-down, var(--spectrum-global-color-gray-400));\n      color: var(--spectrum-actionbutton-text-color-selected-down, var(--spectrum-alias-text-color-down));\n    }\n\n.spectrum-ActionButton.is-selected:active .spectrum-Icon {\n        color: var(--spectrum-actionbutton-icon-color-selected-down, var(--spectrum-alias-icon-color-down));\n      }\n\n.spectrum-ActionButton.is-selected:disabled,\n    .spectrum-ActionButton.is-selected.is-disabled {\n      background-color: var(--spectrum-actionbutton-background-color-selected-disabled, var(--spectrum-global-color-gray-200));\n      border-color: var(--spectrum-actionbutton-border-color-selected-disabled, var(--spectrum-global-color-gray-200));\n      color: var(--spectrum-actionbutton-text-color-selected-disabled, var(--spectrum-alias-text-color-disabled));\n    }\n\n.spectrum-ActionButton.is-selected:disabled .spectrum-Icon, .spectrum-ActionButton.is-selected.is-disabled .spectrum-Icon {\n        color: var(--spectrum-actionbutton-icon-color-selected-disabled, var(--spectrum-alias-icon-color-disabled));\n      }\n\n.spectrum-ActionButton--quiet,\n.spectrum-Tool {\n  background-color: var(--spectrum-actionbutton-quiet-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-actionbutton-quiet-border-color, var(--spectrum-alias-border-color-transparent));\n  color: var(--spectrum-actionbutton-quiet-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-ActionButton--quiet:hover,\n.spectrum-Tool:hover {\n    background-color: var(--spectrum-actionbutton-quiet-background-color-hover, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-actionbutton-quiet-border-color-hover, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-actionbutton-quiet-text-color-hover, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-ActionButton--quiet.focus-ring,\n.spectrum-Tool.focus-ring {\n    background-color: var(--spectrum-actionbutton-quiet-background-color-key-focus, var(--spectrum-alias-background-color-transparent));\n    box-shadow: 0 0 0 1px var(--spectrum-actionbutton-quiet-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    border-color: var(--spectrum-actionbutton-quiet-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    color: var(--spectrum-actionbutton-quiet-text-color-key-focus, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-ActionButton--quiet:active,\n.spectrum-Tool:active {\n    background-color: var(--spectrum-actionbutton-quiet-background-color-down, var(--spectrum-global-color-gray-300));\n    border-color: var(--spectrum-actionbutton-quiet-border-color-down, var(--spectrum-global-color-gray-300));\n    color: var(--spectrum-actionbutton-quiet-text-color-down, var(--spectrum-alias-text-color-down));\n  }\n\n.spectrum-ActionButton--quiet:disabled,\n.spectrum-ActionButton--quiet.is-disabled,\n.spectrum-Tool:disabled {\n    background-color: var(--spectrum-actionbutton-quiet-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-actionbutton-quiet-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-actionbutton-quiet-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-ActionButton--quiet.is-selected {\n    background-color: var(--spectrum-actionbutton-quiet-background-color-selected, var(--spectrum-global-color-gray-300));\n    border-color: var(--spectrum-actionbutton-quiet-border-color-selected, var(--spectrum-global-color-gray-300));\n    color: var(--spectrum-actionbutton-quiet-text-color-selected, var(--spectrum-alias-text-color));\n  }\n\n.spectrum-ActionButton--quiet.is-selected.focus-ring {\n      background-color: var(--spectrum-actionbutton-quiet-background-color-selected-key-focus, var(--spectrum-global-color-gray-300));\n      border-color: var(--spectrum-actionbutton-quiet-border-color-selected-key-focus, var(--spectrum-alias-border-color-focus));\n      color: var(--spectrum-actionbutton-quiet-text-color-selected-key-focus, var(--spectrum-alias-text-color-hover));\n    }\n\n.spectrum-ActionButton--quiet.is-selected:hover {\n      background-color: var(--spectrum-actionbutton-quiet-background-color-selected-hover, var(--spectrum-global-color-gray-300));\n      border-color: var(--spectrum-actionbutton-quiet-border-color-selected-hover, var(--spectrum-global-color-gray-300));\n      color: var(--spectrum-actionbutton-quiet-text-color-selected-hover, var(--spectrum-alias-text-color-hover));\n    }\n\n.spectrum-ActionButton--quiet.is-selected:active {\n      background-color: var(--spectrum-actionbutton-quiet-background-color-selected-down, var(--spectrum-global-color-gray-300));\n      border-color: var(--spectrum-actionbutton-quiet-border-color-selected-down, var(--spectrum-global-color-gray-300));\n      color: var(--spectrum-actionbutton-quiet-text-color-selected-down, var(--spectrum-alias-text-color-down));\n    }\n\n.spectrum-ActionButton--quiet.is-selected:disabled,\n    .spectrum-ActionButton--quiet.is-selected.is-disabled {\n      background-color: var(--spectrum-actionbutton-quiet-background-color-selected-disabled, var(--spectrum-global-color-gray-200));\n      border-color: var(--spectrum-actionbutton-quiet-border-color-selected-disabled, var(--spectrum-global-color-gray-200));\n      color: var(--spectrum-actionbutton-quiet-text-color-selected-disabled, var(--spectrum-alias-text-color-disabled));\n    }\n\n.spectrum-Button--warning.spectrum-Button--quiet {\n  background-color: var(--spectrum-button-quiet-warning-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-button-quiet-warning-border-color, var(--spectrum-alias-border-color-transparent));\n  color: var(--spectrum-button-quiet-warning-text-color, var(--spectrum-semantic-negative-color-text-small));\n}\n\n.spectrum-Button--warning.spectrum-Button--quiet:hover {\n    background-color: var(--spectrum-button-quiet-warning-background-color-hover, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-quiet-warning-border-color-hover, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-quiet-warning-text-color-hover, var(--spectrum-global-color-red-700));\n  }\n\n.spectrum-Button--warning.spectrum-Button--quiet.focus-ring {\n    background-color: var(--spectrum-button-quiet-warning-background-color-key-focus, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-quiet-warning-border-color-key-focus, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-button-quiet-warning-text-color-key-focus, var(--spectrum-global-color-red-700));\n  }\n\n.spectrum-Button--warning.spectrum-Button--quiet:active {\n    background-color: var(--spectrum-button-quiet-warning-background-color-down, var(--spectrum-global-color-gray-300));\n    border-color: var(--spectrum-button-quiet-warning-border-color-down, var(--spectrum-global-color-gray-300));\n    color: var(--spectrum-button-quiet-warning-text-color-down, var(--spectrum-global-color-red-700));\n  }\n\n.spectrum-Button--warning.spectrum-Button--quiet:disabled,\n  .spectrum-Button--warning.spectrum-Button--quiet.is-disabled {\n    background-color: var(--spectrum-button-quiet-warning-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-button-quiet-warning-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-button-quiet-warning-text-color-disabled, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-LogicButton--and {\n  background-color: var(--spectrum-logicbutton-and-background-color, var(--spectrum-global-color-blue-500));\n  border-color: var(--spectrum-logicbutton-and-border-color, var(--spectrum-global-color-blue-500));\n  color: var(--spectrum-logicbutton-and-text-color, var(--spectrum-global-color-static-white));\n}\n\n.spectrum-LogicButton--and:hover {\n    background-color: var(--spectrum-logicbutton-and-background-color-hover, var(--spectrum-global-color-blue-700));\n    border-color: var(--spectrum-logicbutton-and-border-color-hover, var(--spectrum-global-color-blue-700));\n    color: var(--spectrum-logicbutton-and-text-color, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-LogicButton--and:disabled,\n  .spectrum-LogicButton--and.is-disabled {\n    background-color: var(--spectrum-logicbutton-and-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-logicbutton-and-border-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-logicbutton-and-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-LogicButton--or {\n  background-color: var(--spectrum-logicbutton-or-background-color, var(--spectrum-global-color-magenta-500));\n  border-color: var(--spectrum-logicbutton-or-border-color, var(--spectrum-global-color-magenta-500));\n  color: var(--spectrum-logicbutton-or-text-color, var(--spectrum-global-color-static-white));\n}\n\n.spectrum-LogicButton--or:hover {\n    background-color: var(--spectrum-logicbutton-or-background-color-hover, var(--spectrum-global-color-magenta-700));\n    border-color: var(--spectrum-logicbutton-or-border-color-hover, var(--spectrum-global-color-magenta-700));\n    color: var(--spectrum-logicbutton-or-text-color, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-LogicButton--or:disabled,\n  .spectrum-LogicButton--or.is-disabled {\n    background-color: var(--spectrum-button-secondary-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-button-secondary-border-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-logicbutton-and-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-FieldButton {\n  color: var(--spectrum-fieldbutton-text-color, var(--spectrum-alias-text-color));\n  background-color: var(--spectrum-fieldbutton-background-color, var(--spectrum-global-color-gray-75));\n  border-color: var(--spectrum-fieldbutton-border-color, var(--spectrum-global-color-gray-300));\n}\n\n.spectrum-FieldButton:hover {\n    color: var(--spectrum-fieldbutton-text-color-hover, var(--spectrum-alias-text-color-hover));\n    background-color: var(--spectrum-fieldbutton-background-color-hover, var(--spectrum-global-color-gray-50));\n    border-color: var(--spectrum-fieldbutton-border-color-hover, var(--spectrum-global-color-gray-400));\n  }\n\n.spectrum-FieldButton:active,\n  .spectrum-FieldButton.is-selected {\n    background-color: var(--spectrum-fieldbutton-background-color-down, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-fieldbutton-border-color-down, var(--spectrum-global-color-gray-400));\n  }\n\n.spectrum-FieldButton.focus-ring,\n  .spectrum-FieldButton.is-focused {\n    background-color: var(--spectrum-fieldbutton-background-color-key-focus, var(--spectrum-global-color-gray-50));\n    border-color: var(--spectrum-fieldbutton-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    box-shadow: 0 0 0 var(--spectrum-button-primary-border-size-increase-key-focus, 1px) var(--spectrum-fieldbutton-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    color: var(--spectrum-fieldbutton-text-color-key-focus, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-FieldButton.focus-ring.is-placeholder, .spectrum-FieldButton.is-focused.is-placeholder {\n      color: var(--spectrum-fieldbutton-placeholder-text-color-key-focus, var(--spectrum-alias-placeholder-text-color-hover));\n    }\n\n.spectrum-FieldButton.is-invalid {\n    border-color: var(--spectrum-fieldbutton-border-color-error, var(--spectrum-global-color-red-500));\n  }\n\n.spectrum-FieldButton.is-invalid:hover {\n      border-color: var(--spectrum-fieldbutton-border-color-error-hover, var(--spectrum-global-color-red-600));\n    }\n\n.spectrum-FieldButton.is-invalid:active,\n    .spectrum-FieldButton.is-invalid.is-selected {\n      border-color: var(--spectrum-fieldbutton-border-color-error-down, var(--spectrum-global-color-red-600));\n    }\n\n.spectrum-FieldButton.is-invalid.focus-ring,\n    .spectrum-FieldButton.is-invalid.is-focused {\n      border-color: var(--spectrum-fieldbutton-border-color-error-key-focus, var(--spectrum-alias-border-color-focus));\n      box-shadow: 0 0 0 var(--spectrum-button-primary-border-size-increase-key-focus, 1px) var(--spectrum-fieldbutton-border-color-error-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-FieldButton:disabled,\n  .spectrum-FieldButton.is-disabled {\n    background-color: var(--spectrum-fieldbutton-background-color-disabled, var(--spectrum-global-color-gray-200));\n    color: var(--spectrum-fieldbutton-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-FieldButton:disabled .spectrum-Icon, .spectrum-FieldButton.is-disabled .spectrum-Icon {\n      color: var(--spectrum-fieldbutton-icon-color-disabled, var(--spectrum-alias-icon-color-disabled));\n    }\n\n.spectrum-FieldButton--quiet {\n  color: var(--spectrum-fieldbutton-text-color, var(--spectrum-alias-text-color));\n  border-color: var(--spectrum-fieldbutton-quiet-border-color, var(--spectrum-alias-border-color-transparent));\n  background-color: var(--spectrum-fieldbutton-quiet-background-color, var(--spectrum-alias-background-color-transparent));\n}\n\n.spectrum-FieldButton--quiet:hover {\n    background-color: var(--spectrum-fieldbutton-quiet-background-color-hover, var(--spectrum-alias-background-color-transparent));\n    color: var(--spectrum-fieldbutton-text-color-hover, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-FieldButton--quiet.focus-ring,\n  .spectrum-FieldButton--quiet.is-focused {\n    background-color: var(--spectrum-fieldbutton-quiet-background-color-key-focus, var(--spectrum-alias-background-color-transparent));\n    box-shadow: 0 2px 0 0 var(--spectrum-fieldbutton-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n  }\n\n.spectrum-FieldButton--quiet.focus-ring.is-placeholder, .spectrum-FieldButton--quiet.is-focused.is-placeholder {\n      color: var(--spectrum-fieldbutton-quiet-placeholder-text-color-key-focus, var(--spectrum-alias-placeholder-text-color-hover));\n    }\n\n.spectrum-FieldButton--quiet:active,\n  .spectrum-FieldButton--quiet.is-selected {\n    background-color: var(--spectrum-fieldbutton-quiet-background-color-down, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-fieldbutton-quiet-border-color-down, var(--spectrum-alias-border-color-transparent));\n  }\n\n.spectrum-FieldButton--quiet:active.focus-ring,\n    .spectrum-FieldButton--quiet:active.is-focused,\n    .spectrum-FieldButton--quiet.is-selected.focus-ring,\n    .spectrum-FieldButton--quiet.is-selected.is-focused {\n      background-color: var(--spectrum-fieldbutton-quiet-background-color-key-focus, var(--spectrum-alias-background-color-transparent));\n      box-shadow: 0 2px 0 0 var(--spectrum-fieldbutton-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-FieldButton--quiet.is-invalid.focus-ring,\n    .spectrum-FieldButton--quiet.is-invalid.is-focused {\n      box-shadow: 0 2px 0 0 var(--spectrum-fieldbutton-border-color-error-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-FieldButton--quiet:disabled,\n  .spectrum-FieldButton--quiet.is-disabled {\n    background-color: var(--spectrum-fieldbutton-quiet-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    color: var(--spectrum-fieldbutton-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-Tool.is-selected .spectrum-Icon {\n      color: var(--spectrum-tool-icon-color-selected, var(--spectrum-alias-icon-color-selected));\n    }\n\n.spectrum-Tool.is-selected .spectrum-Tool-hold {\n      color: var(--spectrum-tool-hold-icon-color-selected, var(--spectrum-alias-icon-color-selected));\n    }\n\n.spectrum-Tool.is-selected:hover .spectrum-Icon {\n        color: var(--spectrum-tool-icon-color-selected-hover, var(--spectrum-alias-icon-color-selected-hover));\n      }\n\n.spectrum-Tool.is-selected:hover .spectrum-Tool-hold {\n        color: var(--spectrum-tool-hold-icon-color-selected-hover, var(--spectrum-alias-icon-color-selected-hover));\n      }\n\n.spectrum-Tool.is-selected:active .spectrum-Icon {\n        color: var(--spectrum-tool-icon-color-selected-down, var(--spectrum-alias-icon-color-selected-down));\n      }\n\n.spectrum-Tool.is-selected:active .spectrum-Tool-hold {\n        color: var(--spectrum-tool-hold-icon-color-selected-down, var(--spectrum-alias-icon-color-selected-down));\n      }\n\n.spectrum-Tool.is-selected.focus-ring .spectrum-Icon {\n        color: var(--spectrum-tool-icon-color-selected-key-focus, var(--spectrum-alias-icon-color-selected-focus));\n      }\n\n.spectrum-Tool.is-selected.focus-ring .spectrum-Tool-hold {\n        color: var(--spectrum-tool-hold-icon-color-selected-key-focus, var(--spectrum-alias-icon-color-selected-focus));\n      }\n\n.spectrum-Tool.is-selected:disabled,\n    .spectrum-Tool.is-selected.is-disabled {\n      background-color: var(--spectrum-tool-background-color-selected-disabled, var(--spectrum-alias-background-color-transparent));\n      border-color: var(--spectrum-tool-border-color-selected-disabled, var(--spectrum-alias-border-color-transparent));\n    }\n\n.spectrum-Tool.is-selected:disabled .spectrum-Icon, .spectrum-Tool.is-selected.is-disabled .spectrum-Icon {\n        color: var(--spectrum-tool-icon-color-selected-disabled, var(--spectrum-alias-icon-color-disabled));\n      }\n\n.spectrum-Tool.is-selected:disabled .spectrum-Tool-hold, .spectrum-Tool.is-selected.is-disabled .spectrum-Tool-hold {\n        color: var(--spectrum-tool-hold-icon-color-disabled, var(--spectrum-alias-icon-color-disabled));\n      }\n\n.spectrum-Tool .spectrum-Tool-hold {\n    color: var(--spectrum-tool-hold-icon-color, var(--spectrum-alias-icon-color));\n  }\n\n.spectrum-Tool:hover .spectrum-Tool-hold {\n      color: var(--spectrum-tool-hold-icon-color-hover, var(--spectrum-alias-icon-color-hover));\n    }\n\n.spectrum-Tool:active {\n    background-color: var(--spectrum-tool-background-color-down, var(--spectrum-alias-background-color-transparent));\n    border-color: var(--spectrum-tool-border-color-down, var(--spectrum-alias-border-color-transparent));\n  }\n\n.spectrum-Tool:active .spectrum-Tool-hold {\n      color: var(--spectrum-tool-hold-icon-color-down, var(--spectrum-alias-icon-color-down));\n    }\n\n.spectrum-Tool.focus-ring .spectrum-Tool-hold {\n      color: var(--spectrum-tool-hold-icon-color-key-focus, var(--spectrum-alias-icon-color-hover));\n    }\n\n.spectrum-Tool.is-disabled .spectrum-Tool-hold, .spectrum-Tool:disabled .spectrum-Tool-hold {\n      color: var(--spectrum-tool-hold-icon-color-disabled, var(--spectrum-alias-icon-color-disabled));\n    }\n\n.spectrum-ButtonGroup {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.spectrum-ButtonGroup .spectrum-Button,\n  .spectrum-ButtonGroup .spectrum-ActionButton,\n  .spectrum-ButtonGroup .spectrum-Tool {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n  }\n\n.spectrum-ButtonGroup > .spectrum-Rule--vertical {\n    height: auto;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n  }\n\n.spectrum-ButtonGroup .spectrum-Button + .spectrum-Button {\n    margin-left: var(--spectrum-buttongroup-button-gap-x, var(--spectrum-global-dimension-static-size-200));\n  }\n\n.spectrum-ButtonGroup .spectrum-ActionButton + .spectrum-ActionButton {\n    margin-left: var(--spectrum-actionbuttongroup-text-button-gap-x, var(--spectrum-global-dimension-size-100));\n  }\n\n.spectrum-ButtonGroup .spectrum-Tool + .spectrum-Tool {\n    margin-left: var(--spectrum-toolgroup-text-button-gap-x, var(--spectrum-global-dimension-size-100));\n  }\n\n.spectrum-ButtonGroup--vertical {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.spectrum-ButtonGroup--vertical .spectrum-ActionButton-label {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    text-align: left;\n  }\n\n.spectrum-ButtonGroup--vertical .spectrum-Button + .spectrum-Button {\n    margin-top: var(--spectrum-buttongroup-button-gap-y, var(--spectrum-global-dimension-static-size-200));\n    margin-left: 0;\n  }\n\n.spectrum-ButtonGroup--vertical .spectrum-ActionButton + .spectrum-ActionButton {\n    margin-top: var(--spectrum-actionbuttongroup-text-button-gap-y, var(--spectrum-global-dimension-size-100));\n    margin-left: 0;\n  }\n\n.spectrum-ButtonGroup--vertical .spectrum-Tool + .spectrum-Tool {\n    margin-top: var(--spectrum-toolgroup-text-button-gap-y, var(--spectrum-global-dimension-size-100));\n    margin-left: 0;\n  }\n\n.spectrum-SideNav {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.spectrum-SideNav-item {\n  list-style-type: none;\n\n  margin: var(--spectrum-sidenav-item-gap, var(--spectrum-global-dimension-size-50)) 0;\n}\n\n.spectrum-SideNav-itemLink {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: left;\n      justify-content: left;\n  box-sizing: border-box;\n\n  width: 100%;\n  min-height: var(--spectrum-sidenav-item-height, var(--spectrum-alias-single-line-height));\n\n  padding: var(--spectrum-global-dimension-size-65) var(--spectrum-sidenav-item-padding-x, var(--spectrum-global-dimension-size-150));\n\n  border-radius: var(--spectrum-sidenav-item-border-radius, var(--spectrum-alias-border-radius-regular));\n\n  font-size: var(--spectrum-sidenav-item-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-sidenav-item-font-weight, var(--spectrum-global-font-weight-regular));\n  font-style: normal;\n  text-decoration: none;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n\n  cursor: pointer;\n\n  transition: background-color var(--spectrum-global-animation-duration-100, 130ms) ease-out,\n              color var(--spectrum-global-animation-duration-100, 130ms) ease-out;\n}\n\n.spectrum-SideNav-itemLink:focus {\n    outline: none;\n  }\n\n.spectrum-SideNav-itemLink.focus-ring::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    border: var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick)) solid transparent;\n    border-radius: var(--spectrum-sidenav-item-border-radius, var(--spectrum-alias-border-radius-regular));\n  }\n\n.spectrum-SideNav-itemLink .spectrum-SideNav-itemIcon {\n    margin-right: var(--spectrum-sidenav-icon-gap, var(--spectrum-global-dimension-size-100));\n  }\n\n.spectrum-SideNav-heading {\n  height: var(--spectrum-sidenav-header-height, var(--spectrum-alias-single-line-height));\n  line-height: var(--spectrum-sidenav-header-height, var(--spectrum-alias-single-line-height));\n\n  margin: var(--spectrum-sidenav-header-gap-top, var(--spectrum-global-dimension-size-200)) 0 var(--spectrum-sidenav-header-gap-bottom, var(--spectrum-global-dimension-size-50)) 0;\n  padding: 0 var(--spectrum-sidenav-header-padding-x, var(--spectrum-global-dimension-size-150));\n\n  border-radius: var(--spectrum-sidenav-header-border-radius, var(--spectrum-alias-border-radius-regular));\n\n  font-size: var(--spectrum-sidenav-header-text-size, var(--spectrum-global-dimension-font-size-50));\n  font-weight: var(--spectrum-sidenav-header-font-weight, var(--spectrum-global-font-weight-medium));\n  font-style: normal;\n  letter-spacing: var(--spectrum-sidenav-header-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));\n\n  text-transform: uppercase;\n}\n\n.spectrum-SideNav--multiLevel .spectrum-SideNav-itemLink {\n    font-weight: var(--spectrum-sidenav-multilevel-main-item-font-weight, var(--spectrum-global-font-weight-bold));\n  }\n\n.spectrum-SideNav--multiLevel .spectrum-SideNav {\n    margin: 0;\n    padding: 0;\n  }\n\n.spectrum-SideNav--multiLevel .spectrum-SideNav .spectrum-SideNav-itemLink {\n      font-weight: var(--spectrum-sidenav-item-font-weight, var(--spectrum-global-font-weight-regular));\n\n      padding-left: calc(var(--spectrum-sidenav-multilevel-item-indentation-level1, var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x, var(--spectrum-global-dimension-size-150)));\n    }\n\n.spectrum-SideNav--multiLevel .spectrum-SideNav .spectrum-SideNav .spectrum-SideNav-itemLink {\n        padding-left: calc(var(--spectrum-sidenav-multilevel-item-indentation-level2, var(--spectrum-global-dimension-size-300)) + var(--spectrum-sidenav-item-padding-x, var(--spectrum-global-dimension-size-150)));\n      }\n\n.spectrum-SideNav-item.is-selected > .spectrum-SideNav-itemLink {\n      color: var(--spectrum-sidenav-item-text-color-selected, var(--spectrum-alias-text-color-hover));\n      background-color: var(--spectrum-sidenav-item-background-color-selected, var(--spectrum-alias-highlight-hover));\n    }\n\n.spectrum-SideNav-item .is-active > .spectrum-SideNav-itemLink {\n      background-color: var(--spectrum-sidenav-item-background-color-down, var(--spectrum-alias-highlight-hover));\n    }\n\n.spectrum-SideNav-item.is-disabled .spectrum-SideNav-itemLink {\n      background-color: var(--spectrum-sidenav-item-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n      color: var(--spectrum-sidenav-item-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n\n      cursor: default;\n      pointer-events: none;\n    }\n\n.spectrum-SideNav-itemLink {\n  background-color: var(--spectrum-sidenav-item-background-color, var(--spectrum-alias-background-color-transparent));\n  color: var(--spectrum-sidenav-item-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-SideNav-itemLink:hover {\n    background-color: var(--spectrum-sidenav-item-background-color-hover, var(--spectrum-alias-highlight-hover));\n    color: var(--spectrum-sidenav-item-text-color-hover, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-SideNav-itemLink:active {\n    background-color: var(--spectrum-sidenav-item-background-color-down, var(--spectrum-alias-highlight-hover));\n  }\n\n.spectrum-SideNav-itemLink.focus-ring {\n    background-color: var(--spectrum-sidenav-item-background-color-key-focus, var(--spectrum-alias-highlight-hover));\n    color: var(--spectrum-sidenav-item-text-color-key-focus, var(--spectrum-alias-text-color-hover));\n  }\n\n.spectrum-SideNav-itemLink.focus-ring::before {\n      border-color: var(--spectrum-sidenav-item-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-SideNav-heading {\n  color: var(--spectrum-sidenav-header-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum {\n--Gray33: #ffffff;\n--Gray67: #fafbfc;\n--Gray100: #f3f5f6;\n--Gray200: #e8ebed;\n--Gray300: #dde2e5;\n--Gray400: #c3cbd2;\n--Gray500: #a9b5be;\n--Gray600: #7f909e;\n--Gray700: #5c7384;\n--Gray800: #334e62;\n--Gray900: #1e2e39;\n--Blue100: #6c961d;\n--Blue200: #007b63;\n--Blue300: #005772;\n--Blue400: #1f3354;\n}\n\n@font-face {\n  font-family: 'icomoon';\n  src:  url('./icons/fonts/icomoon.eot?s1jly5');\n  src:  url('./icons/fonts/icomoon.eot?s1jly5#iefix') format('embedded-opentype'),\n    url('./icons/fonts/icomoon.ttf?s1jly5') format('truetype'),\n    url('./icons/fonts/icomoon.woff?s1jly5') format('woff'),\n    url('./icons/fonts/icomoon.svg?s1jly5#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-menu:before {\n  content: \"\\e905\";\n}\n\n.icon-file:before {\n  content: \"\\e904\";\n}\n\n.icon-code:before {\n  content: \"\\e903\";\n}\n\n.icon-view:before {\n  content: \"\\e900\";\n}\n\n.icon-search:before {\n  content: \"\\e901\";\n}\n\n.icon-download:before {\n  content: \"\\e902\";\n}\n\n:root {\n  --cds-editor-header-background-color: var(--spectrum-global-color-gray-500);\n}\n\n.spectrum--light {\n  /* Reassign spectrum color variables with our own generated colors */\n  --spectrum-global-color-gray-50: var(--Gray33);\n  --spectrum-global-color-gray-75: var(--Gray67);\n  --spectrum-global-color-gray-100: var(--Gray100);\n  --spectrum-global-color-gray-200: var(--Gray200);\n  --spectrum-global-color-gray-300: var(--Gray300);\n  --spectrum-global-color-gray-400: var(--Gray400);\n  --spectrum-global-color-gray-500: var(--Gray500);\n  --spectrum-global-color-gray-500: var(--Gray500);\n  --spectrum-global-color-gray-700: var(--Gray700);\n  --spectrum-global-color-gray-800: var(--Gray800);\n  --spectrum-global-color-gray-900: var(--Gray900);\n\n  --spectrum-global-color-blue-400: var(--Blue100);\n  --spectrum-global-color-blue-500: var(--Blue200);\n  --spectrum-global-color-blue-600: var(--Blue300);\n  --spectrum-global-color-blue-700: var(--Blue400);\n\n  --spectrum-semantic-cta-color-background-default: var(--spectrum-global-color-blue-600);\n  --spectrum-semantic-cta-color-background-hover: var(--spectrum-global-color-blue-700);\n  --spectrum-semantic-cta-color-background-down: var(--spectrum-global-color-blue-700);\n  --spectrum-semantic-cta-color-background-key-focus: var(--spectrum-global-color-blue-600);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  margin: 0;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n.cds-Editor {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.cds-Editor-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n\n  background-color: var(--cds-editor-header-background-color);\n}\n\n.cds-Editor-content {\n  flex: 1;\n  overflow-x: auto;\n}\n\n.cds-Editor-header {\n  background: var(--spectrum-global-color-gray-75);\n}\n\n.cds-Editor-header:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: var(--spectrum-global-color-gray-200);\n}\n\n.cds-Editor-JSON {\n  padding: 8px 24px;\n}\n\n.cds-Editor-title,\n.cds-Editor-actions {\n  padding: 8px 12px;\n}\n\n.cds-Editor-title {\n  flex: 1;\n  padding-left: 16px;\n}\n\n.cds-Logo {\n  height: 56px;\n}\n\n.cds-Logo-Type {\n  fill: #21385E;\n}\n\n.spectrum-Site-title {\n  font-size: 48px;\n  margin-left: 12px;\n}\n\n.cds-Ribbon {\n  position: fixed;\n  top: 0;\n  right: 0;\n}\n\n.cds-Footer {\n  margin-top: 120px;\n}\n\n.cds-Sidebar {\n  z-index: 1000;\n  min-width: 235px;\n  border-right: 1px solid var(--spectrum-global-color-gray-200);\n}\n\n.spectrum-ActionButton .icon {\n  font-size: 24px;\n}\n\n.spectrum-Button--cta {\n\n}\n\n.spectrum-Button .icon {\n  font-size: 18px;\n  margin-right: 8px;\n}\n\n.cds-Editor-menuToggle {\n  display: none;\n}\n\n.spectrum-Site-overlay {\n  z-index: 999;\n}\n\n.cds-Error {\n  display: inline-block;\n  margin: 24px;\n  padding: 8px 16px;\n  background: var(--spectrum-semantic-notice-color-background);\n  border-radius: var(--spectrum-alias-border-radius-medium);\n  color: white;\n}\n\n.spectrum-Heading {\n  font-family: aglet-slab, sans-serif;\n  font-weight: 500;\n  color: var(--spectrum-global-color-blue-500);\n}\n\n.spectrum-SideNav-itemLink {\n  font-family: aglet-slab, sans-serif;\n  font-weight: 500;\n}\n\n.spectrum-Body {\n  font-family: aglet-sans, sans-serif;\n}\n\n.spectrum-Site-hero .spectrum-Heading--L {\n  margin-top: calc( 2.5 * var(--spectrum-heading-l-margin-top, var(--spectrum-alias-heading-l-margin-top)));\n}\n\n.spectrum-Link {\n  text-decoration: underline;\n}\n\n.spectrum-Link--silent {\n  text-decoration: none;\n}\n\ndiv.spectrum-SideNav-itemLink {\n  cursor: default;\n}\n\ndiv.spectrum-SideNav-itemLink:hover {\n  background: transparent;\n}\n\n.cds-Sources-list {\n  padding: 0;\n  margin: 48px 24px 0 24px;\n}\n\n/* Ratings */\n\n.cds-ReportCard {\n  display: flex;\n  flex-direction: row;\n  margin: 16px 0 32px 0;\n}\n\n.cds-ReportCard h2.spectrum-Heading--L {\n  margin-top: 0;\n}\n\n.cds-ReportCard-grade {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n\n  width: 78px;\n  height: 78px;\n\n  margin-right: 16px;\n\n  border: 4px solid transparent;\n  border-radius: 100%;\n\n  font-family: aglet-slab, sans-serif;\n  font-size: 48px;\n\n  --b-color: rgb(131, 154, 20);\n}\n\n.cds-ReportCard-grade--A {\n  color: green;\n  border-color: green;\n}\n\n.cds-ReportCard-grade--B {\n  color: var(--b-color);\n  border-color: var(--b-color);\n}\n\n.cds-ReportCard-grade--C {\n  color: orange;\n  border-color: orange;\n}\n\n.cds-ReportCard-grade--D,\n.cds-ReportCard-grade--F {\n  color: red;\n  border-color: red;\n}\n\n.cds-ReportCard-criteria {\n  margin-top: 12px;\n}\n\n.cds-ReportCard-plusMinus {\n  position: absolute;\n  right: 4px;\n  top: 6px;\n  font-size: 36px;\n}\n\n.cds-ReportCard-contributorName {\n  margin-bottom: 0 !important;\n}\n\n/* Map */\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n.cds-Popup {\n  margin: -10px 0;\n}\n\n.cds-Popup-table {\n  margin: auto;\n  border-collapse: collapse;\n}\n\n.cds-Popup-table th {\n  text-align: right;\n  padding-right: 8px;\n}\n\n@media screen and (max-width: 960px) {\n  .is-editing .cds-SiteHeader {\n    display: none;\n  }\n  .cds-Editor-menuToggle {\n    display: block;\n  }\n  .cds-Sources-list {\n    margin: 48px 12px 0 12px;\n  }\n\n  .spectrum-Site-content {\n    /* fix: header scrolls off */\n    max-height: calc(100% - 48px);\n  }\n}\n";
  styleInject(css_248z);

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var deg2rad = Math.PI / 180;
  var rad2deg = 180 / Math.PI;

  // https://observablehq.com/@mbostock/lab-and-rgb
  var K = 18,
      Xn = 0.96422,
      Yn = 1,
      Zn = 0.82521,
      t0 = 4 / 29,
      t1 = 6 / 29,
      t2 = 3 * t1 * t1,
      t3 = t1 * t1 * t1;

  function labConvert(o) {
    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) return hcl2lab(o);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = rgb2lrgb(o.r),
        g = rgb2lrgb(o.g),
        b = rgb2lrgb(o.b),
        y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
    if (r === g && g === b) x = z = y; else {
      x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
      z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
  }

  function lab(l, a, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
  }

  function Lab(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Lab, lab, extend(Color, {
    brighter: function(k) {
      return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function(k) {
      return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function() {
      var y = (this.l + 16) / 116,
          x = isNaN(this.a) ? y : y + this.a / 500,
          z = isNaN(this.b) ? y : y - this.b / 200;
      x = Xn * lab2xyz(x);
      y = Yn * lab2xyz(y);
      z = Zn * lab2xyz(z);
      return new Rgb(
        lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
        lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
        lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
        this.opacity
      );
    }
  }));

  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }

  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }

  function lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
  }

  function rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  }

  function hclConvert(o) {
    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab)) o = labConvert(o);
    if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * rad2deg;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
  }

  function hcl(h, c, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
  }

  function Hcl(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
  }

  function hcl2lab(o) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }

  define(Hcl, hcl, extend(Color, {
    brighter: function(k) {
      return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
    },
    darker: function(k) {
      return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function() {
      return hcl2lab(this).rgb();
    }
  }));

  function constant(x) {
    return function() {
      return x;
    };
  }

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
  }

  var rgb$1 = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;

    return rgb$1;
  })(1);

  function numberArray(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0,
        c = b.slice(),
        i;
    return function(t) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }

  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function genericArray(a, b) {
    var nb = b ? b.length : 0,
        na = a ? Math.min(nb, a.length) : 0,
        x = new Array(na),
        c = new Array(nb),
        i;

    for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];

    return function(t) {
      for (i = 0; i < na; ++i) c[i] = x[i](t);
      return c;
    };
  }

  function date(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  function object(a, b) {
    var i = {},
        c = {},
        k;

    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};

    for (k in b) {
      if (k in a) {
        i[k] = interpolate(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }

    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function string(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  function interpolate(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant(b)
        : (t === "number" ? interpolateNumber
        : t === "string" ? ((c = color(b)) ? (b = c, rgb$1) : string)
        : b instanceof color ? rgb$1
        : b instanceof Date ? date
        : isNumberArray(b) ? numberArray
        : Array.isArray(b) ? genericArray
        : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
        : interpolateNumber)(a, b);
  }

  function interpolateRound(a, b) {
    return a = +a, b = +b, function(t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  function hcl$1(hue) {
    return function(start, end) {
      var h = hue((start = hcl(start)).h, (end = hcl(end)).h),
          c = nogamma(start.c, end.c),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.c = c(t);
        start.l = l(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }
  }

  var hcl$2 = hcl$1(hue);

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function bisector(compare) {
    if (compare.length === 1) compare = ascendingComparator(compare);
    return {
      left: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1;
          else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid;
          else lo = mid + 1;
        }
        return lo;
      }
    };
  }

  function ascendingComparator(f) {
    return function(d, x) {
      return ascending(f(d), x);
    };
  }

  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;

  var e10 = Math.sqrt(50),
      e5 = Math.sqrt(10),
      e2 = Math.sqrt(2);

  function ticks(start, stop, count) {
    var reverse,
        i = -1,
        n,
        ticks,
        step;

    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [start];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

    if (step > 0) {
      start = Math.ceil(start / step);
      stop = Math.floor(stop / step);
      ticks = new Array(n = Math.ceil(stop - start + 1));
      while (++i < n) ticks[i] = (start + i) * step;
    } else {
      start = Math.floor(start * step);
      stop = Math.ceil(stop * step);
      ticks = new Array(n = Math.ceil(start - stop + 1));
      while (++i < n) ticks[i] = (start - i) / step;
    }

    if (reverse) ticks.reverse();

    return ticks;
  }

  function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count),
        power = Math.floor(Math.log(step) / Math.LN10),
        error = step / Math.pow(10, power);
    return power >= 0
        ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
        : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
  }

  function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count),
        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
        error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
  }

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0: break;
      case 1: this.range(domain); break;
      default: this.range(range).domain(domain); break;
    }
    return this;
  }

  function constant$1(x) {
    return function() {
      return x;
    };
  }

  function number(x) {
    return +x;
  }

  var unit = [0, 1];

  function identity(x) {
    return x;
  }

  function normalize(a, b) {
    return (b -= (a = +a))
        ? function(x) { return (x - a) / b; }
        : constant$1(isNaN(b) ? NaN : 0.5);
  }

  function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) { return Math.max(a, Math.min(b, x)); };
  }

  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) { return r0(d0(x)); };
  }

  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1,
        d = new Array(j),
        r = new Array(j),
        i = -1;

    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }

    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }

    return function(x) {
      var i = bisectRight(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }

  function copy(source, target) {
    return target
        .domain(source.domain())
        .range(source.range())
        .interpolate(source.interpolate())
        .clamp(source.clamp())
        .unknown(source.unknown());
  }

  function transformer() {
    var domain = unit,
        range = unit,
        interpolate$1 = interpolate,
        transform,
        untransform,
        unknown,
        clamp = identity,
        piecewise,
        output,
        input;

    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }

    function scale(x) {
      return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
    }

    scale.invert = function(y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };

    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
    };

    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };

    scale.rangeRound = function(_) {
      return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
    };

    scale.clamp = function(_) {
      return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };

    scale.interpolate = function(_) {
      return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
    };

    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };

    return function(t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }

  function continuous() {
    return transformer()(identity, identity);
  }

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimal(1.23) returns ["123", 0].
  function formatDecimal(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  }

  function exponent(x) {
    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
  }

  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }

      return t.reverse().join(thousands);
    };
  }

  function formatNumerals(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }

  formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
  }

  FormatSpecifier.prototype.toString = function() {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width === undefined ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
  };

  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".": i0 = i1 = i; break;
        case "0": if (i0 === 0) i0 = i; i1 = i; break;
        default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  var prefixExponent;

  function formatPrefixAuto(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  }

  function formatRounded(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  var formatTypes = {
    "%": function(x, p) { return (x * 100).toFixed(p); },
    "b": function(x) { return Math.round(x).toString(2); },
    "c": function(x) { return x + ""; },
    "d": function(x) { return Math.round(x).toString(10); },
    "e": function(x, p) { return x.toExponential(p); },
    "f": function(x, p) { return x.toFixed(p); },
    "g": function(x, p) { return x.toPrecision(p); },
    "o": function(x) { return Math.round(x).toString(8); },
    "p": function(x, p) { return formatRounded(x * 100, p); },
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
    "x": function(x) { return Math.round(x).toString(16); }
  };

  function identity$1(x) {
    return x;
  }

  var map = Array.prototype.map,
      prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
        currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
        currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
        decimal = locale.decimal === undefined ? "." : locale.decimal + "",
        numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map.call(locale.numerals, String)),
        percent = locale.percent === undefined ? "%" : locale.percent + "",
        minus = locale.minus === undefined ? "-" : locale.minus + "",
        nan = locale.nan === undefined ? "NaN" : locale.nan + "";

    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);

      var fill = specifier.fill,
          align = specifier.align,
          sign = specifier.sign,
          symbol = specifier.symbol,
          zero = specifier.zero,
          width = specifier.width,
          comma = specifier.comma,
          precision = specifier.precision,
          trim = specifier.trim,
          type = specifier.type;

      // The "n" type is an alias for ",g".
      if (type === "n") comma = true, type = "g";

      // The "" type, and any invalid type, is an alias for ".12~g".
      else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
          suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
          maybeSuffix = /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision === undefined ? 6
          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
          : Math.max(0, Math.min(20, precision));

      function format(value) {
        var valuePrefix = prefix,
            valueSuffix = suffix,
            i, n, c;

        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Perform the initial formatting.
          var valueNegative = value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);

          // If a negative value rounds to zero during formatting, treat as positive.
          if (valueNegative && +value === 0) valueNegative = false;

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;

          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
            padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<": value = valuePrefix + value + valueSuffix + padding; break;
          case "=": value = valuePrefix + padding + value + valueSuffix; break;
          case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
          default: value = padding + valuePrefix + value + valueSuffix; break;
        }

        return numerals(value);
      }

      format.toString = function() {
        return specifier + "";
      };

      return format;
    }

    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
          k = Math.pow(10, -e),
          prefix = prefixes[8 + e / 3];
      return function(value) {
        return f(k * value) + prefix;
      };
    }

    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }

  var locale;
  var format;
  var formatPrefix;

  defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    minus: "-"
  });

  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }

  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }

  function precisionRound(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
  }

  function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count),
        precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  function linearish(scale) {
    var domain = scale.domain;

    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };

    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };

    scale.nice = function(count) {
      if (count == null) count = 10;

      var d = domain(),
          i0 = 0,
          i1 = d.length - 1,
          start = d[i0],
          stop = d[i1],
          step;

      if (stop < start) {
        step = start, start = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }

      step = tickIncrement(start, stop, count);

      if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
        step = tickIncrement(start, stop, count);
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
        step = tickIncrement(start, stop, count);
      }

      if (step > 0) {
        d[i0] = Math.floor(start / step) * step;
        d[i1] = Math.ceil(stop / step) * step;
        domain(d);
      } else if (step < 0) {
        d[i0] = Math.ceil(start * step) / step;
        d[i1] = Math.floor(stop * step) / step;
        domain(d);
      }

      return scale;
    };

    return scale;
  }

  function linear$1() {
    var scale = continuous();

    scale.copy = function() {
      return copy(scale, linear$1());
    };

    initRange.apply(scale, arguments);

    return linearish(scale);
  }

  /* global XMLHttpRequest */

  const url = function(urlToFetch, callback) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', callback);
    req.open('GET', urlToFetch);
    req.send();
    return req;
  };

  const json = function(urlToFetch, callback) {
    return url(urlToFetch, function() {
      let obj;
      try {
        obj = JSON.parse(this.responseText);
      } catch (err) {
        console.error('Failed to parse JSON from %s: %s', urlToFetch, err);
      }
      callback(obj);
    });
  };

  const normalizePercent = function(min, max, input) {
    const range = max - min;
    const correctedStartValue = input - min;
    const percentage = (correctedStartValue * 100) / range;
    return percentage / 100;
  };

  // Via https://math.stackexchange.com/a/57510
  const adjustTanh = function(value, a = 0, b = 3) {
    return Math.min(Math.tanh(value + a) * b, 1);
  };

  const getRatio = function(fractional, total) {
    if (fractional === 0) {
      return '-';
    }
    return `1 : ${Math.round(total / fractional).toLocaleString()}`;
  };

  const getGrade = function(rating) {
    rating *= 200;

    if (rating >= 97) {
      return 'A+';
    }
    if (rating >= 93) {
      return 'A';
    }
    if (rating >= 90) {
      return 'A-';
    }
    if (rating >= 87) {
      return 'B+';
    }
    if (rating >= 83) {
      return 'B';
    }
    if (rating >= 80) {
      return 'B-';
    }
    if (rating >= 77) {
      return 'C+';
    }
    if (rating >= 73) {
      return 'C';
    }
    if (rating >= 70) {
      return 'C-';
    }
    if (rating >= 67) {
      return 'D+';
    }
    if (rating >= 63) {
      return 'D';
    }
    if (rating >= 60) {
      return 'D';
    }
    if (rating >= 57) {
      return 'F+';
    }
    if (rating >= 53) {
      return 'F';
    }
    if (rating >= 50) {
      return 'F';
    }
    return 'F-';
  };

  // eslint-disable-next-line import/prefer-default-export
  const getLightness = function(c) {
    return lab(c).l;
  };

  const isCountry = function(location) {
    return location && location.country && !location.state && !location.county && !location.city;
  };

  const isState = function(location) {
    return location && location.state && !location.county && !location.city;
  };

  const isCounty = function(location) {
    return location && location.county && !location.city;
  };

  const isCity = function(location) {
    return location && location.city;
  };

  const getLocationGranularityName = function(location) {
    if (isCountry(location)) {
      return 'country';
    }
    if (isState(location)) {
      return 'state';
    }
    if (isCounty(location)) {
      return 'county';
    }
    if (isCity(location)) {
      return 'city';
    }
    return 'none';
  };

  /*
    Get the full name of a location
  */
  const getName = function(location) {
    let name = '';
    let sep = '';
    if (location.city) {
      name += location.city;
      sep = ', ';
    }
    if (location.county) {
      name += sep + location.county;
      sep = ', ';
    }
    if (location.state) {
      name += sep + location.state;
      sep = ', ';
    }
    if (location.country) {
      name += sep + location.country;
      sep = ', ';
    }
    return name;
  };

  /* globals mapboxgl */

  mapboxgl.accessToken = 'pk.eyJ1IjoibGF6ZCIsImEiOiJjazd3a3VoOG4wM2RhM29rYnF1MDJ2NnZrIn0.uPYVImW8AVA71unqE8D8Nw';

  const data = {};

  let map$1;

  const noCasesColor = '#faffef';
  const noPopulationDataColor = '#ffffff';

  const outlineColorHighlight = 'rgb(0,0,0)';
  const outlineColor = 'rgba(0, 0, 0, 0.3)';

  const choroplethColors = {
    stoplight: ['#eeffcd', '#b4ffa5', '#ffff00', '#ff7f00', '#ff0000'],
    yellowOrangePurple: ['#faffef', '#f3fac1', '#f6f191', '#ffe15d', '#fec327', '#ff9b00', '#fe7000', '#fa4d13', '#c52155', '#842e79'],
    heat: ['#FFFFFF', '#ffff5e', '#ffe70c', '#fead0a', '#fd6f08', '#fd2907', '#fd0407'],
    peach: ['rgb(253,222,166)', 'rgb(255,188,134)', 'rgb(249,152,133)', 'rgb(232,110,129)', 'rgb(224,88,136)'],
    pink: ['rgb(255, 244, 221)', 'rgb(255, 221, 215)', 'rgb(255, 197, 210)', 'rgb(254, 174, 203)', 'rgb(250, 150, 196)', 'rgb(245, 126, 189)', 'rgb(239, 100, 181)', 'rgb(232, 70, 173)', 'rgb(210, 56, 161)', 'rgb(187, 46, 150)', 'rgb(163, 36, 140)', 'rgb(138, 27, 131)', 'rgb(113, 22, 124)', 'rgb(86, 15, 116)', 'rgb(55, 11, 110)', 'rgb(0, 9, 104)'],
    viridis: ['#fde725', '#d8e219', '#addc30', '#84d44b', '#5ec962', '#3fbc73', '#28ae80', '#1fa088', '#21918c', '#26828e', '#2c728e', '#33638d', '#3b528b', '#424086', '#472d7b', '#48186a'],
    magma: ['#fcfdbf', '#fde2a3', '#fec488', '#fea772', '#fc8961', '#f56b5c', '#e75263', '#d0416f', '#b73779', '#9c2e7f', '#832681', '#6a1c81', '#51127c', '#36106b', '#1d1147', '#0a0822']
  };

  const choroplethColor = 'yellowOrangePurple';

  let domainArray = [];
  const colorsArray = choroplethColors[choroplethColor];
  const lightnessArray = colorsArray.map(key => 1 - getLightness(key) / 100);

  const max = Math.max(...lightnessArray);
  const min = Math.min(...lightnessArray);

  for (let i = 0; i < colorsArray.length; i++) {
    const l = lightnessArray[i]; // lightness value

    const y = normalizePercent(min, max, l);
    domainArray.push(Number(y.toFixed(2)));
  }

  domainArray = domainArray.sort();

  const fill = linear$1()
    .domain(domainArray)
    .range(colorsArray)
    .interpolate(hcl$2);

  const choroplethStyle = 'pureRatio';

  const type = 'cases';

  const choroplethStyles = {
    pureRatio(location, locationData, type, rank, totalRanked, worstAffectedPercent) {
      // Color based on how bad it is, relative to the worst place
      const affectedPercent = locationData[type] / location.population;
      const percentRatio = affectedPercent / worstAffectedPercent;

      return adjustTanh(percentRatio);
    },
    rankAdjustedRatio(location, locationData, type, rank, totalRanked, worstAffectedPercent) {
      // Color based on rank
      const rankRatio = (totalRanked - rank) / totalRanked;

      // Color based on how bad it is, relative to the worst place
      const percentRatio = locationData[type] / location.population / worstAffectedPercent;

      const ratio = (rankRatio * 0.75 + percentRatio) / 1.75;

      return ratio;
    },
    rankRatio(location, locationData, type, rank, totalRanked) {
      // Color based on rank
      const rankRatio = (totalRanked - rank) / totalRanked;

      return rankRatio;
    }
  };

  function getLocationsByRank(currentData, type, min = 3) {
    let rankedItems = [];

    for (const locationId of Object.keys(currentData)) {
      const locationData = currentData[locationId];
      const location = data.locations[locationId];

      if (location.population && locationData[type] >= min) {
        rankedItems.push({ locationId, rate: locationData[type] / location.population });
      }
    }

    rankedItems = rankedItems.sort((a, b) => {
      if (a.rate === b.rate) {
        return 0;
      }
      if (a.rate > b.rate) {
        return -1;
      }

      return 1;
    });

    return rankedItems.map(rankedItem => data.locations[rankedItem.locationId]);
  }

  function populateMap() {
    const currentDate = Object.keys(data.timeseries).pop();
    const currentData = data.timeseries[currentDate];

    const locationsByRank = getLocationsByRank(currentData, type, 1);

    let foundFeatures = 0;
    let worstAffectedPercent = 0;
    data.locations.forEach(function(location, index) {
      // Calculate worst affected percent
      if (location.population) {
        const locationData = currentData[index];
        if (locationData) {
          const infectionPercent = locationData.cases / location.population;
          if (infectionPercent > worstAffectedPercent) {
            worstAffectedPercent = infectionPercent;
          }
        }
      }
      // Associated the feature with the location
      if (location.featureId) {
        const feature = data.features.features[location.featureId];
        if (feature) {
          foundFeatures++;
          feature.properties.locationId = index;
        }
      }
    });

    data.features.features.forEach(function(feature, index) {
      feature.id = index;
      let color = null;
      const { locationId } = feature.properties;
      const location = data.locations[locationId];
      if (location && location.population) {
        const locationData = currentData[locationId];
        if (locationData) {
          if (locationData.cases === 0) {
            color = noCasesColor;
          } else {
            const rank = locationsByRank.indexOf(location);
            const scaledColorValue = choroplethStyles[choroplethStyle](location, locationData, type, rank, locationsByRank.length, worstAffectedPercent);
            color = fill(scaledColorValue);
          }
        }
      }

      feature.properties.color = color || noPopulationDataColor;
    });

    console.log('Found locations for %d of %d features', foundFeatures, data.features.features.length);

    function popupTemplate(location, locationData) {
      let htmlString = `<div class="cds-Popup">`;
      htmlString += `<h6 class="spectrum-Heading spectrum-Heading--XXS">${location.name}</h6>`;
      htmlString += `<table class="cds-Popup-table spectrum-Body spectrum-Body--XS"><tbody>`;
      if (location.population !== undefined) {
        htmlString += `<tr><th>Population:</th><td>${location.population.toLocaleString()}</td></tr>`;
      } else {
        htmlString += `<tr><th colspan="2">NO POPULATION DATA</th></tr>`;
      }
      if (location.population && locationData.cases) {
        htmlString += `<tr><th>Infected:</th><td>${getRatio(locationData.cases, location.population)}</td></tr>`;
      }
      if (locationData.cases !== undefined) {
        htmlString += `<tr><th>Cases:</th><td>${locationData.cases.toLocaleString()}</td></tr>`;
      }
      if (locationData.deaths !== undefined) {
        htmlString += `<tr><th>Deaths:</th><td>${locationData.deaths.toLocaleString()}</td></tr>`;
      }
      if (locationData.recovered !== undefined) {
        htmlString += `<tr><th>Recovered:</th><td>${locationData.recovered.toLocaleString()}</td></tr>`;
      }
      if (locationData.active !== locationData.cases) {
        htmlString += `<tr><th>Active:</th><td>${locationData.active.toLocaleString()}</td></tr>`;
      }
      htmlString += `</tbody></table>`;
      htmlString += `</div>`;
      return htmlString;
    }
    const countryFeatures = {
      type: 'FeatureCollection',
      features: data.features.features.filter(function(feature) {
        return isCountry(data.locations[feature.properties.locationId]);
      })
    };

    const stateFeatures = {
      type: 'FeatureCollection',
      features: data.features.features.filter(function(feature) {
        return isState(data.locations[feature.properties.locationId]);
      })
    };

    const countyFeatures = {
      type: 'FeatureCollection',
      features: data.features.features.filter(function(feature) {
        return isCounty(data.locations[feature.properties.locationId]);
      })
    };

    const paintConfig = {
      // 'fill-outline-color': 'rgba(255, 255, 255, 1)',
      'fill-color': ['get', 'color'],
      'fill-outline-color': ['case', ['boolean', ['feature-state', 'hover'], false], outlineColorHighlight, outlineColor],
      'fill-opacity': 1
    };

    map$1.addSource('CDS-country', {
      type: 'geojson',
      data: countryFeatures
    });

    map$1.addLayer({
      id: 'CDS-country',
      type: 'fill',
      source: 'CDS-country',
      layout: {},
      paint: paintConfig
    });

    map$1.addSource('CDS-state', {
      type: 'geojson',
      data: stateFeatures
    });

    map$1.addLayer({
      id: 'CDS-state',
      type: 'fill',
      source: 'CDS-state',
      layout: {},
      paint: paintConfig
    });

    map$1.addSource('CDS-county', {
      type: 'geojson',
      data: countyFeatures
    });

    map$1.addLayer({
      id: 'CDS-county',
      type: 'fill',
      source: 'CDS-county',
      layout: {},
      paint: paintConfig
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    let hoveredFeatureId = null;
    let hoveredFeatureSource = null;

    function handleMouseLeave() {
      map$1.getCanvas().style.cursor = '';
      popup.remove();
      if (hoveredFeatureId) {
        map$1.setFeatureState({ source: 'CDS-state', id: hoveredFeatureId }, { hover: false });
      }
    }

    function handleMouseMove(e) {
      if (e.features.length > 0) {
        e.preventDefault();
        const feature = e.features[0];

        const { locationId } = feature.properties || {};
        const location = data.locations[locationId] || {};
        const locationData = currentData[locationId] || {};

        if (hoveredFeatureId) {
          map$1.setFeatureState({ source: hoveredFeatureSource, id: hoveredFeatureId }, { hover: false });
        }

        hoveredFeatureId = feature.id;
        hoveredFeatureSource = `CDS-${getLocationGranularityName(location)}`;

        if (hoveredFeatureId) {
          map$1.setFeatureState({ source: hoveredFeatureSource, id: hoveredFeatureId }, { hover: true });
        }

        // Change the cursor style as a UI indicator.
        map$1.getCanvas().style.cursor = 'pointer';

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup
          .setLngLat(e.lngLat)
          .setHTML(popupTemplate(location, locationData))
          .addTo(map$1);
      }
    }

    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    map$1.on('mousemove', 'CDS-country', handleMouseMove);
    map$1.on('mousemove', 'CDS-state', handleMouseMove);
    map$1.on('mousemove', 'CDS-county', handleMouseMove);

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map$1.on('mouseleave', 'CDS-country', handleMouseLeave);
    map$1.on('mouseleave', 'CDS-state', handleMouseLeave);
    map$1.on('mouseleave', 'CDS-county', handleMouseLeave);
  }

  function showMap() {
    map$1 = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/lazd/ck7wkzrxt0c071ip932rwdkzj',
      center: [-121.403732, 40.492392],
      zoom: 3
    });

    let remaining = 0;
    function handleLoaded() {
      remaining--;
      if (remaining === 0) {
        if (map$1.loaded()) {
          populateMap();
        } else {
          map$1.once('load', populateMap);
        }
      }
    }

    function loadData(url, field, callback) {
      remaining++;
      json(url, function(obj) {
        data[field] = obj;
        if (typeof callback === 'function') {
          callback(obj);
        }
        handleLoaded();
      });
    }

    loadData('locations.json', 'locations');
    loadData('timeseries.json', 'timeseries');
    loadData('features.json', 'features');
  }

  /* global document, history, Handsontable, Papa, JSONFormatter */

  function showFile(url$1, dataLevels, noPush) {
    document.body.classList.add('is-editing');

    const editor = document.querySelector('.cds-FileEditor');

    url(url$1, function() {
      editor.querySelector('.cds-Heading').innerText = url$1;

      const extension = url$1.split('.').pop();

      editor.querySelector('.cds-Editor-download').href = url$1;
      if (extension === 'json') {
        let obj;
        try {
          obj = JSON.parse(this.responseText);
        } catch (error) {
          editor.querySelector('.cds-FileEditor-content').innerHTML = `<div class="cds-Error">Failed to load ${url$1}: ${error}</div>`;
          return;
        }
        const formatter = new JSONFormatter(obj, dataLevels || 1);

        editor.querySelector('.cds-Editor-content').innerHTML = '<div class="cds-Editor-JSON"></div>';
        editor.querySelector('.cds-Editor-content').firstElementChild.appendChild(formatter.render());
      } else {
        const parsedData = Papa.parse(this.responseText, {
          header: true,
          skipEmptyLines: true
        });

        editor.querySelector('.cds-Editor-content').innerHTML = '';
        new Handsontable(editor.querySelector('.cds-Editor-content'), {
          data: parsedData.data,
          rowHeaders: true,
          colHeaders: parsedData.meta.fields,
          columnSorting: true,
          licenseKey: 'non-commercial-and-evaluation',
          dropdownMenu: true,
          filters: true
        });
      }

      // Select menu item
      const previousItem = editor.querySelector('.spectrum-SideNav-item.is-selected');
      if (previousItem) {
        previousItem.classList.remove('is-selected');
      }

      document
        .querySelector(`a[href="${url$1}"]`)
        .closest('.spectrum-SideNav-item')
        .classList.add('is-selected');
    });

    if (!noPush) {
      history.pushState(null, '', `#${url$1}`, '');
    }
  }

  /* global document, window */

  function getURLFromContributor(curator) {
    if (!curator) {
      return '';
    }

    let url;
    if (curator.url) {
      url = curator.url;
    } else if (curator.twitter) {
      url = `https://twitter.com/${curator.twitter.replace('@', '')}`;
    } else if (curator.github) {
      url = `https://github.com/${curator.github}`;
    } else if (curator.email) {
      url = `mailto:${curator.email}`;
    }
    return url;
  }

  function getContributors(contributors, byString) {
    let html = '';

    if (contributors) {
      html += `<h3 class="spectrum-Body spectrum-Body--XL cds-ReportCard-contributorName">${byString} `;
      for (const [index, contributor] of Object.entries(contributors)) {
        if (index !== '0') {
          html += ', ';
        }
        const contributorURL = getURLFromContributor(contributor);
        if (contributorURL) {
          html += `<a href="${getURLFromContributor(contributor)}" class="spectrum-Link">`;
        }
        html += contributor.name;
        if (contributorURL) {
          html += `</a>`;
        }
        if (contributor && (contributor.country || contributor.flag)) {
          html += ' ';
          html += contributor.flag ? contributor.flag : `(${contributor.country})`;
        }
      }
      html += `</h3>`;
    }

    return html;
  }

  function ratingTemplate(source, index) {
    const typeIcons = {
      json: '✅',
      csv: '✅',
      table: '⚠️',
      list: '❌',
      paragraph: '🤮'
    };
    const typeNames = {
      json: 'JSON',
      csv: 'CSV'
    };

    let granular = source.city || source.county;
    let granularity = 'country-level';
    if (source.city || source.aggregate === 'city') {
      granularity = 'city-level';
      granular = true;
    } else if (source.county || source.aggregate === 'county') {
      granularity = 'county-level';
      granular = true;
    } else if (source.state || source.aggregate === 'state') {
      granularity = 'state-level';
    }

    const sourceURLShort = source.url.match(/^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/?\n]+)/)[1];
    const slug = `sources:${getName(source)
    .replace(/,/g, '-')
    .replace(/\s/g, '')}`;

    const curators = getContributors(source.curators, 'Curated by');
    const sources = getContributors(source.sources, 'Sourced from');
    const maintainers = getContributors(source.maintainers, 'Maintained by');
    return `
  <li class="cds-ReportCard" id="${slug}">
    <div class="cds-ReportCard-grade cds-ReportCard-grade--${getGrade(source.rating).replace(/[^A-Z]+/g, '')}">${getGrade(source.rating).replace(/([+-])/, '<span class="cds-ReportCard-plusMinus">$1</span>')}</div>
    <div class="cds-ReportCard-content">
      <h2 class="spectrum-Heading spectrum-Heading--L"><a href="#${slug}" target="_blank" class="spectrum-Link spectrum-Link--quiet spectrum-Link--silent">${index + 1}. ${getName(source)}</a></h2>
      ${sources}
      ${curators}
      ${maintainers}
      <h4 class="spectrum-Body spectrum-Body--XL cds-ReportCard-sourceURL">Data from <a href="${source.url}" class="spectrum-Link" target="_blank">${sourceURLShort}</a></h4>
      <div class="cds-ReportCard-criteria">
        <div class="cds-ReportCard-criterion">
          ${typeIcons[source.type]} ${typeNames[source.type] || source.type.substr(0, 1).toUpperCase() + source.type.substr(1)}
        </div>
        <div class="cds-ReportCard-criterion">
          ${source.timeseries ? '✅' : '❌'} Timeseries
        </div>
        <div class="cds-ReportCard-criterion">
          ${source.aggregate ? '✅' : '❌'} Aggregate
        </div>
        <div class="cds-ReportCard-criterion">
          ${source.ssl ? '✅' : '❌'} SSL
        </div>
        <div class="cds-ReportCard-criterion">
          ${source.headless ? '❌' : '✅'} ${source.headless ? 'Requires' : ' Does not require'} JavaScript
        </div>
        <div class="cds-ReportCard-criterion">
          ${granular ? '✅' : '❌'} Granularity (${granularity})
        </div>
      </div>
    </div>
  </li>
`;
  }

  function showSources() {
    const list = document.querySelector('.cds-Sources-list');
    json('ratings.json', function(ratings) {
      list.innerHTML = '';
      for (let i = 0; i < ratings.length; i++) {
        list.insertAdjacentHTML('beforeend', ratingTemplate(ratings[i], i));
      }
      if (window.location.hash.indexOf(':') !== -1) {
        document.getElementById(window.location.hash.substr(1)).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  /* global document, window, history */

  const pages = {
    '#home': '.cds-Home',
    '#editor': '.cds-FileEditor',
    '#sources': '.cds-Sources',
    '#features.json': '.cds-Map'
  };

  const routes = {
    '#sources': showSources,
    '#home': function() {},
    '#features.json': showMap
  };

  let sidebar;
  let overlay;
  let currentPage = null;

  function openSidebar() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-open');
  }

  function closeSidebar() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-open');
  }

  function showPage(pageToShow, noPush) {
    // Set selected
    const currentSideLink = document.querySelector(`.spectrum-SideNav-item a[href="${pageToShow}"]`) || document.querySelector(`.spectrum-SideNav-item a[href="${pageToShow.replace('#', '')}"]`);
    const currentSideItem = currentSideLink && currentSideLink.closest('.spectrum-SideNav-item');
    const otherSideItem = document.querySelector('.spectrum-SideNav-item.is-selected');
    if (otherSideItem) {
      otherSideItem.classList.remove('is-selected');
    }
    if (currentSideItem) {
      currentSideItem.classList.add('is-selected');
    }

    for (const page in pages) {
      const selector = pages[page];
      if (page === pageToShow) {
        document.querySelector(selector).hidden = false;
      } else {
        document.querySelector(selector).hidden = true;
      }
    }

    if (routes[pageToShow]) {
      if (!noPush) {
        history.pushState(null, '', pageToShow);
      }
      routes[pageToShow]();
    }

    currentPage = pageToShow;

    closeSidebar();
  }

  function getHashStart() {
    return window.location.hash.split(':')[0];
  }

  function handleHashChange() {
    if (window.location.hash) {
      if (routes[getHashStart()]) {
        if (currentPage !== getHashStart()) {
          showPage(getHashStart(), true);
        }
      } else if (window.location.hash.match('.csv') || window.location.hash.match('.json')) {
        showPage('#editor');
        showFile(window.location.hash.substr(1), null, true);
      }
    } else {
      showPage('#home', false);
    }
  }

  window.addEventListener('hashchange', handleHashChange, false);

  document.addEventListener('click', function(evt) {
    // Sidebar
    const button = evt.target.closest('button');
    if (button && button.classList.contains('js-toggleMenu')) {
      openSidebar();
    }

    if (evt.target.closest('.spectrum-Site-overlay')) {
      closeSidebar();
    }

    // Navigation
    const target = evt.target.closest('a');
    if (target) {
      if (target.tagName === 'A' && target.hasAttribute('download') && !target.hasAttribute('data-noview')) {
        // Stop download
        evt.preventDefault();

        const url = target.getAttribute('href');
        if (url === 'features.json') {
          showPage('#features.json');
        } else {
          showPage('#editor');
          showFile(url, target.getAttribute('data-levels'));
        }
      } else if (target.tagName === 'A' && routes[target.getAttribute('href')]) {
        // Stop download
        evt.preventDefault();

        showPage(target.getAttribute('href'));
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    sidebar = document.querySelector('.spectrum-Site-sideBar');
    overlay = document.querySelector('.spectrum-Site-overlay');

    // Init
    handleHashChange();
  });

}());
//# sourceMappingURL=index.js.map
