/*
* jQuery JavaScript Library v1.4.2
* http://jquery.com/
*
* Copyright 2010, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* Includes Sizzle.js
* http://sizzlejs.com/
* Copyright 2010, The Dojo Foundation
* Released under the MIT, BSD, and GPL Licenses.
*
* Date: Sat Feb 13 22:33:48 2010 -0500
*/
(function (aH, H) {
    var e = function (aY, aZ) {
        return new e.fn.init(aY, aZ)
    },
        k = aH.jQuery,
        at = aH.$,
        x = aH.document,
        S, O = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
        aN = /^.[^:#\[\.,]*$/,
        aL = /\S/,
        n = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
        aB = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        ax = navigator.userAgent,
        af, aq = false,
        au = [],
        aI, b = Object.prototype.toString,
        ao = Object.prototype.hasOwnProperty,
        ar = Array.prototype.push,
        al = Array.prototype.slice,
        J = Array.prototype.indexOf;
    e.fn = e.prototype = {
        init: function (aY, a0) {
            var a1, aZ, a2, a3;
            if (!aY) {
                return this
            }
            if (aY.nodeType) {
                this.context = this[0] = aY;
                this.length = 1;
                return this
            }
            if (aY === "body" && !a0) {
                this.context = x;
                this[0] = x.body;
                this.selector = "body";
                this.length = 1;
                return this
            }
            if (typeof aY === "string") {
                a1 = O.exec(aY);
                if (a1 && (a1[1] || !a0)) {
                    if (a1[1]) {
                        a3 = (a0 ? a0.ownerDocument || a0 : x);
                        a2 = aB.exec(aY);
                        if (a2) {
                            if (e.isPlainObject(a0)) {
                                aY = [x.createElement(a2[1])];
                                e.fn.attr.call(aY, a0, true)
                            } else {
                                aY = [a3.createElement(a2[1])]
                            }
                        } else {
                            a2 = P([a1[1]], [a3]);
                            aY = (a2.cacheable ? a2.fragment.cloneNode(true) : a2.fragment).childNodes
                        }
                        return e.merge(this, aY)
                    } else {
                        aZ = x.getElementById(a1[2]);
                        if (aZ) {
                            if (aZ.id !== a1[2]) {
                                return S.find(aY)
                            }
                            this.length = 1;
                            this[0] = aZ
                        }
                        this.context = x;
                        this.selector = aY;
                        return this
                    }
                } else {
                    if (!a0 && /^\w+$/.test(aY)) {
                        this.selector = aY;
                        this.context = x;
                        aY = x.getElementsByTagName(aY);
                        return e.merge(this, aY)
                    } else {
                        if (!a0 || a0.jquery) {
                            return (a0 || S).find(aY)
                        } else {
                            return e(a0).find(aY)
                        }
                    }
                }
            } else {
                if (e.isFunction(aY)) {
                    return S.ready(aY)
                }
            }
            if (aY.selector !== H) {
                this.selector = aY.selector;
                this.context = aY.context
            }
            return e.makeArray(aY, this)
        },
        selector: "",
        jquery: "1.4.2",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return al.call(this, 0)
        },
        get: function (aY) {
            return aY == null ? this.toArray() : (aY < 0 ? this.slice(aY)[0] : this[aY])
        },
        pushStack: function (a0, a1, aZ) {
            var aY = e();
            if (e.isArray(a0)) {
                ar.apply(aY, a0)
            } else {
                e.merge(aY, a0)
            }
            aY.prevObject = this;
            aY.context = this.context;
            if (a1 === "find") {
                aY.selector = this.selector + (this.selector ? " " : "") + aZ
            } else {
                if (a1) {
                    aY.selector = this.selector + "." + a1 + "(" + aZ + ")"
                }
            }
            return aY
        },
        each: function (aY, aZ) {
            return e.each(this, aY, aZ)
        },
        ready: function (aY) {
            e.bindReady();
            if (e.isReady) {
                aY.call(x, e)
            } else {
                if (au) {
                    au.push(aY)
                }
            }
            return this
        },
        eq: function (aY) {
            return aY === -1 ? this.slice(aY) : this.slice(aY, +aY + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(al.apply(this, arguments), "slice", al.call(arguments).join(","))
        },
        map: function (aY) {
            return this.pushStack(e.map(this, function (aZ, a0) {
                return aY.call(aZ, a0, aZ)
            }))
        },
        end: function () {
            return this.prevObject || e(null)
        },
        push: ar,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function () {
        var a3 = arguments[0] || {},
            aZ = 1,
            a4 = arguments.length,
            aY = false,
            a0, a2, a5, a6;
        if (typeof a3 === "boolean") {
            aY = a3;
            a3 = arguments[1] || {};
            aZ = 2
        }
        if (typeof a3 !== "object" && !e.isFunction(a3)) {
            a3 = {}
        }
        if (a4 === aZ) {
            a3 = this;
            --aZ
        }
        for (; aZ < a4; aZ++) {
            if ((a0 = arguments[aZ]) != null) {
                for (a2 in a0) {
                    a5 = a3[a2];
                    a6 = a0[a2];
                    if (a3 === a6) {
                        continue
                    }
                    if (aY && a6 && (e.isPlainObject(a6) || e.isArray(a6))) {
                        var a1 = a5 && (e.isPlainObject(a5) || e.isArray(a5)) ? a5 : e.isArray(a6) ? [] : {};
                        a3[a2] = e.extend(aY, a1, a6)
                    } else {
                        if (a6 !== H) {
                            a3[a2] = a6
                        }
                    }
                }
            }
        }
        return a3
    };
    e.extend({
        noConflict: function (aY) {
            aH.$ = at;
            if (aY) {
                aH.jQuery = k
            }
            return e
        },
        isReady: false,
        ready: function () {
            if (!e.isReady) {
                if (!x.body) {
                    return setTimeout(e.ready, 13)
                }
                e.isReady = true;
                if (au) {
                    var aY, aZ = 0;
                    while ((aY = au[aZ++])) {
                        aY.call(x, e)
                    }
                    au = null
                }
                if (e.fn.triggerHandler) {
                    e(x).triggerHandler("ready")
                }
            }
        },
        bindReady: function () {
            if (aq) {
                return
            }
            aq = true;
            if (x.readyState === "complete") {
                return e.ready()
            }
            if (x.addEventListener) {
                x.addEventListener("DOMContentLoaded", aI, false);
                aH.addEventListener("load", e.ready, false)
            } else {
                if (x.attachEvent) {
                    x.attachEvent("onreadystatechange", aI);
                    aH.attachEvent("onload", e.ready);
                    var aZ = false;
                    try {
                        aZ = aH.frameElement == null
                    } catch (aY) { }
                    if (x.documentElement.doScroll && aZ) {
                        j()
                    }
                }
            }
        },
        isFunction: function (aY) {
            return b.call(aY) === "[object Function]"
        },
        isArray: function (aY) {
            return b.call(aY) === "[object Array]"
        },
        isPlainObject: function (aZ) {
            if (!aZ || b.call(aZ) !== "[object Object]" || aZ.nodeType || aZ.setInterval) {
                return false
            }
            if (aZ.constructor && !ao.call(aZ, "constructor") && !ao.call(aZ.constructor.prototype, "isPrototypeOf")) {
                return false
            }
            var aY;
            for (aY in aZ) { }
            return aY === H || ao.call(aZ, aY)
        },
        isEmptyObject: function (aZ) {
            for (var aY in aZ) {
                return false
            }
            return true
        },
        error: function (aY) {
            throw aY
        },
        parseJSON: function (aY) {
            if (typeof aY !== "string" || !aY) {
                return null
            }
            aY = e.trim(aY);
            if (/^[\],:{}\s]*$/.test(aY.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return aH.JSON && aH.JSON.parse ? aH.JSON.parse(aY) : (new Function("return " + aY))()
            } else {
                e.error("Invalid JSON: " + aY)
            }
        },
        noop: function () { },
        globalEval: function (aZ) {
            if (aZ && aL.test(aZ)) {
                var aY = x.getElementsByTagName("head")[0] || x.documentElement,
                    a0 = x.createElement("script");
                a0.type = "text/javascript";
                if (e.support.scriptEval) {
                    a0.appendChild(x.createTextNode(aZ))
                } else {
                    a0.text = aZ
                }
                aY.insertBefore(a0, aY.firstChild);
                aY.removeChild(a0)
            }
        },
        nodeName: function (aY, aZ) {
            return aY.nodeName && aY.nodeName.toUpperCase() === aZ.toUpperCase()
        },
        each: function (a2, a0, a5) {
            var a4, aZ = 0,
                a3 = a2.length,
                a1 = a3 === H || e.isFunction(a2);
            if (a5) {
                if (a1) {
                    for (a4 in a2) {
                        if (a0.apply(a2[a4], a5) === false) {
                            break
                        }
                    }
                } else {
                    for (; aZ < a3; ) {
                        if (a0.apply(a2[aZ++], a5) === false) {
                            break
                        }
                    }
                }
            } else {
                if (a1) {
                    for (a4 in a2) {
                        if (a0.call(a2[a4], a4, a2[a4]) === false) {
                            break
                        }
                    }
                } else {
                    for (var aY = a2[0]; aZ < a3 && a0.call(aY, aZ, aY) !== false; aY = a2[++aZ]) { }
                }
            }
            return a2
        },
        trim: function (aY) {
            return (aY || "").replace(n, "")
        },
        makeArray: function (aY, aZ) {
            var a0 = aZ || [];
            if (aY != null) {
                if (aY.length == null || typeof aY === "string" || e.isFunction(aY) || (typeof aY !== "function" && aY.setInterval)) {
                    ar.call(a0, aY)
                } else {
                    e.merge(a0, aY)
                }
            }
            return a0
        },
        inArray: function (a1, aY) {
            if (aY.indexOf) {
                return aY.indexOf(a1)
            }
            for (var aZ = 0, a0 = aY.length; aZ < a0; aZ++) {
                if (aY[aZ] === a1) {
                    return aZ
                }
            }
            return -1
        },
        merge: function (a1, aZ) {
            var a2 = a1.length,
                a0 = 0;
            if (typeof aZ.length === "number") {
                for (var aY = aZ.length; a0 < aY; a0++) {
                    a1[a2++] = aZ[a0]
                }
            } else {
                while (aZ[a0] !== H) {
                    a1[a2++] = aZ[a0++]
                }
            }
            a1.length = a2;
            return a1
        },
        grep: function (a2, aZ, a3) {
            var a1 = [];
            for (var aY = 0, a0 = a2.length; aY < a0; aY++) {
                if (!a3 !== !aZ(a2[aY], aY)) {
                    a1.push(a2[aY])
                }
            }
            return a1
        },
        map: function (a4, a0, a1) {
            var a3 = [],
                aY;
            for (var aZ = 0, a2 = a4.length; aZ < a2; aZ++) {
                aY = a0(a4[aZ], aZ, a1);
                if (aY != null) {
                    a3[a3.length] = aY
                }
            }
            return a3.concat.apply([], a3)
        },
        guid: 1,
        proxy: function (aZ, aY, a0) {
            if (arguments.length === 2) {
                if (typeof aY === "string") {
                    a0 = aZ;
                    aZ = a0[aY];
                    aY = H
                } else {
                    if (aY && !e.isFunction(aY)) {
                        a0 = aY;
                        aY = H
                    }
                }
            }
            if (!aY && aZ) {
                aY = function () {
                    return aZ.apply(a0 || this, arguments)
                }
            }
            if (aZ) {
                aY.guid = aZ.guid = aZ.guid || aY.guid || e.guid++
            }
            return aY
        },
        uaMatch: function (aZ) {
            aZ = aZ.toLowerCase();
            var aY = /(webkit)[ \/]([\w.]+)/.exec(aZ) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(aZ) || /(msie) ([\w.]+)/.exec(aZ) || !/compatible/.test(aZ) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(aZ) || [];
            return {
                browser: aY[1] || "",
                version: aY[2] || "0"
            }
        },
        browser: {}
    });
    af = e.uaMatch(ax);
    if (af.browser) {
        e.browser[af.browser] = true;
        e.browser.version = af.version
    }
    if (e.browser.webkit) {
        e.browser.safari = true
    }
    if (J) {
        e.inArray = function (aY, aZ) {
            return J.call(aZ, aY)
        }
    }
    S = e(x);
    if (x.addEventListener) {
        aI = function () {
            x.removeEventListener("DOMContentLoaded", aI, false);
            e.ready()
        }
    } else {
        if (x.attachEvent) {
            aI = function () {
                if (x.readyState === "complete") {
                    x.detachEvent("onreadystatechange", aI);
                    e.ready()
                }
            }
        }
    }
    function j() {
        if (e.isReady) {
            return
        }
        try {
            x.documentElement.doScroll("left")
        } catch (aY) {
            setTimeout(j, 1);
            return
        }
        e.ready()
    }
    function D(aZ, aY) {
        if (aY.src) {
            e.ajax({
                url: aY.src,
                async: false,
                dataType: "script"
            })
        } else {
            e.globalEval(aY.text || aY.textContent || aY.innerHTML || "")
        }
        if (aY.parentNode) {
            aY.parentNode.removeChild(aY)
        }
    }
    function ah(a0, a4, aY, a3, a5, a6) {
        var a2 = a0.length;
        if (typeof a4 === "object") {
            for (var a1 in a4) {
                ah(a0, a1, a4[a1], a3, a5, aY)
            }
            return a0
        }
        if (aY !== H) {
            a3 = !a6 && a3 && e.isFunction(aY);
            for (var aZ = 0; aZ < a2; aZ++) {
                a5(a0[aZ], a4, a3 ? aY.call(a0[aZ], aZ, a5(a0[aZ], a4)) : aY, a6)
            }
            return a0
        }
        return a2 ? a5(a0[0], a4) : H
    }
    function A() {
        return (new Date).getTime()
    } (function () {
        e.support = {};
        var a4 = x.documentElement,
            aY = x.createElement("script"),
            a0 = x.createElement("div"),
            a3 = "script" + A();
        a0.style.display = "none";
        a0.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var a6 = a0.getElementsByTagName("*"),
            a5 = a0.getElementsByTagName("a")[0];
        if (!a6 || !a6.length || !a5) {
            return
        }
        e.support = {
            leadingWhitespace: a0.firstChild.nodeType === 3,
            tbody: !a0.getElementsByTagName("tbody").length,
            htmlSerialize: !!a0.getElementsByTagName("link").length,
            style: /red/.test(a5.getAttribute("style")),
            hrefNormalized: a5.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(a5.style.opacity),
            cssFloat: !!a5.style.cssFloat,
            checkOn: a0.getElementsByTagName("input")[0].value === "on",
            optSelected: x.createElement("select").appendChild(x.createElement("option")).selected,
            parentNode: a0.removeChild(a0.appendChild(x.createElement("div"))).parentNode === null,
            deleteExpando: true,
            checkClone: false,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        aY.type = "text/javascript";
        try {
            aY.appendChild(x.createTextNode("window." + a3 + "=1;"))
        } catch (a7) { }
        a4.insertBefore(aY, a4.firstChild);
        if (aH[a3]) {
            e.support.scriptEval = true;
            delete aH[a3]
        }
        try {
            delete aY.test
        } catch (a7) {
            e.support.deleteExpando = false
        }
        a4.removeChild(aY);
        if (a0.attachEvent && a0.fireEvent) {
            a0.attachEvent("onclick", function a2() {
                e.support.noCloneEvent = false;
                a0.detachEvent("onclick", a2)
            });
            a0.cloneNode(true).fireEvent("onclick")
        }
        a0 = x.createElement("div");
        a0.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
        var a1 = x.createDocumentFragment();
        a1.appendChild(a0.firstChild);
        e.support.checkClone = a1.cloneNode(true).cloneNode(true).lastChild.checked;
        e(function () {
            var a8 = x.createElement("div");
            a8.style.width = a8.style.paddingLeft = "1px";
            x.body.appendChild(a8);
            e.boxModel = e.support.boxModel = a8.offsetWidth === 2;
            x.body.removeChild(a8).style.display = "none";
            a8 = null
        });
        var aZ = function (a8) {
            var a9 = x.createElement("div");
            a8 = "on" + a8;
            var ba = (a8 in a9);
            if (!ba) {
                a9.setAttribute(a8, "return;");
                ba = typeof a9[a8] === "function"
            }
            a9 = null;
            return ba
        };
        e.support.submitBubbles = aZ("submit");
        e.support.changeBubbles = aZ("change");
        a4 = aY = a0 = a6 = a5 = null
    })();
    e.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    var i = "jQuery" + A(),
        g = 0,
        aR = {};
    e.extend({
        cache: {},
        expando: i,
        noData: {
            embed: true,
            object: true,
            applet: true
        },
        data: function (aZ, a2, aY) {
            if (aZ.nodeName && e.noData[aZ.nodeName.toLowerCase()]) {
                return
            }
            aZ = aZ == aH ? aR : aZ;
            var a0 = aZ[i],
                a1 = e.cache,
                a3;
            if (!a0 && typeof a2 === "string" && aY === H) {
                return null
            }
            if (!a0) {
                a0 = ++g
            }
            if (typeof a2 === "object") {
                aZ[i] = a0;
                a3 = a1[a0] = e.extend(true, {},
                a2)
            } else {
                if (!a1[a0]) {
                    aZ[i] = a0;
                    a1[a0] = {}
                }
            }
            a3 = a1[a0];
            if (aY !== H) {
                a3[a2] = aY
            }
            return typeof a2 === "string" ? a3[a2] : a3
        },
        removeData: function (a0, a2) {
            if (a0.nodeName && e.noData[a0.nodeName.toLowerCase()]) {
                return
            }
            a0 = a0 == aH ? aR : a0;
            var aY = a0[i],
                aZ = e.cache,
                a1 = aZ[aY];
            if (a2) {
                if (a1) {
                    delete a1[a2];
                    if (e.isEmptyObject(a1)) {
                        e.removeData(a0)
                    }
                }
            } else {
                if (e.support.deleteExpando) {
                    delete a0[e.expando]
                } else {
                    if (a0.removeAttribute) {
                        a0.removeAttribute(e.expando)
                    }
                }
                delete aZ[aY]
            }
        }
    });
    e.fn.extend({
        data: function (a1, aY) {
            if (typeof a1 === "undefined" && this.length) {
                return e.data(this[0])
            } else {
                if (typeof a1 === "object") {
                    return this.each(function () {
                        e.data(this, a1)
                    })
                }
            }
            var a0 = a1.split(".");
            a0[1] = a0[1] ? "." + a0[1] : "";
            if (aY === H) {
                var aZ = this.triggerHandler("getData" + a0[1] + "!", [a0[0]]);
                if (aZ === H && this.length) {
                    aZ = e.data(this[0], a1)
                }
                return aZ === H && a0[1] ? this.data(a0[0]) : aZ
            } else {
                return this.trigger("setData" + a0[1] + "!", [a0[0], aY]).each(function () {
                    e.data(this, a1, aY)
                })
            }
        },
        removeData: function (aY) {
            return this.each(function () {
                e.removeData(this, aY)
            })
        }
    });
    e.extend({
        queue: function (a1, a0, aZ) {
            if (!a1) {
                return
            }
            a0 = (a0 || "fx") + "queue";
            var aY = e.data(a1, a0);
            if (!aZ) {
                return aY || []
            }
            if (!aY || e.isArray(aZ)) {
                aY = e.data(a1, a0, e.makeArray(aZ))
            } else {
                aY.push(aZ)
            }
            return aY
        },
        dequeue: function (a0, aZ) {
            aZ = aZ || "fx";
            var aY = e.queue(a0, aZ),
                a1 = aY.shift();
            if (a1 === "inprogress") {
                a1 = aY.shift()
            }
            if (a1) {
                if (aZ === "fx") {
                    aY.unshift("inprogress")
                }
                a1.call(a0, function () {
                    e.dequeue(a0, aZ)
                })
            }
        }
    });
    e.fn.extend({
        queue: function (aZ, aY) {
            if (typeof aZ !== "string") {
                aY = aZ;
                aZ = "fx"
            }
            if (aY === H) {
                return e.queue(this[0], aZ)
            }
            return this.each(function (a0, a2) {
                var a1 = e.queue(this, aZ, aY);
                if (aZ === "fx" && a1[0] !== "inprogress") {
                    e.dequeue(this, aZ)
                }
            })
        },
        dequeue: function (aY) {
            return this.each(function () {
                e.dequeue(this, aY)
            })
        },
        delay: function (aY, aZ) {
            aY = e.fx ? e.fx.speeds[aY] || aY : aY;
            aZ = aZ || "fx";
            return this.queue(aZ, function () {
                var a0 = this;
                setTimeout(function () {
                    e.dequeue(a0, aZ)
                },
                aY)
            })
        },
        clearQueue: function (aY) {
            return this.queue(aY || "fx", [])
        }
    });
    var q = /[\n\t]/g,
        aa = /\s+/,
        f = /\r/g,
        G = /href|src|style/,
        aA = /(button|input)/i,
        N = /(button|input|object|select|textarea)/i,
        p = /^(a|area)$/i,
        ae = /radio|checkbox/;
    e.fn.extend({
        attr: function (aY, aZ) {
            return ah(this, aY, aZ, true, e.attr)
        },
        removeAttr: function (aZ, aY) {
            return this.each(function () {
                e.attr(this, aZ, "");
                if (this.nodeType === 1) {
                    this.removeAttribute(aZ)
                }
            })
        },
        addClass: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a8) {
                    var a7 = e(this);
                    a7.addClass(aY.call(this, a8, a7.attr("class")))
                })
            }
            if (aY && typeof aY === "string") {
                var a1 = (aY || "").split(aa);
                for (var aZ = 0, a2 = this.length; aZ < a2; aZ++) {
                    var a0 = this[aZ];
                    if (a0.nodeType === 1) {
                        if (!a0.className) {
                            a0.className = aY
                        } else {
                            var a6 = " " + a0.className + " ",
                                a5 = a0.className;
                            for (var a4 = 0, a3 = a1.length; a4 < a3; a4++) {
                                if (a6.indexOf(" " + a1[a4] + " ") < 0) {
                                    a5 += " " + a1[a4]
                                }
                            }
                            a0.className = e.trim(a5)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a7) {
                    var a6 = e(this);
                    a6.removeClass(aY.call(this, a7, a6.attr("class")))
                })
            }
            if ((aY && typeof aY === "string") || aY === H) {
                var a1 = (aY || "").split(aa);
                for (var aZ = 0, a2 = this.length; aZ < a2; aZ++) {
                    var a0 = this[aZ];
                    if (a0.nodeType === 1 && a0.className) {
                        if (aY) {
                            var a5 = (" " + a0.className + " ").replace(q, " ");
                            for (var a4 = 0, a3 = a1.length; a4 < a3; a4++) {
                                a5 = a5.replace(" " + a1[a4] + " ", " ")
                            }
                            a0.className = e.trim(a5)
                        } else {
                            a0.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (aY, a0) {
            var aZ = typeof aY,
                a1 = typeof a0 === "boolean";
            if (e.isFunction(aY)) {
                return this.each(function (a3) {
                    var a2 = e(this);
                    a2.toggleClass(aY.call(this, a3, a2.attr("class"), a0), a0)
                })
            }
            return this.each(function () {
                if (aZ === "string") {
                    var a5, a3 = 0,
                        a6 = e(this),
                        a4 = a0,
                        a2 = aY.split(aa);
                    while ((a5 = a2[a3++])) {
                        a4 = a1 ? a4 : !a6.hasClass(a5);
                        a6[a4 ? "addClass" : "removeClass"](a5)
                    }
                } else {
                    if (aZ === "undefined" || aZ === "boolean") {
                        if (this.className) {
                            e.data(this, "__className__", this.className)
                        }
                        this.className = this.className || aY === false ? "" : e.data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (aY) {
            var a0 = " " + aY + " ";
            for (var a1 = 0, aZ = this.length; a1 < aZ; a1++) {
                if ((" " + this[a1].className + " ").replace(q, " ").indexOf(a0) > -1) {
                    return true
                }
            }
            return false
        },
        val: function (aY) {
            if (aY === H) {
                var a3 = this[0];
                if (a3) {
                    if (e.nodeName(a3, "option")) {
                        return (a3.attributes.value || {}).specified ? a3.value : a3.text
                    }
                    if (e.nodeName(a3, "select")) {
                        var a5 = a3.selectedIndex,
                            a1 = [],
                            a0 = a3.options,
                            a6 = a3.type === "select-one";
                        if (a5 < 0) {
                            return null
                        }
                        for (var aZ = a6 ? a5 : 0, a7 = a6 ? a5 + 1 : a0.length; aZ < a7; aZ++) {
                            var a4 = a0[aZ];
                            if (a4.selected) {
                                aY = e(a4).val();
                                if (a6) {
                                    return aY
                                }
                                a1.push(aY)
                            }
                        }
                        return a1
                    }
                    if (ae.test(a3.type) && !e.support.checkOn) {
                        return a3.getAttribute("value") === null ? "on" : a3.value
                    }
                    return (a3.value || "").replace(f, "")
                }
                return H
            }
            var a2 = e.isFunction(aY);
            return this.each(function (a8) {
                var ba = e(this),
                    a9 = aY;
                if (this.nodeType !== 1) {
                    return
                }
                if (a2) {
                    a9 = aY.call(this, a8, ba.val())
                }
                if (typeof a9 === "number") {
                    a9 += ""
                }
                if (e.isArray(a9) && ae.test(this.type)) {
                    this.checked = e.inArray(ba.val(), a9) >= 0
                } else {
                    if (e.nodeName(this, "select")) {
                        var bb = e.makeArray(a9);
                        e("option", this).each(function () {
                            this.selected = e.inArray(e(this).val(), bb) >= 0
                        });
                        if (!bb.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = a9
                    }
                }
            })
        }
    });
    e.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (aZ, a4, aY, a7) {
            if (!aZ || aZ.nodeType === 3 || aZ.nodeType === 8) {
                return H
            }
            if (a7 && a4 in e.attrFn) {
                return e(aZ)[a4](aY)
            }
            var a6 = aZ.nodeType !== 1 || !e.isXMLDoc(aZ),
                a2 = aY !== H;
            a4 = a6 && e.props[a4] || a4;
            if (aZ.nodeType === 1) {
                var a5 = G.test(a4);
                if (a4 === "selected" && !e.support.optSelected) {
                    var a3 = aZ.parentNode;
                    if (a3) {
                        a3.selectedIndex;
                        if (a3.parentNode) {
                            a3.parentNode.selectedIndex
                        }
                    }
                }
                if (a4 in aZ && a6 && !a5) {
                    if (a2) {
                        if (a4 === "type" && aA.test(aZ.nodeName) && aZ.parentNode) {
                            e.error("type property can't be changed")
                        }
                        aZ[a4] = aY
                    }
                    if (e.nodeName(aZ, "form") && aZ.getAttributeNode(a4)) {
                        return aZ.getAttributeNode(a4).nodeValue
                    }
                    if (a4 === "tabIndex") {
                        var a0 = aZ.getAttributeNode("tabIndex");
                        return a0 && a0.specified ? a0.value : N.test(aZ.nodeName) || p.test(aZ.nodeName) && aZ.href ? 0 : H
                    }
                    return aZ[a4]
                }
                if (!e.support.style && a6 && a4 === "style") {
                    if (a2) {
                        aZ.style.cssText = "" + aY
                    }
                    return aZ.style.cssText
                }
                if (a2) {
                    aZ.setAttribute(a4, "" + aY)
                }
                var a1 = !e.support.hrefNormalized && a6 && a5 ? aZ.getAttribute(a4, 2) : aZ.getAttribute(a4);
                return a1 === null ? H : a1
            }
            return e.style(aZ, a4, aY)
        }
    });
    var ab = /\.(.*)$/,
        aD = function (aY) {
            return aY.replace(/[^\w\s\.\|`]/g, function (aZ) {
                return "\\" + aZ
            })
        };
    e.event = {
        add: function (a1, a9, a2, a7) {
            if (a1.nodeType === 3 || a1.nodeType === 8) {
                return
            }
            if (a1.setInterval && (a1 !== aH && !a1.frameElement)) {
                a1 = aH
            }
            var bb, ba;
            if (a2.handler) {
                bb = a2;
                a2 = bb.handler
            }
            if (!a2.guid) {
                a2.guid = e.guid++
            }
            var a6 = e.data(a1);
            if (!a6) {
                return
            }
            var a5 = a6.events = a6.events || {},
                a0 = a6.handle,
                a0;
            if (!a0) {
                a6.handle = a0 = function () {
                    return typeof e !== "undefined" && !e.event.triggered ? e.event.handle.apply(a0.elem, arguments) : H
                }
            }
            a0.elem = a1;
            a9 = a9.split(" ");
            var a4, a3 = 0,
                aY;
            while ((a4 = a9[a3++])) {
                ba = bb ? e.extend({},
                bb) : {
                    handler: a2,
                    data: a7
                };
                if (a4.indexOf(".") > -1) {
                    aY = a4.split(".");
                    a4 = aY.shift();
                    ba.namespace = aY.slice(0).sort().join(".")
                } else {
                    aY = [];
                    ba.namespace = ""
                }
                ba.type = a4;
                ba.guid = a2.guid;
                var a8 = a5[a4],
                    aZ = e.event.special[a4] || {};
                if (!a8) {
                    a8 = a5[a4] = [];
                    if (!aZ.setup || aZ.setup.call(a1, a7, aY, a0) === false) {
                        if (a1.addEventListener) {
                            a1.addEventListener(a4, a0, false)
                        } else {
                            if (a1.attachEvent) {
                                a1.attachEvent("on" + a4, a0)
                            }
                        }
                    }
                }
                if (aZ.add) {
                    aZ.add.call(a1, ba);
                    if (!ba.handler.guid) {
                        ba.handler.guid = a2.guid
                    }
                }
                a8.push(ba);
                e.event.global[a4] = true
            }
            a1 = null
        },
        global: {},
        remove: function (bf, bd, a1, a0) {
            if (bf.nodeType === 3 || bf.nodeType === 8) {
                return
            }
            var bb, a4, a8, a6 = 0,
                a5, aY, bc, aZ, a7, a9, a3, be = e.data(bf),
                ba = be && be.events;
            if (!be || !ba) {
                return
            }
            if (bd && bd.type) {
                a1 = bd.handler;
                bd = bd.type
            }
            if (!bd || typeof bd === "string" && bd.charAt(0) === ".") {
                bd = bd || "";
                for (a4 in ba) {
                    e.event.remove(bf, a4 + bd)
                }
                return
            }
            bd = bd.split(" ");
            while ((a4 = bd[a6++])) {
                a3 = a4;
                a9 = null;
                a5 = a4.indexOf(".") < 0;
                aY = [];
                if (!a5) {
                    aY = a4.split(".");
                    a4 = aY.shift();
                    bc = new RegExp("(^|\\.)" + e.map(aY.slice(0).sort(), aD).join("\\.(?:.*\\.)?") + "(\\.|$)")
                }
                a7 = ba[a4];
                if (!a7) {
                    continue
                }
                if (!a1) {
                    for (var a2 = 0; a2 < a7.length; a2++) {
                        a9 = a7[a2];
                        if (a5 || bc.test(a9.namespace)) {
                            e.event.remove(bf, a3, a9.handler, a2);
                            a7.splice(a2--, 1)
                        }
                    }
                    continue
                }
                aZ = e.event.special[a4] || {};
                for (var a2 = a0 || 0; a2 < a7.length; a2++) {
                    a9 = a7[a2];
                    if (a1.guid === a9.guid) {
                        if (a5 || bc.test(a9.namespace)) {
                            if (a0 == null) {
                                a7.splice(a2--, 1)
                            }
                            if (aZ.remove) {
                                aZ.remove.call(bf, a9)
                            }
                        }
                        if (a0 != null) {
                            break
                        }
                    }
                }
                if (a7.length === 0 || a0 != null && a7.length === 1) {
                    if (!aZ.teardown || aZ.teardown.call(bf, aY) === false) {
                        aM(bf, a4, be.handle)
                    }
                    bb = null;
                    delete ba[a4]
                }
            }
            if (e.isEmptyObject(ba)) {
                var bg = be.handle;
                if (bg) {
                    bg.elem = null
                }
                delete be.events;
                delete be.handle;
                if (e.isEmptyObject(be)) {
                    e.removeData(bf)
                }
            }
        },
        trigger: function (a6, aZ, a0) {
            var a5 = a6.type || a6,
                a3 = arguments[3];
            if (!a3) {
                a6 = typeof a6 === "object" ? a6[i] ? a6 : e.extend(e.Event(a5), a6) : e.Event(a5);
                if (a5.indexOf("!") >= 0) {
                    a6.type = a5 = a5.slice(0, -1);
                    a6.exclusive = true
                }
                if (!a0) {
                    a6.stopPropagation();
                    if (e.event.global[a5]) {
                        e.each(e.cache, function () {
                            if (this.events && this.events[a5]) {
                                e.event.trigger(a6, aZ, this.handle.elem)
                            }
                        })
                    }
                }
                if (!a0 || a0.nodeType === 3 || a0.nodeType === 8) {
                    return H
                }
                a6.result = H;
                a6.target = a0;
                aZ = e.makeArray(aZ);
                aZ.unshift(a6)
            }
            a6.currentTarget = a0;
            var a2 = e.data(a0, "handle");
            if (a2) {
                a2.apply(a0, aZ)
            }
            var a1 = a0.parentNode || a0.ownerDocument;
            try {
                if (!(a0 && a0.nodeName && e.noData[a0.nodeName.toLowerCase()])) {
                    if (a0["on" + a5] && a0["on" + a5].apply(a0, aZ) === false) {
                        a6.result = false
                    }
                }
            } catch (a8) { }
            if (!a6.isPropagationStopped() && a1) {
                e.event.trigger(a6, aZ, a1, true)
            } else {
                if (!a6.isDefaultPrevented()) {
                    var a4 = a6.target,
                        a7, aY = e.nodeName(a4, "a") && a5 === "click",
                        a9 = e.event.special[a5] || {};
                    if ((!a9._default || a9._default.call(a0, a6) === false) && !aY && !(a4 && a4.nodeName && e.noData[a4.nodeName.toLowerCase()])) {
                        try {
                            if (a4[a5]) {
                                a7 = a4["on" + a5];
                                if (a7) {
                                    a4["on" + a5] = null
                                }
                                e.event.triggered = true;
                                a4[a5]()
                            }
                        } catch (a8) { }
                        if (a7) {
                            a4["on" + a5] = a7
                        }
                        e.event.triggered = false
                    }
                }
            }
        },
        handle: function (a5) {
            var a6, a0, aY, a4, a7;
            a5 = arguments[0] = e.event.fix(a5 || aH.event);
            a5.currentTarget = this;
            a6 = a5.type.indexOf(".") < 0 && !a5.exclusive;
            if (!a6) {
                aY = a5.type.split(".");
                a5.type = aY.shift();
                a4 = new RegExp("(^|\\.)" + aY.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            var a7 = e.data(this, "events"),
                a0 = a7[a5.type];
            if (a7 && a0) {
                a0 = a0.slice(0);
                for (var a1 = 0, a2 = a0.length; a1 < a2; a1++) {
                    var aZ = a0[a1];
                    if (a6 || a4.test(aZ.namespace)) {
                        a5.handler = aZ.handler;
                        a5.data = aZ.data;
                        a5.handleObj = aZ;
                        var a3 = aZ.handler.apply(this, arguments);
                        if (a3 !== H) {
                            a5.result = a3;
                            if (a3 === false) {
                                a5.preventDefault();
                                a5.stopPropagation()
                            }
                        }
                        if (a5.isImmediatePropagationStopped()) {
                            break
                        }
                    }
                }
            }
            return a5.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a2) {
            if (a2[i]) {
                return a2
            }
            var aY = a2;
            a2 = e.Event(aY);
            for (var aZ = this.props.length, a1; aZ; ) {
                a1 = this.props[--aZ];
                a2[a1] = aY[a1]
            }
            if (!a2.target) {
                a2.target = a2.srcElement || x
            }
            if (a2.target.nodeType === 3) {
                a2.target = a2.target.parentNode
            }
            if (!a2.relatedTarget && a2.fromElement) {
                a2.relatedTarget = a2.fromElement === a2.target ? a2.toElement : a2.fromElement
            }
            if (a2.pageX == null && a2.clientX != null) {
                var a3 = x.documentElement,
                    a0 = x.body;
                a2.pageX = a2.clientX + (a3 && a3.scrollLeft || a0 && a0.scrollLeft || 0) - (a3 && a3.clientLeft || a0 && a0.clientLeft || 0);
                a2.pageY = a2.clientY + (a3 && a3.scrollTop || a0 && a0.scrollTop || 0) - (a3 && a3.clientTop || a0 && a0.clientTop || 0)
            }
            if (!a2.which && ((a2.charCode || a2.charCode === 0) ? a2.charCode : a2.keyCode)) {
                a2.which = a2.charCode || a2.keyCode
            }
            if (!a2.metaKey && a2.ctrlKey) {
                a2.metaKey = a2.ctrlKey
            }
            if (!a2.which && a2.button !== H) {
                a2.which = (a2.button & 1 ? 1 : (a2.button & 2 ? 3 : (a2.button & 4 ? 2 : 0)))
            }
            return a2
        },
        guid: 100000000,
        proxy: e.proxy,
        special: {
            ready: {
                setup: e.bindReady,
                teardown: e.noop
            },
            live: {
                add: function (aY) {
                    e.event.add(this, aY.origType, e.extend({},
                    aY, {
                        handler: ad
                    }))
                },
                remove: function (aY) {
                    var a0 = true,
                        aZ = aY.origType.replace(ab, "");
                    e.each(e.data(this, "events").live || [], function () {
                        if (aZ === this.origType.replace(ab, "")) {
                            a0 = false;
                            return false
                        }
                    });
                    if (a0) {
                        e.event.remove(this, aY.origType, ad)
                    }
                }
            },
            beforeunload: {
                setup: function (aZ, a0, aY) {
                    if (this.setInterval) {
                        this.onbeforeunload = aY
                    }
                    return false
                },
                teardown: function (aZ, aY) {
                    if (this.onbeforeunload === aY) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    var aM = x.removeEventListener ?
    function (a0, aZ, aY) {
        a0.removeEventListener(aZ, aY, false)
    } : function (a0, aZ, aY) {
        a0.detachEvent("on" + aZ, aY)
    };
    e.Event = function (aY) {
        if (!this.preventDefault) {
            return new e.Event(aY)
        }
        if (aY && aY.type) {
            this.originalEvent = aY;
            this.type = aY.type
        } else {
            this.type = aY
        }
        this.timeStamp = A();
        this[i] = true
    };

    function K() {
        return false
    }
    function aV() {
        return true
    }
    e.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = aV;
            var aY = this.originalEvent;
            if (!aY) {
                return
            }
            if (aY.preventDefault) {
                aY.preventDefault()
            }
            aY.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = aV;
            var aY = this.originalEvent;
            if (!aY) {
                return
            }
            if (aY.stopPropagation) {
                aY.stopPropagation()
            }
            aY.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = aV;
            this.stopPropagation()
        },
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K
    };
    var E = function (aZ) {
        var aY = aZ.relatedTarget;
        try {
            while (aY && aY !== this) {
                aY = aY.parentNode
            }
            if (aY !== this) {
                aZ.type = aZ.data;
                e.event.handle.apply(this, arguments)
            }
        } catch (a0) { }
    },
        Y = function (aY) {
            aY.type = aY.data;
            e.event.handle.apply(this, arguments)
        };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },


    function (aZ, aY) {
        e.event.special[aZ] = {
            setup: function (a0) {
                e.event.add(this, aY, a0 && a0.selector ? Y : E, aZ)
            },
            teardown: function (a0) {
                e.event.remove(this, aY, a0 && a0.selector ? Y : E)
            }
        }
    });
    if (!e.support.submitBubbles) {
        e.event.special.submit = {
            setup: function (aY, aZ) {
                if (this.nodeName.toLowerCase() !== "form") {
                    e.event.add(this, "click.specialSubmit", function (a2) {
                        var a1 = a2.target,
                            a0 = a1.type;
                        if ((a0 === "submit" || a0 === "image") && e(a1).closest("form").length) {
                            return Q("submit", this, arguments)
                        }
                    });
                    e.event.add(this, "keypress.specialSubmit", function (a2) {
                        var a1 = a2.target,
                            a0 = a1.type;
                        if ((a0 === "text" || a0 === "password") && e(a1).closest("form").length && a2.keyCode === 13) {
                            return Q("submit", this, arguments)
                        }
                    })
                } else {
                    return false
                }
            },
            teardown: function (aY) {
                e.event.remove(this, ".specialSubmit")
            }
        }
    }
    if (!e.support.changeBubbles) {
        var F = /textarea|input|select/i,
            a, r = function (aZ) {
                var aY = aZ.type,
                a0 = aZ.value;
                if (aY === "radio" || aY === "checkbox") {
                    a0 = aZ.checked
                } else {
                    if (aY === "select-multiple") {
                        a0 = aZ.selectedIndex > -1 ? e.map(aZ.options, function (a1) {
                            return a1.selected
                        }).join("-") : ""
                    } else {
                        if (aZ.nodeName.toLowerCase() === "select") {
                            a0 = aZ.selectedIndex
                        }
                    }
                }
                return a0
            },
            am = function am(a1) {
                var a0 = a1.target,
                aY, aZ;
                if (!F.test(a0.nodeName) || a0.readOnly) {
                    return
                }
                aY = e.data(a0, "_change_data");
                aZ = r(a0);
                if (a1.type !== "focusout" || a0.type !== "radio") {
                    e.data(a0, "_change_data", aZ)
                }
                if (aY === H || aZ === aY) {
                    return
                }
                if (aY != null || aZ) {
                    a1.type = "change";
                    return e.event.trigger(a1, arguments[1], a0)
                }
            };
        e.event.special.change = {
            filters: {
                focusout: am,
                click: function (a0) {
                    var aZ = a0.target,
                        aY = aZ.type;
                    if (aY === "radio" || aY === "checkbox" || aZ.nodeName.toLowerCase() === "select") {
                        return am.call(this, a0)
                    }
                },
                keydown: function (a0) {
                    var aZ = a0.target,
                        aY = aZ.type;
                    if ((a0.keyCode === 13 && aZ.nodeName.toLowerCase() !== "textarea") || (a0.keyCode === 32 && (aY === "checkbox" || aY === "radio")) || aY === "select-multiple") {
                        return am.call(this, a0)
                    }
                },
                beforeactivate: function (aZ) {
                    var aY = aZ.target;
                    e.data(aY, "_change_data", r(aY))
                }
            },
            setup: function (aY, a0) {
                if (this.type === "file") {
                    return false
                }
                for (var aZ in a) {
                    e.event.add(this, aZ + ".specialChange", a[aZ])
                }
                return F.test(this.nodeName)
            },
            teardown: function (aY) {
                e.event.remove(this, ".specialChange");
                return F.test(this.nodeName)
            }
        };
        a = e.event.special.change.filters
    }
    function Q(aZ, a0, aY) {
        aY[0].type = aZ;
        return e.event.handle.apply(a0, aY)
    }
    if (x.addEventListener) {
        e.each({
            focus: "focusin",
            blur: "focusout"
        },


        function (aY, a0) {
            e.event.special[a0] = {
                setup: function () {
                    this.addEventListener(aY, aZ, true)
                },
                teardown: function () {
                    this.removeEventListener(aY, aZ, true)
                }
            };

            function aZ(a1) {
                a1 = e.event.fix(a1);
                a1.type = a0;
                return e.event.handle.call(this, a1)
            }
        })
    }
    e.each(["bind", "one"], function (aZ, aY) {
        e.fn[aY] = function (a4, a0, a6) {
            if (typeof a4 === "object") {
                for (var a5 in a4) {
                    this[aY](a5, a0, a4[a5], a6)
                }
                return this
            }
            if (e.isFunction(a0)) {
                a6 = a0;
                a0 = H
            }
            var a3 = aY === "one" ? e.proxy(a6, function (a7) {
                e(this).unbind(a7, a3);
                return a6.apply(this, arguments)
            }) : a6;
            if (a4 === "unload" && aY !== "one") {
                this.one(a4, a0, a6)
            } else {
                for (var a1 = 0, a2 = this.length; a1 < a2; a1++) {
                    e.event.add(this[a1], a4, a3, a0)
                }
            }
            return this
        }
    });
    e.fn.extend({
        unbind: function (a0, aZ) {
            if (typeof a0 === "object" && !a0.preventDefault) {
                for (var a2 in a0) {
                    this.unbind(a2, a0[a2])
                }
            } else {
                for (var aY = 0, a1 = this.length; aY < a1; aY++) {
                    e.event.remove(this[aY], a0, aZ)
                }
            }
            return this
        },
        delegate: function (a0, aZ, aY, a1) {
            return this.live(aZ, aY, a1, a0)
        },
        undelegate: function (aZ, aY, a0) {
            if (arguments.length === 0) {
                return this.unbind("live")
            } else {
                return this.die(aY, null, a0, aZ)
            }
        },
        trigger: function (aZ, aY) {
            return this.each(function () {
                e.event.trigger(aZ, aY, this)
            })
        },
        triggerHandler: function (aZ, aY) {
            if (this[0]) {
                var a0 = e.Event(aZ);
                a0.preventDefault();
                a0.stopPropagation();
                e.event.trigger(a0, aY, this[0]);
                return a0.result
            }
        },
        toggle: function (aZ) {
            var a0 = arguments,
                aY = 1;
            while (aY < a0.length) {
                e.proxy(aZ, a0[aY++])
            }
            return this.click(e.proxy(aZ, function (a1) {
                var a2 = (e.data(this, "lastToggle" + aZ.guid) || 0) % aY;
                e.data(this, "lastToggle" + aZ.guid, a2 + 1);
                a1.preventDefault();
                return a0[a2].apply(this, arguments) || false
            }))
        },
        hover: function (aY, aZ) {
            return this.mouseenter(aY).mouseleave(aZ || aY)
        }
    });
    var u = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    e.each(["live", "die"], function (aZ, aY) {
        e.fn[aY] = function (a7, a1, a8, a9) {
            var a6, a2 = 0,
                a4, a0, a5, ba = a9 || this.selector,
                a3 = a9 ? this : e(this.context);
            if (e.isFunction(a1)) {
                a8 = a1;
                a1 = H
            }
            a7 = (a7 || "").split(" ");
            while ((a6 = a7[a2++]) != null) {
                a4 = ab.exec(a6);
                a0 = "";
                if (a4) {
                    a0 = a4[0];
                    a6 = a6.replace(ab, "")
                }
                if (a6 === "hover") {
                    a7.push("mouseenter" + a0, "mouseleave" + a0);
                    continue
                }
                a5 = a6;
                if (a6 === "focus" || a6 === "blur") {
                    a7.push(u[a6] + a0);
                    a6 = a6 + a0
                } else {
                    a6 = (u[a6] || a6) + a0
                }
                if (aY === "live") {
                    a3.each(function () {
                        e.event.add(this, aS(a6, ba), {
                            data: a1,
                            selector: ba,
                            handler: a8,
                            origType: a6,
                            origHandler: a8,
                            preType: a5
                        })
                    })
                } else {
                    a3.unbind(aS(a6, ba), a8)
                }
            }
            return this
        }
    });

    function ad(a3) {
        var a2, aY = [],
            bc = [],
            a1 = arguments,
            aZ, a9, ba, a0, a5, a4, a6, a8, a7 = e.data(this, "events");
        if (a3.liveFired === this || !a7 || !a7.live || a3.button && a3.type === "click") {
            return
        }
        a3.liveFired = this;
        var bb = a7.live.slice(0);
        for (a5 = 0; a5 < bb.length; a5++) {
            ba = bb[a5];
            if (ba.origType.replace(ab, "") === a3.type) {
                bc.push(ba.selector)
            } else {
                bb.splice(a5--, 1)
            }
        }
        a9 = e(a3.target).closest(bc, a3.currentTarget);
        for (a4 = 0, a6 = a9.length; a4 < a6; a4++) {
            for (a5 = 0; a5 < bb.length; a5++) {
                ba = bb[a5];
                if (a9[a4].selector === ba.selector) {
                    a0 = a9[a4].elem;
                    aZ = null;
                    if (ba.preType === "mouseenter" || ba.preType === "mouseleave") {
                        aZ = e(a3.relatedTarget).closest(ba.selector)[0]
                    }
                    if (!aZ || aZ !== a0) {
                        aY.push({
                            elem: a0,
                            handleObj: ba
                        })
                    }
                }
            }
        }
        for (a4 = 0, a6 = aY.length; a4 < a6; a4++) {
            a9 = aY[a4];
            a3.currentTarget = a9.elem;
            a3.data = a9.handleObj.data;
            a3.handleObj = a9.handleObj;
            if (a9.handleObj.origHandler.apply(a9.elem, a1) === false) {
                a2 = false;
                break
            }
        }
        return a2
    }
    function aS(aZ, aY) {
        return "live." + (aZ && aZ !== "*" ? aZ + "." : "") + aY.replace(/\./g, "`").replace(/ /g, "&")
    }
    e.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "), function (aZ, aY) {
        e.fn[aY] = function (a0) {
            return a0 ? this.bind(aY, a0) : this.trigger(aY)
        };
        if (e.attrFn) {
            e.attrFn[aY] = true
        }
    });
    if (aH.attachEvent && !aH.addEventListener) {
        aH.attachEvent("onunload", function () {
            for (var aY in e.cache) {
                if (e.cache[aY].handle) {
                    try {
                        e.event.remove(e.cache[aY].handle.elem)
                    } catch (aZ) { }
                }
            }
        });
        /*
        * Sizzle CSS Selector Engine - v1.0
        *  Copyright 2009, The Dojo Foundation
        *  Released under the MIT, BSD, and GPL Licenses.
        *  More information: http://sizzlejs.com/
        */
    } (function () {
        var a9 = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            a0 = 0,
            a7 = Object.prototype.toString,
            aZ = false,
            aY = true;
        [0, 0].sort(function () {
            aY = false;
            return 0
        });
        var bd = function (bv, bh, bk, br) {
            bk = bk || [];
            var bi = bh = bh || x;
            if (bh.nodeType !== 1 && bh.nodeType !== 9) {
                return []
            }
            if (!bv || typeof bv !== "string") {
                return bk
            }
            var bn = [],
                bq, bt, bl, bw, bp = true,
                bj = bb(bh),
                bu = bv;
            while ((a9.exec(""), bq = a9.exec(bu)) !== null) {
                bu = bq[3];
                bn.push(bq[1]);
                if (bq[2]) {
                    bw = bq[3];
                    break
                }
            }
            if (bn.length > 1 && ba.exec(bv)) {
                if (bn.length === 2 && a8.relative[bn[0]]) {
                    bt = a2(bn[0] + bn[1], bh)
                } else {
                    bt = a8.relative[bn[0]] ? [bh] : bd(bn.shift(), bh);
                    while (bn.length) {
                        bv = bn.shift();
                        if (a8.relative[bv]) {
                            bv += bn.shift()
                        }
                        bt = a2(bv, bt)
                    }
                }
            } else {
                if (!br && bn.length > 1 && bh.nodeType === 9 && !bj && a8.match.ID.test(bn[0]) && !a8.match.ID.test(bn[bn.length - 1])) {
                    var bs = bd.find(bn.shift(), bh, bj);
                    bh = bs.expr ? bd.filter(bs.expr, bs.set)[0] : bs.set[0]
                }
                if (bh) {
                    var bs = br ? {
                        expr: bn.pop(),
                        set: bf(br)
                    } : bd.find(bn.pop(), bn.length === 1 && (bn[0] === "~" || bn[0] === "+") && bh.parentNode ? bh.parentNode : bh, bj);
                    bt = bs.expr ? bd.filter(bs.expr, bs.set) : bs.set;
                    if (bn.length > 0) {
                        bl = bf(bt)
                    } else {
                        bp = false
                    }
                    while (bn.length) {
                        var bm = bn.pop(),
                            bg = bm;
                        if (!a8.relative[bm]) {
                            bm = ""
                        } else {
                            bg = bn.pop()
                        }
                        if (bg == null) {
                            bg = bh
                        }
                        a8.relative[bm](bl, bg, bj)
                    }
                } else {
                    bl = bn = []
                }
            }
            if (!bl) {
                bl = bt
            }
            if (!bl) {
                bd.error(bm || bv)
            }
            if (a7.call(bl) === "[object Array]") {
                if (!bp) {
                    bk.push.apply(bk, bl)
                } else {
                    if (bh && bh.nodeType === 1) {
                        for (var bo = 0; bl[bo] != null; bo++) {
                            if (bl[bo] && (bl[bo] === true || bl[bo].nodeType === 1 && a6(bh, bl[bo]))) {
                                bk.push(bt[bo])
                            }
                        }
                    } else {
                        for (var bo = 0; bl[bo] != null; bo++) {
                            if (bl[bo] && bl[bo].nodeType === 1) {
                                bk.push(bt[bo])
                            }
                        }
                    }
                }
            } else {
                bf(bl, bk)
            }
            if (bw) {
                bd(bw, bi, bk, br);
                bd.uniqueSort(bk)
            }
            return bk
        };
        bd.uniqueSort = function (bg) {
            if (be) {
                aZ = aY;
                bg.sort(be);
                if (aZ) {
                    for (var bh = 1; bh < bg.length; bh++) {
                        if (bg[bh] === bg[bh - 1]) {
                            bg.splice(bh--, 1)
                        }
                    }
                }
            }
            return bg
        };
        bd.matches = function (bg, bh) {
            return bd(bg, null, null, bh)
        };
        bd.find = function (bl, bi, bg) {
            var bm, bj;
            if (!bl) {
                return []
            }
            for (var bh = 0, bk = a8.order.length; bh < bk; bh++) {
                var bo = a8.order[bh],
                    bj;
                if ((bj = a8.leftMatch[bo].exec(bl))) {
                    var bn = bj[1];
                    bj.splice(1, 1);
                    if (bn.substr(bn.length - 1) !== "\\") {
                        bj[1] = (bj[1] || "").replace(/\\/g, "");
                        bm = a8.find[bo](bj, bi, bg);
                        if (bm != null) {
                            bl = bl.replace(a8.match[bo], "");
                            break
                        }
                    }
                }
            }
            if (!bm) {
                bm = bi.getElementsByTagName("*")
            }
            return {
                set: bm,
                expr: bl
            }
        };
        bd.filter = function (bp, bw, bi, br) {
            var bt = bp,
                bs = [],
                bu = bw,
                bl, bn, bq = bw && bw[0] && bb(bw[0]);
            while (bp && bw.length) {
                for (var bm in a8.filter) {
                    if ((bl = a8.leftMatch[bm].exec(bp)) != null && bl[2]) {
                        var bh = a8.filter[bm],
                            bj, bv, bk = bl[1];
                        bn = false;
                        bl.splice(1, 1);
                        if (bk.substr(bk.length - 1) === "\\") {
                            continue
                        }
                        if (bu === bs) {
                            bs = []
                        }
                        if (a8.preFilter[bm]) {
                            bl = a8.preFilter[bm](bl, bu, bi, bs, br, bq);
                            if (!bl) {
                                bn = bj = true
                            } else {
                                if (bl === true) {
                                    continue
                                }
                            }
                        }
                        if (bl) {
                            for (var bo = 0;
                            (bv = bu[bo]) != null; bo++) {
                                if (bv) {
                                    bj = bh(bv, bl, bo, bu);
                                    var bg = br ^ !!bj;
                                    if (bi && bj != null) {
                                        if (bg) {
                                            bn = true
                                        } else {
                                            bu[bo] = false
                                        }
                                    } else {
                                        if (bg) {
                                            bs.push(bv);
                                            bn = true
                                        }
                                    }
                                }
                            }
                        }
                        if (bj !== H) {
                            if (!bi) {
                                bu = bs
                            }
                            bp = bp.replace(a8.match[bm], "");
                            if (!bn) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (bp === bt) {
                    if (bn == null) {
                        bd.error(bp)
                    } else {
                        break
                    }
                }
                bt = bp
            }
            return bu
        };
        bd.error = function (bg) {
            throw "Syntax error, unrecognized expression: " + bg
        };
        var a8 = bd.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (bg) {
                    return bg.getAttribute("href")
                }
            },
            relative: {
                "+": function (bn, bj) {
                    var bg = typeof bj === "string",
                        bk = bg && !/\W/.test(bj),
                        bl = bg && !bk;
                    if (bk) {
                        bj = bj.toLowerCase()
                    }
                    for (var bh = 0, bi = bn.length, bm; bh < bi; bh++) {
                        if ((bm = bn[bh])) {
                            while ((bm = bm.previousSibling) && bm.nodeType !== 1) { }
                            bn[bh] = bl || bm && bm.nodeName.toLowerCase() === bj ? bm || false : bm === bj
                        }
                    }
                    if (bl) {
                        bd.filter(bj, bn, true)
                    }
                },
                ">": function (bm, bj) {
                    var bk = typeof bj === "string";
                    if (bk && !/\W/.test(bj)) {
                        bj = bj.toLowerCase();
                        for (var bg = 0, bi = bm.length; bg < bi; bg++) {
                            var bh = bm[bg];
                            if (bh) {
                                var bl = bh.parentNode;
                                bm[bg] = bl.nodeName.toLowerCase() === bj ? bl : false
                            }
                        }
                    } else {
                        for (var bg = 0, bi = bm.length; bg < bi; bg++) {
                            var bh = bm[bg];
                            if (bh) {
                                bm[bg] = bk ? bh.parentNode : bh.parentNode === bj
                            }
                        }
                        if (bk) {
                            bd.filter(bj, bm, true)
                        }
                    }
                },
                "": function (bl, bi, bg) {
                    var bk = a0++,
                        bh = a1;
                    if (typeof bi === "string" && !/\W/.test(bi)) {
                        var bj = bi = bi.toLowerCase();
                        bh = a5
                    }
                    bh("parentNode", bi, bk, bl, bj, bg)
                },
                "~": function (bl, bi, bg) {
                    var bk = a0++,
                        bh = a1;
                    if (typeof bi === "string" && !/\W/.test(bi)) {
                        var bj = bi = bi.toLowerCase();
                        bh = a5
                    }
                    bh("previousSibling", bi, bk, bl, bj, bg)
                }
            },
            find: {
                ID: function (bj, bg, bh) {
                    if (typeof bg.getElementById !== "undefined" && !bh) {
                        var bi = bg.getElementById(bj[1]);
                        return bi ? [bi] : []
                    }
                },
                NAME: function (bi, bh) {
                    if (typeof bh.getElementsByName !== "undefined") {
                        var bk = [],
                            bl = bh.getElementsByName(bi[1]);
                        for (var bg = 0, bj = bl.length; bg < bj; bg++) {
                            if (bl[bg].getAttribute("name") === bi[1]) {
                                bk.push(bl[bg])
                            }
                        }
                        return bk.length === 0 ? null : bk
                    }
                },
                TAG: function (bh, bg) {
                    return bg.getElementsByTagName(bh[1])
                }
            },
            preFilter: {
                CLASS: function (bk, bl, bj, bn, bm, bg) {
                    bk = " " + bk[1].replace(/\\/g, "") + " ";
                    if (bg) {
                        return bk
                    }
                    for (var bh = 0, bi;
                    (bi = bl[bh]) != null; bh++) {
                        if (bi) {
                            if (bm ^ (bi.className && (" " + bi.className + " ").replace(/[\t\n]/g, " ").indexOf(bk) >= 0)) {
                                if (!bj) {
                                    bn.push(bi)
                                }
                            } else {
                                if (bj) {
                                    bl[bh] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (bg) {
                    return bg[1].replace(/\\/g, "")
                },
                TAG: function (bh, bg) {
                    return bh[1].toLowerCase()
                },
                CHILD: function (bh) {
                    if (bh[1] === "nth") {
                        var bg = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(bh[2] === "even" && "2n" || bh[2] === "odd" && "2n+1" || !/\D/.test(bh[2]) && "0n+" + bh[2] || bh[2]);
                        bh[2] = (bg[1] + (bg[2] || 1)) - 0;
                        bh[3] = bg[3] - 0
                    }
                    bh[0] = a0++;
                    return bh
                },
                ATTR: function (bi, bk, bh, bm, bl, bg) {
                    var bj = bi[1].replace(/\\/g, "");
                    if (!bg && a8.attrMap[bj]) {
                        bi[1] = a8.attrMap[bj]
                    }
                    if (bi[2] === "~=") {
                        bi[4] = " " + bi[4] + " "
                    }
                    return bi
                },
                PSEUDO: function (bh, bj, bg, bl, bk) {
                    if (bh[1] === "not") {
                        if ((a9.exec(bh[3]) || "").length > 1 || /^\w/.test(bh[3])) {
                            bh[3] = bd(bh[3], null, null, bj)
                        } else {
                            var bi = bd.filter(bh[3], bj, bg, true ^ bk);
                            if (!bg) {
                                bl.push.apply(bl, bi)
                            }
                            return false
                        }
                    } else {
                        if (a8.match.POS.test(bh[0]) || a8.match.CHILD.test(bh[0])) {
                            return true
                        }
                    }
                    return bh
                },
                POS: function (bg) {
                    bg.unshift(true);
                    return bg
                }
            },
            filters: {
                enabled: function (bg) {
                    return bg.disabled === false && bg.type !== "hidden"
                },
                disabled: function (bg) {
                    return bg.disabled === true
                },
                checked: function (bg) {
                    return bg.checked === true
                },
                selected: function (bg) {
                    bg.parentNode.selectedIndex;
                    return bg.selected === true
                },
                parent: function (bg) {
                    return !!bg.firstChild
                },
                empty: function (bg) {
                    return !bg.firstChild
                },
                has: function (bh, bg, bi) {
                    return !!bd(bi[3], bh).length
                },
                header: function (bg) {
                    return /h\d/i.test(bg.nodeName)
                },
                text: function (bg) {
                    return "text" === bg.type
                },
                radio: function (bg) {
                    return "radio" === bg.type
                },
                checkbox: function (bg) {
                    return "checkbox" === bg.type
                },
                file: function (bg) {
                    return "file" === bg.type
                },
                password: function (bg) {
                    return "password" === bg.type
                },
                submit: function (bg) {
                    return "submit" === bg.type
                },
                image: function (bg) {
                    return "image" === bg.type
                },
                reset: function (bg) {
                    return "reset" === bg.type
                },
                button: function (bg) {
                    return "button" === bg.type || bg.nodeName.toLowerCase() === "button"
                },
                input: function (bg) {
                    return /input|select|textarea|button/i.test(bg.nodeName)
                }
            },
            setFilters: {
                first: function (bg, bh) {
                    return bh === 0
                },
                last: function (bi, bh, bj, bg) {
                    return bh === bg.length - 1
                },
                even: function (bg, bh) {
                    return bh % 2 === 0
                },
                odd: function (bg, bh) {
                    return bh % 2 === 1
                },
                lt: function (bh, bg, bi) {
                    return bg < bi[3] - 0
                },
                gt: function (bh, bg, bi) {
                    return bg > bi[3] - 0
                },
                nth: function (bh, bg, bi) {
                    return bi[3] - 0 === bg
                },
                eq: function (bh, bg, bi) {
                    return bi[3] - 0 === bg
                }
            },
            filter: {
                PSEUDO: function (bh, bk, bg, bn) {
                    var bm = bk[1],
                        bj = a8.filters[bm];
                    if (bj) {
                        return bj(bh, bg, bk, bn)
                    } else {
                        if (bm === "contains") {
                            return (bh.textContent || bh.innerText || a4([bh]) || "").indexOf(bk[3]) >= 0
                        } else {
                            if (bm === "not") {
                                var bi = bk[3];
                                for (var bg = 0, bl = bi.length; bg < bl; bg++) {
                                    if (bi[bg] === bh) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                bd.error("Syntax error, unrecognized expression: " + bm)
                            }
                        }
                    }
                },
                CHILD: function (bh, bj) {
                    var bl = bj[1],
                        bo = bh;
                    switch (bl) {
                        case "only":
                        case "first":
                            while ((bo = bo.previousSibling)) {
                                if (bo.nodeType === 1) {
                                    return false
                                }
                            }
                            if (bl === "first") {
                                return true
                            }
                            bo = bh;
                        case "last":
                            while ((bo = bo.nextSibling)) {
                                if (bo.nodeType === 1) {
                                    return false
                                }
                            }
                            return true;
                        case "nth":
                            var bg = bj[2],
                            bi = bj[3];
                            if (bg === 1 && bi === 0) {
                                return true
                            }
                            var bn = bj[0],
                            bm = bh.parentNode;
                            if (bm && (bm.sizcache !== bn || !bh.nodeIndex)) {
                                var bp = 0;
                                for (bo = bm.firstChild; bo; bo = bo.nextSibling) {
                                    if (bo.nodeType === 1) {
                                        bo.nodeIndex = ++bp
                                    }
                                }
                                bm.sizcache = bn
                            }
                            var bk = bh.nodeIndex - bi;
                            if (bg === 0) {
                                return bk === 0
                            } else {
                                return (bk % bg === 0 && bk / bg >= 0)
                            }
                    }
                },
                ID: function (bg, bh) {
                    return bg.nodeType === 1 && bg.getAttribute("id") === bh
                },
                TAG: function (bg, bh) {
                    return (bh === "*" && bg.nodeType === 1) || bg.nodeName.toLowerCase() === bh
                },
                CLASS: function (bg, bh) {
                    return (" " + (bg.className || bg.getAttribute("class")) + " ").indexOf(bh) > -1
                },
                ATTR: function (bh, bi) {
                    var bl = bi[1],
                        bm = a8.attrHandle[bl] ? a8.attrHandle[bl](bh) : bh[bl] != null ? bh[bl] : bh.getAttribute(bl),
                    bg = bm + "",
                    bk = bi[2],
                    bj = bi[4];
                    return bm == null ? bk === "!=" : bk === "=" ? bg === bj : bk === "*=" ? bg.indexOf(bj) >= 0 : bk === "~=" ? (" " + bg + " ").indexOf(bj) >= 0 : !bj ? bg && bm !== false : bk === "!=" ? bg !== bj : bk === "^=" ? bg.indexOf(bj) === 0 : bk === "$=" ? bg.substr(bg.length - bj.length) === bj : bk === "|=" ? bg === bj || bg.substr(0, bj.length + 1) === bj + "-" : false
                },
                POS: function (bh, bj, bg, bl) {
                    var bk = bj[2],
                        bi = a8.setFilters[bk];
                    if (bi) {
                        return bi(bh, bg, bj, bl)
                    }
                }
            }
        };
        var ba = a8.match.POS;
        for (var a3 in a8.match) {
            a8.match[a3] = new RegExp(a8.match[a3].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            a8.leftMatch[a3] = new RegExp(/(^(?:.|\r|\n)*?)/.source + a8.match[a3].source.replace(/\\(\d+)/g, function (bg, bh) {
                return "\\" + (bh - 0 + 1)
            }))
        }
        var bf = function (bh, bg) {
            bh = Array.prototype.slice.call(bh, 0);
            if (bg) {
                bg.push.apply(bg, bh);
                return bg
            }
            return bh
        };
        try {
            Array.prototype.slice.call(x.documentElement.childNodes, 0)[0].nodeType
        } catch (bc) {
            bf = function (bg, bj) {
                var bk = bj || [];
                if (a7.call(bg) === "[object Array]") {
                    Array.prototype.push.apply(bk, bg)
                } else {
                    if (typeof bg.length === "number") {
                        for (var bh = 0, bi = bg.length; bh < bi; bh++) {
                            bk.push(bg[bh])
                        }
                    } else {
                        for (var bh = 0; bg[bh]; bh++) {
                            bk.push(bg[bh])
                        }
                    }
                }
                return bk
            }
        }
        var be;
        if (x.documentElement.compareDocumentPosition) {
            be = function (bg, bh) {
                if (!bg.compareDocumentPosition || !bh.compareDocumentPosition) {
                    if (bg == bh) {
                        aZ = true
                    }
                    return bg.compareDocumentPosition ? -1 : 1
                }
                var bi = bg.compareDocumentPosition(bh) & 4 ? -1 : bg === bh ? 0 : 1;
                if (bi === 0) {
                    aZ = true
                }
                return bi
            }
        } else {
            if ("sourceIndex" in x.documentElement) {
                be = function (bg, bh) {
                    if (!bg.sourceIndex || !bh.sourceIndex) {
                        if (bg == bh) {
                            aZ = true
                        }
                        return bg.sourceIndex ? -1 : 1
                    }
                    var bi = bg.sourceIndex - bh.sourceIndex;
                    if (bi === 0) {
                        aZ = true
                    }
                    return bi
                }
            } else {
                if (x.createRange) {
                    be = function (bh, bi) {
                        if (!bh.ownerDocument || !bi.ownerDocument) {
                            if (bh == bi) {
                                aZ = true
                            }
                            return bh.ownerDocument ? -1 : 1
                        }
                        var bg = bh.ownerDocument.createRange(),
                            bk = bi.ownerDocument.createRange();
                        bg.setStart(bh, 0);
                        bg.setEnd(bh, 0);
                        bk.setStart(bi, 0);
                        bk.setEnd(bi, 0);
                        var bj = bg.compareBoundaryPoints(Range.START_TO_END, bk);
                        if (bj === 0) {
                            aZ = true
                        }
                        return bj
                    }
                }
            }
        }
        function a4(bj) {
            var bh = "",
                bi;
            for (var bg = 0; bj[bg]; bg++) {
                bi = bj[bg];
                if (bi.nodeType === 3 || bi.nodeType === 4) {
                    bh += bi.nodeValue
                } else {
                    if (bi.nodeType !== 8) {
                        bh += a4(bi.childNodes)
                    }
                }
            }
            return bh
        } (function () {
            var bg = x.createElement("div"),
                bh = "script" + (new Date).getTime();
            bg.innerHTML = "<a name='" + bh + "'/>";
            var bi = x.documentElement;
            bi.insertBefore(bg, bi.firstChild);
            if (x.getElementById(bh)) {
                a8.find.ID = function (bm, bj, bk) {
                    if (typeof bj.getElementById !== "undefined" && !bk) {
                        var bl = bj.getElementById(bm[1]);
                        return bl ? bl.id === bm[1] || typeof bl.getAttributeNode !== "undefined" && bl.getAttributeNode("id").nodeValue === bm[1] ? [bl] : H : []
                    }
                };
                a8.filter.ID = function (bk, bl) {
                    var bj = typeof bk.getAttributeNode !== "undefined" && bk.getAttributeNode("id");
                    return bk.nodeType === 1 && bj && bj.nodeValue === bl
                }
            }
            bi.removeChild(bg);
            bi = bg = null
        })();
        (function () {
            var bg = x.createElement("div");
            bg.appendChild(x.createComment(""));
            if (bg.getElementsByTagName("*").length > 0) {
                a8.find.TAG = function (bl, bh) {
                    var bj = bh.getElementsByTagName(bl[1]);
                    if (bl[1] === "*") {
                        var bi = [];
                        for (var bk = 0; bj[bk]; bk++) {
                            if (bj[bk].nodeType === 1) {
                                bi.push(bj[bk])
                            }
                        }
                        bj = bi
                    }
                    return bj
                }
            }
            bg.innerHTML = "<a href='#'></a>";
            if (bg.firstChild && typeof bg.firstChild.getAttribute !== "undefined" && bg.firstChild.getAttribute("href") !== "#") {
                a8.attrHandle.href = function (bh) {
                    return bh.getAttribute("href", 2)
                }
            }
            bg = null
        })();
        if (x.querySelectorAll) {
            (function () {
                var bh = bd,
                    bi = x.createElement("div");
                bi.innerHTML = "<p class='TEST'></p>";
                if (bi.querySelectorAll && bi.querySelectorAll(".TEST").length === 0) {
                    return
                }
                bd = function (bl, bj, bk, bm) {
                    bj = bj || x;
                    if (!bm && bj.nodeType === 9 && !bb(bj)) {
                        try {
                            return bf(bj.querySelectorAll(bl), bk)
                        } catch (bn) { }
                    }
                    return bh(bl, bj, bk, bm)
                };
                for (var bg in bh) {
                    bd[bg] = bh[bg]
                }
                bi = null
            })()
        } (function () {
            var bg = x.createElement("div");
            bg.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!bg.getElementsByClassName || bg.getElementsByClassName("e").length === 0) {
                return
            }
            bg.lastChild.className = "e";
            if (bg.getElementsByClassName("e").length === 1) {
                return
            }
            a8.order.splice(1, 0, "CLASS");
            a8.find.CLASS = function (bj, bh, bi) {
                if (typeof bh.getElementsByClassName !== "undefined" && !bi) {
                    return bh.getElementsByClassName(bj[1])
                }
            };
            bg = null
        })();

        function a5(bo, bm, bl, bp, bn, bg) {
            for (var bh = 0, bj = bp.length; bh < bj; bh++) {
                var bi = bp[bh];
                if (bi) {
                    bi = bi[bo];
                    var bk = false;
                    while (bi) {
                        if (bi.sizcache === bl) {
                            bk = bp[bi.sizset];
                            break
                        }
                        if (bi.nodeType === 1 && !bg) {
                            bi.sizcache = bl;
                            bi.sizset = bh
                        }
                        if (bi.nodeName.toLowerCase() === bm) {
                            bk = bi;
                            break
                        }
                        bi = bi[bo]
                    }
                    bp[bh] = bk
                }
            }
        }
        function a1(bo, bm, bl, bp, bn, bg) {
            for (var bh = 0, bj = bp.length; bh < bj; bh++) {
                var bi = bp[bh];
                if (bi) {
                    bi = bi[bo];
                    var bk = false;
                    while (bi) {
                        if (bi.sizcache === bl) {
                            bk = bp[bi.sizset];
                            break
                        }
                        if (bi.nodeType === 1) {
                            if (!bg) {
                                bi.sizcache = bl;
                                bi.sizset = bh
                            }
                            if (typeof bm !== "string") {
                                if (bi === bm) {
                                    bk = true;
                                    break
                                }
                            } else {
                                if (bd.filter(bm, [bi]).length > 0) {
                                    bk = bi;
                                    break
                                }
                            }
                        }
                        bi = bi[bo]
                    }
                    bp[bh] = bk
                }
            }
        }
        var a6 = x.compareDocumentPosition ?
        function (bg, bh) {
            return !!(bg.compareDocumentPosition(bh) & 16)
        } : function (bg, bh) {
            return bg !== bh && (bg.contains ? bg.contains(bh) : true)
        };
        var bb = function (bg) {
            var bh = (bg ? bg.ownerDocument || bg : 0).documentElement;
            return bh ? bh.nodeName !== "HTML" : false
        };
        var a2 = function (bg, bi) {
            var bl = [],
                bn = "",
                bj, bm = bi.nodeType ? [bi] : bi;
            while ((bj = a8.match.PSEUDO.exec(bg))) {
                bn += bj[0];
                bg = bg.replace(a8.match.PSEUDO, "")
            }
            bg = a8.relative[bg] ? bg + "*" : bg;
            for (var bh = 0, bk = bm.length; bh < bk; bh++) {
                bd(bg, bm[bh], bl)
            }
            return bd.filter(bn, bl)
        };
        e.find = bd;
        e.expr = bd.selectors;
        e.expr[":"] = e.expr.filters;
        e.unique = bd.uniqueSort;
        e.text = a4;
        e.isXMLDoc = bb;
        e.contains = a6;
        return;
        aH.Sizzle = bd
    })();
    var m = /Until$/,
        V = /^(?:parents|prevUntil|prevAll)/,
        az = /,/,
        al = Array.prototype.slice;
    var aG = function (aY, aZ, a1) {
        if (e.isFunction(aZ)) {
            return e.grep(aY, function (a2, a3) {
                return !!aZ.call(a2, a3, a2) === a1
            })
        } else {
            if (aZ.nodeType) {
                return e.grep(aY, function (a2, a3) {
                    return (a2 === aZ) === a1
                })
            } else {
                if (typeof aZ === "string") {
                    var a0 = e.grep(aY, function (a2) {
                        return a2.nodeType === 1
                    });
                    if (aN.test(aZ)) {
                        return e.filter(aZ, a0, !a1)
                    } else {
                        aZ = e.filter(aZ, a0)
                    }
                }
            }
        }
        return e.grep(aY, function (a2, a3) {
            return (e.inArray(a2, aZ) >= 0) === a1
        })
    };
    e.fn.extend({
        find: function (aY) {
            var a2 = this.pushStack("", "find", aY),
                a4 = 0;
            for (var aZ = 0, a0 = this.length; aZ < a0; aZ++) {
                a4 = a2.length;
                e.find(aY, this[aZ], a2);
                if (aZ > 0) {
                    for (var a1 = a4; a1 < a2.length; a1++) {
                        for (var a3 = 0; a3 < a4; a3++) {
                            if (a2[a3] === a2[a1]) {
                                a2.splice(a1--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return a2
        },
        has: function (aZ) {
            var aY = e(aZ);
            return this.filter(function () {
                for (var a0 = 0, a1 = aY.length; a0 < a1; a0++) {
                    if (e.contains(this, aY[a0])) {
                        return true
                    }
                }
            })
        },
        not: function (aY) {
            return this.pushStack(aG(this, aY, false), "not", aY)
        },
        filter: function (aY) {
            return this.pushStack(aG(this, aY, true), "filter", aY)
        },
        is: function (aY) {
            return !!aY && e.filter(aY, this).length > 0
        },
        closest: function (a6, a1) {
            if (e.isArray(a6)) {
                var a4 = [],
                    a5 = this[0],
                    a2, a7 = {},
                    aY;
                if (a5 && a6.length) {
                    for (var aZ = 0, a3 = a6.length; aZ < a3; aZ++) {
                        aY = a6[aZ];
                        if (!a7[aY]) {
                            a7[aY] = e.expr.match.POS.test(aY) ? e(aY, a1 || this.context) : aY
                        }
                    }
                    while (a5 && a5.ownerDocument && a5 !== a1) {
                        for (aY in a7) {
                            a2 = a7[aY];
                            if (a2.jquery ? a2.index(a5) > -1 : e(a5).is(a2)) {
                                a4.push({
                                    selector: aY,
                                    elem: a5
                                });
                                delete a7[aY]
                            }
                        }
                        a5 = a5.parentNode
                    }
                }
                return a4
            }
            var a0 = e.expr.match.POS.test(a6) ? e(a6, a1 || this.context) : null;
            return this.map(function (a8, a9) {
                while (a9 && a9.ownerDocument && a9 !== a1) {
                    if (a0 ? a0.index(a9) > -1 : e(a9).is(a6)) {
                        return a9
                    }
                    a9 = a9.parentNode
                }
                return null
            })
        },
        index: function (aY) {
            if (!aY || typeof aY === "string") {
                return e.inArray(this[0], aY ? e(aY) : this.parent().children())
            }
            return e.inArray(aY.jquery ? aY[0] : aY, this)
        },
        add: function (a0, aY) {
            var a1 = typeof a0 === "string" ? e(a0, aY || this.context) : e.makeArray(a0),
            aZ = e.merge(this.get(), a1);
            return this.pushStack(aF(a1[0]) || aF(aZ[0]) ? aZ : e.unique(aZ))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });

    function aF(aY) {
        return !aY || !aY.parentNode || aY.parentNode.nodeType === 11
    }
    e.each({
        parent: function (aY) {
            var aZ = aY.parentNode;
            return aZ && aZ.nodeType !== 11 ? aZ : null
        },
        parents: function (aY) {
            return e.dir(aY, "parentNode")
        },
        parentsUntil: function (aZ, aY, a0) {
            return e.dir(aZ, "parentNode", a0)
        },
        next: function (aY) {
            return e.nth(aY, 2, "nextSibling")
        },
        prev: function (aY) {
            return e.nth(aY, 2, "previousSibling")
        },
        nextAll: function (aY) {
            return e.dir(aY, "nextSibling")
        },
        prevAll: function (aY) {
            return e.dir(aY, "previousSibling")
        },
        nextUntil: function (aZ, aY, a0) {
            return e.dir(aZ, "nextSibling", a0)
        },
        prevUntil: function (aZ, aY, a0) {
            return e.dir(aZ, "previousSibling", a0)
        },
        siblings: function (aY) {
            return e.sibling(aY.parentNode.firstChild, aY)
        },
        children: function (aY) {
            return e.sibling(aY.firstChild)
        },
        contents: function (aY) {
            return e.nodeName(aY, "iframe") ? aY.contentDocument || aY.contentWindow.document : e.makeArray(aY.childNodes)
        }
    },


    function (aZ, aY) {
        e.fn[aZ] = function (a0, a2) {
            var a1 = e.map(this, aY, a0);
            if (!m.test(aZ)) {
                a2 = a0
            }
            if (a2 && typeof a2 === "string") {
                a1 = e.filter(a2, a1)
            }
            a1 = this.length > 1 ? e.unique(a1) : a1;
            if ((this.length > 1 || az.test(a2)) && V.test(aZ)) {
                a1 = a1.reverse()
            }
            return this.pushStack(a1, aZ, al.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function (aY, a0, aZ) {
            if (aZ) {
                aY = ":not(" + aY + ")"
            }
            return e.find.matches(aY, a0)
        },
        dir: function (a2, a0, aZ) {
            var aY = [],
                a1 = a2[a0];
            while (a1 && a1.nodeType !== 9 && (aZ === H || a1.nodeType !== 1 || !e(a1).is(aZ))) {
                if (a1.nodeType === 1) {
                    aY.push(a1)
                }
                a1 = a1[a0]
            }
            return aY
        },
        nth: function (aY, aZ, a0, a1) {
            aZ = aZ || 1;
            var a2 = 0;
            for (; aY; aY = aY[a0]) {
                if (aY.nodeType === 1 && ++a2 === aZ) {
                    break
                }
            }
            return aY
        },
        sibling: function (a0, aZ) {
            var aY = [];
            for (; a0; a0 = a0.nextSibling) {
                if (a0.nodeType === 1 && a0 !== aZ) {
                    aY.push(a0)
                }
            }
            return aY
        }
    });
    var h = / jQuery\d+="(?:\d+|null)"/g,
        o = /^\s+/,
        ap = /(<([\w:]+)[^>]*?)\/>/g,
        aJ = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
        ag = /<([\w:]+)/,
        W = /<tbody/i,
        M = /<|&#?\w+;/,
        s = /<script|<object|<embed|<option|<style/i,
        I = /checked\s*(?:[^=]|=\s*.checked.)/i,
        d = function (aZ, a0, aY) {
            return aJ.test(aY) ? aZ : a0 + "></" + aY + ">"
        },
        av = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    av.optgroup = av.option;
    av.tbody = av.tfoot = av.colgroup = av.caption = av.thead;
    av.th = av.td;
    if (!e.support.htmlSerialize) {
        av._default = [1, "div<div>", "</div>"]
    }
    e.fn.extend({
        text: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a0) {
                    var aZ = e(this);
                    aZ.text(aY.call(this, a0, aZ.text()))
                })
            }
            if (typeof aY !== "object" && aY !== H) {
                return this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(aY))
            }
            return e.text(this)
        },
        wrapAll: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a0) {
                    e(this).wrapAll(aY.call(this, a0))
                })
            }
            if (this[0]) {
                var aZ = e(aY, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    aZ.insertBefore(this[0])
                }
                aZ.map(function () {
                    var a0 = this;
                    while (a0.firstChild && a0.firstChild.nodeType === 1) {
                        a0 = a0.firstChild
                    }
                    return a0
                }).append(this)
            }
            return this
        },
        wrapInner: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (aZ) {
                    e(this).wrapInner(aY.call(this, aZ))
                })
            }
            return this.each(function () {
                var aZ = e(this),
                    a0 = aZ.contents();
                if (a0.length) {
                    a0.wrapAll(aY)
                } else {
                    aZ.append(aY)
                }
            })
        },
        wrap: function (aY) {
            return this.each(function () {
                e(this).wrapAll(aY)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                if (!e.nodeName(this, "body")) {
                    e(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (aY) {
                if (this.nodeType === 1) {
                    this.appendChild(aY)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (aY) {
                if (this.nodeType === 1) {
                    this.insertBefore(aY, this.firstChild)
                }
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (aZ) {
                    this.parentNode.insertBefore(aZ, this)
                })
            } else {
                if (arguments.length) {
                    var aY = e(arguments[0]);
                    aY.push.apply(aY, this.toArray());
                    return this.pushStack(aY, "before", arguments)
                }
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (aZ) {
                    this.parentNode.insertBefore(aZ, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var aY = this.pushStack(this, "after", arguments);
                    aY.push.apply(aY, e(arguments[0]).toArray());
                    return aY
                }
            }
        },
        remove: function (aZ, aY) {
            for (var a1 = 0, a0;
            (a0 = this[a1]) != null; a1++) {
                if (!aZ || e.filter(aZ, [a0]).length) {
                    if (!aY && a0.nodeType === 1) {
                        e.cleanData(a0.getElementsByTagName("*"));
                        e.cleanData([a0])
                    }
                    if (a0.parentNode) {
                        a0.parentNode.removeChild(a0)
                    }
                }
            }
            return this
        },
        empty: function () {
            for (var aZ = 0, aY;
            (aY = this[aZ]) != null; aZ++) {
                if (aY.nodeType === 1) {
                    e.cleanData(aY.getElementsByTagName("*"))
                }
                while (aY.firstChild) {
                    aY.removeChild(aY.firstChild)
                }
            }
            return this
        },
        clone: function (aY) {
            var aZ = this.map(function () {
                if (!e.support.noCloneEvent && !e.isXMLDoc(this)) {
                    var a1 = this.outerHTML,
                        a0 = this.ownerDocument;
                    if (!a1) {
                        var a2 = a0.createElement("div");
                        a2.appendChild(this.cloneNode(true));
                        a1 = a2.innerHTML
                    }
                    return e.clean([a1.replace(h, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(o, "")], a0)[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            if (aY === true) {
                aT(this, aZ);
                aT(this.find("*"), aZ.find("*"))
            }
            return aZ
        },
        html: function (aY) {
            if (aY === H) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(h, "") : null
            } else {
                if (typeof aY === "string" && !s.test(aY) && (e.support.leadingWhitespace || !o.test(aY)) && !av[(ag.exec(aY) || ["", ""])[1].toLowerCase()]) {
                    aY = aY.replace(ap, d);
                    try {
                        for (var aZ = 0, a0 = this.length; aZ < a0; aZ++) {
                            if (this[aZ].nodeType === 1) {
                                e.cleanData(this[aZ].getElementsByTagName("*"));
                                this[aZ].innerHTML = aY
                            }
                        }
                    } catch (a1) {
                        this.empty().append(aY)
                    }
                } else {
                    if (e.isFunction(aY)) {
                        this.each(function (a2) {
                            var a3 = e(this),
                                a4 = a3.html();
                            a3.empty().append(function () {
                                return aY.call(this, a2, a4)
                            })
                        })
                    } else {
                        this.empty().append(aY)
                    }
                }
            }
            return this
        },
        replaceWith: function (aY) {
            if (this[0] && this[0].parentNode) {
                if (e.isFunction(aY)) {
                    return this.each(function (aZ) {
                        var a0 = e(this),
                            a1 = a0.html();
                        a0.replaceWith(aY.call(this, aZ, a1))
                    })
                }
                if (typeof aY !== "string") {
                    aY = e(aY).detach()
                }
                return this.each(function () {
                    var a0 = this.nextSibling,
                        aZ = this.parentNode;
                    e(this).remove();
                    if (a0) {
                        e(a0).before(aY)
                    } else {
                        e(aZ).append(aY)
                    }
                })
            } else {
                return this.pushStack(e(e.isFunction(aY) ? aY() : aY), "replaceWith", aY)
            }
        },
        detach: function (aY) {
            return this.remove(aY, true)
        },
        domManip: function (a9, aZ, a1) {
            var a7, a3, aY = a9[0],
                a8 = [],
                a4, a6;
            if (!e.support.checkClone && arguments.length === 3 && typeof aY === "string" && I.test(aY)) {
                return this.each(function () {
                    e(this).domManip(a9, aZ, a1, true)
                })
            }
            if (e.isFunction(aY)) {
                return this.each(function (bb) {
                    var ba = e(this);
                    a9[0] = aY.call(this, bb, aZ ? ba.html() : H);
                    ba.domManip(a9, aZ, a1)
                })
            }
            if (this[0]) {
                a6 = aY && aY.parentNode;
                if (e.support.parentNode && a6 && a6.nodeType === 11 && a6.childNodes.length === this.length) {
                    a7 = {
                        fragment: a6
                    }
                } else {
                    a7 = P(a9, this, a8)
                }
                a4 = a7.fragment;
                if (a4.childNodes.length === 1) {
                    a3 = a4 = a4.firstChild
                } else {
                    a3 = a4.firstChild
                }
                if (a3) {
                    aZ = aZ && e.nodeName(a3, "tr");
                    for (var a0 = 0, a2 = this.length; a0 < a2; a0++) {
                        a1.call(aZ ? a5(this[a0], a3) : this[a0], a0 > 0 || a7.cacheable || this.length > 1 ? a4.cloneNode(true) : a4)
                    }
                }
                if (a8.length) {
                    e.each(a8, D)
                }
            }
            return this;

            function a5(ba, bb) {
                return e.nodeName(ba, "table") ? (ba.getElementsByTagName("tbody")[0] || ba.appendChild(ba.ownerDocument.createElement("tbody"))) : ba
            }
        }
    });

    function aT(aY, a0) {
        var aZ = 0;
        a0.each(function () {
            if (this.nodeName !== (aY[aZ] && aY[aZ].nodeName)) {
                return
            }
            var a1 = e.data(aY[aZ++]),
                a2 = e.data(this, a1),
                a3 = a1 && a1.events;
            if (a3) {
                delete a2.handle;
                a2.events = {};
                for (var a4 in a3) {
                    for (var a5 in a3[a4]) {
                        e.event.add(this, a4, a3[a4][a5], a3[a4][a5].data)
                    }
                }
            }
        })
    }
    function P(a4, a1, a2) {
        var aZ, a0, aY, a3 = (a1 && a1[0] ? a1[0].ownerDocument || a1[0] : x);
        if (a4.length === 1 && typeof a4[0] === "string" && a4[0].length < 512 && a3 === x && !s.test(a4[0]) && (e.support.checkClone || !I.test(a4[0]))) {
            a0 = true;
            aY = e.fragments[a4[0]];
            if (aY) {
                if (aY !== 1) {
                    aZ = aY
                }
            }
        }
        if (!aZ) {
            aZ = a3.createDocumentFragment();
            e.clean(a4, a3, aZ, a2)
        }
        if (a0) {
            e.fragments[a4[0]] = aY ? aZ : 1
        }
        return {
            fragment: aZ,
            cacheable: a0
        }
    }
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },


    function (aY, aZ) {
        e.fn[aY] = function (a0) {
            var a3 = [],
                a5 = e(a0),
                a4 = this.length === 1 && this[0].parentNode;
            if (a4 && a4.nodeType === 11 && a4.childNodes.length === 1 && a5.length === 1) {
                a5[aZ](this[0]);
                return this
            } else {
                for (var a1 = 0, a2 = a5.length; a1 < a2; a1++) {
                    var a6 = (a1 > 0 ? this.clone(true) : this).get();
                    e.fn[aZ].apply(e(a5[a1]), a6);
                    a3 = a3.concat(a6)
                }
                return this.pushStack(a3, aY, a5.selector)
            }
        }
    });
    e.extend({
        clean: function (aZ, aY, a7, a4) {
            aY = aY || x;
            if (typeof aY.createElement === "undefined") {
                aY = aY.ownerDocument || aY[0] && aY[0].ownerDocument || x
            }
            var bb = [];
            for (var a5 = 0, a1;
            (a1 = aZ[a5]) != null; a5++) {
                if (typeof a1 === "number") {
                    a1 += ""
                }
                if (!a1) {
                    continue
                }
                if (typeof a1 === "string" && !M.test(a1)) {
                    a1 = aY.createTextNode(a1)
                } else {
                    if (typeof a1 === "string") {
                        a1 = a1.replace(ap, d);
                        var a6 = (ag.exec(a1) || ["", ""])[1].toLowerCase(),
                            a8 = av[a6] || av._default,
                            a9 = a8[0],
                            a0 = aY.createElement("div");
                        a0.innerHTML = a8[1] + a1 + a8[2];
                        while (a9--) {
                            a0 = a0.lastChild
                        }
                        if (!e.support.tbody) {
                            var ba = W.test(a1),
                                a2 = a6 === "table" && !ba ? a0.firstChild && a0.firstChild.childNodes : a8[1] === "<table>" && !ba ? a0.childNodes : [];
                            for (var a3 = a2.length - 1; a3 >= 0; --a3) {
                                if (e.nodeName(a2[a3], "tbody") && !a2[a3].childNodes.length) {
                                    a2[a3].parentNode.removeChild(a2[a3])
                                }
                            }
                        }
                        if (!e.support.leadingWhitespace && o.test(a1)) {
                            a0.insertBefore(aY.createTextNode(o.exec(a1)[0]), a0.firstChild)
                        }
                        a1 = a0.childNodes
                    }
                }
                if (a1.nodeType) {
                    bb.push(a1)
                } else {
                    bb = e.merge(bb, a1)
                }
            }
            if (a7) {
                for (var a5 = 0; bb[a5]; a5++) {
                    if (a4 && e.nodeName(bb[a5], "script") && (!bb[a5].type || bb[a5].type.toLowerCase() === "text/javascript")) {
                        a4.push(bb[a5].parentNode ? bb[a5].parentNode.removeChild(bb[a5]) : bb[a5])
                    } else {
                        if (bb[a5].nodeType === 1) {
                            bb.splice.apply(bb, [a5 + 1, 0].concat(e.makeArray(bb[a5].getElementsByTagName("script"))))
                        }
                        a7.appendChild(bb[a5])
                    }
                }
            }
            return bb
        },
        cleanData: function (a5) {
            var aY, a2, a3 = e.cache,
                a6 = e.event.special,
                a1 = e.support.deleteExpando;
            for (var aZ = 0, a4;
            (a4 = a5[aZ]) != null; aZ++) {
                a2 = a4[e.expando];
                if (a2) {
                    aY = a3[a2];
                    if (aY.events) {
                        for (var a0 in aY.events) {
                            if (a6[a0]) {
                                e.event.remove(a4, a0)
                            } else {
                                aM(a4, a0, aY.handle)
                            }
                        }
                    }
                    if (a1) {
                        delete a4[e.expando]
                    } else {
                        if (a4.removeAttribute) {
                            a4.removeAttribute(e.expando)
                        }
                    }
                    delete a3[a2]
                }
            }
        }
    });
    var aE = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        ac = /alpha\([^)]*\)/,
        w = /opacity=([^)]*)/,
        aw = /float/i,
        v = /-([a-z])/ig,
        aX = /([A-Z])/g,
        X = /^-?\d+(?:px)?$/i,
        y = /^-?\d/,
        aC = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        B = ["Left", "Right"],
        aP = ["Top", "Bottom"],
        ai = x.defaultView && x.defaultView.getComputedStyle,
        aW = e.support.cssFloat ? "cssFloat" : "styleFloat",
    U = function (aY, aZ) {
        return aZ.toUpperCase()
    };
    e.fn.css = function (aY, aZ) {
        return ah(this, aY, aZ, true, function (a1, a2, a0) {
            if (a0 === H) {
                return e.curCSS(a1, a2)
            }
            if (typeof a0 === "number" && !aE.test(a2)) {
                a0 += "px"
            }
            e.style(a1, a2, a0)
        })
    };
    e.extend({
        style: function (a0, a4, aY) {
            if (!a0 || a0.nodeType === 3 || a0.nodeType === 8) {
                return H
            }
            if ((a4 === "width" || a4 === "height") && parseFloat(aY) < 0) {
                aY = H
            }
            var aZ = a0.style || a0,
                a2 = aY !== H;
            if (!e.support.opacity && a4 === "opacity") {
                if (a2) {
                    aZ.zoom = 1;
                    var a3 = parseInt(aY, 10) + "" === "NaN" ? "" : "alpha(opacity=" + aY * 100 + ")";
                    var a1 = aZ.filter || e.curCSS(a0, "filter") || "";
                    aZ.filter = ac.test(a1) ? a1.replace(ac, a3) : a3
                }
                return aZ.filter && aZ.filter.indexOf("opacity=") >= 0 ? (parseFloat(w.exec(aZ.filter)[1]) / 100) + "" : ""
            }
            if (aw.test(a4)) {
                a4 = aW
            }
            a4 = a4.replace(v, U);
            if (a2) {
                aZ[a4] = aY
            }
            return aZ[a4]
        },
        css: function (aY, a5, aZ, a2) {
            if (a5 === "width" || a5 === "height") {
                var a0, a4 = aC,
                    a1 = a5 === "width" ? B : aP;

                function a3() {
                    a0 = a5 === "width" ? aY.offsetWidth : aY.offsetHeight;
                    if (a2 === "border") {
                        return
                    }
                    e.each(a1, function () {
                        if (!a2) {
                            a0 -= parseFloat(e.curCSS(aY, "padding" + this, true)) || 0
                        }
                        if (a2 === "margin") {
                            a0 += parseFloat(e.curCSS(aY, "margin" + this, true)) || 0
                        } else {
                            a0 -= parseFloat(e.curCSS(aY, "border" + this + "Width", true)) || 0
                        }
                    })
                }
                if (aY.offsetWidth !== 0) {
                    a3()
                } else {
                    e.swap(aY, a4, a3)
                }
                return Math.max(0, Math.round(a0))
            }
            return e.curCSS(aY, a5, aZ)
        },
        curCSS: function (aZ, a7, a0) {
            var a2, aY = aZ.style,
                a1;
            if (!e.support.opacity && a7 === "opacity" && aZ.currentStyle) {
                a2 = w.test(aZ.currentStyle.filter || "") ? (parseFloat(RegExp.$1) / 100) + "" : "";
                return a2 === "" ? "1" : a2
            }
            if (aw.test(a7)) {
                a7 = aW
            }
            if (!a0 && aY && aY[a7]) {
                a2 = aY[a7]
            } else {
                if (ai) {
                    if (aw.test(a7)) {
                        a7 = "float"
                    }
                    a7 = a7.replace(aX, "-$1").toLowerCase();
                    var a8 = aZ.ownerDocument.defaultView;
                    if (!a8) {
                        return null
                    }
                    var a5 = a8.getComputedStyle(aZ, null);
                    if (a5) {
                        a2 = a5.getPropertyValue(a7)
                    }
                    if (a7 === "opacity" && a2 === "") {
                        a2 = "1"
                    }
                } else {
                    if (aZ.currentStyle) {
                        var a3 = a7.replace(v, U);
                        a2 = aZ.currentStyle[a7] || aZ.currentStyle[a3];
                        if (!X.test(a2) && y.test(a2)) {
                            var a4 = aY.left,
                                a6 = aZ.runtimeStyle.left;
                            aZ.runtimeStyle.left = aZ.currentStyle.left;
                            aY.left = a3 === "fontSize" ? "1em" : (a2 || 0);
                            a2 = aY.pixelLeft + "px";
                            aY.left = a4;
                            aZ.runtimeStyle.left = a6
                        }
                    }
                }
            }
            return a2
        },
        swap: function (a0, a1, aY) {
            var a2 = {};
            for (var aZ in a1) {
                a2[aZ] = a0.style[aZ];
                a0.style[aZ] = a1[aZ]
            }
            aY.call(a0);
            for (var aZ in a1) {
                a0.style[aZ] = a2[aZ]
            }
        }
    });
    if (e.expr && e.expr.filters) {
        e.expr.filters.hidden = function (a1) {
            var a0 = a1.offsetWidth,
                aY = a1.offsetHeight,
                aZ = a1.nodeName.toLowerCase() === "tr";
            return a0 === 0 && aY === 0 && !aZ ? true : a0 > 0 && aY > 0 && !aZ ? false : e.curCSS(a1, "display") === "none"
        };
        e.expr.filters.visible = function (aY) {
            return !e.expr.filters.hidden(aY)
        }
    }
    var C = A(),
        aK = /<script(.|\s)*?\/script>/gi,
        Z = /select|textarea/i,
        ay = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
        z = /=\?(&|$)/,
        L = /\?/,
        an = /(\?|&)_=.*?(&|$)/,
        ak = /^(\w+:)?\/\/([^\/?#]+)/,
        l = /%20/g,
        c = e.fn.load;
    e.fn.extend({
        load: function (a2, a0, a1) {
            if (typeof a2 !== "string") {
                return c.call(this, a2)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var aY = a2.indexOf(" ");
            if (aY >= 0) {
                var aZ = a2.slice(aY, a2.length);
                a2 = a2.slice(0, aY)
            }
            var a3 = "GET";
            if (a0) {
                if (e.isFunction(a0)) {
                    a1 = a0;
                    a0 = null
                } else {
                    if (typeof a0 === "object") {
                        a0 = e.param(a0, e.ajaxSettings.traditional);
                        a3 = "POST"
                    }
                }
            }
            var a4 = this;
            e.ajax({
                url: a2,
                type: a3,
                dataType: "html",
                data: a0,
                complete: function (a5, a6) {
                    if (a6 === "success" || a6 === "notmodified") {
                        a4.html(aZ ? e("<div />").append(a5.responseText.replace(aK, "")).find(aZ) : a5.responseText)
                    }
                    if (a1) {
                        a4.each(a1, [a5.responseText, a6, a5])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return e.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Z.test(this.nodeName) || ay.test(this.type))
            }).map(function (aY, a0) {
                var aZ = e(this).val();
                return aZ == null ? null : e.isArray(aZ) ? e.map(aZ, function (a1, a2) {
                    return {
                        name: a0.name,
                        value: a1
                    }
                }) : {
                    name: a0.name,
                    value: aZ
                }
            }).get()
        }
    });
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (aY, aZ) {
        e.fn[aZ] = function (a0) {
            return this.bind(aZ, a0)
        }
    });
    e.extend({
        get: function (aY, aZ, a1, a0) {
            if (e.isFunction(aZ)) {
                a0 = a0 || a1;
                a1 = aZ;
                aZ = null
            }
            return e.ajax({
                type: "GET",
                url: aY,
                data: aZ,
                success: a1,
                dataType: a0
            })
        },
        getScript: function (aZ, aY) {
            return e.get(aZ, null, aY, "script")
        },
        getJSON: function (aY, aZ, a0) {
            return e.get(aY, aZ, a0, "json")
        },
        post: function (aY, aZ, a1, a0) {
            if (e.isFunction(aZ)) {
                a0 = a0 || a1;
                a1 = aZ;
                aZ = {}
            }
            return e.ajax({
                type: "POST",
                url: aY,
                data: aZ,
                success: a1,
                dataType: a0
            })
        },
        ajaxSetup: function (aY) {
            e.extend(e.ajaxSettings, aY)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: aH.XMLHttpRequest && (aH.location.protocol !== "file:" || !aH.ActiveXObject) ?
            function () {
                return new aH.XMLHttpRequest()
            } : function () {
                try {
                    return new aH.ActiveXObject("Microsoft.XMLHTTP")
                } catch (aY) { }
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        etag: {},
        ajax: function (bd) {
            var a4 = e.extend(true, {},
            e.ajaxSettings, bd);
            var a0, bg, aY, a5 = bd && bd.context || a4,
                be = a4.type.toUpperCase();
            if (a4.data && a4.processData && typeof a4.data !== "string") {
                a4.data = e.param(a4.data, a4.traditional)
            }
            if (a4.dataType === "jsonp") {
                if (be === "GET") {
                    if (!z.test(a4.url)) {
                        a4.url += (L.test(a4.url) ? "&" : "?") + (a4.jsonp || "callback") + "=?"
                    }
                } else {
                    if (!a4.data || !z.test(a4.data)) {
                        a4.data = (a4.data ? a4.data + "&" : "") + (a4.jsonp || "callback") + "=?"
                    }
                }
                a4.dataType = "json"
            }
            if (a4.dataType === "json" && (a4.data && z.test(a4.data) || z.test(a4.url))) {
                a0 = a4.jsonpCallback || ("jsonp" + C++);
                if (a4.data) {
                    a4.data = (a4.data + "").replace(z, "=" + a0 + "$1")
                }
                a4.url = a4.url.replace(z, "=" + a0 + "$1");
                a4.dataType = "script";
                aH[a0] = aH[a0] ||
                function (bk) {
                    aY = bk;
                    a7();
                    a2();
                    aH[a0] = H;
                    try {
                        delete aH[a0]
                    } catch (bl) { }
                    if (ba) {
                        ba.removeChild(a9)
                    }
                }
            }
            if (a4.dataType === "script" && a4.cache === null) {
                a4.cache = false
            }
            if (a4.cache === false && be === "GET") {
                var a6 = A();
                var bj = a4.url.replace(an, "$1_=" + a6 + "$2");
                a4.url = bj + ((bj === a4.url) ? (L.test(a4.url) ? "&" : "?") + "_=" + a6 : "")
            }
            if (a4.data && be === "GET") {
                a4.url += (L.test(a4.url) ? "&" : "?") + a4.data
            }
            if (a4.global && !e.active++) {
                e.event.trigger("ajaxStart")
            }
            var a3 = ak.exec(a4.url),
                aZ = a3 && (a3[1] && a3[1] !== location.protocol || a3[2] !== location.host);
            if (a4.dataType === "script" && be === "GET" && aZ) {
                var ba = x.getElementsByTagName("head")[0] || x.documentElement;
                var a9 = x.createElement("script");
                a9.src = a4.url;
                if (a4.scriptCharset) {
                    a9.charset = a4.scriptCharset
                }
                if (!a0) {
                    var a1 = false;
                    a9.onload = a9.onreadystatechange = function () {
                        if (!a1 && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            a1 = true;
                            a7();
                            a2();
                            a9.onload = a9.onreadystatechange = null;
                            if (ba && a9.parentNode) {
                                ba.removeChild(a9)
                            }
                        }
                    }
                }
                ba.insertBefore(a9, ba.firstChild);
                return H
            }
            var bc = false;
            var bi = a4.xhr();
            if (!bi) {
                return
            }
            if (a4.username) {
                bi.open(be, a4.url, a4.async, a4.username, a4.password)
            } else {
                bi.open(be, a4.url, a4.async)
            }
            try {
                if (a4.data || bd && bd.contentType) {
                    bi.setRequestHeader("Content-Type", a4.contentType)
                }
                if (a4.ifModified) {
                    if (e.lastModified[a4.url]) {
                        bi.setRequestHeader("If-Modified-Since", e.lastModified[a4.url])
                    }
                    if (e.etag[a4.url]) {
                        bi.setRequestHeader("If-None-Match", e.etag[a4.url])
                    }
                }
                if (!aZ) {
                    bi.setRequestHeader("X-Requested-With", "XMLHttpRequest")
                }
                bi.setRequestHeader("Accept", a4.dataType && a4.accepts[a4.dataType] ? a4.accepts[a4.dataType] + ", */*" : a4.accepts._default)
            } catch (bf) { }
            if (a4.beforeSend && a4.beforeSend.call(a5, bi, a4) === false) {
                if (a4.global && ! --e.active) {
                    e.event.trigger("ajaxStop")
                }
                bi.abort();
                return false
            }
            if (a4.global) {
                bh("ajaxSend", [bi, a4])
            }
            var a8 = bi.onreadystatechange = function (bk) {
                if (!bi || bi.readyState === 0 || bk === "abort") {
                    if (!bc) {
                        a2()
                    }
                    bc = true;
                    if (bi) {
                        bi.onreadystatechange = e.noop
                    }
                } else {
                    if (!bc && bi && (bi.readyState === 4 || bk === "timeout")) {
                        bc = true;
                        bi.onreadystatechange = e.noop;
                        bg = bk === "timeout" ? "timeout" : !e.httpSuccess(bi) ? "error" : a4.ifModified && e.httpNotModified(bi, a4.url) ? "notmodified" : "success";
                        var bm;
                        if (bg === "success") {
                            try {
                                aY = e.httpData(bi, a4.dataType, a4)
                            } catch (bl) {
                                bg = "parsererror";
                                bm = bl
                            }
                        }
                        if (bg === "success" || bg === "notmodified") {
                            if (!a0) {
                                a7()
                            }
                        } else {
                            e.handleError(a4, bi, bg, bm)
                        }
                        a2();
                        if (bk === "timeout") {
                            bi.abort()
                        }
                        if (a4.async) {
                            bi = null
                        }
                    }
                }
            };
            try {
                var bb = bi.abort;
                bi.abort = function () {
                    if (bi) {
                        bb.call(bi)
                    }
                    a8("abort")
                }
            } catch (bf) { }
            if (a4.async && a4.timeout > 0) {
                setTimeout(function () {
                    if (bi && !bc) {
                        a8("timeout")
                    }
                },
                a4.timeout)
            }
            try {
                bi.send(be === "POST" || be === "PUT" || be === "DELETE" ? a4.data : null)
            } catch (bf) {
                e.handleError(a4, bi, null, bf);
                a2()
            }
            if (!a4.async) {
                a8()
            }
            function a7() {
                if (a4.success) {
                    a4.success.call(a5, aY, bg, bi)
                }
                if (a4.global) {
                    bh("ajaxSuccess", [bi, a4])
                }
            }
            function a2() {
                if (a4.complete) {
                    a4.complete.call(a5, bi, bg)
                }
                if (a4.global) {
                    bh("ajaxComplete", [bi, a4])
                }
                if (a4.global && ! --e.active) {
                    e.event.trigger("ajaxStop")
                }
            }
            function bh(bl, bk) {
                (a4.context ? e(a4.context) : e.event).trigger(bl, bk)
            }
            return bi
        },
        handleError: function (aZ, aY, a0, a1) {
            if (aZ.error) {
                aZ.error.call(aZ.context || aZ, aY, a0, a1)
            }
            if (aZ.global) {
                (aZ.context ? e(aZ.context) : e.event).trigger("ajaxError", [aY, aZ, a1])
            }
        },
        active: 0,
        httpSuccess: function (aZ) {
            try {
                return !aZ.status && location.protocol === "file:" || (aZ.status >= 200 && aZ.status < 300) || aZ.status === 304 || aZ.status === 1223 || aZ.status === 0
            } catch (aY) { }
            return false
        },
        httpNotModified: function (aY, aZ) {
            var a1 = aY.getResponseHeader("Last-Modified"),
                a0 = aY.getResponseHeader("Etag");
            if (a1) {
                e.lastModified[aZ] = a1
            }
            if (a0) {
                e.etag[aZ] = a0
            }
            return aY.status === 304 || aY.status === 0
        },
        httpData: function (aY, a2, a3) {
            var aZ = aY.getResponseHeader("content-type") || "",
                a0 = a2 === "xml" || !a2 && aZ.indexOf("xml") >= 0,
                a1 = a0 ? aY.responseXML : aY.responseText;
            if (a0 && a1.documentElement.nodeName === "parsererror") {
                e.error("parsererror")
            }
            if (a3 && a3.dataFilter) {
                a1 = a3.dataFilter(a1, a2)
            }
            if (typeof a1 === "string") {
                if (a2 === "json" || !a2 && aZ.indexOf("json") >= 0) {
                    a1 = e.parseJSON(a1)
                } else {
                    if (a2 === "script" || !a2 && aZ.indexOf("javascript") >= 0) {
                        e.globalEval(a1)
                    }
                }
            }
            return a1
        },
        param: function (a0, a3) {
            var a1 = [];
            if (a3 === H) {
                a3 = e.ajaxSettings.traditional
            }
            if (e.isArray(a0) || a0.jquery) {
                e.each(a0, function () {
                    aY(this.name, this.value)
                })
            } else {
                for (var aZ in a0) {
                    a2(aZ, a0[aZ])
                }
            }
            return a1.join("&").replace(l, "+");

            function a2(a4, a5) {
                if (e.isArray(a5)) {
                    e.each(a5, function (a6, a7) {
                        if (a3 || /\[\]$/.test(a4)) {
                            aY(a4, a7)
                        } else {
                            a2(a4 + "[" + (typeof a7 === "object" || e.isArray(a7) ? a6 : "") + "]", a7)
                        }
                    })
                } else {
                    if (!a3 && a5 != null && typeof a5 === "object") {
                        e.each(a5, function (a6, a7) {
                            a2(a4 + "[" + a6 + "]", a7)
                        })
                    } else {
                        aY(a4, a5)
                    }
                }
            }
            function aY(a4, a5) {
                a5 = e.isFunction(a5) ? a5() : a5;
                a1[a1.length] = encodeURIComponent(a4) + "=" + encodeURIComponent(a5)
            }
        }
    });
    var T = {},
        R = /toggle|show|hide/,
        aO = /^([+-]=)?([\d+-.]+)(.*)$/,
        aj, aU = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ];
    e.fn.extend({
        show: function (a7, a0) {
            if (a7 || a7 === 0) {
                return this.animate(t("show", 3), a7, a0)
            } else {
                for (var aY = 0, a1 = this.length; aY < a1; aY++) {
                    var a4 = e.data(this[aY], "olddisplay");
                    this[aY].style.display = a4 || "";
                    if (e.css(this[aY], "display") === "none") {
                        var a6 = this[aY].nodeName,
                            a5;
                        if (T[a6]) {
                            a5 = T[a6]
                        } else {
                            var aZ = e("<" + a6 + " />").appendTo("body");
                            a5 = aZ.css("display");
                            if (a5 === "none") {
                                a5 = "block"
                            }
                            aZ.remove();
                            T[a6] = a5
                        }
                        e.data(this[aY], "olddisplay", a5)
                    }
                }
                for (var a2 = 0, a3 = this.length; a2 < a3; a2++) {
                    this[a2].style.display = e.data(this[a2], "olddisplay") || ""
                }
                return this
            }
        },
        hide: function (a4, a0) {
            if (a4 || a4 === 0) {
                return this.animate(t("hide", 3), a4, a0)
            } else {
                for (var aY = 0, a1 = this.length; aY < a1; aY++) {
                    var a3 = e.data(this[aY], "olddisplay");
                    if (!a3 && a3 !== "none") {
                        e.data(this[aY], "olddisplay", e.css(this[aY], "display"))
                    }
                }
                for (var aZ = 0, a2 = this.length; aZ < a2; aZ++) {
                    this[aZ].style.display = "none"
                }
                return this
            }
        },
        _toggle: e.fn.toggle,
        toggle: function (aZ, a0) {
            var aY = typeof aZ === "boolean";
            if (e.isFunction(aZ) && e.isFunction(a0)) {
                this._toggle.apply(this, arguments)
            } else {
                if (aZ == null || aY) {
                    this.each(function () {
                        var a1 = aY ? aZ : e(this).is(":hidden");
                        e(this)[a1 ? "show" : "hide"]()
                    })
                } else {
                    this.animate(t("toggle", 3), aZ, a0)
                }
            }
            return this
        },
        fadeTo: function (aZ, aY, a0) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: aY
            },
            aZ, a0)
        },
        animate: function (aZ, a0, a1, a2) {
            var aY = e.speed(a0, a1, a2);
            if (e.isEmptyObject(aZ)) {
                return this.each(aY.complete)
            }
            return this[aY.queue === false ? "each" : "queue"](function () {
                var a4 = e.extend({},
                aY),
                    a7, a5 = this.nodeType === 1 && e(this).is(":hidden"),
                    a3 = this;
                for (a7 in aZ) {
                    var a6 = a7.replace(v, U);
                    if (a7 !== a6) {
                        aZ[a6] = aZ[a7];
                        delete aZ[a7];
                        a7 = a6
                    }
                    if (aZ[a7] === "hide" && a5 || aZ[a7] === "show" && !a5) {
                        return a4.complete.call(this)
                    }
                    if ((a7 === "height" || a7 === "width") && this.style) {
                        a4.display = e.css(this, "display");
                        a4.overflow = this.style.overflow
                    }
                    if (e.isArray(aZ[a7])) {
                        (a4.specialEasing = a4.specialEasing || {})[a7] = aZ[a7][1];
                        aZ[a7] = aZ[a7][0]
                    }
                }
                if (a4.overflow != null) {
                    this.style.overflow = "hidden"
                }
                a4.curAnim = e.extend({},
                aZ);
                e.each(aZ, function (bd, bb) {
                    var be = new e.fx(a3, a4, bd);
                    if (R.test(bb)) {
                        be[bb === "toggle" ? a5 ? "show" : "hide" : bb](aZ)
                    } else {
                        var bc = aO.exec(bb),
                            ba = be.cur(true) || 0;
                        if (bc) {
                            var a8 = parseFloat(bc[2]),
                                a9 = bc[3] || "px";
                            if (a9 !== "px") {
                                a3.style[bd] = (a8 || 1) + a9;
                                ba = ((a8 || 1) / be.cur(true)) * ba;
                                a3.style[bd] = ba + a9
                            }
                            if (bc[1]) {
                                a8 = ((bc[1] === "-=" ? -1 : 1) * a8) + ba
                            }
                            be.custom(ba, a8, a9)
                        } else {
                            be.custom(ba, bb, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function (aZ, a0) {
            var aY = e.timers;
            if (aZ) {
                this.queue([])
            }
            this.each(function () {
                for (var a1 = aY.length - 1; a1 >= 0; a1--) {
                    if (aY[a1].elem === this) {
                        if (a0) {
                            aY[a1](true)
                        }
                        aY.splice(a1, 1)
                    }
                }
            });
            if (!a0) {
                this.dequeue()
            }
            return this
        }
    });
    e.each({
        slideDown: t("show", 1),
        slideUp: t("hide", 1),
        slideToggle: t("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    },


    function (aY, aZ) {
        e.fn[aY] = function (a1, a0) {
            return this.animate(aZ, a1, a0)
        }
    });
    e.extend({
        speed: function (aY, a0, a1) {
            var aZ = aY && typeof aY === "object" ? aY : {
                complete: a1 || !a1 && a0 || e.isFunction(aY) && aY,
                duration: aY,
                easing: a1 && a0 || a0 && !e.isFunction(a0) && a0
            };
            aZ.duration = e.fx.off ? 0 : typeof aZ.duration === "number" ? aZ.duration : e.fx.speeds[aZ.duration] || e.fx.speeds._default;
            aZ.old = aZ.complete;
            aZ.complete = function () {
                if (aZ.queue !== false) {
                    e(this).dequeue()
                }
                if (e.isFunction(aZ.old)) {
                    aZ.old.call(this)
                }
            };
            return aZ
        },
        easing: {
            linear: function (a1, a0, aY, aZ) {
                return aY + aZ * a1
            },
            swing: function (a1, a0, aY, aZ) {
                return ((-Math.cos(a1 * Math.PI) / 2) + 0.5) * aZ + aY
            }
        },
        timers: [],
        fx: function (aZ, a0, aY) {
            this.options = a0;
            this.elem = aZ;
            this.prop = aY;
            if (!a0.orig) {
                a0.orig = {}
            }
        }
    });
    e.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            } (e.fx.step[this.prop] || e.fx.step._default)(this);
            if ((this.prop === "height" || this.prop === "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function (aZ) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var aY = parseFloat(e.css(this.elem, this.prop, aZ));
            return aY && aY > -10000 ? aY : parseFloat(e.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (a1, aY, a0) {
            this.startTime = A();
            this.start = a1;
            this.end = aY;
            this.unit = a0 || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var a2 = this;

            function aZ(a3) {
                return a2.step(a3)
            }
            aZ.elem = this.elem;
            if (aZ() && e.timers.push(aZ) && !aj) {
                aj = setInterval(e.fx.tick, 13)
            }
        },
        show: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            e(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (a3) {
            var a6 = A(),
                a1 = true;
            if (a3 || a6 >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var aZ in this.options.curAnim) {
                    if (this.options.curAnim[aZ] !== true) {
                        a1 = false
                    }
                }
                if (a1) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        var a4 = e.data(this.elem, "olddisplay");
                        this.elem.style.display = a4 ? a4 : this.options.display;
                        if (e.css(this.elem, "display") === "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    if (this.options.hide) {
                        e(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var a5 in this.options.curAnim) {
                            e.style(this.elem, a5, this.options.orig[a5])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var a2 = a6 - this.startTime;
                this.state = a2 / this.options.duration;
                var aY = this.options.specialEasing && this.options.specialEasing[this.prop];
                var a0 = this.options.easing || (e.easing.swing ? "swing" : "linear");
                this.pos = e.easing[aY || a0](this.state, a2, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    e.extend(e.fx, {
        tick: function () {
            var aY = e.timers;
            for (var aZ = 0; aZ < aY.length; aZ++) {
                if (!aY[aZ]()) {
                    aY.splice(aZ--, 1)
                }
            }
            if (!aY.length) {
                e.fx.stop()
            }
        },
        stop: function () {
            clearInterval(aj);
            aj = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (aY) {
                e.style(aY.elem, "opacity", aY.now)
            },
            _default: function (aY) {
                if (aY.elem.style && aY.elem.style[aY.prop] != null) {
                    aY.elem.style[aY.prop] = (aY.prop === "width" || aY.prop === "height" ? Math.max(0, aY.now) : aY.now) + aY.unit
                } else {
                    aY.elem[aY.prop] = aY.now
                }
            }
        }
    });
    if (e.expr && e.expr.filters) {
        e.expr.filters.animated = function (aY) {
            return e.grep(e.timers, function (aZ) {
                return aY === aZ.elem
            }).length
        }
    }
    function t(aZ, aY) {
        var a0 = {};
        e.each(aU.concat.apply([], aU.slice(0, aY)), function () {
            a0[this] = aZ
        });
        return a0
    }
    if ("getBoundingClientRect" in x.documentElement) {
        e.fn.offset = function (a0) {
            var a2 = this[0];
            if (a0) {
                return this.each(function (a8) {
                    e.offset.setOffset(this, a0, a8)
                })
            }
            if (!a2 || !a2.ownerDocument) {
                return null
            }
            if (a2 === a2.ownerDocument.body) {
                return e.offset.bodyOffset(a2)
            }
            var aZ = a2.getBoundingClientRect(),
                a5 = a2.ownerDocument,
                a1 = a5.body,
                a6 = a5.documentElement,
                aY = a6.clientTop || a1.clientTop || 0,
                a7 = a6.clientLeft || a1.clientLeft || 0,
                a4 = aZ.top + (self.pageYOffset || e.support.boxModel && a6.scrollTop || a1.scrollTop) - aY,
                a3 = aZ.left + (self.pageXOffset || e.support.boxModel && a6.scrollLeft || a1.scrollLeft) - a7;
            return {
                top: a4,
                left: a3
            }
        }
    } else {
        e.fn.offset = function (aZ) {
            var a1 = this[0];
            if (aZ) {
                return this.each(function (ba) {
                    e.offset.setOffset(this, aZ, ba)
                })
            }
            if (!a1 || !a1.ownerDocument) {
                return null
            }
            if (a1 === a1.ownerDocument.body) {
                return e.offset.bodyOffset(a1)
            }
            e.offset.initialize();
            var a4 = a1.offsetParent,
                aY = a1,
                a7 = a1.ownerDocument,
                a5, a8 = a7.documentElement,
                a0 = a7.body,
                a9 = a7.defaultView,
                a3 = a9 ? a9.getComputedStyle(a1, null) : a1.currentStyle,
            a6 = a1.offsetTop,
            a2 = a1.offsetLeft;
            while ((a1 = a1.parentNode) && a1 !== a0 && a1 !== a8) {
                if (e.offset.supportsFixedPosition && a3.position === "fixed") {
                    break
                }
                a5 = a9 ? a9.getComputedStyle(a1, null) : a1.currentStyle;
                a6 -= a1.scrollTop;
                a2 -= a1.scrollLeft;
                if (a1 === a4) {
                    a6 += a1.offsetTop;
                    a2 += a1.offsetLeft;
                    if (e.offset.doesNotAddBorder && !(e.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(a1.nodeName))) {
                        a6 += parseFloat(a5.borderTopWidth) || 0;
                        a2 += parseFloat(a5.borderLeftWidth) || 0
                    }
                    aY = a4,
                    a4 = a1.offsetParent
                }
                if (e.offset.subtractsBorderForOverflowNotVisible && a5.overflow !== "visible") {
                    a6 += parseFloat(a5.borderTopWidth) || 0;
                    a2 += parseFloat(a5.borderLeftWidth) || 0
                }
                a3 = a5
            }
            if (a3.position === "relative" || a3.position === "static") {
                a6 += a0.offsetTop;
                a2 += a0.offsetLeft
            }
            if (e.offset.supportsFixedPosition && a3.position === "fixed") {
                a6 += Math.max(a8.scrollTop, a0.scrollTop);
                a2 += Math.max(a8.scrollLeft, a0.scrollLeft)
            }
            return {
                top: a6,
                left: a2
            }
        }
    }
    e.offset = {
        initialize: function () {
            var a4 = x.body,
                a5 = x.createElement("div"),
                aZ, a3, a1, a0, a2 = parseFloat(e.curCSS(a4, "marginTop", true)) || 0,
                aY = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            e.extend(a5.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            a5.innerHTML = aY;
            a4.insertBefore(a5, a4.firstChild);
            aZ = a5.firstChild;
            a3 = aZ.firstChild;
            a0 = aZ.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (a3.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (a0.offsetTop === 5);
            a3.style.position = "fixed",
            a3.style.top = "20px";
            this.supportsFixedPosition = (a3.offsetTop === 20 || a3.offsetTop === 15);
            a3.style.position = a3.style.top = "";
            aZ.style.overflow = "hidden",
            aZ.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (a3.offsetTop === -5);
            this.doesNotIncludeMarginInBodyOffset = (a4.offsetTop !== a2);
            a4.removeChild(a5);
            a4 = a5 = aZ = a3 = a1 = a0 = null;
            e.offset.initialize = e.noop
        },
        bodyOffset: function (aY) {
            var a0 = aY.offsetTop,
                aZ = aY.offsetLeft;
            e.offset.initialize();
            if (e.offset.doesNotIncludeMarginInBodyOffset) {
                a0 += parseFloat(e.curCSS(aY, "marginTop", true)) || 0;
                aZ += parseFloat(e.curCSS(aY, "marginLeft", true)) || 0
            }
            return {
                top: a0,
                left: aZ
            }
        },
        setOffset: function (a2, a0, aZ) {
            if (/static/.test(e.curCSS(a2, "position"))) {
                a2.style.position = "relative"
            }
            var a4 = e(a2),
                a3 = a4.offset(),
                a5 = parseInt(e.curCSS(a2, "top", true), 10) || 0,
                aY = parseInt(e.curCSS(a2, "left", true), 10) || 0;
            if (e.isFunction(a0)) {
                a0 = a0.call(a2, aZ, a3)
            }
            var a1 = {
                top: (a0.top - a3.top) + a5,
                left: (a0.left - a3.left) + aY
            };
            if ("using" in a0) {
                a0.using.call(a2, a1)
            } else {
                a4.css(a1)
            }
        }
    };
    e.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var a0 = this[0],
                aZ = this.offsetParent(),
                a1 = this.offset(),
                aY = /^body|html$/i.test(aZ[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : aZ.offset();
            a1.top -= parseFloat(e.curCSS(a0, "marginTop", true)) || 0;
            a1.left -= parseFloat(e.curCSS(a0, "marginLeft", true)) || 0;
            aY.top += parseFloat(e.curCSS(aZ[0], "borderTopWidth", true)) || 0;
            aY.left += parseFloat(e.curCSS(aZ[0], "borderLeftWidth", true)) || 0;
            return {
                top: a1.top - aY.top,
                left: a1.left - aY.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var aY = this.offsetParent || x.body;
                while (aY && (!/^body|html$/i.test(aY.nodeName) && e.css(aY, "position") === "static")) {
                    aY = aY.offsetParent
                }
                return aY
            })
        }
    });
    e.each(["Left", "Top"], function (aY, a0) {
        var aZ = "scroll" + a0;
        e.fn[aZ] = function (a2) {
            var a3 = this[0],
                a1;
            if (!a3) {
                return null
            }
            if (a2 !== H) {
                return this.each(function () {
                    a1 = aQ(this);
                    if (a1) {
                        a1.scrollTo(!aY ? a2 : e(a1).scrollLeft(), aY ? a2 : e(a1).scrollTop())
                    } else {
                        this[aZ] = a2
                    }
                })
            } else {
                a1 = aQ(a3);
                return a1 ? ("pageXOffset" in a1) ? a1[aY ? "pageYOffset" : "pageXOffset"] : e.support.boxModel && a1.document.documentElement[aZ] || a1.document.body[aZ] : a3[aZ]
            }
        }
    });

    function aQ(aY) {
        return ("scrollTo" in aY && aY.document) ? aY : aY.nodeType === 9 ? aY.defaultView || aY.parentWindow : false
    }
    e.each(["Height", "Width"], function (aY, a0) {
        var aZ = a0.toLowerCase();
        e.fn["inner" + a0] = function () {
            return this[0] ? e.css(this[0], aZ, false, "padding") : null
        };
        e.fn["outer" + a0] = function (a1) {
            return this[0] ? e.css(this[0], aZ, false, a1 ? "margin" : "border") : null
        };
        e.fn[aZ] = function (a2) {
            var a1 = this[0];
            if (!a1) {
                return a2 == null ? null : this
            }
            if (e.isFunction(a2)) {
                return this.each(function (a4) {
                    var a3 = e(this);
                    a3[aZ](a2.call(this, a4, a3[aZ]()))
                })
            }
            return ("scrollTo" in a1 && a1.document) ? a1.document.compatMode === "CSS1Compat" && a1.document.documentElement["client" + a0] || a1.document.body["client" + a0] : (a1.nodeType === 9) ? Math.max(a1.documentElement["client" + a0], a1.body["scroll" + a0], a1.documentElement["scroll" + a0], a1.body["offset" + a0], a1.documentElement["offset" + a0]) : a2 === H ? e.css(a1, aZ) : this.css(aZ, typeof a2 === "string" ? a2 : a2 + "px")
        }
    });
    aH.jQuery = aH.$ = e
})(window);
jQuery.fn.extend({
    everyTime: function (a, c, b, d) {
        return this.each(function () {
            jQuery.timer.add(this, a, c, b, d)
        })
    },
    oneTime: function (a, c, b) {
        return this.each(function () {
            jQuery.timer.add(this, a, c, b, 1)
        })
    },
    stopTime: function (b, a) {
        return this.each(function () {
            jQuery.timer.remove(this, b, a)
        })
    }
});
jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            ms: 1,
            cs: 10,
            ds: 100,
            s: 1000,
            das: 10000,
            hs: 100000,
            ks: 1000000
        },
        timeParse: function (a) {
            if (a == undefined || a == null) {
                return null
            }
            var b = this.regex.exec(jQuery.trim(a.toString()));
            if (b[2]) {
                var d = parseFloat(b[1]);
                var c = this.powers[b[2]] || 1;
                return d * c
            } else {
                return a
            }
        },
        add: function (a, e, h, f, g) {
            var b = 0;
            if (jQuery.isFunction(h)) {
                if (!g) {
                    g = f
                }
                f = h;
                h = e
            }
            e = jQuery.timer.timeParse(e);
            if (typeof e != "number" || isNaN(e) || e < 0) {
                return
            }
            if (typeof g != "number" || isNaN(g) || g < 0) {
                g = 0
            }
            g = g || 0;
            var c = jQuery.data(a, this.dataKey) || jQuery.data(a, this.dataKey, {});
            if (!c[h]) {
                c[h] = {}
            }
            f.timerID = f.timerID || this.guid++;
            var d = function () {
                if ((++b > g && g !== 0) || f.call(a, b) === false) {
                    jQuery.timer.remove(a, h, f)
                }
            };
            d.timerID = f.timerID;
            if (!c[h][f.timerID]) {
                c[h][f.timerID] = window.setInterval(d, e)
            }
            this.global.push(a)
        },
        remove: function (d, c, b) {
            var a = jQuery.data(d, this.dataKey),
                e;
            if (a) {
                if (!c) {
                    for (c in a) {
                        this.remove(d, c, b)
                    }
                } else {
                    if (a[c]) {
                        if (b) {
                            if (b.timerID) {
                                window.clearInterval(a[c][b.timerID]);
                                delete a[c][b.timerID]
                            }
                        } else {
                            for (var b in a[c]) {
                                window.clearInterval(a[c][b]);
                                delete a[c][b]
                            }
                        }
                        for (e in a[c]) {
                            break
                        }
                        if (!e) {
                            e = null;
                            delete a[c]
                        }
                    }
                }
                for (e in a) {
                    break
                }
                if (!e) {
                    jQuery.removeData(d, this.dataKey)
                }
            }
        }
    }
});
jQuery(window).bind("unload", function () {
    jQuery.each(jQuery.timer.global, function (a, b) {
        jQuery.timer.remove(b)
    })
});
jQuery.extend({
    easing: {
        easein: function (h, f, e, g, a) {
            return g * (f /= a) * f + e
        },
        easeinout: function (a, i, f, g, h) {
            if (i < h / 2) {
                return 2 * g * i * i / (h * h) + f
            }
            var e = i - h / 2;
            return -2 * g * e * e / (h * h) + 2 * g * e / h + g / 2 + f
        },
        easeout: function (h, f, e, g, a) {
            return -g * f * f / (a * a) + 2 * g * f / a + e
        },
        expoin: function (a, i, f, g, h) {
            var e = 1;
            if (g < 0) {
                e *= -1;
                g *= -1
            }
            return e * (Math.exp(Math.log(g) / h * i)) + f
        },
        expoout: function (a, i, f, g, h) {
            var e = 1;
            if (g < 0) {
                e *= -1;
                g *= -1
            }
            return e * (-Math.exp(-Math.log(g) / h * (i - h)) + g + 1) + f
        },
        expoinout: function (a, i, f, g, h) {
            var e = 1;
            if (g < 0) {
                e *= -1;
                g *= -1
            }
            if (i < h / 2) {
                return e * (Math.exp(Math.log(g / 2) / (h / 2) * i)) + f
            }
            return e * (-Math.exp(-2 * Math.log(g / 2) / h * (i - h)) + g + 1) + f
        },
        bouncein: function (h, f, e, g, a) {
            return g - jQuery.easing.bounceout(h, a - f, 0, g, a) + e
        },
        bounceout: function (h, f, e, g, a) {
            if ((f /= a) < (1 / 2.75)) {
                return g * (7.5625 * f * f) + e
            } else {
                if (f < (2 / 2.75)) {
                    return g * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + e
                } else {
                    if (f < (2.5 / 2.75)) {
                        return g * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + e
                    } else {
                        return g * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + e
                    }
                }
            }
        },
        bounceinout: function (h, f, e, g, a) {
            if (f < a / 2) {
                return jQuery.easing.bouncein(h, f * 2, 0, g, a) * 0.5 + e
            }
            return jQuery.easing.bounceout(h, f * 2 - a, 0, g, a) * 0.5 + g * 0.5 + e
        },
        elasin: function (e, j, g, h, i) {
            var k = 1.70158;
            var f = 0;
            var l = h;
            if (j == 0) {
                return g
            }
            if ((j /= i) == 1) {
                return g + h
            }
            if (!f) {
                f = i * 0.3
            }
            if (l < Math.abs(h)) {
                l = h;
                var k = f / 4
            } else {
                var k = f / (2 * Math.PI) * Math.asin(h / l)
            }
            return -(l * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * i - k) * (2 * Math.PI) / f)) + g
        },
        elasout: function (e, j, g, h, i) {
            var k = 1.70158;
            var f = 0;
            var l = h;
            if (j == 0) {
                return g
            }
            if ((j /= i) == 1) {
                return g + h
            }
            if (!f) {
                f = i * 0.3
            }
            if (l < Math.abs(h)) {
                l = h;
                var k = f / 4
            } else {
                var k = f / (2 * Math.PI) * Math.asin(h / l)
            }
            return l * Math.pow(2, -10 * j) * Math.sin((j * i - k) * (2 * Math.PI) / f) + h + g
        },
        elasinout: function (e, j, g, h, i) {
            var k = 1.70158;
            var f = 0;
            var l = h;
            if (j == 0) {
                return g
            }
            if ((j /= i / 2) == 2) {
                return g + h
            }
            if (!f) {
                f = i * (0.3 * 1.5)
            }
            if (l < Math.abs(h)) {
                l = h;
                var k = f / 4
            } else {
                var k = f / (2 * Math.PI) * Math.asin(h / l)
            }
            if (j < 1) {
                return -0.5 * (l * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * i - k) * (2 * Math.PI) / f)) + g
            }
            return l * Math.pow(2, -10 * (j -= 1)) * Math.sin((j * i - k) * (2 * Math.PI) / f) * 0.5 + h + g
        },
        backin: function (a, h, e, f, g) {
            var i = 1.70158;
            return f * (h /= g) * h * ((i + 1) * h - i) + e
        },
        backout: function (a, h, e, f, g) {
            var i = 1.70158 * 2;
            return f * ((h = h / g - 1) * h * ((i + 1) * h + i) + 1) + e
        },
        backinout: function (a, h, e, f, g) {
            var i = 1.70158;
            if ((h /= g / 2) < 1) {
                return f / 2 * (h * h * (((i *= (1.525)) + 1) * h - i)) + e
            }
            return f / 2 * ((h -= 2) * h * (((i *= (1.525)) + 1) * h + i) + 2) + e
        },
        linear: function (h, f, e, g, a) {
            return g * f / a + e
        }
    }
});
/* Build-0.6: color.core.js color.rgb.js color.huebased.js color.hsv.js color.hsl.js color.object.js color.parse.js color.related.js color.palette.css3.js color.css.js */
/*
* jQuery Colour 0.6
*
* Copyright (c) 2009 Adaptavist.com
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL (GPL-LICENSE.txt) licenses.
*
* Author: Mark Gibson (jollytoad at gmail dot com)
*
* http://www.adaptavist.com/display/jQuery/Colour+Library
*/
(jQuery.color || (function (a) {
    a.color = {
        isEqual: function (d, b) {
            if (d.length !== b.length) {
                return false
            }
            var c = d.length;
            while (c--) {
                if (d[c] !== b[c]) {
                    return false
                }
            }
            return true
        },
        fix: function (d, c) {
            var b = c.length;
            while (b--) {
                if (typeof d[b] === "number") {
                    switch (c.charAt(b)) {
                        case "i":
                            d[b] = Math.round(d[b]);
                            break;
                        case "o":
                            d[b] = Math.min(255, Math.max(0, Math.round(d[b])));
                            break;
                        case "1":
                            d[b] = Math.min(1, Math.max(0, d[b]));
                            break
                    }
                }
            }
            return d
        },
        self: function (b) {
            return b
        },
        alpha: function (b) {
            return b === undefined ? 1 : b
        },
        palette: {},
        fns: []
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.color.RGB = {
        fix: function (b) {
            b = a.color.fix(b, "ooo1");
            return b
        },
        toRGB: a.color.self,
        toHEX: function (b) {
            return "#" + (16777216 + b[0] * 65536 + b[1] * 256 + b[2]).toString(16).slice(-6)
        },
        toCSS: function (b) {
            if (a.color.alpha(b[3]) === 0) {
                return "transparent"
            }
            if (a.color.alpha(b[3]) < 1) {
                return "rgba(" + b.join(",") + ")"
            }
            return "rgb(" + Array.prototype.slice.call(b, 0, 3).join(",") + ")"
        },
        red: function (b) {
            return b[0]
        },
        green: function (b) {
            return b[1]
        },
        blue: function (b) {
            return b[2]
        },
        alpha: function (b) {
            return a.color.alpha(b[3])
        }
    };
    a.color.RGB.toString = a.color.RGB.toHEX;
    a.color.fns.push("RGB.toRGB", "RGB.toHEX", "RGB.toCSS", "RGB.red", "RGB.green", "RGB.blue", "RGB.alpha")
})(jQuery));
(jQuery.color && (function (a) {
    a.color.HueBased = {
        fix: function (b) {
            b[0] = (b[0] + 1) % 1;
            return a.color.fix(b, "1111")
        },
        complementary: function (b, c) {
            return [(b[0] + 0.5 + (c || 0)) % 1, b[1], b[2], b[3]]
        },
        analogous: function (b, c) {
            return [(b[0] + 1 + (c || 0)) % 1, b[1], b[2], b[3]]
        },
        hue: function (b) {
            return b[0]
        },
        alpha: function (b) {
            return a.color.alpha(b[3])
        }
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.color.HSV = a.extend({
        toHSV: a.color.self,
        toRGB: function (l) {
            var b = l[0] * 6,
                c = Math.floor(b),
                j = b - c,
                h = l[1],
                k = l[2] * 255,
                d = l[3],
                e = Math.round(k * (1 - h)),
                g = Math.round(k * (1 - j * h)),
                i = Math.round(k * (1 - (1 - j) * h));
            k = Math.round(k);
            switch (c % 6) {
                case 0:
                    return [k, i, e, d];
                case 1:
                    return [g, k, e, d];
                case 2:
                    return [e, k, i, d];
                case 3:
                    return [e, g, k, d];
                case 4:
                    return [i, e, k, d];
                case 5:
                    return [k, e, g, d]
            }
        },
        saturationV: function (b) {
            return b[1]
        },
        value: function (b) {
            return b[2]
        }
    },
    a.color.HueBased);
    a.color.RGB.toHSV = function (c) {
        var f = c[0] / 255,
            j = c[1] / 255,
            e = c[2] / 255,
            i = Math.min(f, j, e),
            k = Math.max(f, j, e),
            h = k - i;
        return [h === 0 ? 0 : (j === k ? (e - f) / h / 6 + (1 / 3) : e === k ? (f - j) / h / 6 + (2 / 3) : (j - e) / h / 6 + 1) % 1, h === 0 ? 0 : h / k, k, c[3]]
    };
    a.color.fns.push("HSV.toHSV", "HSV.toRGB", "RGB.toHSV", "HSV.complementary", "HSV.analogous", "HSV.hue", "HSV.saturationV", "HSV.value", "HSV.alpha")
})(jQuery));
(jQuery.color && (function (a) {
    a.color.HSL = a.extend({
        toHSL: a.color.self,
        toRGB: function (g) {
            var b = g[0],
                i = g[1],
                d = g[2],
                f = d < 0.5 ? d * (1 + i) : d + i - (d * i),
            e = 2 * d - f;

            function j(h) {
                var c = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
                return c < 1 / 6 ? e + (f - e) * 6 * c : c < 1 / 2 ? f : c < 2 / 3 ? e + (f - e) * 6 * (2 / 3 - c) : e
            }
            return [Math.round(255 * j(b + 1 / 3)), Math.round(255 * j(b)), Math.round(255 * j(b - 1 / 3)), g[3]]
        },
        saturationL: function (b) {
            return b[1]
        },
        lightness: function (b) {
            return b[2]
        }
    },
    a.color.HueBased);
    a.color.RGB.toHSL = function (c) {
        var h = c[0] / 255,
            k = c[1] / 255,
            f = c[2] / 255,
            j = Math.min(h, k, f),
            l = Math.max(h, k, f),
            i = l - j,
            e = l + j;
        return [i === 0 ? 0 : (k === l ? (f - h) / i / 6 + (1 / 3) : f === l ? (h - k) / i / 6 + (2 / 3) : (k - f) / i / 6 + 1) % 1, i === 0 ? 0 : e > 1 ? i / (2 - l - j) : i / e, e / 2, c[3]]
    };
    a.color.fns.push("HSL.toHSL", "HSL.toRGB", "RGB.toHSL", "HSL.complementary", "HSL.analogous", "HSL.hue", "HSL.saturationL", "HSL.lightness", "HSL.alpha")
})(jQuery));
(jQuery.color && jQuery.Color || (function (e) {
    e.Color = function (h, f, j) {
        if (typeof this === "function") {
            return new e.Color(h, f, j)
        }
        if (typeof h === "string" && e.color.parse) {
            if (!j) {
                j = h
            }
            h = e.color.parse(h)
        }
        if (h && h.length) {
            var g;
            g = this.length = h.length;
            while (g--) {
                this[g] = h[g]
            }
        }
        if (h) {
            this.space = f || h.space || "RGB";
            this.name = j || h.name
        }
    };

    function d(f, j) {
        var l = e.Color.isInstance(f) && f.space !== this.space ? this.to(f.space) : new e.Color(this),
        g = l.length,
        h = false;
        while (g--) {
            if (typeof f[g] === "number") {
                var k = j ? l[g] + f[g] : f[g];
                if (k !== l[g]) {
                    l[g] = k;
                    h = true
                }
            }
        }
        return h ? l.setName() : this
    }
    e.Color.fn = e.Color.prototype = {
        color: "0.6",
        util: function () {
            return e.color[this.space]
        },
        to: function (f) {
            return this["to" + f]()
        },
        fix: function () {
            return this.util().fix(this)
        },
        modify: function (f) {
            return d.call(this, f)
        },
        adjust: function (f) {
            return d.call(this, f, true)
        },
        setName: function (f) {
            this.name = f;
            return this
        },
        toString: function () {
            if (!this.space) {
                return ""
            }
            var f = this.util();
            return f.hasOwnProperty("toString") ? f.toString(this) : this.to("RGB").toString()
        },
        join: [].join,
        push: [].push
    };
    e.Color.isInstance = function (f) {
        return f && typeof f === "object" && f.color === e.Color.fn.color && f.space
    };
    e.Color.fnspace = {};

    function c(f, i, h, j, g) {
        return function () {
            var l = [f];
            Array.prototype.push.apply(l, arguments);
            var k = h.apply(i, l);
            return e.isArray(k) ? new e.Color(k, j, g ? f.name : undefined) : k
        }
    }
    function a(f, h) {
        var g = /^to/.test(h) ? h.substring(2) : false;
        return function () {
            var i = this,
                l = i.util();
            if (!l[h]) {
                i = i.to(e.Color.fnspace[h]);
                l = i.util()
            }
            var k = c(i, l, l[h], g || i.space, !!g),
                j = k.apply(i, arguments);
            if (g) {
                this[h] = function () {
                    return j
                };
                if (e.Color.isInstance(j)) {
                    i = this;
                    j["to" + this.space] = function () {
                        return i
                    }
                }
            } else {
                this[h] = k
            }
            return j
        }
    }
    function b() {
        var g = this.split("."),
            h = g[1],
            f = g[0];
        if (!e.Color.fnspace[h] && h !== "to" + f) {
            e.Color.fnspace[h] = f
        }
        if (!e.Color.fn[h]) {
            e.Color.fn[h] = a(this, h)
        }
    }
    e.each(e.color.fns, b);
    e.color.fns.push = function () {
        e.each(arguments, b);
        return Array.prototype.push.apply(this, arguments)
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.extend(a.color, {
        parse: function (b) {
            var c;
            if (typeof b === "string") {
                if ((c = /^\s*rgb(a)?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*(?:,\s*([0-9]+(?:\.[0-9]+)?)\s*)?\)\s*$/.exec(b)) && !c[1] === !c[5]) {
                    return [parseInt(c[2], 10), parseInt(c[3], 10), parseInt(c[4], 10), c[5] ? parseFloat(c[5]) : 1]
                }
                if ((c = /^\s*rgb(a)?\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*(?:,\s*([0-9]+(?:\.[0-9]+)?)\s*)?\)\s*$/.exec(b)) && !c[1] === !c[5]) {
                    return [parseFloat(c[2]) * 255 / 100, parseFloat(c[3]) * 255 / 100, parseFloat(c[4]) * 255 / 100, c[5] ? parseFloat(c[5]) : 1]
                }
                if ((c = /^\s*#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})\s*$/.exec(b))) {
                    return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16), 1]
                }
                if ((c = /^\s*#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])\s*$/.exec(b))) {
                    return [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16), 1]
                }
                if ((c = /^\s*hsl(a)?\(\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*(?:,\s*([0-9]+(?:\.[0-9]+)?)\s*)?\)\s*$/.exec(b)) && !c[1] === !c[5]) {
                    return [parseInt(c[2], 10) / 360, parseFloat(c[3]) / 100, parseFloat(c[4]) / 100, c[5] ? parseFloat(c[5]) : 1]
                }
                return a.color.named(b)
            }
            if (b && (b.length === 3 || b.length === 4)) {
                if (b.length === 3) {
                    b.push(1)
                }
                return b
            }
        },
        named: function (b) {
            var c;
            b = a.trim(b.toLowerCase());
            if (b === "transparent") {
                return [0, 0, 0, 0]
            }
            a.each(a.color.palette, function (d, e) {
                if (e[b]) {
                    c = e[b];
                    return false
                }
            });
            return c
        }
    })
})(jQuery));
(jQuery.Color && (function (a) {
    a.Color.fn.related = function (e) {
        var c = a.Color.fn.related.i18n,
            b = e || a.Color.fn.related.offset,
            d = Math.round(b * 360) + c.deg;
        return {
            "anal-": this.analogous(-b).setName(c.anal + " -" + d),
            anal0: this.analogous().setName(c.orig),
            "anal+": this.analogous(b).setName(c.anal + " +" + d),
            "comp-": this.complementary(-b).setName(c.split + " -" + d),
            comp0: this.complementary().setName(c.comp),
            "comp+": this.complementary(b).setName(c.split + " +" + d),
            "triad-": this.analogous(-1 / 3).setName(c.triad + " -120" + c.deg),
            triad0: this.analogous().setName(c.orig),
            "triad+": this.analogous(1 / 3).setName(c.triad + " +120" + c.deg)
        }
    };
    a.Color.fn.related.offset = 30 / 360;
    a.Color.fn.related.i18n = {
        deg: "?",
        anal: "Analogous",
        orig: "Original",
        split: "Split Complementary",
        comp: "Complementary",
        triad: "Triadic"
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.color.palette.css3 = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        grey: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
})(jQuery));
(function (a) {
    a.fn.cssColor = function (b) {
        return a.Color(this.css(b))
    };
    a.Color.fn.applyCSS = function (b, c) {
        a(b).css(c, this.toCSS());
        return this
    }
})(jQuery);
(function (a) {
    a.fx.step.clip = function (h) {
        if (h.state == 0) {
            var j = /rect\(([0-9]{1,3})(px|em) ([0-9]{1,3})(px|em) ([0-9]{1,3})(px|em) ([0-9]{1,3})(px|em)\)/;
            h.start = j.exec(h.elem.style.clip.replace(/,/g, ""));
            h.end = j.exec(h.end.replace(/,/g, ""))
        }
        var f = new Array(),
            g = new Array(),
            b = h.start.length,
            c = h.end.length,
            i = h.start[d + 1] == "em" ? (parseInt($(h.elem).css("fontSize")) * 1.333 * parseInt(h.start[d])) : 1;
        for (var d = 1; d < b; d += 2) {
            f.push(parseInt(i * h.start[d]))
        }
        for (var e = 1; e < c; e += 2) {
            g.push(parseInt(i * h.end[e]))
        }
        h.elem.style.clip = "rect(" + parseInt((h.pos * (g[0] - f[0])) + f[0]) + "px " + parseInt((h.pos * (g[1] - f[1])) + f[1]) + "px " + parseInt((h.pos * (g[2] - f[2])) + f[2]) + "px " + parseInt((h.pos * (g[3] - f[3])) + f[3]) + "px)"
    }
})(jQuery);
(function (d) {
    function g() {
        this._settings = [];
        this._extensions = [];
        this.regional = [];
        this.regional[""] = {
            errorLoadingText: "Error loading",
            notSupportedText: "This browser does not support SVG"
        };
        this.local = this.regional[""];
        this._uuid = new Date().getTime();
        this._renesis = f("RenesisX.RenesisCtrl")
    }
    function f(i) {
        try {
            return !!(window.ActiveXObject && new ActiveXObject(i))
        } catch (j) {
            return false
        }
    }
    var e = "svgwrapper";
    d.extend(g.prototype, {
        markerClassName: "hasSVG",
        svgNS: "http://www.w3.org/2000/svg",
        xlinkNS: "http://www.w3.org/1999/xlink",
        _wrapperClass: c,
        _attrNames: {
            class_: "class",
            in_: "in",
            alignmentBaseline: "alignment-baseline",
            baselineShift: "baseline-shift",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorRendering: "color-rendering",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            vertAdvY: "vert-adv-y",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode"
        },
        _attachSVG: function (j, i) {
            var k = (j.namespaceURI == this.svgNS ? j : null);
            var j = (k ? null : j);
            if (d(j || k).hasClass(this.markerClassName)) {
                return
            }
            if (typeof i == "string") {
                i = {
                    loadURL: i
                }
            } else {
                if (typeof i == "function") {
                    i = {
                        onLoad: i
                    }
                }
            }
            d(j || k).addClass(this.markerClassName);
            try {
                if (!k) {
                    k = document.createElementNS(this.svgNS, "svg");
                    k.setAttribute("version", "1.1");
                    k.setAttribute("width", j.clientWidth);
                    k.setAttribute("height", j.clientHeight);
                    j.appendChild(k)
                }
                this._afterLoad(j, k, i || {})
            } catch (l) {
                if (d.browser.msie) {
                    if (!j.id) {
                        j.id = "svg" + (this._uuid++)
                    }
                    this._settings[j.id] = i;
                    j.innerHTML = '<embed type="image/svg+xml" width="100%" height="100%" src="' + (i.initPath || "") + 'blank.svg"/>'
                } else {
                    j.innerHTML = '<p class="svg_error">' + this.local.notSupportedText + "</p>"
                }
            }
        },
        _registerSVG: function () {
            for (var j = 0; j < document.embeds.length; j++) {
                var k = document.embeds[j].parentNode;
                if (!d(k).hasClass(d.svg.markerClassName) || d.data(k, e)) {
                    continue
                }
                var l = null;
                try {
                    l = document.embeds[j].getSVGDocument()
                } catch (m) {
                    setTimeout(d.svg._registerSVG, 250);
                    return
                }
                l = (l ? l.documentElement : null);
                if (l) {
                    d.svg._afterLoad(k, l)
                }
            }
        },
        _afterLoad: function (k, l, j) {
            var j = j || this._settings[k.id];
            this._settings[k ? k.id : ""] = null;
            var i = new this._wrapperClass(l, k);
            d.data(k || l, e, i);
            try {
                if (j.loadURL) {
                    i.load(j.loadURL, j)
                }
                if (j.settings) {
                    i.configure(j.settings)
                }
                if (j.onLoad && !j.loadURL) {
                    j.onLoad.apply(k || l, [i])
                }
            } catch (m) {
                alert(m)
            }
        },
        _getSVG: function (i) {
            i = (typeof i == "string" ? d(i)[0] : (i.jquery ? i[0] : i));
            return d.data(i, e)
        },
        _destroySVG: function (i) {
            var j = d(i);
            if (!j.hasClass(this.markerClassName)) {
                return
            }
            j.removeClass(this.markerClassName);
            if (i.namespaceURI != this.svgNS) {
                j.empty()
            }
            d.removeData(i, e)
        },
        addExtension: function (i, j) {
            this._extensions.push([i, j])
        }
    });

    function c(l, k) {
        this._svg = l;
        this._container = k;
        for (var j = 0; j < d.svg._extensions.length; j++) {
            var m = d.svg._extensions[j];
            this[m[0]] = new m[1](this)
        }
    }
    d.extend(c.prototype, {
        _width: function () {
            return (this._container ? this._container.clientWidth : this._svg.width)
        },
        _height: function () {
            return (this._container ? this._container.clientHeight : this._svg.height)
        },
        root: function () {
            return this._svg
        },
        configure: function (m, l) {
            if (l) {
                for (var k = this._svg.attributes.length - 1; k >= 0; k--) {
                    var n = this._svg.attributes.item(k);
                    if (!(n.nodeName == "onload" || n.nodeName == "version" || n.nodeName.substring(0, 5) == "xmlns")) {
                        this._svg.attributes.removeNamedItem(n.nodeName)
                    }
                }
            }
            for (var j in m) {
                this._svg.setAttribute(j, m[j])
            }
            return this
        },
        getElementById: function (i) {
            return this._svg.ownerDocument.getElementById(i)
        },
        change: function (i, j) {
            if (i) {
                for (var k in j) {
                    if (j[k] == null) {
                        i.removeAttribute(k)
                    } else {
                        i.setAttribute(k, j[k])
                    }
                }
            }
            return this
        },
        _args: function (k, n, o) {
            n.splice(0, 0, "parent");
            n.splice(n.length, 0, "settings");
            var l = {};
            var m = 0;
            if (k[0] != null && k[0].jquery) {
                k[0] = k[0][0]
            }
            if (k[0] != null && !(typeof k[0] == "object" && k[0].nodeName)) {
                l.parent = null;
                m = 1
            }
            for (var j = 0; j < k.length; j++) {
                l[n[j + m]] = k[j]
            }
            if (o) {
                d.each(o, function (p, q) {
                    if (typeof l[q] == "object") {
                        l.settings = l[q];
                        l[q] = null
                    }
                })
            }
            return l
        },
        title: function (i, m, k) {
            var j = this._args(arguments, ["text"]);
            var l = this._makeNode(j.parent, "title", j.settings || {});
            l.appendChild(this._svg.ownerDocument.createTextNode(j.text));
            return l
        },
        describe: function (i, m, k) {
            var j = this._args(arguments, ["text"]);
            var l = this._makeNode(j.parent, "desc", j.settings || {});
            l.appendChild(this._svg.ownerDocument.createTextNode(j.text));
            return l
        },
        defs: function (i, k, j) {
            var l = this._args(arguments, ["id"], ["id"]);
            return this._makeNode(l.parent, "defs", d.extend((l.id ? {
                id: l.id
            } : {}), l.settings || {}))
        },
        symbol: function (o, m, j, k, l, i, n) {
            var p = this._args(arguments, ["id", "x1", "y1", "width", "height"]);
            return this._makeNode(p.parent, "symbol", d.extend({
                id: p.id,
                viewBox: p.x1 + " " + p.y1 + " " + p.width + " " + p.height
            },
            p.settings || {}))
        },
        marker: function (m, l, j, o, k, q, n, i) {
            var p = this._args(arguments, ["id", "refX", "refY", "mWidth", "mHeight", "orient"], ["orient"]);
            return this._makeNode(p.parent, "marker", d.extend({
                id: p.id,
                refX: p.refX,
                refY: p.refY,
                markerWidth: p.mWidth,
                markerHeight: p.mHeight,
                orient: p.orient || "auto"
            },
            p.settings || {}))
        },
        style: function (i, m, k) {
            var j = this._args(arguments, ["styles"]);
            var l = this._makeNode(j.parent, "style", d.extend({
                type: "text/css"
            },
            j.settings || {}));
            l.appendChild(this._svg.ownerDocument.createTextNode(j.styles));
            if (d.browser.opera) {
                d("head").append('<style type="text/css">' + j.styles + "</style>")
            }
            return l
        },
        script: function (k, j, l, i) {
            var n = this._args(arguments, ["script", "type"], ["type"]);
            var m = this._makeNode(n.parent, "script", d.extend({
                type: n.type || "text/javascript"
            },
            n.settings || {}));
            m.appendChild(this._svg.ownerDocument.createTextNode(this._escapeXML(n.script)));
            if (!d.browser.mozilla) {
                d.globalEval(n.script)
            }
            return m
        },
        linearGradient: function (q, o, n, j, k, l, m, i) {
            var r = this._args(arguments, ["id", "stops", "x1", "y1", "x2", "y2"], ["x1"]);
            var p = d.extend({
                id: r.id
            },
            (r.x1 != null ? {
                x1: r.x1,
                y1: r.y1,
                x2: r.x2,
                y2: r.y2
            } : {}));
            return this._gradient(r.parent, "linearGradient", d.extend(p, r.settings || {}), r.stops)
        },
        radialGradient: function (o, m, k, l, n, p, s, q, i) {
            var t = this._args(arguments, ["id", "stops", "cx", "cy", "r", "fx", "fy"], ["cx"]);
            var j = d.extend({
                id: t.id
            },
            (t.cx != null ? {
                cx: t.cx,
                cy: t.cy,
                r: t.r,
                fx: t.fx,
                fy: t.fy
            } : {}));
            return this._gradient(t.parent, "radialGradient", d.extend(j, t.settings || {}), t.stops)
        },
        _gradient: function (n, o, j, l) {
            var p = this._makeNode(n, o, j);
            for (var k = 0; k < l.length; k++) {
                var m = l[k];
                this._makeNode(p, "stop", d.extend({
                    offset: m[0],
                    stopColor: m[1]
                },
                (m[2] != null ? {
                    stopOpacity: m[2]
                } : {})))
            }
            return p
        },
        pattern: function (o, p, r, j, u, m, q, i, t, l, n) {
            var k = this._args(arguments, ["id", "x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]);
            var s = d.extend({
                id: k.id,
                x: k.x,
                y: k.y,
                width: k.width,
                height: k.height
            },
            (k.vx != null ? {
                viewBox: k.vx + " " + k.vy + " " + k.vwidth + " " + k.vheight
            } : {}));
            return this._makeNode(k.parent, "pattern", d.extend(s, k.settings || {}))
        },
        mask: function (o, m, j, k, l, i, n) {
            var p = this._args(arguments, ["id", "x", "y", "width", "height"]);
            return this._makeNode(p.parent, "mask", d.extend({
                id: p.id,
                x: p.x,
                y: p.y,
                width: p.width,
                height: p.height
            },
            p.settings || {}))
        },
        createPath: function () {
            return new b()
        },
        createText: function () {
            return new h()
        },
        svg: function (o, j, k, s, l, p, q, r, t, i) {
            var n = this._args(arguments, ["x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]);
            var m = d.extend({
                x: n.x,
                y: n.y,
                width: n.width,
                height: n.height
            },
            (n.vx != null ? {
                viewBox: n.vx + " " + n.vy + " " + n.vwidth + " " + n.vheight
            } : {}));
            return this._makeNode(n.parent, "svg", d.extend(m, n.settings || {}))
        },
        group: function (i, k, j) {
            var l = this._args(arguments, ["id"], ["id"]);
            return this._makeNode(l.parent, "g", d.extend({
                id: l.id
            },
            l.settings || {}))
        },
        use: function (n, j, k, p, l, m, i) {
            var q = this._args(arguments, ["x", "y", "width", "height", "ref"]);
            if (typeof q.x == "string") {
                q.ref = q.x;
                q.settings = q.y;
                q.x = q.y = q.width = q.height = null
            }
            var o = this._makeNode(q.parent, "use", d.extend({
                x: q.x,
                y: q.y,
                width: q.width,
                height: q.height
            },
            q.settings || {}));
            o.setAttributeNS(d.svg.xlinkNS, "href", q.ref);
            return o
        },
        link: function (i, m, k) {
            var j = this._args(arguments, ["ref"]);
            var l = this._makeNode(j.parent, "a", j.settings);
            l.setAttributeNS(d.svg.xlinkNS, "href", j.ref);
            return l
        },
        image: function (n, j, k, p, l, m, i) {
            var q = this._args(arguments, ["x", "y", "width", "height", "ref"]);
            var o = this._makeNode(q.parent, "image", d.extend({
                x: q.x,
                y: q.y,
                width: q.width,
                height: q.height
            },
            q.settings || {}));
            o.setAttributeNS(d.svg.xlinkNS, "href", q.ref);
            return o
        },
        path: function (i, l, k) {
            var j = this._args(arguments, ["path"]);
            return this._makeNode(j.parent, "path", d.extend({
                d: (j.path.path ? j.path.path() : j.path)
            },
            j.settings || {}))
        },
        rect: function (o, j, k, p, l, m, n, i) {
            var q = this._args(arguments, ["x", "y", "width", "height", "rx", "ry"], ["rx"]);
            return this._makeNode(q.parent, "rect", d.extend({
                x: q.x,
                y: q.y,
                width: q.width,
                height: q.height
            },
            (q.rx ? {
                rx: q.rx,
                ry: q.ry
            } : {}), q.settings || {}))
        },
        circle: function (l, j, k, m, i) {
            var n = this._args(arguments, ["cx", "cy", "r"]);
            return this._makeNode(n.parent, "circle", d.extend({
                cx: n.cx,
                cy: n.cy,
                r: n.r
            },
            n.settings || {}))
        },
        ellipse: function (n, j, k, m, l, i) {
            var o = this._args(arguments, ["cx", "cy", "rx", "ry"]);
            return this._makeNode(o.parent, "ellipse", d.extend({
                cx: o.cx,
                cy: o.cy,
                rx: o.rx,
                ry: o.ry
            },
            o.settings || {}))
        },
        line: function (n, j, l, k, m, i) {
            var o = this._args(arguments, ["x1", "y1", "x2", "y2"]);
            return this._makeNode(o.parent, "line", d.extend({
                x1: o.x1,
                y1: o.y1,
                x2: o.x2,
                y2: o.y2
            },
            o.settings || {}))
        },
        polyline: function (i, j, l) {
            var k = this._args(arguments, ["points"]);
            return this._poly(k.parent, "polyline", k.points, k.settings)
        },
        polygon: function (i, j, l) {
            var k = this._args(arguments, ["points"]);
            return this._poly(k.parent, "polygon", k.points, k.settings)
        },
        _poly: function (m, n, l, j) {
            var o = "";
            for (var k = 0; k < l.length; k++) {
                o += l[k].join() + " "
            }
            return this._makeNode(m, n, d.extend({
                points: d.trim(o)
            },
            j || {}))
        },
        text: function (m, j, k, l, i) {
            var n = this._args(arguments, ["x", "y", "value"]);
            if (typeof n.x == "string" && arguments.length < 4) {
                n.value = n.x;
                n.settings = n.y;
                n.x = n.y = null
            }
            return this._text(n.parent, "text", n.value, d.extend({
                x: (n.x && a(n.x) ? n.x.join(" ") : n.x),
                y: (n.y && a(n.y) ? n.y.join(" ") : n.y)
            },
            n.settings || {}))
        },
        textpath: function (l, j, k, i) {
            var n = this._args(arguments, ["path", "value"]);
            var m = this._text(n.parent, "textPath", n.value, n.settings || {});
            m.setAttributeNS(d.svg.xlinkNS, "href", n.path);
            return m
        },
        _text: function (p, q, l, j) {
            var r = this._makeNode(p, q, j);
            if (typeof l == "string") {
                r.appendChild(r.ownerDocument.createTextNode(l))
            } else {
                for (var k = 0; k < l._parts.length; k++) {
                    var m = l._parts[k];
                    if (m[0] == "tspan") {
                        var n = this._makeNode(r, m[0], m[2]);
                        n.appendChild(r.ownerDocument.createTextNode(m[1]));
                        r.appendChild(n)
                    } else {
                        if (m[0] == "tref") {
                            var n = this._makeNode(r, m[0], m[2]);
                            n.setAttributeNS(d.svg.xlinkNS, "href", m[1]);
                            r.appendChild(n)
                        } else {
                            if (m[0] == "textpath") {
                                var o = d.extend({},
                                m[2]);
                                o.href = null;
                                var n = this._makeNode(r, m[0], o);
                                n.setAttributeNS(d.svg.xlinkNS, "href", m[2].href);
                                n.appendChild(r.ownerDocument.createTextNode(m[1]));
                                r.appendChild(n)
                            } else {
                                r.appendChild(r.ownerDocument.createTextNode(m[1]))
                            }
                        }
                    }
                }
            }
            return r
        },
        other: function (i, l, k) {
            var j = this._args(arguments, ["name"]);
            return this._makeNode(j.parent, j.name, j.settings || {})
        },
        _makeNode: function (j, m, k) {
            j = j || this._svg;
            var l = this._svg.ownerDocument.createElementNS(d.svg.svgNS, m);
            for (var m in k) {
                var i = k[m];
                if (i != null && i != null && (typeof i != "string" || i != "")) {
                    l.setAttribute(d.svg._attrNames[m] || m, i)
                }
            }
            j.appendChild(l);
            return l
        },
        add: function (i, k) {
            var j = this._args((arguments.length == 1 ? [null, i] : arguments), ["node"]);
            var l = this;
            j.parent = j.parent || this._svg;
            try {
                if (d.svg._renesis) {
                    throw "Force traversal"
                }
                j.parent.appendChild(j.node.cloneNode(true))
            } catch (m) {
                j.node = (j.node.jquery ? j.node : d(j.node));
                j.node.each(function () {
                    var n = l._cloneAsSVG(this);
                    if (n) {
                        j.parent.appendChild(n)
                    }
                })
            }
            return this
        },
        _cloneAsSVG: function (o) {
            var l = null;
            if (o.nodeType == 1) {
                l = this._svg.ownerDocument.createElementNS(d.svg.svgNS, this._checkName(o.nodeName));
                for (var j = 0; j < o.attributes.length; j++) {
                    var k = o.attributes.item(j);
                    if (k.nodeName != "xmlns" && k.nodeValue) {
                        if (k.prefix == "xlink") {
                            l.setAttributeNS(d.svg.xlinkNS, k.localName, k.nodeValue)
                        } else {
                            l.setAttribute(this._checkName(k.nodeName), k.nodeValue)
                        }
                    }
                }
                for (var j = 0; j < o.childNodes.length; j++) {
                    var m = this._cloneAsSVG(o.childNodes[j]);
                    if (m) {
                        l.appendChild(m)
                    }
                }
            } else {
                if (o.nodeType == 3) {
                    if (d.trim(o.nodeValue)) {
                        l = this._svg.ownerDocument.createTextNode(o.nodeValue)
                    }
                } else {
                    if (o.nodeType == 4) {
                        if (d.trim(o.nodeValue)) {
                            try {
                                l = this._svg.ownerDocument.createCDATASection(o.nodeValue)
                            } catch (n) {
                                l = this._svg.ownerDocument.createTextNode(o.nodeValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))
                            }
                        }
                    }
                }
            }
            return l
        },
        _checkName: function (i) {
            i = (i.substring(0, 1) >= "A" && i.substring(0, 1) <= "Z" ? i.toLowerCase() : i);
            return (i.substring(0, 4) == "svg:" ? i.substring(4) : i)
        },
        load: function (k, i) {
            i = (typeof i == "boolean" ? {
                addTo: i
            } : (typeof i == "function" ? {
                onLoad: i
            } : i || {}));
            if (!i.addTo) {
                this.clear(false)
            }
            var l = [this._svg.getAttribute("width"), this._svg.getAttribute("height")];
            var o = this;
            var j = function (p) {
                p = d.svg.local.errorLoadingText + ": " + p;
                if (i.onLoad) {
                    i.onLoad.apply(o._container || o._svg, [o, p])
                } else {
                    o.text(null, 10, 20, p)
                }
            };
            var m = function (p) {
                var q = new ActiveXObject("Microsoft.XMLDOM");
                q.validateOnParse = false;
                q.resolveExternals = false;
                q.async = false;
                q.loadXML(p);
                if (q.parseError.errorCode != 0) {
                    j(q.parseError.reason);
                    return null
                }
                return q
            };
            var n = function (q) {
                if (!q) {
                    return
                }
                if (q.documentElement.nodeName != "svg") {
                    var u = q.getElementsByTagName("parsererror");
                    var s = (u.length ? u[0].getElementsByTagName("div") : []);
                    j(!u.length ? "???" : (s.length ? s[0] : u[0]).firstChild.nodeValue);
                    return
                }
                var w = {};
                for (var r = 0; r < q.documentElement.attributes.length; r++) {
                    var v = q.documentElement.attributes.item(r);
                    if (!(v.nodeName == "version" || v.nodeName.substring(0, 5) == "xmlns")) {
                        w[v.nodeName] = v.nodeValue
                    }
                }
                o.configure(w, true);
                var t = q.documentElement.childNodes;
                for (var r = 0; r < t.length; r++) {
                    try {
                        if (d.svg._renesis) {
                            throw "Force traversal"
                        }
                        o._svg.appendChild(t[r].cloneNode(true));
                        if (t[r].nodeName == "script") {
                            d.globalEval(t[r].textContent)
                        }
                    } catch (p) {
                        o.add(null, t[r])
                    }
                }
                if (!i.changeSize) {
                    o.configure({
                        width: l[0],
                        height: l[1]
                    })
                }
                if (i.onLoad) {
                    i.onLoad.apply(o._container || o._svg, [o])
                }
            };
            if (k.match("<svg")) {
                n(d.browser.msie ? m(k) : new DOMParser().parseFromString(k, "text/xml"))
            } else {
                d.ajax({
                    url: k,
                    dataType: (d.browser.msie ? "text" : "xml"),
                    success: function (p) {
                        n(d.browser.msie ? m(p) : p)
                    },
                    error: function (p, r, q) {
                        j(r + (q ? " " + q.message : ""))
                    }
                })
            }
            return this
        },
        remove: function (i) {
            i = (i.jquery ? i[0] : i);
            i.parentNode.removeChild(i);
            return this
        },
        clear: function (i) {
            if (i) {
                this.configure({},
                true)
            }
            while (this._svg.firstChild) {
                this._svg.removeChild(this._svg.firstChild)
            }
            return this
        },
        toSVG: function (i) {
            i = i || this._svg;
            return (typeof XMLSerializer == "undefined" ? this._toSVG(i) : new XMLSerializer().serializeToString(i))
        },
        _toSVG: function (l) {
            var n = "";
            if (!l) {
                return n
            }
            if (l.nodeType == 3) {
                n = l.nodeValue
            } else {
                if (l.nodeType == 4) {
                    n = "<![CDATA[" + l.nodeValue + "]]>"
                } else {
                    n = "<" + l.nodeName;
                    if (l.attributes) {
                        for (var j = 0; j < l.attributes.length; j++) {
                            var k = l.attributes.item(j);
                            if (!(d.trim(k.nodeValue) == "" || k.nodeValue.match(/^\[object/) || k.nodeValue.match(/^function/))) {
                                n += " " + (k.namespaceURI == d.svg.xlinkNS ? "xlink:" : "") + k.nodeName + '="' + k.nodeValue + '"'
                            }
                        }
                    }
                    if (l.firstChild) {
                        n += ">";
                        var m = l.firstChild;
                        while (m) {
                            n += this._toSVG(m);
                            m = m.nextSibling
                        }
                        n += "</" + l.nodeName + ">"
                    } else {
                        n += "/>"
                    }
                }
            }
            return n
        },
        _escapeXML: function (i) {
            i = i.replace(/&/g, "&amp;");
            i = i.replace(/</g, "&lt;");
            i = i.replace(/>/g, "&gt;");
            return i
        }
    });

    function b() {
        this._path = ""
    }
    d.extend(b.prototype, {
        reset: function () {
            this._path = "";
            return this
        },
        move: function (j, k, i) {
            i = (a(j) ? k : i);
            return this._coords((i ? "m" : "M"), j, k)
        },
        line: function (j, k, i) {
            i = (a(j) ? k : i);
            return this._coords((i ? "l" : "L"), j, k)
        },
        horiz: function (j, i) {
            this._path += (i ? "h" : "H") + (a(j) ? j.join(" ") : j);
            return this
        },
        vert: function (i, j) {
            this._path += (j ? "v" : "V") + (a(i) ? i.join(" ") : i);
            return this
        },
        curveC: function (i, k, j, m, l, n, o) {
            o = (a(i) ? k : o);
            return this._coords((o ? "c" : "C"), i, k, j, m, l, n)
        },
        smoothC: function (m, i, l, k, j) {
            j = (a(m) ? i : j);
            return this._coords((j ? "s" : "S"), m, i, l, k)
        },
        curveQ: function (k, l, j, m, i) {
            i = (a(k) ? l : i);
            return this._coords((i ? "q" : "Q"), k, l, j, m)
        },
        smoothQ: function (j, k, i) {
            i = (a(j) ? k : i);
            return this._coords((i ? "t" : "T"), j, k)
        },
        _coords: function (r, k, m, l, n, o, p) {
            if (a(k)) {
                for (var q = 0; q < k.length; q++) {
                    var j = k[q];
                    this._path += (q == 0 ? r : " ") + j[0] + "," + j[1] + (j.length < 4 ? "" : " " + j[2] + "," + j[3] + (j.length < 6 ? "" : " " + j[4] + "," + j[5]))
                }
            } else {
                this._path += r + k + "," + m + (l == null ? "" : " " + l + "," + n + (o == null ? "" : " " + o + "," + p))
            }
            return this
        },
        arc: function (o, p, l, r, s, k, m, q) {
            q = (a(o) ? p : q);
            this._path += (q ? "a" : "A");
            if (a(o)) {
                for (var n = 0; n < o.length; n++) {
                    var j = o[n];
                    this._path += (n == 0 ? "" : " ") + j[0] + "," + j[1] + " " + j[2] + " " + (j[3] ? "1" : "0") + "," + (j[4] ? "1" : "0") + " " + j[5] + "," + j[6]
                }
            } else {
                this._path += o + "," + p + " " + l + " " + (r ? "1" : "0") + "," + (s ? "1" : "0") + " " + k + "," + m
            }
            return this
        },
        close: function () {
            this._path += "z";
            return this
        },
        path: function () {
            return this._path
        }
    });
    b.prototype.moveTo = b.prototype.move;
    b.prototype.lineTo = b.prototype.line;
    b.prototype.horizTo = b.prototype.horiz;
    b.prototype.vertTo = b.prototype.vert;
    b.prototype.curveCTo = b.prototype.curveC;
    b.prototype.smoothCTo = b.prototype.smoothC;
    b.prototype.curveQTo = b.prototype.curveQ;
    b.prototype.smoothQTo = b.prototype.smoothQ;
    b.prototype.arcTo = b.prototype.arc;

    function h() {
        this._parts = []
    }
    d.extend(h.prototype, {
        reset: function () {
            this._parts = [];
            return this
        },
        string: function (i) {
            this._parts[this._parts.length] = ["text", i];
            return this
        },
        span: function (j, i) {
            this._parts[this._parts.length] = ["tspan", j, i];
            return this
        },
        ref: function (i, j) {
            this._parts[this._parts.length] = ["tref", i, j];
            return this
        },
        path: function (j, i, k) {
            this._parts[this._parts.length] = ["textpath", i, d.extend({
                href: j
            },
            k || {})];
            return this
        }
    });
    d.fn.svg = function (j) {
        var i = Array.prototype.slice.call(arguments, 1);
        if (typeof j == "string" && j == "get") {
            return d.svg["_" + j + "SVG"].apply(d.svg, [this[0]].concat(i))
        }
        return this.each(function () {
            if (typeof j == "string") {
                d.svg["_" + j + "SVG"].apply(d.svg, [this].concat(i))
            } else {
                d.svg._attachSVG(this, j || {})
            }
        })
    };

    function a(i) {
        return (i && i.constructor == Array)
    }
    d.svg = new g()
})(jQuery);
(function (d) {
    d.each(["x", "y", "width", "height", "rx", "ry", "cx", "cy", "r", "x1", "y1", "x2", "y2", "stroke-width", "strokeWidth", "opacity", "fill-opacity", "fillOpacity", "stroke-opacity", "strokeOpacity", "font-size", "fontSize"], function (h, g) {
        var j = g.charAt(0).toUpperCase() + g.substr(1);
        d.fx.step["svg" + j] = d.fx.step["svg-" + g] = function (i) {
            var m = d.svg._attrNames[g] || g;
            var k = i.elem.attributes.getNamedItem(m);
            if (!i.set) {
                i.start = (k ? parseFloat(k.nodeValue) : 0);
                var n = i.options.curAnim["svg-" + g] || i.options.curAnim["svg" + j];
                if (/^[+-]=/.exec(n)) {
                    i.end = i.start + parseFloat(n.replace(/=/, ""))
                }
                d(i.elem).css(m, "");
                i.set = true
            }
            var l = (i.pos * (i.end - i.start) + i.start) + (i.unit == "%" ? "%" : "");
            (k ? k.nodeValue = l : i.elem.setAttribute(m, l))
        }
    });
    d.fx.step.svgViewBox = d.fx.step["svg-viewBox"] = function (g) {
        var h = g.elem.attributes.getNamedItem("viewBox");
        if (!g.set) {
            g.start = a(h ? h.nodeValue : "");
            var l = g.options.curAnim["svg-viewBox"] || g.options.curAnim.svgViewBox;
            g.end = a(l);
            if (/^[+-]=/.exec(l)) {
                l = l.split(" ");
                while (l.length < 4) {
                    l.push("0")
                }
                for (var k = 0; k < 4; k++) {
                    if (/^[+-]=/.exec(l[k])) {
                        g.end[k] = g.start[k] + parseFloat(l[k].replace(/=/, ""))
                    }
                }
            }
            g.set = true
        }
        var j = d.map(g.start, function (m, o) {
            return (g.pos * (g.end[o] - m) + m)
        }).join(" ");
        (h ? h.nodeValue = j : g.elem.setAttribute("viewBox", j))
    };

    function a(g) {
        var j = g.split(" ");
        for (var h = 0; h < j.length; h++) {
            j[h] = parseFloat(j[h]);
            if (isNaN(j[h])) {
                j[h] = 0
            }
        }
        while (j.length < 4) {
            j.push(0)
        }
        return j
    }
    d.fx.step.svgTransform = d.fx.step["svg-transform"] = function (n) {
        var k = n.elem.attributes.getNamedItem("transform");
        if (!n.set) {
            n.start = b(k ? k.nodeValue : "");
            n.end = b(n.end, n.start);
            n.set = true
        }
        var m = "";
        for (var g = 0; g < n.end.order.length; g++) {
            switch (n.end.order.charAt(g)) {
                case "t":
                    m += (n.start.translateX != n.end.translateX || n.start.translateY != n.end.translateY ? " translate(" + (n.pos * (n.end.translateX - n.start.translateX) + n.start.translateX) + "," + (n.pos * (n.end.translateY - n.start.translateY) + n.start.translateY) + ")" : "");
                    break;
                case "s":
                    m += (n.start.scaleX != n.end.scaleX || n.start.scaleY != n.end.scaleY ? " scale(" + (n.pos * (n.end.scaleX - n.start.scaleX) + n.start.scaleX) + "," + (n.pos * (n.end.scaleY - n.start.scaleY) + n.start.scaleY) + ")" : "");
                    break;
                case "r":
                    m += (n.start.rotateA != n.end.rotateA || n.start.rotateX != n.end.rotateX || n.start.rotateY != n.end.rotateY ? " rotate(" + (n.pos * (n.end.rotateA - n.start.rotateA) + n.start.rotateA) + "," + (n.pos * (n.end.rotateX - n.start.rotateX) + n.start.rotateX) + "," + (n.pos * (n.end.rotateY - n.start.rotateY) + n.start.rotateY) + ")" : "");
                    break;
                case "x":
                    m += (n.start.skewX != n.end.skewX ? " skewX(" + (n.pos * (n.end.skewX - n.start.skewX) + n.start.skewX) + ")" : "");
                case "y":
                    m += (n.start.skewY != n.end.skewY ? " skewY(" + (n.pos * (n.end.skewY - n.start.skewY) + n.start.skewY) + ")" : "");
                    break;
                case "m":
                    var l = "";
                    for (var h = 0; h < 6; h++) {
                        l += "," + (n.pos * (n.end.matrix[h] - n.start.matrix[h]) + n.start.matrix[h])
                    }
                    m += " matrix(" + l.substr(1) + ")";
                    break
            }
        } (k ? k.nodeValue = m : n.elem.setAttribute("transform", m))
    };

    function b(g, j) {
        g = g || "";
        if (typeof g == "object") {
            g = g.nodeValue
        }
        var k = d.extend({
            translateX: 0,
            translateY: 0,
            scaleX: 0,
            scaleY: 0,
            rotateA: 0,
            rotateX: 0,
            rotateY: 0,
            skewX: 0,
            skewY: 0,
            matrix: [0, 0, 0, 0, 0, 0]
        },
        j || {});
        k.order = "";
        var i = /([a-zA-Z]+)\(\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*)?)?)?\)/g;
        var h = i.exec(g);
        while (h) {
            switch (h[1]) {
                case "translate":
                    k.order += "t";
                    k.translateX = parseFloat(h[2]);
                    k.translateY = (h[3] ? parseFloat(h[3]) : 0);
                    break;
                case "scale":
                    k.order += "s";
                    k.scaleX = parseFloat(h[2]);
                    k.scaleY = (h[3] ? parseFloat(h[3]) : k.scaleX);
                    break;
                case "rotate":
                    k.order += "r";
                    k.rotateA = parseFloat(h[2]);
                    k.rotateX = (h[3] ? parseFloat(h[3]) : 0);
                    k.rotateY = (h[4] ? parseFloat(h[4]) : 0);
                    break;
                case "skewX":
                    k.order += "x";
                    k.skewX = parseFloat(h[2]);
                    break;
                case "skewY":
                    k.order += "y";
                    k.skewY = parseFloat(h[2]);
                    break;
                case "matrix":
                    k.order += "m";
                    k.matrix = [parseFloat(h[2]), parseFloat(h[3]), parseFloat(h[4]), parseFloat(h[5]), parseFloat(h[6]), parseFloat(h[7])];
                    break
            }
            h = i.exec(g)
        }
        return k
    }
    d.each(["fill", "stroke"], function (h, g) {
        var j = g.charAt(0).toUpperCase() + g.substr(1);
        d.fx.step["svg" + j] = d.fx.step["svg-" + g] = function (i) {
            if (!i.set) {
                i.start = e(i.elem, g);
                var l = (i.end == "none");
                i.end = (l ? e(i.elem.parentNode, g) : f(i.end));
                i.end[3] = l;
                d(i.elem).css(g, "");
                i.set = true
            }
            var k = i.elem.attributes.getNamedItem(g);
            var m = "rgb(" + [Math.min(Math.max(parseInt((i.pos * (i.end[0] - i.start[0])) + i.start[0], 10), 0), 255), Math.min(Math.max(parseInt((i.pos * (i.end[1] - i.start[1])) + i.start[1], 10), 0), 255), Math.min(Math.max(parseInt((i.pos * (i.end[2] - i.start[2])) + i.start[2], 10), 0), 255)].join(",") + ")";
            m = (i.end[3] && i.state == 1 ? "none" : m);
            (k ? k.nodeValue = m : i.elem.setAttribute(g, m))
        }
    });

    function e(i, g) {
        var h;
        do {
            h = (i.attributes && i.attributes.getNamedItem(g) ? i.attributes.getNamedItem(g).nodeValue : "");
            if ((h != "" && h != "none") || d(i).hasClass("hasSVG")) {
                break
            }
        } while (i = i.parentNode);
        return f(h)
    }
    function f(h) {
        var g;
        if (h && h.constructor == Array && (h.length == 3 || h.length == 4)) {
            return h
        }
        if (g = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(h)) {
            return [parseInt(g[1], 10), parseInt(g[2], 10), parseInt(g[3], 10)]
        }
        if (g = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(h)) {
            return [parseFloat(g[1]) * 2.55, parseFloat(g[2]) * 2.55, parseFloat(g[3]) * 2.55]
        }
        if (g = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(h)) {
            return [parseInt(g[1], 16), parseInt(g[2], 16), parseInt(g[3], 16)]
        }
        if (g = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(h)) {
            return [parseInt(g[1] + g[1], 16), parseInt(g[2] + g[2], 16), parseInt(g[3] + g[3], 16)]
        }
        return c[d.trim(h).toLowerCase()] || c.none
    }
    var c = {
        "": [255, 255, 255, 1],
        none: [255, 255, 255, 1],
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        grey: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
})(jQuery);
var Base = function () { };
Base.extend = function (b, c) {
    var d = Base.prototype.extend;
    Base._prototyping = true;
    var f = new this;
    d.call(f, b);
    f.base = function () { };
    delete Base._prototyping;
    var e = f.constructor;
    var a = f.constructor = function () {
        if (!Base._prototyping) {
            if (this._constructing || this.constructor == a) {
                this._constructing = true;
                e.apply(this, arguments);
                delete this._constructing
            } else {
                if (arguments[0] != null) {
                    return (arguments[0].extend || d).call(arguments[0], f)
                }
            }
        }
    };
    a.ancestor = this;
    a.extend = this.extend;
    a.forEach = this.forEach;
    a.implement = this.implement;
    a.prototype = f;
    a.toString = this.toString;
    a.valueOf = function (g) {
        return (g == "object") ? a : e.valueOf()
    };
    d.call(a, c);
    if (typeof a.init == "function") {
        a.init()
    }
    return a
};
Base.prototype = {
    extend: function (a, c) {
        if (arguments.length > 1) {
            var j = this[a];
            if (j && (typeof c == "function") && (!j.valueOf || j.valueOf() != c.valueOf()) && /\bbase\b/.test(c)) {
                var d = c.valueOf();
                c = function () {
                    var i = this.base || Base.prototype.base;
                    this.base = j;
                    var k = d.apply(this, arguments);
                    this.base = i;
                    return k
                };
                c.valueOf = function (i) {
                    return (i == "object") ? c : d
                };
                c.toString = Base.toString
            }
            this[a] = c
        } else {
            if (a) {
                var e = Base.prototype.extend;
                if (!Base._prototyping && typeof this != "function") {
                    e = this.extend || e
                }
                var g = {
                    toSource: null
                };
                var f = ["constructor", "toString", "valueOf"];
                var b = Base._prototyping ? 0 : 1;
                while (h = f[b++]) {
                    if (a[h] != g[h]) {
                        e.call(this, h, a[h])
                    }
                }
                for (var h in a) {
                    if (!g[h]) {
                        e.call(this, h, a[h])
                    }
                }
            }
        }
        return this
    }
};
Base = Base.extend({
    constructor: function () {
        this.extend(arguments[0])
    }
},
{
    ancestor: Object,
    version: "1.1",
    forEach: function (c, b, a) {
        for (var d in c) {
            if (this.prototype[d] === undefined) {
                b.call(a, c[d], d, c)
            }
        }
    },
    implement: function () {
        for (var a = 0; a < arguments.length; a++) {
            if (typeof arguments[a] == "function") {
                arguments[a](this.prototype)
            } else {
                this.prototype.extend(arguments[a])
            }
        }
        return this
    },
    toString: function () {
        return String(this.valueOf())
    }
});
RL = {};
RL.Utils = Base.extend({},
{
    registerNS: function (a) {
        var b = a.split(".");
        var d = window;
        for (var c = 0; c < b.length; c++) {
            if (typeof d[b[c]] == "undefined") {
                d[b[c]] = new Object()
            }
            d = d[b[c]]
        }
    },
    map: function (a, d, b, c, e) {
        return c + (e - c) * ((a - d) / (b - d))
    },
    lerp: function (b, c, a) {
        return ((c - b) * a) + b
    },
    TWO_PI: Math.PI * 2,
    HALF_PI: Math.PI / 2
});
RL.Point = Base.extend({
    x: 0,
    y: 0,
    constructor: function (b, a) {
        this.x = b;
        this.y = a
    }
});
RL.Rect = Base.extend({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    constructor: function (c, d, b, a) {
        this.x = c;
        this.y = d;
        this.width = b;
        this.height = a
    },
    contains: function (a) {
        return a.x >= this.x && a.x <= this.x + this.width && a.y >= this.y && a.y <= this.y + this.height
    },
    toString: function () {
        return [this.x, this.y, this.width, this.height].toString()
    }
});
RL.Mouse = Base.extend({
    isDown: false,
    isInWindow: false,
    position: null,
    constructor: function (b, a, c) {
        this.isDown = b;
        this.isInWindow = a;
        this.position = c
    }
});
RL.Component = Base.extend({
    _children: null,
    constructor: function () {
        this._children = $([])
    },
    update: function () {
        this._children.each(function () {
            this.update()
        })
    },
    draw: function () {
        this._children.each(function () {
            this.draw()
        })
    },
    removeChild: function (b) {
        for (var a = 0; a < this._children.length; a++) {
            if (this._children[a] == b) {
                this._children.splice(a, 1);
                return
            }
        }
    }
});
RL.CanvasComponent = RL.Component.extend({
    _context: null,
    zIndex: 0,
    constructor: function (a) {
        this.base();
        this._context = a
    },
    draw: function () {
        this._children.sort(function (c, d) {
            return c.zIndex - d.zIndex
        });
        this.base()
    }
});
RL.DomComponent = RL.Component.extend({
    element: null,
    constructor: function (a) {
        this.base();
        this.element = a
    }
});
RL.App = RL.Component.extend({
    _frameCount: 0,
    _lastFpsUpdate: 0,
    _fpsMeter: null,
    constructor: function (frameRate) {
        this.base();
        RL.App.lastTime = new Date().getTime();
        RL.App.mouse = new RL.Mouse(false, false, new RL.Point(0, 0));
        RL.App.lastMouse = new RL.Mouse(false, false, new RL.Point(0, 0));
        RL.App.frameRate = frameRate;
        with ($(d.body)) {
            everyTime(1000 / frameRate, "render", $.proxy(this.render, this));
            mousemove($.proxy(this.updateMouseMove, this));
            mousedown($.proxy(this.updateMouseDown, this));
            mouseup($.proxy(this.updateMouseUp, this));
            mouseenter($.proxy(this.updateMouseMove, this));
            mouseleave($.proxy(this.updateMouseLeave, this))
        }
    },
    render: function () {
        RL.App.lastTime = RL.App.now;
        RL.App.now = new Date().getTime();
        RL.App.frameTime = (RL.App.now - RL.App.lastTime) / 1000;
        if (this.isPaused) {
            return
        }
        this.update();
        this.draw();
        if (this._lastFpsUpdate == 0) {
            this._lastFpsUpdate = RL.App.now
        }
        this._frameCount++;
        if (RL.App.now - this._lastFpsUpdate >= RL.App.fpsUpdate) {
            RL.App.fps = this._frameCount / ((RL.App.now - this._lastFpsUpdate) / 1000);
            RL.App.fps = (RL.App.fps > 57) ? 60 : RL.App.fps;
            this._lastFpsUpdate = RL.App.now;
            this._frameCount = 0
        }
    },
    updateMouseMove: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(RL.App.lastMouse.isDown, true, new RL.Point(a.pageX, a.pageY))
    },
    updateMouseDown: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(true, true, new RL.Point(a.pageX, a.pageY))
    },
    updateMouseUp: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(false, true, new RL.Point(a.pageX, a.pageY))
    },
    updateMouseLeave: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(RL.App.lastMouse.isDown, false, RL.App.lastMouse.position)
    }
},
{
    mouse: null,
    lastMouse: null,
    lastTime: null,
    now: null,
    frameTime: null,
    frameRate: null,
    fpsUpdate: 1000,
    fps: 0
});
RL.Utils.registerNS("Model");
Model.AppState = Base.extend({
    constructor: null
},
{
    zoomLevel: 0,
    selectedPlays: [null, null, null],
    currentPlayGroups: $([null, null, null]),
    sortMode: 1,
    excludeItemsWithoutArt: false,
    enableShading: true,
    enableTransitions: true,
    enableTooltips: false,
    enableFonts: true,
    enableBackground: true,
    enableGridAnimations: true,
    enableArt: true,
    enableVideo: false,
    enableGridScaling: false,
    isBenchmarkRunning: false,
    debugBenchmark: -1,
    selectedPlay: null,
    isRenderOptionsOpen: false,
    isAboutBoxOpen: false,
    isDialogOpen: true,
    parsePlayGroup: function (b, e) {
        var f = $([]);
        var h = $([]);
        var g = $([]);
        var a = $([]);
        var c = $([]);
        $(b.Hosts).each(function (i, j) {
            if (!s.getItemById(c, j.Id)) {
                c.push(new Model.HostVO(j.Id, j.Name))
            }
        });
        $(b.Artists).each(function (i, j) {
            if (!s.getItemById(h, j.Id)) {
                h.push(new Model.ArtistVO(j.Id, j.Name))
            }
        });
        $(b.Releases).each(function (i, j) {
            if (j == null) {
                return true
            }
            if (!s.getItemById(g, j.Id)) {
                g.push(new Model.ReleaseVO(j.Id, j.Name, j.Image, s.getItemById(h, j.ArtistId), j.AmazonId, j.Color, s.deserializeDate(j.ReleaseDate)))
            }
        });
        $(b.Tracks).each(function (i, j) {
            if (j == null) {
                return true
            }
            if (!s.getItemById(a, j.Id)) {
                a.push(new Model.TrackVO(j.Id, j.Name, s.getItemById(g, j.ReleaseId), j.Label, j.MonthPlays, j.YearPlays, j.AllTimePlays))
            }
        });
        $(b.Plays).each(function (k, i) {
            if (i == null) {
                return true
            }
            var l = s.getItemById(f, i.Id);
            if (!l) {
                var j = new Model.PlayVO(i.Id, s.deserializeDate(i.AirDate), s.getItemById(h, i.ArtistId), s.getItemById(g, i.ReleaseId), s.getItemById(a, i.TrackId), s.getItemById(c, i.HostId));
                j.isEnabled = !s.excludeItemsWithoutArt || (s.excludeItemsWithoutArt && j.release && j.release.image > 0);
                l = j
            }
            if (j.release && j.track && j.artist && j.release.name && j.track.name && j.artist.name) {
                f.push(l)
            }
        });
        s._sortPlays(f, e);
        return f
    },
    deserializeDate: function (a) {
        if (a == null) {
            return null
        }
        return new Date(parseInt(a.substr(6)))
    },
    getItemById: function (c, a) {
        var b = null;
        c.each(function () {
            if (this.id != a) {
                return true
            }
            b = this;
            return false
        });
        return b
    },
    setSortMode: function (a) {
        s.currentPlayGroups.each(function (b, c) {
            if (c) {
                s._sortPlays(c, a)
            }
        });
        s.sortMode = a
    },
    setExcludeItemsWithoutArt: function (a) {
        if (s.excludeItemsWithoutArt == a) {
            return
        }
        s.excludeItemsWithoutArt = a;
        s.currentPlayGroups.each(function (c, b) {
            if (b) {
                b.each(function (f, e) {
                    e.isEnabled = !s.excludeItemsWithoutArt || (s.excludeItemsWithoutArt && e.release && e.release.image > 0)
                })
            }
        })
    },
    setEnableShading: function (a) {
        if (s.enableShading == a) {
            return
        }
        s.enableShading = a;
        if (s.enableShading) {
            $("img.shadowImage").show()
        } else {
            $("img.shadowImage").hide()
        }
    },
    setEnableFonts: function (b) {
        if (s.enableFonts == b) {
            return
        }
        s.enableFonts = b;
        if (s.enableFonts) {
            $(d.body).removeClass("defaultFonts");
            $(".bold").removeClass("defaultFonts");
            var a = {
                "font-family": "NettoWebBold",
                "font-weight": "normal"
            }
        } else {
            $(d.body).addClass("defaultFonts");
            $(".bold").addClass("defaultFonts");
            var a = {
                "font-family": "sans-serif",
                "font-weight": "bold"
            }
        }
        $([".nextTooltipPrompt", ".gridTooltipTimeStamp", ".gridTooltipReleaseName"]).each(function (c, e) {
            $(e).attr(a)
        })
    },
    _sortPlays: function (c, a) {
        if (c.cache && c.cache[a]) {
            c.cache[a].each(function (e, f) {
                c[e] = f
            });
            return
        }
        switch (a) {
            case s.SORT_TIME:
                c.sort(function (e, f) {
                    return e.airTime - f.airTime
                });
                break;
            case s.SORT_ARTIST:
                c.sort(function (e, f) {
                    if (e.artist.upperName != f.artist.upperName) {
                        return (e.artist.upperName < f.artist.upperName) ? -1 : 1
                    } else {
                        return (e.track.upperName < f.track.upperName) ? -1 : 1
                    }
                });
                break;
            case s.SORT_POPULARITY:
                c.sort(function (f, g) {
                    var h = 0;
                    var e = 0;
                    if (s.zoomLevel == 0) {
                        h = f.track.allTimePlays;
                        e = g.track.allTimePlays
                    } else {
                        if (s.zoomLevel == 1) {
                            h = f.track.monthPlays;
                            e = g.track.monthPlays
                        } else {
                            if (s.zoomLevel == 2) {
                                h = f.track.monthPlays;
                                e = g.track.monthPlays
                            }
                        }
                    }
                    if (h != e) {
                        return e - h
                    }
                    if (f.artist.upperName != g.artist.upperName) {
                        return (f.artist.upperName < g.artist.upperName) ? -1 : 1
                    } else {
                        return (f.track.upperName < g.track.upperName) ? -1 : 1
                    }
                });
                break;
            case s.SORT_COLOR:
                c.sort(function (e, f) {
                    return e.release.hue - f.release.hue
                });
                break
        }
        var b = $([]);
        c.each(function (e, f) {
            b.push(f)
        });
        if (!c.cache) {
            c.cache = []
        }
        c.cache[a] = b
    },
    SORT_TIME: 1,
    SORT_ARTIST: 2,
    SORT_POPULARITY: 3,
    SORT_COLOR: 4
});
RL.Utils.registerNS("Model");
Model.ArtistVO = Base.extend({
    id: null,
    name: null,
    upperName: null,
    constructor: function (a, b) {
        this.id = a;
        this.name = b;
        if (this.name) {
            this.upperName = b.toUpperCase()
        }
    }
});
RL.Utils.registerNS("Model");
Model.PlayVO = Base.extend({
    id: null,
    airDate: null,
    artist: null,
    release: null,
    track: null,
    host: null,
    airTime: null,
    isEnabled: true,
    constructor: function (b, d, e, c, a, f) {
        this.id = b;
        this.airDate = d;
        this.artist = e;
        this.release = c;
        this.track = a;
        this.host = f;
        this.airTime = d.getTime()
    },
    getMonthYear: function () {
        return Model.PlayVO.MONTH_NAMES[this.airDate.getMonth()] + " " + this.airDate.getFullYear()
    },
    getMonthDateYear: function () {
        return Model.PlayVO.MONTH_NAMES[this.airDate.getMonth()] + " " + this.getDate() + ", " + this.airDate.getFullYear()
    },
    getDate: function () {
        var c = this.airDate.getDate();
        var b = ["th", "st", "nd", "rd"];
        var a = c % 100;
        return c + (b[(a - 20) % 10] || b[a] || b[0])
    },
    getTime: function () {
        var a = this.airDate.getHours();
        var c = a >= 12 ? " pm" : " am";
        if (a == 0) {
            a = 12
        } else {
            if (a > 12) {
                a -= 12
            }
        }
        if (a < 10) {
            a = "0" + a
        }
        var b = this.airDate.getMinutes();
        if (b < 10) {
            b = "0" + b
        }
        return a + ":" + b + c
    },
    getFileName: function (d) {
        var b = this.airDate.getFullYear();
        var a = this.airDate.getMonth() + 1;
        if (a < 10 && a != -1) {
            a = "0" + a
        }
        var e = this.airDate.getDate();
        if (e < 10 && e != -1) {
            e = "0" + e
        }
        var c = null;
        if (d == 1) {
            c = b + "_" + a
        } else {
            c = b + "_" + a + "_" + e
        }
        return WebVizBench.buildDataUrl("/plays/" + c + ".json", s.isBenchmarkRunning)
    }
},
{
    MONTH_NAMES: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
});
RL.Utils.registerNS("Model");
Model.ReleaseVO = Base.extend({
    id: null,
    name: null,
    image: null,
    artist: null,
    amazonId: null,
    color: null,
    releaseDate: null,
    hue: null,
    upperName: null,
    constructor: function (e, g, d, a, c, i, f) {
        this.id = e;
        this.name = g ? g : "Untitled";
        if (d) {
            this.image = d;
            this.color = i
        } else {
            var h = 0;
            if (a && a.name) {
                h = $.inArray(a.name.substr(0, 1).toLowerCase(), Model.ReleaseVO.NO_ART_KEYS);
                if (h == -1) {
                    h = 0
                }
            }
            this.color = Model.ReleaseVO.NO_ART_COLORS[h];
            this.image = -(h + 1)
        }
        this.artist = a;
        this.amazonId = c;
        this.releaseDate = f;
        var b = $.Color(this.color).toHSV();
        this.hue = b[0];
        if (this.name) {
            this.upperName = g.toUpperCase()
        }
    }
},
{
    QUANTIZE_HUE: 30,
    NO_ART_KEYS: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    NO_ART_COLORS: ["#895959", "#896359", "#896e59", "#897859", "#898259", "#858959", "#7b8959", "#6f8959", "#648959", "#5a8959", "#598962", "#59896c", "#598976", "#598980", "#598889", "#597e89", "#597489", "#596a89", "#596089", "#5c5989", "#675989", "#705989", "#7a5989", "#835989", "#895984", "#895984"]
});
RL.Utils.registerNS("Model");
Model.TrackVO = Base.extend({
    id: null,
    name: null,
    release: null,
    monthPlays: null,
    yearPlays: null,
    allTimePlays: null,
    label: null,
    upperName: null,
    constructor: function (b, e, c, g, d, f, a) {
        this.id = b;
        this.name = e;
        this.release = c;
        this.label = g;
        this.monthPlays = d;
        this.yearPlays = f;
        this.allTimePlays = a;
        if (this.name) {
            this.upperName = e.toUpperCase()
        }
    }
});
RL.Utils.registerNS("Model");
Model.HostVO = Base.extend({
    id: null,
    name: null,
    upperName: null,
    constructor: function (a, b) {
        this.id = a;
        this.name = b;
        if (this.name) {
            this.upperName = b.toUpperCase()
        }
    }
});
RL.Utils.registerNS("Controls");
Controls.GridBackground = RL.DomComponent.extend({
    _canvas: null,
    _context: null,
    _grid: null,
    _totalSize: 0,
    _lastEnabled: true,
    constructor: function (a) {
        this.base(a);
        this._totalSize = Controls.GridBackground.SIZE + Controls.GridBackground.MARGIN;
        this._canvas = $("<canvas />");
        this.element.append(this._canvas);
        this._canvas = this._canvas[0];
        this._context = this._canvas.getContext("2d")
    },
    update: function () {
        if (!s.enableBackground) {
            return
        }
        if (this._canvas.width != WebVizBench.documentWidth || this._canvas.height != WebVizBench.documentHeight) {
            this._grid = $([]);
            var j = Math.ceil(WebVizBench.documentWidth / this._totalSize);
            var l = Math.ceil(WebVizBench.documentHeight / this._totalSize);
            for (var e = 0; e < l; e++) {
                var a = $([]);
                for (var f = 0; f < j; f++) {
                    a.push({
                        trigger: null,
                        opacity: Controls.GridBackground.DEFAULT_OPACITY
                    })
                }
                this._grid.push(a)
            }
        }
        if (RL.App.mouse.isDown && !s.isBenchmarkRunning) {
            var f = Math.floor(RL.App.mouse.position.x / this._totalSize);
            var e = Math.floor(RL.App.mouse.position.y / this._totalSize);
            if (this._grid[e] && this._grid[e][f] && !this._grid[e][f].trigger) {
                this._grid[e][f].trigger = RL.App.now;
                for (var h = e - Controls.GridBackground.RIPPLE_DISTANCE; h <= e + Controls.GridBackground.RIPPLE_DISTANCE; h++) {
                    for (var i = f - Controls.GridBackground.RIPPLE_DISTANCE; i <= f + Controls.GridBackground.RIPPLE_DISTANCE; i++) {
                        if (!this._grid[h] || !this._grid[h][i]) {
                            continue
                        }
                        var k = this._grid[h][i];
                        if (k.trigger) {
                            continue
                        }
                        var g = Math.abs(h - e);
                        var b = Math.abs(i - f);
                        var d = Math.sqrt(g * g + b * b);
                        if (d <= Controls.GridBackground.RIPPLE_DISTANCE) {
                            k.trigger = RL.App.now + (d * Controls.GridBackground.RIPPLE_OFFSET)
                        }
                    }
                }
            }
        }
        Controls.GridBackground.CURRENT_FRAME++;
        Controls.GridBackground.CURRENT_FRAME %= Controls.GridBackground.RANDOM_FRAMES;
        if (this._grid && Controls.GridBackground.CURRENT_FRAME == 0) {
            var f = Math.floor(Math.random() * this._grid[0].length);
            var e = Math.floor(Math.random() * this._grid.length);
            this._grid[e][f].trigger = RL.App.now
        }
    },
    draw: function () {
        if (s.enableBackground != this._lastEnabled && !s.enableBackground) {
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
        } else {
            if (this._canvas.width != WebVizBench.documentWidth || this._canvas.height != WebVizBench.documentHeight || (s.enableBackground != this._lastEnabled && s.enableBackground)) {
                this._canvas.width = WebVizBench.documentWidth;
                this._canvas.height = WebVizBench.documentHeight;
                this._lastWidth = this._canvas.width;
                this._lastHeight = this._canvas.height;
                this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
                this._context.fillStyle = "rgba(" + Controls.GridBackground.COLOR + "," + Controls.GridBackground.DEFAULT_OPACITY + ")";
                for (var b = 0; b < this._grid.length; b++) {
                    for (var c = 0; c < this._grid[b].length; c++) {
                        var d = c * this._totalSize + Controls.GridBackground.MARGIN / 2;
                        var e = b * this._totalSize + Controls.GridBackground.MARGIN / 2;
                        this._context.fillRect(d, e, Controls.GridBackground.SIZE, Controls.GridBackground.SIZE)
                    }
                }
            }
        }
        if (s.enableBackground) {
            for (var b = 0; b < this._grid.length; b++) {
                for (var c = 0; c < this._grid[b].length; c++) {
                    var f = this._grid[b][c];
                    var a = RL.App.now - f.trigger;
                    if (!f.trigger || a < 0) {
                        continue
                    }
                    var d = c * this._totalSize + Controls.GridBackground.MARGIN / 2;
                    var e = b * this._totalSize + Controls.GridBackground.MARGIN / 2;
                    this._context.clearRect(d, e, Controls.GridBackground.SIZE, Controls.GridBackground.SIZE);
                    if (a <= Controls.GridBackground.BRIGHTEN_DURATION) {
                        f.opacity = RL.Utils.map(a, 0, Controls.GridBackground.BRIGHTEN_DURATION, Controls.GridBackground.DEFAULT_OPACITY, Controls.GridBackground.MAX_OPACITY)
                    } else {
                        if (a <= Controls.GridBackground.BRIGHTEN_DURATION + Controls.GridBackground.DIM_DURATION) {
                            f.opacity = RL.Utils.map(a, Controls.GridBackground.BRIGHTEN_DURATION, Controls.GridBackground.BRIGHTEN_DURATION + Controls.GridBackground.DIM_DURATION, Controls.GridBackground.MAX_OPACITY, Controls.GridBackground.DEFAULT_OPACITY)
                        } else {
                            f.opacity = Controls.GridBackground.DEFAULT_OPACITY;
                            f.trigger = null
                        }
                    }
                    this._context.fillStyle = "rgba(" + Controls.GridBackground.COLOR + "," + f.opacity + ")";
                    this._context.fillRect(d, e, Controls.GridBackground.SIZE, Controls.GridBackground.SIZE)
                }
            }
        }
        this._lastEnabled = s.enableBackground
    }
},
{
    SIZE: 8,
    MARGIN: 2,
    DEFAULT_OPACITY: 0.035,
    MAX_OPACITY: 0.25,
    BRIGHTEN_DURATION: 500,
    DIM_DURATION: 2000,
    COLOR: "255,255,255",
    RIPPLE_DISTANCE: 3,
    RIPPLE_OFFSET: 100,
    RANDOM_FRAMES: 3,
    CURRENT_FRAME: 0
});
RL.Utils.registerNS("Controls");
Controls.PlayGrid = RL.DomComponent.extend({
    plays: null,
    margin: null,
    size: null,
    globalTranslate: null,
    currentGlobalTranslate: null,
    _flatPlays: null,
    _waveTime: 0,
    _mouseColumn: null,
    _mouseRow: null,
    _canvas: null,
    _lastSortMode: null,
    _lastExcludeItemsWithoutArt: false,
    _dimension: null,
    _units: null,
    isMouseEnabled: true,
    maxFishEyeScale: 2,
    _minFishEyeScale: -1,
    fishEyeRange: 4,
    _forceDraw: false,
    _lastEnableArt: false,
    _lastEnableAnimation: false,
    _lastEnableShading: false,
    _modalBackground: null,
    constructor: function (b, e, i, g, a, h, d, f) {
        this.base(b);
        this.maxFishEyeScale = d;
        $(Controls.PlayGrid.WAVE_SCALES).each($.proxy(function (j, k) {
            this._minFishEyeScale = Math.max(this._minFishEyeScale, k.value)
        },
        this));
        this.fishEyeRange = f;
        this._dimension = i;
        this._units = g;
        this._lastSortMode = s.sortMode;
        this._lastExcludeItemsWithoutArt = s.excludeItemsWithoutArt;
        this._lastEnableArt = s.enableArt;
        this._lastEnableAnimation = s.enableGridAnimations;
        this._lastEnableShading = s.enableShading;
        this._canvas = $("<canvas />");
        this._canvas.click($.proxy(function () {
            if (this._mouseRow !== null && this._mouseColumn !== null) {
                if (s.zoomLevel == s.selectedPlays.length - 1) {
                    s.selectedPlay = this.plays[this._mouseRow][this._mouseColumn].data
                } else {
                    s.zoomLevel++;
                    s.selectedPlays[s.zoomLevel] = this.plays[this._mouseRow][this._mouseColumn].data
                }
            }
        },
        this));
        this.element.append(this._canvas);
        this._canvas = this._canvas[0];
        this.plays = $([]);
        this._flatPlays = $([]);
        this.size = a;
        this.margin = h;
        var c = this._canvas.getContext("2d");
        $(e).each($.proxy(function (k, l) {
            var j = new Controls.Play(c, l, a, h);
            this._children.push(j);
            this._flatPlays.push(j)
        },
        this));
        this._modalBackground = $("#modalBackground");
        this.update()
    },
    update: function () {
        this._updateSort();
        this._updateGridPosition();
        this._updateMousePosition();
        this._updateWave();
        this.base()
    },
    _updateSort: function () {
        if (this.plays[0] && s.sortMode == this._lastSortMode && this._lastExcludeItemsWithoutArt == s.excludeItemsWithoutArt) {
            return
        }
        var a = 0;
        $(s.currentPlayGroups[s.zoomLevel]).each($.proxy(function (e, d) {
            if (d.isEnabled) {
                a++
            }
        },
        this));
        var c = this._units;
        if (this._dimension == "rows") {
            c = Math.ceil(a / this._units)
        }
        this.plays = [];
        var b = 0;
        $(s.currentPlayGroups[s.zoomLevel]).each($.proxy(function (g, e) {
            if (!e.isEnabled) {
                return true
            }
            var d = Math.floor(b / c);
            var f = b % c;
            if (!this.plays[d]) {
                this.plays[d] = []
            }
            this._flatPlays.each($.proxy(function (h, i) {
                if (i.data == e) {
                    i.row = d;
                    i.column = f;
                    this.plays[d][f] = i
                }
            },
            this));
            b++
        },
        this));
        this._forceDraw = true
    },
    _updateGridPosition: function () {
        var a = this.size + this.margin;
        var c = this.plays[0].length * (this.size + this.margin) + (this.margin / 2);
        var b = this.plays.length * (this.size + this.margin) + (this.margin / 2);
        var e = new RL.Point((WebVizBench.documentWidth - c) / 2, (WebVizBench.documentHeight - b) / 2);
        if (!this.globalTranslate || e.x != this.globalTranslate.x || e.y != this.globalTranslate.y) {
            this._forceDraw = true
        }
        this.globalTranslate = e;
        if (!this.currentGlobalTranslate || !s.enableGridAnimations) {
            this.currentGlobalTranslate = this.globalTranslate
        } else {
            var d = this.globalTranslate.x - this.currentGlobalTranslate.x;
            if (Math.abs(d) > Controls.Play.EASING / 10) {
                this.currentGlobalTranslate.x += d * Controls.Play.EASING
            } else {
                this.currentGlobalTranslate.x = this.globalTranslate.x
            }
            d = this.globalTranslate.y - this.currentGlobalTranslate.y;
            if (Math.abs(d) > Controls.Play.EASING / 10) {
                this.currentGlobalTranslate.y += d * Controls.Play.EASING
            } else {
                this.currentGlobalTranslate.y = this.globalTranslate.y
            }
        }
    },
    _updateMousePosition: function () {
        if (!this.isMouseEnabled || !this.currentGlobalTranslate || s.isBenchmarkRunning) {
            return
        }
        if (s.isDialogOpen) {
            this._mouseColumn = this._mouseRow = null;
            return
        }
        var a = this.size + this.margin;
        this._mouseRow = Math.floor((RL.App.mouse.position.y - this.currentGlobalTranslate.y) / a);
        if (this._mouseRow > this.plays.length - 1 || this._mouseRow < 0) {
            this._mouseRow = null
        }
        this._mouseColumn = Math.floor((RL.App.mouse.position.x - this.currentGlobalTranslate.x) / a);
        if (this._mouseColumn > this.plays[0].length - 1 || this._mouseColumn < 0) {
            this._mouseColumn = null
        }
        if (this._mouseColumn !== null && this._mouseRow !== null && this._mouseColumn > this.plays[this._mouseRow].length - 1) {
            this._mouseColumn = this._mouseRow = null
        }
    },
    _updateWave: function () {
        if (!s.enableGridAnimations) {
            return
        }
        var j = this.plays[0].length;
        if (!j) {
            return
        }
        var f = Controls.PlayGrid.WAVE_SCALES[Controls.PlayGrid.WAVE_SCALES.length - 1].time;
        var q = Controls.PlayGrid.WAVE_VIEWPORT / j;
        for (var k = 0; k < this._flatPlays.length; k++) {
            var p = this._flatPlays[k];
            var b = this._flatPlays[k].row;
            var o = this._flatPlays[k].column;
            var t = 1;
            var g = 1;
            var c = 1;
            var h = 1;
            var r = this._waveTime;
            r += (j - o) * q;
            r += b * q;
            r %= f;
            var e, d;
            $(Controls.PlayGrid.WAVE_SCALES).each(function (i, u) {
                if (u.time <= r) {
                    e = u
                }
                if (u.time >= r && u != e) {
                    d = u;
                    return false
                }
            });
            t = $.easing.easeinout(null, r - e.time, e.value, d.value - e.value, d.time - e.time);
            c = j - o + b + 0.1 * o;
            if (this._mouseColumn !== null && this._mouseRow !== null) {
                var l = Math.abs(o - this._mouseColumn);
                var m = Math.abs(b - this._mouseRow);
                var a = Math.sqrt(l * l + m * m);
                if (a <= this.fishEyeRange && RL.App.mouse.isInWindow) {
                    g = RL.Utils.map(this.fishEyeRange - a, 0, this.fishEyeRange, this._minFishEyeScale, this.maxFishEyeScale);
                    h = this._flatPlays.length + g + 0.1 * o
                } else {
                    g = 1;
                    h = 1
                }
            }
            var n = true;
            if (g != 1 && t <= g) {
                n = false
            }
            p.scale = n ? t : g;
            p.zIndex = n ? c : h;
            p.opacity = 1;
            if (!p.data.isEnabled) {
                p.opacity = 0;
                p.scale = 0;
                p.zIndex = -1
            }
        }
        this._waveTime += RL.App.frameTime;
        this._waveTime %= f
    },
    draw: function () {
        if (!this.currentGlobalTranslate) {
            return
        }
        if (s.enableArt != this._lastEnableArt || this._lastEnableAnimation != s.enableGridAnimations || this._lastExcludeItemsWithoutArt != s.excludeItemsWithoutArt || this._lastEnableShading != s.enableShading) {
            this._forceDraw = true
        }
        if ((this._lastEnableAnimation != s.enableGridAnimations || this._lastExcludeItemsWithoutArt != s.excludeItemsWithoutArt) && !s.enableGridAnimations) {
            this._flatPlays.each(function (d, c) {
                c.scale = 1;
                c.opacity = 1;
                if (!c.data.isEnabled) {
                    c.opacity = 0;
                    c.scale = 0;
                    c.zIndex = -1
                }
                c._currentColumn = c.column;
                c._currentRow = c.row;
                c._currentScale = c.scale;
                c._currentOpacity = c.opacity
            });
            this._forceDraw = true
        }
        var a = false;
        this._flatPlays.each($.proxy(function (d, c) {
            if (c._currentRow != c.row || c._currentColumn != c.column || c._currentOpacity != c.opacity) {
                a = this._forceDraw = true
            }
            if (!c._artDrawn) {
                this._forceDraw = true
            }
        },
        this));
        if (s.isBenchmarkRunning) {
            if (a) {
                WebVizBench.isTransitionActive = true;
                Controls.PlayGrid.gridSetTransitionFlag = true
            }
            if (!a && Controls.PlayGrid.gridSetTransitionFlag) {
                WebVizBench.isTransitionActive = false;
                Controls.PlayGrid.gridSetTransitionFlag = false
            }
        }
        this._lastEnableArt = s.enableArt;
        this._lastEnableAnimation = s.enableGridAnimations;
        this._lastSortMode = s.sortMode;
        this._lastExcludeItemsWithoutArt = s.excludeItemsWithoutArt;
        this._lastEnableShading = s.enableShading;
        if (!s.enableGridAnimations && !this._forceDraw) {
            return
        }
        this._canvas.width = WebVizBench.documentWidth;
        this._canvas.height = WebVizBench.documentHeight;
        var b = this._canvas.getContext("2d");
        b.clearRect(0, 0, this._canvas.width, this._canvas.height);
        b.translate(this.currentGlobalTranslate.x, this.currentGlobalTranslate.y);
        b.save();
        this._children.sort(function (c, d) {
            return c.zIndex - d.zIndex
        });
        this.base();
        b.restore();
        this._forceDraw = false
    },
    _drawLogo: function (a) {
        a.moveTo(34.7, 120.2);
        a.bezierCurveTo(34.7, 122.3, 32.9, 124.1, 30.8, 124.1);
        a.lineTo(3.9, 124.1);
        a.bezierCurveTo(1.7, 124.1, 0, 122.3, 0, 120.2);
        a.lineTo(0, 11.8);
        a.bezierCurveTo(0, 9.7, 1.7, 8, 3.9, 8);
        a.lineTo(30.8, 8);
        a.bezierCurveTo(32.9, 8, 34.7, 9.7, 34.7, 11.8);
        a.lineTo(34.7, 120.2);
        a.moveTo(28.2, 115.1);
        a.bezierCurveTo(27.5, 114.1, 22.4, 106.7, 22.1, 106.2);
        a.bezierCurveTo(20.8, 104.1, 21.3, 102.7, 22.5, 101);
        a.bezierCurveTo(24, 98.9, 26.5, 95.9, 28.4, 93.4);
        a.bezierCurveTo(30.3, 90.9, 24.6, 91, 22.9, 92);
        a.bezierCurveTo(21.6, 92.8, 18.4, 97, 17.4, 98.2);
        a.bezierCurveTo(13.9, 102.1, 13, 99, 13, 97.1);
        a.bezierCurveTo(13, 96.5, 13, 93.6, 13, 93.6);
        a.bezierCurveTo(13, 92.4, 12, 91.4, 11, 91.4);
        a.lineTo(4.9, 91.4);
        a.lineTo(6.6, 98.4);
        a.lineTo(6.6, 98);
        a.lineTo(6.6, 117.8);
        a.lineTo(13, 117.8);
        a.lineTo(13, 113.9);
        a.bezierCurveTo(13, 112.9, 13, 112, 13, 111.8);
        a.bezierCurveTo(13, 108.8, 14.8, 106.5, 17.1, 109.7);
        a.bezierCurveTo(17.6, 110.4, 20.4, 114.3, 21.9, 116.2);
        a.bezierCurveTo(23.4, 118.1, 25.4, 118.2, 27.8, 118.2);
        a.bezierCurveTo(30.2, 118.2, 29.3, 116.8, 28.2, 115.1);
        a.moveTo(74.2, 120.2);
        a.bezierCurveTo(74.2, 122.3, 72.5, 124.1, 70.3, 124.1);
        a.lineTo(43.4, 124.1);
        a.bezierCurveTo(41.2, 124.1, 39.5, 122.3, 39.5, 120.2);
        a.lineTo(39.5, 19.5);
        a.bezierCurveTo(39.5, 17.4, 41.2, 15.6, 43.4, 15.6);
        a.lineTo(70.3, 15.6);
        a.bezierCurveTo(72.5, 15.6, 74.2, 17.4, 74.2, 19.5);
        a.lineTo(74.2, 120.2);
        a.moveTo(65.8, 115.5);
        a.bezierCurveTo(65.6, 114.8, 64.5, 114.6, 63.5, 114.6);
        a.bezierCurveTo(62.4, 114.6, 61.2, 114.6, 59.8, 114.5);
        a.bezierCurveTo(57.2, 114.2, 54.7, 113.5, 54.7, 110.5);
        a.bezierCurveTo(54.7, 106.6, 57.9, 106.2, 59.4, 106.1);
        a.bezierCurveTo(60.4, 106, 62.2, 106, 63.5, 105.9);
        a.bezierCurveTo(64.5, 105.8, 65.4, 105.7, 65.5, 104.9);
        a.bezierCurveTo(65.6, 104.3, 65.6, 104.2, 65.5, 103.7);
        a.bezierCurveTo(65.4, 103.1, 64.4, 102.8, 63.4, 102.7);
        a.bezierCurveTo(62.1, 102.6, 60.6, 102.5, 59.2, 102.5);
        a.bezierCurveTo(57.9, 102.5, 54.6, 102.4, 54.6, 98.7);
        a.bezierCurveTo(54.6, 95.6, 57.4, 95, 59.8, 94.8);
        a.bezierCurveTo(61.2, 94.7, 62.4, 94.7, 63.5, 94.7);
        a.bezierCurveTo(64.5, 94.6, 65.7, 94.5, 65.9, 93.9);
        a.bezierCurveTo(66, 93.3, 66, 93, 65.8, 92.4);
        a.bezierCurveTo(65.6, 91.8, 64.8, 91.4, 63.1, 91.4);
        a.lineTo(46.3, 91.4);
        a.lineTo(48, 98);
        a.lineTo(48, 98);
        a.lineTo(48, 101.1);
        a.bezierCurveTo(48, 103.1, 48, 114.9, 48, 114.9);
        a.bezierCurveTo(48, 117.1, 49.6, 117.8, 50.7, 117.8);
        a.bezierCurveTo(55.8, 117.8, 61.4, 117.8, 63.1, 117.8);
        a.bezierCurveTo(64.8, 117.8, 65.6, 117.5, 65.8, 116.8);
        a.bezierCurveTo(66, 116.2, 66, 116, 65.8, 115.5);
        a.moveTo(113.7, 120.2);
        a.bezierCurveTo(113.7, 122.3, 112, 124.1, 109.8, 124.1);
        a.lineTo(82.9, 124.1);
        a.bezierCurveTo(80.8, 124.1, 79, 122.3, 79, 120.2);
        a.lineTo(79, 3.9);
        a.bezierCurveTo(79, 1.7, 80.8, 0, 82.9, 0);
        a.lineTo(109.8, 0);
        a.bezierCurveTo(112, 0, 113.7, 1.7, 113.7, 3.9);
        a.lineTo(113.7, 120.2);
        a.moveTo(107.3, 117.4);
        a.bezierCurveTo(108.2, 117, 107.5, 115.5, 106.6, 114);
        a.bezierCurveTo(105.8, 112.5, 103.1, 107.6, 102.4, 106);
        a.bezierCurveTo(101.7, 104.7, 101.4, 103.4, 102.3, 101.8);
        a.bezierCurveTo(103.1, 100.1, 105.7, 96, 106.6, 94.6);
        a.bezierCurveTo(107.6, 93.1, 107.6, 92, 106.8, 91.6);
        a.bezierCurveTo(105.8, 91.2, 103.6, 91.5, 102.8, 91.6);
        a.bezierCurveTo(101.8, 91.8, 99.6, 95.5, 98.8, 96.8);
        a.bezierCurveTo(97.8, 98.3, 96.6, 98.9, 95, 96.7);
        a.bezierCurveTo(93.6, 94.8, 92.2, 91.8, 91.1, 91.6);
        a.bezierCurveTo(90, 91.3, 87.6, 91.2, 86.7, 91.5);
        a.bezierCurveTo(85.9, 92.2, 85.9, 93.2, 86.7, 94.4);
        a.bezierCurveTo(87.4, 95.7, 90.3, 100.6, 90.8, 101.7);
        a.bezierCurveTo(91.4, 102.8, 91.7, 103.9, 90.8, 105.9);
        a.bezierCurveTo(89.8, 107.9, 87.2, 112.5, 86.3, 114.2);
        a.bezierCurveTo(85.2, 115.8, 84.7, 117.1, 85.5, 117.4);
        a.bezierCurveTo(86.6, 117.9, 88.4, 117.9, 89.5, 117.7);
        a.bezierCurveTo(91.1, 117.5, 93.3, 113.2, 94.9, 110.8);
        a.bezierCurveTo(95.9, 109.4, 97.3, 109.3, 98.4, 110.8);
        a.bezierCurveTo(99.8, 112.9, 102, 117.5, 103.2, 117.7);
        a.bezierCurveTo(104.8, 118, 106.4, 117.9, 107.3, 117.4);
        a.moveTo(153.2, 120.2);
        a.bezierCurveTo(153.2, 122.3, 151.5, 124.1, 149.3, 124.1);
        a.lineTo(122.4, 124.1);
        a.bezierCurveTo(120.3, 124.1, 118.5, 122.3, 118.5, 120.2);
        a.lineTo(118.5, 35.7);
        a.bezierCurveTo(118.5, 33.6, 120.3, 31.8, 122.4, 31.8);
        a.lineTo(149.3, 31.8);
        a.bezierCurveTo(151.5, 31.8, 153.2, 33.6, 153.2, 35.7);
        a.lineTo(153.2, 120.2);
        a.moveTo(147.3, 99.4);
        a.bezierCurveTo(147.3, 93.8, 142.8, 91.5, 137.3, 91.4);
        a.bezierCurveTo(136.5, 91.4, 129.8, 91.4, 128.6, 91.4);
        a.lineTo(125.1, 91.4);
        a.lineTo(126.2, 98);
        a.lineTo(126.3, 98);
        a.lineTo(126.3, 115.8);
        a.bezierCurveTo(126.3, 117, 127.4, 117.6, 128.3, 117.8);
        a.bezierCurveTo(129.1, 117.9, 129.9, 117.9, 130.8, 117.8);
        a.bezierCurveTo(131.6, 117.6, 132.6, 116.7, 132.6, 115.7);
        a.bezierCurveTo(132.6, 114.8, 132.6, 113.3, 132.6, 112.4);
        a.bezierCurveTo(132.6, 109.4, 133.6, 108.2, 138.5, 107.9);
        a.bezierCurveTo(143, 107.6, 147.3, 105.1, 147.3, 99.4);
        a.moveTo(140.4, 99.5);
        a.bezierCurveTo(140.5, 102, 138.4, 104.2, 135.9, 104.1);
        a.bezierCurveTo(134, 104, 132.7, 103.2, 132.7, 99.6);
        a.bezierCurveTo(132.7, 96.2, 133.9, 95.3, 135.6, 95.1);
        a.bezierCurveTo(138, 95, 140.4, 97, 140.4, 99.5)
    }
},
{
    gridSetTransitionFlag: false,
    WAVE_SCALES: [{
        time: 0,
        value: 1
    },
    {
        time: 2,
        value: 1
    },
    {
        time: 3,
        value: 0.75
    },
    {
        time: 4,
        value: 1.5
    },
    {
        time: 5,
        value: 0.9
    },
    {
        time: 5.5,
        value: 1
    }],
    WAVE_VIEWPORT: 2
});
RL.Utils.registerNS("Controls");
Controls.Play = RL.CanvasComponent.extend({
    row: -1,
    _currentRow: -1,
    column: -1,
    _currentColumn: -1,
    scale: 1,
    _currentScale: -1,
    opacity: 1,
    _currentOpacity: -1,
    data: null,
    _size: null,
    _margin: null,
    _image: null,
    _artLoaded: false,
    _gradient: null,
    _artDrawn: false,
    _lastEnableArt: false,
    constructor: function (a, b, c, d) {
        this.base(a);
        this.data = b;
        this._size = c;
        this._margin = d;
        if (Controls.Play.GRADIENT == null) {
            Controls.Play.GRADIENT = this._context.createLinearGradient(-this._size / 2, -this._size / 2, this._size, this._size);
            Controls.Play.GRADIENT.addColorStop(0, "rgba(255,255,255,1.00)");
            Controls.Play.GRADIENT.addColorStop(0.15, "rgba(255,255,255,0.50)");
            Controls.Play.GRADIENT.addColorStop(0.5, "rgba(255,255,255,0.00)");
            Controls.Play.GRADIENT.addColorStop(0.73, "rgba(000,000,000,0.50)");
            Controls.Play.GRADIENT.addColorStop(0.94, "rgba(000,000,000,0.75)");
            Controls.Play.GRADIENT.addColorStop(1, "rgba(000,000,000,1.00)")
        }
    },
    update: function () {
        if (s.enableArt != this._lastEnableArt) {
            this._lastEnableArt = s.enableArt;
            if (!this._image && s.enableArt) {
                this._image = new Image();
                this._image.src = WebVizBench.buildImageUrl(this.data.release.image, 220, s.isBenchmarkRunning);
                this._artLoaded = this._artDrawn = false
            }
            if (!s.enableArt) {
                this._artLoaded = this._artDrawn = true
            }
        }
        if (!s.enableGridAnimations) {
            this._currentRow = this.row;
            this._currentColumn = this.column;
            this._currentOpacity = this.opacity
        } else {
            var a = this.row - this._currentRow;
            if (this._currentRow != -1 && Math.abs(a) > Controls.Play.EASING / 5) {
                this._currentRow += a * Controls.Play.EASING
            } else {
                this._currentRow = this.row
            }
            a = this.column - this._currentColumn;
            if (this._currentColumn != -1 && Math.abs(a) > Controls.Play.EASING / 5) {
                this._currentColumn += a * Controls.Play.EASING
            } else {
                this._currentColumn = this.column
            }
            a = this.opacity - this._currentOpacity;
            if (this._currentOpacity != -1 && Math.abs(a) > Controls.Play.EASING / 5) {
                this._currentOpacity += a * (Controls.Play.EASING * 4)
            } else {
                this._currentOpacity = this.opacity
            }
        }
        a = this.scale - this._currentScale;
        if (this._currentScale != -1 && Math.abs(a) > Controls.Play.EASING / 5) {
            this._currentScale += a * Controls.Play.EASING
        } else {
            this._currentScale = this.scale
        }
        if (this._image) {
            if (this._image.width > 0) {
                this._artLoaded = true
            }
            if (this._image.readyState == "uninitialized") {
                this._artLoaded = false
            }
        }
        this.base()
    },
    draw: function () {
        if (this._currentScale == 0 && this._currentScale == this.scale) {
            return
        }
        var a = this._size / 2;
        var b = (a) + (this._currentColumn * (this._size + this._margin)) + (this._margin / 2);
        var c = (a) + (this._currentRow * (this._size + this._margin)) + (this._margin / 2);
        this._context.save();
        this._context.translate(b, c);
        if (s.isBenchmarkRunning) {
            this._context.rotate(RL.Utils.map(this.scale, 0, 2, Math.PI * 2, Math.PI * -2))
        }
        this._context.scale(this._currentScale, this._currentScale);
        if (s.enableShading) {
            if (this.opacity != 1) {
                this._context.globalAlpha = this._currentOpacity
            } else {
                if (this.scale < 1) {
                    this._context.globalAlpha = this.scale * this.scale * this.scale
                }
            }
        }
        if (!this._artLoaded || !s.enableArt) {
            this._context.fillStyle = this.data.release.color;
            this._context.fillRect(-a, -a, this._size, this._size)
        } else {
            this._context.drawImage(this._image, -a, -a, this._size, this._size);
            this._artDrawn = true
        }
        if (s.enableShading) {
            this._context.save();
            this._context.fillStyle = Controls.Play.GRADIENT;
            this._context.fillRect(-a, -a, this._size, this._size);
            this._context.restore()
        }
        this._context.strokeStyle = "white";
        this._context.lineWidth = Controls.Play.BORDER_THICKNESS / this._currentScale;
        this._context.strokeRect(-a, -a, this._size, this._size);
        this._context.restore();
        this.base()
    }
},
{
    EASING: 0.12,
    BORDER_THICKNESS: 1,
    GRADIENT: null
});
RL.Utils.registerNS("Controls");
Controls.NextPlay = RL.DomComponent.extend({
    _data: null,
    _isTooltipShowing: false,
    _defaultOpacity: 0,
    _lastTransitionActive: false,
    _isDirty: false,
    constructor: function (a) {
        this.base(a);
        this.element.click($.proxy(function (b) {
            s.selectedPlays[s.zoomLevel] = this._data
        },
        this));
        $(".nextPlayHitArea", this.element).hover($.proxy(this._mouseEnter, this), $.proxy(this._mouseLeave, this));
        this._defaultOpacity = this.element.css("opacity")
    },
    setPlay: function (b) {
        this._data = b;
        if (b == null) {
            this.element.hide();
            return
        }
        this.element.show();
        $(".nextPlayImage", this.element).css({
            border: Controls.Play.BORDER_THICKNESS + "px solid white",
            backgroundColor: b.release.color,
            backgroundImage: "url(" + WebVizBench.buildImageUrl(b.release.image, 300, s.isBenchmarkRunning) + ")",
            backgroundSize: "auto"
        });
        var c = "";
        var d = "";
        var a = "";
        if (s.zoomLevel == 1) {
            c = this._data.getMonthYear();
            d = this._data.getMonthYear();
            a = this.element[0].id == "nextPlay" ? "next month" : "previous month"
        } else {
            if (s.zoomLevel == 2) {
                c = this._data.getDate();
                d = this._data.getMonthDateYear();
                a = this.element[0].id == "nextPlay" ? "next day" : "previous day"
            }
        }
        $(".nextPlayMarker", this.element).text(c);
        $(".nextTooltipDate", this.element).text(d);
        $(".nextTooltipPrompt", this.element).text(a)
    },
    _mouseEnter: function (a) {
        if (!this._isTooltipShowing && !WebVizBench.isTransitionActive) {
            this._isTooltipShowing = true;
            this._isDirty = true
        }
    },
    _mouseLeave: function (a) {
        if (this._isTooltipShowing) {
            this._isTooltipShowing = false;
            this._isDirty = true
        }
    },
    update: function () {
        if (WebVizBench.isTransitionActive != this._lastTransitionActive) {
            this._lastTransitionActive = WebVizBench.isTransitionActive;
            if (this._isTooltipShowing && this._lastTransitionActive) {
                this._isTooltipShowing = false;
                this._isDirty = true
            }
        }
    },
    draw: function () {
        if (this._isDirty) {
            var b = $(".nextPlayHover", this.element);
            var a = $(".nextTooltipRoot", this.element);
            if (this._isTooltipShowing) {
                b.animate({
                    opacity: 1
                },
                150);
                a.animate({
                    svgTransform: "scale(1)"
                },
                s.enableTooltips ? 500 : 0, "backout");
                this.element.animate({
                    opacity: 1
                },
                500, "easeout")
            } else {
                b.animate({
                    opacity: 0
                },
                150);
                a.animate({
                    svgTransform: "scale(0.00001)"
                },
                s.enableTooltips ? 200 : 0, "easein");
                this.element.animate({
                    opacity: this._defaultOpacity
                },
                200)
            }
            this._isDirty = false
        }
    }
},
{
    MARGIN: 30
});
RL.Utils.registerNS("Controls");
Controls.BreadCrumbs = RL.DomComponent.extend({
    _lastPlayGroups: [null, null, null],
    _lastZoomLevel: -1,
    _isDirty: true,
    _crumb0: null,
    _crumbDivider1: null,
    _crumb1: null,
    _crumbDivider2: null,
    _crumb2: null,
    constructor: function (a) {
        this.base(a);
        this._crumb0 = $("#crumb0", a);
        this._crumb0.click($.proxy(function () {
            this._zoomTo(0)
        },
        this));
        this._crumbDivider1 = $("#crumbDivider1", a);
        this._crumb1 = $("#crumb1", a);
        this._crumb1.click($.proxy(function () {
            this._zoomTo(1)
        },
        this));
        this._crumbDivider2 = $("#crumbDivider2", a);
        this._crumb2 = $("#crumb2", a)
    },
    _zoomTo: function (b) {
        s.zoomLevel = b;
        for (var a = s.zoomLevel + 1; a < s.currentPlayGroups.length; a++) {
            s.currentPlayGroups[a] = null
        }
    },
    update: function () {
        for (var a = 0; a < this._lastPlayGroups.length; a++) {
            if (this._lastPlayGroups[a] != s.currentPlayGroups[a]) {
                this._isDirty = true;
                this._lastPlayGroups[a] = s.currentPlayGroups[a]
            }
        }
        if (this._lastZoomLevel != s.zoomLevel) {
            this._lastZoomLevel = s.zoomLevel;
            this._isDirty = true
        }
    },
    draw: function () {
        if (this._isDirty) {
            this._crumb0.removeClass("activeCrumb");
            this._crumb1.hide();
            this._crumb1.removeClass("activeCrumb");
            this._crumbDivider1.hide();
            this._crumb2.hide();
            this._crumb2.removeClass("activeCrumb");
            this._crumbDivider2.hide();
            s.currentPlayGroups.each($.proxy(function (b, a) {
                if (b == 1 && s.zoomLevel >= b && a) {
                    this._crumb1.show();
                    this._crumbDivider1.show();
                    this._crumb1.text(a[0].getMonthYear())
                } else {
                    if (b == 2 && s.zoomLevel >= b && a) {
                        this._crumb2.show();
                        this._crumbDivider2.show();
                        this._crumb2.text(a[0].getDate())
                    }
                }
            },
            this));
            if (this._lastZoomLevel == 0) {
                this._crumb0.addClass("activeCrumb")
            } else {
                if (this._lastZoomLevel == 1) {
                    this._crumb1.addClass("activeCrumb")
                } else {
                    if (this._lastZoomLevel == 2) {
                        this._crumb2.addClass("activeCrumb")
                    }
                }
            }
            this._isDirty = false
        }
    }
});
RL.Utils.registerNS("Controls");
Controls.DisplayOptions = RL.DomComponent.extend({
    _lastIsRenderOptionsOpen: false,
    _lastIsAboutBoxOpen: false,
    _isDirty: false,
    constructor: function (a) {
        $(":checkbox").click($.proxy(this._onCheckBoxClicked, this));
        $("#optionsHandle").click($.proxy(function () {
            if (!s.isRenderOptionsOpen) {
                s.isRenderOptionsOpen = true
            } else {
                s.isRenderOptionsOpen = false;
                s.isAboutBoxOpen = false
            }
        },
        this));
        $("#aboutLink").click($.proxy(function () {
            s.isAboutBoxOpen = !s.isAboutBoxOpen
        },
        this));
        $("#aboutClose").click($.proxy(function () {
            s.isAboutBoxOpen = false
        },
        this));
        $(".displayOptionGroupInfo").hover(this._showBubble, this._hideBubble);
        this.base(a)
    },
    _onCheckBoxClicked: function (a) {
        switch (a.currentTarget) {
            case $("#chkExclude", this.element).get(0):
                s.setExcludeItemsWithoutArt(!a.currentTarget.checked);
                break;
            case $("#chkShading", this.element).get(0):
                s.setEnableShading(a.currentTarget.checked);
                break;
            case $("#chkTransitions", this.element).get(0):
                s.enableTransitions = a.currentTarget.checked;
                break;
            case $("#chkTooltips", this.element).get(0):
                s.enableTooltips = a.currentTarget.checked;
                break;
            case $("#chkFonts", this.element).get(0):
                s.setEnableFonts(a.currentTarget.checked);
                break;
            case $("#chkBackground", this.element).get(0):
                s.enableBackground = a.currentTarget.checked;
                break;
            case $("#chkGrid", this.element).get(0):
                s.enableGridAnimations = a.currentTarget.checked;
                break;
            case $("#chkArt", this.element).get(0):
                s.enableArt = a.currentTarget.checked;
                break;
            case $("#chkVideo", this.element).get(0):
                s.enableVideo = a.currentTarget.checked;
                break
        }
    },
    update: function () {
        if (s.isRenderOptionsOpen != this._lastIsRenderOptionsOpen) {
            this._isDirty = true;
            this._lastIsRenderOptionsOpen = s.isRenderOptionsOpen
        }
        if (s.isAboutBoxOpen != this._lastIsAboutBoxOpen) {
            this._isDirty = true;
            this._lastIsAboutBoxOpen = s.isAboutBoxOpen;
            if (this._lastIsAboutBoxOpen) {
                $("#aboutContent")[0].scrollTop = 0
            }
        }
    },
    draw: function () {
        if (this._isDirty) {
            WebVizBench.isTransitionActive = true;
            var g = this.element.width();
            var b = $("#optionsHandle").width();
            var f = $("#aboutPanel").width();
            var d = $("#displayOptions").width();
            var i = b;
            var e = b;
            var h = b;
            if (s.isRenderOptionsOpen) {
                i += d
            }
            if (s.isAboutBoxOpen) {
                i += f;
                h += f
            }
            var a = s.isAboutBoxOpen ? "rect(0px 193px 427px 0px)" : "rect(0px 193px 427px 193px)";
            var c = 150;
            if (s.isRenderOptionsOpen) {
                $("#optionsHandle").addClass("open")
            } else {
                $("#optionsHandle").removeClass("open")
            }
            $("#aboutPanel").animate({
                right: e,
                clip: a
            },
            c, "linear");
            $("#displayOptions").animate({
                right: h
            },
            c, "linear");
            $("#displayOptionsContainer").animate({
                width: i
            },
            c, "linear", function () {
                WebVizBench.isTransitionActive = false
            });
            this._isDirty = false
        }
        this.base()
    },
    _showBubble: function (c) {
        var a = $("#renderOptionBubble");
        var d = $(c.currentTarget);
        var b = d.parent().text().toLowerCase();
        $(".bubbleBody").hide();
        $(".bubbleHeader").hide();
        if (b.match("dom")) {
            $("#bubbleHeaderDOM").show();
            $("#bubbleBodyDOM").show()
        } else {
            if (b.match("typography")) {
                $("#bubbleHeaderTypography").show();
                $("#bubbleBodyTypography").show()
            } else {
                if (b.match("canvas")) {
                    $("#bubbleHeaderCanvas").show();
                    $("#bubbleBodyCanvas").show()
                } else {
                    if (b.match("svg")) {
                        $("#bubbleHeaderSVG").show();
                        $("#bubbleBodySVG").show()
                    } else {
                        if (b.match("video")) {
                            $("#bubbleHeaderVideo").show();
                            $("#bubbleBodyVideo").show()
                        }
                    }
                }
            }
        }
        a.show();
        a.stop();
        a.css({
            top: d.offset().top - 15,
            left: d.offset().left + 10
        });
        a.animate({
            opacity: 1
        },
        100, "easeout")
    },
    _hideBubble: function (b) {
        var a = $("#renderOptionBubble");
        a.stop();
        a.animate({
            opacity: 0
        },
        100, "easein", function () {
            a.hide()
        })
    }
},
{});
RL.Utils.registerNS("Controls");
Controls.PlayDetails = RL.DomComponent.extend({
    _lastSelectedPlay: null,
    _background: null,
    _isDirty: false,
    constructor: function (a) {
        this.base(a);
        this._background = $("#modalBackground");
        $("#playDetailClose").click($.proxy(function () {
            s.selectedPlay = null
        }))
    },
    update: function () {
        if (this._lastSelectedPlay != s.selectedPlay) {
            this._lastSelectedPlay = s.selectedPlay;
            this._isDirty = true
        }
    },
    draw: function () {
        if (this._isDirty) {
            var a = s.selectedPlay;
            if (a) {
                $("#playDetailArt").css({
                    backgroundColor: a.release.color,
                    backgroundImage: "url(" + WebVizBench.buildImageUrl(a.release.image, 220, s.isBenchmarkRunning) + ")",
                    backgroundSize: "100%"
                });
                $(".playDetailTrackName").text(a.track ? a.track.name : "");
                $("#playDetailArtistName").text(a.artist ? a.artist.name : "");
                $("#playDetailReleaseName").text(a.release ? a.release.name : "");
                $("#playDetailReleaseYear").text(a.release && a.release.releaseDate ? a.release.releaseDate.getFullYear() : "");
                $("#playDetailReleaseLabel").text(a.track ? a.track.label : "");
                $("#playDetailAirDate").text(a.getTime());
                $("#playDetailHostName").text(a.host ? " by " + a.host.name : "");
                $("#playDetailMonthPlays").text(a.track.monthPlays);
                if (a.track.monthPlays == 1) {
                    $("#playDetailMonthPlaysPlural").hide()
                } else {
                    $("#playDetailMonthPlaysPlural").show()
                }
                $("#playDetailYearPlays").text(a.track.yearPlays);
                if (a.track.yearPlays == 1) {
                    $("#playDetailYearPlaysPlural").hide()
                } else {
                    $("#playDetailYearPlaysPlural").show()
                }
                $("#playDetailAllTimePlays").text(a.track.allTimePlays);
                if (a.track.allTimePlays == 1) {
                    $("#playDetailAllTimePlaysPlural").hide()
                } else {
                    $("#playDetailAllTimePlaysPlural").show()
                }
                $("#buyAmazon")[0].href = Controls.PlayDetails.formatBuyLink(a.release.amazonId ? Controls.PlayDetails.BUY_AMAZON_ID : Controls.PlayDetails.BUY_AMAZON, a);
                $("#buyZune")[0].href = Controls.PlayDetails.formatBuyLink(Controls.PlayDetails.BUY_ZUNE, a);
                $("#buyiTunes")[0].href = Controls.PlayDetails.formatBuyLink(Controls.PlayDetails.BUY_ITUNES, a);
                $("#buySonicBoom")[0].href = Controls.PlayDetails.formatBuyLink(Controls.PlayDetails.BUY_SONICBOOM, a);
                $("#buyEasyStreet")[0].href = Controls.PlayDetails.formatBuyLink(Controls.PlayDetails.BUY_EASYSTREET, a);
                $("#buySilverPlatters")[0].href = Controls.PlayDetails.formatBuyLink(Controls.PlayDetails.BUY_SILVERPLATTERS, a);
                $("#buyInsound")[0].href = Controls.PlayDetails.formatBuyLink(Controls.PlayDetails.BUY_INSOUND, a)
            } else { }
            this._isDirty = false
        }
    }
},
{
    BUY_AMAZON_ID: "http://www.amazon.com/dp/{id}?tag=kexponline-20",
    BUY_AMAZON: "http://www.amazon.com/s?ie=UTF8&keywords={release}%20&tag=kexponline-20&index=music&link_code=qs#45%20{artist}",
    BUY_ZUNE: "http://social.zune.net/search.aspx?keyword={artist}%20{track}%20{release}",
    BUY_ITUNES: "http://phobos.apple.com/WebObjects/MZSearch.woa/wa/advancedSearchResults?media=music&artistTerm={artist}&albumTerm={release}&ign-mscache=1",
    BUY_SONICBOOM: "http://www.sonicboomrecords.com/catalog/?artist={artist}&album={release}",
    BUY_EASYSTREET: "http://store.easystreetonline.com/rel/v2_home.php?se_153={artist}&se_154={release}&storenr=375&deptnr=3&rc=1.2&sn=375&sm=78&anyorall=1&search_menu_system=3",
    BUY_SILVERPLATTERS: "http://www.silverplatters.com/rel/v2_home.php?se_556={artist}&se_557={release}&storenr=215&deptnr=6&rc=1.2&db=salesnet&sn=215&sm=2&anyorall=1&search_menu_system=3",
    BUY_INSOUND: "http://www.insound.com/search/searchmain.jsp?from=31702&select=album&query={release}",
    formatBuyLink: function (a, b) {
        return a.replace("{release}", escape(b.release.name)).replace("{artist}", escape(b.artist.name)).replace("{track}", escape(b.track.name)).replace("{id}", escape(b.release.amazonId))
    }
});
RL.Utils.registerNS("Controls");
Controls.SortModes = RL.DomComponent.extend({
    _lastZoomLevel: 0,
    _lastSortMode: Model.AppState.SORT_TIME,
    _isDirty: true,
    constructor: function (a) {
        $("#radSortTime").click($.proxy(function () {
            this._updateSort(s.SORT_TIME)
        },
        this));
        $("#radSortArtist").click($.proxy(function () {
            this._updateSort(s.SORT_ARTIST)
        },
        this));
        $("#radSortPopularity").click($.proxy(function () {
            this._updateSort(s.SORT_POPULARITY)
        },
        this));
        $("#radSortColor").click($.proxy(function () {
            this._updateSort(s.SORT_COLOR)
        },
        this));
        this.base(a)
    },
    update: function () {
        if (this._lastSortMode != s.sortMode) {
            this._lastSortMode = s.sortMode;
            this._isDirty = true
        }
        if (this._lastZoomLevel != s.zoomLevel) {
            this._lastZoomLevel = s.zoomLevel;
            this._isDirty = true
        }
    },
    _updateSort: function (a) {
        s.setSortMode(a)
    },
    draw: function () {
        if (this._isDirty) {
            var a = null;
            switch (s.sortMode) {
                case s.SORT_TIME:
                    a = $("#radSortTime");
                    break;
                case s.SORT_ARTIST:
                    a = $("#radSortArtist");
                    break;
                case s.SORT_POPULARITY:
                    a = $("#radSortPopularity");
                    break;
                case s.SORT_COLOR:
                    a = $("#radSortColor");
                    break
            }
            a[0].checked = true;
            $("label", this.element).removeClass("selectedSortMode");
            $("+ label", a).addClass("selectedSortMode");
            this._isDirty = false
        }
    }
},
{});
RL.Utils.registerNS("Controls");
Controls.RangeMarker = RL.DomComponent.extend({
    grid: null,
    _mode: null,
    _position: null,
    _currentPosition: null,
    _lastTranslate: null,
    _isPositionDirty: true,
    _isContentsDirty: true,
    _lastSortMode: null,
    _lastGrid: null,
    _lastExcludeItemsWithoutArt: false,
    _contents: null,
    _color: null,
    _width: null,
    _height: null,
    constructor: function (a, b) {
        this._mode = b;
        this._contents = $(".rangeMarkerContents", a);
        this._color = $(".rangeMarkerColor", a);
        this._height = a.height();
        this._width = a.width();
        this.base(a)
    },
    update: function () {
        this._updatePosition();
        this._updateContents();
        this._lastSortMode = s.sortMode;
        this._lastExcludeItemsWithoutArt = s.excludeItemsWithoutArt;
        this._lastGrid = this.grid;
        this._lastTranslate = this.grid ? this.grid.globalTranslate : null
    },
    _updatePosition: function () {
        if (this.grid && this.grid.globalTranslate && (!this._lastTranslate || this._lastTranslate.x != this.grid.globalTranslate.x || this._lastTranslate.y != this.grid.globalTranslate.y || this.grid != this._lastGrid)) {
            this._position = new RL.Point(this.grid.globalTranslate.x, this.grid.globalTranslate.y);
            if (this._mode == "end") {
                this._position.x += this.grid.plays[this.grid.plays.length - 1].length * (this.grid.size + this.grid.margin);
                this._position.x -= this._width;
                this._position.x -= this.grid.margin / 2;
                this._position.y += this.grid.plays.length * (this.grid.size + this.grid.margin)
            } else {
                this._position.x += this.grid.margin / 2;
                this._position.y -= this._height
            }
            this._isPositionDirty = true;
            if (!this._currentPosition) {
                this._currentPosition = this._position
            }
        }
    },
    _updateContents: function () {
        this._isContentsDirty = this.grid != this._lastGrid || this._lastSortMode != s.sortMode || this._lastExcludeItemsWithoutArt != s.excludeItemsWithoutArt
    },
    draw: function () {
        this._drawPosition();
        this._drawContents()
    },
    _drawPosition: function () {
        if (!this._currentPosition || !this._isPositionDirty) {
            return
        }
        if (!s.enableTransitions) {
            this._currentPosition = this._position
        } else {
            var a = this._position.x - this._currentPosition.x;
            if (Math.abs(a) > Controls.Play.EASING / 10) {
                this._currentPosition.x += a * Controls.Play.EASING
            } else {
                this._currentPosition.x = this._position.x
            }
            var a = this._position.y - this._currentPosition.y;
            if (Math.abs(a) > Controls.Play.EASING / 10) {
                this._currentPosition.y += a * Controls.Play.EASING
            } else {
                this._currentPosition.y = this._position.y
            }
        }
        this.element.css({
            top: this._currentPosition.y,
            left: this._currentPosition.x,
            display: "block"
        });
        this._isPositionDirty = this._currentPosition.x != this._position.x || this._currentPosition.y != this._position.y
    },
    _drawContents: function () {
        if (!this._isContentsDirty || !this.grid) {
            return
        }
        var f = this._mode == "start" ? 0 : this.grid.plays.length - 1;
        var a = this._mode == "start" ? 0 : this.grid.plays[f].length - 1;
        if (!this.grid.plays[f][a]) {
            return
        }
        var e = this.grid.plays[f][a].data;
        if (s.sortMode == s.SORT_COLOR) {
            this._color.show()
        } else {
            this._color.hide()
        }
        switch (s.sortMode) {
            case s.SORT_TIME:
                var c = "";
                switch (s.zoomLevel) {
                    case 0:
                        c = e.getMonthYear();
                        break;
                    case 1:
                        c = e.getDate();
                        break;
                    case 2:
                        c = e.getTime();
                        break
                }
                this._contents.text(c);
                break;
            case s.SORT_ARTIST:
                this._contents.text(e.artist.name);
                break;
            case s.SORT_POPULARITY:
                var b = 0;
                var d = "";
                if (s.zoomLevel == 0) {
                    b = e.track.allTimePlays;
                    d = "overall"
                } else {
                    if (s.zoomLevel == 1) {
                        b = e.track.monthPlays;
                        d = "this month"
                    } else {
                        if (s.zoomLevel == 2) {
                            b = e.track.monthPlays;
                            d = "this month"
                        }
                    }
                }
                this._contents.text("Played " + b + (b == 1 ? " time " : " times ") + d);
                break;
            case s.SORT_COLOR:
                this._color.css({
                    backgroundColor: e.release.color
                });
                this._contents.text(e.release.color);
                break
        }
        this._isContentsDirty = false
    }
});
RL.Utils.registerNS("Controls");
Controls.GridTooltip = RL.DomComponent.extend({
    grid: null,
    _lastMouseRow: null,
    _lastMouseColumn: null,
    _lastIsShowing: false,
    _isShowing: false,
    _left: 0,
    _top: 0,
    _play: null,
    _svg: null,
    _artist: null,
    _release: null,
    _track: null,
    _meta: null,
    _fill: null,
    _isGrowingForBenchmark: false,
    constructor: function (a) {
        this.base(a);
        this._svg = $("#gridTooltipGroup");
        this._artist = $("#gridTooltipArtist");
        this._release = $("#gridTooltipRelease");
        this._track = $("#gridTooltipTrack");
        this._meta = $("#gridTooltipMeta");
        this._fill = $("#gridTooltipFill");
        this._svg.animate({
            svgTransform: "scale(0.0001)"
        });
        this.element.hide()
    },
    update: function () {
        if (this._isGrowingForBenchmark) {
            return
        }
        if (this.grid && this.grid.globalTranslate) {
            var c = this.grid._mouseRow !== null && this.grid._mouseColumn !== null && !WebVizBench.isTransitionActive;
            if (s.isBenchmarkRunning && s.enableTooltips) {
                c = true
            }
            if (c) {
                var a = this.grid._mouseColumn;
                var b = this.grid._mouseRow;
                if (s.isBenchmarkRunning && s.enableTooltips) {
                    a = Math.round(Math.random() * (this.grid.plays[0].length - 1));
                    b = Math.round(Math.random() * (this.grid.plays.length - 2))
                }
                this._left = this.grid.globalTranslate.x + (a * (this.grid.size + this.grid.margin)) + (this.grid.size / 2);
                this._top = this.grid.globalTranslate.y + (b * (this.grid.size + this.grid.margin)) + (this.grid.size / 2);
                this._play = null;
                if (this.grid.plays && this.grid.plays[b] && this.grid.plays[b][a]) {
                    this._play = this.grid.plays[b][a].data
                }
                if (this._play) {
                    if (s.enableGridAnimations && !s.isBenchmarkRunning) {
                        this._top -= (this.grid.size * this.grid.maxFishEyeScale) / 2
                    } else {
                        this._top -= this.grid.size / 2
                    }
                    this._top -= 12;
                    if (s.isBenchmarkRunning && s.enableTooltips) {
                        this._isShowing = true
                    } else {
                        if (this.grid._mouseRow !== this._lastMouseRow || this.grid._mouseColumn !== this._lastMouseColumn) {
                            this._isShowing = false;
                            this.element.stopTime("tooltipTimer");
                            this.element.oneTime(300, "tooltipTimer", $.proxy(function () {
                                this._isShowing = true
                            },
                            this))
                        }
                    }
                } else {
                    this._isShowing = true
                }
            } else {
                this._isShowing = false;
                this.element.stopTime("tooltipTimer")
            }
            this._lastMouseColumn = this.grid._mouseColumn;
            this._lastMouseRow = this.grid._mouseRow
        }
    },
    draw: function () {
        if (this._isGrowingForBenchmark) {
            return
        }
        if (this._lastIsShowing != this._isShowing) {
            if (this._isShowing) {
                this.element.show();
                this.element.css({
                    left: this._left,
                    top: this._top
                });
                this._artist.text(this._play.artist.name);
                this._release.text(this._play.release.name);
                this._track.text(this._play.track.name);
                var f = "";
                if (s.sortMode == s.SORT_POPULARITY) {
                    if (s.zoomLevel == 0) {
                        f = this._play.track.allTimePlays + " plays overall"
                    } else {
                        if (s.zoomLevel == 1) {
                            f = this._play.track.monthPlays + " plays this month"
                        } else {
                            if (s.zoomLevel == 2) {
                                f = this._play.track.monthPlays + " plays this month"
                            }
                        }
                    }
                } else {
                    if (s.zoomLevel == 0) {
                        f = this._play.getMonthYear()
                    } else {
                        if (s.zoomLevel == 1) {
                            f = this._play.getMonthDateYear()
                        } else {
                            if (s.zoomLevel == 2) {
                                f = this._play.getTime()
                            }
                        }
                    }
                }
                this._meta.text(f);
                var d = this._artist[0].getBBox().width;
                var g = this._release[0].getBBox().width;
                var e = this._track[0].getBBox().width;
                var c = this._meta[0].getBBox().width;
                var b = Math.max(Math.max(d, g), Math.max(e, c)) + 20;
                var a = -b / 2;
                this._fill.animate({
                    svgWidth: b,
                    svgX: a
                },
                0);
                this._artist.animate({
                    svgX: a + (b - d) / 2
                },
                0);
                this._release.animate({
                    svgX: a + (b - g) / 2
                },
                0);
                this._track.animate({
                    svgX: a + (b - e) / 2
                },
                0);
                this._meta.animate({
                    svgX: a + (b - c) / 2
                },
                0);
                if (s.isBenchmarkRunning && s.enableTooltips) {
                    this._isGrowingForBenchmark = true;
                    this._svg.animate({
                        svgTransform: "scale(4)"
                    },
                    1500, "linear", $.proxy(function () {
                        this._svg.animate({
                            svgTransform: "scale(0.0001)"
                        },
                        1500, "linear", $.proxy(function () {
                            this._isGrowingForBenchmark = false;
                            this._lastIsShowing = false
                        },
                        this))
                    },
                    this))
                } else {
                    this._svg.animate({
                        svgTransform: "scale(1)"
                    },
                    s.enableTooltips ? 300 : 0, "backout")
                }
            } else {
                this._svg.animate({
                    svgTransform: "scale(0.0001)"
                },
                s.enableTooltips ? 150 : 0, "easein", $.proxy(function () {
                    this.element.hide()
                },
                this))
            }
        }
        this._lastIsShowing = this._isShowing
    }
},
{
    WIDTH: 490,
    EASING: 0.18,
    MARGIN: 20
});
RL.Utils.registerNS("Controls");
Controls.Video = RL.DomComponent.extend({
    _lastIsPlaying: false,
    _canvas: null,
    _context: null,
    _video: null,
    constructor: function (a) {
        this.base(a);
        this._canvas = $("<canvas />");
        this.element.append(this._canvas);
        this._canvas = this._canvas[0];
        this._context = this._canvas.getContext("2d");
        this._video = $("video", this.element);
        this.element.hide()
    },
    update: function () {
        if (s.enableVideo != this._lastIsPlaying) {
            this._lastIsPlaying = s.enableVideo;
            if (s.enableVideo) {
                if (this._video[0].src) {
                    this._video[0].play()
                } else {
                    this._video[0].src = WebVizBench.VIDEO_URL
                }
                this.element.show();
                if (s.isBenchmarkRunning) {
                    this._video.show()
                }
            } else {
                this._video[0].pause();
                this.element.hide();
                this._video.hide()
            }
        }
        if (s.enableVideo && !s.isBenchmarkRunning) {
            if (this._canvas.width != WebVizBench.documentWidth || this._canvas.height != WebVizBench.documentHeight) {
                this._canvas.width = WebVizBench.documentWidth;
                this._canvas.height = WebVizBench.documentHeight
            }
            if (this._video[0].readyState >= 2) {
                this._context.drawImage(this._video[0], 0, 0, this._canvas.width, this._canvas.height)
            }
        }
    }
},
{});
RL.Utils.registerNS("Controls");
Controls.Benchmark = RL.DomComponent.extend({
    _intro: null,
    _loading: null,
    _status: null,
    _results: null,
    _background: null,
    constructor: function () {
        this.base();
        this._intro = $("#benchmarkIntro");
        this._loading = $("#benchmarkLoading");
        this._status = $("#benchmarkStatus");
        this._results = $("#benchmarkResults");
        this._background = $("#modalBackground");
        this._intro.hide();
        this._loading.hide();
        this._status.hide();
        this._results.hide();
        $("#runBenchmarkBtn").click($.proxy(this._startBtnClicked, this));
        $("#benchmarkIntroStartBtn").click($.proxy(this._introStartBtnClicked, this));
        $("#benchmarkIntroCancelBtn").click($.proxy(this._introCancelBtnClicked, this));
        $("#benchmarkLoadingCancelBtn").click($.proxy(this._loadingCancelBtnClicked, this));
        $("#benchmarkStatusCancelBtn").click($.proxy(this._statusCancelBtnClicked, this));
        $(d.body).keypress($.proxy(function (f) {
            if (f.keyCode == 27) {
                this._statusCancelBtnClicked()
            }
        },
        this));
        $("#benchmarkResultsStartBtn").click($.proxy(this._resultsStartBtnClicked, this));
        $("#benchmarkResultsCancelBtn").click($.proxy(this._resultsCancelBtnClicked, this));
        var a = navigator.userAgent.toLowerCase();
        var b;
        var e;
        var c;
        if (a.indexOf("msie") > -1) {
            b = a.indexOf("msie");
            e = "Internet Explorer";
            c = "" + parseFloat("" + a.substring(b + 5))
        } else {
            if (a.indexOf("chrome") > -1) {
                b = a.indexOf("chrome");
                e = "Chrome";
                c = "" + parseFloat("" + a.substring(b + 7))
            } else {
                if (a.indexOf("firefox") > -1) {
                    b = a.indexOf("firefox");
                    e = "Firefox";
                    c = "" + parseFloat("" + a.substring(b + 8))
                } else {
                    if (a.indexOf("opera") > -1) {
                        e = "Opera"
                    } else {
                        if (a.indexOf("safari") > -1) {
                            b = a.indexOf("safari");
                            e = "Safari";
                            c = "" + parseFloat("" + a.substring(b + 7))
                        }
                    }
                }
            }
        }
        $("#benchmarkBrowserName").text(e);
        $("#benchmarkBrowserVersion").text(c)
    },
    _startBtnClicked: function () {
        this._background.show();
        s.isDialogOpen = true;
        this._background.css({
            opacity: 0
        });
        this._background.animate({
            opacity: 1
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._intro.show();
        this._intro.css({
            opacity: 0
        });
        this._intro.animate({
            opacity: 1
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            this._intro.hide();
            this._intro.show()
        },
        this))
    },
    _introCancelBtnClicked: function () {
        this._background.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._intro.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            s.isDialogOpen = false;
            this._background.hide();
            this._intro.hide()
        },
        this))
    },
    _introStartBtnClicked: function () {
        this._intro.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._loading.show();
        $("#loadingContent").text("00%");
        this._loading.css({
            opacity: 0
        });
        $(w).resize();
        this._loading.animate({
            opacity: 1
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            this._intro.hide();
            s.isBenchmarkRunning = true
        },
        this))
    },
    _loadingCancelBtnClicked: function () {
        s.isBenchmarkRunning = false;
        this._background.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._loading.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            s.isDialogOpen = false;
            this._background.hide();
            this._loading.hide()
        },
        this))
    },
    loadProgress: function (a, c) {
        if (a > 0) {
            var b = Math.floor((c - a) / c * 100) + "%";
            if (b.length == 2) {
                b = "0" + b
            }
            $("#loadingContent").text(b);
            return
        }
        this._background.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._loading.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._status.show();
        this._status.css({
            opacity: 0
        });
        $("#header").animate({
            opacity: 0
        });
        $("#displayOptionsContainer").animate({
            opacity: 0
        });
        this._status.animate({
            opacity: 1
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            s.isDialogOpen = false;
            this._background.hide();
            this._loading.hide();
            this._status.hide();
            this._status.show()
        },
        this))
    },
    _statusCancelBtnClicked: function () {
        if (window.location.search) {
            window.location.replace(window.location.href + "&skipintro")
        } else {
            window.location.replace(window.location.href + "?skipintro")
        }
        return;
        s.isBenchmarkRunning = false;
        this._status.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            this._status.hide();
            $("#header").animate({
                opacity: 1
            },


            function () {
                $("#header").hide();
                $("#header").show()
            });
            $("#displayOptionsContainer").animate({
                opacity: 1
            })
        },
        this))
    },
    benchmarkCompleted: function (e, c, b) {
        var g = c[c.length - 1] - e[e.length - 1];
        var f = b[b.length - 1];
        var a = f / (g / 1000);
        a = Math.floor(a * 100) / 100;
        a = (a > 57) ? 60 : a;
        f *= 10;
        $("#benchmarkResultTotalFrames").html(f);
        $("#benchmarkResultTotalFps").html(a);
        $("#benchmarkResultWindowSize").html(WebVizBench.documentWidth + " x " + WebVizBench.documentHeight);
        s.benchmarkMessage = "My HTML5 benchmark: " + f + "/" + a + " fps/" + WebVizBench.documentWidth + "x" + WebVizBench.documentHeight + ". Get yours at http://WebVizBench.com";
        s.isDialogOpen = true;
        this._background.show();
        this._background.animate({
            opacity: 1
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._status.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._results.show();
        this._results.css({
            opacity: 0
        });
        this._results.animate({
            opacity: 1
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            this._results.hide();
            this._results.show();
            this._status.hide()
        },
        this))
    },
    _resultsStartBtnClicked: function () {
        this._results.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._loading.show();
        this._loading.css({
            opacity: 0
        });
        this._loading.animate({
            opacity: 1
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            this._results.hide();
            s.isBenchmarkRunning = true
        },
        this))
    },
    _resultsCancelBtnClicked: function () {
        this._background.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING);
        this._results.animate({
            opacity: 0
        },
        Controls.Benchmark.DURATION, Controls.Benchmark.EASING, $.proxy(function () {
            this._results.hide();
            s.isDialogOpen = false;
            this._background.hide();
            $("#header").animate({
                opacity: 1
            });
            $("#displayOptionsContainer").animate({
                opacity: 1
            })
        },
        this))
    }
},
{
    DURATION: 300,
    EASING: "easeinout"
});
RL.Utils.registerNS("Controls");
Controls.BenchmarkDebug = RL.DomComponent.extend({
    constructor: function (a) {
        this.base(a);
        if (document.location.pathname.toUpperCase().indexOf("DEBUG") == -1) {
            return
        }
        $(Transitions.BenchmarkTransition.STATES).each($.proxy(function (c, b) {
            var d = $("<button/>");
            d.text(b.name);
            d.data("benchmarkState", b);
            d.click($.proxy(this._onBenchmarkClick, this));
            a.append(d)
        },
        this))
    },
    _onBenchmarkClick: function (a) {
        var b = $(a.currentTarget).data("benchmarkState");
        s.isBenchmarkRunning = true;
        s.debugBenchmark = $.inArray(b, Transitions.BenchmarkTransition.STATES)
    }
},
{});
RL.Utils.registerNS("Transitions");
Transitions.LateralTransition = RL.Component.extend({
    _app: null,
    _lastSelectedPlay: null,
    _lastZoomLevel: -1,
    constructor: function (a) {
        this._app = a;
        this.base()
    },
    update: function () {
        var a = false;
        if (this._lastZoomLevel != s.zoomLevel) {
            this._lastZoomLevel = s.zoomLevel;
            this._lastSelectedPlay = s.selectedPlays[s.zoomLevel];
            return
        }
        if (s.selectedPlays[s.zoomLevel] != this._lastSelectedPlay) {
            a = true
        }
        if (a) {
            WebVizBench.isTransitionActive = true;
            var e = this._lastSelectedPlay;
            var b = 300;
            var c = "easeinout";
            jsonCallback = $.proxy(function (g) {
                $(d.body).removeClass("wait");
                if (!s.enableTransitions) {
                    $(d.body).oneTime(b * 5, $.proxy(function () {
                        this._app._setupGrid(s.parsePlayGroup(g, s.sortMode));
                        this._app._setupPrevNext();
                        WebVizBench.isTransitionActive = false
                    },
                    this));
                    return
                }
                var f = $("#lateralTransitionGridCover");
                var h = this._app._playGrid;
                $(h._canvas).animate({
                    opacity: 0
                },
                b, c);
                this._app._rangeMarkerStart.element.animate({
                    opacity: 0
                },
                b, c);
                this._app._rangeMarkerEnd.element.animate({
                    opacity: 0
                },
                b, c);
                f.show();
                f.css({
                    backgroundColor: this._lastSelectedPlay.release.color,
                    position: "absolute",
                    left: h.globalTranslate.x,
                    top: h.globalTranslate.y,
                    width: h.plays[0].length * (h.size + h.margin),
                    height: h.plays.length * (h.size + h.margin),
                    opacity: 0,
                    border: "1px white solid",
                    visibility: "visible"
                }).animate({
                    opacity: 0.3
                },
                b, c, $.proxy(function () {
                    var i = s.currentPlayGroups[s.zoomLevel - 1];
                    if (s.sortMode != s.SORT_TIME) {
                        var p = [];
                        i.each(function (r, t) {
                            p.push(t)
                        });
                        p.sort(function (r, t) {
                            return r.airTime - t.airTime
                        });
                        i = p
                    }
                    var k = $.inArray(e, i);
                    var l = $.inArray(s.selectedPlays[s.zoomLevel], i);
                    var m = l - k;
                    var j = m == 1 ? this._app._nextPlay : this._app._prevPlay;
                    var o = m == -1 ? this._app._nextPlay : this._app._prevPlay;
                    var q = h.plays[0].length * (h.size + h.margin);
                    this._app._setupGrid(s.parsePlayGroup(g, s.sortMode));
                    h = this._app._playGrid;
                    h.update();
                    $(h._canvas).css({
                        opacity: 0
                    });
                    var n = j.element.offset().left - h.globalTranslate.x;
                    if (m == -1) {
                        n -= (q - j.element.width())
                    }
                    $(h._canvas).css({
                        position: "absolute",
                        left: n
                    });
                    $(h._canvas).animate({
                        opacity: 1
                    },
                    b, c);
                    j.element.animate({
                        opacity: 0
                    },
                    b, c, $.proxy(function () {
                        var r = h.globalTranslate.x + (h.plays[0].length * (h.size + h.margin)) + Controls.NextPlay.MARGIN;
                        var t = h.globalTranslate.x - this._app._prevPlay.element.width() - Controls.NextPlay.MARGIN;
                        $(h._canvas).animate({
                            left: 0
                        },
                        b, c);
                        f.animate({
                            left: m == 1 ? t : r,
                            top: (WebVizBench.documentHeight - 300) / 2,
                            width: 300,
                            height: 300
                        },
                        b, c);
                        o.element.animate({
                            left: m == 1 ? -o.element.width() - Controls.NextPlay.MARGIN : WebVizBench.documentWidth + Controls.NextPlay.MARGIN
                        },
                        b, c);
                        var u = k == i.length - 2 ? null : i[k + 2];
                        if (m == -1) {
                            u = k == 1 ? null : i[k - 2]
                        }
                        j.setPlay(u);
                        n = m == -1 ? -o.element.width() - Controls.NextPlay.MARGIN : WebVizBench.documentWidth + Controls.NextPlay.MARGIN;
                        j.element.css({
                            left: n,
                            opacity: j._defaultOpacity
                        });
                        j.element.animate({
                            left: m == 1 ? r : t
                        },
                        b, c, $.proxy(function () {
                            o.element.css({
                                left: m == -1 ? r : t,
                                opacity: 0
                            });
                            o.setPlay(i[k]);
                            o.element.animate({
                                opacity: o._defaultOpacity
                            },
                            b, c);
                            f.animate({
                                opacity: 0
                            },
                            b, c, $.proxy(function () {
                                f.hide();
                                this._app._rangeMarkerStart.element.animate({
                                    opacity: 1
                                },
                                b / 2, c);
                                this._app._rangeMarkerEnd.element.animate({
                                    opacity: 1
                                },
                                b / 2, c, $.proxy(function () {
                                    WebVizBench.isTransitionActive = false
                                },
                                this))
                            },
                            this))
                        },
                        this))
                    },
                    this))
                },
                this))
            },
            this);
            WebVizBench.ajax(s.selectedPlays[s.zoomLevel].getFileName(s.zoomLevel));
            this._lastSelectedPlay = s.selectedPlays[s.zoomLevel];
            a = false
        }
    }
},
{});
RL.Utils.registerNS("Transitions");
Transitions.ZoomTransition = RL.Component.extend({
    _app: null,
    _lastZoomLevel: 0,
    _previousZoomLevel: 0,
    constructor: function (a) {
        this._app = a;
        this.base()
    },
    update: function () {
        if (this._lastZoomLevel != s.zoomLevel) {
            WebVizBench.isTransitionActive = true;
            this._previousZoomLevel = this._lastZoomLevel;
            if (s.zoomLevel < this._lastZoomLevel) {
                this._doTransition(s.currentPlayGroups[s.zoomLevel])
            } else {
                jsonCallback = $.proxy(function (a) {
                    $(d.body).removeClass("wait");
                    this._doTransition(s.parsePlayGroup(a, s.sortMode))
                },
                this);
                WebVizBench.ajax(s.selectedPlays[s.zoomLevel].getFileName(s.zoomLevel))
            }
            this._lastZoomLevel = s.zoomLevel
        }
    },
    _doTransition: function (a) {
        if (!s.enableTransitions) {
            var b = 300;
            $(d.body).oneTime(b * 3, $.proxy(function () {
                this._app._setupGrid(a);
                this._app._setupPrevNext();
                this._app._positionPrevNext(true);
                WebVizBench.isTransitionActive = false
            },
            this));
            return
        }
        if (s.zoomLevel > this._previousZoomLevel) {
            this._zoomIn(a)
        } else {
            this._zoomOut(a)
        }
    },
    _zoomIn: function (f) {
        var b = 300;
        var m = "easeinout";
        var l = $("#zoomTransitionGridCover");
        var o = this._app._playGrid;
        var k = s.selectedPlays[s.zoomLevel];
        var a = null;
        o._flatPlays.each(function (p, q) {
            if (q.data == k) {
                a = q;
                return false
            }
        });
        var j = null;
        var i = null;
        var e = null;
        var h = null;
        if (s.zoomLevel == 0) {
            j = WebVizBench.DECADE_SIZE;
            i = WebVizBench.DECADE_MARGIN;
            h = WebVizBench.DECADE_COLUMNS;
            e = Math.ceil(f.length / h)
        } else {
            if (s.zoomLevel == 1) {
                j = WebVizBench.MONTH_SIZE;
                i = WebVizBench.MONTH_MARGIN;
                h = WebVizBench.MONTH_COLUMNS;
                e = Math.ceil(f.length / h)
            } else {
                j = WebVizBench.DAY_SIZE;
                i = WebVizBench.DAY_MARGIN;
                e = WebVizBench.DAY_ROWS;
                h = Math.ceil(f.length / e)
            }
        }
        var g = h * (j + i);
        var c = e * (j + i);
        var n = new RL.Point((o.element.parent().width() - g) / 2, (o.element.parent().height() - c) / 2);
        o.isMouseEnabled = false;
        j = !s.enableGridAnimations || s.isBenchmarkRunning ? o.size : o.maxFishEyeScale * o.size;
        l.css({
            left: o.globalTranslate.x + (a.column * (o.size + o.margin)) + (o.size / 2) - (j / 2) + (o.margin / 2),
            top: o.globalTranslate.y + (a.row * (o.size + o.margin)) + (o.size / 2) - (j / 2) + (o.margin / 2),
            width: j,
            height: j,
            backgroundColor: k.release.color,
            border: "1px white solid",
            visibility: "visible",
            opacity: 0
        });
        l.show();
        l.animate({
            opacity: 1
        },
        b, m, $.proxy(function () {
            this._app._rangeMarkerStart.element.animate({
                opacity: 0
            },
            b / 2, m);
            this._app._rangeMarkerEnd.element.animate({
                opacity: 0
            },
            b / 2, m);
            $(o._canvas).animate({
                opacity: 0
            },
            b, m);
            l.animate({
                left: n.x,
                top: n.y,
                width: g,
                height: c
            },
            b, m, $.proxy(function () {
                this._app._setupGrid(f);
                var p = this._app._playGrid;
                p.update();
                $(p._canvas).css({
                    opacity: 0
                });
                WebVizBench.isTransitionActive = false;
                this._app._setupPrevNext();
                this._app._positionPrevNext(true);
                WebVizBench.isTransitionActive = true;
                $(p._canvas).animate({
                    opacity: 1
                },
                b, m);
                this._app._rangeMarkerStart.element.animate({
                    opacity: 1
                },
                b / 2, m);
                this._app._rangeMarkerEnd.element.animate({
                    opacity: 1
                },
                b / 2, m);
                l.animate({
                    opacity: 0
                },
                b, m, $.proxy(function () {
                    l.hide();
                    WebVizBench.isTransitionActive = false
                },
                this))
            },
            this))
        },
        this))
    },
    _zoomOut: function (f) {
        var c = 300;
        var b = "easeinout";
        var a = $("#zoomTransitionGridCover");
        var e = this._app._playGrid;
        var g = s.selectedPlays[s.zoomLevel + 1];
        e.isMouseEnabled = false;
        this._app._rangeMarkerStart.element.animate({
            opacity: 0
        },
        c / 2, b);
        this._app._rangeMarkerEnd.element.animate({
            opacity: 0
        },
        c / 2, b);
        a.css({
            left: e.globalTranslate.x,
            top: e.globalTranslate.y,
            width: e.plays[0].length * (e.size + e.margin),
            height: e.plays.length * (e.size + e.margin),
            backgroundColor: g.release.color,
            border: "1px white solid",
            visibility: "visible",
            opacity: 0
        });
        a.show();
        a.animate({
            opacity: 1
        },
        c, b, $.proxy(function () {
            this._app._setupGrid(f);
            var i = this._app._playGrid;
            i.update();
            $(i._canvas).css({
                opacity: 0
            });
            $(i._canvas).animate({
                opacity: 1
            },
            c, b);
            WebVizBench.isTransitionActive = false;
            this._app._setupPrevNext();
            this._app._positionPrevNext(true);
            WebVizBench.isTransitionActive = true;
            var h = null;
            i._flatPlays.each(function (j, k) {
                if (k.data == g) {
                    h = k;
                    return false
                }
            });
            if (!h) {
                h = i._flatPlays[0]
            }
            a.animate({
                left: i.globalTranslate.x + (h.column * (i.size + i.margin)) + i.margin / 2,
                top: i.globalTranslate.y + (h.row * (i.size + i.margin)) + i.margin / 2,
                width: i.size,
                height: i.size
            },
            c, b, $.proxy(function () {
                this._app._rangeMarkerStart.element.animate({
                    opacity: 1
                },
                c / 2, b);
                this._app._rangeMarkerEnd.element.animate({
                    opacity: 1
                },
                c / 2, b);
                a.animate({
                    opacity: 0
                },
                c, b, $.proxy(function () {
                    a.hide();
                    WebVizBench.isTransitionActive = false
                },
                this))
            },
            this))
        },
        this))
    }
},
{});
RL.Utils.registerNS("Transitions");
Transitions.PlayDetailTransition = RL.Component.extend({
    _app: null,
    _lastSelectedPlay: null,
    constructor: function (a) {
        this._app = a;
        this.base()
    },
    update: function () {
        if (this._lastSelectedPlay != s.selectedPlay) {
            WebVizBench.isTransitionActive = true;
            if (s.selectedPlay) {
                this._zoomIn()
            } else {
                this._zoomOut()
            }
            this._lastSelectedPlay = s.selectedPlay
        }
    },
    _zoomIn: function () {
        var c = 300;
        var b = "easeinout";
        if (!s.enableTransitions) {
            $(d.body).oneTime(c * 3, $.proxy(function () {
                s.isDialogOpen = true;
                $("#modalBackground").show();
                $("#modalBackground").css({
                    opacity: 1
                });
                $("#playDetail").show();
                $("#playDetail").css({
                    opacity: 1,
                    clip: "rect(0px 495px 240px 0px)"
                });
                $("#playDetailArt").show();
                $("#playDetailArt").css({
                    opacity: 1,
                    left: (WebVizBench.documentWidth - $("#playDetail").width()) / 2 + 10,
                    top: (WebVizBench.documentHeight - $("#playDetail").height()) / 2 + 10,
                    width: 220,
                    height: 220
                });
                WebVizBench.isTransitionActive = false
            },
            this));
            return
        }
        var a = $("#playDetailArt");
        var e = this._app._playGrid;
        var h = s.selectedPlay;
        var g = null;
        e._flatPlays.each(function (i, j) {
            if (j.data == h) {
                g = j;
                return false
            }
        });
        e.isMouseEnabled = false;
        var f = !s.enableGridAnimations || s.isBenchmarkRunning ? e.size : e.maxFishEyeScale * e.size;
        a.css({
            left: e.globalTranslate.x + (g.column * (e.size + e.margin)) + (e.size / 2) - (f / 2) + (e.margin / 2) - 1,
            top: e.globalTranslate.y + (g.row * (e.size + e.margin)) + (e.size / 2) - (f / 2) + (e.margin / 2) - 1,
            width: f,
            height: f,
            backgroundColor: h.release.color,
            opacity: 0
        });
        a.show();
        a.animate({
            opacity: 1
        },
        c, b, $.proxy(function () {
            a.animate({
                left: (WebVizBench.documentWidth - $("#playDetail").width()) / 2 + 10,
                top: (WebVizBench.documentHeight - $("#playDetail").height()) / 2 + 10,
                width: 220,
                height: 220
            },
            c, b, $.proxy(function () {
                var i = $("#playDetail");
                i.show();
                i.css({
                    clip: "rect(10px 230px 230px 10px)"
                });
                i.animate({
                    clip: "rect(0px 495px 240px 0px)"
                },
                c, b);
                s.isDialogOpen = true;
                $("#modalBackground").show();
                $("#modalBackground").animate({
                    opacity: 1
                },
                c, b, $.proxy(function () {
                    WebVizBench.isTransitionActive = false;
                    e._mouseColumn = e._mouseRow = null
                },
                this))
            },
            this))
        },
        this))
    },
    _zoomOut: function () {
        var e = 300;
        var b = "easeinout";
        if (!s.enableTransitions) {
            $(d.body).oneTime(e, $.proxy(function () {
                s.isDialogOpen = false;
                $("#modalBackground").hide();
                $("#modalBackground").css({
                    opacity: 0
                });
                $("#playDetail").hide();
                $("#playDetailArt").hide();
                $("#playDetailArt").css({
                    opacity: 0
                });
                WebVizBench.isTransitionActive = false
            },
            this));
            return
        }
        var a = $("#playDetailArt");
        var f = this._app._playGrid;
        var h = this._lastSelectedPlay;
        var g = null;
        f._flatPlays.each(function (i, j) {
            if (j.data == h) {
                g = j;
                return false
            }
        });
        var c = $("#playDetail");
        c.animate({
            clip: "rect(10px 230px 230px 10px)"
        },
        e, b);
        $("#modalBackground").animate({
            opacity: 0
        },
        e, b, $.proxy(function () {
            c.hide();
            s.isDialogOpen = false;
            $("#modalBackground").hide();
            var j = g == null ? 0 : g.column;
            var i = g == null ? 0 : g.row;
            a.animate({
                left: f.globalTranslate.x + (j * (f.size + f.margin)) + (f.margin / 2) - 1,
                top: f.globalTranslate.y + (i * (f.size + f.margin)) + (f.margin / 2) - 1,
                width: f.size,
                height: f.size
            },
            e, b, $.proxy(function () {
                WebVizBench.isTransitionActive = false;
                f.isMouseEnabled = true;
                a.hide()
            },
            this))
        },
        this))
    }
},
{});
RL.Utils.registerNS("Transitions");
Transitions.BenchmarkTransition = RL.Component.extend({
    _app: null,
    _currentState: 0,
    _currentStep: 0,
    _lastIsBenchmarkRunning: false,
    _loadingImages: null,
    _itemsToLoad: 0,
    _originalState: null,
    _stateStartTimes: null,
    _stateEndTimes: null,
    _stateFrameCounts: null,
    _steps: null,
    constructor: function (a) {
        this._app = a;
        this.base();
        this._steps = [$.proxy(function () {
            this._log("go back to decade view");
            s.enableTooltips = false;
            s.zoomLevel = 0;
            s.setSortMode(s.SORT_TIME);
            s.selectedPlay = null
        },
        this), $.proxy(function () {
            this._log("set up state");
            var b = Transitions.BenchmarkTransition.STATES[this._currentState];
            s.setEnableShading(b.enableShading);
            s.enableTransitions = b.enableTransitions;
            s.enableTooltips = b.enableTooltips;
            s.setEnableFonts(b.enableFonts);
            s.enableBackground = b.enableBackground;
            s.enableGridAnimations = b.enableGridAnimations;
            s.enableArt = b.enableArt;
            s.enableVideo = b.enableVideo;
            s.excludeItemsWithoutArt = b.excludeItemsWithoutArt;
            s.enableGridScaling = b.enableGridScaling;
            $("#benchmarkStateName").text(b.name);
            this._stateStartTimes[this._currentState] = RL.App.now;
            this._stateFrameCounts[this._currentState] = 1;
            $(".benchmarkProgressBar").each($.proxy(function (c, e) {
                e.removeAttribute("fill");
                e.setAttribute("fill", c <= this._currentState ? "#B43AE4" : "#FFFFFF");
                e.removeAttribute("opacity");
                e.setAttribute("opacity", c <= this._currentState ? 1 : 0.2)
            },
            this))
        },
        this), $.proxy(function () {
            this._log("open specific month");
            if (!this._stateStartTimes[this._currentState]) {
                this._stateStartTimes[this._currentState] = RL.App.now
            }
            var b = Transitions.BenchmarkTransition.DECADE_CLICK;
            s.zoomLevel = 1;
            s.selectedPlays[s.zoomLevel] = this._app._playGrid.plays[b.row][b.column].data
        },
        this), $.proxy(function () {
            this._log("open specific day");
            var b = Transitions.BenchmarkTransition.MONTH_CLICK;
            s.zoomLevel = 2;
            s.selectedPlays[s.zoomLevel] = this._app._playGrid.plays[b.row][b.column].data
        },
        this), $.proxy(function () {
            this._log("sort by artist");
            s.setSortMode(s.SORT_ARTIST)
        },
        this), $.proxy(function () {
            this._log("open next day");
            s.selectedPlays[s.zoomLevel] = this._app._nextPlay._data
        },
        this), $.proxy(function () {
            this._log("sort by popularity");
            s.setSortMode(s.SORT_POPULARITY)
        },
        this), $.proxy(function () {
            this._log("open next day");
            s.selectedPlays[s.zoomLevel] = this._app._nextPlay._data
        },
        this), $.proxy(function () {
            this._log("sort by color");
            s.setSortMode(s.SORT_COLOR)
        },
        this), $.proxy(function () {
            this._log("open next day");
            s.selectedPlays[s.zoomLevel] = this._app._nextPlay._data
        },
        this), $.proxy(function () {
            this._log("sort by time");
            s.setSortMode(s.SORT_TIME)
        },
        this), $.proxy(function () {
            this._log("open next day");
            s.selectedPlays[s.zoomLevel] = this._app._nextPlay._data
        },
        this), $.proxy(function () {
            this._log("go to month view");
            s.zoomLevel = 1
        },
        this), $.proxy(function () {
            this._log("go to decade view");
            s.zoomLevel = 0
        },
        this)]
    },
    update: function () {
        if (this._lastIsBenchmarkRunning) {
            if (this._stateFrameCounts[this._currentState]) {
                this._stateFrameCounts[this._currentState]++
            }
        }
        if (this._lastIsBenchmarkRunning != s.isBenchmarkRunning) {
            this._lastIsBenchmarkRunning = s.isBenchmarkRunning;
            if (s.isBenchmarkRunning) {
                this._stateStartTimes = [];
                this._stateEndTimes = [];
                this._stateFrameCounts = [];
                this._currentState = s.debugBenchmark != -1 ? s.debugBenchmark : 0;
                this._currentStep = -1;
                this._stateStartTimes[this._currentState] = RL.App.now;
                this._originalState = {
                    enableShading: s.enableShading,
                    enableTransitions: s.enableTransitions,
                    enableTooltips: s.enableTooltips,
                    enableFonts: s.enableFonts,
                    enableBackground: s.enableBackground,
                    enableGridAnimations: s.enableGridAnimations,
                    enableArt: s.enableArt,
                    enableVideo: s.enableVideo,
                    sortMode: s.sortMode,
                    excludeItemsWithoutArt: s.excludeItemsWithoutArt,
                    enableGridScaling: s.enableGridScaling
                };
                s.enableTooltips = false;
                this._preload()
            } else {
                this._restoreState()
            }
        }
        if (WebVizBench.isTransitionActive || !s.isBenchmarkRunning) {
            return
        }
        if (this._itemsToLoad) {
            for (var a = 0; a < this._loadingImages.length; a++) {
                var e = this._loadingImages[a];
                if (e && e.width > 0) {
                    this._itemsToLoad--;
                    this._loadingImages[a] = null;
                    this._app._benchmark.loadProgress(this._itemsToLoad, this._totalItemsToLoad)
                }
            }
        }
        if (this._itemsToLoad) {
            return
        }
        if (this._currentStep >= this._steps.length - 1) {
            this._stateEndTimes[this._currentState] = RL.App.now;
            this._currentState++;
            this._currentStep = 0;
            var f = Transitions.BenchmarkTransition.STATES.length - 1;
            if (this._currentState > f || s.debugBenchmark != -1) {
                this._stateEndTimes[this._currentState] = RL.App.now;
                this._lastIsBenchmarkRunning = s.isBenchmarkRunning = false;
                this._currentState = 0;
                this._currentStep = -1;
                this._app._benchmark.benchmarkCompleted(this._stateStartTimes, this._stateEndTimes, this._stateFrameCounts);
                this._restoreState();
                if (s.debugBenchmark != -1) {
                    var h = Transitions.BenchmarkTransition.STATES[s.debugBenchmark].name + ": ";
                    var b = RL.App.now - this._stateStartTimes[s.debugBenchmark];
                    var c = this._stateFrameCounts[s.debugBenchmark];
                    var g = c / (b / 1000);
                    g = Math.floor(g * 100) / 100;
                    g = (g > 57) ? 60 : g;
                    h += b + "ms ";
                    h += c + " frames ";
                    h += g + " fps";
                    alert(h);
                    s.debugBenchmark = -1
                }
                return
            }
        } else {
            this._currentStep++
        }
        this._steps[this._currentStep]()
    },
    _log: function (a) {
        if (w.console && console.log) {
            console.log((RL.App.now - this._stateStartTimes[this._currentState]) + " " + (this._currentState + 1) + "/" + Transitions.BenchmarkTransition.STATES.length + " " + this._currentStep + "/" + this._steps.length + " " + Transitions.BenchmarkTransition.STATES[this._currentState].name + "/" + a)
        }
    },
    _preload: function () {
        this._itemsToLoad = 0;
        this._loadingImages = $([]);
        $(Transitions.BenchmarkTransition.IMAGE_FILES).each($.proxy(function (c, a) {
            this._itemsToLoad++;
            var e = new Image();
            var b = a.split("/");
            e.src = WebVizBench.buildImageUrl(b[1], b[0], true);
            this._loadingImages.push(e)
        },
        this));
        $(Model.ReleaseVO.NO_ART_KEYS).each($.proxy(function (b, a) {
            this._itemsToLoad++;
            var c = new Image();
            c.src = "Images/Missing/missingimage" + (b + 1) + ".png";
            this._loadingImages.push(c)
        },
        this));
        jsonCallback = $.proxy(function (a) {
            $(d.body).removeClass("wait");
            this._itemsToLoad--;
            this._app._benchmark.loadProgress(this._itemsToLoad, this._totalItemsToLoad)
        },
        this);
        $(Transitions.BenchmarkTransition.DATA_FILES).each($.proxy(function (a, b) {
            this._itemsToLoad++;
            WebVizBench.ajax(WebVizBench.buildDataUrl("/plays/" + b + ".json", true))
        },
        this));
        this._totalItemsToLoad = this._itemsToLoad
    },
    _restoreState: function () {
        s.setEnableShading(this._originalState.enableShading);
        s.enableTransitions = this._originalState.enableTransitions;
        s.enableTooltips = this._originalState.enableTooltips;
        s.setEnableFonts(this._originalState.enableFonts);
        s.enableBackground = this._originalState.enableBackground;
        s.enableGridAnimations = this._originalState.enableGridAnimations;
        s.enableArt = this._originalState.enableArt;
        s.enableVideo = this._originalState.enableVideo;
        s.sortMode = this._originalState.sortMode;
        s.enableGridScaling = this._originalState.enableGridScaling;
        s.zoomLevel = 0;
        s.excludeItemsWithoutArt = this._originalState.excludeItemsWithoutArt;
        var a = $([]);
        this._app._playGrid._flatPlays.each(function (b, c) {
            a.push(c.data)
        });
        this._app._setupGrid(a)
    }
},
{
    STATE_DURATION: 10000,
    DECADE_CLICK: {
        row: 1,
        column: 1
    },
    MONTH_CLICK: {
        row: 1,
        column: 1
    },
    DAY_CLICKS: [{
        row: 1,
        column: 1
    },
    {
        row: 1,
        column: 1
    },
    {
        row: 1,
        column: 1
    },
    {
        row: 1,
        column: 1
    }],
    STATES: [{
        name: "effects off",
        enableShading: false,
        enableTransitions: true,
        enableTooltips: false,
        enableFonts: true,
        enableBackground: false,
        enableGridAnimations: false,
        enableArt: true,
        enableVideo: false,
        excludeItemsWithoutArt: true,
        enableGridScaling: false
    },
    {
        name: "grid animations",
        enableShading: false,
        enableTransitions: true,
        enableTooltips: false,
        enableFonts: true,
        enableBackground: false,
        enableGridAnimations: true,
        enableArt: true,
        enableVideo: false,
        excludeItemsWithoutArt: true,
        enableGridScaling: true
    },
    {
        name: "background effects",
        enableShading: false,
        enableTransitions: true,
        enableTooltips: false,
        enableFonts: true,
        enableBackground: true,
        enableGridAnimations: false,
        enableArt: true,
        enableVideo: false,
        excludeItemsWithoutArt: true,
        enableGridScaling: true
    },
    {
        name: "video",
        enableShading: false,
        enableTransitions: true,
        enableTooltips: false,
        enableFonts: true,
        enableBackground: false,
        enableGridAnimations: false,
        enableArt: true,
        enableVideo: true,
        excludeItemsWithoutArt: true,
        enableGridScaling: true
    },
    {
        name: "all effects",
        enableShading: true,
        enableTransitions: true,
        enableTooltips: false,
        enableFonts: true,
        enableBackground: true,
        enableGridAnimations: true,
        enableArt: true,
        enableVideo: true,
        excludeItemsWithoutArt: true,
        enableGridScaling: true
    }],
    DATA_FILES: ["2005_01", "2005_01_09", "2005_01_10", "2005_01_11", "2005_01_12", "2005_01_13"],
    IMAGE_FILES: ["220/100", "220/1000", "220/10008", "220/10018", "220/10026", "220/10044", "220/10246", "220/10280", "220/1032", "220/1034", "220/1036", "220/10380", "220/10396", "220/10410", "220/10424", "220/10472", "220/10496", "220/1054", "220/10542", "220/10590", "220/10644", "220/108", "220/10830", "220/10834", "220/10840", "220/10852", "220/10854", "220/1088", "220/10924", "220/10974", "220/11070", "220/11088", "220/11142", "220/11156", "220/11176", "220/112", "220/1120", "220/11228", "220/1126", "220/11264", "220/11266", "220/1128", "220/11298", "220/11380", "220/11422", "220/11424", "220/11442", "220/11496", "220/11526", "220/11536", "220/11646", "220/11670", "220/11786", "220/1184", "220/11846", "220/1198", "220/12036", "220/12114", "220/1214", "220/12202", "220/12210", "220/1222", "220/12308", "220/12340", "220/124", "220/12442", "220/12500", "220/1266", "220/12666", "220/1268", "220/12696", "220/1270", "220/12700", "220/12732", "220/1280", "220/12824", "220/12872", "220/13008", "220/13024", "220/13044", "220/1318", "220/132", "220/13216", "220/13238", "220/1332", "220/13322", "220/13418", "220/1352", "220/13532", "220/13576", "220/13650", "220/1374", "220/13748", "220/13770", "220/13884", "220/13896", "220/13898", "220/13904", "220/1392", "220/1398", "220/14", "220/1400", "220/1410", "220/1414", "220/1426", "220/14328", "220/14334", "220/14346", "220/1440", "220/14548", "220/14582", "220/14628", "220/14638", "220/14666", "220/14774", "220/14874", "220/14978", "220/14988", "220/15072", "220/1508", "220/15134", "220/1522", "220/15314", "220/15414", "220/15420", "220/15530", "220/1556", "220/15574", "220/15680", "220/15740", "220/15762", "220/15766", "220/15904", "220/1596", "220/15992", "220/160", "220/16120", "220/1614", "220/162", "220/1620", "220/16228", "220/16280", "220/16292", "220/16384", "220/16390", "220/16450", "220/1652", "220/166", "220/1682", "220/16874", "220/17110", "220/17116", "220/17138", "220/17176", "220/1720", "220/17214", "220/17330", "220/1734", "220/17378", "220/17388", "220/17406", "220/17408", "220/1742", "220/17424", "220/17426", "220/17498", "220/1754", "220/1756", "220/17590", "220/17612", "220/17768", "220/18190", "220/182", "220/18228", "220/18266", "220/18308", "220/18402", "220/18446", "220/18516", "220/18538", "220/18688", "220/18716", "220/18782", "220/18816", "220/18820", "220/18856", "220/1886", "220/18862", "220/18910", "220/19096", "220/1922", "220/19272", "220/19434", "220/19502", "220/19600", "220/1962", "220/19640", "220/19660", "220/1976", "220/19804", "220/1984", "220/19906", "220/19996", "220/2008", "220/20098", "220/20266", "220/20336", "220/2040", "220/20550", "220/2060", "220/2062", "220/2070", "220/20712", "220/20718", "220/20732", "220/20878", "220/2106", "220/21096", "220/21196", "220/21208", "220/21252", "220/2132", "220/21322", "220/2136", "220/2138", "220/2140", "220/21502", "220/21614", "220/21692", "220/2184", "220/2202", "220/2210", "220/222", "220/22212", "220/2222", "220/2236", "220/224", "220/2252", "220/22552", "220/22660", "220/2270", "220/2284", "220/22898", "220/23076", "220/23192", "220/23214", "220/2330", "220/23338", "220/23582", "220/23926", "220/23942", "220/23950", "220/23960", "220/23984", "220/2400", "220/2404", "220/24064", "220/24070", "220/24084", "220/24184", "220/24548", "220/24600", "220/2466", "220/24684", "220/24738", "220/24748", "220/2482", "220/2492", "220/24920", "220/24938", "220/25118", "220/25210", "220/25212", "220/25232", "220/25258", "220/2528", "220/25392", "220/2546", "220/25518", "220/2570", "220/260", "220/2604", "220/26120", "220/26204", "220/2634", "220/2636", "220/26416", "220/26490", "220/26576", "220/266", "220/2678", "220/26816", "220/26818", "220/26926", "220/27046", "220/27086", "220/2712", "220/274", "220/27612", "220/2774", "220/28152", "220/28346", "220/28564", "220/28600", "220/28774", "220/288", "220/2884", "220/2892", "220/28920", "220/29004", "220/29032", "220/29112", "220/29120", "220/29186", "220/2936", "220/2956", "220/2958", "220/2960", "220/2976", "220/2982", "220/3", "220/30120", "220/30302", "220/30304", "220/30354", "220/30422", "220/30604", "220/30646", "220/30664", "220/3076", "220/308", "220/3082", "220/3084", "220/30866", "220/3094", "220/3106", "220/3108", "220/31238", "220/3124", "220/3140", "220/3152", "220/316", "220/3168", "220/31810", "220/32028", "220/32050", "220/3216", "220/32358", "220/3238", "220/32414", "220/32512", "220/32558", "220/3276", "220/3304", "220/3310", "220/33362", "220/3354", "220/3366", "220/33716", "220/3382", "220/3386", "220/3402", "220/34196", "220/3422", "220/3432", "220/3434", "220/34410", "220/34424", "220/35164", "220/3522", "220/35220", "220/35290", "220/3536", "220/3538", "220/354", "220/35490", "220/3552", "220/3558", "220/35638", "220/35876", "220/3588", "220/35964", "220/3602", "220/3622", "220/36420", "220/36434", "220/366", "220/3732", "220/37380", "220/374", "220/3748", "220/37564", "220/3790", "220/37930", "220/3796", "220/38260", "220/38326", "220/38546", "220/3864", "220/38960", "220/392", "220/39254", "220/39384", "220/39536", "220/39624", "220/39662", "220/3988", "220/3994", "220/39960", "220/40254", "220/40274", "220/40276", "220/40586", "220/40606", "220/40608", "220/40662", "220/40666", "220/40764", "220/408", "220/4090", "220/40920", "220/4094", "220/4120", "220/4122", "220/4132", "220/4162", "220/4166", "220/41954", "220/41992", "220/4200", "220/4202", "220/42028", "220/42096", "220/42136", "220/4220", "220/42386", "220/42408", "220/42462", "220/42504", "220/42530", "220/42590", "220/42592", "220/42594", "220/42596", "220/42598", "220/42600", "220/42602", "220/42604", "220/42606", "220/42608", "220/42610", "220/42612", "220/42614", "220/42616", "220/42618", "220/42620", "220/42622", "220/42624", "220/42626", "220/42628", "220/42630", "220/42632", "220/42634", "220/42636", "220/42638", "220/42654", "220/4270", "220/4406", "220/4410", "220/4412", "220/4420", "220/4446", "220/4492", "220/4496", "220/452", "220/4526", "220/4534", "220/458", "220/4596", "220/4626", "220/466", "220/4674", "220/468", "220/4746", "220/4804", "220/4830", "220/4840", "220/4886", "220/4894", "220/4910", "220/4964", "220/4972", "220/5030", "220/504", "220/5042", "220/5088", "220/5094", "220/5186", "220/5194", "220/5218", "220/5220", "220/5262", "220/528", "220/5364", "220/5406", "220/544", "220/5454", "220/5548", "220/5566", "220/5568", "220/558", "220/5646", "220/5696", "220/5748", "220/58", "220/5802", "220/5862", "220/5884", "220/5916", "220/5926", "220/5946", "220/5972", "220/6048", "220/6078", "220/608", "220/6108", "220/6138", "220/6142", "220/6148", "220/616", "220/6168", "220/6172", "220/622", "220/6298", "220/6306", "220/6332", "220/638", "220/64", "220/6442", "220/6444", "220/6448", "220/6452", "220/654", "220/6558", "220/6698", "220/6734", "220/6772", "220/6780", "220/6798", "220/6802", "220/6886", "220/694", "220/6962", "220/6998", "220/7", "220/7034", "220/7042", "220/7078", "220/7096", "220/7116", "220/7128", "220/7166", "220/7180", "220/7284", "220/7298", "220/7336", "220/7344", "220/7382", "220/7408", "220/7410", "220/7492", "220/7538", "220/7572", "220/7576", "220/7634", "220/766", "220/7688", "220/7702", "220/7730", "220/776", "220/7892", "220/7908", "220/7928", "220/7932", "220/7938", "220/7950", "220/7958", "220/7984", "220/8152", "220/8158", "220/8260", "220/8306", "220/8418", "220/8498", "220/850", "220/8592", "220/8748", "220/878", "220/8808", "220/8844", "220/886", "220/892", "220/8968", "220/9", "220/90", "220/900", "220/9022", "220/9074", "220/9092", "220/9108", "220/914", "220/9154", "220/9156", "220/9194", "220/9262", "220/9282", "220/9292", "220/9372", "220/9478", "220/9616", "220/9674", "220/9758", "220/9772", "220/9784", "220/9852", "220/9858", "220/9950", "300/17768", "300/21196", "300/23984", "300/246", "300/26490", "300/35964", "300/4090", "300/5646"]
});
var WebVizBench = RL.App.extend({
    _monthPlays: null,
    _playGrid: null,
    _nextPlay: null,
    _prevPlay: null,
    _lastColumns: 0,
    _rangeMarkerStart: null,
    _rangeMarkerEnd: null,
    _lateralTransition: null,
    _zoomTransition: null,
    _playDetailTransition: null,
    _gridTooltip: null,
    _benchmark: null,
    _lastTransitionActive: false,
    constructor: function (a) {
        this.base(a);
        $(w).resize($.proxy(this._updateSize, this));
        var b = new Controls.GridBackground($("#gridBackground"));
        this._children.push(b);
        this._prevPlay = new Controls.NextPlay($("#prevPlay"));
        this._nextPlay = new Controls.NextPlay($("#nextPlay"));
        this._children.push(this._prevPlay);
        this._children.push(this._nextPlay);
        this._rangeMarkerStart = new Controls.RangeMarker($("#rangeMarkerStart"), "start");
        this._rangeMarkerEnd = new Controls.RangeMarker($("#rangeMarkerEnd"), "end");
        this._children.push(this._rangeMarkerStart);
        this._children.push(this._rangeMarkerEnd);
        this._children.push(new Controls.BreadCrumbs($("#breadCrumbs")));
        this._children.push(new Controls.DisplayOptions($("#displayOptions")));
        this._children.push(new Controls.PlayDetails($("#playDetail")));
        this._children.push(new Controls.SortModes($("#sortModes")));
        this._children.push(new Controls.Video($("#videoContainer")));
        this._children.push(new Controls.BenchmarkDebug($("#benchmarkDebug")));
        this._lateralTransition = new Transitions.LateralTransition(this);
        this._children.push(this._lateralTransition);
        this._zoomTransition = new Transitions.ZoomTransition(this);
        this._children.push(this._zoomTransition);
        this._playDetailTransition = new Transitions.PlayDetailTransition(this);
        this._children.push(this._playDetailTransition);
        this._children.push(new Transitions.BenchmarkTransition(this));
        this._gridTooltip = new Controls.GridTooltip($("#gridTooltip"));
        this._children.push(this._gridTooltip);
        this._benchmark = new Controls.Benchmark();
        this._children.push(this._benchmark);
        $("#benchmarkCover").hide();
        if (window.location.search.match("skipintro")) {
            s.isDialogOpen = false;
            $("#modalBackground").hide()
        } else {
            $("#intro").show();
            this._updateSize();
            $("#introBtn").click($.proxy(function () {
                $("#intro").animate({
                    opacity: 0
                },
                300, "easeinout");
                $("#modalBackground").animate({
                    opacity: 0
                },
                300, "easeinout", function () {
                    s.isDialogOpen = false;
                    $("#modalBackground").hide();
                    $("#intro").hide()
                })
            },
            this))
        }
        $(".shareIcon").click(function () {
            var e = $(this);
            var f = "Get your HTML5 benchmark at http://WebVizBench.com/";
            if (s.isDialogOpen) {
                f = s.benchmarkMessage
            }
            var c = "";
            if (e.hasClass("facebook")) {
                c = "http://www.facebook.com/share.php?u=http://WebVizBench.com/&t=" + f
            } else {
                if (e.hasClass("twitter")) {
                    c = "http://twitter.com/home?status=" + f
                } else {
                    if (e.hasClass("email")) {
                        c = "mailto:?body=" + f
                    }
                }
            }
            window.open(c, "_blank")
        });
        $("#modalBackground").click(function () {
            if (s.selectedPlay && !s.isBenchmarkRunning) {
                s.selectedPlay = null
            }
        });
        if (window.location.search.match("fromdj")) {
            $("#rootContainer").css({
                opacity: 0
            })
        }
        $("#djMode").click(function () {
            $("#rootContainer").animate({
                opacity: 0
            },
            400, "easeout", function () {
                var e = window.location.pathname.toLowerCase().match("debug") ? "Debug.htm" : "Default.htm";
                var c = window.location.search.toLowerCase().match("nochrome") ? "nochrome" : "";
                window.location = "Djs/" + e + "?skipdetect,fromdate," + c
            })
        });
        if (window.location.search.match("nochrome")) {
            $("#header").hide();
            $("#smallFps").show();
            $("#fullFooter").hide();
            $("#minFooter").show();
            $("#bigLogo").show()
        }
        this._loadMonths();
        this._updateSize()
    },
    _updateSize: function () {
        var a = $("#rootContainer");
        WebVizBench.documentWidth = a.width();
        WebVizBench.documentHeight = a.height();
        WebVizBench.documentHeight++;
        var b = $("div.centerVertically").each(function () {
            var c = $(this);
            c.css({
                top: (c.parent().height() - c.outerHeight()) / 2,
                position: "absolute"
            })
        });
        b = $("div.centerHorizontally").each(function () {
            var c = $(this);
            c.css({
                left: (c.parent().width() - c.outerWidth()) / 2,
                position: "absolute"
            })
        });
        if (this._playGrid) {
            this._playGrid.currentGlobalTranslate = this._rangeMarkerStart._currentPosition = this._rangeMarkerEnd._currentPosition = null;
            this._playGrid.update()
        }
        this._positionPrevNext(false);
        $(".windowSize").text(WebVizBench.documentWidth + " x " + WebVizBench.documentHeight)
    },
    update: function () {
        this._updateColumns();
        if (WebVizBench.isTransitionActive != this._lastTransitionActive) {
            this._lastTransitionActive = WebVizBench.isTransitionActive;
            if (WebVizBench.isTransitionActive) {
                $("#transitionCover").show()
            } else {
                $("#transitionCover").hide()
            }
        }
        if (s.isBenchmarkRunning != this._lastIsBenchmarkRunning) {
            this._lastIsBenchmarkRunning = s.isBenchmarkRunning;
            if (s.isBenchmarkRunning) {
                $("#benchmarkCover").show()
            } else {
                $("#benchmarkCover").hide()
            }
        }
        var a = Math.floor(RL.App.fps);
        if (a != this._lastFps) {
            $(".fps").text(a);
            this._lastFps = a
        }
        this.base()
    },
    _updateColumns: function () {
        if (!this._playGrid || !this._playGrid.plays[0]) {
            return
        }
        var a = this._playGrid.plays[0].length;
        if (a == this._lastColumns) {
            return
        }
        this._positionPrevNext(this._lastColumns != 0);
        this._lastColumns = a
    },
    draw: function () {
        this.base()
    },
    _loadMonths: function () {
        var a = 0;
        jsonCallback = $.proxy(function (c) {
            $(d.body).removeClass("wait");
            var b = s.deserializeDate(c.FirstPlay);
            var e = s.deserializeDate(c.LastPlay);
            this._monthPlays = $([]);
            jsonCallback = $.proxy(function (g) {
                this._updateSize();
                $(d.body).removeClass("wait");
                var h = s.parsePlayGroup(g, s.sortMode);
                h.each($.proxy(function (i, j) {
                    this._monthPlays.push(j)
                },
                this));
                a--;
                if (a > 0) {
                    return
                }
                this._monthPlays.sort(function (i, j) {
                    return i.airTime - j.airTime
                });
                this._setupGrid(this._monthPlays);
                if (document.location.search.match("run")) {
                    $("#runBenchmarkBtn").click()
                }
                if (window.location.search.match("fromdj")) {
                    $("#rootContainer").animate({
                        opacity: 1
                    },
                    400, "easeout")
                }
            },
            this);
            for (var f = b.getFullYear(); f <= e.getFullYear(); f++) {
                a++;
                WebVizBench.ajax(WebVizBench.buildDataUrl("/plays/" + f + ".json", s.isBenchmarkRunning))
            }
        },
        this);
        WebVizBench.ajax(WebVizBench.buildDataUrl("/data/config.json", s.isBenchmarkRunning))
    },
    _setupGrid: function (h) {
        this.removeChild(this._playGrid);
        $("#gridContainer").empty();
        s.currentPlayGroups[s.zoomLevel] = h;
        var m = null;
        var j = null;
        var a = null;
        var k = null;
        var e = null;
        var i = null;
        if (s.zoomLevel == 0) {
            m = "columns";
            j = WebVizBench.DECADE_COLUMNS;
            a = WebVizBench.DECADE_SIZE;
            k = WebVizBench.DECADE_MARGIN;
            e = WebVizBench.DECADE_FISHEYE_SCALE;
            i = WebVizBench.DECADE_FISHEYE_RANGE
        } else {
            if (s.zoomLevel == 1) {
                m = "columns";
                j = WebVizBench.MONTH_COLUMNS;
                a = WebVizBench.MONTH_SIZE;
                k = WebVizBench.MONTH_MARGIN;
                e = WebVizBench.MONTH_FISHEYE_SCALE;
                i = WebVizBench.MONTH_FISHEYE_RANGE
            } else {
                m = "rows";
                j = WebVizBench.DAY_ROWS;
                a = WebVizBench.DAY_SIZE;
                k = WebVizBench.DAY_MARGIN;
                e = WebVizBench.DAY_FISHEYE_SCALE;
                i = WebVizBench.DAY_FISHEYE_RANGE
            }
        }
        var f = 1024;
        var g = 2560;
        var c = Math.min(g, Math.max(1024, WebVizBench.documentWidth));
        var l = RL.Utils.map(c, 1024, g, 1, g / 1024);
        if (s.isBenchmarkRunning) {
            var b = a * (m == "rows" ? j : Math.ceil(h.length / j));
            l = WebVizBench.documentHeight / b
        }
        a *= l;
        this._playGrid = new Controls.PlayGrid($("#gridContainer"), h, m, j, a, k, e, i);
        this._children.push(this._playGrid);
        this._rangeMarkerStart.grid = this._rangeMarkerEnd.grid = this._gridTooltip.grid = this._playGrid
    },
    _setupPrevNext: function () {
        if (s.zoomLevel == 0) {
            this._prevPlay.setPlay(null);
            this._nextPlay.setPlay(null);
            return
        }
        var a = s.currentPlayGroups[s.zoomLevel - 1];
        var b = [];
        if (s.sortMode == s.SORT_TIME) {
            b = a
        } else {
            a.each(function (c, e) {
                b.push(e)
            });
            b.sort(function (c, e) {
                return c.airTime - e.airTime
            })
        }
        $(b).each($.proxy(function (c, e) {
            if (e == s.selectedPlays[s.zoomLevel]) {
                this._prevPlay.setPlay(c == 0 ? null : b[c - 1]);
                this._nextPlay.setPlay(c == b.length - 1 ? null : b[c + 1]);
                return false
            }
        },
        this))
    },
    _positionPrevNext: function (b) {
        if (!this._playGrid || !this._playGrid.plays[0]) {
            return
        }
        b = b && s.enableTransitions;
        var c = this._playGrid.globalTranslate.x - this._prevPlay.element.width() - Controls.NextPlay.MARGIN;
        var a = this._playGrid.globalTranslate.x + (this._playGrid.plays[0].length * (this._playGrid.size + this._playGrid.margin)) + Controls.NextPlay.MARGIN;
        if (b) {
            this._prevPlay.element.animate({
                left: c
            },
            200, "easeinout");
            this._nextPlay.element.animate({
                left: a
            },
            200, "easeinout")
        } else {
            this._prevPlay.element.css({
                left: c
            });
            this._nextPlay.element.css({
                left: a
            })
        }
    }
},
{
    ajax: function (a) {
        $(d.body).addClass("wait");
        jsonLastUrl = a;
        $.ajax({
            url: a,
            jsonpCallback: "jsonCallback",
            dataType: "jsonp"
        })
    },
    BLOB_ROOTS: ["http://az6442.vo.msecnd.net", "http://blob.webvizbench.com", "http://kexpstimulant.blob.core.windows.net"],
    VIDEO_URL: "http://az6442.vo.msecnd.net/media/Video.mp4",
    DECADE_COLUMNS: 20,
    DECADE_SIZE: 44,
    DECADE_MARGIN: 4,
    DECADE_FISHEYE_SCALE: 2,
    DECADE_FISHEYE_RANGE: 2,
    MONTH_COLUMNS: 7,
    MONTH_SIZE: 50,
    MONTH_MARGIN: 9,
    MONTH_FISHEYE_SCALE: 2,
    MONTH_FISHEYE_RANGE: 1,
    DAY_ROWS: 11,
    DAY_SIZE: 20,
    DAY_MARGIN: 5,
    DAY_FISHEYE_SCALE: 4.3,
    DAY_FISHEYE_RANGE: 4,
    isTransitionActive: false,
    lastBlobRoot: 0,
    buildImageUrl: function (a, b, c) {
        if (a > 0) {
            if (c) {
                WebVizBench.lastBlobRoot = 0
            } else {
                WebVizBench.lastBlobRoot++;
                WebVizBench.lastBlobRoot %= WebVizBench.BLOB_ROOTS.length
            }
            return WebVizBench.BLOB_ROOTS[WebVizBench.lastBlobRoot] + "/albumart" + b + "/" + a + ".jpg"
        } else {
            return "Images/Missing/missingimage" + Math.abs(a) + ".png"
        }
    },
    buildDataUrl: function (a, b) {
        if (b) {
            WebVizBench.lastBlobRoot = 0
        } else {
            WebVizBench.lastBlobRoot++;
            WebVizBench.lastBlobRoot %= WebVizBench.BLOB_ROOTS.length
        }
        return WebVizBench.BLOB_ROOTS[WebVizBench.lastBlobRoot] + a
    },
    documentWidth: 0,
    documentHeight: 0
});