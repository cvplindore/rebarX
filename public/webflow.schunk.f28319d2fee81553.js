"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  ["90"],
  {
    84345: function (e, t, i) {
      var a = i(43949),
        r = i(65134);
      let n = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        s =
          'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      a.define(
        "slider",
        (e.exports = function (e, t) {
          var i,
            o,
            d,
            l = {},
            f = e.tram,
            u = e(document),
            c = a.env(),
            h = ".w-slider",
            v = "w-slider-force-show",
            m = r.triggers,
            p = !1;
          function g() {
            if (!(i = u.find(h)).length) return;
            if ((i.each(b), !d))
              x(),
                (function () {
                  a.resize.on(w), a.redraw.on(l.redraw);
                })();
          }
          function x() {
            a.resize.off(w), a.redraw.off(l.redraw);
          }
          (l.ready = function () {
            (o = a.env("design")), g();
          }),
            (l.design = function () {
              (o = !0), setTimeout(g, 1e3);
            }),
            (l.preview = function () {
              (o = !1), g();
            }),
            (l.redraw = function () {
              (p = !0), g(), (p = !1);
            }),
            (l.destroy = x);
          function w() {
            i.filter(":visible").each(D);
          }
          function b(t, i) {
            var a = e(i),
              r = e.data(i, h);
            !r &&
              (r = e.data(i, h, {
                index: 0,
                depth: 1,
                hasFocus: { keyboard: !1, mouse: !1 },
                el: a,
                config: {},
              })),
              (r.mask = a.children(".w-slider-mask")),
              (r.left = a.children(".w-slider-arrow-left")),
              (r.right = a.children(".w-slider-arrow-right")),
              (r.nav = a.children(".w-slider-nav")),
              (r.slides = r.mask.children(".w-slide")),
              r.slides.each(m.reset),
              p && (r.maskWidth = 0),
              void 0 === a.attr("role") && a.attr("role", "region"),
              void 0 === a.attr("aria-label") &&
                a.attr("aria-label", "carousel");
            var n = r.mask.attr("id");
            if (
              (!n && ((n = "w-slider-mask-" + t), r.mask.attr("id", n)),
              !o &&
                !r.ariaLiveLabel &&
                (r.ariaLiveLabel = e(
                  '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />'
                ).appendTo(r.mask)),
              r.left.attr("role", "button"),
              r.left.attr("tabindex", "0"),
              r.left.attr("aria-controls", n),
              void 0 === r.left.attr("aria-label") &&
                r.left.attr("aria-label", "previous slide"),
              r.right.attr("role", "button"),
              r.right.attr("tabindex", "0"),
              r.right.attr("aria-controls", n),
              void 0 === r.right.attr("aria-label") &&
                r.right.attr("aria-label", "next slide"),
              !f.support.transform)
            ) {
              r.left.hide(), r.right.hide(), r.nav.hide(), (d = !0);
              return;
            }
            r.el.off(h),
              r.left.off(h),
              r.right.off(h),
              r.nav.off(h),
              y(r),
              o
                ? (r.el.on("setting" + h, O(r)), E(r), (r.hasTimer = !1))
                : (r.el.on("swipe" + h, O(r)),
                  r.left.on("click" + h, W(r)),
                  r.right.on("click" + h, A(r)),
                  r.left.on("keydown" + h, T(r, W)),
                  r.right.on("keydown" + h, T(r, A)),
                  r.nav.on("keydown" + h, "> div", O(r)),
                  r.config.autoplay &&
                    !r.hasTimer &&
                    ((r.hasTimer = !0), (r.timerCount = 1), C(r)),
                  r.el.on("mouseenter" + h, R(r, !0, "mouse")),
                  r.el.on("focusin" + h, R(r, !0, "keyboard")),
                  r.el.on("mouseleave" + h, R(r, !1, "mouse")),
                  r.el.on("focusout" + h, R(r, !1, "keyboard"))),
              r.nav.on("click" + h, "> div", O(r)),
              !c &&
                r.mask
                  .contents()
                  .filter(function () {
                    return 3 === this.nodeType;
                  })
                  .remove();
            var s = a.filter(":hidden");
            s.addClass(v);
            var l = a.parents(":hidden");
            l.addClass(v), !p && D(t, i), s.removeClass(v), l.removeClass(v);
          }
          function y(e) {
            var t = {};
            (t.crossOver = 0),
              (t.animation = e.el.attr("data-animation") || "slide"),
              "outin" === t.animation &&
                ((t.animation = "cross"), (t.crossOver = 0.5)),
              (t.easing = e.el.attr("data-easing") || "ease");
            var i = e.el.attr("data-duration");
            if (
              ((t.duration = null != i ? parseInt(i, 10) : 500),
              k(e.el.attr("data-infinite")) && (t.infinite = !0),
              k(e.el.attr("data-disable-swipe")) && (t.disableSwipe = !0),
              k(e.el.attr("data-hide-arrows"))
                ? (t.hideArrows = !0)
                : e.config.hideArrows && (e.left.show(), e.right.show()),
              k(e.el.attr("data-autoplay")))
            ) {
              (t.autoplay = !0),
                (t.delay = parseInt(e.el.attr("data-delay"), 10) || 2e3),
                (t.timerMax = parseInt(e.el.attr("data-autoplay-limit"), 10));
              var a = "mousedown" + h + " touchstart" + h;
              !o &&
                e.el.off(a).one(a, function () {
                  E(e);
                });
            }
            var r = e.right.width();
            (t.edge = r ? r + 40 : 100), (e.config = t);
          }
          function k(e) {
            return "1" === e || "true" === e;
          }
          function R(t, i, a) {
            return function (r) {
              if (i) t.hasFocus[a] = i;
              else {
                if (e.contains(t.el.get(0), r.relatedTarget)) return;
                if (
                  ((t.hasFocus[a] = i),
                  (t.hasFocus.mouse && "keyboard" === a) ||
                    (t.hasFocus.keyboard && "mouse" === a))
                )
                  return;
              }
              i
                ? (t.ariaLiveLabel.attr("aria-live", "polite"),
                  t.hasTimer && E(t))
                : (t.ariaLiveLabel.attr("aria-live", "off"),
                  t.hasTimer && C(t));
            };
          }
          function T(e, t) {
            return function (i) {
              switch (i.keyCode) {
                case n.SPACE:
                case n.ENTER:
                  return t(e)(), i.preventDefault(), i.stopPropagation();
              }
            };
          }
          function W(e) {
            return function () {
              L(e, { index: e.index - 1, vector: -1 });
            };
          }
          function A(e) {
            return function () {
              L(e, { index: e.index + 1, vector: 1 });
            };
          }
          function C(e) {
            E(e);
            var t = e.config,
              i = t.timerMax;
            if (!(i && e.timerCount++ > i))
              e.timerId = window.setTimeout(function () {
                if (null != e.timerId && !o) A(e)(), C(e);
              }, t.delay);
          }
          function E(e) {
            window.clearTimeout(e.timerId), (e.timerId = null);
          }
          function O(i) {
            return function (r, s) {
              s = s || {};
              var d,
                l,
                f,
                u = i.config;
              if (o && "setting" === r.type) {
                if ("prev" === s.select) return W(i)();
                if ("next" === s.select) return A(i)();
                if ((y(i), M(i), null == s.select)) return;
                return (
                  (d = i),
                  (l = s.select),
                  (f = null),
                  l === d.slides.length && (g(), M(d)),
                  t.each(d.anchors, function (t, i) {
                    e(t.els).each(function (t, a) {
                      e(a).index() === l && (f = i);
                    });
                  }),
                  null != f && L(d, { index: f, immediate: !0 }),
                  void 0
                );
              }
              if ("swipe" === r.type)
                return u.disableSwipe || a.env("editor")
                  ? void 0
                  : "left" === s.direction
                  ? A(i)()
                  : "right" === s.direction
                  ? W(i)()
                  : void 0;
              if (i.nav.has(r.target).length) {
                var c = e(r.target).index();
                if (
                  ("click" === r.type && L(i, { index: c }),
                  "keydown" === r.type)
                )
                  switch (r.keyCode) {
                    case n.ENTER:
                    case n.SPACE:
                      L(i, { index: c }), r.preventDefault();
                      break;
                    case n.ARROW_LEFT:
                    case n.ARROW_UP:
                      I(i.nav, Math.max(c - 1, 0)), r.preventDefault();
                      break;
                    case n.ARROW_RIGHT:
                    case n.ARROW_DOWN:
                      I(i.nav, Math.min(c + 1, i.pages)), r.preventDefault();
                      break;
                    case n.HOME:
                      I(i.nav, 0), r.preventDefault();
                      break;
                    case n.END:
                      I(i.nav, i.pages), r.preventDefault();
                      break;
                    default:
                      return;
                  }
              }
            };
          }
          function I(e, t) {
            var i = e.children().eq(t).focus();
            e.children().not(i);
          }
          function L(t, i) {
            i = i || {};
            var a = t.config,
              r = t.anchors;
            t.previous = t.index;
            var n = i.index,
              d = {};
            n < 0
              ? ((n = r.length - 1),
                a.infinite &&
                  ((d.x = -t.endX), (d.from = 0), (d.to = r[0].width)))
              : n >= r.length &&
                ((n = 0),
                a.infinite &&
                  ((d.x = r[r.length - 1].width),
                  (d.from = -r[r.length - 1].x),
                  (d.to = d.from - d.x))),
              (t.index = n);
            var l = t.nav
              .children()
              .eq(n)
              .addClass("w-active")
              .attr("aria-pressed", "true")
              .attr("tabindex", "0");
            t.nav
              .children()
              .not(l)
              .removeClass("w-active")
              .attr("aria-pressed", "false")
              .attr("tabindex", "-1"),
              a.hideArrows &&
                (t.index === r.length - 1 ? t.right.hide() : t.right.show(),
                0 === t.index ? t.left.hide() : t.left.show());
            var u = t.offsetX || 0,
              c = (t.offsetX = -r[t.index].x),
              h = { x: c, opacity: 1, visibility: "" },
              v = e(r[t.index].els),
              g = e(r[t.previous] && r[t.previous].els),
              x = t.slides.not(v),
              w = a.animation,
              b = a.easing,
              y = Math.round(a.duration),
              k = i.vector || (t.index > t.previous ? 1 : -1),
              R = "opacity " + y + "ms " + b,
              T = "transform " + y + "ms " + b;
            if (
              (v.find(s).removeAttr("tabindex"),
              v.removeAttr("aria-hidden"),
              v.find("*").removeAttr("aria-hidden"),
              x.find(s).attr("tabindex", "-1"),
              x.attr("aria-hidden", "true"),
              x.find("*").attr("aria-hidden", "true"),
              !o && (v.each(m.intro), x.each(m.outro)),
              i.immediate && !p)
            ) {
              f(v).set(h), C();
              return;
            }
            if (t.index !== t.previous) {
              if (
                (!o && t.ariaLiveLabel.text(`Slide ${n + 1} of ${r.length}.`),
                "cross" === w)
              ) {
                var W = Math.round(y - y * a.crossOver),
                  A = Math.round(y - W);
                (R = "opacity " + W + "ms " + b),
                  f(g).set({ visibility: "" }).add(R).start({ opacity: 0 }),
                  f(v)
                    .set({
                      visibility: "",
                      x: c,
                      opacity: 0,
                      zIndex: t.depth++,
                    })
                    .add(R)
                    .wait(A)
                    .then({ opacity: 1 })
                    .then(C);
                return;
              }
              if ("fade" === w) {
                f(g).set({ visibility: "" }).stop(),
                  f(v)
                    .set({
                      visibility: "",
                      x: c,
                      opacity: 0,
                      zIndex: t.depth++,
                    })
                    .add(R)
                    .start({ opacity: 1 })
                    .then(C);
                return;
              }
              if ("over" === w) {
                (h = { x: t.endX }),
                  f(g).set({ visibility: "" }).stop(),
                  f(v)
                    .set({
                      visibility: "",
                      zIndex: t.depth++,
                      x: c + r[t.index].width * k,
                    })
                    .add(T)
                    .start({ x: c })
                    .then(C);
                return;
              }
              a.infinite && d.x
                ? (f(t.slides.not(g))
                    .set({ visibility: "", x: d.x })
                    .add(T)
                    .start({ x: c }),
                  f(g)
                    .set({ visibility: "", x: d.from })
                    .add(T)
                    .start({ x: d.to }),
                  (t.shifted = g))
                : (a.infinite &&
                    t.shifted &&
                    (f(t.shifted).set({ visibility: "", x: u }),
                    (t.shifted = null)),
                  f(t.slides).set({ visibility: "" }).add(T).start({ x: c }));
            }
            function C() {
              (v = e(r[t.index].els)),
                (x = t.slides.not(v)),
                "slide" !== w && (h.visibility = "hidden"),
                f(x).set(h);
            }
          }
          function D(t, i) {
            var a = e.data(i, h);
            if (!!a) {
              if (
                (function (e) {
                  var t = e.mask.width();
                  return e.maskWidth !== t && ((e.maskWidth = t), !0);
                })(a)
              )
                return M(a);
              o &&
                (function (t) {
                  var i = 0;
                  return (
                    t.slides.each(function (t, a) {
                      i += e(a).outerWidth(!0);
                    }),
                    t.slidesWidth !== i && ((t.slidesWidth = i), !0)
                  );
                })(a) &&
                M(a);
            }
          }
          function M(t) {
            var i = 1,
              a = 0,
              r = 0,
              n = 0,
              s = t.maskWidth,
              d = s - t.config.edge;
            d < 0 && (d = 0),
              (t.anchors = [{ els: [], x: 0, width: 0 }]),
              t.slides.each(function (o, l) {
                r - a > d &&
                  (i++,
                  (a += s),
                  (t.anchors[i - 1] = { els: [], x: r, width: 0 })),
                  (n = e(l).outerWidth(!0)),
                  (r += n),
                  (t.anchors[i - 1].width += n),
                  t.anchors[i - 1].els.push(l);
                var f = o + 1 + " of " + t.slides.length;
                e(l).attr("aria-label", f), e(l).attr("role", "group");
              }),
              (t.endX = r),
              o && (t.pages = null),
              t.nav.length &&
                t.pages !== i &&
                ((t.pages = i),
                (function (t) {
                  var i,
                    a = [],
                    r = t.el.attr("data-nav-spacing");
                  r && (r = parseFloat(r) + "px");
                  for (var n = 0, s = t.pages; n < s; n++)
                    (i = e('<div class="w-slider-dot" data-wf-ignore />'))
                      .attr("aria-label", "Show slide " + (n + 1) + " of " + s)
                      .attr("aria-pressed", "false")
                      .attr("role", "button")
                      .attr("tabindex", "-1"),
                      t.nav.hasClass("w-num") && i.text(n + 1),
                      null != r &&
                        i.css({ "margin-left": r, "margin-right": r }),
                      a.push(i);
                  t.nav.empty().append(a);
                })(t));
            var l = t.index;
            l >= i && (l = i - 1), L(t, { immediate: !0, index: l });
          }
          return l;
        })
      );
    },
  },
]);
