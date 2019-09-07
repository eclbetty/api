! function e(n, t, i) {
    function r(a, c) {
        if (!t[a]) {
            if (!n[a]) {
                var s = "function" == typeof require && require;
                if (!c && s) return s(a, !0);
                if (o) return o(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var f = t[a] = {
                exports: {}
            };
            n[a][0].call(f.exports, function(e) {
                var t = n[a][1][e];
                return r(t ? t : e)
            }, f, f.exports, e, n, t, i)
        }
        return t[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
    return r
}({
    1: [function(e, n, t) {
        "use strict";
        n.exports = function(e, n) {
            e(n).eq(0).addClass("expend"), e(n).eq(0).find(".article-content").css("display", "block"), e(n).on("click", function() {
                var n = e(this).closest(".article"),
                    t = n.find(".article-content"),
                    i = e(this).closest(".article").prop("class");
                return i.indexOf("expend") !== -1 ? (t.slideUp(150), void n.removeClass("expend")) : (t.slideDown(250), void n.addClass("expend"))
            })
        }
    }, {}],
    2: [function(e, n, t) {
        "use strict";
        n.exports = function(e, n, t, i) {
            var r = e(n),
                o = e(n).height(),
                a = e(t).height(),
                c = !1,
                s = 0;
            s = -o + a, r.css("top", s), e(i).on("click", function() {
                e(this).find(".hamburger-icon").toggleClass("open"), c === !1 && r.animate({
                    top: a
                }, 300), c === !0 && r.animate({
                    top: s
                }, 300), c = !c
            })
        }
    }, {}],
    3: [function(e, n, t) {
        "use strict";
        var i = e("animate_menu"),
            r = e("animate_article");
        $(function() {
            i($, "#min-nav", "#main-nav-wrap", "#btn-hamburger"), r($, ".article")
        })
    }, {
        animate_article: 1,
        animate_menu: 2
    }]
}, {}, [3]);