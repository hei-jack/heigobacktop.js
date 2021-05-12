/*
 * HeiGoBackTop.js V1.0.0
 * @author hei-jack
 * @link https://github.com/hei-jack/HeiGoBackTop.js/
 * Probably the most beautiful back to top widget
 * 可能是最漂亮的返回顶部小插件
 * 
 */
; (function(global) {
	"use strict";
	function HeiGoBackTop(mode, el, speed, distance) {
		this.mode = mode === undefined ? 0 : mode;
		this.el = el === undefined ? '#__go-back-top': el;
		this.speed = speed === undefined ? 500 : speed;
		this.distance = distance === undefined ? 100 : distance;
		this.show_height = 400;
		this.flag = false;
		this.show_flag = false;
		this.width = '150px';
		this.height = '40px';
		this.top = '90%';
		this.right = '5%';
		this.text = '返回顶部';
		this.text_color = '#fff';
		this.radius = '40px';
		this.themes = 0;
		this.color = 'linear-gradient(to right,#6966ff,#37e2d3,#63e8dd,#ccff66)';
		this.shadow = '0 4px 15px 0 rgba(41, 163, 163,0.75)';
		this.version = 'V1.0.0';
		this.home = 'http://www.baidu.com';
		this.onLoad(this)
	};
	HeiGoBackTop.prototype = {
		constructor: HeiGoBackTop,
		hook: function(func) {
			return func === undefined ? false: this.callBack(func.bind(this))
		},
		onBeforeCreate: function(func) {
			this.beforeCreate = func
		},
		onAfterCreate: function(func) {
			this.afterCreate = func
		},
		onShow: function(func) {
			this.show = func
		},
		onHide: function(func) {
			this.hide = func
		},
		onClick: function(func) {
			this.click = func
		},
		callBack: function(func) {
			return func()
		},
		init: function() {
			this.showVersion();
			this.hook(this.beforeCreate);
			this.unset('onBeforeCreate', null);
			this.unset('beforeCreate');
			if (!this.checkArgs()) throw (new Error('arguments is error!'));
			this.unset('checkNum', null);
			this.unset('checkEl', null);
			this.unset('checkArgs', null);
			this.createBtn();
			this.unset('createBtn', null);
			this.unset('unsetUseless', null);
			this.bindOn(window, 'scroll', this.checkBtn);
			this.bindOn(window, 'scroll', this.scroll);
			this.controller();
			this.unset('controller', null);
			this.hook(this.afterCreate);
			this.unset('onAfterCreate', null);
			this.unset('afterCreate');
			this.unset('bindOn', null);
			this.unset('addEventListener', null);
			this.unset('isBrowser', null);
			this.unset('onLoad', null)
		},
		checkArgs: function() {
			if (this.checkNum(this.mode)) return false;
			if (this.mode > 3 || this.mode < 0) return false;
			if (this.checkNum(this.speed) || this.speed <= 0) return false;
			if (this.checkNum(this.distance) || this.distance <= 0) return false;
			if (this.checkEl(this.el)) return false;
			return true
		},
		checkNum: function(arg) {
			return typeof(arg) !== 'number'
		},
		checkEl: function(arg) {
			return typeof(arg) !== 'string' || arg.length === 0 || arg.indexOf('#') === -1
		},
		createBtn: function() {
			if (this.el !== '#__go-back-top') {
				this.el = this.el.replace('#', '');
				if (document.getElementById(this.el)) {
					this.btn = document.getElementById(this.el);
					this.unsetUseless();
					return false
				}
				throw (new Error('element is error!'));
			}
			var style_text = '#__go-back-top{display:none;position:fixed;width:' + this.width + ';height:' + this.height + ';top:' + this.top + ';right:' + this.right + ';z-index:9999;}.__go-back-btn{width:' + this.width + ';height:' + this.height + ';background:' + this.color + ';background-size: 300% 100%;cursor: pointer;border:none;border-radius:' + this.radius + ';box-shadow:' + this.shadow + ';color:' + this.text_color + ';outline:none;letter-spacing:2px;font-weight:600;font-family: "YouYuan","Microsoft YaHei","SimHei","SimSun","Arial",sans-serif;transition: all .4s ease-in-out;moz-transition: all .4s ease-in-out;-o-transition: all .4s ease-in-out;-webkit-transition: all .4s ease-in-out;}.__go-back-btn:hover{background-position: 100% 0%;moz-transition: all .4s ease-in-out;-o-transition: all .4s ease-in-out;-webkit-transition: all .4s ease-in-out;transition: all .4s ease-in-out;}.go-back-top-themes1{background-image:linear-gradient(to right,#25aae1,#40e495,#30dd8a,#2bb673);box-shadow:0 4px 15px 0 rgba(49,196,190,0.75);}.go-back-top-themes2{background-image:linear-gradient(to right,#f5ce62,#e43603,#fa7199,#e85a19);box-shadow:0 4px 15px 0 rgba(229,66,10,0.75);}.go-back-top-themes3{background-image:linear-gradient(to right,#667eea,#764ba2,#6B8DD6,#8E37D7);box-shadow:0 4px 15px 0 rgba(116,79,168,0.75);}.go-back-top-themes4{background-image:linear-gradient(to right,#fc6076,#ff9a44,#ef9d43,#e75516);box-shadow:0 4px 15px 0 rgba(252,104,110,0.75);}.go-back-top-themes5{background-image:linear-gradient(to right,#0ba360,#3cba92,#30dd8a,#2bb673);box-shadow:0 4px 15px 0 rgba(23,168,108,0.75);}.go-back-top-themes6{background-image:linear-gradient(to right,#009245,#FCEE21,#00A8C5,#D9E021);box-shadow:0 4px 15px 0 rgba(83,176,57,0.75);}.go-back-top-themes7{background-image:linear-gradient(to right,#6253e1,#852D91,#A3A1FF,#F24645);box-shadow:0 4px 15px 0 rgba(126,52,161,0.75);}.go-back-top-themes8{background-image:linear-gradient(to right,#29323c,#485563,#2b5876,#4e4376);box-shadow:0 4px 15px 0 rgba(45,54,65,0.75);}.go-back-top-themes9{background-image:linear-gradient(to right,#25aae1,#4481eb,#04befe,#3f86ed);box-shadow:0 4px 15px 0 rgba(65,132,234,0.75);}.go-back-top-themes10{background-image:linear-gradient(to right,#ed6ea0,#ec8c69,#f7186a,#FBB03B);box-shadow:0 4px 15px 0 rgba(236,116,149,0.75);}.go-back-top-themes11{background-image:linear-gradient(to right,#eb3941,#f15e64,#e14e53,#e2373f);box-shadow:0 5px 15px rgba(242,97,103,.4);}';
			var style_el = document.createElement('style');
			var style_node = document.createTextNode(style_text);
			style_el.appendChild(style_node);
			document.body.appendChild(style_el);
			var div = document.createElement('div');
			div.setAttribute('id', this.el.replace('#', ''));
			var btn = document.createElement('button');
			this.themes === 0 ? btn.setAttribute('class', this.el.replace('#', '').replace('top', 'btn')) : btn.setAttribute('class', this.el.replace('#', '').replace('top', 'btn') + ' go-back-top-themes' + this.themes);
			var btn_name = document.createTextNode(this.text);
			btn.appendChild(btn_name);
			div.appendChild(btn);
			document.body.appendChild(div);
			this.btn = div;
			this.unsetUseless()
		},
		showBtn: function() {
			if (!this.show_flag) {
				this.btn.style.cssText = 'display:block';
				this.hook(this.show);
				this.show_flag = true
			}
		},
		hideBtn: function() {
			if (this.show_flag) {
				this.btn.style.cssText = 'display:none';
				this.hook(this.hide);
				this.show_flag = false
			}
		},
		onLoad: function(self) {
			if (!this.isBrowser()) throw (new Error('The current environment is not the browser!'));
			if (this.getIEVersion() !== -1 && this.getIEVersion() < 9) throw (new Error('HeiGoBackTop does not support ie 9 the following browsers!'));
			this.bindOn(window, 'load', self.init)
		},
		onScroll: function(func) {
			this.scroll = func
		},
		bindOn: function(el, event, func) {
			if (func === undefined) return false;
			this.addEventListener(el, event, func.bind(this))
		},
		getScrollTop: function() {
			return document.documentElement.scrollTop || document.body.scrollTop
		},
		checkBtn: function() {
			this.getScrollTop() > this.show_height ? this.showBtn() : this.hideBtn()
		},
		addEventListener: function(el, type, fn) {
			if (el.addEventListener) {
				el.addEventListener(type, fn, false)
			} else if (el.attachEvent) {
				el.attachEvent('on' + type, fn)
			} else {
				return false
			}
		},
		showVersion: function() {
			this.getIEVersion() !== -1 ? console.log("HeiGoBackTop " + this.version + ' ' + this.home) : console.log("\n\n %c HeiGoBackTop " + this.version + " %c " + this.home + " \n\n", "color: #fff; background: linear-gradient(90deg, #8080ff, #ff99ff); padding:5px 1px;", "background: linear-gradient(90deg,#ffccff,#80ffd4); padding:5px 0px;")
		},
		controller: function() {
			switch (this.mode) {
			case 0:
				this.bindOn(this.btn, 'click', this.goBackTop);
				break;
			case 1:
				this.bindOn(this.btn, 'click', this.goDown);
				break;
			case 2:
				this.bindOn(this.btn, 'click', this.goBackTopSlow);
				break;
			case 3:
				this.bindOn(this.btn, 'click', this.goDownSlow)
			}
		},
		goBackTop: function() {
			this.setScrollTop(0);
			this.hook(this.scrollOver)
		},
		goBackTopSlow: function() {
			this.scrollSpeed(this.getScrollTop(), 0)
		},
		goDown: function() {
			this.setScrollTop(this.getScrollHeight());
			this.hook(this.scrollOver)
		},
		goDownSlow: function() {
			this.scrollSpeed(this.getScrollTop(), this.getScrollHeight())
		},
		scrollSpeed: function(start, end) {
			if (this.flag) return false;
			this.flag = true;
			var timer = null;
			if (end === 0) {
				timer = setInterval(function() {
					var scroll_top = this.getScrollTop();
					if (scroll_top >= this.distance) {
						start -= this.distance;
						this.setScrollTop(start)
					} else {
						if (scroll_top === 0) {
							this.flag = false;
							clearInterval(timer);
							this.hook(this.scrollOver)
						} else {
							this.setScrollTop(0)
						}
					}
				}.bind(this), this.speed)
			} else {
				timer = setInterval(function() {
					if (this.getLast() > 0) {
						start += this.distance;
						this.setScrollTop(start)
					} else {
						this.flag = false;
						this.setScrollTop(end);
						clearInterval(timer);
						this.hook(this.scrollOver)
					}
				}.bind(this), this.speed)
			}
		},
		setScrollTop: function(height) {
			document.documentElement.scrollTop ? document.documentElement.scrollTop = height: document.body.scrollTop = height
		},
		getScrollHeight: function() {
			return document.compatMode === 'CSS1Compat' ? document.documentElement.scrollHeight: document.body.scrollHeight
		},
		unset: function(key, set) {
			if (set === undefined) {
				delete this[key]
			} else {
				this.getIEVersion() !== -1 && this.getIEVersion() <= 10 ? this[key] = undefined: this.__proto__[key] = undefined
			}
		},
		unsetUseless: function() {
			this.unset('el');
			this.unset('width');
			this.unset('height');
			this.unset('top');
			this.unset('right');
			this.unset('text');
			this.unset('text_color');
			this.unset('radius');
			this.unset('themes');
			this.unset('color');
			this.unset('shadow')
		},
		getLast: function() {
			var marginBot = 0;
			if (document.compatMode === "CSS1Compat") {
				marginBot = document.documentElement.scrollHeight - (document.documentElement.scrollTop + document.body.scrollTop) - document.documentElement.clientHeight
			} else {
				marginBot = document.body.scrollHeight - document.body.scrollTop - document.body.clientHeight
			}
			return marginBot
		},
		onScrollOver: function(func) {
			this.scrollOver = func
		},
		getIEVersion: function() {
			var userAgent = navigator.userAgent;
			var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
			var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
			var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
			if (isIE) {
				var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
				reIE.test(userAgent);
				var fIEVersion = parseFloat(RegExp["$1"]);
				if (fIEVersion == 7) {
					return 7
				} else if (fIEVersion == 8) {
					return 8
				} else if (fIEVersion == 9) {
					return 9
				} else if (fIEVersion == 10) {
					return 10
				} else {
					return 6
				}
			} else if (isEdge) {
				return 12
			} else if (isIE11) {
				return 11
			} else {
				return - 1
			}
		},
		isBrowser: function() {
			return typeof(window) === "undefined" ? false: true
		}
	};
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = HeiGoBackTop
	} else if (typeof define === 'function') {
		define(function() {
			return HeiGoBackTop
		})
	} else {
		global.HeiGoBackTop = HeiGoBackTop
	}
})(this);