(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Bulma", [], factory);
	else if(typeof exports === 'object')
		exports["Bulma"] = factory();
	else
		root["Bulma"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugins/calendar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ConfigBag.js":
/*!**************************!*\
  !*** ./src/ConfigBag.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Object to hold a plugin's configuration\n * @class ConfigBag\n * @since 0.11.0\n * @author Thomas Erbe <vizuaalog@gmail.com>\n */\nvar ConfigBag = function () {\n    function ConfigBag() {\n        var initialConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n        _classCallCheck(this, ConfigBag);\n\n        if ((typeof initialConfig === 'undefined' ? 'undefined' : _typeof(initialConfig)) !== 'object') {\n            throw new TypeError('initialConfig must be of type object.');\n        }\n\n        this._items = initialConfig;\n    }\n\n    /**\n     * Set a new config property\n     * @param {string} key The config property's key\n     * @param {mixed} value The config property's value\n     */\n\n\n    _createClass(ConfigBag, [{\n        key: 'set',\n        value: function set(key, value) {\n            if (!key || !value) {\n                throw new Error('A key and value must be provided when setting a new option.');\n            }\n\n            this._items[key] = value;\n        }\n\n        /**\n         * Check if a key exists\n         * @param {string} key\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'has',\n        value: function has(key) {\n            if (!key) {\n                throw new Error('A key must be provided.');\n            }\n\n            return this._items.hasOwnProperty(key) && this._items[key];\n        }\n\n        /**\n         * Get a property by it's key. Returns the defaultValue if it doesn't exists\n         * @param {string} key \n         * @param {mixed} defaultValue \n         * @returns {mixed}\n         */\n\n    }, {\n        key: 'get',\n        value: function get(key) {\n            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n            if (defaultValue && !this.has(key)) {\n                if (typeof defaultValue === 'function') {\n                    return defaultValue();\n                }\n\n                return defaultValue;\n            }\n\n            return this._items[key];\n        }\n    }]);\n\n    return ConfigBag;\n}();\n\nexports.default = ConfigBag;\n\n//# sourceURL=webpack://Bulma/./src/ConfigBag.js?");

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar Bulma = {\n    /**\n     * Current BulmaJS version.\n     * @type {String}\n     */\n    VERSION: '0.10.0',\n\n    /**\n     * An index of the registered plugins\n     * @type {Object}\n     */\n    plugins: {},\n\n    /**\n     * Helper method to create a new plugin.\n     * @param  {String} key The plugin's key\n     * @param  {Object} config The config to be passed to the plugin\n     * @return {Object} The newly created plugin instance\n     */\n    create: function create(key, config) {\n        if (!key || !Bulma.plugins.hasOwnProperty(key)) {\n            throw new Error('[BulmaJS] A plugin with the key \\'' + key + '\\' has not been registered.');\n        }\n\n        return Bulma.plugins[key].handler.create(config);\n    },\n\n\n    /**\n     * Register a new plugin\n     * @param  {String} key The key to register the plugin under\n     * @param  {Object} plugin The plugin's main constructor\n     * @param  {number?} priority The priority this plugin has over other plugins. Higher means the plugin is registered before lower.\n     * @return {undefined}\n     */\n    registerPlugin: function registerPlugin(key, plugin) {\n        var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n        if (!key) {\n            throw new Error('[BulmaJS] Key attribute is required.');\n        }\n\n        this.plugins[key] = {\n            priority: priority,\n            handler: plugin\n        };\n    },\n\n\n    /**\n     * Parse the HTML DOM searching for data-bulma attributes. We will then pass\n     * each element to the appropriate plugin to handle the required processing.\n     * \n     * @return {undefined}\n     */\n    traverseDOM: function traverseDOM() {\n        var _this = this;\n\n        var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n\n        var elements = root.querySelectorAll(this.getPluginClasses());\n\n        this.each(elements, function (element) {\n            if (element.hasAttribute('data-bulma-attached')) {\n                return;\n            }\n\n            var plugins = _this.findCompatiblePlugins(element);\n\n            _this.each(plugins, function (plugin) {\n                plugin.handler.parse(element);\n            });\n        });\n    },\n\n\n    /**\n     * Return a string of classes to search the DOM for\n     * @returns {string} The string containing the classes\n     */\n    getPluginClasses: function getPluginClasses() {\n        var classes = [];\n\n        for (var key in this.plugins) {\n            if (!this.plugins[key].handler.getRootClass()) {\n                continue;\n            }\n\n            classes.push('.' + this.plugins[key].handler.getRootClass());\n        }\n\n        return classes.join(',');\n    },\n\n\n    /**\n     * Search our plugins and find one that matches the element\n     * @param {HTMLElement} element The element we want to match for\n     * @returns {Object} The plugin that matched\n     */\n    findCompatiblePlugins: function findCompatiblePlugins(element) {\n        var _this2 = this;\n\n        var compatiblePlugins = [];\n\n        var sortedPlugins = Object.keys(this.plugins).sort(function (a, b) {\n            return _this2.plugins[a].priority < _this2.plugins[b].priority;\n        });\n\n        this.each(sortedPlugins, function (key) {\n            if (element.classList.contains(_this2.plugins[key].handler.getRootClass())) {\n                compatiblePlugins.push(_this2.plugins[key]);\n            }\n        });\n\n        return compatiblePlugins;\n    },\n\n\n    /**\n     * Create an element and assign classes\n     * @param {string} name The name of the element to create\n     * @param {array} classes An array of classes to add to the element\n     * @return {HTMLElement} The newly created element\n     */\n    createElement: function createElement(name, classes) {\n        if (!classes) {\n            classes = [];\n        }\n\n        if (typeof classes === 'string') {\n            classes = [classes];\n        }\n\n        var elem = document.createElement(name);\n\n        this.each(classes, function (className) {\n            elem.classList.add(className);\n        });\n\n        return elem;\n    },\n\n\n    /**\n     * Helper method to normalise a plugin finding an element.\n     * @param {string} query The CSS selector to query for\n     * @param {HTMLElement|null} context The element we want to search within\n     * @param {boolean} nullable Do we except a null response?\n     * @returns {null|HTMLElement} The element we found, or null if allowed.\n     * @throws {TypeError}\n     */\n    findElement: function findElement(query) {\n        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n        var nullable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n        if (!query && !nullable) {\n            throw new TypeError('First argument to `findElement` required. Null given.');\n        }\n\n        if (!query) {\n            return null;\n        }\n\n        if (query.toString() === '[object HTMLElement]') {\n            return query;\n        }\n\n        return context.querySelector(query);\n    },\n\n\n    /**\n     * Find an element otherwise create a new one.\n     * @param {string} query The CSS selector query to find\n     * @param {HTMLElement|null} parent The parent we want to search/create within\n     * @param {[string]} elemName The name of the element to create\n     * @param {[array]} classes The classes to apply to the element\n     * @returns {HTMLElement} The HTML element we found or created\n     */\n    findOrCreateElement: function findOrCreateElement(query) {\n        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n        var elemName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';\n        var classes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];\n\n        var elem = this.findElement(query, parent);\n\n        if (!elem) {\n            if (classes.length === 0) {\n                classes = query.split('.').filter(function (item) {\n                    return item;\n                });\n            }\n\n            var newElem = this.createElement(elemName, classes);\n\n            if (parent) {\n                parent.appendChild(newElem);\n            }\n\n            return newElem;\n        }\n\n        return elem;\n    },\n\n\n    /**\n     * For loop helper\n     * @param {*} objects The array/object to loop through\n     * @param {*} callback The callback used for each item\n     */\n    each: function each(objects, callback) {\n        var i = void 0;\n\n        for (i = 0; i < objects.length; i++) {\n            callback(objects[i], i);\n        }\n    },\n\n\n    /**\n     * Make an AJAX GET request to the specified URL. Stripping any script tags from the response.\n     * @param {*} url The url to send the request to\n     * @returns {Promise} Returns a promise containing the response HTML or error\n     */\n    ajax: function ajax(url) {\n        var _this3 = this;\n\n        return new Promise(function (resolve, reject) {\n            var request = new XMLHttpRequest();\n            request.open('GET', url, true);\n\n            request.onload = function () {\n                if (request.status >= 200 && request.status < 400) {\n                    resolve(_this3._stripScripts(request.responseText));\n                } else {\n                    reject();\n                }\n            };\n\n            request.onerror = function () {\n                return reject();\n            };\n\n            request.send();\n        });\n    },\n\n\n    /**\n     * Strip any script tags from a HTML string.\n     * @param {string} htmlString \n     * @returns {string} The cleaned HTML string\n     * \n     * @private\n     */\n    _stripScripts: function _stripScripts(htmlString) {\n        var div = document.createElement('div');\n        div.innerHTML = htmlString;\n\n        var scripts = div.getElementsByTagName('script');\n\n        var i = scripts.length;\n\n        while (i--) {\n            scripts[i].parentNode.removeChild(scripts[i]);\n        }\n\n        return div.innerHTML;\n    }\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    if (window.hasOwnProperty('bulmaOptions') && window.bulmaOptions.autoParseDocument === false) {\n        return;\n    }\n\n    Bulma.traverseDOM();\n});\n\nexports.default = Bulma;\n\n//# sourceURL=webpack://Bulma/./src/core.js?");

/***/ }),

/***/ "./src/plugin.js":
/*!***********************!*\
  !*** ./src/plugin.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ConfigBag = __webpack_require__(/*! ./ConfigBag */ \"./src/ConfigBag.js\");\n\nvar _ConfigBag2 = _interopRequireDefault(_ConfigBag);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Base plugin class. Provides basic, common functionality.\n * @class Plugin\n * @since 0.7.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nvar Plugin = function () {\n  _createClass(Plugin, null, [{\n    key: 'create',\n\n    /**\n     * Helper method used by the Bulma core to create a new instance.\n     * @param  {Object?} config The config object for this instance\n     * @return {Plugin|boolean} The newly created instance or false if method is not used\n     */\n    value: function create() {\n      return false;\n    }\n\n    /**\n     * Handle parsing the DOM elements.\n     * @param {HTMLElement?} element The root element for this instance\n     * @return {Plugin|boolean} The new plugin instance, or false if method is not used\n     */\n\n  }, {\n    key: 'parse',\n    value: function parse() {\n      return false;\n    }\n\n    /**\n     * Returns a string containing the element class this plugin supports.\n     * @returns {string} The class name.\n     * @throws {Error} Thrown if this method has not been replaced.\n     */\n\n  }, {\n    key: 'getRootClass',\n    value: function getRootClass() {\n      throw new Error('The getRootClass method should have been replaced by the plugin being created.');\n    }\n\n    /**\n     * Returns an object containing the default config for this plugin.\n     * @returns {object} The default config object.\n     */\n\n  }, {\n    key: 'defaultConfig',\n    value: function defaultConfig() {\n      return {};\n    }\n\n    /**\n     * Create a plugin.\n     * @param {object} config The config for this plugin\n     */\n\n  }]);\n\n  function Plugin() {\n    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Plugin);\n\n    this.config = new _ConfigBag2.default(_extends({}, this.constructor.defaultConfig(), config));\n\n    this.parent = this.config.get('parent', document.body);\n  }\n\n  return Plugin;\n}();\n\nexports.default = Plugin;\n\n//# sourceURL=webpack://Bulma/./src/plugin.js?");

/***/ }),

/***/ "./src/plugins/calendar.js":
/*!*********************************!*\
  !*** ./src/plugins/calendar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _core = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\nvar _plugin = __webpack_require__(/*! ../plugin */ \"./src/plugin.js\");\n\nvar _plugin2 = _interopRequireDefault(_plugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @module Calendar\n * @since  0.3.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nvar Calendar = function (_Plugin) {\n    _inherits(Calendar, _Plugin);\n\n    _createClass(Calendar, null, [{\n        key: 'create',\n\n        /**\n         * Helper method used by the Bulma core to create a new instance.\n         * @param  {Object} config The new calendar's config\n         * @return {Calendar} The newly created calendar instance\n         */\n        value: function create(config) {\n            return new Calendar(config);\n        }\n\n        /**\n         * Returns a string containing the element class this plugin supports.\n         * @returns {string} The class name.\n         */\n\n    }, {\n        key: 'getRootClass',\n        value: function getRootClass() {\n            return 'calendar';\n        }\n\n        /**\n         * Returns an object containing the default config for this plugin.\n         * @returns {object} The default config object.\n         */\n\n    }, {\n        key: 'defaultConfig',\n        value: function defaultConfig() {\n            return {\n                date: new Date(),\n                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n                shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n                navButtons: true,\n                format: 'yyyy-mm-dd',\n                overlay: false\n            };\n        }\n\n        /**\n         * Plugin constructor\n         * @param  {Object} config Plugin instance's config\n         * @return {this} The newly created instance\n         */\n\n    }]);\n\n    function Calendar(config) {\n        _classCallCheck(this, Calendar);\n\n        /**\n         * The root Calendar element.\n         * @type {HTMLElement}\n         */\n        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, config));\n\n        _this.element = _core2.default.createElement('div', ['calendar']);\n\n        /**\n         * The input element this calendar belongs to.\n         * @type {HTMLElement|null}\n         */\n        _this.isInput = _this.parent.nodeName === 'INPUT';\n\n        /**\n         * The current date for today tests\n         * @type {Date}\n         */\n        _this.now = new Date();\n\n        /**\n         * The date this calendar starts at\n         * @type {Date}\n         */\n        _this.date = _this.config.get('date');\n\n        /**\n         * The current year for the calendar\n         * @type {int}\n         */\n        _this.year = _this.date.getFullYear();\n\n        /**\n         * The current month for the calendar\n         * @type {int}\n         */\n        _this.month = _this.date.getMonth();\n\n        /**\n         * Month names\n         * @type {Array}\n         */\n        _this.months = _this.config.get('months');\n\n        /**\n         * Short day names\n         * @type {Array}\n         */\n        _this.shortDays = _this.config.get('shortDays');\n\n        /**\n         * Number of days in each month\n         * @type {Array}\n         */\n        _this.monthDays = [31, _this.isLeapYear(_this.year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\n        /**\n         * Show the navigating buttons\n         * @type {boolean}\n         */\n        _this.navButtons = _this.config.get('navButtons');\n\n        /**\n         * The format string for the date output. Used when attached to an input element.\n         * @type {string}\n         */\n        _this.format = _this.config.get('format');\n\n        /**\n         * Should the calendar be shown as a modal. Used when attached to an input element\n         * @type {boolean}\n         */\n        _this.overlay = _this.config.get('overlay');\n\n        if (_this.overlay) {\n            _this.buildModal();\n        }\n\n        if (_this.isInput) {\n            _this.parent.addEventListener('focus', function (event) {\n                _this.handleInputFocus(event);\n            });\n        }\n\n        _this.render();\n        return _this;\n    }\n\n    ////////////////////////////////////////\n    ///// HELPER METHODS TO BUILD HTML /////\n    ////////////////////////////////////////\n\n    /**\n     * If we are to show as an overlay, build the modal's HTML\n     * @return {undefined}\n     */\n\n\n    _createClass(Calendar, [{\n        key: 'buildModal',\n        value: function buildModal() {\n            var _this2 = this;\n\n            this.modal = _core2.default.createElement('div', ['modal']);\n            this.modalBackground = _core2.default.createElement('div', ['modal-background']);\n\n            var modalClose = _core2.default.createElement('button', ['modal-close']);\n\n            modalClose.addEventListener('click', function () {\n                _this2.modal.classList.remove('is-active');\n            });\n\n            this.modal.appendChild(this.modalBackground);\n            this.modal.appendChild(modalClose);\n\n            this.element.appendChild(this.modal);\n\n            this.element.style.zIndex = 40;\n        }\n\n        /**\n         * Build the calendars nav HTML\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'buildNav',\n        value: function buildNav() {\n            var _this3 = this;\n\n            var prevIcon = void 0,\n                nextIcon = void 0;\n            var nav = _core2.default.createElement('div', 'calendar-nav');\n            var navLeft = _core2.default.createElement('div', 'calendar-nav-left');\n            var navRight = _core2.default.createElement('div', 'calendar-nav-right');\n\n            // Left side of nav (prev year/month buttons)\n            if (this.navButtons) {\n                this.prevYearButton = _core2.default.createElement('button', ['button', 'is-text']);\n                prevIcon = _core2.default.createElement('i', ['fa', 'fa-backward']);\n                this.prevYearButton.appendChild(prevIcon);\n\n                this.prevYearButton.addEventListener('click', function (event) {\n                    _this3.handlePrevYearClick(event);\n                });\n\n                navLeft.appendChild(this.prevYearButton);\n\n                this.prevMonthButton = _core2.default.createElement('button', ['button', 'is-text']);\n                prevIcon = _core2.default.createElement('i', ['fa', 'fa-chevron-left']);\n                this.prevMonthButton.appendChild(prevIcon);\n\n                this.prevMonthButton.addEventListener('click', function (event) {\n                    _this3.handlePrevMonthClick(event);\n                });\n\n                navLeft.appendChild(this.prevMonthButton);\n\n                // Right side of nav (next year/month buttons)\n                this.nextMonthButton = _core2.default.createElement('button', ['button', 'is-text']);\n                nextIcon = _core2.default.createElement('i', ['fa', 'fa-chevron-right']);\n                this.nextMonthButton.appendChild(nextIcon);\n\n                this.nextMonthButton.addEventListener('click', function (event) {\n                    _this3.handleNextMonthClick(event);\n                });\n\n                navRight.appendChild(this.nextMonthButton);\n\n                this.nextYearButton = _core2.default.createElement('button', ['button', 'is-text']);\n                prevIcon = _core2.default.createElement('i', ['fa', 'fa-forward']);\n                this.nextYearButton.appendChild(prevIcon);\n\n                this.nextYearButton.addEventListener('click', function (event) {\n                    _this3.handleNextYearClick(event);\n                });\n\n                navRight.appendChild(this.nextYearButton);\n            }\n\n            // Month/year label\n            this.monthYearLabel = _core2.default.createElement('div');\n            this.monthYearLabel.innerHTML = this.months[this.month] + ' ' + this.year;\n\n            nav.appendChild(navLeft);\n            nav.appendChild(this.monthYearLabel);\n            nav.appendChild(navRight);\n\n            return nav;\n        }\n\n        /**\n         * Build the calendar's container HTML\n         * @return {HTMLElement} The calendar's container\n         */\n\n    }, {\n        key: 'buildContainer',\n        value: function buildContainer() {\n            return _core2.default.createElement('div', 'calendar-container');\n        }\n\n        /**\n         * Build the calendar's header HTML\n         * @return {HTMLElement} The calendar's header element\n         */\n\n    }, {\n        key: 'buildHeader',\n        value: function buildHeader() {\n            var calendarHeader = _core2.default.createElement('div', 'calendar-header');\n\n            _core2.default.each(this.shortDays, function (dayName) {\n                var day = _core2.default.createElement('div', 'calendar-date');\n                day.innerHTML = dayName;\n                calendarHeader.appendChild(day);\n            });\n\n            return calendarHeader;\n        }\n\n        /**\n         * Build the calendar's body. This includes all days.\n         * @return {HTMLElement} The calendar's body element\n         */\n\n    }, {\n        key: 'buildBody',\n        value: function buildBody() {\n            var _this4 = this;\n\n            var calendarBody = _core2.default.createElement('div', 'calendar-body');\n\n            var daysInMonth = this.monthDays[this.now.getMonth()];\n\n            // Number of days to show from the previous month.\n            var daysBefore = new Date(this.year, this.month, 1).getDay();\n\n            // Number of days to show from the next month\n            var daysAfter = void 0;\n\n            var numDays = daysInMonth + daysBefore;\n\n            daysAfter = numDays;\n            while (daysAfter > 7) {\n                daysAfter -= 7;\n            }\n\n            numDays += 7 - daysAfter;\n\n            var cells = [];\n\n            for (var i = 0; i < numDays; i++) {\n                var d = new Date(this.year, this.month, 1 + (i - daysBefore));\n\n                var today = false;\n                var thisMonth = false;\n\n                if (d.getFullYear() === this.now.getFullYear() && d.getMonth() === this.now.getMonth() && d.getDate() === this.now.getDate()) {\n                    today = true;\n                }\n\n                if (d.getMonth() === this.month) {\n                    thisMonth = true;\n                }\n\n                cells.push({\n                    day: d.getDate(),\n                    isToday: today,\n                    isThisMonth: thisMonth\n                });\n            }\n\n            _core2.default.each(cells, function (day) {\n                var d = _core2.default.createElement('div', 'calendar-date');\n\n                if (!day.isThisMonth) {\n                    d.classList.add('is-disabled');\n                }\n\n                var button = _core2.default.createElement('button', 'date-item');\n\n                if (_this4.isInput && day.isThisMonth) {\n                    button.addEventListener('click', function (event) {\n                        _this4.handleDayClick(event, day);\n                    });\n                }\n\n                if (day.isToday) {\n                    button.classList.add('is-today');\n                }\n\n                button.innerHTML = day.day;\n\n                d.appendChild(button);\n\n                calendarBody.appendChild(d);\n            });\n\n            return calendarBody;\n        }\n\n        //////////////////////////\n        ///// EVENT HANDLERS /////\n        //////////////////////////\n\n        /**\n         * Called when the input box is in focus.\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'handleInputFocus',\n        value: function handleInputFocus() {\n            if (this.overlay) {\n                this.modal.classList.add('is-active');\n            }\n\n            this.parent.parentNode.insertBefore(this.element, this.parent.nextSibling);\n        }\n\n        /**\n         * Event hander for when a day is clicked.\n         * @param {Object} event The event object\n         * @param {Object} day The day that was clicked\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'handleDayClick',\n        value: function handleDayClick(event, day) {\n            day = new Date(this.year, this.month, day.day);\n\n            var dateString = this.formatDateString(day);\n\n            this.parent.value = dateString;\n\n            if (this.overlay) {\n                this.modal.classList.remove('is-active');\n            } else {\n                this.parent.parentNode.removeChild(this.element);\n            }\n        }\n\n        /**\n         * Event handler for the previous month button.\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'handlePrevMonthClick',\n        value: function handlePrevMonthClick() {\n            this.month--;\n\n            if (this.month < 0) {\n                this.year--;\n                this.month = 11;\n            }\n\n            this.render();\n        }\n\n        /**\n         * Event handler for the next month button.\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'handleNextMonthClick',\n        value: function handleNextMonthClick() {\n            this.month++;\n\n            if (this.month > 11) {\n                this.year++;\n                this.month = 0;\n            }\n\n            this.render();\n        }\n\n        /**\n         * Event handler for the previous year button.\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'handlePrevYearClick',\n        value: function handlePrevYearClick() {\n            this.year--;\n\n            this.render();\n        }\n\n        /**\n         * Event handler for the next year button.\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'handleNextYearClick',\n        value: function handleNextYearClick() {\n            this.year++;\n\n            this.render();\n        }\n\n        /**\n         * Format the date based on the supplied format string.\n         * @param {Object} day Date object representing the day to format\n         * @returns {string} The formatted date string\n         */\n\n    }, {\n        key: 'formatDateString',\n        value: function formatDateString(day) {\n            var dateString = this.format;\n\n            // May be a better/faster way of doing this?\n            if (dateString.indexOf('yyyy') !== -1) {\n                dateString = this.format.replace('yyyy', day.getFullYear());\n            } else {\n                dateString = this.format.replace('yy', day.getFullYear().toString().substr(-2));\n            }\n\n            if (dateString.indexOf('mm') !== -1) {\n                var month = day.getMonth() + 1;\n                if (month < 10) {\n                    month = '0' + month.toString();\n                }\n                dateString = dateString.replace('mm', month);\n            } else {\n                dateString = dateString.replace('m', day.getMonth() + 1);\n            }\n\n            if (dateString.indexOf('dd') !== -1) {\n                var date = day.getDate();\n                if (date < 10) {\n                    date = '0' + date.toString();\n                }\n                dateString = dateString.replace('dd', date);\n            } else {\n                dateString = dateString.replace('d', day.getDate());\n            }\n\n            return dateString;\n        }\n\n        /**\n         * Clear the calendar HTML, ready for a re-render.\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'clearCalendar',\n        value: function clearCalendar() {\n            while (this.element.firstChild) {\n                this.element.removeChild(this.element.firstChild);\n            }\n        }\n\n        /**\n         * Check if the passed year is a leap year.\n         * @param {int} year The year to check against\n         * @return {boolean} Is the year a leap year or not\n         */\n\n    }, {\n        key: 'isLeapYear',\n        value: function isLeapYear(year) {\n            // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951\n            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;\n        }\n\n        /**\n         * Render/build the calendar's HTML.\n         * @return {undefined}\n         */\n\n    }, {\n        key: 'render',\n        value: function render() {\n            this.clearCalendar();\n\n            this.element.appendChild(this.buildNav());\n\n            var container = this.buildContainer();\n            container.appendChild(this.buildHeader());\n            container.appendChild(this.buildBody());\n\n            this.element.appendChild(container);\n\n            if (this.overlay) {\n                this.modal.insertBefore(this.element, this.modalBackground.nextSibling);\n                this.parent.appendChild(this.modal);\n            } else {\n                this.parent.appendChild(this.element);\n            }\n        }\n    }]);\n\n    return Calendar;\n}(_plugin2.default);\n\n_core2.default.registerPlugin('calendar', Calendar);\n\nexports.default = Calendar;\n\n//# sourceURL=webpack://Bulma/./src/plugins/calendar.js?");

/***/ })

/******/ })["default"];
});