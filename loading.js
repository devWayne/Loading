(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var instance;

class Loading {
    constructor(config) {
        this.config = config || {};
    }


    /**
     * 获取唯一的Loading实例
     * @method getInstance
     * @param config
     * @returns {*|Loading}
     */
    static getInstance(config) {
        return instance || (instance = new Loading(config));
    }

    /**
     * 显示提示
     *
     *      this.show();        //在整个窗口内显示loading
     *      this.show('.list'); //在某个节点内显示loading
     *
     * @method show
     * @param [target] {String|Node|HTMLElement} 需要显示在哪，默认在页面居中显示
     * @chainable
     */
    show(target) {
        target = target || this.config.target;
        this.fixed = !target;
        target = target || 'html';
        if (!this.$el) {
            this.$el = $('\
                <div class="loading">\
                    <div class="prompt-loading">\
                        <div class="loading-img loading-play"></div>\
                    </div>\
                </div>');
        }
        if (this.fixed) {
            this.$el.addClass('loading-fixed');
        } else {
            this.$el.removeClass('loading-fixed');
        }
        $(target).append(this.$el);
        this.$el.show();


        return this;
    }

    /**
     * 隐藏提示
     *
     *      this.hide();
     *
     * @method hide
     * @chainable
     */
    hide() {
        this.$el.hide();
        return this;
    }

    /**
     * 销毁
     *
     *      this.destroy();
     *
     * @method destroy
     */
    destroy() {
        this.$el.remove();

    }
}

module.exports = {
    Loading: Loading
};


/***/ }
/******/ ])
});
;