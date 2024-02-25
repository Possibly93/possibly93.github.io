///home/zo/__/www/win3/public/42/js/polyfill/polyfill.js
String.prototype.trim || (String.prototype.trim = function() {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}), Date.now = Date.now || function() {
		return +new Date
	},
	function() {
		if(void 0 === window.performance && (window.performance = {}), !window.performance.now) {
			var e = Date.now();
			performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
				return Date.now() - e
			}
		}
	}(), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
		var n = this.toString();
		("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
		var r = n.indexOf(e, t);
		return -1 !== r && r === t
	}), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
		return t = t || 0, this.substr(t, e.length) === e
	}),
	function() {
		"use strict";
		for(var i = 0, e = ["ms", "moz", "webkit", "o"], t = !(!window.performance || !window.performance.now), n = 0, r = e.length; n < r && !window.requestAnimationFrame; n += 1) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
		if(!/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
				var n = (new Date).getTime(),
					r = Math.max(0, 16 - (n - i)),
					o = window.setTimeout(function() {
						e(n + r)
					}, r);
				return i = n + r, o
			}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
				clearTimeout(e)
			}), !t) {
			var o = window.requestAnimationFrame,
				a = +new Date;
			window.requestAnimationFrame = function(t, e) {
				o(function(e) {
					return t(e < 1e12 ? e : e - a)
				}, e)
			}
		}
	}(), String.prototype.repeat || (String.prototype.repeat = function(e) {
		"use strict";
		if(null == this) throw new TypeError("can't convert " + this + " to object");
		var t = "" + this;
		if((e = +e) != e && (e = 0), e < 0) throw new RangeError("repeat count must be non-negative");
		if(e == 1 / 0) throw new RangeError("repeat count must be less than infinity");
		if(e = Math.floor(e), 0 == t.length || 0 == e) return "";
		if(t.length * e >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
		for(var n = ""; 1 == (1 & e) && (n += t), 0 != (e >>>= 1);) t += t;
		return n
	}),
	function(e) {
		"use strict";
		e.console = e.console || {};
		for(var t, n, r = e.console, o = {}, i = function() {}, a = "memory".split(","), s = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = a.pop();) r[t] = r[t] || o;
		for(; n = s.pop();) r[n] = r[n] || i
	}("undefined" == typeof window ? this : window), Object.assign || Object.defineProperty(Object, "assign", {
		enumerable: !1,
		configurable: !0,
		writable: !0,
		value: function(e) {
			"use strict";
			if(null == e) throw new TypeError("Cannot convert first argument to object");
			for(var t = Object(e), n = 1; n < arguments.length; n++) {
				var r = arguments[n];
				if(null != r) {
					r = Object(r);
					for(var o = Object.keys(r), i = 0, a = o.length; i < a; i++) {
						var s = o[i],
							c = Object.getOwnPropertyDescriptor(r, s);
						void 0 !== c && c.enumerable && (t[s] = r[s])
					}
				}
			}
			return t
		}
	}),
	function(n, r) {
		"use strict";
		if(!n.setImmediate) {
			var o, i, t, a, e, s = 1,
				c = {},
				u = !1,
				f = n.document,
				m = Object.getPrototypeOf && Object.getPrototypeOf(n);
			m = m && m.setTimeout ? m : n, o = "[object process]" === {}.toString.call(n.process) ? function(e) {
				process.nextTick(function() {
					p(e)
				})
			} : function() {
				if(n.postMessage && !n.importScripts) {
					var e = !0,
						t = n.onmessage;
					return n.onmessage = function() {
						e = !1
					}, n.postMessage("", "*"), n.onmessage = t, e
				}
			}() ? (a = "setImmediate$" + Math.random() + "$", e = function(e) {
				e.source === n && "string" == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length))
			}, n.addEventListener ? n.addEventListener("message", e, !1) : n.attachEvent("onmessage", e), function(e) {
				n.postMessage(a + e, "*")
			}) : n.MessageChannel ? ((t = new MessageChannel).port1.onmessage = function(e) {
				p(e.data)
			}, function(e) {
				t.port2.postMessage(e)
			}) : f && "onreadystatechange" in f.createElement("script") ? (i = f.documentElement, function(e) {
				var t = f.createElement("script");
				t.onreadystatechange = function() {
					p(e), t.onreadystatechange = null, i.removeChild(t), t = null
				}, i.appendChild(t)
			}) : function(e) {
				setTimeout(p, 0, e)
			}, m.setImmediate = function(e) {
				"function" != typeof e && (e = new Function("" + e));
				for(var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
				var r = {
					callback: e,
					args: t
				};
				return c[s] = r, o(s), s++
			}, m.clearImmediate = l
		}

		function l(e) {
			delete c[e]
		}

		function p(e) {
			if(u) setTimeout(p, 0, e);
			else {
				var t = c[e];
				if(t) {
					u = !0;
					try {
						! function(e) {
							var t = e.callback,
								n = e.args;
							switch(n.length) {
								case 0:
									t();
									break;
								case 1:
									t(n[0]);
									break;
								case 2:
									t(n[0], n[1]);
									break;
								case 3:
									t(n[0], n[1], n[2]);
									break;
								default:
									t.apply(r, n)
							}
						}(t)
					}
					finally {
						l(e), u = !1
					}
				}
			}
		}
	}("undefined" == typeof self ? "undefined" == typeof global ? this : global : self);
///home/zo/__/www/win3/public/42/os/vendor/localforage.js
! function(e) {
	if("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if("function" == typeof define && define.amd) define([], e);
	else {
		("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).localforage = e()
	}
}(function() {
	return function i(a, u, c) {
		function f(r, e) {
			if(!u[r]) {
				if(!a[r]) {
					var t = "function" == typeof require && require;
					if(!e && t) return t(r, !0);
					if(s) return s(r, !0);
					var n = new Error("Cannot find module '" + r + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				var o = u[r] = {
					exports: {}
				};
				a[r][0].call(o.exports, function(e) {
					var t = a[r][1][e];
					return f(t || e)
				}, o, o.exports, i, a, u, c)
			}
			return u[r].exports
		}
		for(var s = "function" == typeof require && require, e = 0; e < c.length; e++) f(c[e]);
		return f
	}({
		1: [function(e, s, t) {
			(function(t) {
				"use strict";
				var r, n, e = t.MutationObserver || t.WebKitMutationObserver;
				if(e) {
					var o = 0,
						i = new e(f),
						a = t.document.createTextNode("");
					i.observe(a, {
						characterData: !0
					}), r = function() {
						a.data = o = ++o % 2
					}
				}
				else if(t.setImmediate || void 0 === t.MessageChannel) r = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
					var e = t.document.createElement("script");
					e.onreadystatechange = function() {
						f(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
					}, t.document.documentElement.appendChild(e)
				} : function() {
					setTimeout(f, 0)
				};
				else {
					var u = new t.MessageChannel;
					u.port1.onmessage = f, r = function() {
						u.port2.postMessage(0)
					}
				}
				var c = [];

				function f() {
					var e, t;
					n = !0;
					for(var r = c.length; r;) {
						for(t = c, c = [], e = -1; ++e < r;) t[e]();
						r = c.length
					}
					n = !1
				}
				s.exports = function(e) {
					1 !== c.push(e) || n || r()
				}
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		2: [function(e, t, r) {
			"use strict";
			var o = e(1);

			function f() {}
			var s = {},
				i = ["REJECTED"],
				a = ["FULFILLED"],
				n = ["PENDING"];

			function u(e) {
				if("function" != typeof e) throw new TypeError("resolver must be a function");
				this.state = n, this.queue = [], this.outcome = void 0, e !== f && v(this, e)
			}

			function c(e, t, r) {
				this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected)
			}

			function l(t, r, n) {
				o(function() {
					var e;
					try {
						e = r(n)
					}
					catch (e) {
						return s.reject(t, e)
					}
					e === t ? s.reject(t, new TypeError("Cannot resolve promise with itself")) : s.resolve(t, e)
				})
			}

			function d(e) {
				var t = e && e.then;
				if(e && "object" == typeof e && "function" == typeof t) return function() {
					t.apply(e, arguments)
				}
			}

			function v(t, e) {
				var r = !1;

				function n(e) {
					r || (r = !0, s.reject(t, e))
				}

				function o(e) {
					r || (r = !0, s.resolve(t, e))
				}
				var i = h(function() {
					e(o, n)
				});
				"error" === i.status && n(i.value)
			}

			function h(e, t) {
				var r = {};
				try {
					r.value = e(t), r.status = "success"
				}
				catch (e) {
					r.status = "error", r.value = e
				}
				return r
			}
			t.exports = r = u, u.prototype.catch = function(e) {
				return this.then(null, e)
			}, u.prototype.then = function(e, t) {
				if("function" != typeof e && this.state === a || "function" != typeof t && this.state === i) return this;
				var r = new this.constructor(f);
				this.state !== n ? l(r, this.state === a ? e : t, this.outcome) : this.queue.push(new c(r, e, t));
				return r
			}, c.prototype.callFulfilled = function(e) {
				s.resolve(this.promise, e)
			}, c.prototype.otherCallFulfilled = function(e) {
				l(this.promise, this.onFulfilled, e)
			}, c.prototype.callRejected = function(e) {
				s.reject(this.promise, e)
			}, c.prototype.otherCallRejected = function(e) {
				l(this.promise, this.onRejected, e)
			}, s.resolve = function(e, t) {
				var r = h(d, t);
				if("error" === r.status) return s.reject(e, r.value);
				var n = r.value;
				if(n) v(e, n);
				else {
					e.state = a, e.outcome = t;
					for(var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t)
				}
				return e
			}, s.reject = function(e, t) {
				e.state = i, e.outcome = t;
				for(var r = -1, n = e.queue.length; ++r < n;) e.queue[r].callRejected(t);
				return e
			}, r.resolve = function(e) {
				if(e instanceof this) return e;
				return s.resolve(new this(f), e)
			}, r.reject = function(e) {
				var t = new this(f);
				return s.reject(t, e)
			}, r.all = function(e) {
				var r = this;
				if("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
				var n = e.length,
					o = !1;
				if(!n) return this.resolve([]);
				var i = new Array(n),
					a = 0,
					t = -1,
					u = new this(f);
				for(; ++t < n;) c(e[t], t);
				return u;

				function c(e, t) {
					r.resolve(e).then(function(e) {
						i[t] = e, ++a !== n || o || (o = !0, s.resolve(u, i))
					}, function(e) {
						o || (o = !0, s.reject(u, e))
					})
				}
			}, r.race = function(e) {
				var t = this;
				if("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
				var r = e.length,
					n = !1;
				if(!r) return this.resolve([]);
				var o = -1,
					i = new this(f);
				for(; ++o < r;) a = e[o], t.resolve(a).then(function(e) {
					n || (n = !0, s.resolve(i, e))
				}, function(e) {
					n || (n = !0, s.reject(i, e))
				});
				var a;
				return i
			}
		}, {
			1: 1
		}],
		3: [function(t, e, r) {
			(function(e) {
				"use strict";
				"function" != typeof e.Promise && (e.Promise = t(2))
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			2: 2
		}],
		4: [function(e, t, r) {
			"use strict";
			var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
			var a = function() {
				try {
					if("undefined" != typeof indexedDB) return indexedDB;
					if("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
					if("undefined" != typeof mozIndexedDB) return mozIndexedDB;
					if("undefined" != typeof OIndexedDB) return OIndexedDB;
					if("undefined" != typeof msIndexedDB) return msIndexedDB
				}
				catch (e) {}
			}();

			function u(t, r) {
				t = t || [], r = r || {};
				try {
					return new Blob(t, r)
				}
				catch (e) {
					if("TypeError" !== e.name) throw e;
					for(var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), o = 0; o < t.length; o += 1) n.append(t[o]);
					return n.getBlob(r.type)
				}
			}
			"undefined" == typeof Promise && e(3);
			var l = Promise;

			function d(e, t) {
				t && e.then(function(e) {
					t(null, e)
				}, function(e) {
					t(e)
				})
			}

			function c(e, t, r) {
				"function" == typeof t && e.then(t), "function" == typeof r && e.catch(r)
			}
			var o, s, f = "local-forage-detect-blob-support",
				v = Object.prototype.toString,
				h = "readonly",
				y = "readwrite";

			function p(e) {
				return "boolean" == typeof o ? l.resolve(o) : function(n) {
					return new l(function(r) {
						var e = n.transaction(f, y),
							t = u([""]);
						e.objectStore(f).put(t, "key"), e.onabort = function(e) {
							e.preventDefault(), e.stopPropagation(), r(!1)
						}, e.oncomplete = function() {
							var e = navigator.userAgent.match(/Chrome\/(\d+)/),
								t = navigator.userAgent.match(/Edge\//);
							r(t || !e || 43 <= parseInt(e[1], 10))
						}
					}).catch(function() {
						return !1
					})
				}(e).then(function(e) {
					return o = e
				})
			}

			function b(e) {
				var t = s[e.name],
					r = {};
				r.promise = new l(function(e) {
					r.resolve = e
				}), t.deferredOperations.push(r), t.dbReady ? t.dbReady = t.dbReady.then(function() {
					return r.promise
				}) : t.dbReady = r.promise
			}

			function g(o, i) {
				return new l(function(e, t) {
					if(o.db) {
						if(!i) return e(o.db);
						b(o), o.db.close()
					}
					var r = [o.name];
					i && r.push(o.version);
					var n = a.open.apply(a, r);
					i && (n.onupgradeneeded = function(t) {
						var e = n.result;
						try {
							e.createObjectStore(o.storeName), t.oldVersion <= 1 && e.createObjectStore(f)
						}
						catch (e) {
							if("ConstraintError" !== e.name) throw e;
							console.warn('The database "' + o.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + o.storeName + '" already exists.')
						}
					}), n.onerror = function(e) {
						e.preventDefault(), t(n.error)
					}, n.onsuccess = function() {
						e(n.result),
							function(e) {
								var t = s[e.name].deferredOperations.pop();
								t && t.resolve()
							}(o)
					}
				})
			}

			function m(e) {
				return u([function(e) {
					for(var t = e.length, r = new ArrayBuffer(t), n = new Uint8Array(r), o = 0; o < t; o++) n[o] = e.charCodeAt(o);
					return r
				}(atob(e.data))], {
					type: e.type
				})
			}

			function _(e) {
				return e && e.__local_forage_encoded_blob
			}

			function w(e) {
				var t = this,
					r = t._initReady().then(function() {
						var e = s[t._dbInfo.name];
						if(e && e.dbReady) return e.dbReady
					});
				return c(r, e, e), r
			}

			function i(t) {
				b(t);
				for(var r = s[t.name].forages, e = 0; e < r.length; e++) r[e]._dbInfo.db && (r[e]._dbInfo.db.close(), r[e]._dbInfo.db = null);
				return g(t, !1).then(function(e) {
					for(var t = 0; t < r.length; t++) r[t]._dbInfo.db = e
				}).catch(function(e) {
					throw function(e, t) {
						var r = s[e.name].deferredOperations.pop();
						r && r.reject(t)
					}(t, e), e
				})
			}

			function S(t, r, n) {
				try {
					var e = t.db.transaction(t.storeName, r);
					n(null, e)
				}
				catch (e) {
					if(!t.db || "InvalidStateError" === e.name) return i(t).then(function() {
						var e = t.db.transaction(t.storeName, r);
						n(null, e)
					});
					n(e)
				}
			}
			var I = {
					_driver: "asyncStorage",
					_initStorage: function(e) {
						var n = this,
							o = {
								db: null
							};
						if(e)
							for(var t in e) o[t] = e[t];
						s || (s = {});
						var i = s[o.name];
						i || (i = {
							forages: [],
							db: null,
							dbReady: null,
							deferredOperations: []
						}, s[o.name] = i), i.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = w);
						var r = [];

						function a() {
							return l.resolve()
						}
						for(var u = 0; u < i.forages.length; u++) {
							var c = i.forages[u];
							c !== n && r.push(c._initReady().catch(a))
						}
						var f = i.forages.slice(0);
						return l.all(r).then(function() {
							return o.db = i.db,
								function(e) {
									return g(e, !1)
								}(o)
						}).then(function(e) {
							return o.db = e,
								function(e, t) {
									if(!e.db) return !0;
									var r = !e.db.objectStoreNames.contains(e.storeName),
										n = e.version < e.db.version,
										o = e.version > e.db.version;
									if(n && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || r) {
										if(r) {
											var i = e.db.version + 1;
											i > e.version && (e.version = i)
										}
										return !0
									}
									return !1
								}(o, n._defaultConfig.version) ? function(e) {
									return g(e, !0)
								}(o) : e
						}).then(function(e) {
							o.db = i.db = e, n._dbInfo = o;
							for(var t = 0; t < f.length; t++) {
								var r = f[t];
								r !== n && (r._dbInfo.db = o.db, r._dbInfo.version = o.version)
							}
						})
					},
					iterate: function(a, e) {
						var u = this,
							t = new l(function(i, r) {
								u.ready().then(function() {
									S(u._dbInfo, h, function(e, t) {
										if(e) return r(e);
										try {
											var n = t.objectStore(u._dbInfo.storeName).openCursor(),
												o = 1;
											n.onsuccess = function() {
												var e = n.result;
												if(e) {
													var t = e.value;
													_(t) && (t = m(t));
													var r = a(t, e.key, o++);
													void 0 !== r ? i(r) : e.continue()
												}
												else i()
											}, n.onerror = function() {
												r(n.error)
											}
										}
										catch (e) {
											r(e)
										}
									})
								}).catch(r)
							});
						return d(t, e), t
					},
					getItem: function(i, e) {
						var a = this;
						"string" != typeof i && (console.warn(i + " used as a key, but it is not a string."), i = String(i));
						var t = new l(function(n, o) {
							a.ready().then(function() {
								S(a._dbInfo, h, function(e, t) {
									if(e) return o(e);
									try {
										var r = t.objectStore(a._dbInfo.storeName).get(i);
										r.onsuccess = function() {
											var e = r.result;
											void 0 === e && (e = null), _(e) && (e = m(e)), n(e)
										}, r.onerror = function() {
											o(r.error)
										}
									}
									catch (e) {
										o(e)
									}
								})
							}).catch(o)
						});
						return d(t, e), t
					},
					setItem: function(a, t, e) {
						var u = this;
						"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));
						var r = new l(function(o, i) {
							var e;
							u.ready().then(function() {
								return e = u._dbInfo, "[object Blob]" === v.call(t) ? p(e.db).then(function(e) {
									return e ? t : function(n) {
										return new l(function(r, e) {
											var t = new FileReader;
											t.onerror = e, t.onloadend = function(e) {
												var t = btoa(e.target.result || "");
												r({
													__local_forage_encoded_blob: !0,
													data: t,
													type: n.type
												})
											}, t.readAsBinaryString(n)
										})
									}(t)
								}) : t
							}).then(function(n) {
								S(u._dbInfo, y, function(e, t) {
									if(e) return i(e);
									try {
										var r = t.objectStore(u._dbInfo.storeName).put(n, a);
										null === n && (n = void 0), t.oncomplete = function() {
											void 0 === n && (n = null), o(n)
										}, t.onabort = t.onerror = function() {
											var e = r.error ? r.error : r.transaction.error;
											i(e)
										}
									}
									catch (e) {
										i(e)
									}
								})
							}).catch(i)
						});
						return d(r, e), r
					},
					removeItem: function(i, e) {
						var a = this;
						"string" != typeof i && (console.warn(i + " used as a key, but it is not a string."), i = String(i));
						var t = new l(function(n, o) {
							a.ready().then(function() {
								S(a._dbInfo, y, function(e, t) {
									if(e) return o(e);
									try {
										var r = t.objectStore(a._dbInfo.storeName).delete(i);
										t.oncomplete = function() {
											n()
										}, t.onerror = function() {
											o(r.error)
										}, t.onabort = function() {
											var e = r.error ? r.error : r.transaction.error;
											o(e)
										}
									}
									catch (e) {
										o(e)
									}
								})
							}).catch(o)
						});
						return d(t, e), t
					},
					clear: function(e) {
						var i = this,
							t = new l(function(n, o) {
								i.ready().then(function() {
									S(i._dbInfo, y, function(e, t) {
										if(e) return o(e);
										try {
											var r = t.objectStore(i._dbInfo.storeName).clear();
											t.oncomplete = function() {
												n()
											}, t.onabort = t.onerror = function() {
												var e = r.error ? r.error : r.transaction.error;
												o(e)
											}
										}
										catch (e) {
											o(e)
										}
									})
								}).catch(o)
							});
						return d(t, e), t
					},
					length: function(e) {
						var i = this,
							t = new l(function(n, o) {
								i.ready().then(function() {
									S(i._dbInfo, h, function(e, t) {
										if(e) return o(e);
										try {
											var r = t.objectStore(i._dbInfo.storeName).count();
											r.onsuccess = function() {
												n(r.result)
											}, r.onerror = function() {
												o(r.error)
											}
										}
										catch (e) {
											o(e)
										}
									})
								}).catch(o)
							});
						return d(t, e), t
					},
					key: function(u, e) {
						var c = this,
							t = new l(function(i, a) {
								u < 0 ? i(null) : c.ready().then(function() {
									S(c._dbInfo, h, function(e, t) {
										if(e) return a(e);
										try {
											var r = t.objectStore(c._dbInfo.storeName),
												n = !1,
												o = r.openCursor();
											o.onsuccess = function() {
												var e = o.result;
												e ? 0 === u ? i(e.key) : n ? i(e.key) : (n = !0, e.advance(u)) : i(null)
											}, o.onerror = function() {
												a(o.error)
											}
										}
										catch (e) {
											a(e)
										}
									})
								}).catch(a)
							});
						return d(t, e), t
					},
					keys: function(e) {
						var a = this,
							t = new l(function(o, i) {
								a.ready().then(function() {
									S(a._dbInfo, h, function(e, t) {
										if(e) return i(e);
										try {
											var r = t.objectStore(a._dbInfo.storeName).openCursor(),
												n = [];
											r.onsuccess = function() {
												var e = r.result;
												e ? (n.push(e.key), e.continue()) : o(n)
											}, r.onerror = function() {
												i(r.error)
											}
										}
										catch (e) {
											i(e)
										}
									})
								}).catch(i)
							});
						return d(t, e), t
					}
				},
				E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				A = /^~~local_forage_type~([^~]+)~/,
				D = "__lfsc__:",
				j = D.length,
				O = "arbf",
				B = "blob",
				R = j + O.length,
				k = Object.prototype.toString;

			function x(e) {
				var t, r, n, o, i, a = .75 * e.length,
					u = e.length,
					c = 0;
				"=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
				var f = new ArrayBuffer(a),
					s = new Uint8Array(f);
				for(t = 0; t < u; t += 4) r = E.indexOf(e[t]), n = E.indexOf(e[t + 1]), o = E.indexOf(e[t + 2]), i = E.indexOf(e[t + 3]), s[c++] = r << 2 | n >> 4, s[c++] = (15 & n) << 4 | o >> 2, s[c++] = (3 & o) << 6 | 63 & i;
				return f
			}

			function N(e) {
				var t, r = new Uint8Array(e),
					n = "";
				for(t = 0; t < r.length; t += 3) n += E[r[t] >> 2], n += E[(3 & r[t]) << 4 | r[t + 1] >> 4], n += E[(15 & r[t + 1]) << 2 | r[t + 2] >> 6], n += E[63 & r[t + 2]];
				return r.length % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : r.length % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
			}
			var C = {
				serialize: function(t, r) {
					var e = "";
					if(t && (e = k.call(t)), t && ("[object ArrayBuffer]" === e || t.buffer && "[object ArrayBuffer]" === k.call(t.buffer))) {
						var n, o = D;
						t instanceof ArrayBuffer ? (n = t, o += O) : (n = t.buffer, "[object Int8Array]" === e ? o += "si08" : "[object Uint8Array]" === e ? o += "ui08" : "[object Uint8ClampedArray]" === e ? o += "uic8" : "[object Int16Array]" === e ? o += "si16" : "[object Uint16Array]" === e ? o += "ur16" : "[object Int32Array]" === e ? o += "si32" : "[object Uint32Array]" === e ? o += "ui32" : "[object Float32Array]" === e ? o += "fl32" : "[object Float64Array]" === e ? o += "fl64" : r(new Error("Failed to get type for BinaryArray"))), r(o + N(n))
					}
					else if("[object Blob]" === e) {
						var i = new FileReader;
						i.onload = function() {
							var e = "~~local_forage_type~" + t.type + "~" + N(this.result);
							r(D + B + e)
						}, i.readAsArrayBuffer(t)
					}
					else try {
						r(JSON.stringify(t))
					}
					catch (e) {
						console.error("Couldn't convert value into a JSON string: ", t), r(null, e)
					}
				},
				deserialize: function(e) {
					if(e.substring(0, j) !== D) return JSON.parse(e);
					var t, r = e.substring(R),
						n = e.substring(j, R);
					if(n === B && A.test(r)) {
						var o = r.match(A);
						t = o[1], r = r.substring(o[0].length)
					}
					var i = x(r);
					switch(n) {
						case O:
							return i;
						case B:
							return u([i], {
								type: t
							});
						case "si08":
							return new Int8Array(i);
						case "ui08":
							return new Uint8Array(i);
						case "uic8":
							return new Uint8ClampedArray(i);
						case "si16":
							return new Int16Array(i);
						case "ur16":
							return new Uint16Array(i);
						case "si32":
							return new Int32Array(i);
						case "ui32":
							return new Uint32Array(i);
						case "fl32":
							return new Float32Array(i);
						case "fl64":
							return new Float64Array(i);
						default:
							throw new Error("Unkown type: " + n)
					}
				},
				stringToBuffer: x,
				bufferToString: N
			};
			var L = {
				_driver: "webSQLStorage",
				_initStorage: function(e) {
					var n = this,
						o = {
							db: null
						};
					if(e)
						for(var t in e) o[t] = "string" != typeof e[t] ? e[t].toString() : e[t];
					var r = new l(function(t, r) {
						try {
							o.db = openDatabase(o.name, String(o.version), o.description, o.size)
						}
						catch (e) {
							return r(e)
						}
						o.db.transaction(function(e) {
							e.executeSql("CREATE TABLE IF NOT EXISTS " + o.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
								n._dbInfo = o, t()
							}, function(e, t) {
								r(t)
							})
						})
					});
					return o.serializer = C, r
				},
				iterate: function(f, e) {
					var t = this,
						r = new l(function(c, r) {
							t.ready().then(function() {
								var u = t._dbInfo;
								u.db.transaction(function(e) {
									e.executeSql("SELECT * FROM " + u.storeName, [], function(e, t) {
										for(var r = t.rows, n = r.length, o = 0; o < n; o++) {
											var i = r.item(o),
												a = i.value;
											if(a && (a = u.serializer.deserialize(a)), void 0 !== (a = f(a, i.key, o + 1))) return void c(a)
										}
										c()
									}, function(e, t) {
										r(t)
									})
								})
							}).catch(r)
						});
					return d(r, e), r
				},
				getItem: function(t, e) {
					var i = this;
					"string" != typeof t && (console.warn(t + " used as a key, but it is not a string."), t = String(t));
					var r = new l(function(o, r) {
						i.ready().then(function() {
							var n = i._dbInfo;
							n.db.transaction(function(e) {
								e.executeSql("SELECT * FROM " + n.storeName + " WHERE key = ? LIMIT 1", [t], function(e, t) {
									var r = t.rows.length ? t.rows.item(0).value : null;
									r && (r = n.serializer.deserialize(r)), o(r)
								}, function(e, t) {
									r(t)
								})
							})
						}).catch(r)
					});
					return d(r, e), r
				},
				setItem: function(e, t, r) {
					return function a(u, e, c, f) {
						var s = this;
						"string" != typeof u && (console.warn(u + " used as a key, but it is not a string."), u = String(u));
						var t = new l(function(o, i) {
							s.ready().then(function() {
								void 0 === e && (e = null);
								var r = e,
									n = s._dbInfo;
								n.serializer.serialize(e, function(t, e) {
									e ? i(e) : n.db.transaction(function(e) {
										e.executeSql("INSERT OR REPLACE INTO " + n.storeName + " (key, value) VALUES (?, ?)", [u, t], function() {
											o(r)
										}, function(e, t) {
											i(t)
										})
									}, function(e) {
										if(e.code === e.QUOTA_ERR) {
											if(0 < f) return void o(a.apply(s, [u, r, c, f - 1]));
											i(e)
										}
									})
								})
							}).catch(i)
						});
						return d(t, c), t
					}.apply(this, [e, t, r, 1])
				},
				removeItem: function(o, e) {
					var i = this;
					"string" != typeof o && (console.warn(o + " used as a key, but it is not a string."), o = String(o));
					var t = new l(function(r, n) {
						i.ready().then(function() {
							var t = i._dbInfo;
							t.db.transaction(function(e) {
								e.executeSql("DELETE FROM " + t.storeName + " WHERE key = ?", [o], function() {
									r()
								}, function(e, t) {
									n(t)
								})
							})
						}).catch(n)
					});
					return d(t, e), t
				},
				clear: function(e) {
					var o = this,
						t = new l(function(r, n) {
							o.ready().then(function() {
								var t = o._dbInfo;
								t.db.transaction(function(e) {
									e.executeSql("DELETE FROM " + t.storeName, [], function() {
										r()
									}, function(e, t) {
										n(t)
									})
								})
							}).catch(n)
						});
					return d(t, e), t
				},
				length: function(e) {
					var o = this,
						t = new l(function(n, r) {
							o.ready().then(function() {
								var t = o._dbInfo;
								t.db.transaction(function(e) {
									e.executeSql("SELECT COUNT(key) as c FROM " + t.storeName, [], function(e, t) {
										var r = t.rows.item(0).c;
										n(r)
									}, function(e, t) {
										r(t)
									})
								})
							}).catch(r)
						});
					return d(t, e), t
				},
				key: function(o, e) {
					var i = this,
						t = new l(function(n, r) {
							i.ready().then(function() {
								var t = i._dbInfo;
								t.db.transaction(function(e) {
									e.executeSql("SELECT key FROM " + t.storeName + " WHERE id = ? LIMIT 1", [o + 1], function(e, t) {
										var r = t.rows.length ? t.rows.item(0).key : null;
										n(r)
									}, function(e, t) {
										r(t)
									})
								})
							}).catch(r)
						});
					return d(t, e), t
				},
				keys: function(e) {
					var n = this,
						t = new l(function(o, r) {
							n.ready().then(function() {
								var t = n._dbInfo;
								t.db.transaction(function(e) {
									e.executeSql("SELECT key FROM " + t.storeName, [], function(e, t) {
										for(var r = [], n = 0; n < t.rows.length; n++) r.push(t.rows.item(n).key);
										o(r)
									}, function(e, t) {
										r(t)
									})
								})
							}).catch(r)
						});
					return d(t, e), t
				}
			};
			var T = {
					_driver: "localStorageWrapper",
					_initStorage: function(e) {
						var t = {};
						if(e)
							for(var r in e) t[r] = e[r];
						return t.keyPrefix = t.name + "/", t.storeName !== this._defaultConfig.storeName && (t.keyPrefix += t.storeName + "/"), (this._dbInfo = t).serializer = C, l.resolve()
					},
					iterate: function(c, e) {
						var f = this,
							t = f.ready().then(function() {
								for(var e = f._dbInfo, t = e.keyPrefix, r = t.length, n = localStorage.length, o = 1, i = 0; i < n; i++) {
									var a = localStorage.key(i);
									if(0 === a.indexOf(t)) {
										var u = localStorage.getItem(a);
										if(u && (u = e.serializer.deserialize(u)), void 0 !== (u = c(u, a.substring(r), o++))) return u
									}
								}
							});
						return d(t, e), t
					},
					getItem: function(r, e) {
						var n = this;
						"string" != typeof r && (console.warn(r + " used as a key, but it is not a string."), r = String(r));
						var t = n.ready().then(function() {
							var e = n._dbInfo,
								t = localStorage.getItem(e.keyPrefix + r);
							return t && (t = e.serializer.deserialize(t)), t
						});
						return d(t, e), t
					},
					setItem: function(a, e, t) {
						var u = this;
						"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));
						var r = u.ready().then(function() {
							void 0 === e && (e = null);
							var i = e;
							return new l(function(r, n) {
								var o = u._dbInfo;
								o.serializer.serialize(e, function(e, t) {
									if(t) n(t);
									else try {
										localStorage.setItem(o.keyPrefix + a, e), r(i)
									}
									catch (e) {
										"QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || n(e), n(e)
									}
								})
							})
						});
						return d(r, t), r
					},
					removeItem: function(t, e) {
						var r = this;
						"string" != typeof t && (console.warn(t + " used as a key, but it is not a string."), t = String(t));
						var n = r.ready().then(function() {
							var e = r._dbInfo;
							localStorage.removeItem(e.keyPrefix + t)
						});
						return d(n, e), n
					},
					clear: function(e) {
						var n = this,
							t = n.ready().then(function() {
								for(var e = n._dbInfo.keyPrefix, t = localStorage.length - 1; 0 <= t; t--) {
									var r = localStorage.key(t);
									0 === r.indexOf(e) && localStorage.removeItem(r)
								}
							});
						return d(t, e), t
					},
					length: function(e) {
						var t = this.keys().then(function(e) {
							return e.length
						});
						return d(t, e), t
					},
					key: function(r, e) {
						var n = this,
							t = n.ready().then(function() {
								var t, e = n._dbInfo;
								try {
									t = localStorage.key(r)
								}
								catch (e) {
									t = null
								}
								return t && (t = t.substring(e.keyPrefix.length)), t
							});
						return d(t, e), t
					},
					keys: function(e) {
						var o = this,
							t = o.ready().then(function() {
								for(var e = o._dbInfo, t = localStorage.length, r = [], n = 0; n < t; n++) 0 === localStorage.key(n).indexOf(e.keyPrefix) && r.push(localStorage.key(n).substring(e.keyPrefix.length));
								return r
							});
						return d(t, e), t
					}
				},
				F = {},
				z = {
					INDEXEDDB: "asyncStorage",
					LOCALSTORAGE: "localStorageWrapper",
					WEBSQL: "webSQLStorage"
				},
				M = [z.INDEXEDDB, z.WEBSQL, z.LOCALSTORAGE],
				P = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
				q = {
					description: "",
					driver: M.slice(),
					name: "localforage",
					size: 4980736,
					storeName: "keyvaluepairs",
					version: 1
				},
				U = {};
			U[z.INDEXEDDB] = function() {
				try {
					if(!a) return !1;
					var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
						t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
					return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
				}
				catch (e) {
					return !1
				}
			}(), U[z.WEBSQL] = "function" == typeof openDatabase, U[z.LOCALSTORAGE] = function() {
				try {
					return "undefined" != typeof localStorage && "setItem" in localStorage && localStorage.setItem
				}
				catch (e) {
					return !1
				}
			}();
			var W = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			};

			function Q(t, r) {
				t[r] = function() {
					var e = arguments;
					return t.ready().then(function() {
						return t[r].apply(t, e)
					})
				}
			}

			function G() {
				for(var e = 1; e < arguments.length; e++) {
					var t = arguments[e];
					if(t)
						for(var r in t) t.hasOwnProperty(r) && (W(t[r]) ? arguments[0][r] = t[r].slice() : arguments[0][r] = t[r])
				}
				return arguments[0]
			}

			function X(e) {
				for(var t in z)
					if(z.hasOwnProperty(t) && z[t] === e) return !0;
				return !1
			}
			var H = new(function() {
				function t(e) {
					! function(e, t) {
						if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), this.INDEXEDDB = z.INDEXEDDB, this.LOCALSTORAGE = z.LOCALSTORAGE, this.WEBSQL = z.WEBSQL, this._defaultConfig = G({}, q), this._config = G({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
				}
				return t.prototype.config = function(e) {
					if("object" !== (void 0 === e ? "undefined" : n(e))) return "string" == typeof e ? this._config[e] : this._config;
					if(this._ready) return new Error("Can't call config() after localforage has been used.");
					for(var t in e) {
						if("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
						this._config[t] = e[t]
					}
					return !("driver" in e && e.driver) || this.setDriver(this._config.driver)
				}, t.prototype.defineDriver = function(f, e, t) {
					var r = new l(function(t, r) {
						try {
							var n = f._driver,
								e = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
								o = new Error("Custom driver name already in use: " + f._driver);
							if(!f._driver) return void r(e);
							if(X(f._driver)) return void r(o);
							for(var i = P.concat("_initStorage"), a = 0; a < i.length; a++) {
								var u = i[a];
								if(!u || !f[u] || "function" != typeof f[u]) return void r(e)
							}
							var c = function(e) {
								U[n] = e, F[n] = f, t()
							};
							"_support" in f ? f._support && "function" == typeof f._support ? f._support().then(c, r) : c(!!f._support) : c(!0)
						}
						catch (e) {
							r(e)
						}
					});
					return c(r, e, t), r
				}, t.prototype.driver = function() {
					return this._driver || null
				}, t.prototype.getDriver = function(e, t, r) {
					var n = this,
						o = l.resolve().then(function() {
							if(!X(e)) {
								if(F[e]) return F[e];
								throw new Error("Driver not found.")
							}
							switch(e) {
								case n.INDEXEDDB:
									return I;
								case n.LOCALSTORAGE:
									return T;
								case n.WEBSQL:
									return L
							}
						});
					return c(o, t, r), o
				}, t.prototype.getSerializer = function(e) {
					var t = l.resolve(C);
					return c(t, e), t
				}, t.prototype.ready = function(e) {
					var t = this,
						r = t._driverSet.then(function() {
							return null === t._ready && (t._ready = t._initDriver()), t._ready
						});
					return c(r, e, e), r
				}, t.prototype.setDriver = function(e, t, r) {
					var i = this;
					W(e) || (e = [e]);
					var n = this._getSupportedDrivers(e);

					function a() {
						i._config.driver = i.driver()
					}

					function u(e) {
						return i._extend(e), a(), i._ready = i._initStorage(i._config), i._ready
					}
					var o = null !== this._driverSet ? this._driverSet.catch(function() {
						return l.resolve()
					}) : l.resolve();
					return this._driverSet = o.then(function() {
						var e = n[0];
						return i._dbInfo = null, i._ready = null, i.getDriver(e).then(function(e) {
							i._driver = e._driver, a(), i._wrapLibraryMethodsWithReady(), i._initDriver = function(o) {
								return function() {
									var n = 0;
									return function e() {
										for(; n < o.length;) {
											var t = o[n];
											return n++, i._dbInfo = null, i._ready = null, i.getDriver(t).then(u).catch(e)
										}
										a();
										var r = new Error("No available storage method found.");
										return i._driverSet = l.reject(r), i._driverSet
									}()
								}
							}(n)
						})
					}).catch(function() {
						a();
						var e = new Error("No available storage method found.");
						return i._driverSet = l.reject(e), i._driverSet
					}), c(this._driverSet, t, r), this._driverSet
				}, t.prototype.supports = function(e) {
					return !!U[e]
				}, t.prototype._extend = function(e) {
					G(this, e)
				}, t.prototype._getSupportedDrivers = function(e) {
					for(var t = [], r = 0, n = e.length; r < n; r++) {
						var o = e[r];
						this.supports(o) && t.push(o)
					}
					return t
				}, t.prototype._wrapLibraryMethodsWithReady = function() {
					for(var e = 0; e < P.length; e++) Q(this, P[e])
				}, t.prototype.createInstance = function(e) {
					return new t(e)
				}, t
			}());
			t.exports = H
		}, {
			3: 3
		}]
	}, {}, [4])(4)
});
///home/zo/__/www/win3/public/42/os/vendor/FileSaver.js
var saveAs = saveAs || function(l) {
	"use strict";
	if("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
		var p = l.document,
			v = function() {
				return l.URL || l.webkitURL || l
			},
			w = p.createElementNS("http://www.w3.org/1999/xhtml", "a"),
			y = "download" in w,
			m = l.webkitRequestFileSystem,
			h = l.requestFileSystem || m || l.mozRequestFileSystem,
			i = function(e) {
				(l.setImmediate || l.setTimeout)(function() {
					throw e
				}, 0)
			},
			S = "application/octet-stream",
			O = 0,
			E = function(e) {
				var t = function() {
					"string" == typeof e ? v().revokeObjectURL(e) : e.remove()
				};
				l.chrome ? t() : setTimeout(t, 500)
			},
			R = function(e, t, n) {
				for(var o = (t = [].concat(t)).length; o--;) {
					var r = e["on" + t[o]];
					if("function" == typeof r) try {
						r.call(e, n || e)
					}
					catch (e) {
						i(e)
					}
				}
			},
			b = function(e) {
				return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], {
					type: e.type
				}) : e
			},
			n = function(o, n) {
				o = b(o);
				var e, r, t, i = this,
					a = o.type,
					c = !1,
					f = function() {
						R(i, "writestart progress write writeend".split(" "))
					},
					u = function() {
						(!c && e || (e = v().createObjectURL(o)), r) ? r.location.href = e: null == l.open(e, "_blank") && "undefined" != typeof safari && (l.location.href = e);
						i.readyState = i.DONE, f(), E(e)
					},
					s = function(e) {
						return function() {
							if(i.readyState !== i.DONE) return e.apply(this, arguments)
						}
					},
					d = {
						create: !0,
						exclusive: !1
					};
				if(i.readyState = i.INIT, n || (n = "download"), y) return e = v().createObjectURL(o), w.href = e, w.download = n,
					function(e) {
						var t = p.createEvent("MouseEvents");
						t.initMouseEvent("click", !0, !1, l, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
					}(w), i.readyState = i.DONE, f(), void E(e);
				l.chrome && a && a !== S && (t = o.slice || o.webkitSlice, o = t.call(o, 0, o.size, S), c = !0), m && "download" !== n && (n += ".download"), (a === S || m) && (r = l), h ? (O += o.size, h(l.TEMPORARY, O, s(function(e) {
					e.root.getDirectory("saved", d, s(function(e) {
						var t = function() {
							e.getFile(n, d, s(function(n) {
								n.createWriter(s(function(t) {
									t.onwriteend = function(e) {
										r.location.href = n.toURL(), i.readyState = i.DONE, R(i, "writeend", e), E(n)
									}, t.onerror = function() {
										var e = t.error;
										e.code !== e.ABORT_ERR && u()
									}, "writestart progress write abort".split(" ").forEach(function(e) {
										t["on" + e] = i["on" + e]
									}), t.write(o), i.abort = function() {
										t.abort(), i.readyState = i.DONE
									}, i.readyState = i.WRITING
								}), u)
							}), u)
						};
						e.getFile(n, {
							create: !1
						}, s(function(e) {
							e.remove(), t()
						}), s(function(e) {
							e.code === e.NOT_FOUND_ERR ? t() : u()
						}))
					}), u)
				}), u)) : u()
			},
			e = n.prototype;
		return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t) {
			return navigator.msSaveOrOpenBlob(b(e), t)
		} : (e.abort = function() {
			this.readyState = this.DONE, R(this, "abort")
		}, e.readyState = e.INIT = 0, e.WRITING = 1, e.DONE = 2, e.error = e.onwritestart = e.onprogress = e.onwrite = e.onabort = e.onerror = e.onwriteend = null, function(e, t) {
			return new n(e, t)
		})
	}
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function() {
	return saveAs
});
///home/zo/__/www/win3/public/42/os/vendor/howler.js
! function() {
	var a = {},
		y = null,
		r = !0,
		u = !1;
	try {
		"undefined" != typeof AudioContext ? y = new AudioContext : "undefined" != typeof webkitAudioContext ? y = new webkitAudioContext : r = !1
	}
	catch (e) {
		r = !1
	}
	if(!r)
		if("undefined" != typeof Audio) try {
			new Audio
		}
	catch (e) {
		u = !0
	}
	else u = !0;
	if(r) {
		var i = void 0 === y.createGain ? y.createGainNode() : y.createGain();
		i.gain.value = 1, i.connect(y.destination)
	}
	var d = function(e) {
		this._volume = 1, this._muted = !1, this.usingWebAudio = r, this.ctx = y, this.noAudio = u, this._howls = [], this._codecs = e, this.iOSAutoEnable = !0
	};
	d.prototype = {
		volume: function(e) {
			var o = this;
			if(0 <= (e = parseFloat(e)) && e <= 1) {
				for(var n in o._volume = e, r && (i.gain.value = e), o._howls)
					if(o._howls.hasOwnProperty(n) && !1 === o._howls[n]._webAudio)
						for(var t = 0; t < o._howls[n]._audioNode.length; t++) o._howls[n]._audioNode[t].volume = o._howls[n]._volume * o._volume;
				return o
			}
			return r ? i.gain.value : o._volume
		},
		mute: function() {
			return this._setMuted(!0), this
		},
		unmute: function() {
			return this._setMuted(!1), this
		},
		_setMuted: function(e) {
			var o = this;
			for(var n in o._muted = e, r && (i.gain.value = e ? 0 : o._volume), o._howls)
				if(o._howls.hasOwnProperty(n) && !1 === o._howls[n]._webAudio)
					for(var t = 0; t < o._howls[n]._audioNode.length; t++) o._howls[n]._audioNode[t].muted = e
		},
		codecs: function(e) {
			return this._codecs[e]
		},
		_enableiOSAudio: function() {
			var n = this;
			if(!y || !n._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
				n._iOSEnabled = !1;
				var t = function() {
					var e = y.createBuffer(1, 1, 22050),
						o = y.createBufferSource();
					o.buffer = e, o.connect(y.destination), void 0 === o.start ? o.noteOn(0) : o.start(0), setTimeout(function() {
						o.playbackState !== o.PLAYING_STATE && o.playbackState !== o.FINISHED_STATE || (n._iOSEnabled = !0, n.iOSAutoEnable = !1, window.removeEventListener("touchstart", t, !1))
					}, 0)
				};
				return window.addEventListener("touchstart", t, !1), n
			}
		}
	};
	var e = null,
		l = {};
	u || (e = new Audio, l = {
		mp3: !!e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
		opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
		ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
		wav: !!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
		aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
		m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
		mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
		weba: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
	});
	var m = new d(l),
		o = function(e) {
			var o = this;
			o._autoplay = e.autoplay || !1, o._buffer = e.buffer || !1, o._duration = e.duration || 0, o._format = e.format || null, o._loop = e.loop || !1, o._loaded = !1, o._sprite = e.sprite || {}, o._src = e.src || "", o._pos3d = e.pos3d || [0, 0, -.5], o._volume = void 0 !== e.volume ? e.volume : 1, o._urls = e.urls || [], o._rate = e.rate || 1, o._model = e.model || null, o._onload = [e.onload || function() {}], o._onloaderror = [e.onloaderror || function() {}], o._onend = [e.onend || function() {}], o._onpause = [e.onpause || function() {}], o._onplay = [e.onplay || function() {}], o._onendTimer = [], o._webAudio = r && !o._buffer, o._audioNode = [], o._webAudio && o._setupAudioNode(), void 0 !== y && y && m.iOSAutoEnable && m._enableiOSAudio(), m._howls.push(o), o.load()
		};
	if(o.prototype = {
			load: function() {
				var e = this,
					o = null;
				if(u) e.on("loaderror");
				else {
					for(var n = 0; n < e._urls.length; n++) {
						var t, r;
						if(e._format) t = e._format;
						else {
							if(r = e._urls[n], (t = /^data:audio\/([^;,]+);/i.exec(r)) || (t = /\.([^.]+)$/.exec(r.split("?", 1)[0])), !t) return void e.on("loaderror");
							t = t[1].toLowerCase()
						}
						if(l[t]) {
							o = e._urls[n];
							break
						}
					}
					if(o) {
						if(e._src = o, e._webAudio) s(e, o);
						else {
							var i = new Audio;
							i.addEventListener("error", function() {
								i.error && 4 === i.error.code && (d.noAudio = !0), e.on("loaderror", {
									type: i.error ? i.error.code : 0
								})
							}, !1), e._audioNode.push(i), i.src = o, i._pos = 0, i.preload = "auto", i.volume = m._muted ? 0 : e._volume * m.volume();
							var a = function() {
								e._duration = Math.ceil(10 * i.duration) / 10, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
									_default: [0, 1e3 * e._duration]
								}), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play(), i.removeEventListener("canplaythrough", a, !1)
							};
							i.addEventListener("canplaythrough", a, !1), i.load()
						}
						return e
					}
					e.on("loaderror")
				}
			},
			urls: function(e) {
				var o = this;
				return e ? (o.stop(), o._urls = "string" == typeof e ? [e] : e, o._loaded = !1, o.load(), o) : o._urls
			},
			play: function(p, v) {
				var h = this;
				return "function" == typeof p && (v = p), p && "function" != typeof p || (p = "_default"), h._loaded ? h._sprite[p] ? h._inactiveNode(function(e) {
					e._sprite = p;
					var o = 0 < e._pos ? e._pos : h._sprite[p][0] / 1e3,
						n = 0;
					h._webAudio ? (n = h._sprite[p][1] / 1e3 - e._pos, 0 < e._pos && (o = h._sprite[p][0] / 1e3 + o)) : n = h._sprite[p][1] / 1e3 - (o - h._sprite[p][0] / 1e3);
					var t, r, i, a, u, d, l, s = !(!h._loop && !h._sprite[p][2]),
						_ = "string" == typeof v ? v : Math.round(Date.now() * Math.random()) + "";
					if(r = {
							id: _,
							sprite: p,
							loop: s
						}, t = setTimeout(function() {
							!h._webAudio && s && h.stop(r.id).play(p, r.id), h._webAudio && !s && (h._nodeById(r.id).paused = !0, h._nodeById(r.id)._pos = 0, h._clearEndTimer(r.id)), h._webAudio || s || h.stop(r.id), h.on("end", _)
						}, 1e3 * n), h._onendTimer.push({
							timer: t,
							id: r.id
						}), h._webAudio) {
						var f = h._sprite[p][0] / 1e3,
							c = h._sprite[p][1] / 1e3;
						e.id = _, e.paused = !1, b(h, [s, f, c], _), h._playStart = y.currentTime, e.gain.value = h._volume, void 0 === e.bufferSource.start ? s ? e.bufferSource.noteGrainOn(0, o, 86400) : e.bufferSource.noteGrainOn(0, o, n) : s ? e.bufferSource.start(0, o, 86400) : e.bufferSource.start(0, o, n)
					}
					else {
						if(4 !== e.readyState && (e.readyState || !navigator.isCocoonJS)) return h._clearEndTimer(_), i = h, a = p, u = v, l = function() {
							i.play(a, u), d.removeEventListener("canplaythrough", l, !1)
						}, (d = e).addEventListener("canplaythrough", l, !1), h;
						e.readyState = 4, e.id = _, e.currentTime = o, e.muted = m._muted || e.muted, e.volume = h._volume * m.volume(), setTimeout(function() {
							e.play()
						}, 0)
					}
					return h.on("play"), "function" == typeof v && v(_), h
				}) : "function" == typeof v && v() : h.on("load", function() {
					h.play(p, v)
				}), h
			},
			pause: function(e) {
				var o = this;
				if(!o._loaded) return o.on("play", function() {
					o.pause(e)
				}), o;
				o._clearEndTimer(e);
				var n = e ? o._nodeById(e) : o._activeNode();
				if(n)
					if(n._pos = o.pos(null, e), o._webAudio) {
						if(!n.bufferSource || n.paused) return o;
						n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
					}
				else n.pause();
				return o.on("pause"), o
			},
			stop: function(e) {
				var o = this;
				if(!o._loaded) return o.on("play", function() {
					o.stop(e)
				}), o;
				o._clearEndTimer(e);
				var n = e ? o._nodeById(e) : o._activeNode();
				if(n)
					if(n._pos = 0, o._webAudio) {
						if(!n.bufferSource || n.paused) return o;
						n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
					}
				else isNaN(n.duration) || (n.pause(), n.currentTime = 0);
				return o
			},
			mute: function(e) {
				var o = this;
				if(!o._loaded) return o.on("play", function() {
					o.mute(e)
				}), o;
				var n = e ? o._nodeById(e) : o._activeNode();
				return n && (o._webAudio ? n.gain.value = 0 : n.muted = !0), o
			},
			unmute: function(e) {
				var o = this;
				if(!o._loaded) return o.on("play", function() {
					o.unmute(e)
				}), o;
				var n = e ? o._nodeById(e) : o._activeNode();
				return n && (o._webAudio ? n.gain.value = o._volume : n.muted = !1), o
			},
			volume: function(e, o) {
				var n = this;
				if(0 <= (e = parseFloat(e)) && e <= 1) {
					if(n._volume = e, !n._loaded) return n.on("play", function() {
						n.volume(e, o)
					}), n;
					var t = o ? n._nodeById(o) : n._activeNode();
					return t && (n._webAudio ? t.gain.value = e : t.volume = e * m.volume()), n
				}
				return n._volume
			},
			loop: function(e) {
				return "boolean" == typeof e ? (this._loop = e, this) : this._loop
			},
			sprite: function(e) {
				return "object" == typeof e ? (this._sprite = e, this) : this._sprite
			},
			pos: function(e, o) {
				var n = this;
				if(!n._loaded) return n.on("load", function() {
					n.pos(e)
				}), "number" == typeof e ? n : n._pos || 0;
				e = parseFloat(e);
				var t = o ? n._nodeById(o) : n._activeNode();
				if(t) return 0 <= e ? (n.pause(o), t._pos = e, n.play(t._sprite, o), n) : n._webAudio ? t._pos + (y.currentTime - n._playStart) : t.currentTime;
				if(0 <= e) return n;
				for(var r = 0; r < n._audioNode.length; r++)
					if(n._audioNode[r].paused && 4 === n._audioNode[r].readyState) return n._webAudio ? n._audioNode[r]._pos : n._audioNode[r].currentTime
			},
			pos3d: function(e, o, n, t) {
				var r = this;
				if(o = void 0 !== o && o ? o : 0, n = void 0 !== n && n ? n : -.5, !r._loaded) return r.on("play", function() {
					r.pos3d(e, o, n, t)
				}), r;
				if(!(0 <= e || e < 0)) return r._pos3d;
				if(r._webAudio) {
					var i = t ? r._nodeById(t) : r._activeNode();
					i && (r._pos3d = [e, o, n], i.panner.setPosition(e, o, n), i.panner.panningModel = r._model || "HRTF")
				}
				return r
			},
			fade: function(e, t, o, r, i) {
				var a = this,
					n = Math.abs(e - t),
					u = t < e ? "down" : "up",
					d = n / .01,
					l = o / d;
				if(!a._loaded) return a.on("load", function() {
					a.fade(e, t, o, r, i)
				}), a;
				a.volume(e, i);
				for(var s = 1; s <= d; s++) ! function() {
					var e = a._volume + ("up" == u ? .01 : -.01) * s,
						o = Math.round(1e3 * e) / 1e3,
						n = t;
					setTimeout(function() {
						a.volume(o, i), o === n && r && r()
					}, l * s)
				}()
			},
			fadeIn: function(e, o, n) {
				return this.volume(0).play().fade(0, e, o, n)
			},
			fadeOut: function(e, o, n, t) {
				var r = this;
				return r.fade(r._volume, e, o, function() {
					n && n(), r.pause(t), r.on("end")
				}, t)
			},
			_nodeById: function(e) {
				for(var o = this._audioNode[0], n = 0; n < this._audioNode.length; n++)
					if(this._audioNode[n].id === e) {
						o = this._audioNode[n];
						break
					} return o
			},
			_activeNode: function() {
				for(var e = null, o = 0; o < this._audioNode.length; o++)
					if(!this._audioNode[o].paused) {
						e = this._audioNode[o];
						break
					} return this._drainPool(), e
			},
			_inactiveNode: function(e) {
				for(var o, n = this, t = null, r = 0; r < n._audioNode.length; r++)
					if(n._audioNode[r].paused && 4 === n._audioNode[r].readyState) {
						e(n._audioNode[r]), t = !0;
						break
					} if(n._drainPool(), !t)
					if(n._webAudio) o = n._setupAudioNode(), e(o);
					else {
						n.load(), o = n._audioNode[n._audioNode.length - 1];
						var i = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
							a = function() {
								o.removeEventListener(i, a, !1), e(o)
							};
						o.addEventListener(i, a, !1)
					}
			},
			_drainPool: function() {
				var e, o = this,
					n = 0;
				for(e = 0; e < o._audioNode.length; e++) o._audioNode[e].paused && n++;
				for(e = o._audioNode.length - 1; 0 <= e && !(n <= 5); e--) o._audioNode[e].paused && (o._webAudio && o._audioNode[e].disconnect(0), n--, o._audioNode.splice(e, 1))
			},
			_clearEndTimer: function(e) {
				for(var o = 0, n = 0; n < this._onendTimer.length; n++)
					if(this._onendTimer[n].id === e) {
						o = n;
						break
					} var t = this._onendTimer[o];
				t && (clearTimeout(t.timer), this._onendTimer.splice(o, 1))
			},
			_setupAudioNode: function() {
				var e = this,
					o = e._audioNode,
					n = e._audioNode.length;
				return o[n] = void 0 === y.createGain ? y.createGainNode() : y.createGain(), o[n].gain.value = e._volume, o[n].paused = !0, o[n]._pos = 0, o[n].readyState = 4, o[n].connect(i), o[n].panner = y.createPanner(), o[n].panner.panningModel = e._model || "equalpower", o[n].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]), o[n].panner.connect(o[n]), o[n]
			},
			on: function(e, o) {
				var n = this["_on" + e];
				if("function" == typeof o) n.push(o);
				else
					for(var t = 0; t < n.length; t++) o ? n[t].call(this, o) : n[t].call(this);
				return this
			},
			off: function(e, o) {
				var n = this["_on" + e],
					t = o ? o.toString() : null;
				if(t) {
					for(var r = 0; r < n.length; r++)
						if(t === n[r].toString()) {
							n.splice(r, 1);
							break
						}
				}
				else this["_on" + e] = [];
				return this
			},
			unload: function() {
				for(var e = this, o = e._audioNode, n = 0; n < e._audioNode.length; n++) o[n].paused || (e.stop(o[n].id), e.on("end", o[n].id)), e._webAudio ? o[n].disconnect(0) : o[n].src = "";
				for(n = 0; n < e._onendTimer.length; n++) clearTimeout(e._onendTimer[n].timer);
				var t = m._howls.indexOf(e);
				null !== t && 0 <= t && m._howls.splice(t, 1), delete a[e._src], e = null
			}
		}, r) var s = function(e, o) {
			if(o in a) return e._duration = a[o].duration, void f(e);
			if(/^data:[^;]+;base64,/.test(o)) {
				for(var n = atob(o.split(",")[1]), t = new Uint8Array(n.length), r = 0; r < n.length; ++r) t[r] = n.charCodeAt(r);
				_(t.buffer, e, o)
			}
			else {
				var i = new XMLHttpRequest;
				i.open("GET", o, !0), i.responseType = "arraybuffer", i.onload = function() {
					_(i.response, e, o)
				}, i.onerror = function() {
					e._webAudio && (e._buffer = !0, e._webAudio = !1, e._audioNode = [], delete e._gainNode, delete a[o], e.load())
				};
				try {
					i.send()
				}
				catch (e) {
					i.onerror()
				}
			}
		},
		_ = function(e, o, n) {
			y.decodeAudioData(e, function(e) {
				e && (a[n] = e, f(o, e))
			}, function(e) {
				o.on("loaderror")
			})
		},
		f = function(e, o) {
			e._duration = o ? o.duration : e._duration, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
				_default: [0, 1e3 * e._duration]
			}), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play()
		},
		b = function(e, o, n) {
			var t = e._nodeById(n);
			t.bufferSource = y.createBufferSource(), t.bufferSource.buffer = a[e._src], t.bufferSource.connect(t.panner), t.bufferSource.loop = o[0], o[0] && (t.bufferSource.loopStart = o[1], t.bufferSource.loopEnd = o[1] + o[2]), t.bufferSource.playbackRate.value = e._rate
		};
	"function" == typeof define && define.amd && define(function() {
		return {
			Howler: m,
			Howl: o
		}
	}), "undefined" != typeof exports && (exports.Howler = m, exports.Howl = o), "undefined" != typeof window && (window.Howler = m, window.Howl = o)
}();
///home/zo/__/www/win3/public/42/js/noop.js
function $noop(n) {}
///home/zo/__/www/win3/public/42/js/delegate.js
! function(e) {
	"use strict";
	var t;

	function r(r, o) {
		return function(e) {
			for(var t = e.target; t && 1 === t.nodeType && !t.matches(r);) t = t.parentNode;
			if(!t || 1 !== t.nodeType) return !1;
			o.call(t, e)
		}
	}
	t = Element.prototype, Element && !t.matches && (t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector), r.get = function(e, t) {
		for(var r = e.target; r && 1 === r.nodeType && !r.matches(t);) r = r.parentNode;
		return !(!r || 1 !== r.nodeType) && r
	}, e.$delegate = r
}(this);
///home/zo/__/www/win3/public/42/js/io.js
! function(global) {
	"use strict";
	var _toString = Object.prototype.toString,
		_fnToString = Function.prototype.toString,
		_hasOwnProperty = Object.prototype.hasOwnProperty,
		_slice = Array.prototype.slice,
		_io = {};

	function getType(r) {
		return _toString.call(r).slice(8, -1)
	}
	_io.onerror = function(r) {
		console.log("$io error : ", r)
	}, _io.type = getType;
	var isArray = isNative(Array.isArray) ? Array.isArray : function(r) {
		return r && "object" == typeof r && "number" == typeof r.length && "[object Array]" == _toString.call(r) || !1
	};

	function isArrayLike(r) {
		return "object" == typeof r && "number" == typeof r.length || !1
	}

	function isString(r) {
		return "string" == typeof r || !1
	}

	function isFunction(r) {
		return "function" == typeof r || !1
	}

	function isObject(r) {
		return (!r || "object" == typeof r && null !== r) && "[object Object]" == _toString.call(r)
	}

	function isNumber(r) {
		return "number" == typeof r && isFinite(r) || !1
	}

	function isRegExp(r) {
		return r && "object" == typeof r && "[object RegExp]" == _toString.call(r) || !1
	}

	function isArguments(r) {
		return r && "number" == typeof r.length && "[object Arguments]" == _toString.call(r) || !1
	}

	function isNative(r) {
		return isFunction(r) && 0 <= ("" + r).indexOf("[native code]")
	}

	function isError(r) {
		return r && "object" == typeof r && "[object Error]" == _toString.call(r) || !1
	}

	function isPrototype(r) {
		var t;
		return r && (t = r.constructor) && "function" == typeof t && t.prototype == r
	}

	function isElement(r) {
		return r && 1 === r.nodeType || !1
	}

	function isReallyNaN(r) {
		return "[object Number]" == _toString.call(r) && r != +r
	}

	function isInfinity(r) {
		return "[object Number]" == _toString.call(r) && !isFinite(r)
	}

	function isWindow(r) {
		var t = _toString.call(r);
		return "[object global]" == t || "[object Window]" == t || "[object DOMWindow]" == t
	}

	function isDocument(r) {
		var t = _toString.call(r);
		return "[object HTMLDocument]" == t || "[object Document]" == t
	}

	function isNodeList(r) {
		var t = _toString.call(r);
		return "object" == typeof r && ("[object HTMLCollection]" == t || "[object NodeList]" == t || "[object Object]" == t && r.hasOwnProperty("length") && (0 === r.length || "object" == typeof r[0] && 0 < r[0].nodeType))
	}

	function isJSON(r) {
		var t = !1;
		return isString(r) || isNumber(r) || "boolean" == typeof r || null == r ? t = !0 : isArray(r) ? arrEach(r, function(r) {
			return t = isJSON(r)
		}) : isObject(r) && objEach(r, function(r) {
			return t = isJSON(r)
		}), t
	}

	function is(r) {
		var t = typeof r;
		return "string" == t ? "String" : "boolean" == t ? "Boolean" : "function" == t ? "Function" : null === r ? "Null" : void 0 === r ? "Undefined" : isNumber(r) ? "Number" : isReallyNaN(r) ? "NaN" : isElement(r) ? "Element" : isArray(r) ? "Array" : isArguments(r) ? "Arguments" : isInfinity(r) ? "Infinity" : isError(r) ? "Error" : isNodeList(r) ? "NodeList" : isWindow(r) ? "Window" : isDocument(r) ? "Document" : r.constructor.name || _toString.call(r).slice(8, -1)
	}

	function nativeEqual(r, t) {
		if(typeof r == typeof t && r + "" == t + "") return !0
	}

	function keys(r) {
		return r ? Object.keys(r) : []
	}

	function objEqual(r, t) {
		var n, e, i;
		for(n in r) {
			if(e = r[n], i = t[n], r.hasOwnProperty(n) != t.hasOwnProperty(n)) return !1;
			if(typeof e != typeof i) return !1
		}
		for(n in t) {
			if(e = r[n], i = t[n], !r.hasOwnProperty(n)) return !1;
			if(e !== i) {
				if(typeof e != typeof i) return !1;
				if(t.hasOwnProperty(n) && !(isArrayLike(e) && isArrayLike(i) && arrEqual(e, i) || isObject(e) && isObject(i) && objEqual(e, i) || nativeEqual(e, i))) return !1
			}
		}
		return !0
	}

	function objAll(r, t) {
		var n;
		for(n in r) r.hasOwnProperty(n) && t(r[n], n)
	}

	function objEach(r, t) {
		var n;
		for(n in r)
			if(r.hasOwnProperty(n) && !1 === t(r[n], n)) break
	}

	function obj2str(t) {
		try {
			return JSON.stringify(t, null, 2)
		}
		catch (r) {
			try {
				var n = [];
				return $io.arr.all(t, function(r) {
					n.push(r)
				}), "[" + n.join(", ") + "]"
			}
			catch (r) {
				return "[Error]"
			}
		}
	}

	function flatten(r, c, t) {
		var s = {};
		return function r(t, n) {
			for(var e, i, o = 0, a = Object.keys(t), u = a.length; o < u; o++) isObject(i = t[e = a[o]]) ? r(i, n + e + (c || ".")) : s[n + e] = i
		}(r, ""), s
	}

	function getPath(r, t, n) {
		if("string" == typeof t) {
			if(n = n || ".", !t || t === n) return r;
			var e = 0,
				i = $io.reg.escape(n),
				o = new RegExp("^" + i + "|" + i + "$", "gi");
			for(t = t.replace(o, "").split(n); r && e < t.length;) r = r[t[e++]];
			return r
		}
		if(isRegExp(t)) {
			var a = flatten(r, n),
				u = {};
			return $io.arr.all(Object.keys(a), function(r) {
				t.test(r) && (u[r] = a[r])
			}), u
		}
	}

	function path(r, t, n) {
		var e = "string" == typeof this ? this : ".";
		if(!t || t === e) return r;
		var i = 0,
			o = $io.reg.escape(e),
			a = new RegExp("^" + o + "|" + o + "$", "gi");
		for(t = t.replace(a, "").split(e); r && i < t.length;) r = void 0 !== r[t[i]] ? i === t.length - 1 && 2 < arguments.length ? r[t[i]] = n : r[t[i]] : 2 < arguments.length ? r[t[i]] = i === t.length - 1 ? n : {} : void 0, i++;
		return r
	}

	function arrEqual(r, t) {
		var n, e, i = r.length;
		if(i != t.length) return !1;
		for(; i--;)
			if((n = r[i]) !== (e = t[i]) && !(isArrayLike(n) && isArrayLike(e) && arrEqual(n, e) || isObject(n) && isObject(e) && objEqual(n, e) || nativeEqual(n, e))) return !1;
		return !0
	}

	function arrAll(r, t) {
		if(r)
			for(var n = -1, e = r.length; ++n < e;) t(r[n])
	}

	function arrEach(r, t) {
		if(r)
			for(var n = -1, e = r.length; ++n < e && !1 !== t(r[n], n, r););
	}

	function arrReduce(r, t, n) {
		for(var e = n, i = 0, o = r.length; i < o; i++) e = t(e, r[i], i, r);
		return e
	}

	function arrRandom(r) {
		return r[Math.floor(Math.random() * r.length)]
	}

	function arrInsert(r, t, n) {
		return r.splice.apply(r, [n, 0].concat(t)), r
	}

	function arrLimit(r, t, n) {
		return r.push(n), r.length > t && r.shift(), r
	}

	function arr2str(r) {
		for(var t = "[", n = 0, e = r.length; n < e; n++) "string" == typeof r[n] ? t += '"' + r[n].replace(/"/g, '\\"') + '"' : _io.isArray(r[n]) ? t += arr2str(r[n]) : t += r[n], n < e - 1 && (t += ", ");
		return t += "]"
	}

	function arrRemove(r, t, n) {
		var e = r.slice((n || t) + 1 || r.length);
		return r.length = t < 0 ? r.length + t : t, r.push.apply(r, e)
	}

	function arrShuffle(r) {
		var t, n, e;
		for(e = r.length; e; e--) t = Math.floor(Math.random() * e), n = r[e - 1], r[e - 1] = r[t], r[t] = n
	}

	function fn2str(r, t) {
		return r && "function" == typeof r ? t(r) : "_not_a_function_"
	}

	function fnStr(o, a) {
		return fn2str(o, function() {
			var r = a ? /^function[\W\w]*?{/ : null,
				t = a ? /\s*\}$/ : null,
				n = o.toString().replace(r, "").replace(t, ""),
				e = n.match(/(^\s*)/gm),
				i = e ? 1 < e.length ? e.slice(1).reduce(function(r, t) {
					return r.length < t.length ? r : t
				}) : e[0] : "";
			return _io.str.trim(n.replace(new RegExp("^" + n.match(i), "gm"), ""))
		})
	}

	function fnName(t) {
		return t.name ? t.name : fn2str(t, function() {
			var r = t.toString().match(/^\s*function ([^\(\s]+)/);
			return r && r[1] || "anonymous"
		})
	}

	function fnArg(n) {
		return n.length ? fn2str(n, function() {
			var r = n.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, ""),
				t = r.slice(r.indexOf("(") + 1, r.indexOf(")")).match(/([^\s,]+)/g);
			return null === t ? [] : t
		}) : []
	}
	_io.is = is, _io.is.arr = _io.is.Array = _io.isArray = isArray, _io.is.str = _io.is.String = _io.isString = isString, _io.is.fun = _io.is.Function = _io.isFunction = isFunction, _io.is.obj = _io.is.Object = _io.isObject = isObject, _io.is.num = _io.is.Number = _io.isNumber = isNumber, _io.is.reg = _io.is.RegExp = _io.isRegExp = isRegExp, _io.is.arg = _io.is.Arguments = _io.isArguments = isArguments, _io.is.inf = _io.is.Infinity = _io.isInfinity = isInfinity, _io.is.nan = _io.is.NaN = _io.isReallyNaN = isReallyNaN, _io.is.nat = _io.is.Native = _io.isNative = isNative, _io.is.err = _io.is.Error = _io.isError = isError, _io.is.pro = _io.is.Prototype = _io.isPrototype = isPrototype, _io.is.ele = _io.is.Element = _io.isElement = isElement, _io.is.win = _io.is.Window = _io.isWindow = isWindow, _io.is.doc = _io.is.Document = _io.isDocument = isDocument, _io.is.nodelist = _io.isNodeList = isNodeList, _io.is.json = _io.isJSON = isJSON, _io.obj = _io.Object = {}, _io.obj.all = objAll, _io.obj.each = objEach, _io.obj.equal = objEqual, _io.obj.stringify = obj2str, _io.obj.getPath = getPath, _io.obj.path = path, _io.obj.flatten = flatten, _io.obj.clear = function(r) {
		for(var t in r) r.hasOwnProperty(t) && delete r[t];
		return r
	}, _io.obj.isEmpty = function(r) {
		for(var t in r)
			if(r.hasOwnProperty(t)) return !1;
		return !0
	}, _io.arr = _io.Array = {}, _io.arr.stringify = arr2str, _io.arr.all = arrAll, _io.arr.each = arrEach, _io.arr.equal = arrEqual, _io.arr.reduce = arrReduce, _io.arr.random = arrRandom, _io.arr.shuffle = arrShuffle, _io.arr.insert = arrInsert, _io.arr.limit = arrLimit, _io.arr.remove = arrRemove, _io.arr.move = function(r, t, n) {
		var e = r.indexOf(t);
		if(-1 !== e) {
			var i = r.splice(e, 1);
			n = 0 < e + n ? e + n : 0;
			i.length && r.splice(n, 0, i[0])
		}
	}, _io.arr.up = function(r, t) {
		var n = r.indexOf(t);
		if(-1 !== n && n !== r.length - 1) {
			var e = r.splice(n + 1, 1, t);
			e.length && r.splice(n, 1, e[0])
		}
	}, _io.arr.down = function(r, t) {
		var n = r.indexOf(t);
		if(!(n <= 0)) {
			var e = r.splice(n - 1, 1, t);
			e.length && r.splice(n, 1, e[0])
		}
	}, _io.arr.bottom = function(r, t) {
		var n = r.indexOf(t);
		if(!(n <= 0)) {
			var e = r.splice(n, 1);
			e.length && r.unshift(e[0])
		}
	}, _io.arr.top = function(r, t) {
		var n = r.indexOf(t);
		if(-1 !== n && n !== r.length - 1) {
			var e = r.splice(n, 1);
			e.length && r.push(e[0])
		}
	}, _io.arr.enum = function(r, e) {
		var t, n, i, o = 0,
			a = 0;

		function u() {
			0 == --o && "function" == typeof t && t(), "function" == typeof n && n(100 - o / a * 100, o, a)
		}
		return (0 === r.length || 1 === r.length && 0 === r[0].length) && setImmediate(function() {
			"function" == typeof t && t()
		}), $io.arr.each(r, function(r, n) {
			a += r.length, $io.arr.each(r, function(r, t) {
				o++, setImmediate(function() {
					e.call({
						list: n,
						index: o
					}, r, t, u)
				})
			})
		}), i = {
			progress: function(r) {
				return n = r, i
			},
			done: function(r) {
				return t = r, i
			}
		}
	}, _io.enum = function(r, e, t) {
		(0 === r.length || 1 === r.length && 0 === r[0].length) && t();
		var i = 0;

		function o(r) {
			0 == --i && t()
		}
		$io.arr.each(r, function(r, n) {
			var t = $io.is(r);
			"Array" === t || "Object" === t ? $io[t].each(r, function(r, t) {
				i++, setImmediate(function() {
					e.call({
						list: n,
						index: i
					}, r, t, o)
				})
			}) : "Function" === t ? (i++, setImmediate(function() {
				r.call({
					list: n,
					index: i
				}, o)
			})) : (i++, setImmediate(function() {
				e.call({
					list: n,
					index: i
				}, r, n, o)
			}))
		})
	}, _io.str = _io.String = {}, _io.str.insertAt = function(r, t, n) {
		return r.substr(0, n) + t + r.substr(n + t.length)
	}, _io.str.replaceAt = function(r, t, n, e) {
		return r.substr(0, e) + n + r.substr(e + t.length)
	}, _io.str.truncate = function(r, t) {
		return r.length > t ? r.slice(0, t) + "..." : r
	}, _io.str.slug = function(r) {
		return r.toLowerCase().replace(/\s+/g, "-").replace(/[^-\w]/g, "")
	}, _io.str.trim = function(r) {
		var t, n;
		for(t = 0, n = r.length - 1; t <= n && r.charCodeAt(t) < 33; t++);
		for(; t <= n && r.charCodeAt(n) < 33; n--);
		return r.substring(t, n + 1)
	}, _io.str.camel = function(r) {
		return r.replace(/(\-[a-z])/g, function(r) {
			return r.toUpperCase().replace("-", "")
		})
	}, _io.str.dash = function(r) {
		return r.replace(/([A-Z])/g, function(r) {
			return "-" + r.toLowerCase()
		})
	}, _io.str.capitalise = function(r) {
		return r.charAt(0).toUpperCase() + r.slice(1)
	}, _io.str.htmlEscape = function(r) {
		return String(r).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
	}, _io.fn = {}, _io.fn.str = fnStr, _io.fn.outer = fnStr, _io.fn.inner = function(r) {
		return fnStr(r, !0)
	}, _io.fn.name = fnName, _io.fn.arg = fnArg, _io.fn.prop = _io.fn.keys = function(r) {
		return r ? Object.keys(r) : []
	}, _io.fn.method = _io.fn.meth = function(r) {
		for(var t = Object.keys(r), n = -1, e = t.length, i = {}; ++n < e;) i[t[n]] = r[t[n]];
		return i
	}, _io.fn.throttle = function(n, e) {
		var i;
		return e = 0 < e ? e : 100,
			function() {
				var r = arguments,
					t = this;
				i || (i = setTimeout(function() {
					return i = 0, n.apply(t, r)
				}, e))
			}
	}, _io.fn.debounce = function(r, t) {
		var n, e, i;
		return t = 0 < t ? t : 100,
			function() {
				e = this, i = _slice.call(arguments, 0), clearTimeout(n), n = setTimeout(function() {
					r.apply(e, i)
				}, t)
			}
	}, _io.fn.leading = function(r, t) {
		var n, e, i;
		return t = 0 < t ? t : 100,
			function() {
				e = this, i = _slice.call(arguments, 0), n || r.apply(e, i), clearTimeout(n), n = setTimeout(function() {
					r.apply(e, i)
				}, t)
			}
	};
	var queue = [],
		timerID;

	function x(r) {
		timerID = setTimeout(function() {
			var r = queue.pop();
			r[0](), queue.length && x(r[1])
		}, r)
	}

	function arg2arr(r) {
		return _slice.call(r)
	}

	function readWithFileReader(r, t, n) {
		var e = new FileReader;
		e.onloadend = function() {
			n(e.result)
		}, e[r](t)
	}

	function readAsArrayBuffer(r, t) {
		readWithFileReader("readAsArrayBuffer", r, t)
	}

	function readAsText(r, t) {
		readWithFileReader("readAsText", r, t)
	}

	function readAsBinaryString(r, t) {
		readWithFileReader("readAsBinaryString", r, t)
	}

	function readAsDataURL(r, t) {
		readWithFileReader("readAsDataURL", r, t)
	}

	function convertToBlob(r, t, n) {
		t(new Blob([r], {
			type: n || "text/plain; charset=UTF-8"
		}))
	}

	function returnURL(r, t) {
		t(window.URL.createObjectURL(r))
	}

	function returnSelf(r, t) {
		t(r)
	}

	function tryStringify(t, n) {
		try {
			n(JSON.stringify(t))
		}
		catch (r) {
			try {
				n(stringify(t))
			}
			catch (r) {
				_io.onerror(r)
			}
		}
	}

	function tryParse(t, n) {
		try {
			n(JSON.parse(t))
		}
		catch (r) {
			try {
				n(parse(t))
			}
			catch (r) {
				_io.onerror(r)
			}
		}
	}

	function stringifyReplacer(r, t) {
		return t instanceof Function || "function" == typeof t ? t.toString() : t instanceof RegExp ? "²RegExp²" + t : t instanceof Date ? "²Date__²" + t.getTime() : t
	}

	function stringify(r, t) {
		return t = t || 0, r = stringifyReplacer(null, r), JSON.stringify(r, stringifyReplacer, t)
	}

	function parseReplacer(key, value) {
		if("string" != typeof value || value.length < 8) return value;
		var prefix = value.substring(0, 8);
		return "function" === prefix ? eval("(" + value + ")") : "²Date__²" === prefix ? new Date(1 * value.slice(8)) : "²RegExp²" === prefix ? eval(value.slice(8)) : value
	}

	function parse(r) {
		return r = parseReplacer(null, r), JSON.parse(r, parseReplacer)
	}

	function clone(r) {
		return parse(stringify(r))
	}
	_io.fn.queue = function(r, t) {
		t = t || 10, queue.push([r, t]), clearTimeout(timerID), x(t)
	}, _io.fn.proxy = function(r, t) {
		var n = r;
		return function() {
			!1 !== t.apply(this, arguments) && n.apply(this, arguments)
		}
	}, _io.arg = {}, _io.arg.arr = arg2arr, _io.reg = {}, _io.reg.escape = function(r) {
		return r.replace(/[-[\]{}()*+?.\\\/^$|]/g, "\\$&")
	}, _io.xml = {}, _io.xml.parse = function(r) {
		var t;
		return window.DOMParser ? t = (new DOMParser).parseFromString(r, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(r)), t
	}, _io.equal = function(r, t) {
		return r === t || (isArrayLike(r) ? arrEqual(r, t) : isObject(r) ? objEqual(r, t) : !!nativeEqual(r, t))
	}, _io.each = function(r, t, n) {
		if(r)
			if(isObject(r)) {
				for(var e in r)
					if(_hasOwnProperty.call(r, e) && !1 === t.call(n, r[e], e, r)) break
			}
		else {
			e = 0;
			for(var i = r.length; e < i && !1 !== t.call(n, r[e], e, r); e++);
		}
	}, _io.map = function(r, i, o, a, u, c) {
		var s = [];
		return _io.each(r, function(r, t, n) {
			if(!(c && -1 < c.indexOf(t)))
				if(o && (isArray(r) || isObject(r))) s = s.concat(_io.map(r, i, o, (a ? a + (u || ".") : "") + t, u, c));
				else {
					var e = i(r, t, n, a);
					e && s.push(e)
				}
		}), s
	}, _io.find = function(e, o, r, t, n) {
		var a, u = t || ".",
			i = _io.obj.getPath(r, o, u);
		return o.slice(-1) !== u && (o += u), o.slice(0, 1) !== u && (o = u + o), e.replace(/^\/(.*)\/(.{0,4})$/, function(r, t, n) {
			t && (e = n ? new RegExp(t, n) : new RegExp(t))
		}), a = _io.isRegExp(e) ? e : new RegExp(_io.reg.escape(e), "i"), _io.map(i, function(r, t, n, e) {
			var i = (e ? e + u : "") + t;
			return !!a.test(i) && o + i
		}, !0, null, u, n)
	}, _io.ArrayBuffer = {
		String: function(r, t) {
			var n = new DataView(r),
				e = (new TextDecoder).decode(n);
			return t(e), e
		},
		Blob: convertToBlob
	}, _io.Blob = {
		String: readAsText,
		ArrayBuffer: readAsArrayBuffer,
		BinaryString: readAsBinaryString,
		DataURL: readAsDataURL,
		URL: returnURL
	}, _io.File = {
		String: readAsText,
		ArrayBuffer: readAsArrayBuffer,
		BinaryString: readAsBinaryString,
		DataURL: readAsDataURL,
		Blob: convertToBlob,
		URL: returnURL
	}, _io.ArrayBuffer.ArrayBuffer = _io.Blob.Blob = _io.File.File = _io.String.String = _io.Object.Object = _io.Array.Array = returnSelf, _io.ArrayBuffer.Blob = _io.File.Blob = _io.String.Blob = convertToBlob, _io.Object.Blob = _io.Array.Blob = function(r, t, n) {
		tryStringify(r, function(r) {
			convertToBlob(r, t, n)
		})
	}, _io.String.ArrayBuffer = function(r, t, n) {
		convertToBlob(r, function(r) {
			readAsArrayBuffer(r, t)
		}, n)
	}, _io.String.BinaryString = _io.ArrayBuffer.BinaryString = function(r, t, n) {
		convertToBlob(r, function(r) {
			readAsBinaryString(r, t)
		}, n)
	}, _io.String.DataURL = _io.ArrayBuffer.DataURL = function(r, t, n) {
		convertToBlob(r, function(r) {
			readAsDataURL(r, t)
		}, n)
	}, _io.String.URL = _io.ArrayBuffer.URL = function(r, t, n) {
		convertToBlob(r, function(r) {
			returnURL(r, t)
		}, n)
	}, _io.Object.ArrayBuffer = _io.Array.ArrayBuffer = function(r, t, n) {
		tryStringify(r, function(r) {
			_io.String.ArrayBuffer(r, t, n)
		})
	}, _io.Object.BinaryString = _io.Array.BinaryString = function(r, t, n) {
		tryStringify(r, function(r) {
			_io.String.BinaryString(r, t, n)
		})
	}, _io.Object.DataURL = _io.Array.DataURL = function(r, t, n) {
		tryStringify(r, function(r) {
			_io.String.DataURL(r, t, n)
		})
	}, _io.Object.URL = _io.Array.URL = function(r, t, n) {
		tryStringify(r, function(r) {
			_io.String.URL(r, t, n)
		})
	}, _io.String.Object = _io.String.Array = tryParse, _io.Object.String = _io.Array.String = tryStringify, _io.stringify = stringify, _io.parse = parse, _io.clone = clone, global.$io = _io
}(this),
function(r) {
	"use strict";
	r.$io.str || (r.$io = {
		str: {}
	}), r.$io.str.autolink = function(r) {
		var n = [],
			t = 0;
		return r.replace(/(?:\(((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]+[-A-Za-z0-9+$&@#\/%=~_()|])\))/gm, function(r, t) {
			return n.push(t), "²_links_in_parens___ktlu_²"
		}).replace(/((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])/gm, function(r) {
			return '<a target="_blank" href="' + (0 == r.indexOf("http") ? r : "http://" + r) + '">' + r + "</a>"
		}).replace(/([\w.]*\w@[\w.]+\w)/gm, '<a href="mailto:$1">$1</a>').replace(RegExp("²_links_in_parens___ktlu_²", "g"), function() {
			var r = n[t++];
			return '(<a target="_blank" href="' + r + '">' + r + "</a>)"
		})
	}
}(this),
function(r) {
	"use strict";

	function f(r) {
		return r = r.replace(/</g, "²_less__²").replace(/>/g, "²_more__²").replace(/&/g, "²_amp__²").replace(/"/g, "²_quot__²").replace(/'/g, "²_squot__²"), r = (r = $io.str.autolink(r)).replace(RegExp("²_amp__²", "g"), "&amp;").replace(RegExp("²_quot__²", "g"), "&quot;").replace(RegExp("²_squot__²", "g"), "&#39;").replace(RegExp("²_less__²", "g"), "&lt;").replace(RegExp("²_more__²", "g"), "&gt;")
	}
	r.$io.str || (r.$io = {
		str: {}
	}), r.$io.str.hilit = function(r, t) {
		if("string" != typeof r) return "";
		var n = [],
			e = 0,
			i = [],
			o = 0,
			a = [],
			u = 0,
			c = [],
			s = 0;
		return (t ? "" : '<code class="language-javascript ui_hilit">') + r.replace(/\/\*[\W\w]*?\*\//g, function(r) {
			return i.push(r), "_comment__ktlu_"
		}).replace(/([\r\n\s,.;[({=&|!])(\/(?!\/)(?:\[.+?]|\\.|[^\/\r\n])+\/[gimyu]{0,5})(?=\s*($|[\r\n,.;})\]]))/g, function(r, t, n) {
			return c.push(n), t + "_regex____ktlu_"
		}).replace(/('(\\')?(([^\\]\\'|[^'\n]|\\\n)*)')|("(\\")?(([^\\]\\"|[^"\n]|\\\n)*)")/g, function(r) {
			return n.push(r), "_string___ktlu_"
		}).replace(/\/\/.*/g, function(r) {
			return a.push(r), "_komment__ktlu_"
		}).replace(/([+\/\|\^&%!~<>=-]|&amp;|&lt;?|&gt;?)/g, '<span class="sh_operator">$1</span>').replace(/(\$[a-z0-9_$]+)/gi, '<span class="sh_42">$1</span>').replace(/((?!\d)[a-z0-9_$]+)(\s*:\s*function)/gi, '<span class="sh_function">$1</span>$2').replace(/\.((?!\d)[a-z0-9_$]+(?=\())/gi, '.<span class="sh_propfunction">$1</span>').replace(/((?!\d)[a-z0-9_$]+(?=\())/gi, '<span class="sh_function">$1</span>').replace(/([[\]{}().,;:])/g, '<span class="sh_punctuation">$1</span>').replace(/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|true|false|NaN|-?Infinity)\b/g, '<span class="sh_number">$1</span>').replace(/\b(break|case|catch|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/g, '<span class="sh_keyword">$1</span>').replace(RegExp("_komment__ktlu_", "g"), function() {
			return '<span class="sh_comment">' + f(a[u++] || "") + "</span>"
		}).replace(RegExp("_comment__ktlu_", "g"), function() {
			return '<span class="sh_comment">' + f(i[o++] || "") + "</span>"
		}).replace(RegExp("_string___ktlu_", "g"), function() {
			return '<span class="sh_string">' + f(n[e++] || "") + "</span>"
		}).replace(RegExp("_regex____ktlu_", "g"), function() {
			return '<span class="sh_keyword2">' + f(c[s++] || "") + "</span>"
		}) + (t ? "" : "</code>")
	}, r.$io.str.freeText = f
}(this);
///home/zo/__/www/win3/public/42/js/watch.js
function $watch(c) {
	c = c || {};
	var u = {},
		f = Array.prototype.slice,
		e = function(n, e) {
			n.replace(/\S+/g, e)
		},
		n = function(n, e) {
			Object.defineProperty(c, n, {
				value: e,
				enumerable: !1,
				writable: !1,
				configurable: !1
			})
		};
	return c.observers = u, n("on", function(n, r) {
		return "function" != typeof r || e(n, function(n, e) {
			(u[n] = u[n] || []).push(r), r.typed = 0 < e
		}), c
	}), n("off", function(n, o) {
		return "*" != n || o ? e(n, function(n) {
			if(o)
				for(var e, r = u[n], t = 0; e = r && r[t]; ++t) e == o && r.splice(t--, 1);
			else delete u[n]
		}) : u = {}, c
	}), n("once", function(e, r) {
		return c.on(e, function n() {
			c.off(e, n), r.apply(c, arguments)
		})
	}), n("trigger", function(n) {
		var t, o = f.call(arguments, 1);
		return e(n, function(n) {
			t = f.call(u[n] || [], 0);
			for(var e, r = 0; e = t[r]; ++r) {
				if(e.busy) return;
				e.busy = 1, e.apply(c, e.typed ? [n].concat(o) : o), t[r] !== e && r--, e.busy = 0
			}
			u["*"] && "*" != n && c.trigger.apply(c, ["*", n].concat(o))
		}), c
	}), c
}
///home/zo/__/www/win3/public/42/js/kernel.js
! function(e) {
	"use strict";
	var i = {},
		f = {},
		r = Array.prototype.slice,
		u = {
			onerror: $noop,
			onready: $noop
		};

	function l(e, n) {
		if(2 < arguments.length) {
			var t = r.call(arguments);
			n = t.pop();
			l.series(t, n)
		}
		else $io.is.obj(e) && "function" == typeof n ? n(l.data = e) : $io.is.arr(e) && "function" == typeof n ? l.parallel(e, n) : "string" == typeof e && "function" == typeof n ? l.task(e, n) : "function" == typeof e ? l.task("modules", e) : "string" != typeof e || n || l.launch(e)
	}
	l.ready = i, l.tasks = f, l.paused = !1, l.stop = function(e) {
		for(var n in l.paused = !0, l.off("*"), l.tasks) delete l.tasks[n];
		for(var n in l.ready) delete l.ready[n];
		for(var n in l.observers) delete l.observers[n]
	}, l.config = function(e) {
		$extend(u, e)
	}, l.task = function(e, n) {
		return (f[e] = f[e] || []).push(n), this
	}, l.series = function(e, a) {
		var o = {};
		return function t(r) {
			if(r < e.length) {
				var n = e[r];
				"string" == typeof n ? (l.launch(n), l.on(n + ":ready", function(e) {
					e.length && (o[n] = e), t(++r)
				})) : l.parallel(n, function(e, n) {
					n.length && $extend(o, n), t(++r)
				})
			}
			else try {
				a(l.data, o)
			}
			catch (e) {
				e.message = "kernel.series.fn : " + e.message, u.onerror(e)
			}
		}(0), this
	}, l.parallel = function(r, a) {
		var o = {};

		function s(e) {
			for(var n = 0, t = r.length; n < t; n++)
				if(!0 !== i[r[n]]) return;
			try {
				a(l.data, o)
			}
			catch (e) {
				e.message = "kernel.parallel.fn : " + e.message, u.onerror(e)
			}
		}
		return $io.arr.all(r, function(t) {
			"string" == typeof t ? (l.launch(t), l.on(t + ":ready", function(e) {
				e.length && (o[t] = e), i[t] = !0, s()
			})) : l.series(t, function(e, n) {
				n.length && $extend(o, n), i[t] = !0, s()
			})
		}), this
	}, l.launch = function(t) {
		if(!l.paused) {
			var n, e, r, a = 0,
				o = f[t];
			if(o)
				for(e = 0, r = o.length; e < r; e++) {
					if(l.paused) return;
					++a,
					function(e, n) {
						setTimeout(function() {
							try {
								1 < e.length ? e(l.data, n) : n(e(l.data))
							}
							catch (e) {
								e.message = t + " : " + e.message, u.onerror(e), n(e)
							}
						}, 0)
					}(o[e], s)
				}
			return this
		}

		function s(e) {
			e && (n = n || []).push(e), 0 == --a && (i[t] = !0, u.onready(t), l.trigger(t + ":ready", l.data, n), l.off(t + ":ready"))
		}
	}, e.$kernel = $watch(l)
}(this);
///home/zo/__/www/win3/public/42/js/utils.js
! function(e) {
	"use strict";

	function n(e) {
		window.onhashchange = $noop, "replaceState" in history ? e ? history.replaceState("", document.title, "#!" + encodeURI(e) + window.location.search) : window.location.hash && history.replaceState("", document.title, window.location.pathname + window.location.search) : window.location.hash = e ? "!" + encodeURI(e) : "", setTimeout(function() {
			window.onhashchange = t
		}, 1e3)
	}

	function t() {
		var e = location.hash;
		e && n.trigger("change", decodeURI(e.replace(/^#!/, "")))
	}(n = $watch(n)).init = function() {
		t()
	}, e.$route = n
}(window);
var $url = {
	parseQuery: function(e) {
		return $io.arr.reduce(e.replace(/^\?/, "").split("&"), function(e, n) {
			var t = n.indexOf("="),
				o = n.slice(0, t),
				i = n.slice(++t);
			return e[o] = decodeURIComponent(i), e
		}, {})
	},
	getExtention: function(e) {
		var n = (e || "").match(/(?:\.)([0-9a-z]+)(?:[#?].+)?$/);
		return n && n[1] ? n[1] : ""
	},
	getDomain: function(e) {
		var n = (e || "").match(/:\/\/(.[^/]+)/);
		return null != n && 2 <= n.length ? n[1] : ""
	},
	checkImage: function(e, n) {
		e || n(!1);
		var t = new Image;

		function o() {
			0 < t.width ? n(!0, e, t) : n(!1, e, t)
		}
		t.onload = o, t.onerror = o, t.onabort = o, t.src = e
	},
	_checkFavicon: function(e, n) {
		if(e && "" != $io.str.trim(e)) {
			var t, o = $url.getDomain(e);
			o ? $url.checkImage(t = "http://" + o + "/apple-touch-icon.png", function(e) {
				e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.png", function(e) {
					e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.ico", function(e) {
						e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.gif", function(e) {
							e ? n(!0, t) : n(!1)
						})
					})
				})
			}) : n(!1)
		}
		else n(!1)
	},
	checkFavicon: function(e, t) {
		var n = ["/favicon-32x32.png", "/favicon.png", "/favicon.gif", "/favicon.ico"];
		if(e && "" != $io.str.trim(e)) {
			var o = $url.getDomain(e),
				i = !1,
				u = n.length - 1;
			if(o)
				for(var c = 0, a = n.length; c < a && !i; c++) $url.checkImage("http://" + o + n[c], function(e, n) {
					e && !i ? t(i = !0, n) : i || 0 === --u && t(!1)
				});
			else t(!1)
		}
		else t(!1)
	}
};

function $maxZ(e, n) {
	var t, o, i, u, c = 0;
	if("string" == typeof e) t = (n || document).querySelectorAll(e);
	else if($io.isNodeList(e)) t = e;
	else {
		if(!$io.isElement(e)) throw new Error("$maxZ: invalid selector");
		t = [e]
	}
	return $io.arr.all(t, function(e) {
		o = window.getComputedStyle(e, null), i = o.zIndex;
		var n = Number(i);
		"static" != o.position && "auto" != i && c < n && (u = e, c = n)
	}), {
		num: c,
		el: u
	}
}
$url.query = $url.parseQuery(window.location.search.substring(1)),
	function(e) {
		"use strict";

		function t() {
			return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
		}
		var o;
		e.$fullscreen = function(e, n) {
			o && (document.removeEventListener("fullscreenchange", o, !1), document.removeEventListener("webkitfullscreenchange", o, !1), document.removeEventListener("mozfullscreenchange", o, !1)), t() ? (document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), "function" == typeof n && n()) : (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT), "function" == typeof e && e()), o = function() {
				t() ? "function" == typeof e && e() : "function" == typeof n && n()
			}, document.addEventListener("fullscreenchange", o, !1), document.addEventListener("webkitfullscreenchange", o, !1), document.addEventListener("mozfullscreenchange", o, !1)
		}
	}(this),
	function(e) {
		"use strict";
		var t, o, i, u = (t = document.createElement("div"), o = "Khtml Ms ms MS O o Moz moz webkit Webkit webKit WebKit".split(" "), i = o.length, function(e) {
			if(e in t.style) return e;
			e = e.replace(/^[a-z]/, function(e) {
				return e.toUpperCase()
			});
			for(var n = 0; n < i; n++)
				if(o[n] + e in t.style) return o[n] + e;
			return !1
		})("animationName");

		function n(n, t, o) {
			function i() {
				o(!0), n.removeEventListener("animationend", i, !1), n.removeEventListener("webkitAnimationEnd", i, !1), n.removeEventListener("MSAnimationEnd", i, !1), n.removeEventListener("oAnimationEnd", i, !1), n.removeEventListener("oanimationend", i, !1), n.classList.remove(t)
			}! function(e, n) {
				var t = document.createElement("div");
				t.className = e, document.body.appendChild(t), "none" != window.getComputedStyle(t, null)[u] ? n(!0) : n(!1), t.parentNode.removeChild(t)
			}(t, function(e) {
				e ? function(e, n, t) {
					e.addEventListener("animationend", t, !1), e.addEventListener("webkitAnimationEnd", t, !1), e.addEventListener("MSAnimationEnd", t, !1), e.addEventListener("oAnimationEnd", t, !1), e.addEventListener("oanimationend", t, !1), e.classList.add(n)
				}(n, t, i) : o(!1)
			})
		}
		n.i = ["rubberBand", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "flip", "flipInX", "flipInY", "lightSpeedIn", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpRight", "slideInDown", "slideInLeft", "rollIn", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp"], n.o = ["bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "lightSpeedOut", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideOutLeft", "slideOutRight", "slideOutUp", "hinge", "rollOut", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp"], e.$animate = n
	}(this),
	function(e) {
		"use strict";
		var n = document.body.classList;
		e.$state = {
			wait: function() {
				n.add("ui_wait")
			},
			isLoading: function() {
				return n.contains("ui_loading--block") || n.contains("ui_loading")
			},
			loading: function(e) {
				n.add(!0 === e ? "ui_loading--block" : "ui_loading")
			},
			loaded: function() {
				n.remove("ui_loading--block"), n.remove("ui_loading")
			},
			pause: function() {
				n.add("ui_pause")
			},
			play: function() {
				n.remove("ui_pause")
			}
		}
	}(this);
///home/zo/__/www/win3/public/42/js/selection.js
! function(e) {
	"use strict";
	var t = {
		get: function() {
			var e = "";
			return window.getSelection ? e = window.getSelection().toString() : document.selection && "Control" != document.selection.type && (e = document.selection.createRange().text), e
		},
		create: function(e, t, o) {
			if(e.createTextRange) {
				var c = e.createTextRange();
				c.collapse(!0), c.moveStart("character", t), c.moveEnd("character", o), c.select(), e.focus()
			}
			else e.setSelectionRange ? (e.focus(), e.setSelectionRange(t, o)) : void 0 !== e.selectionStart && (e.selectionStart = t, e.selectionEnd = o, e.focus())
		},
		copy: function(e) {
			if("string" == typeof e) {
				var t = document.createElement("textarea");
				t.value = e, document.body.appendChild(t), console.log(t), e = t
			}
			if(e)
				if(window.getSelection().removeAllRanges(), e.select) e.focus(), e.select();
				else {
					var o = document.createRange();
					o.selectNode(e), window.getSelection().addRange(o)
				} try {
				var c = document.execCommand("copy") ? "successful" : "unsuccessful";
				console.log("Copy command was " + c)
			}
			catch (e) {
				console.log("Oops, unable to copy")
			}
			e && window.getSelection().removeAllRanges()
		}
	};
	e.$selection = t
}(this);
///home/zo/__/www/win3/public/42/js/ajax.js
! function(e) {
	"use strict";

	function f(e) {
		if(! function(e) {
				return e === Object(e)
			}(e)) return e;
		var t = [];
		for(var n in e) null != e[n] && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
		return t.join("&")
	}

	function i(t) {
		var n, r;
		try {
			n = JSON.parse(t.responseText), r = !0
		}
		catch (e) {
			n = "text" === t.responseType || "" === t.responseType ? t.responseText : null, r = !1
		}
		return [n, t.status, t, r]
	}

	function o(t, n, r) {
		var u = new Error("nope"),
			o = function() {
				if(window.XMLHttpRequest && ("file:" != window.location.protocol || !window.ActiveXObject)) return new XMLHttpRequest;
				try {
					return new ActiveXObject("Microsoft.XMLHTTP")
				}
				catch (e) {}
				try {
					return new ActiveXObject("Msxml2.XMLHTTP.6.0")
				}
				catch (e) {}
				try {
					return new ActiveXObject("Msxml2.XMLHTTP.3.0")
				}
				catch (e) {}
				try {
					return new ActiveXObject("Msxml2.XMLHTTP")
				}
				catch (e) {}
				return !1
			}(),
			s = {
				done: function() {},
				fail: function() {},
				guest: function() {}
			},
			a = {
				done: function(e) {
					return s.done = e, a
				},
				fail: function(e) {
					return s.fail = e, a
				},
				guest: function(e) {
					return s.guest = e, a
				}
			},
			c = {
				arraybuffer: !1
			};
		return "GET" == t && r && (c = r, r = null), n && "/" !== n ? (o.open(t, n, !0), c.arraybuffer && (o.responseType = "arraybuffer"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r && r._csrf && (o.setRequestHeader("X-CSRF-Token", r._csrf), delete r._csrf), o.onreadystatechange = function() {
			if(4 === o.readyState)
				if(200 <= o.status && o.status < 300) c.arraybuffer ? s.done.apply(s, [o.response, o.status, o, !1]) : s.done.apply(s, i(o));
				else if(401 == o.status) s.guest.call(s, o.statusText, {
				type: t.toLowerCase(),
				url: n,
				data: r
			});
			else {
				var e = i(o);
				u.message = t + " " + n + " " + e[2].status + " (" + e[2].statusText + ")", s.fail.apply(s, [u].concat(e))
			}
		}, r ? o.send(f(r)) : o.send()) : s.fail.call(s, "Invalid url"), a
	}

	function t(e, t, n, r) {
		var u = o("GET", e);
		u.done(t || $noop), u.fail(n || $noop), u.guest(r || $noop)
	}
	t.get = function(e, t) {
		return o("GET", e, t)
	}, t.post = function(e, t) {
		return o("POST", e, t)
	}, t.delete = function(e, t) {
		return o("DELETE", e, t)
	}, t.put = function(e, t) {
		return o("PUT", e, t)
	}, t.buffer = function(e, n) {
		var r = new XMLHttpRequest;
		r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function(e) {
			var t = r.response;
			t && n(t)
		}, r.send(null)
	}, e.$ajax = t
}(this);
///home/zo/__/www/win3/public/42/js/chain.js
function $chain() {
	"use strict";

	function o(t, n, i) {
		Object.defineProperty(t, i, {
			get: function() {
				var t = n();
				return void 0 === t ? this : t
			}
		})
	}

	function u(t, n, i) {
		t[i] = function() {
			var t = n.apply(this, arguments);
			return void 0 === t ? this : t
		}
	}

	function n(i, t, r) {
		return $io.isObject(t) && $io.obj.all(t, function(t, n) {
			!0 === r ? o(i, t, n) : u(i, t, n), "both" === r && (o(i, t, n), u(i, t, n))
		}), $io.isObject(r) ? n(i, r, !0) : i
	}
	var t = n.apply(null, arguments);
	return t.prop = function(t) {
		return n(this, t, !0)
	}, t.meth = function(t) {
		return n(this, t)
	}, t
}
///home/zo/__/www/win3/public/42/js/db.js
! function(t) {
	"use strict";
	var r = t.localforage;
	if(!r) throw new Error("Your browser doesn't support local save");

	function u(o, t, e) {
		u.get(t, function(t, n) {
			e(t, n || o)
		})
	}
	r.config({
		name: "fs",
		storeName: "a"
	}), r.setDriver(r.INDEXEDDB), u.set = function(t, n, o) {
		var e = n;
		r.setItem(t, e, function(t, n) {
			t && $alert.error(t), (o || $noop)(t, n)
		})
	}, u.get = function(t, o) {
		r.getItem(t, function(t, n) {
			(o || $noop)(t, n)
		})
	}, u.update = function(o, e, r) {
		u.get(o, function(t, n) {
			t || "function" != typeof e || u.set(o, e(n), r || $noop)
		})
	}, u.getRaw = function(t, n) {
		r.getItem(t, n || $noop)
	}, u.del = function(t, n) {
		r.removeItem(t, n || $noop)
	}, u.clear = function(t) {
		r.clear(t || $noop)
	}, u.keys = function(t) {
		r.keys(t || $noop)
	}, u.store = r, t.$db = u
}(this),
function(t) {
	var r = window.localStorage,
		u = {},
		f = {};
	if(!r) throw new Error("Your browser doesn't support local save");

	function i(t, n, o, e) {
		var r = i.get(t);
		return r || (r = i.set(t, n)), "function" == typeof e && (f[t] = e), "function" == typeof o && (u[t] = o)(r), r
	}
	i.set = function(t, n, o) {
		var e = n;
		if("string" != typeof n) try {
			e = JSON.stringify(n)
		}
		catch (t) {}
		try {
			r.setItem(t, e), o || i.autoReady(t, n)
		}
		catch (t) {
			$alert.error(t)
		}
		return n
	}, i.get = function(t) {
		var n = r.getItem(t);
		try {
			n = JSON.parse(n)
		}
		catch (t) {}
		return n
	}, i.update = function(t, n) {
		var o = i.get(t);
		if("function" == typeof n) return i.set(t, n(o))
	}, i.getRaw = function(t) {
		return r.getItem(t)
	}, i.del = function(t) {
		r.removeItem(t), u[t] = null, f[t] = null
	}, i.onReady = function(t, n) {
		return "function" == typeof n && (u[t] = n), u[t]
	}, i.onSave = function(t, n) {
		return "function" == typeof n && (f[t] = n), f[t]
	}, i.autoReady = function(t, n) {
		u.hasOwnProperty(t) && "function" == typeof u[t] && u[t](n)
	}, i.autoSave = function(t) {
		f.hasOwnProperty(t) && "function" == typeof f[t] && i.set(t, f[t](), !0)
	}, i.clear = function() {
		for(var t in r.clear(), u) u.hasOwnProperty(t) && (u[t] = null);
		for(var t in f) f.hasOwnProperty(t) && (f[t] = null)
	}, i.keys = function() {
		return Object.keys(r)
	}, window.self !== window.top && window.parent.$store ? t.$store = window.parent.$store : (window.addEventListener("beforeunload", function(t) {
		for(var n in f) i.autoSave(n)
	}), t.$store = i)
}(this);
///home/zo/__/www/win3/public/42/js/el.js
! function(e) {
	"use strict";
	var u = !1;
	var d = [];

	function o(a, e) {
		"string" == typeof(a = a || {}) && (e || document).querySelector(a), 1 !== a.nodeType && (a = document);
		var c, n = !0;
		return $io.arr.all(d, function(e) {
			e.elem === a && (n = !1)
		}), n && d.push({
			elem: a,
			attach: []
		}), c = {
			get: function() {
				return a
			},
			html: function(e) {
				return e ? (a.innerHTML = e, c) : a.innerHTML
			},
			add: function(e) {
				return a.innerHTML = a.innerHTML + e, c
			},
			empty: function() {
				for(; a.firstChild;) a.removeChild(a.firstChild);
				return c
			},
			each: function(e, n) {
				for(var t = a.querySelectorAll(e), r = 0, i = t.length; r < i; r++) n.call(t[r], t[r], r);
				return c
			},
			append: function(e) {
				var n, t;
				if("string" == typeof e) {
					(n = document.createElement("div")).innerHTML = e;
					for(var r = 0, i = (t = n.childNodes).length; r < i; r++) t[r] && 1 === t[r].nodeType && a.appendChild(t[r])
				}
				else a.appendChild(e);
				return c
			},
			click: function() {
				if("createEvent" in document) {
					var e = document.createEvent("MouseEvents");
					e.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(e)
				}
				else a.fireEvent("onclick")
			},
			trigger: function(e) {
				if("click" !== e)
					if("createEvent" in document) {
						var n = document.createEvent("HTMLEvents");
						n.initEvent(e, !1, !0), a.dispatchEvent(n)
					}
				else a.fireEvent("on" + e);
				else c.click()
			},
			on: function(e, r, i, o) {
				function n(e) {
					if(!this.disabled) return !1 === i.call(this, e) ? (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1) : void 0
				}
				"function" == typeof r && (o = i, i = r, r = null), o = !!o;
				var l = r ? $delegate(r, n) : n;
				return e.replace(/[^\s]+/g, function(n) {
					var t;
					"doubletap" === n ? (t = l, l = function(e) {
						! function(e, n) {
							u ? (clearTimeout(u), u = null, n(e), e.preventDefault()) : u = setTimeout(function() {
								u = null
							}, 300)
						}(e, t.bind(this)), e.stopPropagation()
					}, a.addEventListener("touchstart", l, o)) : a.addEventListener(n, l, o), $io.arr.all(d, function(e) {
						e.elem === a && e.attach.push({
							name: n,
							childs: r,
							handler: i,
							scopeHandler: l,
							useCapture: o
						})
					})
				}), c
			},
			off: function(e, t, r) {
				return r || (r = t, t = null), e.replace(/[^\s]+/g, function(n) {
					$io.arr.all(d, function(e) {
						e.elem === a && $io.arr.all(e.attach, function(e) {
							e.name == n && e.childs == t && e.handler == r && a.removeEventListener(n, e.scopeHandler, e.useCapture)
						})
					})
				}), c
			}
		}
	}
	o.create = function(e, n, t) {
		var a, c, r = e.split(/[>| ]+/);
		return t && r.pop(), !r && n ? n : ($io.arr.all(r, function(e) {
			e.replace(/(\w+)?(#(\w+))?(\.([\w|.]+))?/, function(e, n, t, r, i, o) {
				var l = document.createElement(n || "div");
				r && (l.id = r), o && (l.className = o.split(".").join(" ")), c && c.appendChild(l), c = l, a || (a = c)
			})
		}), n && c.appendChild(n), a)
	}, o.each = function(e, n) {
		for(var t = document.querySelectorAll(e), r = 0, i = t.length; r < i; r++) n.call(t[r], t[r], r);
		return o
	}, e.$el = o
}(this);
///home/zo/__/www/win3/public/42/js/on.js
! function(t) {
	"use strict";
	t.$on = {
		resize: function t(e, f) {
			if(!t.watchedElementData) {
				t.watchedElementData = [];
				var i = function() {
					t.watchedElementData.forEach(function(t) {
						e.offsetWidth === t.offsetWidth && e.offsetHeight === t.offsetHeight || (t.offsetWidth = e.offsetWidth, t.offsetHeight = e.offsetHeight, t.callback())
					})
				};
				window.addEventListener("resize", i), new MutationObserver(i).observe(document.body, {
					attributes: !0,
					childList: !0,
					characterData: !0,
					subtree: !0
				})
			}
			t.watchedElementData.push({
				element: e,
				offsetWidth: e.offsetWidth,
				offsetHeight: e.offsetHeight,
				callback: f
			})
		}
	}
}(this);
///home/zo/__/www/win3/public/42/js/extend.js
! function(t) {
	"use strict";
	var i = Object.prototype.hasOwnProperty,
		y = Array.prototype.slice,
		s = Object.prototype.toString,
		u = Array.isArray ? Array.isArray : function(t) {
			return t && "object" == typeof t && "number" == typeof t.length && "[object Array]" == s.call(t) || !1
		};

	function f(t) {
		var e, r, c, n, o = !1;
		for("concat" === (t = "boolean" == typeof t || "string" == typeof t ? (e = y.call(arguments, 1), !0 === t ? "deep" : t) : (e = arguments, !1)) && (t = "deep", o = !0), r = e[0], c = 1, n = e.length; c < n; c++) {
			var a = e[c];
			for(var l in a) {
				var p = a[l];
				("strict" != t || i.call(r, l)) && ("deep" != t || "[object Object]" !== s.call(p) ? o && u(p) ? u(r[l]) ? r[l] = r[l].concat(p) : r[l] = [].concat(p) : r[l] = p : ("[object Object]" !== s.call(r[l]) && (r[l] = {}), f(t, r[l], p)))
			}
		}
		return r
	}
	f.deep = function() {
		return f.apply(this, ["deep"].concat(y.call(arguments)))
	}, f.strict = function() {
		return f.apply(this, ["strict"].concat(y.call(arguments)))
	}, f.clone = function() {
		return f.apply(this, ["deep", {}].concat(y.call(arguments)))
	}, t.$extend = f
}(this);
///home/zo/__/www/win3/public/42/js/undo.js
function $undo(n) {
	var r = n || [],
		e = n ? n.length : 0,
		o = window.$noop || function(n) {};
	return {
		get: function() {
			return r.slice(0, 0 <= e ? e : 0)
		},
		cursor: function() {
			return e
		},
		history: function() {
			return r
		},
		clear: function() {
			r.length = e = 0
		},
		add: function(n) {
			return r.splice(e++, r.length, n), n
		},
		each: function(n) {
			e > r.length && (e = r.length);
			for(var t = 0; t < e; t++) n(r[t])
		},
		redo: function(n) {
			if(e++ > r.length && (e = r.length + 1), e <= 0 && (e = 1), r[e - 1]) {
				var t = r[e - 1].redo ? r[e - 1].redo() : r[e - 1];
				(n || o)(t)
			}
			return t
		},
		undo: function(n) {
			if(--e < -1 && (e = -1), e >= r.length && (e = r.length - 1), r[e]) {
				var t = r[e].undo ? r[e].undo() : r[e];
				(n || o)(t)
			}
			return t
		}
	}
}
///home/zo/__/www/win3/public/42/js/screenshot.js
! function(e) {
	"use strict";
	var t = {
		default: document.body
	};

	function p(d, e, f) {
		"function" == typeof e && (f = e, e = {});
		var h, g, m = $extend({}, t, e);
		return $loader(["/c/libs/rasterizeHTML.allinone.js"], function() {
			var n, o = "<style>",
				i = !1;
			if(d) {
				if("string" == typeof d) n = document.querySelector(d), h = $el.create(d, n.cloneNode(!0));
				else if($io.isElement(d))(h = (n = d).cloneNode(!0)).id = "screenshot__unique__selector", d = "#" + h.id;
				else {
					if(!$io.isDocument(d)) return void console.error("$screenshot : invalid selector!");
					i = !0, h = (n = d).cloneNode(!0)
				}
				var e = m.width || n.offsetWidth,
					t = m.height || n.offsetHeight;
				i || (o += "body {background:transparent !important}\n" + d + " {width:" + e + "px!important;height:" + t + "px!important;position:absolute!important; top:0px!important;left:0px!important}\n")
			}
			else {
				n = m.default, h = n.cloneNode(!0);
				e = n.offsetWidth, t = n.offsetHeight
			}
			if(h) {
				$io.arr.all(h.querySelectorAll(".js_image_inline"), function(e) {
					o += '.js_image_inline[data-image-id="' + e.dataset.imageId + '"] {  background-image: ' + e.style.backgroundImage + "!important;  background-size: " + e.style.backgroundSize + "!important;  background-position: " + e.style.backgroundPosition + "!important;  background-repeat: " + e.style.backgroundRepeat + "!important;}"
				}), o += "</style>", $io.arr.all(document.styleSheets, function(e) {
					o += e.ownerNode.outerHTML
				});
				var r = document.createElement("canvas");
				r.width = e + 1, r.height = t + 1, g = function(e, t) {
					rasterizeHTML[i ? "drawDocument" : "drawHTML"](i ? h : o + e, r, {
						useBlobs: !1,
						baseUrl: i ? null : window.location.origin
					}).then(function(e) {
						t(r, n || h, e)
					}, function(e) {
						$alert.error(e)
					})
				};
				var a = h.querySelectorAll("iframe"),
					l = h.querySelectorAll("canvas"),
					c = a.length + l.length;
				if(c) {
					if(a.length) {
						var s = n.querySelectorAll("iframe");
						$io.arr.each(a, function(o, i) {
							p(s[i].contentDocument, {
								width: s[i].clientWidth,
								height: s[i].clientHeight
							}, function(e, t, n) {
								o.parentNode.replaceChild(n.image, o), n.image.style.cssText = window.getComputedStyle(s[i], "").cssText, n.image.style.width = s[i].clientWidth + "px", n.image.style.height = s[i].clientHeight + "px", 0 == --c && g(h.outerHTML, f)
							})
						})
					}
					if(l.length) {
						var u = n.querySelectorAll("canvas");
						$io.arr.each(l, function(e, t) {
							var n = new Image;
							n.src = u[t].toDataURL(), e.parentNode.replaceChild(n, e), n.style.cssText = window.getComputedStyle(u[t], "").cssText, 0 == --c && g(h.outerHTML, f)
						})
					}
				}
				else g(h.outerHTML, f)
			}
		}), {
			refresh: function(e) {
				g(h.outerHTML, e)
			},
			destroy: function() {
				canvas = null, html = null, h = null
			}
		}
	}
	p.config = function(e) {
		$extend(t, e)
	}, e.$screenshot = p
}(this);
///home/zo/__/www/win3/public/42/js/socket.js
! function(n) {
	"use strict";

	function t(n) {
		var i = {};
		this.on = function(n, t) {
			return i[n] = i[n] || [], i[n].push(t), this
		}, this.send = function(n, t) {
			return this.conn.send(t), this
		}, this.connect = function() {
			"function" == typeof MozWebSocket ? this.conn = new MozWebSocket(n) : this.conn = new WebSocket(n), this.conn.onmessage = function(n) {
				t("message", n.data)
			}, this.conn.onclose = function() {
				t("close", null)
			}, this.conn.onopen = function() {
				t("open", null)
			}
		}, this.disconnect = function() {
			this.conn.close()
		};
		var t = function(n, t) {
			var o = i[n];
			if(void 0 !== o)
				for(var c = 0; c < o.length; c++) o[c](t)
		}
	}
	n.$socket = function(n) {
		return new t(n)
	}
}(this);
///home/zo/__/www/win3/public/42/js/template.js
! function(n) {
	"use strict";
	var e = {
		"\\": "\\\\",
		"\n": "\\n",
		"\r": "\\r",
		"'": "\\'"
	};
	n.$template = function(n) {
		return n = n || "", new Function("_", "return '" + n.replace(/[\\\n\r']/g, function(n) {
			return e[n]
		}).replace(/\{{#if\s*(.*?)\s*}}([\s\S]*?){{\/if}}/g, "' + (_.$1?'$2':'') + '").replace(/\{{#unless\s*(.*?)\s*}}([\s\S]*?){{\/unless}}/g, "' + (_.$1?'':'$2') + '").replace(/\{{\s*([\w\.]+)\s*}}/g, "' + (_.$1==null?'':_.$1) + '") + "'")
	}
}(window);
///home/zo/__/www/win3/public/42/js/archive.js
! function(t) {
	"use strict";
	t.$archive = function(i, s) {
		s = s || $fs.utils.getName(i + "") || "derp";
		var e = $alert.progress("Creating Archive...", "Archive");

		function n(t) {
			$file.download(t, s + ".zip")
		}

		function c(t, i) {
			e.update(t / i * 100)
		}

		function f(t) {
			console.error(t)
		}
		$loader(["/c/libs/zip/zip.js", "/c/libs/zip/zip-fs.js"], function() {
			zip.workerScriptsPath = "/c/libs/zip/";
			var o = new zip.fs.FS;

			function r(t, i) {
				s = s || $fs.utils.getName(t);
				var e = $fs.utils.getPathObj(t);
				e ? function o(n, r, t, i) {
					$io.enum([t], function(t, i, e) {
						"." !== i && ".." !== i ? $fs.utils.isShortcut(i) || "object" != typeof t ? $file.open(n + "/" + i, "Blob", function(t) {
							r.addBlob(i, t), e()
						}) : o(n + "/" + i, r.addDirectory(i), t, e) : e()
					}, function() {
						i()
					})
				}(e.cwd, o.root.addDirectory($fs.utils.getName(e.cwd)), e.obj, i) : $file.open(t, "Blob", function(t) {
					o.root.addBlob(this.name, t), i()
				})
			}

			function t() {
				o.root.exportBlob(n, c, f)
			}
			"string" == typeof i ? r(i, t) : $io.enum(i, function(t, i, e) {
				if($io.isElement(t)) {
					s = null;
					var o = t.getAttribute("data-exe"),
						n = t.getAttribute("data-path");
					$fs.utils.exist(o) ? r(o, e) : r(n, e)
				}
				else r(t, e)
			}, t)
		})
	}
}(this);
///home/zo/__/www/win3/public/42/js/loop.js
function $loop(e, t) {
	"use strict";
	var o, r;

	function u(n) {
		e((n - o) / 1e3), r = requestAnimationFrame(u), o = performance.now()
	}

	function i() {
		e((performance.now() - o) / 1e3), r = setTimeout(i, t), o = performance.now()
	}

	function c() {
		e(), r = requestAnimationFrame(c)
	}

	function a() {
		e(), r = setTimeout(a, t)
	}

	function n(n) {
		return f(), void 0 !== n && (t = n), (e.length ? t && 0 < t ? i : u : t && 0 < t ? a : c)(0), l
	}

	function f() {
		return t ? clearTimeout(r) : cancelAnimationFrame(r), l
	}
	var m = !1;
	var l = {
		callback: e,
		play: n,
		pause: f,
		toggle: function() {
			return m = m ? (f(), !1) : (n(), !0), l
		},
		fn: function(n) {
			e = n
		},
		destroy: function() {
			f(), l = null
		}
	};
	return l
}
///home/zo/__/www/win3/public/42/js/inputs/key.js
! function(e) {
	"use strict";
	var t;
	t = Element.prototype, Element && !t.matches && (t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector);
	var s, l, p, d, u, a, o = document.documentElement,
		h = String.fromCharCode,
		v = !1,
		n = [],
		i = [{
			data: {}
		}],
		f = ["⌫ Bksp Backspace", "↲ Enter", "⇧ Shift", "⇫ Caps CapsLock", "Option Alt", "Ctrl Control", "🍐 ♥  ⌘ Cmd Win Meta Super Command OS", "⇞ PgUp PageUp", "⇟ PgDn PgDown PageDown", "↖ Home", "↘ End", "↤ ← Left ArrowLeft", "↥ ↑ Up ArrowUp", "↦ → Right ArrowRight", "↧ ↓ Down ArrowDown", "⎵ Space Spacebar", "Del Delete", "Ins Insert", "Print PrintScr PrintScreen", "☰ Menu Apps Context_menu ContextMenu", "ScrLk Scroll ScrollLock", "AltGr AltGraph", "Break Pause", "Esc Escape", "Multiply *", "Add +", "Subtract -", "Decimal Period .", "Divide Slash /", "Backslash \\", "Equals =", "Semicolon ;", "Comma ,", "Hash Sharp Hashtag Octothorpe #"],
		m = {
			3: "Enter",
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: "Spacebar",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			44: "PrintScreen",
			45: "Insert",
			46: "Delete",
			91: "OS",
			92: "OS",
			93: "ContextMenu",
			96: "Insert",
			108: "Enter",
			124: "PrintScreen",
			127: "Delete",
			144: "NumLock",
			145: "ScrollLock",
			224: "OS",
			225: "AltGraph",
			63232: "ArrowUp",
			63233: "ArrowDown",
			63234: "ArrowLeft",
			63235: "ArrowRight",
			63272: "Delete",
			63273: "Home",
			63275: "End",
			63276: "PageUp",
			63277: "PageDown",
			63302: "Insert"
		},
		w = {},
		y = {},
		k = {},
		g = {},
		C = {},
		b = {},
		P = {};
	for(a = 1; a <= 12; a++) m[a + 111] = m[a + 63235] = "F" + a;

	function S(e) {
		return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
	}

	function L(e, t) {
		var a = P[v && O[s] ? "normal" : v ? u : O[s] ? s : "normal"][O[l] ? l : O[p] ? p : O[d] ? d : "normal"];
		return t && !a[e] && (a[e] = t), a[e]
	}

	function A(e) {
		var t = L(e);
		return {
			key: t ? h(t) : h(e)[O[s] || v ? "toUpperCase" : "toLowerCase"](),
			code: t || e
		}
	}

	function r(a, i) {
		if(i) {
			var r, c;
			if("keydown" === (i.data.event = a).type) {
				if(!1 === i.repeat && a.repeat) return f = null, void S(a);
				i.data.code = a.which, i.data.key = g[a.which] || null, i.data.char = "", i.preventDefault && (a.ctrlKey || i.data.key) && (S(a), a.stopImmediatePropagation()), (a.ctrlKey || a.shiftKey || i.data.key) && (f(), f = null, i.data.safe = !0)
			}
			if("keypress" === a.type) {
				i.data.char = h(a.which), L(i.data.code, a.which);
				var e = function(e) {
					var t = h(e.which);
					if(t.toUpperCase() !== t.toLowerCase()) return e.shiftKey && t.toLowerCase() === t || !e.shiftKey && t.toUpperCase() === t
				}(a);
				if("boolean" == typeof e && (v = e), !i.repeat && a.repeat || i.data.safe) return void(f = null);
				i.data.key || (i.data.code = a.which, i.data.key = h(a.which))
			}
			if("keyup" === a.type) {
				f = null;
				var t = A(a.which);
				i.data.code = t.code, i.data.char = t.key, i.data.key = g[a.which] || t.key, O[i.data.key] = !1, d(i.up);
				var o = i.data.key;
				for(var n in P)
					if(P.hasOwnProperty(n))
						for(var s in P[n])
							if(P[n].hasOwnProperty(s) && (o === n || o === s))
								for(var l in P[n][s]) P[n][s].hasOwnProperty(l) && (i.data.code = P[n][s][l], i.data.key = h(i.data.code), O[i.data.key] = !1);
				for(var p in i.data) i.data.hasOwnProperty(p) && delete i.data[p];
				i.preventDefault && S(a)
			}
			return i.timer = setTimeout(f, 1), !0 !== i.stopPropagation && void 0
		}

		function d(e) {
			if(e) {
				var t = e.call(i.thisArg, i.data.key, r = r || function(e) {
					var t = $extend({}, e.data);
					return t.session = e, t.w3c = b[e.data.key] || e.data.key, t.loc = t.w3c, t.pos = "Standard", e.data.event && e.data.event.location && (3 === e.data.event.location ? (t.pos = "Numpad", t.loc = "Numpad" + t.w3c) : e.data.char || (t.pos = 2 === e.data.event.location ? "Right" : "", t.loc = t.w3c + t.pos)), t.CapsLock = v, t
				}(i));
				(i.preventDefault || !1 === t) && S(a)
			}
		}

		function u(e) {
			if(e) {
				var t = i.possibleCombo.indexOf(e); - 1 < t && i.possibleCombo.splice(t, 1), e.then && u(e.then)
			}
		}

		function f() {
			if(!i.data.key) {
				var e = A(i.data.code);
				i.data.code = e.code, i.data.char = i.data.key = e.key
			}
			for(var t in O[i.data.key] = !0, d(i.down),
					function(e) {
						c = c || O.keys;
						for(var t = 0, a = e.length; t < a; t++) {
							for(var r = !1, o = 0, n = e[t].keys.length; o < n; o++) {
								if(-1 === c.indexOf(e[t].keys[o])) {
									if(i.comboStrict) {
										r = !1, u(e[t].parent);
										break
									}
									if(-1 === c.indexOf(e[t].keys[o].toUpperCase())) {
										r = !1, u(e[t].parent);
										break
									}
								}
								r = !0
							}
							if(r)
								if(e[t].run) {
									if(d(e[t].run), u(e[t].parent), i.stopPropagation || i.uniqueCombo) break
								}
							else e[t].then && -1 === i.possibleCombo.indexOf(e[t].then) && i.possibleCombo.push(e[t].then)
						}
					}(i.combo ? i.combo.concat(i.possibleCombo) : i.possibleCombo), i.data) i.data.hasOwnProperty(t) && delete i.data[t]
		}
	}

	function c(e) {
		"number" != typeof(e = e || window.event).which && (e.which = e.keyCode);
		for(var t = 0, a = n.length; t < a && !1 !== r(e, n[t]); t++);
	}

	function E(e) {
		var t = e.target;
		if(n.length = 0, i.length)
			for(; t && 1 === t.nodeType;) {
				for(var a = 0, r = i.length; a < r; a++) {
					var o = i[a];
					o.selector ? t.matches(o.selector) && n.push($extend({
						thisArg: t
					}, o)) : t === o.el && n.push($extend({
						thisArg: t
					}, o))
				}
				t = t.parentNode
			}
	}

	function O(e) {
		var a = {
			data: {},
			possibleCombo: []
		};
		"string" == typeof e ? a.selector = e : e && 1 === e.nodeType ? a.el = e : a.el = o;
		var t = i.push(a);
		a.stack = new Error("stack").stack.split("\n"), a.stack.shift(), a.stack = a.stack.join("\n");
		var r = {
			session: a,
			config: function(e) {
				return e ? ($extend(a, e), r) : a
			},
			up: function(e) {
				return a.up = e, r
			},
			down: function(e) {
				return a.down = e, r
			},
			combo: function(e) {
				var t = function(e) {
					var t = [];
					for(var a in e)
						if(e.hasOwnProperty(a))
							for(var r = a.replace(/\+\+/g, "+add").split(", "), o = 0, n = r.length; o < n; o++) {
								var i = {};
								t.push(i);
								for(var c = r[o].split(" "), s = i, l = 0, p = c.length; l < p; l++) {
									for(var d = c[l].split("+"), u = 0, f = d.length; u < f; u++) d[u] = C[d[u]] || C[w[d[u].toLowerCase()]] || w[d[u].toLowerCase()] || d[u];
									s.keys = d, 0 !== l && 1 < c.length && (s.parent = i), l === c.length - 1 ? s.run = e[a] : s = s.then = {}
								}
							}
					return t
				}(e);
				return a.combo ? a.combo = a.combo.concat(t) : a.combo = t, a.combo = a.combo.sort(function(e, t) {
					return t.keys.length - e.keys.length
				}), r
			},
			destroy: function() {
				i.splice(t - 1, 1)
			}
		};
		return r.set = r.combo, r
	}! function() {
		for(var e = 0, t = f.length; e < t; e++)
			for(var a = f[e].split(" "), r = a.pop(), o = a.length - 1; 0 <= o; o--) a[o].length < 3 ? (k[r] = a[o], k[r + "Right"] = a[o]) : a[o].length < r.length && (y[r] = a[o], y[r + "Right"] = a[o]), w[a[o].toLowerCase()] = r;
		var n = "ctrl super altgr left up right down space caps scroll print menu esc ins del".split(" "),
			i = n[0].toLowerCase() === n[0] ? "toLowerCase" : n[0].toUpperCase() === n[0] ? "toUpperCase" : null;
		for(e = 0, t = n.length; e < t; e++) C[w[n[e].toLowerCase()]] = n[e];
		for(var c in m) m.hasOwnProperty(c) && (g[c] = C[m[c]] || (i ? m[c][i]() : m[c]), C[m[c]] = g[c], b[g[c]] = m[c]);
		for(var c in s = C.Shift, l = C.Alt, p = C.AltGraph, d = C.Control, u = C.CapsLock, P) P.hasOwnProperty(c) && delete P[c];
		P.normal = {
			normal: {}
		}, P.normal[l] = {}, P.normal[p] = {}, P.normal[d] = {}, P[s] = {
			normal: {}
		}, P[s][l] = {}, P[s][p] = {}, P[s][d] = {}, P[u] = {
			normal: {}
		}, P[u][l] = {}, P[u][p] = {}, P[u][d] = {}
	}(), o.addEventListener("keydown", c, !1), o.addEventListener("keypress", c, !1), o.addEventListener("keyup", c, !1), o.setAttribute("tabindex", "0"), o.addEventListener("focus", function(e) {
		E(e)
	}, !0), o.addEventListener("click", function(e) {
		E(e)
	}, !0), o.focus(), o.addEventListener("focusout", function(e) {
		setTimeout(function() {
			if(!document.hasFocus())
				for(var e in O) O.hasOwnProperty(e) && (O[e] = !1)
		}, 0)
	}, !1), o.addEventListener("dblclick", function(e) {
		for(var t in O) O.hasOwnProperty(t) && (O[t] = !1)
	}, !1), Object.defineProperties(O, {
		alias: {
			value: {
				small: function(e) {
					return y[e] || e
				},
				symbol: function(e) {
					return k[e] || y[e] || e
				},
				favorite: function(e) {
					return g[e] || e
				}
			}
		},
		keys: {
			get: function() {
				var e, t = [];
				for(e in O) O.hasOwnProperty(e) && O[e] && t.push(e);
				return t
			}
		},
		activate: {
			value: function() {
				console.log("active")
			}
		}
	}), e.$key = O
}(this);
///home/zo/__/www/win3/public/42/js/inputs/gamepad.js
! function(n) {
	"use strict";
	n.$gamepad = function(n) {
		console.log(n)
	}
}(this);
///home/zo/__/www/win3/public/42/js/inputs/wheel.js
! function(e) {
	"use strict";
	var y = {},
		E = 0,
		L = {
			debounce: 0,
			noscroll: !1,
			handler: null,
			delay: 0
		};

	function l(s, e, t) {
		if("object" == typeof s && !(s instanceof HTMLElement)) return L = s;
		var l, n, i = s,
			a = $extend({}, L, t),
			o = a.delayy,
			r = a.handler;
		if(s + "" === s && ((s = document.getElementById(i)) || (s = document.querySelector(i))), s) {
			y[++E] = e, s.setAttribute("data-wheel-id", E);
			var c = function(e) {
				var t = e.wheelDelta ? e.wheelDelta / 40 : e.detail ? -e.detail : 0;
				return y[E].call(s, t, e), !1
			};
			if(a.acceleration) {
				var h = 0,
					u = !0;
				l = setInterval(function() {
					(h -= .1 * h) < 0 && (h = 0)
				}, a.acceleration), c = function(e) {
					h += 1;
					var t = e.wheelDelta ? e.wheelDelta / 40 : e.detail ? -e.detail : 0;
					return u = 0 < t ? (!1 === u && (h = 1), !0) : (!0 === u && (h = 1), !1), y[E].call(s, t, h, e), !1
				}
			}
			return a.throttle && (f = $io.fn.throttle(f, a.throttle)), a.debounce && (f = $io.fn.debounce(f, a.debounce)), s.addEventListener("mouseenter", o ? d : m, !1), s.addEventListener("mouseleave", o ? v : w, !1), {
				destroy: function() {
					s.removeEventListener("mouseenter", o ? d : m, !1), s.removeEventListener("mouseleave", o ? v : w, !1), clearTimeout(n), clearInterval(l);
					var e = s.getAttribute("data-wheel-id");
					e && y[e] && delete y[e], s.removeEventListener("mousewheel", f, !1), s.removeEventListener("DOMMouseScroll", f, !1), console.log("$wheel destroy : ", s.getAttribute("data-wheel-id"))
				}
			}
		}

		function f(e) {
			e = window.event || e, r ? r.isEqualNode(e.target) && (e.preventDefault(), c(e)) : (a.noscroll && e.preventDefault(), c(e))
		}

		function d(e) {
			e.preventDefault(), clearTimeout(n), n = setTimeout(function() {
				m()
			}, o)
		}

		function v(e) {
			e.preventDefault(), w(), clearTimeout(n)
		}

		function m() {
			s.addEventListener("mousewheel", f, !1), s.addEventListener("DOMMouseScroll", f, !1)
		}

		function w() {
			s.removeEventListener("mousewheel", f, !1), s.removeEventListener("DOMMouseScroll", f, !1)
		}
	}
	l.scale = function(e, t) {
		var r = $extend({
			negatif: !1
		}, t);
		e.scaleX = 1, e.scaleY = 1;
		var c = e.offsetWidth,
			h = e.offsetHeight,
			s = l(e, function(e, t) {
				var s = this.scaleX,
					l = this.scaleY;
				0 < e ? (this.scaleX += .1 * this.scaleX, this.scaleY += .1 * this.scaleY) : (this.scaleX -= .1 * this.scaleX, this.scaleY -= .1 * this.scaleY), r.negatif ? (this.scaleX < .1 && (this.scaleX = .1), this.scaleY < .1 && (this.scaleY = .1)) : (this.scaleX < 1 && (this.scaleX = 1), this.scaleY < 1 && (this.scaleY = 1)), this.style.width = c * this.scaleX + "px", this.style.height = h * this.scaleY + "px";
				var n = 1 - this.scaleX / s,
					i = 1 - this.scaleY / l,
					a = this.offsetLeft,
					o = this.offsetTop;
				a += (t.clientX - this.offsetLeft) * n, o += (t.clientY - this.offsetTop) * i, this.style.top = o + "px", this.style.left = a + "px"
			});
		return {
			destroy: function() {
				s.destroy(), delete e.scaleW, delete e.scaleH
			}
		}
	}, e.$wheel = l
}(this);
///home/zo/__/www/win3/public/42/js/ui/cli.js
! function(e) {
	"use strict";
	for(var r, t = ["clear", "error", "error", "succes", "fail", "pass", "warn", "info", "bold", "italic", "red", "blue", "green", "white", "yellow", "cyan", "magenta", "html", "autolink", "code", "pad", "right", "center", "repeat", "stack", "save", "stay", "id", "fast", "group", "noop", "obj", "end"], l = {
			el: null
		}, o = {}, s = "", n = 0, i = t.length; n < i; n++) l[t[n]] = "", o[t[n]] = function(e) {
		return function() {
			l[e] = "1"
		}
	}(t[n]);

	function a(e, t, o) {
		if(l.clear) return l.el.innerHTML = "", void(l.clear = "");
		if(l.repeat && (e = e.repeat(l.cols), l.repeat = ""), l.code && (e = $io.str.hilit(e), l.code = ""), l.pass && (e = "✔ " + e, s += "ui_log__green", l.pass = ""), l.fail && (e = "✘ " + e, s += "ui_log__red", l.fail = ""), l.info && (e = "ℹ " + e, s += "ui_log__blue", l.info = ""), l.italic && (s += " italic", l.italic = ""), l.bold && (s += " bold", l.bold = ""), l.white && (s += " ui_log__white", l.white = ""), l.yellow && (s += " ui_log__yellow", l.yellow = ""), l.cyan && (s += " ui_log__cyan", l.cyan = ""), l.magenta && (s += " ui_log__magenta", l.magenta = ""), l.blue && (s += " ui_log__blue", l.blue = ""), l.red && (s += " ui_log__red", l.red = ""), l.succes && (s += " ui_log__green", l.succes = ""), l.green && (s += " ui_log__green", l.green = ""), l.error && (s += " ui_log__red js_error", l.error = ""), l.obj) return l.obj = "", void
		function e(t, o) {
			for(var n in t) {
				var i = t[n];
				if(n == o) return;
				"string" == typeof i || "number" == typeof i || "boolean" == typeof i ? a.pad(n, i + "", ".") : $io.is.Object(i) && e(i, o)
			}
		}(e, t);
		if("Error" === $io.type(e) && (e = e.constructor.name + "\n" + e.message + $io.str.autolink(e.stack)), l.pad) {
			var n;
			o ? n = o : (n = t, t = "");
			var i = l.cols - 3 - (e.length + (t || "").length + (t ? 2 : 1));
			(e = e + " " + n.repeat((3 + (0 <= i ? i : 0)) / n.length) + (t ? " " + t : "")).length > l.cols && (e = e.match(new RegExp(".{1," + l.cols + "}", "g")).join("\n")), l.pad = ""
		}
		else if(t) {
			e = $io.arg.arr(arguments).join(", ")
		}
		return l.el ? ((r = document.createElement("div")).innerHTML = function(e) {
			return "string" == typeof e ? e : $io.isNumber(e) ? '<span class="sh_number">' + e + "</span>" : void 0 === e ? "undefined" : null === e ? "null" : "function" == typeof e ? $io.str.hilit($io.fn.str(e)) : $io.isObject(e) || $io.isArray(e) ? $io.str.hilit($io.stringify(e, 2)) : "function" == typeof e.constructor ? "<span class=sh_init>" + e.constructor.name + "</span> " + $io.str.hilit($io.stringify(e, 2), !0) : e
		}(e), r.className = s, l.el.appendChild(r), a.trigger("addline"), s = "", r) : void 0
	}
	a.config = function(e) {
		return $extend(l, e), a
	}, $watch(a), e.$log = $chain(a, o, o)
}(this),
function(m) {
	"use strict";

	function _(e) {
		e.scrollTop = e.scrollHeight
	}
	e.clearhistory = function() {
		w.length = 0
	};
	var w = m.$store ? $store(".config/history.json", [], function(e) {
		w = e
	}, function() {
		return w
	}) : [];

	function e(e, t) {
		var o = {
				cols: 59,
				exe: $noop,
				prompt: ">",
				history: w
			},
			r = $extend(o, t),
			n = document.createElement("code"),
			i = document.createElement("div"),
			l = document.createElement("div"),
			s = document.createElement("span"),
			a = document.createElement("textarea");
		if(e) {
			r.prompt += "&nbsp;", s.innerHTML = r.prompt, a.innerHTML = "", a.spellcheck = !1, a.rows = "1", a.style.outline = "0 none", a.style.boxShadow = "0 0 transparent", a.style.textShadow = "0 0 transparent", a.style.border = "0 none", a.style.verticalAlign = "top", a.style.resize = "none", a.style.padding = "0", a.style.margin = "0", a.style.height = "auto", a.style.width = "100%", a.style.color = "inherit", a.style.font = "inherit", a.style.fontSize = "inherit", a.style.background = "transparent", a.style.overflow = "hidden", a.style.textIndent = "0", l.style.display = "table", l.style.tableLayout = "fixed", a.style.display = "table-cell", s.style.display = "table-cell", s.style.width = "1%", s.style.whiteSpace = "nowrap", l.appendChild(s), l.appendChild(a), n.appendChild(i), n.appendChild(l), n.style.display = "block", n.style.width = r.cols + "ch", n.style.whiteSpace = "pre-wrap", n.style.wordBreak = "break-word", n.style.wordWrap = "break-word", e.appendChild(n), e.style.overflowY = "scroll", r.rows && (e.style.height = r.rows + "em"), $log.on("addline", function() {
				_(e)
			}), e.addEventListener("mouseup", f, !1), e.addEventListener("contextmenu", f, !1), a.addEventListener("mouseup", function(e) {
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, e.stopImmediatePropagation(), g()
			}, !1), a.addEventListener("paste", function(e) {
				setTimeout(function() {
					h(a)
				}, 0)
			}, !1);
			var c = 0,
				u = !1,
				d = $key(e).down(function(e, t, o) {
					h(a);
					var n = r.history.length;
					if(!1 === y.onkey(e, a.value)) return !1;
					if("enter" == e) {
						var i = $io.str.trim(a.value);
						if(!i) return y.log(r.prompt), !1;
						if(a.value = "", a.style.height = "auto", c = 0, !1 === y.onenter(i)) return !1;
						if(y.log(r.prompt + i), r.history[n - 1] != i && r.history.push(i), !r.exe.call(y, i)) try {
							y.log(eval.call(window, i))
						}
						catch (o) {
							y.log.error(o.message + "\n")
						}
						return !1
					}
					if(a.value || (u = !1), !u) {
						if("up" == e) return n < ++c && (c = n), a.value = r.history[n - c] || "", h(a), !1;
						if("down" == e) return --c < 0 && (c = 0), a.value = r.history[n - c] || "", h(a), !1
					}
				}),
				p = $log.config({
					cols: r.cols,
					el: i
				}),
				y = {
					cli: !0,
					cfg: r,
					destroy: function() {
						d.destroy(), this.ondestroy(), console.log("@todo : terminal destroy")
					},
					setFocus: f,
					ondestroy: $noop,
					onenter: $noop,
					onkey: $noop,
					prompt: s,
					input: a,
					log: p
				};
			return y
		}

		function g() {
			$log.config({
				cols: r.cols,
				el: i
			})
		}

		function f() {
			m.$selection && ($selection.get() || setTimeout(function() {
				a.focus(), g()
			}, 200))
		}

		function h(e) {
			! function(e) {
				e.style.height = e.scrollHeight + "px"
			}(e), _(e)
		}
	}
	m.$cli = e
}(this);
///home/zo/__/www/win3/public/42/js/ui/box.js
! function(e) {
	"use strict";
	var t;

	function x(e, t) {
		document.documentElement.addEventListener(e, t, !1)
	}

	function b(e, t) {
		document.documentElement.removeEventListener(e, t, !1)
	}

	function E(e) {
		var t = e.changedTouches ? e.changedTouches[0] : null;
		return t ? {
			x: t.clientX,
			y: t.clientY
		} : {
			x: e.clientX,
			y: e.clientY
		}
	}

	function w(e, t) {
		return !(e.right <= t.left || e.left >= t.right || e.bottom <= t.top || e.top >= t.bottom)
	}

	function o(e, o, t) {
		if("object" == typeof o && (t = o, o = null), "string" == typeof e && (e = document.querySelector(e)), !e) throw new Error("$box : element missing");
		var r, l, c, s, n, i = {
				distance: 10,
				oninit: $noop,
				onstart: $noop,
				ondraw: function(e, t, o) {},
				onstop: $noop
			},
			a = $extend(i, t),
			u = e;
		n = o ? function(e) {
			for(var t = e.target; t && 1 == t.nodeType && !t.matches(o);) t = t.parentNode;
			t && 9 != t.nodeType && y.call(u = t, e)
		} : y;
		var d = document.createElement("div");
		d.className = "ui_select_box", d.style.position = "fixed", d.style.zIndex = 9999, d.style.border = "1px dotted #000", d.style.backgroundColor = "rgba(0,0,0,.1)", d.style.display = "none";
		var m = {
			right: 0,
			left: 0,
			bottom: 0,
			top: 0
		};

		function p() {
			if(a.target) {
				for(var e = u.querySelectorAll(a.target), t = [], o = 0, n = e.length; o < n; o++) w(m, e[o].getBoundingClientRect()) && t.push(e[o]);
				return t
			}
		}
		var h = 0,
			f = !1;

		function v(e) {
			var t = E(e);
			r = t.x - c, l = t.y - s;
			var o = Math.abs(r),
				n = Math.abs(l);
			m.top = 0 < l ? s : t.y, m.left = 0 < r ? c : t.x, d.style.top = m.top + "px", d.style.left = m.left + "px", (o > a.distance || n > a.distance) && h === u.scrollTop && (e.preventDefault(), f || function(e) {
				a.onstart.call(u, e, d), f = !0
			}(e), d.style.display = "block", m.right = m.left + o, m.bottom = m.top + n, d.style.width = o + "px", d.style.height = n + "px", a.ondraw.call(u, e, p()))
		}

		function y(e) {
			if(this.isEqualNode(e.target || e.srcElement)) {
				h = u.scrollTop;
				var t = E(e);
				u.appendChild(d), c = t.x, s = t.y, v(e), x("mousemove", v), x("touchmove", v), x("mouseup", g), x("touchend", g), x("contextmenu", g), a.oninit.call(u, e, d)
			}
		}

		function g(e) {
			b("mousemove", v), b("touchmove", v), b("mouseup", g), b("touchend", g), b("contextmenu", g), a.onstop.call(u, e, p()), d.style.display = "none", u.removeChild(d), f = !1, h = u.scrollTop
		}
		return e.addEventListener("mousedown", n, !1), e.addEventListener("touchstart", n, !1), {
			destroy: function() {
				e.removeEventListener("mousedown", n, !1), e.removeEventListener("touchstart", n, !1)
			}
		}
	}
	t = Element.prototype, Element && !t.matches && (t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector), o.overlap = w, e.$box = o
}(this);
///home/zo/__/www/win3/public/42/js/ui/drag.js
! function(e) {
	"use strict";

	function E(e, t) {
		document.documentElement.addEventListener(e, t, !1)
	}

	function L(e, t) {
		document.documentElement.removeEventListener(e, t, !1)
	}

	function P(e) {
		var t = e.changedTouches ? e.changedTouches[0] : null;
		return t ? {
			x: t.clientX,
			y: t.clientY
		} : {
			x: e.clientX,
			y: e.clientY
		}
	}

	function $(i, s, e) {
		if("object" == typeof s && (e = s, s = null), "string" == typeof i && (i = document.querySelector(i)), !i) throw new Error("$drag : element missing");
		var n, o, l, r, a, u, m, g, t, d, c, f = {
				constrain: !1,
				ghost: !1,
				grid: !1,
				position: "absolute",
				handle: null,
				distance: 5,
				oninit: $noop,
				onstart: $noop,
				ondrag: $noop,
				onstop: $noop,
				ondrop: $noop
			},
			p = $extend(f, e),
			y = 0,
			h = 0,
			v = s ? $delegate(s, z) : z;
		if("function" == typeof p.ghost && Object.defineProperty(p, "ghost", {
				get: function() {
					return e.ghost(p)
				}
			}), "function" == typeof p.grid && Object.defineProperty(p, "grid", {
				get: e.grid
			}), $.elem = i, $.zone = null, $.isDragging = !1, s) t = d = c = i;
		else
			for(c = p.handle || i, d = t = i.parentNode; d.parentNode && 9 !== d.parentNode.nodeType && "static" == window.getComputedStyle(t, null).position;) d = d.parentNode;

		function x(e) {
			var t = P(e);
			n = t.x - a, o = t.y - u, ($.isDragging || Math.abs(n) > p.distance || Math.abs(o) > p.distance) && (T(e), $.isDragging || function(e) {
				if(p.ghost) document.body.appendChild($.ghost);
				else {
					var t = getComputedStyle($.elem, null);
					if(r = $.elem.offsetLeft - (parseInt(t.marginLeft) || 0), l = $.elem.offsetTop - (parseInt(t.marginTop) || 0), "absolute" === p.position || "fixed" === p.position) $.elem.style.position = "fixed" == t.position ? "fixed" : "absolute", $.elem.style.boxSizing = $.elem.style.webkitBoxSizing = $.elem.style.MozBoxSizing = "border-box", $.elem.style.height = $.elem.offsetHeight + "px", $.elem.style.width = $.elem.offsetWidth + "px", $.elem.style.left = r + "px", $.elem.style.top = l + "px";
					else {
						var n = parseInt(t.left) || 0,
							o = parseInt(t.top) || 0;
						p.constrain && (m = m - l + o, y = y - l + o, g = g - r + n, h = h - r + n), r = n, l = o, $.elem.style.position = "relative", $.elem.style.left = r + "px", $.elem.style.top = l + "px"
					}
					$.elem.classList.add("ui_is_dragging")
				}
				p.onstart.call($.elem, e), $.isDragging = !0
			}(e), n += r, o += l, p.constrain && (n = g < n ? g : n < h ? h : n, o = m < o ? m : o < y ? y : o), p.grid && (n = ~~((n + p.grid[0] / 2) / p.grid[0]) * p.grid[0], o = ~~((o + p.grid[1] / 2) / p.grid[1]) * p.grid[1]), p.ghost ? $.ghost && ($.ghost.style.left = n + "px", $.ghost.style.top = o + "px") : ($.elem.style.left = n + "px", $.elem.style.top = o + "px"), $.x = n, $.y = o, p.ondrag.call($.elem, e, n, o), p.zone && function(e, t) {
				var n = document.elementFromPoint(t.x, t.y);
				for(var o in p.zone)
					if(p.zone.hasOwnProperty(o)) {
						for(var i = p.zone[o], s = n; s && 1 == s.nodeType && !s.matches(o);) s = s.parentNode;
						s && 9 != s.nodeType ? ($.zone !== s && (i.leave && $.zone && i.leave(e, $.zone, $.elem), i.enter && i.enter(e, s, $.elem)), $.zone = s) : $.zone && (i.leave && i.leave(e, $.zone, $.elem), $.zone = null), i.move && $.zone && i.move(e, $.zone, $.elem)
					}
			}(e, t))
		}

		function z(e, t) {
			T(e), $.elem = t || (s ? this : i);
			var n = P(e);
			if(a = n.x, u = n.y, p.ghost) {
				$.ghost = $.createGhost($.elem);
				var o = $.elem.getBoundingClientRect();
				r = o.left, l = o.top
			}
			else $.ghost = null, r = $.elem.offsetLeft, l = $.elem.offsetTop;
			$.initialPos.x = r, $.initialPos.y = l, x(e), E("mousemove", x), E("touchmove", x), E("mouseup", b), E("touchend", b), E("contextmenu", T), p.oninit.call($.elem, e)
		}

		function b(e) {
			if(L("mousemove", x), L("touchmove", x), L("mouseup", b), L("touchend", b), L("contextmenu", T), $.isDragging) {
				var t = !1;
				p.zone && $.elem && (t = function(e) {
					var t = !1,
						n = P(e);
					for(var o in document.elementFromPoint(n.x, n.y), p.zone)
						if(p.zone.hasOwnProperty(o)) {
							var i = p.zone[o];
							i.drop && $.zone && (t = !0, i.drop(e, $.zone, $.elem))
						} return t
				}(e)), t || p.ondrop.call($.elem, e), p.onstop.call($.elem, e)
			}
			$.elem && $.elem.classList.remove("ui_is_dragging"), $.zone = null, $.elem = null, $.initialPos.x = null, $.initialPos.y = null, $.x = null, $.y = null, $.cfg = null, $.isDragging = !1
		}

		function T(e) {
			document.activeElement.blur(), e.preventDefault()
		}
		return m = d.offsetHeight - i.offsetHeight - .5, g = d.offsetWidth - i.offsetWidth - .5, c.addEventListener("mousedown", v, !1), c.addEventListener("touchstart", v, !1), {
			destroy: function() {
				$.isDragging = !1, $.removeGhost(), b(), c.removeEventListener("mousedown", v, !1), c.removeEventListener("touchstart", v, !1)
			}
		}
	}
	$.createGhost = function(e, t) {
		e.classList.add("ui_is_dragging");
		var n = e.cloneNode(!0),
			o = n.getElementsByTagName("*"),
			i = e.getElementsByTagName("*");
		n.style.cssText = getComputedStyle(e, null).cssText;
		for(var s = 0, l = o.length; s < l; s++) o[s].style.cssText = getComputedStyle(i[s], null).cssText, o[s].style.pointerEvents = "none";
		return n.classList.add("js-ghost"), n.style.pointerEvents = "none", n.style.position = "fixed", n.style.zIndex = 9999, n.style.opacity = ".7", e.classList.remove("ui_is_dragging"), n
	}, $.initialPos = {
		x: null,
		y: null
	}, $.revert = function(e, t) {
		$transition.revert($.ghost || $.elem, $.initialPos, function() {
			$.ghost && $.removeGhost()
		})
	}, $.removeGhost = function() {
		$.ghost && $.ghost.parentNode && $.ghost.parentNode === document.body && document.body.removeChild($.ghost), $.ghost = null
	}, e.$drag = $
}(this),
function(e) {
	"use strict";
	var s = function() {
		var e, t = document.createElement("div"),
			n = ["Webkit", "Moz", "O", "ms"];
		if("transition" in t.style) return "transition";
		for(e = 0; e < n.length; e++)
			if(n[e] + "Transition" in t.style) return n[e] + "Transition";
		return "transition"
	}();

	function t(e) {
		console.log(e)
	}
	t.revert = function(e, t, n, o) {
		if(void 0 === o && (o = 300), e && null !== t.x) {
			var i = e.style[s];
			e.style[s] = "left " + o + "ms ease, top " + o + "ms ease", e.style.left = t.x + "px", e.style.top = t.y + "px", setTimeout(function() {
				e.style[s] = i, "function" == typeof n && n()
			}, o)
		}
	}, e.$transition = t
}(this);
///home/zo/__/www/win3/public/42/js/ui/pos.js
! function(t) {
	"use strict";

	function S(t, e, o) {
		return z(t = t.replace(/([a-z]+)([+-])?/g, function(t, e, o) {
			return ("top" == e ? "bottom" : "bottom" == e ? "top" : "right" == e ? "left" : "left" == e ? "right" : e) + ("+" == o ? "-" : "-" == o ? "+" : "")
		}), e, o)
	}

	function z(t, e, o) {
		var s = o || {
				top: 0,
				left: 0
			},
			a = e.offsetHeight || 0,
			u = e.offsetWidth || 0;
		return t.replace(/(?:(right|left|center)(?:([+-])(\d+)(%)?)?)? ?(?:(top|bottom|center)(?:([+-])(\d+)(%)?)?)?/, function(t, e, o, n, f, i, l, r, p) {
			i || (i = "center"), e || (e = "center"), "right" == e && (s.left += u), "center" == e && (s.left += u / 2), "bottom" == i && (s.top += a), "center" == i && (s.top += a / 2), f && (n = u / 100 * +n), p && (r = a / 100 * +r), n && (s.left = s.left - +(o + n)), r && (s.top = s.top - +(l + r))
		}), s
	}
	t.$pos = function(f, t) {
		if(!f) throw new Error("$pos: element is undefined");
		f.style.position = "fixed";
		for(var i, e = f.parentNode, o = window.getComputedStyle(e, null); e.parentNode && 9 !== e.parentNode.nodeType && "none" == o.transform && "none" == o.perspective;) e.getAttribute("data-ui-menu-scroller"), e = e.parentNode, o = window.getComputedStyle(e, null);
		i = e.getBoundingClientRect();
		var n, l, r, p, s, a, u = {
				my: "left top",
				at: "left bottom",
				of: {},
				collision: "flip",
				within: window,
				transform: !1,
				overflow: "none"
			},
			d = $extend(u, t),
			c = z(d.my, f),
			h = z(d.at, d.of),
			g = h.top - c.top - i.top,
			w = h.left - c.left - i.left,
			y = {
				x: 0,
				y: 0,
				h: 0,
				w: 0
			},
			m = {};
		$io.isWindow(d.within) || !d.within ? (y.h = window.innerHeight, y.w = window.innerWidth) : (m = d.within.getBoundingClientRect(), y.x = m.left, y.y = m.top, y.h = d.within.offsetHeight, y.w = d.within.offsetWidth), f.offsetHeight > y.h && (s = d.of.getBoundingClientRect().top - y.y, a = y.h - s - d.of.offsetHeight, p = f.parentNode.isEqualNode(d.of) ? y.h : a < s ? s : a, f.style.height = p + "px", f.setAttribute("data-ui-menu-scroller", !0));
		var x = i.left == m.left ? 0 : m.left,
			v = i.top == m.top ? 0 : m.top,
			b = y.w - f.offsetWidth + x,
			C = y.h - f.offsetHeight + v;
		if(1 === d.of.nodeType) var T = window.getComputedStyle(d.of, null),
			H = T.transform || T.webkitTransform || T.MozTransform || T.msTransform;
		if(H && "none" != H) f.style.transformOrigin = T.transformOrigin, n = function() {
			var t, e, o, n;
			n = 0 == i.left ? (t = m.left, e = m.top, o = w, g) : (e = t = 0, o = w + m.left, g + m.top), f.style.left = d.of.offsetLeft + t + "px", f.style.top = d.of.offsetTop + e + "px", f.style.transform = H + " translateX(" + o + "px) translateY(" + n + "px)"
		};
		else if("fit" == d.collision) n = function(t, e) {
			t = b < (t += w) ? b : t < x ? x : t, e = C < (e += g) ? C : e < v ? v : e, f.style.left = t + "px", f.style.top = e + "px"
		};
		else if("flip" == d.collision || "flipfit" == d.collision) {
			var N = S(d.my, f),
				W = S(d.at, d.of),
				B = W.top - N.top - i.top,
				R = W.left - N.left - i.left;
			n = "flipfit" == d.collision ? function(t, e, o, n) {
				(b < (t += w) || t < x) && (t = o + R), (C < (e += g) || e < v) && (e = n + B), t = b < t ? b : t < x ? x : t, e = C < e ? C : e < v ? v : e, f.style.left = t + "px", f.style.top = e + "px"
			} : function(t, e, o, n) {
				(b < (t += w) || t < x) && (t = o + R), (C < (e += g) || e < v) && (e = n + B), f.style.left = t + "px", f.style.top = e + "px"
			}
		}
		else n = function(t, e) {
			f.style.left = t + w + "px", f.style.top = e + g + "px"
		};

		function $(t) {
			if(t || (t = d.of), 1 === t.nodeType) {
				var e = t.getBoundingClientRect();
				l = e.left, r = e.top
			}
			else t.preventDefault && (l = t.pageX, r = t.pageY);
			n(l, r, l, r)
		}
		return $(d.of), {
			update: $
		}
	}
}(this);
///home/zo/__/www/win3/public/42/js/ui/resize.js
! function(e) {
	"use strict";
	var d = e.$noop || function(e) {};

	function m(e, t) {
		document.documentElement.addEventListener(e, t, !1)
	}

	function v(e, t) {
		document.documentElement.removeEventListener(e, t, !1)
	}

	function w(e) {
		var t = e.changedTouches ? e.changedTouches[0] : null;
		return t ? {
			x: t.clientX,
			y: t.clientY
		} : {
			x: e.clientX,
			y: e.clientY
		}
	}
	var g = document.createElement("div");
	g.style.position = "absolute", g.style.zIndex = "999", g.style.top = "0", g.style.bottom = "0", g.style.left = "0", g.style.right = "0", g.style.pointerEvents = "auto", e.$resize = function(e, t) {
		if("string" == typeof e && (e = document.querySelector(e)), !e) throw new Error("$resize : element missing");
		if(!e.getAttribute("data-js-resize-init")) {
			e.setAttribute("data-js-resize-init", !0);
			for(var o = e.parentNode; o && o.parentNode && 9 !== o.parentNode.nodeType && "static" == window.getComputedStyle(o, null).position;) o = o.parentNode;
			"string" == typeof t && (t = {
				handles: t
			});
			var n = window.getComputedStyle(e, null),
				h = $extend({
					handles: "e, s, se",
					onstart: d,
					onresize: d,
					onstop: d
				}, t),
				f = "fixed" == n.position || "absolute" == n.position,
				s = e.getBoundingClientRect(),
				r = (s.top, s.left, []);
			"static" != n.position && "" != n.position || (e.style.position = "relative"), "all" == h.handles ? r = ["n", "w", "e", "s", "nw", "ne", "sw", "se"] : h.handles.replace(/([^,\s]+)/g, function(e, t) {
				r.push(t)
			});
			for(var i = [], l = 0, u = r.length; l < u; l++) i.push(a(e, r[l]));
			return {
				destroy: function() {
					for(var e = 0, t = i.length; e < t; e++) i[e].destroy()
				}
			}
		}

		function a(n, s) {
			var r, i, l, u, a, d, o, e = g.cloneNode();
			s = s || "s";
			try {
				o = $io.fn.throttle(p, 15)
			}
			catch (e) {
				o = p
			}

			function t(e) {
				e.preventDefault(), e.stopPropagation(),
					function(e) {
						var t = w(e);
						r = t.x, i = t.y, l = n.offsetWidth, u = n.offsetHeight, a = n.offsetTop, d = n.offsetLeft, m("mousemove", o), m("touchmove", o), m("mouseup", c), m("touchend", c), m("contextmenu", y),
							function() {
								for(var e = document.querySelectorAll("iframe"), t = 0, o = e.length; t < o; t++) e[t].dataset.oldPointerEvents = e[t].style.pointerEvents, e[t].style.pointerEvents = "none"
							}(),
							function(e) {
								e.dataset.oldTransform = e.style.transitionDuration, e.style.transitionDuration = "0s"
							}(n), document.documentElement.style.cursor = s + "-resize", h.onstart && h.onstart(n, e)
					}(e)
			}

			function y(e) {
				e.preventDefault()
			}

			function c(e) {
				document.documentElement.style.cursor = "auto",
					function() {
						for(var e = document.querySelectorAll("iframe"), t = 0, o = e.length; t < o; t++) e[t].style.pointerEvents = e[t].dataset.oldPointerEvents, delete e[t].dataset.oldPointerEvents
					}(),
					function(e) {
						e.style.transitionDuration = e.dataset.oldTransform, delete e.dataset.oldTransform
					}(n), v("mousemove", o), v("touchmove", o), v("mouseup", c), v("touchend", c), v("contextmenu", y), h.onstop && h.onstop(n, e)
			}

			function p(e) {
				var t = w(e);
				if("s" !== s && "se" !== s && "sw" !== s || (n.style.height = u + t.y - i + "px"), "e" !== s && "ne" !== s && "se" !== s || (n.style.width = l + t.x - r + "px"), "n" === s || "ne" === s || "nw" === s) {
					var o = t.y - i;
					f && (n.style.top = a + o + "px"), n.style.height = u - o + "px"
				}
				"w" !== s && "nw" !== s && "sw" !== s || (o = t.x - r, f && (n.style.left = d + o + "px"), n.style.width = l - o + "px"), h.onresize && h.onresize(n, e)
			}
			return e.className = "js-resizer js-resizer-" + s, "n" == s ? (e.style.bottom = "auto", e.style.height = "6px", e.style.cursor = "n-resize") : "s" == s ? (e.style.top = "auto", e.style.height = "6px", e.style.cursor = "s-resize") : "e" == s ? (e.style.left = "auto", e.style.width = "6px", e.style.cursor = "e-resize") : "w" == s ? (e.style.right = "auto", e.style.width = "6px", e.style.cursor = "w-resize") : "nw" == s ? (e.style.bottom = "auto", e.style.right = "auto", e.style.height = "6px", e.style.width = "6px", e.style.cursor = "nw-resize") : "ne" == s ? (e.style.bottom = "auto", e.style.left = "auto", e.style.height = "6px", e.style.width = "6px", e.style.cursor = "ne-resize") : "sw" == s ? (e.style.top = "auto", e.style.right = "auto", e.style.height = "6px", e.style.width = "6px", e.style.cursor = "sw-resize") : "se" == s && (e.style.top = "auto", e.style.left = "auto", e.style.height = "6px", e.style.width = "6px", e.style.cursor = "se-resize"), n.appendChild(e), e.addEventListener("mousedown", t, !1), e.addEventListener("touchstart", t, !1), {
				destroy: function() {
					e.removeEventListener("mousedown", t, !1), e.removeEventListener("touchstart", t, !1), e.parentNode && e.parentNode.removeChild(e)
				}
			}
		}
	}
}(this);
///home/zo/__/www/win3/public/42/js/ui/notif.js
! function(e) {
	"use strict";

	function p(e, t) {
		e.className = "ui_notif animated fadeOut", setTimeout(function() {
			e.parentNode && e.parentNode.removeChild(e)
		}, t ? 150 : 500)
	}
	var h = {
			default: document.body,
			dest: document.body
		},
		v = [];
	document.createElement("div");

	function t(e, t) {
		"string" == typeof e && ("string" == typeof t ? (e = {
			title: e,
			text: t
		}, t = null) : e = {
			text: e
		});
		var n = $extend({}, h, e);
		t || (t = n.default);
		var i, d = n.dest;
		n.text = n.text || n.description || n.body || "";
		var o = t.getAttribute("data-js-notif-id");
		if(o) i = v[o];
		else {
			i = document.createElement("div"), d.appendChild(i), i.style.zIndex = 99999;
			var a = t.getBoundingClientRect();
			i.style.position = "fixed", i.style.bottom = window.innerHeight - ~~(a.top + a.height / 2) + "px", i.style.right = window.innerWidth - ~~(a.left + a.width / 2) + "px", t.setAttribute("data-js-notif-id", v.push(i) - 1)
		}
		var l = document.createElement("div"),
			u = document.createElement("b"),
			s = (a = document.createElement("p"), document.createElement("span"));
		l.style.visibility = "hidden", l.className = "ui_notif", s.innerHTML = "&times;";
		var c = 0;
		n.title && (u.innerHTML = n.title, l.appendChild(u), c += n.title.length), a.innerHTML = n.text, c += n.text.length, l.appendChild(a), l.appendChild(s), !(s.onclick = function() {
			p(l, !0)
		}) !== n.delay && (l.onmouseover = function() {
			clearTimeout(r)
		}, l.onmouseout = function() {
			f()
		}), setTimeout(function() {
			l.style.visibility = "visible", l.className = "ui_notif animated fadeIn"
		}, 100), i.appendChild(l), c /= 5;
		var r, m = n.speed || c / 3 * 1e3;

		function f() {
			r = setTimeout(function() {
				p(l)
			}, m + 2e3)
		}!1 !== n.delay && f()
	}
	t.config = function(e) {
		$extend(h, e)
	}, e.$notif = t
}(this);
///home/zo/__/www/win3/public/42/js/ui/menu.js
! function(e) {
	"use strict";
	var C = document.createElement("div"),
		$ = document.createElement("ul"),
		T = document.createElement("li"),
		k = document.createElement("span"),
		H = 0,
		X = 0;

	function Y(e) {
		e.setAttribute("aria-hidden", !1), e.setAttribute("aria-expanded", !0), e.classList.add("ui_menu--open")
	}

	function O(e) {
		e.setAttribute("aria-hidden", !0), e.setAttribute("aria-expanded", !1), e.classList.remove("ui_menu--open")
	}
	$.setAttribute("role", "menu"), T.setAttribute("role", "menuitem"), T.setAttribute("tabindex", "-1"), T.className = "ui_menu__item", k.className = "ui_menu__item__text";
	var o = {},
		S = {};

	function q(n) {
		o[n] || (o[n] = !0, document.addEventListener("mousedown", function e(t) {
			for(var i = t.target; i && i.id !== n;) i = i.parentNode;
			i || (M(), document.removeEventListener("mousedown", e, !0), o[n] = !1)
		}, !0))
	}

	function M(e) {
		var t = !0;
		"select" === e && (t = !1, e = null);
		var i = (e || document).querySelectorAll(".ui_menu__item--focus"),
			n = (e || document).querySelectorAll(".ui_menu--open"),
			o = (e || document).querySelectorAll(".ui_menu--scroller");
		$io.arr.all(i, function(e) {
			S[e.parentNode.parentNode.id] = !1, e.classList.remove("ui_menu__item--focus")
		}), $io.arr.all(n, function(e) {
			O(e)
		}), $io.arr.all(o, function(e) {
			e.removeAttribute("style"), e.classList.remove("ui_menu--scroller"), e.classList.contains("ui_menu--scroller--active") && e.classList.remove("ui_menu--scroller--active"), e.removeEventListener("mouseover", I, !1)
		}), e || (t && R.current && R.current.cfg && R.current.cfg.oncancel && R.current.cfg.oncancel(), R.current && R.current.cfg && R.current.cfg.onclose && R.current.cfg.onclose(), R.current = null)
	}

	function I(e) {
		e.target.matches(".ui_menu__right_handler") ? this.classList.remove("ui_menu--scroller--active") : this.classList.add("ui_menu--scroller--active")
	}
	var z, B, r, s;
	! function() {
		var t, a, u = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
			i = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
		i.setAttribute("points", "0,0 0,0 0,0"), i.setAttribute("fill", "transparent"), i.style.cssText = "pointer-events:auto;", u.style.cssText = "pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;z-index:1", u.appendChild(i), document.body.appendChild(u), document.addEventListener("mousemove", function(e) {
			r = a = c = e.pageX, s = l = e.pageY, l >= _.top + 3 && l <= _.bottom - 3 && i.setAttribute("points", c + "," + l + " " + d + "," + m + " " + p + "," + f)
		}), i.onmousemove = function(e) {
			! function(e, t) {
				if(d === p) return c < d ? d - e <= d - a : d - a <= d - e
			}(e.pageX, e.pageY) ? n("fromTriangle"): (clearTimeout(t), t = setTimeout(function() {
				n("fromTriangle")
			}, 100)), setTimeout(function() {
				a = e.pageX, e.pageY
			}, 1)
		};
		var c, l, d, m, p, f, _ = {};

		function n(e) {
			i.setAttribute("points", "0,0 0,0 0,0"), setTimeout(function() {
				"fromTriangle" === e && function(e, t) {
					if(e.fireEvent) e.fireEvent("on" + t);
					else {
						var i = document.createEvent("Events");
						i.initEvent(t, !0, !1), e.dispatchEvent(i)
					}
				}(document.elementFromPoint(r, s), "mouseover")
			}, 1)
		}
		z = function(e, t, i, n, o, r, s) {
			_ = e.getBoundingClientRect(), e.appendChild(u), a = c = t, l = i, d = n, m = o, p = r, f = s
		}, B = n
	}();
	var P = {
		mode: "popup",
		icons: "auto",
		recursive: !1,
		hide: !1,
		solo: !0,
		aim: !0,
		display: !0,
		closeOthers: !0,
		trigger: "mouseover",
		onclose: null,
		position: {
			within: window
		}
	};

	function R(i, e, t) {
		$io.isElement(i) || (t = e || {}, e = i, i = document.createElement("div")), e || (e = []);
		var s, n = "tree" === t.mode ? $extend({}, P, {
				closeOthers: !1,
				trigger: "click",
				position: !1
			}) : "bar" === t.mode ? $extend({}, P, {}) : P,
			a = $extend({}, n, t),
			o = !1,
			r = !1,
			y = {},
			L = {};
		"tabs" === a.mode && (o = !0, a.mode = "bar"), "context" === a.mode && (r = !0, a.mode = "popup"), a.thisArg || (a.thisArg = i);
		var u = {};
		! function t(e) {
			$io.obj.all(e, function(e) {
				e.key && (u[e.key] = function() {
					return e.action.apply(this, arguments)
				}), "function" != typeof e.items && t(e.items)
			})
		}(e);
		var c, l, d = $key(a.keyTarget || i).config({
			thisArg: a.thisArg,
			uniqueCombo: !0
		}).combo(u);
		if(a.key) {
			var m = {};
			m[a.key] = function() {
				v()
			}, c = $key().combo(m)
		}
		i.classList.add("ui_menu_trigger"), (s = function r(e, t, i, n) {
			i = "function" == typeof i ? i.call(t.thisArg) : i;
			if(!1 === i) return !1;
			var o = document.createDocumentFragment(),
				s = C.cloneNode(!1),
				a = $.cloneNode(!1);
			s.appendChild(a);
			s.id = "ui_menu_" + H++;
			{
				if(!i) return !1;
				for(var u = 0, c = i.length; u < c; u++)
					if(i[u]) {
						var l = "function" == typeof i[u].display ? i[u].display.call(t.thisArg) : i[u].display;
						if(!1 !== l) {
							var d = i[u],
								m = T.cloneNode(!1);
							if("---" !== d.name) {
								m.id = "ui_menu__item_" + X++;
								var p = k.cloneNode(!1),
									f = document.createElement("span"),
									_ = document.createElement("span"),
									v = null;
								if(_.className = "ui_menu__item__ico", void 0 !== d.radio ? (_.className = "ui_menu__item__ico ui_form-ico-radio", v = A(d.radio, m, d.action)) : !0 === d.checkbox && (_.className = "ui_menu__item__ico ui_form-ico-checkbox", v = E(m, d.action)), p.innerHTML = "string" == typeof d.name ? d.name : d, d.icon) {
									if(0 === d.icon.indexOf(".")) {
										var g = document.createElement("div");
										g.className = "ui_menu__item__ico";
										var h = d.icon.split(".");
										h.forEach(function(e) {
											g.classList.add(e)
										})
									}
									else if(0 === d.icon.indexOf("<")) {
										var g = document.createElement("div");
										g.className = "ui_menu__item__ico", g.innerHTML = d.icon
									}
									else {
										var g = new Image;
										g.src = d.icon
									}
									_.appendChild(g)
								}
								else _.innerHTML = "&nbsp;";
								if(m.appendChild(_), m.appendChild(p), d.key && (f.innerHTML = d.key.replace(/(\+|^)[a-z]/g, function(e) {
										return e.toUpperCase()
									}), f.className = "ui_menu__item__key", m.appendChild(f)), L[m.id] = {
										item: m,
										val: d,
										action: v || d.action
									}, N(e, m, d), d.items) {
									m.setAttribute("aria-haspopup", !0), m.classList.add("ui_menu__item--opener");
									var b = function(t, i, n, o) {
										return function() {
											var e = r(t, i, n.items, n);
											e || ((e = document.createElement("div")).innerHTML = '<ul><li class="ui_menu__item ui_menu__item--disabled"><em>No items...</em></ul></li>'), !(e.className = "ui_menu__submenu") !== i.position && O(e), o.appendChild(e)
										}
									}(e, t, d, m);
									!0 === t.recursive ? b() : y[m.id] = b
								}
								o.appendChild(m)
							}
							else m.className = "ui_menu__separator", m.appendChild(document.createElement("hr")), o.appendChild(m)
						}
					}
			}
			a.appendChild(o);
			return s
		}(i, a, e)).className = "ui_menu ui_menu--" + ("inline" === a.mode || "popup" === a.mode ? "menu" : a.mode), s.setAttribute("tabindex", "0"), s.style.zIndex = $maxZ(".ui_menu", s.parentNode).num + 1, "popup" !== a.mode ? o ? (i.appendChild(s), a.dest ? l = a.dest : ((l = document.createElement("div")).className = "ui_menu--tabs__content", i.appendChild(l))) : i.appendChild(s) : (document.body.appendChild(s), s.classList.add("ui_menu--popup"), O(s), r ? i.addEventListener("contextmenu", v, !1) : "auto" === a.trigger ? v() : a.trigger && i.addEventListener("click", v, !1));
		var p, f = {};

		function A(o, r, s) {
			return f[o] ? f[o].push(r) : f[o] = [r],
				function() {
					for(var e, t = f[o], i = 0, n = t.length; i < n; i++) t[i].setAttribute("data-menuitem-selected", !1), "function" != typeof(e = L[t[i].id].val).selected && (e.selected = !1);
					"function" != typeof(e = L[r.id].val).selected && (e.selected = !0), r.setAttribute("data-menuitem-selected", !0), s && s.call(this, e)
				}
		}

		function E(i, n) {
			return function() {
				var e = "true" === i.getAttribute("data-menuitem-selected");
				i.setAttribute("data-menuitem-selected", !e);
				var t = L[i.id].val;
				if("function" != typeof t.selected && (t.selected = !e), n) return n.call(this, !e)
			}
		}

		function N(e, t, i) {
			var n = "function" == typeof i.display ? i.display.call(a.thisArg) : i.display,
				o = "function" == typeof i.disabled ? i.disabled.call(a.thisArg) : i.disabled,
				r = "function" == typeof i.selected ? i.selected.call(a.thisArg) : i.selected;
			t.style.display = !1 === n ? "none" : "", o ? t.classList.add("ui_menu__item--disabled") : t.classList.remove("ui_menu__item--disabled"), t.setAttribute("data-menuitem-selected", r)
		}

		function _(e) {
			for(var t in L)
				if(L.hasOwnProperty(t)) {
					var i = L[t];
					N(0, i.item, i.val)
				}
		}

		function v(e) {
			if(e && (e.stopImmediatePropagation(), e.preventDefault()), !s.classList.contains("ui_menu--open")) {
				a.solo && M(), R.current = w, Y(s), s.style.zIndex = $maxZ(".ui_menu, .ui_icon, .ui_window").num + 1;
				var t = {
					collision: "flip",
					of: a.position.of || i,
					within: a.position.within
				};
				a.position.my && (t.my = a.position.my), a.position.at && (t.at = a.position.at), p = $pos(s, t), s.getAttribute("data-ui-menu-scroller") && g(s), q(s.id)
			}
		}

		function g(e) {
			function t() {
				0 === e.scrollTop ? i.disabled = !0 : i.disabled = !1, e.scrollHeight - e.scrollTop === e.clientHeight ? n.disabled = !0 : n.disabled = !1
			}
			var i, n, o, r;
			if(e.classList.contains("ui_menu--scroller--active") && e.classList.remove("ui_menu--scroller--active"), e.classList.add("ui_menu--scroller"), 1 == e.childNodes.length) {
				i = document.createElement("button"), n = document.createElement("button"), o = document.createElement("div"), i.className = "ui_menu__up_handler", n.className = "ui_menu__down_handler", o.className = "ui_menu__right_handler";
				var s = e.firstChild.offsetWidth;
				i.style.width = n.style.width = s + "px", e.appendChild(i), e.appendChild(n), e.appendChild(o), r = e.getBoundingClientRect(), i.style.top = r.top + "px", n.style.bottom = window.innerHeight - e.offsetHeight - r.top + "px", o.style.left = r.left + s + "px", i.onclick = function() {
					e.scrollTop -= 80, t()
				}, n.onclick = function() {
					e.scrollTop += 80, t()
				}, e.onscroll = function() {
					t()
				}, t()
			}! function(e) {
				e.addEventListener("mouseover", I, !1), e.querySelector(".ui_menu__up_handler").addEventListener("mouseover", I, !1)
			}(e)
		}

		function h(o) {
			for(var r = o.target; r && "LI" !== r.tagName;) r = r.parentNode;
			r && (!1 !== a.position && r.classList.contains("ui_menu__item--focus") || r.classList.contains("ui_menu__item--disabled") || $io.arr.each(r.parentNode.childNodes, function(e) {
				if(e.id == r.id) {
					if(a.closeOthers && M(e), "bar" == a.mode && !S[s.id] && r.parentNode.parentNode.id == s.id) return;
					if(e.classList.add("ui_menu__item--focus"), e.classList.contains("ui_menu__item--opener") && !e.classList.contains("ui_menu__item--disabled")) {
						y[r.id] && y[r.id]();
						var t = e.lastChild;
						if(!1 === a.position) ! function(e, t) {
							t.classList.contains("ui_menu--open") ? (O(t), e.classList.remove("ui_menu__item--focus")) : Y(t)
						}(e, t);
						else {
							t.style.position = "fixed", Y(t);
							var i = "bar" == a.mode && r.parentNode.parentNode.id == s.id;
							if($pos(t, {
									my: "left top-1",
									at: i ? "left bottom" : "right top",
									of: e,
									collision: "flipfit",
									within: a.position.within || window
								}), t.getAttribute("data-ui-menu-scroller") && g(t), a.aim) {
								var n = t.getBoundingClientRect();
								i ? o.pageY < n.bottom ? z(e, o.pageX, o.pageY, n.left, n.top, n.right, n.top) : z(e, o.pageX, o.pageY, n.left, n.bottom, n.right, n.bottom) : o.pageX < n.left ? z(e, o.pageX, o.pageY, n.left, n.top, n.left, n.bottom) : z(e, o.pageX, o.pageY, n.right, n.top, n.right, n.bottom)
							}
							q(s.id)
						}
					}
					else B(!0)
				}
				else a.closeOthers && (e.classList.remove("ui_menu__item--focus"), M(e))
			}))
		}
		var b = "auto" == a.trigger ? "mouseover" : a.trigger;

		function x(e) {
			if("bar" == a.mode && (S[s.id] ? (S[s.id] = !1, M()) : (S[s.id] = !0, h(e))), !this.classList.contains("ui_menu__item--disabled")) {
				var t = L[this.id].action,
					i = typeof t;
				!o || "string" != i && "function" != i || (l.innerHTML = "function" == i ? t.call(a.thisArg) : t, M()), "function" == i && !1 !== t.call(a.thisArg, e, L[this.id].val) && M("select")
			}
		}
		b || (b = "mouseover"), s.addEventListener(b, h, !1), s.onfocus = function(e) {
			var t = s.querySelector(".ui_menu__item");
			x.call(t, {
				target: t
			})
		}, S[s.id] = !1, s.onblur = function(e) {
			M()
		}, $el(s).on("click", ".ui_menu__item", x);
		var w = {
			cfg: a,
			destroy: function() {
				$el(s).off("click", ".ui_menu__item", x), s.removeEventListener(b, h, !1), L = y = null, d && d.destroy && d.destroy(), c && c.destroy && c.destroy()
			},
			refresh: function(e) {
				e && (a.thisArg = e), _(a.thisArg)
			},
			show: function(e, t) {
				e && (a.thisArg = e, d.config({
					thisArg: e
				}), _()), t && (a.position = t), v()
			},
			setThisArg: function(e) {
				e && (a.thisArg = e, _())
			},
			key: d,
			position: p
		};
		return w
	}
	R.config = function(e) {
		$extend(P, e)
	}, R.extend = function(e, t) {
		var d = $extend([], e);
		return $io.obj.all(t, function(l, e) {
			e.replace(/^((after|before|replace|delete|extend):)?(([\d.]+)|(.*))/, function(e, t, i, n, o, r) {
				if(o) {
					var s = o.split("."),
						a = +s.pop(),
						u = d;
					$io.arr.all(s, function(e) {
						var t = +e;
						u = u[t].items ? u[t].items : u[t]
					})
				}
				else if(r) {
					var c = function i(n, o) {
						var r;
						return $io.arr.each(o, function(e, t) {
							return e.name === n ? !(r = {
								arr: o,
								pos: t
							}) : (e.items && (r = i(n, e.items)), !r && void 0)
						}), r
					}(r, d);
					u = c.arr, a = c.pos
				}
				i && "before" !== i ? "after" === i ? $io.arr.insert(u, l, a + 1) : "extend" === i ? u[a] = $extend({}, u[a], l[0]) : "replace" === i ? u[a] = l[0] : "delete" === i && u.splice(a, 1) : $io.arr.insert(u, l, a)
			})
		}), d
	}, e.$menu = R
}(window);
///home/zo/__/www/win3/public/42/js/ui/form.js
! function(e) {
	var u = 0,
		c = document.createElement("form"),
		w = document.createElement("legend"),
		E = document.createElement("div"),
		x = document.createElement("div"),
		L = document.createElement("label"),
		A = document.createElement("input"),
		M = document.createElement("textarea"),
		q = document.createElement("select"),
		O = (document.createElement("option"), document.createElement("button"));

	function T(e, t) {
		if(e)
			for(var n = e.split(/\s+/), i = 0, a = n.length; i < a; i++) t(n[i])
	}

	function k(e) {
		$extend(this, e)
	}
	O.setAttribute("type", "button"), M.setAttribute("rows", 4), E.className = "ui_form__tab", c.className = "ui_form";
	var H = 0;

	function S(a, r, e, o, i) {
		var f = a.el,
			t = document.createDocumentFragment();
		if(!r) return {
			fragment: t
		};
		if("object" === r.type) {
			var n = w.cloneNode(!0);
			(u = E.cloneNode(!0)).className = "ui_form__tab ui_form__object", u.id = "ui_form__tab_" + a.id + "_" + H++, a.fields[o + "{}"] = $ = new k({
				type: "object",
				path: o,
				fields: {},
				div: u
			}), (r.title || e) && (n.textContent = r.title || e, u.appendChild(n));
			var l = x.cloneNode(!0);
			if(T(r.className, function(e) {
					l.classList.add(e), u.classList.add("ui_form__object--" + e.replace(/ui_form[-_]*/, ""))
				}), r.description)(N = document.createElement("div")).className = "ui_form__description", N.innerHTML = r.description, u.appendChild(N);
			if($io.obj.each(r.properties, function(e, t) {
					var n = S(a, e, t, o ? o + "." + t : t, i && i.hasOwnProperty(t) ? i[t] : null);
					$.fields[t] = n, l.appendChild(n.fragment)
				}), u.appendChild(l), r.help) {
				var d = document.createElement("div");
				d.className = "ui_form__help", d.innerHTML = r.help, u.appendChild(d)
			}
			$io.obj.all(r.plugin, function(e, t) {
				F.plugin[t] && F.plugin[t].call(r, $, r.plugin[t], e)
			}), t.appendChild($.div)
		}
		else if("array" === r.type) {
			n = w.cloneNode(!0);
			var u, c = u = E.cloneNode(!0);
			u.className = "ui_form__tab ui_form__array", u.id = "ui_form__tab_" + a.id + "_" + H++, a.fields[o + "[]"] = $ = new k({
				type: "array",
				path: o,
				div: u,
				addItem: b,
				reorder: m,
				setValue: function(e, t) {
					$io.arr.all(document.querySelectorAll("#" + u.id + " .ui_form__array__item"), function(e) {
						e.remove()
					}), v = 0, y = e.length;
					for(var n = []; v < y;) {
						var i = b(e[v]);
						n.push(i), t(e[v - 1], i)
					}
					return n
				}
			}), T(r.className, function(e) {
				u.classList.add(e)
			}), n.innerHTML = (r.title || e) + "&nbsp;";
			var s = O.cloneNode(!0);
			s.className = "ui_form__array_btn ui_form__btn_add", s.innerHTML = F.default.add, s.onclick = function() {
				b()
			}, n.appendChild(s);
			var p = A.cloneNode();

			function m() {
				for(var e, t = f.querySelectorAll("[name]"), i = [], n = 0, a = 0, r = t.length; a < r; a++) {
					for(var o = t[a], l = -1, d = null, u = o.parentNode; u && 1 == u.nodeType;) u.classList.contains("ui_form__array__item") && (d || (d = u), l++), u = u.parentNode;
					if(-1 < l) {
						void 0 === i[l] && (i[l] = -1), e !== d && (n < l ? i[l] = 0 : i[l]++);
						var c = o.name,
							s = 0,
							p = c.replace(/(\.?)(\d+)(?![^.\s])/g, function(e, t, n) {
								return t + i[s++]
							});
						o.name = p, o.id = "ui_form__" + p, e = d, n = l
					}
					else i.length = 0
				}
			}

			function _(e) {
				for(var t = [], n = 0, i = c.children.length; n < i; n++) c.children[n].classList.contains("ui_form__array__item") && t.push(c.children[n]);
				if(e) var a, r;
				for(a = 0, r = t.length; a < r; a++) {
					var o = "ui_form_temp" + a + (Math.random() + "").slice(2);
					t[a].id = o, c.querySelector("#" + o + " > .ui_form__array__btns > .ui_form__btn_up").disabled = 0 === a, c.querySelector("#" + o + " > .ui_form__array__btns > .ui_form__btn_down").disabled = a === r - 1, t[a].id = ""
				}
				m()
			}

			function h(e, t, n) {
				var i = O.cloneNode();
				i.className = "ui_form__array_btn ui_form__btn_" + t, i.innerHTML = F.default[t], i.onclick = n, e.appendChild(i)
			}

			function b(e) {
				var t = document.createElement("div");
				t.className = "ui_toolbar ui_form__array__item";
				var n = S(a, r.items, "", o + "." + v++, e);
				t.appendChild(n.fragment);
				var i = document.createElement("div");
				return i.className = "ui_form__array__btns", h(i, "remove", function() {
					t.remove(), _()
				}), h(i, "up", function() {
					c.insertBefore(t, t.previousSibling), _()
				}), h(i, "down", function() {
					c.insertBefore(t, t.nextSibling.nextSibling), _()
				}), t.appendChild(i), c.appendChild(t), _(!0), n
			}
			p.name = o, p.value = o, p.setAttribute("data-is-array", !0), n.appendChild(p), u.appendChild(n), i || (i = []);
			for(var v = 0, y = i.length; v < y;) b(i[v]);
			$io.obj.all(r.plugin, function(e, t) {
				F.plugin[t] && F.plugin[t].call(r, $, r.plugin[t], e)
			}), t.appendChild($.div)
		}
		else {
			if("string" !== r.type && "boolean" !== r.type && "number" !== r.type && "integer" !== r.type) throw new Error("$form: unknown schema type : " + r.type);
			l = x.cloneNode();
			var g, N, $, C = L.cloneNode();
			if(l.className = "ui_form__field", T(r.className, function(e) {
					l.classList.add(e)
				}), F.format[r.format] ? g = F.format[r.format].call(r) : r.enum ? (g = q.cloneNode(), $io.arr.all(r.enum, function(e) {
					Array.isArray(e) ? g.options[g.options.length] = new Option(e[0], e[1]) : g.options[g.options.length] = new Option(e, e)
				})) : "textarea" === r.format ? g = M.cloneNode() : (g = A.cloneNode(), "string" === r.type && (g.type = "text"), "number" !== r.type && "integer" !== r.type || (g.type = "number")), "boolean" === r.type) {
				g.type = "checkbox", "boolean" == typeof i ? g.checked = i : r.default && (g.checked = r.default);
				document.createElement("span")
			}
			else null != i ? g.value = i : r.default && (g.value = r.default);
			r.placeholder && (g.placeholder = r.placeholder), !0 !== r.ignore && (g.name = o), g.id = "ui_form__" + o, C.setAttribute("for", "ui_form__" + o), C.innerHTML = r.title || e, r.pattern && g.setAttribute("pattern", r.pattern), r.attributes && $io.obj.all(r.attributes, function(e, t) {
				"required" === t && r.required, "function" == typeof e ? g[t] = e : g.setAttribute(t, e)
			}), !0 === r.required && (C.innerHTML = C.innerHTML + ' <span title="required" class="ui_form__required">*</span>', g.required = !0), r.description && ((N = document.createElement("div")).className = "ui_form__description", N.innerHTML = r.description);
			(!0 === a.cfg.disabled || !0 === r.disabled || !0 === r.createOnly && !1 === a.cfg.create) && ("text" === g.type ? g.classList.add("disabled") : g.disabled = !0), a.fields[o] = $ = new k({
				type: r.type,
				path: o,
				div: l,
				input: g,
				actionZone: g,
				label: C,
				getValue: function() {
					return this.input.value
				},
				setValue: function(e) {
					this.input.value = e
				},
				setFocus: function() {
					this.input.focus()
				},
				onFocus: function(e) {
					this.input.onfocus = e
				},
				onBlur: function(e) {
					this.input.onblur = e
				},
				onModif: function(e) {
					this.input.oninput = this.input.onkeyup = this.input.onchange = e
				}
			}), F.type[r.type] && "function" == typeof F.type[r.type] && j($, "type", r.type), r.plugin = r.plugin || [], r.format && F.plugin[r.format] && (r.plugin[r.format] = !0), $io.obj.all(r.plugin, function(e, t) {
				F.plugin[t] && j($, "plugin", t)
			}), "boolean" === r.type ? ($.div.appendChild($.actionZone), $.div.appendChild($.label), N && $.div.appendChild(N)) : ($.div.appendChild($.label), N && $.div.appendChild(N), $.div.appendChild($.actionZone)), r.hidden && $.div.classList.add("hide"), t.appendChild($.div)
		}

		function j(e, t, n) {
			return e = F[t][n].call(r, e, $extend({}, r[t][n]))
		}
		return Object.defineProperty($, "fragment", {
			get: function() {
				return delete $.fragment, t
			},
			configurable: !0
		}), $
	}
	var s = "string number boolean null".split(" ");

	function F(e, t) {
		return "FORM" == e.nodeName ? F.data(e) : F.build(e, t)
	}

	function a(e) {
		var t = e.getAttribute("data-form-id");
		if(t && F.instances[t]) {
			var n = F.instances[t].fields;
			for(var i in n) n.hasOwnProperty(i) && n[i].save && n[i].save()
		}
	}
	F.instances = {}, F.build = function(e, t) {
		H = 0;
		var n = $extend({}, t),
			i = u++,
			a = c.cloneNode(),
			r = "ui_form_" + i;
		a.id = r, a.setAttribute("data-form-id", i), e.schema || (e.schema = function n(e, i) {
			i = {};
			var t = typeof e;
			return -1 < s.indexOf(t) ? i.type = t : Array.isArray(e) ? (i.type = "array", i.items = n(e[0])) : $io.isObject(e) && (i.type = "object", i.properties = {}, $io.obj.all(e, function(e, t) {
				i.properties[t] = n(e)
			})), i
		}(e), e.data = e), e.schema.type ? e.schema = $extend({}, e.schema) : e.schema = {
			type: "object",
			properties: $extend({}, e.schema)
		}, e.schema = function n(i) {
			return i.properties && $io.obj.all(i.properties, function(e, t) {
				"object" === e.type && (e = n(e)), i.required && -1 < i.required.indexOf(t) && (e.required = !0)
			}), i
		}(e.schema);
		var o, l = F.instances[i] = {
			id: i,
			el: a,
			cfg: n,
			schema: e.schema,
			data: e.data,
			fields: {},
			destroy: function() {
				this.el.remove(), delete F.instances[i]
			}
		};
		o = e.data ? S(l, e.schema, "", "", $extend({}, e.data)).fragment : S(l, e.schema, "", "").fragment;
		var d = document.createElement("button");
		return d.type = "submit", d.style.display = "none", o.appendChild(d), a.appendChild(o), l
	}, F.onvalidate = function(e, t) {
		console.log(e, t)
	}, F.validate = function(e) {
		a(e);
		var n = !0,
			t = "FORM" === e.tagName ? e.elements : e.length ? e : [e];
		return $io.arr.each(t, function(e, t) {
			e.validity.valid || (n = !1, F.onvalidate(e.validationMessage, e), 0 === t && (e.select(), e.focus()))
		}), n
	}, F.data = function(e) {
		a(e);
		var t, n, i = {};
		return $io.arr.all(e.elements, function(e) {
			if("" !== e.name && !e.disabled)
				if("checkbox" === e.type) $io.obj.path(i, e.name, !!e.checked);
				else if("number" === e.type) $io.obj.path(i, e.name, parseInt(e.value));
			else if("select-multiple" === e.type) {
				for(t = [], n = e.options.length - 1; 0 <= n; n -= 1) e.options[n].selected && t.push(e.options[n].value);
				$io.obj.path(i, e.name, t)
			}
			else e.getAttribute("data-is-array") ? $io.obj.path(i, e.name, []) : $io.obj.path(i, e.name, e.value)
		}), i
	}, F.update = function(n, e) {
		console.warn("WARNING - TODO $form.update() with array"), e ? $io.obj.all(e, function(e, t) {
			n[t] && (n[t].value = e)
		}) : $io.arr.all(n.elements, function(e) {
			e.value = ""
		})
	}, F.disable = function(e) {
		$io.arr.all(e.elements, function(e) {
			e.disabled && (e.wasDisbled = !0), e.disabled = !0
		})
	}, F.enable = function(e) {
		$io.arr.all(e.elements, function(e) {
			e.wasDisbled || (e.disabled = !1)
		})
	}, F.plugin = {}, F.format = {}, F.type = {}, F.default = {
		add: "+",
		remove: "-",
		up: "up",
		down: "down"
	}, e.$form = F
}(this);
///home/zo/__/www/win3/public/42/os/ui/form.plugins.js
! function(e) {
	"use strict";
	$form.plugin.explorer = function(n, t) {
		var e = document.createElement("div");
		return n.btn = document.createElement("button"), n.btn.innerHTML = '<img height=16 width=16 src="' + le._path.skin + 'places/16/folder-open.png">', e.className = "ui_form_combo w100", e.appendChild(n.actionZone), e.appendChild(n.btn), n.actionZone = e, n.btn.onclick = function(e) {
			e.preventDefault(), setTimeout(function() {
				$explorer($extend({
					path: "/",
					browse: !0,
					onclose: function(e, t) {
						e && (n.input.value = t, $el(n.input).trigger("change"))
					}
				}, t))
			}, 0)
		}, n
	}, $form.plugin.icon = function(i, t) {
		document.createElement("div");
		var n = document.createElement("button");

		function o() {
			n.style.backgroundImage = "url(" + i.input.value + ")"
		}
		return n.type = "button", n.className = "block left mr10 h50p w50p", n.style.backgroundRepeat = "no-repeat", n.style.backgroundPosition = "center", n.style.backgroundSize = "32px 32px", i.input.value || (i.input.value = "/c/sys/skins/w93/shortcut.png"), i.input.value = $fs.utils.normalizeIcon(i.input.value), o(), n.onclick = function(e) {
			e.preventDefault(), setTimeout(function() {
				$explorer($extend({
					path: "/c/files/images/icons/",
					accept: "image/*",
					browse: !0,
					onclose: function(e, t) {
						e && (i.input.value = t, o())
					}
				}, t))
			}, 0)
		}, setTimeout(function() {
			var e = i.input.form;
			t && t.watch && e[t.watch] && (e[t.watch].addEventListener("change", function(e) {
				if("/c/sys/skins/w93/shortcut.png" === i.input.value) {
					var t, n = (this.value || "").split(" ")[0];
					(t = le._apps[n] && le._apps[n].icon ? le._apps[n].icon : $fs.utils.getIcon(this.value)) && "/c/sys/skins/w93/file.png" !== t && (i.input.value = t, o())
				}
			}, !1), $el(e[t.watch]).trigger("change")), e.insertBefore(n, e.firstChild)
		}, 0), i.div.classList.add("hide"), i
	}
}();
///home/zo/__/www/win3/public/42/js/ui/window.js
! function(e) {
	"use strict";
	var ne = {
			title: "",
			html: "",
			help: "",
			url: null,
			menu: null,
			header: !0,
			footer: null,
			width: 390,
			height: 270,
			borderTopWidth: 1,
			borderBottomWidth: 1,
			borderLeftWidth: 1,
			borderRightWidth: 1,
			baseWidth: null,
			baseHeight: null,
			minWidth: null,
			minHeight: null,
			top: null,
			left: null,
			center: !1,
			noOut: !1,
			constrain: !1,
			ajax: !1,
			automaximize: !1,
			contextmenuOnBody: !1,
			resizable: !0,
			minimizable: !0,
			maximizable: !0,
			closable: !0,
			draggable: !0,
			dockable: !0,
			activable: !0,
			headerBtn: [],
			onopen: $noop,
			onready: $noop,
			onclose: $noop,
			onok: $noop,
			oncancel: $noop,
			onminimize: $noop,
			ondrag: $noop,
			ondragstop: $noop,
			onresize: $noop,
			onactive: $noop,
			ondestroy: $noop,
			animationIn: "",
			animationOut: "",
			baseClass: "",
			bodyClass: "",
			style: "",
			dest: document.body,
			dock: null
		},
		oe = 0,
		ae = [],
		le = document.createElement("div"),
		de = document.createElement("header"),
		se = document.createElement("header"),
		ce = document.createElement("section"),
		re = document.createElement("footer"),
		ue = document.createElement("iframe"),
		me = document.createElement("img"),
		fe = document.createElement("span"),
		he = document.createElement("button"),
		pe = document.createElement("button"),
		_e = document.createElement("button");

	function we(e) {
		"string" == typeof e && (e = {
			title: e,
			url: e,
			ajax: !1,
			width: 400,
			height: 300
		});
		var n, t, i, o, a, l, d, s = $extend({}, ne, e),
			c = le.cloneNode(!1),
			r = de.cloneNode(!1),
			u = se.cloneNode(!1),
			m = ce.cloneNode(!1),
			f = re.cloneNode(!1),
			h = oe++,
			p = s.dest.offsetWidth,
			_ = s.dest.offsetHeight;
		if(s.caller = $io.isWindow(this) ? null : this, s.caller && s.caller.that && s.caller.that.window && $extend(s, s.caller.that.window), e.contextmenu && (s.contextmenu = $extend({}, ne.contextmenu, s.contextmenu)), c.id = "ui_window_" + h, c.setAttribute("data-window-id", h), s.style)
			for(var w in s.style) s.style.hasOwnProperty(w) && (c.style[w] = s.style[w]);
		if(s.baseClass) {
			var b = s.baseClass.split(" ");
			$io.arr.all(b, function(e) {
				c.classList.add(e)
			})
		}

		function v(t) {
			var e = t.init.call(s);
			e && (t.el = document.createElement("button"), t.el.className = (t.className || "ui_window__head__" + t.name) + ("string" == typeof e ? " " + e : ""), t.title && (t.el.title = t.title), t.el.onclick = function(e) {
				t.action.call(n, e)
			}, r.appendChild(t.el))
		}

		function y(e) {
			e.preventDefault(), U.show(n, {
				at: "left+10 bottom+10",
				of: e,
				within: s.dest
			})
		}

		function g(e) {
			e.preventDefault(), U.show(n, {
				of: this,
				within: s.dest
			})
		}
		if(s.contextmenuOnBody && m.addEventListener("contextmenu", y, !1), s.header) {
			if(s.icon) {
				var x = me.cloneNode(!1);
				x.src = s.icon, x.addEventListener("click", g, !1), x.addEventListener("dblclick", V, !1), x.addEventListener("contextmenu", g, !1), r.appendChild(x)
			}
			var L = fe.cloneNode(!1);
			if(L.textContent = s.title || "", c.setAttribute("aria-labelledby", "ui_window__title_" + h), L.id = "ui_window__title_" + h, r.appendChild(L), r.addEventListener("contextmenu", y, !1), s.headerBtn)
				for(var z = s.headerBtn.length - 1; 0 <= z; z--) v(s.headerBtn[z]);
			if(s.minimizable && s.dock && s.dockable) {
				var k = he.cloneNode(!1);
				k.onclick = te, r.appendChild(k)
			}
			if(s.maximizable) {
				var C = pe.cloneNode(!1);
				C.onclick = X, r.appendChild(C)
			}
			if(s.closable) {
				var E = _e.cloneNode(!1);
				E.onclick = V, r.appendChild(E)
			}
			c.appendChild(r)
		}
		if((s.menu || s.beforeMenu || s.afterMenu) && c.appendChild(u), s.beforeMenu && ("string" == typeof s.beforeMenu ? (t = document.createElement("div")).innerHTML = s.beforeMenu : t = s.beforeMenu, u.appendChild(t)), s.menu) {
			var $ = document.createElement("div");
			u.appendChild($), i = $menu($, s.menu, {
				keyTarget: m,
				thisArg: s.menuThisArg || m,
				mode: "bar",
				position: {
					within: s.dest
				}
			})
		}(s.afterMenu && ("string" == typeof s.afterMenu ? (o = document.createElement("div")).innerHTML = s.afterMenu : o = s.afterMenu, u.appendChild(o)), c.appendChild(m), s.footer) && ("string" == typeof s.footer ? (a = document.createElement("div")).innerHTML = s.footer : a = s.footer, f.appendChild(a));

		function N() {
			var e = s.baseWidth ? s.baseWidth : c.offsetWidth,
				t = s.baseHeight ? s.baseHeight : c.offsetHeight,
				i = !1,
				n = !1;
			if(p < e && (e = p, i = !0), _ < t && (t = _, n = !0), c.style.height = t + "px", c.style.width = e + "px", m.classList.add("ui_window__body--flex"), m.removeAttribute("style"), !0 === s.minHeight ? c.style.minHeight = c.style.height : s.minHeight && (c.style.minHeight = "auto" == s.minHeight ? "auto" : s.minHeight + "px"), !0 === s.minWidth ? c.style.minWidth = c.style.width : s.minWidth && (c.style.minWidth = "auto" == s.minWidth ? "auto" : s.minWidth + "px"), s.center) s.top = ~~((_ - t) / 2) + "px", s.left = ~~((p - e) / 2) + "px";
			else {
				if(s.top) s.noOut && s.top > _ - t && (s.maxTop = !0, s.top = _ - t + "px", c.style.top = s.top);
				else {
					var o = ~~(Math.random() * (_ - t));
					s.top = o + "px"
				}
				if(s.left) s.noOut && s.left > p - e && (s.maxLeft = !0, s.left = p - e + "px", c.style.left = s.left);
				else {
					var a = ~~(Math.random() * (p - e));
					s.left = a + "px"
				}
			}
			"-4000px" === c.style.top && (c.style.top = n ? 0 : s.top), "-4000px" === c.style.left && (c.style.left = i ? 0 : s.left)
		}
		if((s.footer || s.btnOk || s.btnCancel) && c.appendChild(f), c.style.top = (s.top || -4e3) + "px", c.style.left = (s.left || -4e3) + "px", m.style.width = "auto" == s.width ? "auto" : 1 * s.width + s.borderTopWidth + s.borderBottomWidth + "px", m.style.height = "auto" == s.height ? "auto" : 1 * s.height + s.borderLeftWidth + s.borderRightWidth + "px", s.dest.appendChild(c), s.automaximize && c.classList.add("ui_window--maximized"), s.draggable) {
			(L || c).classList.add("ui_window--draggable");
			var T = $drag(c, {
				constrain: s.constrain,
				handle: L || c,
				onstart: function() {
					we.active(h), be(this)
				},
				ondrag: function(e, t, i) {
					s.ondrag.call(n, e, t, i)
				},
				onstop: function() {
					ve(this), s.ondragstop.call(n, c, m)
				}
			})
		}
		if(s.resizable) var M = $resize(c, {
			handles: "all",
			start: function(e) {
				we.active(h), be(e)
			},
			stop: function(e) {
				ve(e), s.onresize.call(n, c, m)
			}
		});
		if(s.bodyClass) {
			var H = s.bodyClass.split(" ");
			$io.arr.all(H, function(e) {
				m.classList.add(e)
			})
		}
		if("random" == s.animationIn && (s.animationIn = $io.arr.random($animate.i)), "random" == s.animationOut && (s.animationOut = $io.arr.random($animate.o)), s.animationIn && (c.classList.add("animated"), $animate(c, s.animationIn, function(e) {
				c.classList.remove("animated")
			})), s.btnCancel || s.btnOk) {
			var W = document.createElement("div");
			W.className = "ui_window__buttons", f.appendChild(W)
		}

		function O(e) {
			this.classList.contains("ui_window_docked--minimized") ? (ie(), c.classList.contains("ui_window--active") || we.active(h)) : c.classList.contains("ui_window--active") ? (s.minimizable && te(), c.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 10) : we.active(h)
		}

		function A(e) {
			e.preventDefault(), U.show(n, {
				at: "left+10 bottom+10",
				of: e,
				within: s.dest
			})
		}
		if(s.btnCancel && ((l = document.createElement("button")).innerHTML = s.btnCancel, l.className = "ui_window__cancel", W.appendChild(l)), s.btnOk && ((d = document.createElement("button")).innerHTML = s.btnOk, d.setAttribute("autofocus", "autofocus"), d.className = "ui_window__ok", W.appendChild(d)), s.dock && s.dockable) {
			var B = document.createElement("button"),
				I = document.createElement("img"),
				j = document.createElement("span");
			B.className = "ui_window_docked", B.id = "ui_window_docked_" + h, I.className = "ui_window_docked__icon", j.className = "ui_window_docked__text ui_elipsis", s.icon && (I.src = s.icon, B.appendChild(I)), s.title && (j.textContent = s.title, B.title = s.title, B.appendChild(j)), s.dock.appendChild(B), B.addEventListener("click", O, !1), B.addEventListener("contextmenu", A, !1)
		}
		var P, R, S = !1;

		function Z(e) {
			!(S = !0) !== s.onok.call(n, S) && V(e)
		}

		function q() {
			we.active(h)
		}

		function D() {
			B && (B.removeEventListener("click", O, !1), B.removeEventListener("contextmenu", A, !1), B && B.parentNode && B.parentNode.removeChild(B)), x && (x.removeEventListener("click", g, !1), x.removeEventListener("dblclick", V, !1), x.removeEventListener("contextmenu", g, !1)), s.contextmenuOnBody && m.removeEventListener("contextmenu", y, !1), s.header && r.removeEventListener("contextmenu", y, !1), s.btnCancel && l.removeEventListener("click", V, !1), s.btnOk && d.removeEventListener("click", Z, !1), ee && ee.parentNode && ee.parentNode.removeChild(ee), ee = null, s.resizable && L && $el(L).off("dblclick doubletap", X), s.maximizable && !L && $el(m).off("dblclick doubletap", X), s.draggable && T.destroy(), s.resizable && M.destroy(), i && i.destroy(), U && U.destroy(), c.removeEventListener("click", q, !1), c && c.parentNode && c.parentNode.removeChild(c);
			var e = $maxZ(".ui_window").el;
			e && we.active(1 * e.getAttribute("data-window-id")), s.ondestroy.call(n, e), ae[h] = null
		}

		function F() {
			if(s.animationOut) {
				for(var e = !1, t = 0, i = c.classList.length; t < i; t++) c.classList[t] && 0 === c.classList[t].indexOf("fx_") && (e = !0);
				e ? D() : (c.classList.add("animated"), $animate(c, s.animationOut, function(e) {
					c.classList.remove("animated"), D()
				}))
			}
			else D()
		}

		function G() {
			S && s.onsubmit && !1 === s.onsubmit.call(n, S, $form.data(P), P) ? S = !1 : s.onbeforeclose ? s.onbeforeclose.call(n, function() {
				F(), s.onclose && s.onclose.call(n, S, $form.data(P), P)
			}) : (F(), s.onclose && s.onclose.call(n, S, $form.data(P), P))
		}

		function J(e) {
			!0 === e && (S = !0), P ? G() : s.onbeforeclose ? s.onbeforeclose.call(n, function() {
				F(), s.onclose && s.onclose.call(n, S)
			}) : (F(), s.onclose && s.onclose.call(n, S))
		}

		function K() {
			N(), setTimeout(function() {
				if(N(), P = c.getElementsByTagName("form")[0]) {
					var e = P.querySelector("[autofocus]");
					e && e.focus(), P.onsubmit = function() {
						return S = !0, G(), !1
					}, n.el.form = P
				}
				else R ? R.focus() : m.focus();
				s.onready.call(n, c, m)
			}, 1)
		}
		s.btnCancel && l.addEventListener("click", function(e) {
			!1 !== s.oncancel.call(n, S) && V(e)
		}, !1), s.btnOk && d.addEventListener("click", Z, !1), s.activable && c.addEventListener("click", q, !1), s.resizable && L && $el(L).on("dblclick doubletap", X), s.maximizable && !L && $el(m).on("dblclick doubletap", X), s.url && !s.ajax ? ((R = ue.cloneNode(!1)).onload = K, R.onerror = K, R.onabort = K, R.src = 0 == s.url.indexOf("www") ? "http://" + s.url : s.url, m.appendChild(R), m.classList.add("ui_window__body--with_iframe"), s.title || (s.title = s.url)) : s.url && s.ajax ? $ajax.get(s.url).done(function(e) {
			var t = document.createElement("div");
			t.innerHTML = e, m.appendChild(t), K()
		}).fail(function() {
			$alert.error("ajax error")
		}) : (s.ajax || ("string" == typeof s.html ? m.innerHTML = s.html : 1 !== s.html.nodeType && 11 !== s.html.nodeType || m.appendChild(s.html)), K()), n = we.current = ae[h] = {
			id: h,
			cfg: s,
			el: {
				base: c,
				body: m,
				header: r,
				title: L,
				footer: f,
				iframe: R,
				form: P,
				btnCancel: l,
				btnOk: d,
				menu: u,
				menubar: $,
				beforeMenu: t,
				afterMenu: o
			},
			close: J,
			destroy: D,
			maximize: X,
			minimize: te,
			restore: ie,
			menu: i,
			changeSize: function(e, t) {
				e && (e.height || e.width) && (c.style.height = "auto", c.style.width = "auto", m.classList.remove("ui_window__body--flex"), e.height && (m.style.height = e.height + "px"), e.width && (m.style.width = e.width + "px"), N(), t && t())
			},
			active: function() {
				we.active(this.id)
			},
			changeTitle: function(e) {
				"string" == typeof e && (L && (L.innerHTML = e), j && (j.innerHTML = e, j.title = e))
			},
			changeIcon: function(e) {
				"string" == typeof e && (x && (x.src = e), I && (I.src = e))
			},
			changeFooter: function(e) {
				f.firstChild && (f.firstChild.innerHTML = e)
			}
		}, i && i.refresh($extend(s.menuThisArg || {}, {
			window: n
		})), s.onopen.call(n, c, m), s.activable && we.active(h);
		var Q, U = $menu(m, $menu.extend([{
			name: "Maximize",
			disabled: !s.maximizable,
			action: function() {
				n.maximize()
			}
		}, {
			name: "Minimize",
			disabled: !s.minimizable,
			action: function() {
				n.minimize()
			}
		}, {
			name: "Move to center",
			disabled: !s.draggable,
			action: function() {
				p = s.dest.offsetWidth, _ = s.dest.offsetHeight, c.style.top = ~~((_ - c.offsetHeight) / 2) + "px", c.style.left = ~~((p - c.offsetWidth) / 2) + "px"
			}
		}, {
			name: "Refresh",
			disabled: !((!s.url || s.ajax) && "function" == typeof s.reload),
			action: function() {
				"function" == typeof this.cfg.reload ? this.cfg.reload() : this.el.iframe && (this.el.iframe.src = "", this.el.iframe.src = this.cfg.url)
			}
		}, {
			name: "---"
		}, {
			name: "Close",
			disabled: !s.closable,
			action: function() {
				n.close()
			}
		}], s.contextmenu), {
			trigger: !1,
			thisArg: n
		});

		function V(e) {
			e.stopPropagation(), e.stopImmediatePropagation(), J()
		}

		function X(e) {
			e && (e.stopPropagation(), e.stopImmediatePropagation()), c.classList.contains("ui_window--maximized") ? (c.classList.remove("ui_window--maximized"), C && (C.classList.remove("ui_window__head__maximized"), C.classList.add("ui_window__head__maximize")), c.classList.add("untransition"), c.removeAttribute("style"), c.setAttribute("style", Q), setTimeout(function() {
				c.classList.remove("untransition"), s.onresize(!1)
			}, 500)) : (Q = c.getAttribute("style"), c.classList.add("ui_window--maximized"), C && (C.classList.add("ui_window__head__maximized"), C.classList.remove("ui_window__head__maximize")), setTimeout(function() {
				s.onresize(!0)
			}, 500))
		}
		var Y, ee = document.createElement("div");

		function te() {
			if(s.dockable) {
				var e = c.getBoundingClientRect();
				Y = {
					t: e.top + "px",
					l: e.left + "px",
					h: c.offsetHeight + "px",
					w: c.offsetWidth + "px"
				}, ee.style.display = "block", ee.style.top = Y.t, ee.style.left = Y.l, ee.style.height = Y.h, ee.style.width = Y.w, ee.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 1, c.classList.add("ui_window--minimized");
				var t = B.getBoundingClientRect();
				ee.style.top = t.top + "px", ee.style.left = t.left + "px", ee.style.height = B.offsetHeight + "px", ee.style.width = B.offsetWidth + "px", setTimeout(function() {
					ee.style.display = "none", B.classList.add("ui_window_docked--minimized")
				}, 300)
			}
		}

		function ie() {
			ee.classList.remove("ui_window_transfer"), ee.style.display = "block", ee.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 1, ee.classList.add("ui_window_retransfer"), setTimeout(function() {
				ee.style.top = Y.t, ee.style.left = Y.l, ee.style.height = Y.h, ee.style.width = Y.w
			}, 50), setTimeout(function() {
				ee.style.display = "none", c.classList.remove("ui_window--minimized"), B.classList.remove("ui_window_docked--minimized")
			}, 300)
		}
		return ee.className = "ui_window_transfer", document.body.appendChild(ee), n
	}
	le.setAttribute("role", "dialog"), le.className = "ui_window ui_window--active", de.className = "ui_window__head", me.className = "ui_window__head__icon", fe.className = "ui_window__head__title ui_elipsis", he.className = "ui_window__head__minimize", pe.className = "ui_window__head__maximize", _e.className = "ui_window__head__close", se.className = "ui_window__menu", ce.className = "ui_window__body", re.className = "ui_window__foot", ue.className = "ui_window__iframe", ue.setAttribute("allowfullscreen", "true");
	var t = document.createElement("div");

	function be(e) {
		e.getElementsByTagName("iframe").length && e.getElementsByTagName("section")[0].appendChild(t.cloneNode(!1))
	}

	function ve(e) {
		var t = e.querySelector(".js-mask");
		t && t.parentNode && t.parentNode.removeChild(t)
	}

	function i(e, t) {
		var i = t && 1 == t.nodeType ? t.getAttribute("data-window-id") : t,
			n = ae[1 * i];
		n && n[e]()
	}
	t.className = "js-mask", t.setAttribute("style", "background-image:url(/c/sys/img/spacer.gif); position: absolute; z-index: 2; left: 0; top: 0; right: 0; bottom: 0;"), we.config = function(e) {
		$extend(ne, e)
	}, we.instances = ae, we.active = function(e) {
		var t = document.getElementById("ui_window_" + e);
		t.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon:not(.ui_is_dragging),.ui_window,.ui_z_indexed").num + 1, $io.arr.all(document.querySelectorAll(".ui_window--active"), function(e) {
			e.classList.remove("ui_window--active"), be(e)
		}), $io.arr.all(document.querySelectorAll(".ui_window_docked.pressed"), function(e) {
			e.classList.remove("pressed")
		}), t.classList.add("ui_window--active"), ve(t);
		var i = document.getElementById("ui_window_docked_" + e);
		i && i.classList.add("pressed"), we.current = ae[e], setTimeout(function() {
			ae[e] && "function" == typeof ae[e].cfg.onactive && ae[e].cfg.onactive.call(ae[e], ae[e].el.base, ae[e].el.body)
		}, 1)
	}, we.close = function(e) {
		i("close", e)
	}, we.destroy = function(e) {
		i("destroy", e)
	}, we.maximize = function(e) {
		i("maximize", e)
	}, we.restore = function(e) {
		i("restore", e)
	}, e.$window = we
}(this);
///home/zo/__/www/win3/public/42/js/ui/window.plugins.js
! function(e) {
	"use strict";
	var d = {
			baseClass: "ui_alert",
			height: "auto",
			minHeight: "auto",
			footer: "",
			minimizable: !1,
			maximizable: !1,
			resizable: !1,
			center: !0,
			pinnable: !1,
			btnOk: "OK",
			animationIn: "none",
			animationOut: "random",
			width: 330
		},
		u = {
			sound: $noop
		};

	function r(n, t) {
		var o = $extend({
				title: "Alert",
				baseClass: "ui_alert",
				msg: n,
				img: "/c/sys/skins/w93/alert.png",
				cb: t,
				sound: "alert",
				onopen: function() {
					this.cfg.sound && u.sound(this.cfg.sound);
					var e = a || this.el.btnOk;
					e && setTimeout(function() {
						e.focus()
					}, 100)
				},
				onactive: function() {
					var e = a || this.el.btnOk;
					e && setTimeout(function() {
						e.focus()
					}, 100)
				},
				onclose: function(e) {
					(t || n.cb || $noop)(e)
				}
			}, n),
			i = o.baseClass.split(" ")[0];
		if("string" != typeof o.msg) try {
			o.msg = JSON.stringify(o.msg, null, 2), o.bodyClass = d.bodyClass + " " + i + "--code"
		}
		catch (e) {
			o.msg = o.msg + "", o.bodyClass = d.bodyClass + " " + i + "--code " + i + "--center"
		}
		var e = document.createElement("div"),
			r = document.createElement("div");
		document.createDocumentFragment();
		if(e.className = "clearfix", o.img) {
			var s = new Image;
			s.className = i + "__img", s.width = 32, s.height = 32, e.appendChild(s)
		}
		if(r.innerHTML = o.msg, r.className = i + "__text", e.appendChild(r), "string" == typeof o.prompt) {
			var l = document.createElement("form"),
				a = document.createElement("textarea");
			a.style.width = "100%", a.value = o.prompt, a.name = "prompt", a.onkeydown = function(e) {
				if("number" != typeof(e = e || window.event).which && (e.which = e.keyCode), 13 === e.which && !e.shiftKey) return $el(l).trigger("submit"), e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, e.stopImmediatePropagation(), !1
			}, l.appendChild(a), r.appendChild(l), r.style.textAlign = "left"
		}
		o.html = e;
		var c = null;
		if(!o.img) return $window($extend({}, d, o));
		var m = !1;
		c = function() {
			m || $window($extend({}, d, o)), m = !0
		}, s.onload = c, s.onerror = c, s.onabort = c, s.src = o.img
	}
	r.error = $io.fn.leading(function(e, n) {
		console.error(e);
		var t = $error(e),
			o = {
				bodyClass: "js_error",
				title: t.name || "Error",
				msg: t.html
			};
		r($extend({
			title: "Error",
			msg: o,
			img: "/c/sys/skins/w93/error.png",
			cb: n,
			sound: "error"
		}, o))
	}, 1e3), r.info = function(e, n) {
		r($extend({
			title: "Info",
			msg: e,
			img: n || "/c/sys/skins/w93/info.png",
			onopen: $noop,
			sound: null
		}, e))
	}, r.progress = function(e, n) {
		var t = document.createElement("div"),
			o = document.createElement("div");
		o.className = "ui_progress__bar", t.className = "skin_inset_deep h20p mt5 relative ui_progress";
		var i = document.createElement("div"),
			r = document.createElement("div");
		i.textContent = e, t.appendChild(o), r.appendChild(i), r.appendChild(t), n = n || "Progress";
		var s = $window($extend({}, d, {
			title: n,
			html: r,
			btnOk: null
		}, e));
		return {
			update: function(e) {
				e = ~~e, s.changeTitle(e + "% - " + n), o.style.width = e + "%", 100 <= e && s.close()
			}
		}
	}, r.help = function(e, n) {
		$window($extend({}, d, {
			title: "Help",
			html: e,
			bodyClass: "ui_alert--help skin_inset_deep skin_light pa10",
			sound: null
		}, e))
	}, $window.form = function(e, n, i) {
		"string" != typeof e && (i = n, n = e, e = "Form");
		var t = $form.build(n);
		$window.call(this, $extend({}, d, {
			resizable: !0,
			title: e,
			html: t.el,
			btnOk: "OK",
			btnCancel: "Cancel",
			onsubmit: function(e, n, t) {
				var o = $form.validate(t);
				if(!o) return console.log(o), !1;
				(i || $noop)(e, n)
			}
		}))
	};
	r.config = function(e) {
		$extend(u, e)
	}, e.$alert = r, e.$confirm = function(e, n) {
		r($extend({
			title: "Confirm",
			msg: e,
			img: "/c/sys/skins/w93/question.png",
			onopen: $noop,
			sound: null,
			cb: n,
			btnCancel: "Cancel"
		}, e))
	}, e.$prompt = function(o, e, i) {
		"function" == typeof e && (i = e, e = ""), r($extend({
			title: "Prompt",
			msg: o,
			img: null,
			sound: null,
			cb: i,
			prompt: e,
			onclose: function(e, n) {
				var t = n.prompt;
				(i || o.cb || $noop)(e, t)
			},
			btnCancel: "Cancel"
		}, o))
	}
}(this);
///home/zo/__/www/win3/public/42/os/boot/system42.js
var system42 = $kernel;
///home/zo/__/www/win3/public/42/os/boot/boot.js
system42("boot", function(o, s) {
	"use strict";
	Promise.all([$loader([o._temp.files, o._temp.mimetypes]), $loader.audio(o._settings.sounds.boot), $loader.audio(o._settings.sounds.alert), $loader.audio(o._settings.sounds.error)]).then(function(e) {
		o._files = e[0][0], o._get.mime.ext = e[0][1], o._sound.boot = e[1], o._sound.alert = e[2], o._sound.error = e[3], s()
	})
});
///home/zo/__/www/win3/public/42/os/boot/bios.js
system42("bios", function(o) {
	"use strict";
	$boot.BOOTLOG.innerHTML += "\nWindows93 v" + $boot.VERSION + " booting on...", $boot.BOOTLOG.innerHTML += "\n" + platform.description, $boot.BOOTLOG.innerHTML += "\n"
});
///home/zo/__/www/win3/public/42/os/boot/settings.js
system42("settings", function(s) {
	"use strict";
	var t = Object.assign({}, s._settings);
	s._settings = $store("settings.json", s._settings, function(t) {
		s._settings = t
	}, function() {
		return s._settings //home function
	}), "string" == typeof s._settings ? s._settings = t : s._settings = Object.assign(t, s._settings), s._settings.skin = "w93", s._init.home = function() {
		s._path.home = "/a/", s._path.key.home = "", s._path.desktop = "/a/desktop/", s._path.key.desktop = "desktop/", s._path.skin = "/c/sys/skins/" + s._settings.skin + "/"
	}, s._init.home()
});
///home/zo/__/www/win3/public/42/os/boot/storage.js
system42("storage", function(n, o) {
	"use strict";
	var s = {},
		i = Date.now();

	function e(e, t) {
		s[e.name] = {};
		var o = $extend({}, e); - 1 < o.col && (s[e.name].x = o.col * n._icons.w, delete o.col), -1 < o.row && (s[e.name].y = o.row * n._icons.h, delete o.row), s[e.name].time = i + t, delete o.name, $store.set(n._path.key.desktop + e.name, o)
	}
	n._init.desktop = function() {
		$io.arr.each(n._temp.defaultDesk, e)
	}, $store.set("system32.dll", "796f 2c20 706c 6561 7365 2064\n6f6e 2774 2064 656c 6574 6520\n6d65"), $store.set("boot/README.txt", "README\n======\n\nAny javascript or css file in this folder will be loaded at boot.\n\nUse with care and have fun...\n\nwindows93.net's staff"), n._init.desktop(), n._desktop = $store(n._path.key.home + ".config/desktop.json", s, function(e) {
		n._desktop = e
	}, function() {
		return n._desktop
	}), $io.enum([$io.obj.flatten(n._files.a, "/")], function(e, t, o) {
		if("number" == typeof e) {
			var n = $fs.utils.isShortcut(t);
			$ajax.get("a_/" + t, {
				arraybuffer: !n
			}).done(function(e) {
				n ? ($store.set(t, e), o()) : $io.ArrayBuffer.Blob(e, function(e) {
					$db.set(t, e, o)
				}, $fs.utils.getMime(t))
			}).fail(function(e) {
				$boot.onerror(e), o()
			})
		}
		else $db.set(t + "/", null, o)
	}, function() {
		$file.scan("/a/", function() {
			if("#safe" !== window.location.hash && n && n._files && n._files.a && n._files.a.boot) {
				var t = Object.keys(n._files.a.boot);
				if(t.length) return void setTimeout(function() {
					if(window.system42) {
						if(window.system42.paused) return o();
						var e = [];
						t.forEach(function(s) {
							!1 !== $fs.utils.exist("/a/boot/" + s) && e.push(new Promise(function(n) {
								$file.open("/a/boot/" + s, "URL", function(e, t) {
									var o = $url.getExtention(s);
									"js" === o ? $loader.script(e).then(n) : "css" === o ? $loader.css(e).then(n) : n()
								})
							}))
						}), Promise.all(e).then(function(e) {
							!0 !== $boot.hasError && o()
						})
					}
				}, 500)
			}
			o()
		})
	})
});
///home/zo/__/www/win3/public/42/os/boot/reset.js
system42("reset", function(e, t) {
	"use strict";
	$store.clear(), $db.clear(function() {
		t()
	})
});
///home/zo/__/www/win3/public/42/os/boot/audio.js
system42("audio", function(s) {
	"use strict";
	window.Howl = window.Howl || function() {
		this.play = $noop, this.pause = $noop
	};
	var i = {};

	function o(n, o) {
		var t;
		return "string" != typeof n ? new Howl(n) : (s._settings.sounds[n] && (n = s._settings.sounds[n]), i[n] ? t = i[n] : (t = new Howl({
			buffer: !!o,
			urls: [n]
		}), i[n] = t), t)
	}
	o.config = function(n) {
		return new Howl(n)
	}, o.stream = function(n) {
		return o(n, !0)
	}, window.$audio = o
});
///home/zo/__/www/win3/public/42/os/boot/splash.js
system42("splash", function(e, s) {
	"use strict";
	var i;
	$explorer(e._path.desktop, e._dom.desktop, {
		silent: !0,
		backgroundClass: "",
		viewType: "workspace"
	});
	e.devmode || $el.each(".ui_icon", function(e) {
		e.classList.add("hide")
	}), e.started || !0 === e._settings.noSplash ? s() : (i = document.createElement("iframe"), e._dom.splash.appendChild(i), i.className = "fillspace", i.style.position = "fixed", i.style.visibility = "hidden", i.onload = function() {
		i.style.visibility = "visible", setTimeout(function() {
			s()
		}, 2500)
	}, i.src = e._temp.splash)
});
///home/zo/__/www/win3/public/42/os/boot/utils.js
system42("utils", function(e) {
	"use strict";
	var n = {};
	$io.obj.each(e._get.mime.ext, function(t, e) {
		$io.obj.each(t, function(t, i) {
			$io.arr.all(t[0].split(","), function(t) {
				n[t] = e + "/" + i
			})
		})
	}), e._get.ext.mime = n, $io.obj.each(e._apps, function(n, i) {
		if("string" != typeof n) {
			if(n.accept && $extend(n, $fs.utils.parseAccept(n.accept)), n.ext && $io.arr.all(n.ext, function(t) {
					e._get.ext.apps[t] ? e._get.ext.apps[t].push(i) : e._get.ext.apps[t] = [i]
				}), n.mimetype && e._get.mime.apps.push([n.mimetype, i]), n.icon && (n.icon = $fs.utils.normalizeIcon(n.icon)), n.install && system42.on("storage:ready", function(t) {
					n.install = n.install.replace(/^~\//, "/a/" + t._path.key.home), $io.obj.path.call("/", t._files, n.install, {
						exe: i,
						icon: n.icon
					})
				}), n.init && system42.on("config:ready", function(t) {
					n.init.call({
						le: t,
						app: n
					})
				}), n.exec) {
				var o = n.exec,
					a = $io.fn.arg(o);
				n.exec = function() {
					var t = n.icon;
					this.arg.options && this.arg.options.icon && (t = this.arg.options.icon = $fs.utils.normalizeIcon(this.arg.options.icon || this.arg.launcher.icon)), this.app = n, this.that.window || (this.that.window = {}), this.that.window.icon || (this.that.window.icon = t), this.that.window.title || (this.that.window.title = this.arg.launcher ? this.arg.launcher.title : n.name), this.that.window.title || delete this.that.window.title;
					var i, e = this.arg.arguments.concat([this.arg.options]);
					"arguments" === n.inject ? e = this.arg.arguments : $io.arr.each(a, function(t, i) {
						"url" === t && "string" != typeof e[i] && (e[i] = ""), "opt" === t && "object" != typeof e[i] && (e[i] = {})
					});
					try {
						i = void 0 === (i = o.apply(this, e)) ? 1 : i
					}
					catch (t) {
						$alert.error(t), i = 0
					}
					return i
				}
			}
		}
		else e._apps[i] = {
			alias: n,
			exec: function() {
				for(var t = [], i = 0, e = arguments.length; i < e; i++) "string" == typeof arguments[i] && t.push(arguments[i]);
				$exe.silent(n + " " + t.join(" "))
			}
		}
	})
});
///home/zo/__/www/win3/public/42/os/boot/config.js
system42("config", function(l) {
	"use strict";
	var t, e = document.createElement("style");
	document.head.appendChild(e), t = e.sheet;
	var n = [];
	$io.arr.all(document.styleSheets, function(e) {
		/sys42/.test(e.href) && $io.arr.all(e.rules || e.cssRules, function(e) {
			e.selectorText && /^\.fx_\w+/.test(e.selectorText) && n.push(e.selectorText.replace(".fx_", ""))
		})
	}), $el.each("filter", function(e) {
		n.push(e.id.replace("fx_", "")), t.insertRule("." + e.id + ' {-webkit-filter: url("#' + e.id + '");}', 0), t.insertRule("." + e.id + ' {filter: url("#' + e.id + '");}', 0)
	}), l._fx = n.sort(), $window.config({
		dest: l._dom.desktop,
		dock: document.getElementById("s42_dock"),
		ondestroy: function(e) {
			!e && l._selected.length && l._selected[0].focus()
		},
		animationIn: l.devmode ? "" : "random",
		animationOut: l.devmode ? "" : "random",
		contextmenu: {
			"before:Close": [{
				name: "Glitch",
				action: function() {
					$exe.call({
						silent: !0
					}, "glitch", this.el.base)
				}
			}, {
				name: "IE6",
				action: function() {
					$exe.call({
						silent: !0
					}, "ie6", this.el.base)
				}
			}, {
				name: "---"
			}, {
				name: "FX",
				items: function() {
					var n = this,
						e = [];
					return $io.arr.all(["none"].concat(l._apps.fx.effects), function(t) {
						n.fx || (n.fx = "none"), e.push({
							name: t,
							radio: "FX_list",
							selected: n.fx === t,
							action: function(e) {
								n.fx = t, n.el.base.className = n.el.base.className.replace(/fx_\w+/, ""), "none" !== t && $exe.call({
									silent: !0
								}, "fx", t, n.el.base)
							}
						})
					}), e
				}
			}, {
				name: "---"
			}]
		},
		headerBtn: [{
			name: "help",
			init: function() {
				return !!this.help
			},
			action: function() {
				$alert.info(this.cfg.help)
			}
		}, {
			name: "pin",
			title: "pin this window (it will reopen each time you boot windows93)",
			init: function() {},
			action: function(e) {
				var t = e.target;
				if(this.cfg.caller.that.pinned) delete l._pins[this.cfg.caller.that.pinned], this.cfg.caller.that.pinned = null, t.classList.remove("pressed");
				else {
					var n = this.el.body.offsetWidth,
						i = this.el.body.offsetHeight,
						s = this.el.base.offsetTop,
						o = this.el.base.offsetLeft;
					l._pins.push([this.cfg.caller.arg.command, {
						width: n,
						height: i,
						top: s,
						left: o
					}]), $route(""), t.classList.add("pressed")
				}
			}
		}]
	}), $screenshot.config({
		default: l._dom.screen
	}), $notif.config({
		default: l._dom.clock,
		dest: l._dom.desktop
	}), $alert.config({
		sound: function(e) {
			e && l._sound[e] && l._sound[e].play()
		}
	})
});
///home/zo/__/www/win3/public/42/os/boot/start.js
///home/zo/__/www/win3/public/42/os/boot/register.js
system42("register", function(n, e) {
	"use strict";

	function a() {
		n._dom.splash.classList.remove("hide"), n._init.home(), e()
	}
	if(!1 === n._settings.userData.localInit) {
		n._dom.splash.classList.add("hide");
		var t = function() {
			var e = document.getElementById("WELCOME"),
				t = document.getElementById("TERMS"),
				s = document.getElementById("PROMPT"),
				i = document.getElementById("USERNAME");
			document.getElementById("SERIAL");
			if(t.classList.contains("hide") && s.classList.contains("hide")) e.classList.add("hide"), t.classList.remove("hide"), this.el.btnOk.innerHTML = "Didn't Read Lol ^^";
			else {
				if(!s.classList.contains("hide")) return n._settings.userData.nick = i.value || "anonymous", n._settings.userData.localInit = !0, a(), !0;
				t.classList.add("hide"), s.classList.remove("hide"), this.el.btnOk.innerHTML = "Let's ROCK"
			}
			return !1
		};
		$window({
			url: "/wizard.php",
			ajax: !0,
			title: "Setup Wizard",
			btnCancel: "Nope",
			animationIn: "flip",
			animationOut: "",
			center: !0,
			height: 350,
			width: 510,
			btnOk: "Cool Story, Bro",
			onok: t,
			oncancel: t
		})
	}
	else a()
});
///home/zo/__/www/win3/public/42/os/boot/reveal.js
system42("reveal", function(e, o) {
	"use strict";
	e.devmode || e._sound.boot.play(), setTimeout(function() {
		e._dom.splash.parentNode.removeChild(e._dom.splash), e._dom.taskbar.classList.remove("hide"), e._dom.desktop.classList.remove("invisible"), e.devmode || setTimeout(function() {
			$el.each(".ui_icon", function(e) {
				setTimeout(function() {
					e.classList.remove("hide")
				}, Math.abs(1e3 * Math.random()) + 100)
			})
		}, 100), $el(e._dom.desktop).on("click", ".js_error a", function(e) {
			return e.target.href && $exe("code", e.target.href), !1
		}), $el(e._dom.screen).on("drag dragenter dragover dragleave drop", function(e) {
			e.preventDefault()
		}), $route.on("change", function(e) {
			$exe(e)
		}), $route.init(), document.documentElement.focus(), window.onerror = function() {
			$alert.error(arguments)
		}, o()
	}, e.devmode ? 0 : 600)
});
///home/zo/__/www/win3/public/42/os/sys/exe.js
system42("exe", function(n) {
	"use strict";
	var v = n._apps;

	function u(e, i) {
		var r = this || {},
			t = r && r.cli;
		return !0 !== e.terminal || t ? e.exec.apply({
			le: n,
			that: r,
			cli: t ? r : null,
			arg: i
		}) : c.call(this, "terminal", "", {
			onopen: function(t) {
				setTimeout(function() {
					e.exec.apply({
						le: n,
						that: r,
						cli: t,
						arg: i
					})
				}, 100)
			}
		}), !0
	}

	function c(t, e, i) {
		if(t && "string" == typeof t && -1 != t.indexOf(" | ")) {
			var r = this,
				o = t.split(" | ");
			return r.silent || ($route(t), r.slient = !0), $io.arr.each(o, function(t, e) {
				setTimeout(function() {
					c.call(r, t)
				}, 700 * e)
			}), !0
		}
		if(t)
			if(t.nodeType && 1 === t.nodeType) {
				var n = $extend({}, t.dataset);
				if(n.exe) return c(n.exe, e, n);
				if(n.alert) return $alert(n.alert), !0;
				if(n.error) return $alert.error(n.error), !0
			}
		else {
			if(v[t] && v[t].exec) {
				var a = u.call(this, v[t], {
					command: t,
					arguments: Array.prototype.slice.call(arguments, 1)
				});
				return !1 !== a && !0 !== v[t].silent && $route(t), a
			}
			if("string" == typeof t) {
				if(0 === t.indexOf("http")) return i && void 0 !== i.iframable ? f(t, i) : c.parseURL(t, function(t) {
					f(t.exe, t)
				}), !0;
				var s;
				try {
					s = p(t)
				}
				catch (t) {}
				if(s && s.program && v[s.program] && v[s.program].exec) return i && (s.launcher = i), u.call(this, v[s.program], s);
				try {
					0 !== t.indexOf("/") && this && this.cfg && this.cfg.cwd && (t = this.cfg.cwd + "/" + t);
					var l = $fs.utils.exist(t);
					if(!1 !== l) return "object" == typeof l.obj && "/" !== t.slice(-1) && (t += "/"),
						function(t) {
							var e = $url.getDomain(t.url);
							if(e && location.hostname != e) return $window(t), !0;
							if("/" === t.url.slice(-1)) return $explorer(t.url), !0;
							if(t.url) {
								var i;
								if(t.openers) i = v[t.openers.split(",")[0]];
								else {
									var r = $fs.utils.getOpeners(t.url);
									r[0] && (i = v[r[0]])
								}
								if(i && i.exec) return u.call(this, i, {
									command: t.url,
									arguments: [t.url],
									options: t
								}), !0
							}
							return !1
						}.call(this, {
							url: t
						})
				}
				catch (t) {}
			}
		}
		return !1
	}

	function p(t) {
		for(var e, i = [], r = [], o = {
				long: {},
				short: {}
			}, n = !1, a = !1, s = !1, l = 0, u = 0, c = 0, p = t.length; c <= p; c++)
			if(e = t.charAt(c), n || "-" !== e || !a && " " !== t.charAt(c - 1))
				if('"' !== e || "\\" === t.charAt(c - 1))
					if(!n && " " === e || c === p)
						if(a) {
							var f = r[l].split("="),
								d = f[0],
								h = f[1],
								m = 1 * h;
							if(h = m == h ? m : h, s) - 1 < d.indexOf(".") ? $io.obj.path(o.long, d, h || !0) : o.long[d] = h || !0;
							else
								for(var g = d.split(""), y = 0, w = g.length; y < w; y++) o.short[g[y]] = h || !0;
							l++, a = s = !1
						}
		else u++;
		else a ? r[l] = r[l] ? r[l] + e : e : i[u] = i[u] ? i[u] + e : e;
		else n = !n;
		else "-" === t.charAt(c + 1) && (s = !0), a = !0;
		var b = i.shift();
		return !(!v[b] || !v[b].exec) && ($io.obj.each(o.short, function(t, e) {
			v[b].options && v[b].options[e] ? o.long[v[b].options[e][0]] = t : o.long[e] = t
		}), {
			command: t,
			program: b,
			arguments: i,
			options: o.long
		})
	}
	c.parseURL = function(i, r, o) {
		var n = {
			title: i.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
			exe: i,
			icon: "shortcut.png"
		};
		return console.log(i, n), $url.checkFavicon(i, function(t, e) {
			t && (n.icon = e, (o || $noop)(n)), $ajax.post("/proxy.php", {
				url: i,
				favicon: !t
			}).done(function(e) {
				e.favicon ? $url.checkImage(e.favicon, function(t) {
					n.icon = e.favicon, n.iframable = e.iframable, r(n)
				}) : (n.iframable = e.iframable, r(n))
			})
		}), n
	}, c.silent = function() {
		return c.apply({
			silent: !0
		}, arguments)
	}, c.parseGeometry = function(t) {
		var s = {};
		return t.replace(/(?:(\d+|auto)x(\d+|auto))?(?:([+-])(\d+|auto)([+-])(\d+|auto))?/, function(t, e, i, r, o, n, a) {
			s.width = e || "auto", s.height = i || "auto", r ? (s.top = "+" === n ? a : "auto", s.bottom = "-" === n ? a : "auto", s.left = "+" === r ? o : "auto", s.right = "-" === r ? o : "auto") : (s.top = "auto", s.bottom = "auto", s.left = "auto", s.right = "auto")
		}), s
	};

	function f(o, t) {
		$io.obj.all(n._get.embed, function(r) {
			if(r.playerRegExp.test(o)) return t.iframable = !0, o.replace(r.playerRegExp, function(t, e, i) {
				o = r.buildSrcURL(e, i)
			}), console.log(o), !0
		}), "true" === t.iframable || !0 === t.iframable ? u.call(this, v.iframe, {
			command: o,
			program: "iframe",
			arguments: [o],
			launcher: t,
			options: t
		}) : $alert.info('<a target="_blank" href="' + o + '">' + o + "</a><br>don't allow iframe embeding...")
	}

	function r(i, t) {
		var r = [];
		return $io.obj.all(t, function(t, e) {
			-1 != i.indexOf(e) && r.push([e, t].join("="))
		}), 0 < r.length ? "?" + r.join("&") : ""
	}
	c.parse = p, c.stringify = function(t) {
		function i(t) {
			return -1 < (t + "").indexOf(" ") ? '"' + t + '"' : t
		}
		if("string" == typeof t) return " " + i(t);
		var r = "";
		return $io.obj.each(t, function(t, e) {
			"string" != typeof t && "number" != typeof t || (t = (t + "").replace(/\"/g, '\\"'), r += " --" + e + "=" + i(t))
		}), r
	}, window.$exe = c, n._get.embed = {
		youtube: {
			type: "youtube",
			settings: {
				autoplay: 0,
				controls: 1,
				loop: 0
			},
			whitelist: ["autohide", "cc_load_policy", "color", "disablekb", "enablejsapi", "autoplay", "controls", "loop", "playlist", "rel", "wmode", "start", "showinfo", "end", "fs", "hl", "iv_load_policy", "list", "listType", "modestbranding", "origin", "playerapiid", "playsinline", "theme"],
			transformAttrMap: {},
			processSettings: function(t, e) {
				return 1 == t.loop && null == t.playlist && (t.playlist = e), t
			},
			buildSrcURL: function(t, e) {
				return t + this.playerID + e + r(this.whitelist, this.processSettings(this.settings))
			},
			playerID: "www.youtube.com/embed/",
			playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
			timeRegExp: /t=(([0-9]+)h)?(([0-9]{1,2})m)?(([0-9]+)s?)?/,
			isAdditionaResRequired: function() {
				return !1
			},
			additionalRes: []
		},
		vimeo: {
			type: "vimeo",
			settings: {
				autoplay: 0,
				loop: 0,
				api: 0,
				player_id: ""
			},
			whitelist: ["autoplay", "autopause", "badge", "byline", "color", "portrait", "loop", "api", "playerId", "title"],
			transformAttrMap: {
				playerId: "player_id"
			},
			processSettings: function(t, e) {
				return t
			},
			buildSrcURL: function(t, e) {
				return t + this.playerID + e + r(this.whitelist, this.processSettings(this.settings))
			},
			playerID: "player.vimeo.com/video/",
			playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?vimeo\.com\/(?:channels\/[A-Za-z0-9]+\/)?([A-Za-z0-9]+)/,
			timeRegExp: "",
			isAdditionaResRequired: function() {
				return !1
			},
			additionalRes: []
		},
		dailymotion: {
			type: "dailymotion",
			settings: {
				autoPlay: 0,
				logo: 0
			},
			whitelist: ["api", "autoPlay", "background", "chromeless", "controls", "foreground", "highlight", "html", "id", "info", "logo", "network", "quality", "related", "startscreen", "webkit-playsinline", "syndication"],
			transformAttrMap: {},
			processSettings: function(t, e) {
				return t
			},
			buildSrcURL: function(t, e) {
				return t + this.playerID + e + r(this.whitelist, this.processSettings(this.settings))
			},
			playerID: "www.dailymotion.com/embed/video/",
			playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?www\.dailymotion\.com\/video\/([A-Za-z0-9]+)/,
			timeRegExp: /start=([0-9]+)/,
			isAdditionaResRequired: function() {
				return !1
			},
			additionalRes: []
		},
		youku: {
			type: "youku",
			settings: {},
			whitelist: [],
			transformAttrMap: {},
			processSettings: function(t, e) {
				return t
			},
			buildSrcURL: function(t, e) {
				return t + this.playerID + e + r(this.whitelist, this.processSettings(this.settings))
			},
			playerID: "player.youku.com/embed/",
			playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?youku\.com\/v_show\/id_([A-Za-z0-9]+).html/,
			timeRegExp: "",
			isAdditionaResRequired: function() {
				return !1
			},
			additionalRes: []
		},
		vine: {
			type: "youku",
			settings: {
				audio: 0,
				start: 0,
				type: "simple"
			},
			whitelist: ["audio", "start", "type"],
			transformAttrMap: {},
			processSettings: function(t, e) {
				return delete t.type, t
			},
			buildSrcURL: function(t, e) {
				var i = this.settings.type;
				return t + this.playerID + e + /embed/ + i + r(this.whitelist, this.processSettings(this.settings))
			},
			playerID: "vine.co/v/",
			playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?vine\.co\/v\/([A-Za-z0-9]+)/,
			timeRegExp: "",
			isAdditionaResRequired: function() {
				return !window.VINE_EMBEDS
			},
			additionalRes: [{
				element: '<script src="//platform.vine.co/static/scripts/embed.js"><\/script>'
			}]
		}
	}
});
///home/zo/__/www/win3/public/42/os/sys/fs.js
! function(e) {
	"use strict";
	var r = {};

	function s(e, t) {
		return le._get.ext.mime[t || e] || null
	}

	function l(e, t, i) {
		var l, n, r = le._files.c.sys.skins[le._settings.skin || "w93"];

		function s(n, s) {
			l || $io.obj.each(r[n], function(e, i) {
				i.replace(/(.+)\./, function(e, t) {
					$io.arr.all(t.split("_"), function(e) {
						s === e && (l = "/c/sys/skins/" + le._settings.skin + "/" + n + "/" + i)
					})
				})
			})
		}
		return r || (r = le._files.c.sys.skins.w93), n = (i || "").split("/"), s("ext", t), s("type", n[1]), s("mime", n[0]), l || (l = "/c/sys/skins/" + le._settings.skin + "/file.png"), l
	}

	function o(e) {
		return "/" === e ? "/c/sys/skins/" + le._settings.skin + "/devices/computer.png" : "/a/" === e ? "/c/sys/skins/" + le._settings.skin + "/devices/drive-storage.gif" : "/c/" === e ? "/c/sys/skins/" + le._settings.skin + "/devices/drive-harddisk.gif" : r.utils.resolvePath(e) === le._path.home ? "/c/sys/skins/" + le._settings.skin + "/places/user-home.png" : "/c/sys/skins/" + le._settings.skin + "/places/folder.png"
	}
	r.utils = {}, r.utils.find = function(e, t) {
		return $io.find(e, t, le._files, "/", [".", ".."])
	}, r.utils.resolvePath = function(e) {
		return e = (e = (e = (e = e.replace(/^~|\$HOME/g, le._path.home)).replace(/~|\$HOME/g, le._path.home.replace(/^\//, ""))).replace(/\$SKIN/g, le._path.skin)).replace(/\/\//g, "/")
	}, r.utils.getMenuOpenWith = function(i) {
		i || (i = []), "string" == typeof i && (i = [i]);
		var n = [],
			s = [];
		return $io.arr.all(i, function(e) {
			1 === e.nodeType && (e = e.getAttribute("data-path"));
			var t = r.utils.getOpeners(e);
			(t = t.concat("hexed", "code", "iframe")) && $io.arr.all(t, function(t) {
				if(-1 === s.indexOf(t)) {
					s.push(t);
					var e = le._apps[t].icon ? r.utils.normalizeIcon(le._apps[t].icon) : "/c/sys/skins/" + le._settings.skin + "/programs.png";
					n.push({
						name: le._apps[t].name || $io.str.capitalise(t),
						icon: e,
						action: function(e) {
							$io.arr.all(i, function(e) {
								1 === e.nodeType && (e = e.getAttribute("data-path")), setTimeout(function() {
									$exe(t + ' "' + e + '"')
								}, 0)
							})
						}
					})
				}
			})
		}), n.length ? n : [{
			name: "No programs found...",
			disabled: !0
		}]
	}, r.utils.getFileMenu = function(e, s, l) {
		"function" == typeof s && (l = s, s = !1);
		var t = $io.obj.getPath(le._files, e, "/"),
			r = [],
			o = {};
		return $io.obj.all(t, function(e, i) {
			if("." !== i && ".." !== i) {
				var n = [];
				o[i] = [], $io.obj.all(e, function(e, t) {
					"." !== t && ".." !== t && (o[i].push(t), n.push({
						name: t,
						radio: s,
						folder: i,
						action: l
					}))
				}), o[i] = o[i].sort(function(e, t) {
					return e.localeCompare(t)
				}), n = n.sort(function(e, t) {
					return e.name.localeCompare(t.name)
				}), r.push({
					name: i,
					items: n
				})
			}
		}), r = r.sort(function(e, t) {
			return e.name.localeCompare(t.name)
		}), {
			path: e,
			foldersList: Object.keys(o),
			folders: o,
			menu: r
		}
	}, r.utils.replaceExt = function(e, t) {
		return r.utils.getExt(e) ? e.replace(/\.[0-9a-z]+$/, t ? "." + t : "") : e + (t ? "." + t : "")
	}, r.utils.isFolder = function(e) {
		return "/" === e.slice(-1)
	}, r.utils.isFolderEmpty = function(e, t) {
		var i = !0;
		$file.iterateFolder(e, function(e) {
			r.utils.isFolder(e) || (i = !1)
		}).done(function() {
			t(i)
		})
	}, r.utils.isShortcut = function(e) {
		return /\.lnk42$/.test(e)
	}, r.utils.isDownloadable = function(e) {
		if(e) {
			var t = e.dataset.url || e.href;
			return !(t && "/" !== t.slice(-1))
		}
		var n = !1;
		return $file.eachSelection(function(e, t) {
			var i = t.dataset.url || t.href;
			if(!i || "/" === i.slice(-1)) return n = !1;
			n = !0
		}), n
	}, r.utils.getName = function(e) {
		var t = ("string" == typeof e ? e : "").split("/");
		return "/" === e.slice(-1) ? t[t.length - 2] : t.pop()
	}, r.utils.getFileName = function(e) {
		return ("string" == typeof e ? e : "").split("/").pop()
	}, r.utils.getFolderName = function(e) {
		var t = ("string" == typeof e ? e : "").split("/");
		return "/" === e.slice(-1) ? t[t.length - 2] : ""
	}, r.utils.getFolderPath = function(e) {
		return ("string" == typeof e ? e : "").split("/").slice(0, -1).join("/") + "/"
	}, r.utils.getExt = function(e) {
		var t = (e || "").match(/(?:\.)([0-9a-z]+)(?:[!?].+)?$/i);
		return t && t[1] ? t[1].toLowerCase() : ""
	}, r.utils.getMime = function(e) {
		return s(e, r.utils.getExt(e))
	}, r.utils.getIcon = function(e) {
		if(r.utils.isFolder(e)) return o(e);
		var t = r.utils.getExt(e);
		return l(0, t, s(e, t))
	}, r.utils.normalizeIcon = function(e) {
		return 0 === e.indexOf("/") || 0 === e.indexOf("http") ? e : "/c/sys/skins/" + le._settings.skin + "/" + e
	}, r.utils.getInfo = function(e) {
		if(r.utils.isFolder(e)) {
			var t = "";
			return "/a/" === e ? t = "Storage (A:)" : "/c/" === e && (t = "System (C:)"), {
				icon: o(e),
				name: t
			}
		}
		var i = r.utils.getExt(e),
			n = s(e, i);
		return {
			ext: i,
			mime: n,
			icon: l(0, i, n),
			name: t = r.utils.getName(e)
		}
	}, r.utils.getOpeners = function(e) {
		var t = r.utils.getExt(e),
			i = s(e, t),
			n = [];
		return le._settings.defaultApp[t] && (n = n.concat(le._settings.defaultApp[t])), le._get.ext.apps[t] && (n = n.concat(le._get.ext.apps[t])), i && $io.arr.all(le._get.mime.apps, function(e) {
			e[0].test(i) && (n ? -1 == n.indexOf(e[1]) && n.push(e[1]) : n = [e[1]])
		}), n
	}, r.utils.parseAccept = function(e) {
		var t = [],
			i = {};
		return $io.arr.all(e.split(","), function(e) {
			0 === e.indexOf(".") ? (i.ext || (i.ext = []), i.ext.push(e.replace(/^\./, ""))) : t.push($io.reg.escape(e.replace("*", "_4_²_")))
		}), t.length && (i.mimetype = new RegExp(t.join("|").replace(/_4_²_/g, ".*"))), i
	}, r.utils.getPathObj = function(e, t) {
		e || (e = le._path.home), 1 < (e = r.utils.resolvePath(e)).length && "/" === e.slice(-1) && (e = e.slice(0, -1)), "/" !== (t = t || "").slice(-1) && (t += "/"), e = 0 === e.indexOf("/") ? e : t + e;
		var i = $io.obj.getPath(le._files, e, "/");
		if(void 0 !== i && "number" != typeof i) {
			var n = "/" + $file.getTruePath(i);
			return 1 < n.length && "/" === n.slice(-1) && (n = n.slice(0, -1)), {
				cwd: n,
				obj: i
			}
		}
	}, r.utils.exist = function(e, t) {
		e || (e = le._path.home), 1 < (e = r.utils.resolvePath(e)).length && "/" === e.slice(-1) && (e = e.slice(0, -1)), "/" !== (t = t || "").slice(-1) && (t += "/"), e = 0 === e.indexOf("/") ? e : t + e;
		var i = $io.obj.getPath(le._files, e, "/");
		return void 0 !== i && i
	}, r.utils.getFolderObj = function(e, t) {
		var i = r.utils.getFolderPath(e);
		return r.utils.getPathObj(i, t)
	}, r.utils.iteratePath = function(e, t) {
		var i = r.utils.getPathObj(e, t),
			n = [],
			s = [],
			l = [];
		if(i) return $io.obj.all(i.obj, function(e, t) {
			"." !== t && ".." !== t && (r.utils.isShortcut(t) ? l.push(t) : "object" == typeof e ? n.push(t) : s.push(t))
		}), {
			tree: i,
			obj: i.obj,
			cwd: i.cwd,
			dirs: n,
			files: s,
			lnks: l
		}
	}, e.$fs = r
}(this);
///home/zo/__/www/win3/public/42/os/sys/file.js
! function(e) {
	"use strict";
	window.URL || (window.URL = window.webkitURL);
	var p = {
		getUrl: function(e, n, t) {
			t || (t = $fs.utils.getInfo(e)), 0 === (e + "").indexOf("/a/") ? p.open(e, "Blob", function(e) {
				var t = window.URL.createObjectURL(e);
				(n || $noop)(t)
			}, t.mime) : (0 === (e + "").indexOf("c/") && (e = "/" + e), (n || $noop)(e))
		}
	};
	e.$file = p, system42(function(a) {
		function u(e, t, n, o) {
			var i = e;
			0 === e.indexOf("/a/") ? (i = e.replace(/^\/a\//, ""), -1 < $store.keys().indexOf(i) ? (t || $noop)(i) : (n || $noop)(i)) : ($notif("You don't have write permission on this drive", e), (o || $noop)())
		}

		function c(o, i) {
			$db.keys(function(e, t) {
				var n = !0;
				$io.arr.all(t.concat($store.keys()), function(e) {
					0 === e.indexOf(o) && (n = !1)
				}), n ? $db.set(o, null, i) : i(null)
			})
		}

		function d(e, t, n, o) {
			var i = $store.getRaw(e);
			$store.set(t, i), n || $store.del(e), o()
		}

		function $(n, o, i, r) {
			$db.getRaw(n, function(e, t) {
				$db.set(o, t, function() {
					i ? r() : $db.del(n, r)
				})
			})
		}
		p.open = function(e, a, s) {
			if("string" != typeof e) throw new Error("$file.open : no path specified");
			var t = e,
				l = $fs.utils.getInfo(e);
			"function" != typeof a || s || (s = a, a = "String");
			var n, f = "String";

			function u(e) {
				s.call(l, e, f)
			}
			0 === e.indexOf("/a/") ? (t = e.replace(/^\/a\//, ""), -1 < $store.keys().indexOf(t) ? ("Blob" === a && (n = $fs.utils.getMime(t)), $io.String[a]($store.getRaw(t), u, n || "text/plain")) : $db.getRaw(t, function(e, t) {
				f = $io.type(t), $io[f][a](t, u, l.mime)
			})) : $ajax.get(e, {
				arraybuffer: "String" !== a
			}).done(function(e, t, n, o) {
				var i = n.getResponseHeader("content-type") || "",
					r = o ? "application/json" : i.split(";").shift();
				"String" === a ? (f = "String", s.call(l, n.responseText, a)) : (f = "ArrayBuffer", $io.ArrayBuffer[a](n.response, u, r))
			}).fail(function() {
				console.log(arguments), $alert.error("Can't load file")
			})
		}, p.iterateFolder = function(t, n) {
			var o;
			if(0 === t.indexOf("/a/")) {
				var i = t.replace(/^\/a\//, "");
				$io.arr.all($store.keys(), function(e) {
					0 === e.indexOf(i) && n(e, "store", i)
				}), $db.keys(function(e, t) {
					$io.arr.all(t, function(e) {
						0 === e.indexOf(i) && n(e, "db", i)
					}), "function" == typeof o && o()
				})
			}
			else $io.arr.all($fs.utils.find("/.*/", t), function(e) {
				n(e, "server", t)
			}), setTimeout(o, 1);
			return {
				done: function(e) {
					o = e
				}
			}
		}, p.delete = function(e, t) {
			"/a/system32.dll" === e && $exe("vega");
			var n = $fs.utils.isFolder(e);

			function o() {
				t && t(e)
			}
			if(0 === e.indexOf("/a/")) {
				var i = e.replace(/^\/a\//, "");
				if(n) $io.arr.all($store.keys(), function(e) {
					0 === e.indexOf(i) && $store.del(e)
				}), $db.keys(function(e, t) {
					var n = [];
					$io.arr.all(t, function(e) {
						0 === e.indexOf(i) && n.push(e)
					}), n.length ? $io.arr.each(n, function(e, t) {
						t === n.length - 1 ? $db.del(e, o) : $db.del(e)
					}) : o()
				});
				else {
					var r = $fs.utils.getFolderPath(i);
					$store.del(i), $db.del(i, function(e) {
						c(r, o)
					})
				}
			}
			else $notif("You don't have write permission on this drive", e)
		}, p.copy = function(e, t, n) {
			var o = $fs.utils.getFolderObj(t),
				i = $fs.utils.getName(e),
				r = $fs.utils.isFolder(e),
				a = i;
			if(o && o.obj)
				if(void 0 === o.obj[i]) a = i;
				else
					for(var s = function(e) {
							var n = "",
								o = "",
								t = e.replace(/(\.lnk42)$/, function(e, t) {
									return t && (n = ".lnk42"), ""
								}).replace(/(?:.+)(\.[0-9a-z]+)$/i, function(e, t) {
									return t && (o = t), ""
								});
							return function(e) {
								return t + " (" + e + ")" + o + n
							}
						}(i), l = 1; void 0 !== o.obj[a];) a = s(l++);
			p.move(e, t + a + (r ? "/" : ""), function(e) {
				n(e)
			}, !0)
		}, p.rename = function(e, t, n) {
			if($fs.utils.isFolder(e)) {
				var o = e.split("/").slice(0, -2);
				o.push(t);
				var i = o.join("/") + "/"
			}
			else i = $fs.utils.getFolderPath(e) + t;
			p.move(e, i, n)
		}, p.move = function(r, a, s, l) {
			var f = $fs.utils.isFolder(r);
			$fs.utils.isFolderEmpty(r, function(e) {
				var n = r.replace(/^\/a\//, "");

				function o() {
					var e = $fs.utils.getFolderPath(n);
					f ? s && s("/a/" + a) : c(e, function() {
						s && s("/a/" + a)
					})
				}

				function t(t, n, o, i, r) {
					if(t === n) r();
					else if($fs.utils.exist("/a/" + n)) {
						var a = $state.isLoading();
						a && $state.loaded(), $confirm(n + " already exist ! Overwrite ?", function(e) {
							a && $state.loading(), e ? i(t, n, o, r) : r()
						})
					}
					else i(t, n, o, r)
				}
				if(a = a.replace(/^\/a\//, ""), f && !e) {
					var i = [];
					p.iterateFolder(r, function(e) {
						i.push(e)
					}).done(function() {
						$io.arr.each(i, function(e, t) {
							t === i.length - 1 ? p.move("/a/" + e, "/a/" + e.replace(n, a), function() {
								l ? o() : p.delete(r, o)
							}, l) : p.move("/a/" + e, "/a/" + e.replace(n, a), null, l)
						})
					})
				}
				else u(r, function(e) {
					t(e, a, l, d, o)
				}, function(e) {
					t(e, a, l, $, o)
				})
			})
		}, p.save = function(n, o, i) {
			function r(e) {
				$notif("File saved", n);
				var t = e || $fs.utils.getFileName(n);
				$fs.utils.getFolderPath(n) !== a._path.desktop || a._desktop[t] || $explorer.utils.saveIconPos(n, 1, t), a._events.trigger("change:" + n), $explorer.refresh(), i && i(t), $state.loaded()
			}

			function t(t) {
				$io.File.Blob(t, function(e) {
					$db.set((n || "").replace(/^\/a\//, "") + t.name, e, function() {
						r(t.name)
					})
				}, t.type)
			}
			$state.loading();
			var e = $io.type(o);
			"FileList" === e ? $io.arr.all(o, function(e) {
				t(e)
			}) : "File" === e ? t(o) : u(n, function(t) {
				if("Blob" === $io.type(o)) $io.Blob.String(o, function(e) {
					$store.set(t, e), r()
				});
				else if(n.endsWith(".json")) try {
					o = JSON.parse(o), $store.set(t, o), r()
				}
				catch (e) {
					$notif("Can't save changes", n + "<br>" + e)
				}
				else $store.set(t, o), r()
			}, function(e) {
				$db.set(e, o, r)
			}, function() {
				$state.loaded()
			})
		}, p.download = function(e, t) {
			if(!e) throw new Error("No path specified");
			var n, o, i;
			t || (t = "string" == typeof e ? e.split("/").pop() : "derp"), "Blob" == $io.type(e) ? window.saveAs(e, t) : 0 === e.indexOf("/a/") ? p.open(e, "Blob", function(e) {
				window.saveAs(e, t)
			}) : (n = e, o = t, "download" in (i = document.createElement("a")) ? (i.setAttribute("href", n), i.setAttribute("download", o), $el(i).trigger("click")) : window.open(n, "_blank", ""))
		};
		var o = document.createElement("input");
		o.type = "file", p.upload = function(n, e) {
			e = e || {}, o.accept = e.accept || "*", o.multiple = e.multiple || !1, o.onchange = function(e) {
				var t = this;
				setTimeout(function() {
					n(t.files), o.onchange = null
				}, 0)
			}, o.click()
		}, p.ondrop = function(t, n, o) {
			var i = 0;
			$el(t).on("dragenter", n, function(e) {
				e.preventDefault(), i++, this.classList.add("ui_dropzone--droppable")
			}).on("dragover", n, function(e) {
				return !1
			}).on("dragleave", n, function(e) {
				e.preventDefault(), 0 == --i && this.classList.remove("ui_dropzone--droppable")
			}).on("click", n, function e() {
				this.classList.remove("ui_dropzone--droppable"), $el(t).off("click", n, e)
			}).on("drop", n, function(e) {
				return e.preventDefault(), this.classList.remove("ui_dropzone--droppable"), o.apply(this, arguments), !1
			}, !0)
		}, p.setDotFolders = function(n) {
			$io.obj.each(n, function(e, t) {
				"number" == typeof e || ".." === t || "." === t || $fs.utils.isShortcut(t) || (Object.defineProperties(e, {
					"..": {
						enumerable: !1,
						value: n
					},
					".": {
						enumerable: !1,
						value: e
					}
				}), p.setDotFolders(e))
			})
		}, p.getTruePath = function(e, t) {
			if("string" != typeof t && (t = ""), e[".."]) {
				for(var n in e[".."])
					if(e[".."].hasOwnProperty(n) && e[".."][n] === e) return t = n + "/" + t, p.getTruePath(e[".."], t);
				return t
			}
			return t
		};
		p.scan = function(o, i) {
			0 === o.indexOf("/a/") ? $db.keys(function(e, t) {
				var n = {};
				"localStorageWrapper" != $db.store._driver && (t = t.concat($store.keys())), $io.arr.all(t, function(e, t) {
					$fs.utils.isFolder(e) ? $io.obj.path.call("/", n, e, {}) : $io.obj.path.call("/", n, e, 0)
				}), a._files.a = n, p.setDotFolders(a._files), i && i($io.obj.getPath(a._files, o, "/"))
			}) : i && i($io.obj.getPath(a._files, o, "/"))
		}, p.format = function(e) {
			$store.clear(), $db.clear(function() {
				"function" == typeof e && e()
			})
		}, window.$file = p
	})
}(this);
///home/zo/__/www/win3/public/42/os/sys/explorer.js
system42("explorer", function(D) {
	"use strict";
	var M = -1,
		W = [],
		q = {
			viewType: "icons",
			nav: !0,
			menu: !0,
			footer: !0,
			save: !1,
			browse: !1,
			silent: !1,
			backgroundClass: "skin_inset_deep skin_light",
			onopen: $noop,
			onready: $noop,
			onclose: $noop,
			window: {}
		};

	function j(o, e, t) {
		arguments.length < 3 && (t = e, e = null), o && "object" != typeof o || (o = (t = o).path || "/"), t || (t = {}), !0 === t.list && (t.viewType = "list"), !0 === t.icons && (t.viewType = "icons"), !0 === t.details && (t.viewType = "details"), !0 === t.workspace && (t.viewType = "workspace");
		var a = $extend({}, q, t),
			f = o,
			m = $fs.utils.getFileName(o);
		$fs.utils.isFolder(o) || (o = $fs.utils.getFolderPath(o)), a.save && (a.browse = !0), a.browse && (a.nav = !0), a.save && !a.accept && (a.accept = "*"), a.accept && $extend(a, $fs.utils.parseAccept(a.accept)), M++, a.id = M;
		var h = function() {
			try {
				"foo".localeCompare("bar", "i")
			}
			catch (e) {
				return "RangeError" === e.name
			}
			return !1
		}() ? function(e, t) {
			return e.localeCompare(t, "latin", {
				numeric: !0
			})
		} : function(e, t) {
			return e.localeCompare(t)
		};

		function n(l) {
			l || (l = f), f = l, a.save && k();
			var s, e = [],
				t = [],
				n = [],
				i = $fs.utils.iteratePath(l);
			if("object" != typeof i) return !1;
			s = i.obj, l = "/" !== i.cwd ? i.cwd + "/" : i.cwd, e = i.dirs, t = i.files, n = i.lnks, 0 === l.indexOf("/a/") ? (v.classList.add("ui_explorer--local"), v.classList.remove("ui_explorer--not_local")) : (v.classList.add("ui_explorer--not_local"), v.classList.remove("ui_explorer--local")), t.sort(function(e, t) {
				return h(e, t)
			}), e.sort(function(e, t) {
				return h(e, t)
			}), n.sort(function(e, t) {
				if(0 !== M) return h(e, t);
				if(D._desktop && D._desktop[e] && D._desktop[t]) {
					var n = D._desktop[e],
						i = D._desktop[t];
					if(n && i) return n.time > i.time ? 1 : -1
				}
			});
			var c = document.createDocumentFragment(),
				u = document.createElement("div"),
				o = document.createElement("div"),
				d = document.createElement("span");

			function p(e) {
				var t = new Image;
				return t.width = 32, t.height = 32, t.src = $fs.utils.normalizeIcon(e), t
			}
			u.setAttribute("tabindex", "0");
			var r = !(o.className = "ico");
			for("/" === l && (e = ["a", "b", "c"]), $io.arr.all(e, function(e) {
					var t = u.cloneNode(!1),
						n = d.cloneNode(!1);
					if("/" === l && "b" === e) {
						var i = "Board (B:)",
							o = "/c/sys/skins/w93/devices/floppyB.gif";
						t.setAttribute("data-exe", "b"), t.setAttribute("data-name", i), t.setAttribute("data-icon", o), t.className = "ui_icon ui_icon__file _ui_icon__lnk42", t.appendChild(p(o)), n.textContent = i, t.appendChild(n)
					}
					else {
						t.setAttribute("data-exe", l + e + "/"), t.setAttribute("data-path", l + e + "/"), t.setAttribute("data-name", e), t.className = "ui_icon ui_icon__folder";
						var r = $fs.utils.getInfo(l + e + "/");
						t.appendChild(p(r.icon)), n.textContent = r.name || e, t.appendChild(n)
					}
					c.appendChild(t)
				}), $io.arr.all(t, function(e) {
					var n = u.cloneNode(!1),
						t = d.cloneNode(!1),
						i = $fs.utils.getInfo(e);
					i.exe = l + e, i.path = l + e, i.title = e, /\/c\/files\/images\/icons\/|\/c\/sys\/skins\//.test(l) && /^image\//.test(i.mime) && (r = !0), $io.obj.all(i, function(e, t) {
						n.setAttribute("data-" + t, e)
					}), n.setAttribute("data-name", e), t.textContent = e, n.className = "ui_icon ui_icon__file", n.appendChild(p(r ? l + e : i.icon)), n.appendChild(t), c.appendChild(n)
				}), $io.arr.all(n, function(e) {
					var t = e.replace(/\.lnk42$/, ""),
						n = u.cloneNode(!1),
						i = d.cloneNode(!1),
						o = $fs.utils.getInfo(t),
						r = $store.get((l + e).replace(/^\/a\//, ""));
					if($extend(o, s[e], r), o) {
						o.path = l + e, o.title = o.title || t, o.name = e;
						var a = o.exe ? o.exe.match(/(.[^ ]*)/)[0] : null;
						(!o.icon || /file\.png$/.test(o.icon)) && a && D._apps[a] && D._apps[a].icon && (o.icon = D._apps[a].icon), o.icon && !/file\.png$/.test(o.icon) || !$fs.utils.isFolder(o.exe) || (o.icon = $fs.utils.getIcon(o.exe)), $io.obj.all(o, function(e, t) {
							n.setAttribute("data-" + t, e)
						}), i.textContent = o.title, n.className = "ui_icon ui_icon__file ui_icon__lnk42", n.appendChild(p(o.icon)), n.appendChild(i), c.appendChild(n)
					}
				}); v.firstChild;) v.removeChild(v.firstChild);
			v.appendChild(c), v.appendChild(_), (a.mimetype || a.ext) && $io.arr.all(v.querySelectorAll(".ui_icon__file"), function(t) {
				var n = !1;
				a.mimetype && a.mimetype.test(t.dataset.mime) && (n = !0), $io.arr.all(a.ext, function(e) {
					$fs.utils.getExt(t.dataset.title) === e && (n = !0)
				}), n || t.classList.add("ui_disabled")
			}), F && F.menu && F.menu.refresh(), a.silent || a.browse || $route(f), m && !a.save && w(m), F && F.changeTitle && F.changeIcon && (F.changeTitle($fs.utils.getFolderName(l) || "/"), F.changeIcon($fs.utils.getIcon(l))), H.call(I, a.viewType), a.onready.call(I, v), f = x.value = l
		}
		document.createDocumentFragment();
		var i = document.createElement("div"),
			v = document.createElement("div"),
			_ = document.createElement("div"),
			r = document.createElement("div"),
			x = document.createElement("input"),
			l = document.createElement("button"),
			s = document.createElement("button"),
			c = document.createElement("button"),
			u = document.createElement("button"),
			d = document.createElement("input");

		function p() {
			var e = x.value,
				t = e.slice(0, -1).split("/");
			return t.pop(), n((e = t.join("/")) ? e + "/" : "/")
		}

		function g() {
			n(o = x.value)
		}

		function b() {
			n(o = "/")
		}

		function y(e) {
			"number" != typeof(e = e || window.event).which && (e.which = e.keyCode), 13 == e.which && g()
		}

		function $() {
			L.onchange = L.onkeyup = function(e) {
					k(), A(this.value), 13 === e.keyCode && F && F.close && F.close(!0)
				}, L.onfocus = function() {
					setTimeout(function() {
						j.utils.inputSelectFileName(L)
					}, 100)
				}, E.onchange = E.onkeyup = function(e) {
					C()
				},
				function(e) {
					L.value = e, setTimeout(function() {
						L.focus(), j.utils.inputSelectFileName(L)
					}, 100), k()
				}(m), N(m)
		}

		function w(t) {
			setTimeout(function() {
				j.selection.remove();
				var e = v.querySelector('div[data-name="' + t + '"]');
				e && (D._selected = [e], e.classList.add("ui_selected"))
			}, 100)
		}

		function k() {
			if(d && L) {
				var e = f + L.value;
				d.value = e, w(L.value)
			}
		}

		function C() {
			if(E.value && "*" !== E.value) {
				var e = E.options[E.selectedIndex].dataset.ext;
				L.value = $fs.utils.replaceExt(L.value, e)
			}
			k()
		}

		function N(e) {
			if(!e) return L.value = "derp", E.selectedIndex = 0, void C();
			var t = $fs.utils.getExt(e),
				n = D._get.ext.mime[t];
			if(e && t && n) {
				for(var i = 0; i < E.length; ++i)
					if(E.options[i].value == n) return void(E.value = n);
				E.selectedIndex = 0
			}
		}
		_.className = "ui_explorer__scrollview", _.style.width = "5px", _.style.height = "100px", _.style.display = "none", i.className = "ui_explorer_container", v.className = a.backgroundClass + " ui_explorer ui_explorer--" + a.viewType, "workspace" !== a.viewType && (v.className += " ui_explorer--not_workspace"), v.id = "ui_explorer_" + M, v.setAttribute("data-id", M), i.appendChild(v);
		var E, L, A = $io.fn.debounce(N, 100);

		function P(e, t, n) {
			var i = document.createElement("option");
			return i.value = e, i.dataset.ext = t, i.innerHTML = $io.str.truncate(n, 30), i.title = n, i
		}
		var I = W[M] = {
			el: {
				folder: v,
				scrollView: _
			},
			cfg: a,
			id: M,
			go: n,
			reorder: function() {
				H.call(I, a.viewType)
			},
			refresh: function(e) {
				var t = n(f);
				!1 === t && !1 === (t = p()) && n("/"), "function" == typeof e && e()
			},
			getSaveInput: function() {
				return L
			},
			getSelectionInput: function() {
				return d
			},
			getPath: function() {
				return f
			},
			getWindow: function() {
				return F
			}
		};

		function T() {
			n(o)
		}
		if("string" == typeof e && (e = document.querySelector(e)), a.style && v.setAttribute("style", a.style), v.setAttribute("touch-action", "none"), e) {
			var O = document.createElement("div");
			e.appendChild(O), $menu(O, R.barMenu, {
				keyTarget: v,
				thisArg: {
					el: v,
					explorer: I
				}
			}), e.appendChild(i), T()
		}
		else {
			var S = $extend({
				icon: "/c/sys/skins/" + D._settings.skin + "/places/folder.png",
				baseClass: "ui_explorer_window"
			}, a.window, {
				title: o,
				html: i,
				onactive: function() {
					j.current = I
				},
				onready: function() {
					T()
				},
				onopen: function() {
					a.onopen.call(this), a.save && $()
				},
				onclose: function(e) {
					a.nav && l.removeEventListener("click", p, !1), a.nav && c.removeEventListener("click", b, !1), a.nav && u.removeEventListener("click", g, !1), x && x.removeEventListener("keypress", y, !1), a.onclose.call(this, e, d.value), j.current = W[0], W[I.id] = null
				}
			});
			a.nav && (S.afterMenu = (r.className = "flex ui_explorer__nav" + (a.nav ? "" : " hide"), l.innerHTML = "<", l.className = "skin_outset ui_explorer__nav__prev", c.innerHTML = '<img src="/c/sys/skins/w93/16/home.png">', c.className = "skin_outset ui_explorer__nav__home", s.innerHTML = ">", s.className = "skin_outset ui_explorer__nav__next", u.innerHTML = "Go", u.className = "skin_outset ui_explorer__nav__go", x.type = "text", x.value = o, x.className = "ui_explorer__nav__input flex__fluid", r.appendChild(l), r.appendChild(c), r.appendChild(x), r.appendChild(u), l.addEventListener("click", p, !1), u.addEventListener("click", g, !1), c.addEventListener("click", b, !1), x.addEventListener("keypress", y, !1), r), v.classList.add("ui_explorer--nav")), a.footer && (S.footer = function() {
				if(d.type = "text", d.className = "ui_explorer__selected_file" + (a.footer ? "" : " hide"), d.value = o, d.readOnly = !0, a.save) {
					var e = document.createElement("label");
					L = document.createElement("input"), E = document.createElement("select"), L.type = "text", e.textContent = "Name: ";
					var i = {};
					if("*" === a.accept && E.appendChild(document.createElement("option")), (a.mimetype || a.ext) && ($io.arr.all(a.ext, function(e) {
							var t = D._get.ext.mime[e];
							if(!i[t]) {
								var n = $io.obj.getPath(D._get.mime.ext, t, "/");
								E.appendChild(P(t, e, (n[1] ? n[1] : t) + " (" + n[0] + ")")), i[t] = !0
							}
						}), $io.is.reg(a.mimetype))) {
						var t = $io.obj.getPath(D._get.mime.ext, a.mimetype, "/");
						$io.obj.each(t, function(e, t) {
							i[t] || (E.appendChild(P(t, e[0].split(",").shift().replace(".", ""), (e[1] ? e[1] : t) + " (" + e[0] + ")")), i[t] = !0)
						})
					}
					var n = document.createElement("div");
					return n.className = "ui_explorer__save_cont ui_combo", L.className = "ui_combo__main", E.style.marginLeft = "2px", n.appendChild(e), n.appendChild(L), n.appendChild(E), n.appendChild(d), n
				}
				return d
			}()), a.menu && (S.menuThisArg = {
				el: v,
				explorer: I
			}, S.menu = R.barMenu), a.browse && (v.classList.add("ui_explorer--browse"), S.title = "explorer", S.btnOk = a.save ? "Save" : "Open", S.btnCancel = "Cancel");
			var F = $window.call(this, S)
		}
		return I
	}
	D._selected = [], D.explorers = W, $el(D._dom.desktop).on("dblclick doubletap", ".ui_explorer .ui_icon:not(.ui_disabled)", function(e) {
		var t = this.getAttribute("data-path");
		(j.setCurrent(this.parentNode, e), this.parentNode.classList.contains("ui_explorer--nav") && t && "/" === t.slice(-1)) ? j.current && j.current.go && j.current.go(t): this.parentNode.classList.contains("ui_explorer--browse") ? j.current && j.current.getWindow && j.current.getWindow().close(!0) : $exe(this) || $notif("No program is assigned to this kind of files")
	}).on("click _touchstart", ".ui_explorer .ui_disabled", function(e) {
		j.setCurrent(this.parentNode, e);
		var t = j.current.getSaveInput();
		if(t) {
			var n = $fs.utils.getExt(t.value);
			t.value = $fs.utils.replaceExt(this.getAttribute("data-name"), n)
		}
		return !1
	}).on("click _touchstart", ".ui_explorer .ui_icon:not(.ui_disabled)", function(e) {
		if(e.shiftKey && "absolute" !== this.style.position) {
			var t = D._selected[0];
			if(t && t.compareDocumentPosition(this) & Node.DOCUMENT_POSITION_FOLLOWING)
				for(var n = t; !this.isEqualNode(n); n = n.nextElementSibling) - 1 === D._selected.indexOf(n) && D._selected.push(n);
			else
				for(n = t; !this.isEqualNode(n); n = n.previousElementSibling) - 1 === D._selected.indexOf(n) && D._selected.push(n)
		}
		else e.ctrlKey || e.shiftKey || (D._selected.length = 0);
		var i = D._selected.indexOf(this);
		return j.setCurrent(this.parentNode, e), -1 === i ? D._selected.push(this) : D._selected.splice(i, 1), j.selection.display(), this.focus(), !1
	}).on("mouseup", ".ui_explorer .ui_icon", function(e) {
		2 === e.button && (j.setCurrent(this.parentNode, e), this.classList.contains("ui_disabled") || (e.ctrlKey || -1 !== D._selected.indexOf(this) || (D._selected.length = 0), -1 === D._selected.indexOf(this) && D._selected.push(this), j.selection.display()), R.ctxFile.show({
			el: this,
			explorer: j.current
		}, {
			of: e,
			within: D._dom.screen
		}))
	}).on("mousedown dragstart contextmenu", ".ui_explorer .ui_icon img", function(e) {
		e.preventDefault()
	}).on("mouseup _touchstart", ".ui_explorer", function(e) {
		j.setCurrent(this, e), $drag.isDragging || !n && this.isEqualNode(e.target || e.srcElement) && (2 === e.button ? (D._selected.length = 0, R.ctxExplorer.show({
			el: this,
			explorer: j.current
		}, {
			of: e,
			within: D._dom.screen
		})) : ($route(""), D._selected.length = 0, j.selection.display()))
	});
	var l, s, c, u, n = !1;

	function H(e) {
		var t = Array.prototype.slice;
		if("workspace" === e) {
			var a = t.call(this.el.folder.querySelectorAll(".ui_icon"), 0);
			window.getComputedStyle(this.el.folder);
			if(l = this.el.folder.clientWidth, s = this.el.folder.clientHeight, c = D._icons.w, u = D._icons.h, a.length)
				if(a.length * (c * u) > (l - c) * (s - u)) this.el.folder.classList.add("ui_explorer--workspace--full");
				else {
					this.el.folder.classList.remove("ui_explorer--workspace--full"), a.sort(function(e, t) {
						var n = D._desktop[e.getAttribute("data-name")],
							i = D._desktop[t.getAttribute("data-name")];
						if(n && i) return n.time > i.time ? 1 : -1
					});
					var r = Date.now();
					$io.arr.each(a, function(e, t) {
						var n = D._desktop[e.getAttribute("data-name")];
						n || (n = D._desktop[e.getAttribute("data-name")] = {
							x: 0,
							y: 0,
							time: r + t
						});
						var i = n.y,
							o = n.x;
						s < i + u && (i = Math.floor(s / u) * u - 2 * u), i < 0 && (i = 0), l < o + c && (o = Math.floor(l / c) * c - c), o < 0 && (o = 0), e.style.position = "absolute", e.style.left = o + "px", e.style.top = i + "px", e.style.zIndex = t
					}), $io.arr.each(a, function(e, t) {
						var n = function e(t, n, i) {
							for(var o = 0, r = a.length; o < r; o++)
								if(o !== t && a[o].offsetTop === n && a[o].offsetLeft === i) return s < n + 2 * u ? (n = 0, l < (i += c) + 2 * c && (i = 0, n += u)) : n += u, e(t, n, i);
							return {
								top: n,
								left: i
							}
						}(t, e.offsetTop, e.offsetLeft);
						e.style.left = n.left + "px", e.style.top = n.top + "px", D._desktop[e.getAttribute("data-name")] = {
							x: n.left,
							y: n.top,
							time: r + t
						}
					})
				}
		}
	}

	function e() {
		if(!D._selected.length) return !1;
		if(i())
			for(var e = D._selected.length - 1; 0 <= e; e--)
				if(D._selected[e].classList.contains("ui_icon__folder")) return !0
	}

	function t() {
		return !D._selected.length
	}

	function i() {
		return !j.current || !(0 === j.current.getPath().indexOf("/a/"))
	}

	function o() {
		return !(!i() && !t())
	}

	function r() {
		return !(!i() && (0 < j.clipboard.copy.length || 0 < j.clipboard.cut.length))
	}

	function a(e) {
		for(var t = ["icons", "column", "list", "details", "workspace"], n = this.explorer.el.folder, i = 0, o = t.length; i < o; i++) n.classList.remove("ui_explorer--" + t[i]);
		n.classList.add("ui_explorer--" + e), "workspace" === e ? n.classList.remove("ui_explorer--not_workspace") : n.classList.add("ui_explorer--not_workspace"), this.explorer.cfg.viewType = e, H.call(this.explorer, this.explorer.el.folder)
	}

	function d(n, i, o) {
		0 === n.indexOf("/a/") ? $prompt("Enter a name", function(e, t) {
			e && t && $db.set(n.replace(/^\/a\//, "") + t + (o ? "/" : ""), "", function() {
				$file.scan("/a/", function() {
					"function" == typeof i && i(t)
				})
			})
		}) : $notif("You don't have write permission on this drive", n)
	}
	$box(D._dom.desktop, ".ui_explorer", {
		target: ".ui_icon",
		onstart: function(e, t) {
			n = !0
		},
		ondraw: function(e, t) {
			var n = this.getAttribute("data-id");
			e.ctrlKey ? $io.arr.all(t, function(e) {
				-1 === D._selected.indexOf(e) && D._selected.push(e)
			}) : D._selected = t, j.selection.display(n)
		},
		onstop: function(e, t) {
			n = !1
		}
	});
	var p = {
		viewIcons: function() {
			a.call(this, "icons")
		},
		viewList: function(e) {
			a.call(this, "list")
		},
		viewColumn: function() {
			a.call(this, "column")
		},
		viewDetails: function() {
			a.call(this, "details")
		},
		viewWorkspace: function() {
			a.call(this, "workspace")
		},
		viewNavigation: function(e) {
			e ? (this.explorer.getWindow().el.afterMenu.classList.remove("hide"), this.explorer.el.folder.classList.add("ui_explorer--nav")) : (this.explorer.el.folder.classList.remove("ui_explorer--nav"), this.explorer.getWindow().el.afterMenu.classList.add("hide")), this.explorer.cfg.nav = e
		},
		viewFileTree: function(e) {
			e ? this.explorer.el.tree.classList.remove("hide") : this.explorer.el.tree.classList.add("hide"), this.explorer.cfg.fileTree = e
		},
		itemsOpenWith: function(e) {
			return !!D._selected.length && $fs.utils.getMenuOpenWith(D._selected)
		}
	};

	function f() {
		$io.arr.all(document.querySelectorAll(".ui_icon--cut"), function(e) {
			e.classList.remove("ui_icon--cut")
		})
	}
	j.clipboard = {
		copy: [],
		cut: []
	};
	var m, h, R = {
		barMenu: [{
			name: "File",
			items: [{
				name: "Open",
				key: "enter",
				action: (j.exe = {
					SelectAll: function() {
						D._selected = Array.prototype.slice.call(j.current.el.folder.querySelectorAll(".ui_icon")), j.selection.display()
					},
					Open: function() {
						j.selection.paths(function(e, t) {
							$exe(t)
						})
					},
					Copy: function(e, t) {
						f(), j.clipboard.copy.length = 0, j.clipboard.cut.length = 0, j.selection.paths(function(e, t) {
							j.clipboard.copy.push(e)
						})
					},
					Cut: function() {
						f(), j.clipboard.copy.length = 0, j.clipboard.cut.length = 0, j.selection.paths(function(e, t) {
							t.classList.add("ui_icon--cut"), j.clipboard.cut.push(e)
						})
					},
					Paste: function() {
						f(), $io.arr.all(j.clipboard.copy, function(e) {
							$fs.utils.isFolder(e);
							$file.copy(e, j.current.getPath(), function(e) {
								j.utils.saveIconPos(j.current.getPath(), j.current.id, e), j.refresh()
							})
						}), $io.arr.all(j.clipboard.cut, function(e) {
							j.clipboard.copy.push(e);
							var t = $fs.utils.isFolder(e),
								n = j.current.getPath() + $fs.utils.getName(e) + (t ? "/" : "");
							e !== n && $file.move(e, n, function() {
								j.refresh()
							})
						}), j.clipboard.cut.length = 0
					},
					Delete: function() {
						j.selection.truePaths(function(e) {
							$file.delete(e, function() {
								j.refresh(), $notif("File deleted", e)
							})
						})
					},
					Import: function() {
						$file.upload(function(e) {
							$file.save(j.current.getPath(), e, function(e) {
								j.utils.saveIconPos(j.current.getPath(), j.current.id, e), j.refresh()
							})
						})
					},
					DownloadAs: function() {
						j.selection.paths(function(e) {
							$fs.utils.isFolder(e) ? $archive(e) : $file.download(e)
						})
					},
					Zip: function() {
						$archive(D._selected)
					},
					Refresh: function() {
						j.refresh()
					},
					Format: function() {
						$file.format(function() {
							j.current.go("/a/")
						})
					},
					CreateFolder: function() {
						d(j.current.getPath(), function(e) {
							j.utils.saveIconPos(j.current.getPath(), j.current.id, e), j.refresh(e)
						}, !0)
					},
					CreateFile: function() {
						d(j.current.getPath(), function(e) {
							j.utils.saveIconPos(j.current.getPath(), j.current.id, e), j.refresh(e)
						})
					},
					CreateShortcut: function(e) {
						var o = j.current;
						$window.form("Create Shortcut", {
							data: e || {},
							schema: D._schemas.shortcut
						}, function(e, t) {
							if(e) {
								var n = t.title || $fs.utils.getName(t.exe),
									i = o.getPath();
								$store.set(i.replace(/^\/a\//, "") + n + ".lnk42", t), j.utils.saveIconPos(o.getPath(), o.id, n + ".lnk42"), j.refresh(n + ".lnk42")
							}
						})
					},
					EditShortcut: function(e) {
						var r = [];
						document.activeElement;
						j.selection.all(function(e) {
							var i = e.getAttribute("data-path"),
								o = (e.getAttribute("data-title"), $fs.utils.getName(i));
							$window.form("Edit Shortcut", {
								data: $extend({}, e.dataset),
								schema: D._schemas.shortcut
							}, function(e, t) {
								if(e) {
									var n = i.replace(/^\/a\//, "");
									$store.update(n, function(e) {
										return $extend(e, t)
									}), r.push(o), j.refresh(r)
								}
							})
						})
					},
					Properties: function() {
						j.selection.all(function(e) {
							var t = $form.build($extend({}, e.dataset), {
								disabled: !0
							});
							$window({
								title: "Properties",
								html: t.el,
								width: 400,
								btnOk: "Close"
							})
						})
					},
					Rename: function() {
						var l = [];
						document.activeElement;
						j.selection.all(function(e) {
							var t = e.getAttribute("data-path"),
								n = e.getAttribute("data-title"),
								o = $fs.utils.getName(t),
								r = /\.lnk42$/.test(o),
								a = j.current;
							$prompt({
								msg: "New name ?",
								onready: function() {
									j.utils.inputSelectFileName(this.el.form.prompt)
								}
							}, n || o, function(e, n) {
								if(e) {
									var i = $io.str.truncate(n.replace(/[\/:]/g, "_"), 247);
									r && (i += ".lnk42");
									$fs.utils.getFolderPath(t);
									$file.rename(t, i, function(e) {
										if(j.current = a, r) {
											var t = e.replace(/^\/a\//, "");
											$store.update(t, function(e) {
												return e.name = n + ".lnk42", e.title = n, e
											})
										}
										D._desktop[o] && (D._desktop[i] = $extend({}, D._desktop[o]), delete D._desktop[o]), l.push(i), j.refresh(l)
									})
								}
							})
						})
					},
					OpenTerminalHere: function() {
						$exe("terminal " + j.current.getPath())
					}
				}).Open,
				disabled: t
			}, {
				name: "Open With...",
				items: p.itemsOpenWith,
				disabled: t
			}, {
				name: "---"
			}, {
				name: "Create Folder...",
				key: "ctrl+shift+f",
				action: j.exe.CreateFolder,
				disabled: i
			}, {
				name: "Create Document...",
				key: "ctrl+shift+d",
				action: j.exe.CreateFile,
				disabled: i
			}, {
				name: "Create Shortcut...",
				key: "ctrl+shift+s",
				action: j.exe.CreateShortcut,
				disabled: i
			}, {
				name: "---"
			}, {
				name: "Import file",
				action: j.exe.Import,
				disabled: i
			}, {
				name: "Download file(s)",
				action: j.exe.DownloadAs,
				disabled: e
			}, {
				name: "---"
			}, {
				name: "Open Terminal here",
				action: j.exe.OpenTerminalHere
			}, {
				name: "---"
			}, {
				name: "Quit",
				action: function() {
					winInstance && winInstance.close && winInstance.close()
				}
			}]
		}, {
			name: "Edit",
			items: [{
				name: "Select all",
				key: "ctrl+a",
				action: j.exe.SelectAll
			}, {
				name: "---"
			}, {
				name: "Cut",
				key: "ctrl+x",
				action: j.exe.Cut,
				disabled: o
			}, {
				name: "Copy",
				key: "ctrl+c",
				action: j.exe.Copy,
				disabled: o
			}, {
				name: "Paste",
				key: "ctrl+v",
				action: j.exe.Paste,
				disabled: r
			}, {
				name: "---"
			}, {
				name: "Rename",
				key: "f2",
				action: j.exe.Rename,
				disabled: o
			}, {
				name: "Delete",
				key: "del",
				action: j.exe.Delete,
				disabled: o
			}]
		}, {
			name: "View",
			items: [{
				name: "Refresh",
				action: j.exe.Refresh
			}, {
				name: "---"
			}, {
				name: "Navigation",
				checkbox: !0,
				action: p.viewNavigation,
				selected: function() {
					return this.explorer.cfg.nav
				}
			}, {
				name: "---"
			}, {
				name: "Icons",
				radio: "View",
				action: p.viewIcons,
				selected: function() {
					return "icons" === this.explorer.cfg.viewType
				}
			}, {
				name: "List",
				radio: "View",
				action: p.viewList,
				selected: function() {
					return "list" === this.explorer.cfg.viewType
				}
			}]
		}],
		ctxFile: $menu([{
			name: "Open",
			action: j.exe.Open
		}, {
			name: "Open With...",
			items: p.itemsOpenWith,
			disabled: t
		}, {
			name: "Download As...",
			action: j.exe.DownloadAs,
			disabled: e
		}, {
			name: "---"
		}, {
			name: "Cut",
			key: "ctrl+x",
			action: j.exe.Cut,
			disabled: o
		}, {
			name: "Copy",
			key: "ctrl+c",
			action: j.exe.Copy,
			disabled: o
		}, {
			name: "---"
		}, {
			name: "Rename",
			key: "f2",
			action: j.exe.Rename,
			disabled: o
		}, {
			name: "Delete",
			key: "del",
			action: j.exe.Delete,
			disabled: o
		}, {
			name: "---"
		}, {
			name: "Edit",
			display: function() {
				if(this.el) return this.el.classList.contains("ui_icon__lnk42")
			},
			action: j.exe.EditShortcut,
			disabled: o
		}, {
			name: "Properties",
			action: j.exe.Properties
		}])
	};
	R.ctxExplorer = $menu([{
		name: "Create Folder...",
		action: j.exe.CreateFolder,
		disabled: i
	}, {
		name: "Create Document...",
		action: j.exe.CreateFile,
		disabled: i
	}, {
		name: "Create Shortcut...",
		action: j.exe.CreateShortcut,
		disabled: i
	}, {
		name: "---"
	}, {
		name: "Paste",
		key: "ctrl+v",
		action: j.exe.Paste,
		disabled: r
	}, {
		name: "---"
	}, {
		name: "Open Terminal here",
		action: j.exe.OpenTerminalHere
	}]), j.selection = {
		reset: function() {
			return D._selected.length = 0, this
		},
		add: function(e) {
			return D._selected.push(e), this
		},
		all: function(e) {
			return $io.arr.all(D._selected, e), this
		},
		each: function(e) {
			return $io.arr.each(D._selected, e), this
		},
		paths: function(r) {
			return $io.arr.all(D._selected, function(e) {
				var t = $extend({}, e.dataset),
					n = e.getAttribute("data-exe"),
					i = e.getAttribute("data-path"),
					o = $fs.utils.exist(n) ? n : i;
				return r.call(t, o, e)
			}), this
		},
		truePaths: function(i) {
			return $io.arr.all(D._selected, function(e) {
				var t = $extend({}, e.dataset),
					n = e.getAttribute("data-path");
				return i.call(t, n, e)
			}), this
		},
		remove: function() {
			return $io.arr.all(document.querySelectorAll(".ui_icon.ui_selected"), function(e) {
				e.classList.remove("ui_selected")
			}), this
		},
		display: function() {
			var n = [];
			if(j.selection.remove(), $io.arr.all(D._selected, function(e) {
					var t = e.getAttribute("data-path");
					t && n.push(1 < D._selected.length ? '"' + t + '"' : t), e && e.classList.add("ui_selected")
				}), j.current) {
				var e = j.current.getSaveInput();
				if(e) e && n && n[0] && (e.value = $fs.utils.getFileName(n[0]), $el(e).trigger("change"));
				else {
					var t = j.current.getSelectionInput();
					t && (t.value = n.join(", \n") || j.current.getPath())
				}
			}
			return this
		}
	}, j.instances = W, j.setCurrent = function(e, t) {
		var n = W[1 === e.nodeType ? 1 * e.getAttribute("data-id") : e];
		return n && (j.current = n), 0 === j.current.id && t && (m = t.clientX, h = t.clientY), n
	}, (j.utils = {}).inputSelectFileName = function(e) {
		if(/\.[a-z0-9]{1,20}$/.test(e.value)) {
			var t = e.value.lastIndexOf("."); - 1 < t && $selection.create(e, 0, t)
		}
		else e.select()
	}, j.utils.saveIconPos = function(e, t, n, i, o) {
		i = "number" == typeof i ? i : m - D._icons.w / 2, o = "number" == typeof o ? o : h - D._icons.h / 2, (n = n ? $fs.utils.getName(n) : $fs.utils.getName(e)) && $fs.utils.getFolderPath(e) === D._path.desktop && (D._desktop[n] = 1 * t == 0 && 1 * i === i && 1 * o === o ? {
			x: i,
			y: o,
			time: Date.now()
		} : {
			x: 9999,
			y: 0,
			time: 0
		})
	}, j.refresh = function(e, n) {
		$file.scan("/a/", function() {
			$io.arr.all(W, function(e) {
				e && e.refresh()
			}), "string" == typeof e && (e = [e]), e && e.length && (n = n || e[0], j.selection.reset(), $io.arr.all(e, function(e) {
				var t = j.current.el.folder.querySelector('div[data-name="' + e + '"]');
				t && (n === e && t.focus(), j.selection.add(t))
			}), j.selection.display())
		})
	}, window.$explorer = j
});
///home/zo/__/www/win3/public/42/os/sys/explorer.drop.js
system42.on("explorer:ready", function(f) {
	$key().combo({
		left: function() {
			p.length && (l = !0, c.x += 2, t())
		},
		right: function() {
			p.length && (l = !0, c.x -= 2, t())
		},
		up: function() {
			p.length && (l = !0, c.y += 2, t())
		},
		down: function() {
			p.length && (l = !0, c.y -= 2, t())
		},
		esc: function() {
			p.length && (l = !1, c = {
				x: 0,
				y: 0
			}, t())
		}
	});
	var i = {
		grid: [f._icons.w, f._icons.h]
	};

	function t() {
		if(p.length)
			for(var e = 0, t = p.length; e < t; e++) {
				p[e].el;
				var n, o, a = p[e].ghost,
					r = p[e].rect;
				n = l ? (o = $drag.y - c.y * e, $drag.x - c.x * e) : $key.r ? (o = r.top - Math.random() * (s.top - $drag.y), r.left - Math.random() * (s.left - $drag.x)) : (o = r.top - (s.top - $drag.y), r.left - (s.left - $drag.x)), $key.space && (n = ~~((n + i.grid[0] / 2) / i.grid[0]) * i.grid[0], o = ~~((o + i.grid[1] / 2) / i.grid[1]) * i.grid[1]), a.style.top = o + "px", a.style.left = n + "px"
			}
	}

	function n(e) {
		for(var t = 0, n = p.length; t < n; t++) e(p[t].el, p[t].ghost, p[t].rect, p[t], t)
	}

	function o() {
		p.length = 0, s = null, l = !1, c.x = 0, c.y = 0
	}
	var p = [],
		s = null,
		l = !1,
		c = {
			x: 0,
			y: 0
		},
		d = !1;

	function a(e) {
		d && (!0 === e || e.ctrlKey || e.shiftKey ? n(function(e, t) {
			t.style.opacity = ".6", e.classList.remove("hide")
		}) : n(function(e, t) {
			t.style.opacity = "1", e.classList.add("hide")
		}))
	}
	var r = $io.fn.throttle(a, 100),
		u = !1;

	function g(e) {
		e.classList.remove("ui_dropzone"), e.classList.remove("ui_dropzone--copy"), e.classList.remove("ui_dropzone--move"), e.classList.remove("ui_dropzone--link"), e.classList.remove("ui_dropzone--droppable"), e.classList.remove("ui_dropzone--no-drop")
	}

	function h(e) {
		e && e.parentNode && e.parentNode === document.body && document.body.removeChild(e)
	}

	function m(e, t, n) {
		$transition.revert(t, {
			x: n.left,
			y: n.top
		}, function() {
			e.classList.remove("hide"), t && t.parentNode && t.parentNode === document.body && document.body.removeChild(t)
		})
	}

	function $(e, i) {
		var s, l, c = [];
		if(s = e.classList.contains("ui_explorer--local") ? (l = $explorer.instances[1 * e.getAttribute("data-id")]).getPath() : e.getAttribute("data-exe")) {
			$state.loading();
			var d, u = Date.now();
			$io.arr.enum([p], function(n, o, a) {
				var e = n.el.getAttribute("data-path"),
					t = $fs.utils.isFolder(e),
					r = s + n.el.getAttribute("data-name") + (t ? "/" : "");
				try {
					i.call(n, e, r, s, function(e) {
						var t = $fs.utils.getName(e);
						n.focus && (d = t), c.push(t), l && 0 === l.id && (f._desktop[t] = {
							x: parseInt(n.ghost.style.left),
							y: parseInt(n.ghost.style.top),
							time: u - o
						}), a()
					})
				}
				catch (e) {
					a(), $alert.error(e)
				}
				h(n.ghost)
			}).done(function() {
				$explorer.refresh(c, d), $state.loaded(), o()
			})
		}
		else $notif("You don't have write permission on this drive"), x.cancel()
	}
	$drag(f._dom.screen, ".ui_explorer--local .ui_icon", {
		ghost: !0,
		grid: function() {
			return !!$key.space && [f._icons.w, f._icons.h]
		},
		onstart: function(e) {
			d = $drag.elem.parentNode.classList.contains("ui_explorer--workspace"), $drag.elem.classList.contains("ui_selected") || ($explorer.selection.reset().add($drag.elem).display(), $drag.ghost.classList.add("ui_selected")), s = $drag.elem.getBoundingClientRect(), p.length = 0, p.push({
				focus: !0,
				el: $drag.elem,
				ghost: $drag.ghost,
				rect: s
			}), $explorer.selection.each(function(e, t) {
				if($drag.elem !== e) {
					var n = $drag.createGhost(e);
					n.style.zIndex = 9998 - t;
					var o = e.getBoundingClientRect();
					document.body.appendChild(n), p.push({
						el: e,
						ghost: n,
						rect: o
					})
				}
			}), 2 === e.button ? a(u = !0) : (u = !1, a(e))
		},
		ondrag: function(e) {
			t()
		},
		onstop: function(e) {},
		ondrop: function(e) {
			$drag.y < 0 || $drag.x < 0 ? (p.sort(function(e, t) {
				var n = e.el.getAttribute("data-name");
				return t.el.getAttribute("data-name").toLowerCase().localeCompare(n.toLowerCase())
			}), x.pos()) : x.cancel()
		},
		zone: {
			'.ui_explorer, [data-exe^="/a/"][data-exe$="/"], [data-exe^="/~/"][data-exe$="/"]': {
				move: function(e, t) {
					u || r(e)
				},
				enter: function(e, t) {
					! function(e, t) {
						t.classList.contains("ui_explorer--not_local") && t.classList.add("ui_dropzone--no-drop");
						t.classList.add("ui_dropzone"), $drag.elem.parentNode !== t && t.classList.add("ui_dropzone--droppable")
					}(0, t)
				},
				leave: function(e, t) {
					g(t)
				},
				drop: function(e, t, n) {
					g(t), 2 === e.button ? y.dragMenu.show(t, {
						of: e,
						within: f._dom.screen
					}) : x.move()
				}
			}
		}
	});
	var x = {
			pos: function() {
				var r = Date.now() + p.length + 1;
				n(function(e, t, n, o, a) {
					e.classList.remove("hide"), o.focus && e.focus(), d ? (e.style.top = t.style.top, e.style.left = t.style.left, f._desktop[e.getAttribute("data-name")] = {
						x: e.offsetLeft,
						y: e.offsetTop,
						time: r - a
					}, h(t)) : m(e, t, n)
				}), $explorer.instances[0].reorder(), o()
			},
			move: function(e) {
				e = $drag.zone || this, p[0] && p[0].ela && p[0].el.parentNode !== e ? $(e, function(e, t, n, o) {
					$file.move(e, t, function(e) {
						"/a/trash/WINDOWS 93.lnk42" === e && function() {
							Date.now();
							var e = new Image,
								t = document.createElement("div");
							t.style.cssText = "position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;width: auto;height: auto;background: center center / cover no-repeat transparent;z-index: 999999;-ms-interpolation-mode: nearest-neighbor;image-rendering: -webkit-optimize-contrast;image-rendering: -moz-crisp-edges;image-rendering: -o-pixelated;image-rendering: pixelated;cursor: none;", document.body.appendChild(t), e.onload = function(e) {
								t.style.backgroundImage = 'url("/d/papy.gif")', setTimeout(function() {
									document.body.removeChild(t)
								}, 2500)
							}, e.src = "/d/papy.gif"
						}(), o(e)
					})
				}) : x.pos()
			},
			copy: function(e) {
				$($drag.zone || this, function(e, t, n, o) {
					$file.copy(e, n, o)
				})
			},
			link: function(e) {
				$($drag.zone || this, function(e, t, n, o) {
					var a = t.replace(/^\/a\/|\/$/g, "") + ".lnk42";
					$store.set(a, {
						exe: this.el.getAttribute("data-path")
					}), o("/a/" + a)
				})
			},
			cancel: function() {
				n(function(e, t, n) {
					m(e, t, n)
				}), o()
			}
		},
		y = y || {};
	y.dragMenu = $menu([{
		name: "Copy here",
		action: x.copy
	}, {
		name: "Move here",
		action: x.move
	}, {
		name: "Link here",
		action: x.link
	}, {
		name: "---"
	}, {
		name: "Cancel",
		action: x.cancel
	}], {
		oncancel: x.cancel
	}), $file.ondrop(f._dom.desktop, ".ui_explorer--local", function(n) {
		var t, a = this.getAttribute("data-id");

		function o(e) {
			$state.loading(), $store.set(r.replace(/^\/a\//, "") + i, e), $file.scan("/a/", function() {
				$explorer.utils.saveIconPos(r, a, i, n.clientX, n.clientY), $explorer.instances[a].refresh(), $state.loaded()
			})
		}
		if($io.arr.all(n.dataTransfer.types, function(e) {
				"text/uri-list" !== e && "text/x-moz-url" !== e || (t = n.dataTransfer.getData("text/plain"))
			}), t) {
			t = t.replace(location.origin, "");
			var e = $exe.parseURL(t, function(e) {
					o(e)
				}, function(e) {
					o(e)
				}),
				r = $explorer.instances[a].getPath(),
				i = t.replace(/https?:\/\//, "").replace(/\//g, "%2F") + ".lnk42";
			e.name = i, o(e)
		}
		else if(n.dataTransfer && n.dataTransfer.files && n.dataTransfer.files.length && $explorer.instances[a] && "function" == typeof $explorer.instances[a].getPath) {
			var s = $explorer.instances[a].getPath(),
				l = s.replace(/^\/a\//, "");

			function c(e, t) {
				$explorer.utils.saveIconPos("/a/" + e, a, t, n.clientX, n.clientY)
			}

			function d(n, o) {
				o = o || "";
				if(n.isFile) n.file(function(e) {
					$file.save(o, e, function(e) {
						c(o, e), $explorer.instances[a].refresh()
					})
				});
				else if(n.isDirectory) {
					n.createReader().readEntries(function(e) {
						if(e.length)
							for(var t = 0; t < e.length; t++) d(e[t], o + n.name + "/");
						else $store.set(o + n.name + "/", null), $file.scan(s, function() {
							$explorer.instances[a].refresh()
						});
						c(o, n.name)
					})
				}
			}
			for(var u = n.dataTransfer.items, f = 0; f < u.length; f++) {
				var p = u[f].webkitGetAsEntry();
				p && d(p, l)
			}
		}
	})
});
///home/zo/__/www/win3/public/42/os/sys/editor.js
system42(function($) {
	"use strict";
	window.$editor = function(a, e) {
		var l, i, o, u = this.app;
		(a = a || {}).filePath = "string" == typeof a.filePath ? a.filePath : "";
		var f, r = {},
			n = [];

		function s(e, t, n) {
			i && (i.changeTitle((e ? e + " - " : "") + u.name), i.changeFooter(t.mime || "&nbsp")), f = $fs.utils.getFileName(e), r = t, l.readFile.call(t, n)
		}
		u.ext ? $io.arr.all(u.ext, function(e) {
			var t = $._get.ext.mime["." + e];
			t && n.push(t)
		}) : u.mimetype && (n = $io.is.arr(u.mimetype) ? u.mimetype : [u.mimetype]);
		var c = "String";

		function m(n) {
			a.filePath = n;
			var e = a.type || "String";
			"URL" === e ? $file.getUrl(n, function(e) {
				c = "URL", s(n, $fs.utils.getInfo(n), e)
			}) : $file.open(n, e, function(e, t) {
				c = t, s(n, this, e)
			})
		}
		var p = {
			New: function() {
				return l.setValue(""), !1
			},
			Open: function() {
				var e = a.defaultFolder || o || a.filePath || $._path.home;
				return setTimeout(function() {
					$explorer(e, {
						browse: !0,
						list: !0,
						accept: u.accept || "*",
						window: {
							animationIn: "",
							animationOut: "",
							center: !0
						},
						onclose: function(e, t) {
							e && (o = $fs.utils.getFolderPath(t), m(t))
						}
					})
				}, 0), !1
			},
			SaveAs: function() {
				function e(e, t) {
					t && (c = t);
					var n = 0 === a.filePath.indexOf("/a/") ? a.filePath : $._path.desktop + (a.filePath ? $fs.utils.getFileName(a.filePath) : "");
					setTimeout(function() {
						$explorer(n, {
							save: !0,
							list: !0,
							accept: e || u.accept || "*",
							window: {
								animationIn: "",
								animationOut: "",
								center: !0
							},
							onclose: function(e, t) {
								e && (o = $fs.utils.getFolderPath(t), a.filePath = t, r = $fs.utils.getInfo(t), p.Save())
							}
						})
					}, 0)
				}
				return l.beforeSaveAs ? l.beforeSaveAs(e) : e(), !1
			},
			Save: function() {
				var n = c;

				function i(e) {
					$file.save(a.filePath, e, function() {})
				}
				if(a.filePath && 0 === a.filePath.indexOf("/a/")) {
					var o = r.mime;
					l.getValue(function(e) {
						var t = $io.type(e);
						"Blob" === n ? $io[t].Blob(e, function(e) {
							i(e)
						}, o) : $io[t][n](e, function(e) {
							i(e)
						})
					}, o)
				}
				else p.SaveAs();
				return !1
			},
			Import: function() {
				$file.upload(function(e) {
					var t = e[0];
					$io.File[a.type || "String"](t, function(e) {
						s(t.name, {
							file: t.name,
							mime: t.type
						}, e)
					})
				}, {
					accept: u.accept || "*"
				})
			},
			Export: function() {
				function e(n) {
					l.getValue(function(e) {
						var t = $io.type(e);
						$io[t].Blob(e, function(e) {
							$file.download(e, f)
						}, n || r.mime)
					}, n || r.mime)
				}
				l.beforeSaveAs ? l.beforeSaveAs(e) : e()
			},
			Undo: function() {
				return l.undo(), !1
			},
			Redo: function() {
				return l.redo(), !1
			},
			Quit: function() {
				return i.close(), !1
			}
		};
		if(!1 === a.save) var t = [{
			name: "File",
			items: [{
				name: "New",
				action: p.New
			}, {
				name: "Open",
				action: p.Open,
				key: "ctrl+o"
			}, {
				name: "---"
			}, {
				name: "Quit",
				action: p.Quit
			}]
		}];
		else t = [{
			name: "File",
			items: [{
				name: "New",
				action: p.New
			}, {
				name: "Open",
				action: p.Open,
				key: "ctrl+o"
			}, {
				name: "Save",
				action: p.Save,
				key: "ctrl+s",
				disabled: !1
			}, {
				name: "Save As...",
				action: p.SaveAs,
				key: "ctrl+shift+s"
			}, {
				name: "---"
			}, {
				name: "Open File With...",
				items: function() {
					return $fs.utils.getMenuOpenWith(a.filePath)
				}
			}, {
				name: "Open Containing Folder",
				key: "ctrl+alt+enter",
				action: function() {
					setTimeout(function() {
						$explorer(a.filePath)
					}, 0)
				}
			}, {
				name: "---"
			}, {
				name: "Quit",
				action: p.Quit
			}]
		}];
		if(a.undo && t.push({
				name: "Edit",
				items: [{
					name: "Undo",
					action: p.Undo,
					key: "ctrl+z"
				}, {
					name: "Redo",
					action: p.Redo,
					key: "ctrl+y"
				}]
			}), a.help) {
			var h = [];
			a.help.instructions && h.push({
				name: "Instructions",
				action: function() {
					$alert.help({
						title: "Instructions",
						html: a.help.instructions
					})
				}
			}), a.help.about && h.push({
				name: "About",
				action: function() {
					"string" == typeof a.help.about && (a.help.about = {
						msg: a.help.about
					}), $alert({
						title: "About",
						msg: a.help.about.msg,
						img: a.help.about.img || u.icon || null,
						onopen: $noop
					})
				}
			}), t.push({
				name: "Help",
				items: h
			})
		}
		a.about && t.push({
			name: "About",
			action: function() {
				"string" == typeof a.about && (a.about = {
					msg: a.about
				}), $alert({
					title: "About",
					msg: a.about.msg,
					img: a.about.img || u.icon || null,
					onopen: $noop
				})
			}
		});
		var d = {};
		if(a.nodeType && 1 === a.nodeType) {
			var v = a;
			l = (a = e).create(v)
		}
		else "function" == typeof a.create ? (d.url = null, d.onopen = function() {
			this.el.footer.firstChild && (this.el.footer.firstChild.className = "ui_editor__footer skin_base_text_info"), l = a.create(this.el.body), a.filePath ? m(a.filePath) : l.setValue("")
		}) : (d.url = d.url + (a.filePath ? "?path=" + a.filePath : ""), d.onready = function() {
			this.el.footer.firstChild && (this.el.footer.firstChild.className = "ui_editor__footer skin_base_text_info");
			var e = this.el.iframe;
			e && e.contentWindow.$iframeInit && (l = e.contentWindow.$iframeInit.call(this), a.filePath ? m(a.filePath) : l.setValue && l.setValue(""))
		}), this.app.icon && (d.icon = this.app.icon), d.menu = t, d.footer = "&nbsp", d.title = (a.filePath ? a.filePath + " - " : "") + this.app.name, i = $window.call(this, $extend(d, a.window))
	}
});
///home/zo/__/www/win3/public/42/js/loader.js
! function(n) {
	"use strict";
	var t = n.$noop || function() {},
		e = {
			onpass: t,
			onfail: t
		};

	function c(n) {
		document.body.appendChild(n)
	}
	var a = function(n) {
			return new Promise(function(e, o) {
				var r = document.createElement("script");
				r.className = "js_dynamic-deps", r.type = "text/javascript", r.charset = "utf-8", r.async = !1, r.defer = !0, r.onload = r.onreadystatechange = function(n, t) {
					r.readyState && !/loaded|complete/.test(r.readyState) || (t ? o("script not loaded correctly (abort)") : e(r))
				}, r.onerror = function() {
					console.log(456), o("script not loaded correctly")
				}, c(r), r.src = n
			})
		},
		s = function(o) {
			return new Promise(function(n, t) {
				var e = document.createElement("link");
				e.className = "js_dynamic-deps", e.charset = "utf-8", e.rel = "stylesheet", e.href = o, c(e), n(e)
			})
		},
		u = function(n) {
			return new Promise(function(t, e) {
				$ajax.get(n).done(function(n) {
					t(n)
				}).fail(function(n) {
					e("ajax error: " + n.status + " " + n.statusText)
				})
			})
		},
		i = function(e) {
			return e ? new Promise(function(n, t) {
				$audio({
					urls: [e],
					buffer: !1,
					onload: function() {
						n(this)
					},
					onloaderror: function() {
						t("sound not loaded correctly")
					}
				})
			}) : Promise.resolve({
				play: t,
				pause: t
			})
		};

	function o(n, o) {
		var r = [];
		return n.forEach(function(n) {
			var t = $url.getExtention(n);
			"js" === t ? r.push(a(n)) : "css" === t ? r.push(s(n)) : /txt|html|php|json|xml/.test(t) ? r.push(u(n)) : /mp3|opus|ogg|wav|aac|m4a|mp4|weba/.test(t) && r.push(i(n))
		}), new Promise(function(t, e) {
			Promise.all(r).then(function(n) {
				"function" == typeof o && o.apply(null, n), t(n)
			}).catch(function(n) {
				e(n)
			})
		})
	}
	o.script = function(n) {
		return a(n)
	}, o.css = function(n) {
		return s(n)
	}, o.audio = function(n) {
		return i(n)
	}, o.config = function(n) {
		$extend(e, n)
	}, n.$loader = o
}(this);
