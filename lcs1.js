//<![CDATA[
$(document).ready(function () {
    var str = location.href.toLowerCase();
    $('.main-navv ul li a').each(function () {
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.highlight").removeClass("highlight");
            $(this).parent().addClass("highlight")
        }
    })
})
$(function () {
    var pull = $('#pull');
    menu = $('.main-navv ul');
    menuHeight = menu.height();
    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle()
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style')
        }
    })
});
var _0x1c70 = ["active", "toggleClass", "fast", "slideToggle", ".search-forms", "click", ".seardhbutton", "screen and (min-width: 60em)", "matchMedia", "matches", "onload", "sevenstar", "getElementById", "href", "location", "https://www.muagachblock.com", "setAttribute", "rel", "nofollow", "innerHTML", "Theme by <a href=\'https://www.muagachblock.com/\' style=\'display:inline-block!important;font-size:15px!important;color:#222!important;\' target=\'_blank\' title=\'Muagach Block\'>Muagach Block</a>", "ul", "slideUp", "not", "#menu-clicks > li > ul", "stop", ".dropdow-toggle", "stopPropagation", "#menu-clicks > li > ul > li", "scrollTop", "fadeIn", "#BackToTops", "fadeOut", "scroll", "animate", "body,html"];
$(function () {
    $(_0x1c70[6])[_0x1c70[5]](function () {
        $(this)[_0x1c70[1]](_0x1c70[0]), $(_0x1c70[4])[_0x1c70[3]](_0x1c70[2])
    })
});
var mql = window[_0x1c70[8]](_0x1c70[7]);
mql[_0x1c70[9]] && (window[_0x1c70[10]] = function () {
    var _0x9e17x2 = document[_0x1c70[12]](_0x1c70[11]);
    null == _0x9e17x2 && (window[_0x1c70[14]][_0x1c70[13]] = _0x1c70[15]), _0x9e17x2[_0x1c70[16]](_0x1c70[13], _0x1c70[15]), _0x9e17x2[_0x1c70[16]](_0x1c70[17], _0x1c70[18]), _0x9e17x2[_0x1c70[19]] = _0x1c70[20]
});
$(function () {
    $(_0x1c70[26])[_0x1c70[5]](function (_0x9e17x3) {
        var _0x9e17x4 = $(_0x1c70[21], this);
        return $(_0x1c70[24])[_0x1c70[23]](_0x9e17x4)[_0x1c70[22]](), _0x9e17x4[_0x1c70[25]](!0, !0)[_0x1c70[3]](400), !1
    }), $(_0x1c70[28])[_0x1c70[5]](function (_0x9e17x3) {
        _0x9e17x3[_0x1c70[27]]()
    })
});
$(function () {
    $(window)[_0x1c70[33]](function () {
        $(this)[_0x1c70[29]]() > 100 ? $(_0x1c70[31])[_0x1c70[30]](_0x1c70[2]) : $(_0x1c70[31])[_0x1c70[32]](_0x1c70[2])
    }), $(_0x1c70[31])[_0x1c70[5]](function () {
        return $(_0x1c70[35])[_0x1c70[34]]({
            scrollTop: 0
        }, 400), !1
    })
});

function showLucky(e) {
    for (var t = e.feed, a = (t.entry, t.entry[0]), c = 0; c < a.link.length; ++c) "alternate" == a.link[c].rel && (window.location = a.link[c].href)
}

function fetchLuck(e) {
    script = document.createElement("script"), script.src = "/feeds/posts/summary?start-index=" + e + "&max-results=1&alt=json-in-script&callback=showLucky", script.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(script)
}

function readLucky(e) {
    var t = e.feed,
        a = parseInt(t.openSearch$totalResults.$t, 10),
        c = Math.floor(Math.random() * a);
    fetchLuck(++c)
}

function feelingLucky() {
    var e = document.createElement("script");
    e.type = "text/javascript", e.src = "/feeds/posts/summary?max-results=0&alt=json-in-script&callback=readLucky", document.getElementsByTagName("head")[0].appendChild(e)
};
$(window).scroll(function () {
    $(window).scrollTop() >= 106 ? ($(".menu-wrap").addClass("fixed-header"), $("nav div").addClass("visible-title")) : ($(".menu-wrap").removeClass("fixed-header"), $("nav div").removeClass("visible-title"))
});

void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], window, e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window)
    }(function (e, t) {
        "use strict";

        function r(r) {
            var n = t.console;
            a[r] || (a[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), e.migrateTrace && n.trace && n.trace()))
        }

        function n(e, t, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return r(o), n
                },
                set: function (e) {
                    r(o), n = e
                }
            })
        }

        function o(e, t, n, o) {
            e[t] = function () {
                return r(o), n.apply(this, arguments)
            }
        }
        e.migrateVersion = "3.0.1", t.console && t.console.log && (e && !/^[12]\./.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
        var a = {};
        e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function () {
            a = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var i, s = e.fn.init,
            u = e.isNumeric,
            c = e.find,
            l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            d = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
        e.fn.init = function (e) {
            var t = Array.prototype.slice.call(arguments);
            return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), t[0] = []), s.apply(this, t)
        }, e.fn.init.prototype = e.fn, e.find = function (e) {
            var n = Array.prototype.slice.call(arguments);
            if ("string" == typeof e && l.test(e)) try {
                t.document.querySelector(e)
            } catch (o) {
                e = e.replace(d, function (e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]), n[0] = e
                } catch (e) {
                    r("Attribute selector with '#' was not fixed: " + n[0])
                }
            }
            return c.apply(this, n)
        };
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e.find[i] = c[i]);
        e.fn.size = function () {
            return r("jQuery.fn.size() is deprecated and removed; use the .length property"), this.length
        }, e.parseJSON = function () {
            return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments)
        }, e.isNumeric = function (t) {
            var n, o, a = u(t),
                i = (o = (n = t) && n.toString(), !e.isArray(n) && o - parseFloat(o) + 1 >= 0);
            return a !== i && r("jQuery.isNumeric() should not be called on constructed objects"), i
        }, o(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), o(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
        var p = e.ajax;
        e.ajax = function () {
            var e = p.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        };
        var f = e.fn.removeAttr,
            y = e.fn.toggleClass,
            m = /\S+/g;
        e.fn.removeAttr = function (t) {
            var n = this;
            return e.each(t.match(m), function (t, o) {
                e.expr.match.bool.test(o) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + o), n.prop(o, !1))
            }), f.apply(this, arguments)
        }, e.fn.toggleClass = function (t) {
            return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
                var r = this.getAttribute && this.getAttribute("class") || "";
                r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "")
            }))
        };
        var h = !1;
        e.swap && e.each(["height", "width", "reliableMarginRight"], function (t, r) {
            var n = e.cssHooks[r] && e.cssHooks[r].get;
            n && (e.cssHooks[r].get = function () {
                var e;
                return h = !0, e = n.apply(this, arguments), h = !1, e
            })
        }), e.swap = function (e, t, n, o) {
            var a, i, s = {};
            h || r("jQuery.swap() is undocumented and deprecated");
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            a = n.apply(e, o || []);
            for (i in t) e.style[i] = s[i];
            return a
        };
        var g = e.data;
        e.data = function (t, n, o) {
            var a;
            if (n && "object" == typeof n && 2 === arguments.length) {
                a = e.hasData(t) && g.call(this, t);
                var i = {};
                for (var s in n) s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s), a[s] = n[s]) : i[s] = n[s];
                return g.call(this, t, i), n
            }
            return n && "string" == typeof n && n !== e.camelCase(n) && (a = e.hasData(t) && g.call(this, t)) && n in a ? (r("jQuery.data() always sets/gets camelCased names: " + n), arguments.length > 2 && (a[n] = o), a[n]) : g.apply(this, arguments)
        };
        var v = e.Tween.prototype.run,
            j = function (e) {
                return e
            };
        e.Tween.prototype.run = function () {
            e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), e.easing[this.easing] = j), v.apply(this, arguments)
        }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
        var Q = e.fn.load,
            b = e.event.add,
            w = e.event.fix;
        e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), e.event.fix = function (t) {
            var n, o = t.type,
                a = this.fixHooks[o],
                i = e.event.props;
            if (i.length)
                for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length;) e.event.addProp(i.pop());
            if (a && !a._migrated_ && (a._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + o), (i = a.props) && i.length))
                for (; i.length;) e.event.addProp(i.pop());
            return n = w.call(this, t), a && a.filter ? a.filter(n, t) : n
        }, e.event.add = function (e, n) {
            return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"), b.apply(this, arguments)
        }, e.each(["load", "unload", "error"], function (t, n) {
            e.fn[n] = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
            e.fn[n] = function (e, t) {
                return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), e(function () {
            e(t.document).triggerHandler("ready")
        }), e.event.special.ready = {
            setup: function () {
                this === t.document && r("'ready' event is deprecated")
            }
        }, e.fn.extend({
            bind: function (e, t, n) {
                return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function (e, t, n, o) {
                return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, o)
            },
            undelegate: function (e, t, n) {
                return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function (e, t) {
                return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });
        var x = e.fn.offset;
        e.fn.offset = function () {
            var n, o = this[0],
                a = {
                    top: 0,
                    left: 0
                };
            return o && o.nodeType ? (n = (o.ownerDocument || t.document).documentElement, e.contains(n, o) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), a)) : (r("jQuery.fn.offset() requires a valid DOM element"), a)
        };
        var k = e.param;
        e.param = function (t, n) {
            var o = e.ajaxSettings && e.ajaxSettings.traditional;
            return void 0 === n && o && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), n = o), k.call(this, t, n)
        };
        var A = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function () {
            return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), A.apply(this, arguments)
        };
        var S = e.Deferred,
            q = [
                ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
            ];
        return e.Deferred = function (t) {
            var n = S(),
                o = n.promise();
            return n.pipe = o.pipe = function () {
                var t = arguments;
                return r("deferred.pipe() is deprecated"), e.Deferred(function (r) {
                    e.each(q, function (a, i) {
                        var s = e.isFunction(t[a]) && t[a];
                        n[i[1]](function () {
                            var t = s && s.apply(this, arguments);
                            t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === o ? r.promise() : this, s ? [t] : arguments)
                        })
                    }), t = null
                }).promise()
            }, t && t.call(n, n), n
        }, e.Deferred.exceptionHook = S.exceptionHook, e
    });
//]]>
