/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js"
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subtrair),
/* harmony export */   faculdade: () => (/* binding */ curso),
/* harmony export */   idade: () => (/* binding */ idade),
/* harmony export */   nome: () => (/* binding */ nome),
/* harmony export */   sobrenome: () => (/* binding */ sobrenome),
/* harmony export */   soma: () => (/* binding */ soma)
/* harmony export */ });
var nome = 'Arthur';
var idade = 18;
var soma = function soma(x, y) {
  return x + y;
};
var curso = 'Sistemas de Informação';

//      COMO EXPORTAR
//  1- Exportar pelo nome da variável ou função


// 2- Exportar direto na criação
var sobrenome = 'Negromonte';

// 3- Exportar com apelidos


// 4- Exportar de forma padrão (default), sem precisar de {}
// só posso ter um default por arquivo
function subtrair(x, y) {
  return x - y;
}

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1.js */ "./src/modulo1.js");
//   IMPORTANDO DE OUTRO ARQUIVO (modulo1.js)


// importando com apelidos, caso já exista variável com mesmo nome


// importando já com apelido predefinido no export


/*
Para importar todos os elementos com 'export' antes da declaração de variáveis de uma única vez, posso usar

import * as MeuModulo from './modulo1.js'

E depois acessar cada elemento como um objeto, ex: 'MeuModulo.nome' ou 'MeuModulo.sobrenome'
*/

// importando os default

var sobrenome = 'Teixeira';
console.log("Meu nome \xE9 ".concat(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.nome, " ").concat(sobrenome, ", tenho ").concat(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.idade, " anos.")); // Arthur Teixeira
console.log("Meu nome \xE9 ".concat(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.nome, " ").concat(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.sobrenome, ", tenho ").concat(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.idade, " anos.")); // Arthur Negromonte

console.log(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.soma);
console.log((0,_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.soma)(3, 4));
console.log("Meu nome \xE9 ".concat(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.nome, " e fa\xE7o ").concat(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.faculdade, "."));
console.log(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
console.log((0,_modulo1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(7, 2));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map