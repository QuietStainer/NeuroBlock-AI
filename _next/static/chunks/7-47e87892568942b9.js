(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7],
  {
    1997: function (e, t, i) {
      "use strict";
      var s = i(2265);
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
            }
            return e;
          }).apply(this, arguments);
      }
      function n(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(i), !0).forEach(function (t) {
                var s;
                (s = i[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = s);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : n(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      class a extends s.Component {
        constructor(e) {
          let t;
          super(e),
            (this.reCalculateColumnCount =
              this.reCalculateColumnCount.bind(this)),
            (this.reCalculateColumnCountDebounce =
              this.reCalculateColumnCountDebounce.bind(this)),
            (t =
              this.props.breakpointCols && this.props.breakpointCols.default
                ? this.props.breakpointCols.default
                : parseInt(this.props.breakpointCols) || 2),
            (this.state = { columnCount: t });
        }
        componentDidMount() {
          this.reCalculateColumnCount(),
            window &&
              window.addEventListener(
                "resize",
                this.reCalculateColumnCountDebounce
              );
        }
        componentDidUpdate() {
          this.reCalculateColumnCount();
        }
        componentWillUnmount() {
          window &&
            window.removeEventListener(
              "resize",
              this.reCalculateColumnCountDebounce
            );
        }
        reCalculateColumnCountDebounce() {
          if (!window || !window.requestAnimationFrame) {
            this.reCalculateColumnCount();
            return;
          }
          window.cancelAnimationFrame &&
            window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),
            (this._lastRecalculateAnimationFrame = window.requestAnimationFrame(
              () => {
                this.reCalculateColumnCount();
              }
            ));
        }
        reCalculateColumnCount() {
          let e = (window && window.innerWidth) || 1 / 0,
            t = this.props.breakpointCols;
          "object" != typeof t && (t = { default: parseInt(t) || 2 });
          let i = 1 / 0,
            s = t.default || 2;
          for (let r in t) {
            let n = parseInt(r);
            n > 0 && e <= n && n < i && ((i = n), (s = t[r]));
          }
          (s = Math.max(1, parseInt(s) || 1)),
            this.state.columnCount !== s && this.setState({ columnCount: s });
        }
        itemsInColumns() {
          let e = this.state.columnCount,
            t = Array(e),
            i = s.Children.toArray(this.props.children);
          for (let s = 0; s < i.length; s++) {
            let r = s % e;
            t[r] || (t[r] = []), t[r].push(i[s]);
          }
          return t;
        }
        renderColumns() {
          let {
              column: e,
              columnAttrs: t = {},
              columnClassName: i,
            } = this.props,
            n = this.itemsInColumns(),
            a = `${100 / n.length}%`,
            o = i;
          o &&
            "string" != typeof o &&
            (this.logDeprecated(
              'The property "columnClassName" requires a string'
            ),
            void 0 === o && (o = "my-masonry-grid_column"));
          let d = l(
            l(l({}, e), t),
            {},
            { style: l(l({}, t.style), {}, { width: a }), className: o }
          );
          return n.map((e, t) =>
            s.createElement("div", r({}, d, { key: t }), e)
          );
        }
        logDeprecated(e) {
          console.error("[Masonry]", e);
        }
        render() {
          let e = this.props,
            {
              children: t,
              breakpointCols: i,
              columnClassName: n,
              columnAttrs: l,
              column: a,
              className: o,
            } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var i,
                s,
                r = (function (e, t) {
                  if (null == e) return {};
                  var i,
                    s,
                    r = {},
                    n = Object.keys(e);
                  for (s = 0; s < n.length; s++)
                    (i = n[s]), t.indexOf(i) >= 0 || (r[i] = e[i]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                for (s = 0; s < n.length; s++)
                  (i = n[s]),
                    !(t.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, i) &&
                      (r[i] = e[i]);
              }
              return r;
            })(e, [
              "children",
              "breakpointCols",
              "columnClassName",
              "columnAttrs",
              "column",
              "className",
            ]),
            c = o;
          return (
            "string" != typeof o &&
              (this.logDeprecated('The property "className" requires a string'),
              void 0 === o && (c = "my-masonry-grid")),
            s.createElement(
              "div",
              r({}, d, { className: c }),
              this.renderColumns()
            )
          );
        }
      }
      (a.defaultProps = {
        breakpointCols: void 0,
        className: void 0,
        columnClassName: void 0,
        children: void 0,
        columnAttrs: void 0,
        column: void 0,
      }),
        (t.Z = a);
    },
    4885: function () {},
    3034: function () {},
    9805: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return c;
        },
      });
      var s = i(9047),
        r = i(6159),
        n = i(3153);
      function l(e, t) {
        [...t].reverse().forEach((i) => {
          let s = e.getVariant(i);
          s && (0, r.C)(e, s),
            e.variantChildren &&
              e.variantChildren.forEach((e) => {
                l(e, t);
              });
        });
      }
      function a() {
        let e = !1,
          t = new Set(),
          i = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(i, r) {
              (0, s.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let l = [];
              return (
                t.forEach((e) => {
                  l.push((0, n.d)(e, i, { transitionOverride: r }));
                }),
                Promise.all(l)
              );
            },
            set: (i) => (
              (0, s.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              t.forEach((e) => {
                Array.isArray(i)
                  ? l(e, i)
                  : "string" == typeof i
                  ? l(e, [i])
                  : (0, r.C)(e, i);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), i.stop();
              }
            ),
          };
        return i;
      }
      var o = i(458),
        d = i(9033);
      let c = function () {
        let e = (0, o.h)(a);
        return (0, d.L)(e.mount, []), e;
      };
    },
    3473: function (e, t, i) {
      "use strict";
      i.d(t, {
        YD: function () {
          return d;
        },
      });
      var s = i(2265),
        r = Object.defineProperty,
        n = new Map(),
        l = new WeakMap(),
        a = 0,
        o = void 0;
      function d() {
        var e;
        let {
            threshold: t,
            delay: i,
            trackVisibility: r,
            rootMargin: d,
            root: c,
            triggerOnce: u,
            skip: p,
            initialInView: h,
            fallbackInView: f,
            onChange: m,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [v, g] = s.useState(null),
          w = s.useRef(),
          [b, S] = s.useState({ inView: !!h, entry: void 0 });
        (w.current = m),
          s.useEffect(() => {
            let e;
            if (!p && v)
              return (
                (e = (function (e, t) {
                  let i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    s =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : o;
                  if (void 0 === window.IntersectionObserver && void 0 !== s) {
                    let r = e.getBoundingClientRect();
                    return (
                      t(s, {
                        isIntersecting: s,
                        target: e,
                        intersectionRatio:
                          "number" == typeof i.threshold ? i.threshold : 0,
                        time: 0,
                        boundingClientRect: r,
                        intersectionRect: r,
                        rootBounds: r,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: r,
                      observer: d,
                      elements: c,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var i;
                            return ""
                              .concat(t, "_")
                              .concat(
                                "root" === t
                                  ? (i = e.root)
                                    ? (l.has(i) ||
                                        ((a += 1), l.set(i, a.toString())),
                                      l.get(i))
                                    : "0"
                                  : e[t]
                              );
                          })
                          .toString(),
                        i = n.get(t);
                      if (!i) {
                        let s;
                        let r = new Map(),
                          l = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var i;
                              let n =
                                t.isIntersecting &&
                                s.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = n),
                                null == (i = r.get(t.target)) ||
                                  i.forEach((e) => {
                                    e(n, t);
                                  });
                            });
                          }, e);
                        (s =
                          l.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (i = { id: t, observer: l, elements: r }),
                          n.set(t, i);
                      }
                      return i;
                    })(i),
                    u = c.get(e) || [];
                  return (
                    c.has(e) || c.set(e, u),
                    u.push(t),
                    d.observe(e),
                    function () {
                      u.splice(u.indexOf(t), 1),
                        0 === u.length && (c.delete(e), d.unobserve(e)),
                        0 === c.size && (d.disconnect(), n.delete(r));
                    }
                  );
                })(
                  v,
                  (t, i) => {
                    S({ inView: t, entry: i }),
                      w.current && w.current(t, i),
                      i.isIntersecting && u && e && (e(), (e = void 0));
                  },
                  {
                    root: c,
                    rootMargin: d,
                    threshold: t,
                    trackVisibility: r,
                    delay: i,
                  },
                  f
                )),
                () => {
                  e && e();
                }
              );
          }, [Array.isArray(t) ? t.toString() : t, v, c, d, u, p, r, f, i]);
        let y = null == (e = b.entry) ? void 0 : e.target,
          T = s.useRef();
        v ||
          !y ||
          u ||
          p ||
          T.current === y ||
          ((T.current = y), S({ inView: !!h, entry: void 0 }));
        let E = [g, b.inView, b.entry];
        return (E.ref = E[0]), (E.inView = E[1]), (E.entry = E[2]), E;
      }
      s.Component;
    },
    6341: function (e, t, i) {
      "use strict";
      i.d(t, {
        W_: function () {
          return r;
        },
      }),
        i(3711);
      var s = i(9007);
      function r(e) {
        let { swiper: t, extendParams: i, on: r, emit: n } = e;
        function l(e) {
          let i;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (i = t.el.querySelector(e))
            ? i
            : (e &&
                ("string" == typeof e &&
                  (i = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" == typeof e &&
                i &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (i = t.el.querySelector(e))
                  : i && 1 === i.length && (i = i[0])),
              e && !i)
            ? e
            : i;
        }
        function a(e, i) {
          let r = t.params.navigation;
          (e = (0, s.m)(e)).forEach((e) => {
            e &&
              (e.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = i),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](r.lockClass));
          });
        }
        function o() {
          let { nextEl: e, prevEl: i } = t.navigation;
          if (t.params.loop) {
            a(i, !1), a(e, !1);
            return;
          }
          a(i, t.isBeginning && !t.params.rewind),
            a(e, t.isEnd && !t.params.rewind);
        }
        function d(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), n("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), n("navigationNext"));
        }
        function u() {
          var e, i, r;
          let n = t.params.navigation;
          if (
            ((t.params.navigation =
              ((e = t.originalParams.navigation),
              (i = t.params.navigation),
              (r = {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }),
              t.params.createElements &&
                Object.keys(r).forEach((n) => {
                  if (!i[n] && !0 === i.auto) {
                    let l = (0, s.e)(t.el, `.${r[n]}`)[0];
                    l ||
                      (((l = (0, s.c)("div", r[n])).className = r[n]),
                      t.el.append(l)),
                      (i[n] = l),
                      (e[n] = l);
                  }
                }),
              i)),
            !(n.nextEl || n.prevEl))
          )
            return;
          let a = l(n.nextEl),
            o = l(n.prevEl);
          Object.assign(t.navigation, { nextEl: a, prevEl: o }),
            (a = (0, s.m)(a)),
            (o = (0, s.m)(o));
          let u = (e, i) => {
            e && e.addEventListener("click", "next" === i ? c : d),
              !t.enabled && e && e.classList.add(...n.lockClass.split(" "));
          };
          a.forEach((e) => u(e, "next")), o.forEach((e) => u(e, "prev"));
        }
        function p() {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = (0, s.m)(e)), (i = (0, s.m)(i));
          let r = (e, i) => {
            e.removeEventListener("click", "next" === i ? c : d),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r("init", () => {
            !1 === t.params.navigation.enabled ? h() : (u(), o());
          }),
          r("toEdge fromEdge lock unlock", () => {
            o();
          }),
          r("destroy", () => {
            p();
          }),
          r("enable disable", () => {
            let { nextEl: e, prevEl: i } = t.navigation;
            if (((e = (0, s.m)(e)), (i = (0, s.m)(i)), t.enabled)) {
              o();
              return;
            }
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          r("click", (e, i) => {
            let { nextEl: r, prevEl: l } = t.navigation;
            (r = (0, s.m)(r)), (l = (0, s.m)(l));
            let a = i.target,
              o = l.includes(a) || r.includes(a);
            if (t.isElement && !o) {
              let e = i.path || (i.composedPath && i.composedPath());
              e && (o = e.find((e) => r.includes(e) || l.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))
              )
                return;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : l.length &&
                  (e = l[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                !0 === e ? n("navigationShow") : n("navigationHide"),
                [...r, ...l]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        let h = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            p();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              u(),
              o();
          },
          disable: h,
          update: o,
          init: u,
          destroy: p,
        });
      }
    },
    3711: function (e, t, i) {
      "use strict";
      function s(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function r(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : s(t[i]) &&
                s(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                r(e[i], t[i]);
          });
      }
      i.d(t, {
        a: function () {
          return o;
        },
        g: function () {
          return l;
        },
      });
      let n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function l() {
        let e = "undefined" != typeof document ? document : {};
        return r(e, n), e;
      }
      let a = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        let e = "undefined" != typeof window ? window : {};
        return r(e, a), e;
      }
    },
    9007: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return w;
        },
        c: function () {
          return h;
        },
        d: function () {
          return l;
        },
        e: function () {
          return u;
        },
        f: function () {
          return b;
        },
        h: function () {
          return g;
        },
        j: function () {
          return a;
        },
        m: function () {
          return S;
        },
        n: function () {
          return n;
        },
        o: function () {
          return v;
        },
        p: function () {
          return m;
        },
        q: function () {
          return f;
        },
        r: function () {
          return c;
        },
        s: function () {
          return d;
        },
        t: function () {
          return p;
        },
        u: function () {
          return function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              i = ["__proto__", "constructor", "prototype"];
            for (let s = 1; s < arguments.length; s += 1) {
              let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
              if (
                null != r &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(r instanceof HTMLElement)
                  : !r || (1 !== r.nodeType && 11 !== r.nodeType))
              ) {
                let s = Object.keys(Object(r)).filter((e) => 0 > i.indexOf(e));
                for (let i = 0, n = s.length; i < n; i += 1) {
                  let n = s[i],
                    l = Object.getOwnPropertyDescriptor(r, n);
                  void 0 !== l &&
                    l.enumerable &&
                    (o(t[n]) && o(r[n])
                      ? r[n].__swiper__
                        ? (t[n] = r[n])
                        : e(t[n], r[n])
                      : !o(t[n]) && o(r[n])
                      ? ((t[n] = {}),
                        r[n].__swiper__ ? (t[n] = r[n]) : e(t[n], r[n]))
                      : (t[n] = r[n]));
                }
              }
            }
            return t;
          };
        },
        v: function () {
          return r;
        },
      });
      var s = i(3711);
      function r(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function l() {
        return Date.now();
      }
      function a(e, t) {
        let i, r, n;
        void 0 === t && (t = "x");
        let l = (0, s.a)(),
          a = (function (e) {
            let t;
            let i = (0, s.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          l.WebKitCSSMatrix
            ? ((r = a.transform || a.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new l.WebKitCSSMatrix("none" === r ? "" : r)))
            : (i = (n =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (r = l.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (r = l.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          r || 0
        );
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t, i) {
        e.style.setProperty(t, i);
      }
      function c(e) {
        let t,
          { swiper: i, targetPosition: r, side: n } = e,
          l = (0, s.a)(),
          a = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          l.cancelAnimationFrame(i.cssModeFrameID);
        let c = r > a ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          p = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e =
              a +
              (0.5 -
                Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) *
                (r - a);
            if (
              (u(e, r) && (e = r), i.wrapperEl.scrollTo({ [n]: e }), u(e, r))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [n]: e });
                }),
                l.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = l.requestAnimationFrame(p);
          };
        p();
      }
      function u(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function p(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function h(e, t) {
        var i;
        void 0 === t && (t = []);
        let s = document.createElement(e);
        return (
          s.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          s
        );
      }
      function f(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let s = e.previousElementSibling;
          t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
        }
        return i;
      }
      function m(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let s = e.nextElementSibling;
          t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
        }
        return i;
      }
      function v(e, t) {
        return (0, s.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function g(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function w(e, t) {
        let i = [],
          s = e.parentElement;
        for (; s; )
          t ? s.matches(t) && i.push(s) : i.push(s), (s = s.parentElement);
        return i;
      }
      function b(e, t, i) {
        let r = (0, s.a)();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function S(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    3267: function (e, t, i) {
      "use strict";
      let s, r, n;
      i.d(t, {
        tq: function () {
          return W;
        },
        o5: function () {
          return q;
        },
      });
      var l = i(2265),
        a = i(3711),
        o = i(9007);
      function d() {
        return (
          s ||
            (s = (function () {
              let e = (0, a.a)(),
                t = (0, a.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          s
        );
      }
      function c(e) {
        return (
          void 0 === e && (e = {}),
          r ||
            (r = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = d(),
                s = (0, a.a)(),
                r = s.navigator.platform,
                n = t || s.navigator.userAgent,
                l = { ios: !1, android: !1 },
                o = s.screen.width,
                c = s.screen.height,
                u = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = n.match(/(iPad).*OS\s([\d_]+)/),
                h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === r;
              return (
                !p &&
                  m &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${c}`) >= 0 &&
                  ((p = n.match(/(Version)\/([\d.]+)/)) ||
                    (p = [0, 1, "13_0_0"]),
                  (m = !1)),
                u && "Win32" !== r && ((l.os = "android"), (l.android = !0)),
                (p || f || h) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          r
        );
      }
      let u = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        p = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let s =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [r - t];
            i.push(...Array.from({ length: t }).map((e, t) => r + s + t)),
              e.slides.forEach((t, s) => {
                i.includes(t.column) && f(e, s);
              });
            return;
          }
          let n = r + s - 1;
          if (e.params.rewind || e.params.loop)
            for (let s = r - t; s <= n + t; s += 1) {
              let t = ((s % i) + i) % i;
              (t < r || t > n) && f(e, t);
            }
          else
            for (
              let s = Math.max(r - t, 0);
              s <= Math.min(n + t, i - 1);
              s += 1
            )
              s !== r && (s > n || s < r) && f(e, s);
        };
      function v(e) {
        let { swiper: t, runCallbacks: i, direction: s, step: r } = e,
          { activeIndex: n, previousIndex: l } = t,
          a = s;
        if (
          (a || (a = n > l ? "next" : n < l ? "prev" : "reset"),
          t.emit(`transition${r}`),
          i && n !== l)
        ) {
          if ("reset" === a) {
            t.emit(`slideResetTransition${r}`);
            return;
          }
          t.emit(`slideChangeTransition${r}`),
            "next" === a
              ? t.emit(`slideNextTransition${r}`)
              : t.emit(`slidePrevTransition${r}`);
        }
      }
      function g(e, t, i) {
        let s = (0, a.a)(),
          { params: r } = e,
          n = r.edgeSwipeDetection,
          l = r.edgeSwipeThreshold;
        return (
          !n ||
          (!(i <= l) && !(i >= s.innerWidth - l)) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function w(e) {
        let t = (0, a.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let s = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
          s.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (s.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          g(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: r, touches: n, enabled: l } = this;
        if (
          !l ||
          (!r.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && r.preventInteractionOnTransition)
        )
          return;
        !this.animating && r.cssMode && r.loop && this.loopFix();
        let d = i.target;
        if (
          ("wrapper" === r.touchEventsTarget && !this.wrapperEl.contains(d)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (s.isTouched && s.isMoved)
        )
          return;
        let c = !!r.noSwipingClass && "" !== r.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        c && i.target && i.target.shadowRoot && u && (d = u[0]);
        let p = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          h = !!(i.target && i.target.shadowRoot);
        if (
          r.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === (0, a.g)() || i === (0, a.a)()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode
                      ? s || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, d)
            : d.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
        (n.currentX = i.pageX), (n.currentY = i.pageY);
        let f = n.currentX,
          m = n.currentY;
        if (!g(this, i, f)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = f),
          (n.startY = m),
          (s.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          r.threshold > 0 && (s.allowThresholdMove = !1);
        let v = !0;
        d.matches(s.focusableElements) &&
          ((v = !1), "SELECT" === d.nodeName && (s.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(s.focusableElements) &&
            t.activeElement !== d &&
            t.activeElement.blur();
        let w = v && this.allowTouchMove && r.touchStartPreventDefault;
        (r.touchStartForcePreventDefault || w) &&
          !d.isContentEditable &&
          i.preventDefault(),
          r.freeMode &&
            r.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !r.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function b(e) {
        let t, i;
        let s = (0, a.g)(),
          r = this.touchEventsData,
          { params: n, touches: l, rtlTranslate: d, enabled: c } = this;
        if (!c || (!n.simulateTouch && "mouse" === e.pointerType)) return;
        let u = e;
        if (
          (u.originalEvent && (u = u.originalEvent),
          "pointermove" === u.type &&
            (null !== r.touchId || u.pointerId !== r.pointerId))
        )
          return;
        if ("touchmove" === u.type) {
          if (
            !(t = [...u.changedTouches].filter(
              (e) => e.identifier === r.touchId
            )[0]) ||
            t.identifier !== r.touchId
          )
            return;
        } else t = u;
        if (!r.isTouched) {
          r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", u);
          return;
        }
        let p = t.pageX,
          h = t.pageY;
        if (u.preventedByNestedSwiper) {
          (l.startX = p), (l.startY = h);
          return;
        }
        if (!this.allowTouchMove) {
          u.target.matches(r.focusableElements) || (this.allowClick = !1),
            r.isTouched &&
              (Object.assign(l, {
                startX: p,
                startY: h,
                currentX: p,
                currentY: h,
              }),
              (r.touchStartTime = (0, o.d)()));
          return;
        }
        if (n.touchReleaseOnEdges && !n.loop) {
          if (this.isVertical()) {
            if (
              (h < l.startY && this.translate <= this.maxTranslate()) ||
              (h > l.startY && this.translate >= this.minTranslate())
            ) {
              (r.isTouched = !1), (r.isMoved = !1);
              return;
            }
          } else if (
            (p < l.startX && this.translate <= this.maxTranslate()) ||
            (p > l.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          s.activeElement &&
          u.target === s.activeElement &&
          u.target.matches(r.focusableElements)
        ) {
          (r.isMoved = !0), (this.allowClick = !1);
          return;
        }
        r.allowTouchCallbacks && this.emit("touchMove", u),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = p),
          (l.currentY = h);
        let f = l.currentX - l.startX,
          m = l.currentY - l.startY;
        if (
          this.params.threshold &&
          Math.sqrt(f ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === r.isScrolling) {
          let e;
          (this.isHorizontal() && l.currentY === l.startY) ||
          (this.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (r.isScrolling = this.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (r.isScrolling && this.emit("touchMoveOpposite", u),
          void 0 === r.startMoving &&
            (l.currentX !== l.startX || l.currentY !== l.startY) &&
            (r.startMoving = !0),
          r.isScrolling ||
            ("touchmove" === u.type && r.preventTouchMoveFromPointerMove))
        ) {
          r.isTouched = !1;
          return;
        }
        if (!r.startMoving) return;
        (this.allowClick = !1),
          !n.cssMode && u.cancelable && u.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && u.stopPropagation();
        let v = this.isHorizontal() ? f : m,
          g = this.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        n.oneWayMovement &&
          ((v = Math.abs(v) * (d ? 1 : -1)), (g = Math.abs(g) * (d ? 1 : -1))),
          (l.diff = v),
          (v *= n.touchRatio),
          d && ((v = -v), (g = -g));
        let w = this.touchesDirection;
        (this.swipeDirection = v > 0 ? "prev" : "next"),
          (this.touchesDirection = g > 0 ? "prev" : "next");
        let b = this.params.loop && !n.cssMode,
          S =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (b && S && this.loopFix({ direction: this.swipeDirection }),
            (r.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            n.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", u);
        }
        if (
          (new Date().getTime(),
          r.isMoved &&
            r.allowThresholdMove &&
            w !== this.touchesDirection &&
            b &&
            S &&
            Math.abs(v) >= 1)
        ) {
          Object.assign(l, {
            startX: p,
            startY: h,
            currentX: p,
            currentY: h,
            startTranslate: r.currentTranslate,
          }),
            (r.loopSwapReset = !0),
            (r.startTranslate = r.currentTranslate);
          return;
        }
        this.emit("sliderMove", u),
          (r.isMoved = !0),
          (r.currentTranslate = v + r.startTranslate);
        let y = !0,
          T = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (T = 0),
          v > 0
            ? (b &&
                S &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (n.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1]
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > this.minTranslate() &&
                ((y = !1),
                n.resistance &&
                  (r.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + r.startTranslate + v) ** T)))
            : v < 0 &&
              (b &&
                S &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (n.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1]
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === n.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              r.currentTranslate < this.maxTranslate() &&
                ((y = !1),
                n.resistance &&
                  (r.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - r.startTranslate - v) ** T))),
          y && (u.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          n.threshold > 0)
        ) {
          if (Math.abs(v) > n.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
              (r.allowThresholdMove = !0),
                (l.startX = l.currentX),
                (l.startY = l.currentY),
                (r.currentTranslate = r.startTranslate),
                (l.diff = this.isHorizontal()
                  ? l.currentX - l.startX
                  : l.currentY - l.startY);
              return;
            }
          } else {
            r.currentTranslate = r.startTranslate;
            return;
          }
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && this.freeMode) ||
            n.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(r.currentTranslate),
          this.setTranslate(r.currentTranslate));
      }
      function S(e) {
        let t, i;
        let s = this,
          r = s.touchEventsData,
          n = e;
        if (
          (n.originalEvent && (n = n.originalEvent),
          "touchend" === n.type || "touchcancel" === n.type)
        ) {
          if (
            !(t = [...n.changedTouches].filter(
              (e) => e.identifier === r.touchId
            )[0]) ||
            t.identifier !== r.touchId
          )
            return;
        } else {
          if (null !== r.touchId || n.pointerId !== r.pointerId) return;
          t = n;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(n.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (s.browser.isSafari || s.browser.isWebView)
          )
        )
          return;
        (r.pointerId = null), (r.touchId = null);
        let {
          params: l,
          touches: a,
          rtlTranslate: d,
          slidesGrid: c,
          enabled: u,
        } = s;
        if (!u || (!l.simulateTouch && "mouse" === n.pointerType)) return;
        if (
          (r.allowTouchCallbacks && s.emit("touchEnd", n),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        ) {
          r.isMoved && l.grabCursor && s.setGrabCursor(!1),
            (r.isMoved = !1),
            (r.startMoving = !1);
          return;
        }
        l.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
          s.setGrabCursor(!1);
        let p = (0, o.d)(),
          h = p - r.touchStartTime;
        if (s.allowClick) {
          let e = n.path || (n.composedPath && n.composedPath());
          s.updateClickedSlide((e && e[0]) || n.target, e),
            s.emit("tap click", n),
            h < 300 &&
              p - r.lastClickTime < 300 &&
              s.emit("doubleTap doubleClick", n);
        }
        if (
          ((r.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            s.destroyed || (s.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !s.swipeDirection ||
            (0 === a.diff && !r.loopSwapReset) ||
            (r.currentTranslate === r.startTranslate && !r.loopSwapReset))
        ) {
          (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
          return;
        }
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (i = l.followFinger
            ? d
              ? s.translate
              : -s.translate
            : -r.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled) {
          s.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let f = i >= -s.maxTranslate() && !s.params.loop,
          m = 0,
          v = s.slidesSizesGrid[0];
        for (
          let e = 0;
          e < c.length;
          e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
        ) {
          let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          void 0 !== c[e + t]
            ? (f || (i >= c[e] && i < c[e + t])) &&
              ((m = e), (v = c[e + t] - c[e]))
            : (f || i >= c[e]) &&
              ((m = e), (v = c[c.length - 1] - c[c.length - 2]));
        }
        let g = null,
          w = null;
        l.rewind &&
          (s.isBeginning
            ? (w =
                l.virtual && l.virtual.enabled && s.virtual
                  ? s.virtual.slides.length - 1
                  : s.slides.length - 1)
            : s.isEnd && (g = 0));
        let b = (i - c[m]) / v,
          S = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (h > l.longSwipesMs) {
          if (!l.longSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          "next" === s.swipeDirection &&
            (b >= l.longSwipesRatio
              ? s.slideTo(l.rewind && s.isEnd ? g : m + S)
              : s.slideTo(m)),
            "prev" === s.swipeDirection &&
              (b > 1 - l.longSwipesRatio
                ? s.slideTo(m + S)
                : null !== w && b < 0 && Math.abs(b) > l.longSwipesRatio
                ? s.slideTo(w)
                : s.slideTo(m));
        } else {
          if (!l.shortSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          s.navigation &&
          (n.target === s.navigation.nextEl || n.target === s.navigation.prevEl)
            ? n.target === s.navigation.nextEl
              ? s.slideTo(m + S)
              : s.slideTo(m)
            : ("next" === s.swipeDirection && s.slideTo(null !== g ? g : m + S),
              "prev" === s.swipeDirection && s.slideTo(null !== w ? w : m));
        }
      }
      function y() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = e,
          l = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let a = l && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        a
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = s),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function T(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function E() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let s = this.maxTranslate() - this.minTranslate();
        (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function x(e) {
        h(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function C() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let P = (e, t) => {
          let i = (0, a.g)(),
            { params: s, el: r, wrapperEl: n, device: l } = e,
            o = !!s.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          r &&
            "string" != typeof r &&
            (i[d]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            r[d]("touchstart", e.onTouchStart, { passive: !1 }),
            r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("touchend", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (s.preventClicks || s.preventClicksPropagation) &&
              r[d]("click", e.onClick, !0),
            s.cssMode && n[d]("scroll", e.onScroll),
            s.updateOnWindowResize
              ? e[t](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  y,
                  !0
                )
              : e[t]("observerUpdate", y, !0),
            r[d]("load", e.onLoad, { capture: !0 }));
        },
        M = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var O = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let k = {
          eventsEmitter: {
            on(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              let r = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][r](t);
                }),
                s
              );
            },
            once(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              function r() {
                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                for (var i = arguments.length, n = Array(i), l = 0; l < i; l++)
                  n[l] = arguments[l];
                t.apply(s, n);
              }
              return (r.__emitterProxy = t), s.on(e, r, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((s, r) => {
                          (s === t ||
                            (s.__emitterProxy && s.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(r, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let s = this;
              if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
                return s;
              for (var r = arguments.length, n = Array(r), l = 0; l < r; l++)
                n[l] = arguments[l];
              return (
                "string" == typeof n[0] || Array.isArray(n[0])
                  ? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
                  : ((e = n[0].events),
                    (t = n[0].data),
                    (i = n[0].context || s)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  s.eventsAnyListeners &&
                    s.eventsAnyListeners.length &&
                    s.eventsAnyListeners.forEach((s) => {
                      s.apply(i, [e, ...t]);
                    }),
                    s.eventsListeners &&
                      s.eventsListeners[e] &&
                      s.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                s
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.o)(i, "padding-left") || 0, 10) -
                    parseInt((0, o.o)(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.o)(i, "padding-top") || 0, 10) -
                    parseInt((0, o.o)(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let s = t.params,
                {
                  wrapperEl: r,
                  slidesEl: n,
                  size: l,
                  rtlTranslate: a,
                  wrongRTL: d,
                } = t,
                c = t.virtual && s.virtual.enabled,
                u = c ? t.virtual.slides.length : t.slides.length,
                p = (0, o.e)(n, `.${t.params.slideClass}, swiper-slide`),
                h = c ? t.virtual.slides.length : p.length,
                f = [],
                m = [],
                v = [],
                g = s.slidesOffsetBefore;
              "function" == typeof g && (g = s.slidesOffsetBefore.call(t));
              let w = s.slidesOffsetAfter;
              "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
              let b = t.snapGrid.length,
                S = t.slidesGrid.length,
                y = s.spaceBetween,
                T = -g,
                E = 0,
                x = 0;
              if (void 0 === l) return;
              "string" == typeof y && y.indexOf("%") >= 0
                ? (y = (parseFloat(y.replace("%", "")) / 100) * l)
                : "string" == typeof y && (y = parseFloat(y)),
                (t.virtualSize = -y),
                p.forEach((e) => {
                  a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                s.centeredSlides &&
                  s.cssMode &&
                  ((0, o.s)(r, "--swiper-centered-offset-before", ""),
                  (0, o.s)(r, "--swiper-centered-offset-after", ""));
              let C = s.grid && s.grid.rows > 1 && t.grid;
              C ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
              let P =
                "auto" === s.slidesPerView &&
                s.breakpoints &&
                Object.keys(s.breakpoints).filter(
                  (e) => void 0 !== s.breakpoints[e].slidesPerView
                ).length > 0;
              for (let r = 0; r < h; r += 1) {
                let n;
                if (
                  ((e = 0),
                  p[r] && (n = p[r]),
                  C && t.grid.updateSlide(r, n, p),
                  !p[r] || "none" !== (0, o.o)(n, "display"))
                ) {
                  if ("auto" === s.slidesPerView) {
                    P && (p[r].style[t.getDirectionLabel("width")] = "");
                    let l = getComputedStyle(n),
                      a = n.style.transform,
                      d = n.style.webkitTransform;
                    if (
                      (a && (n.style.transform = "none"),
                      d && (n.style.webkitTransform = "none"),
                      s.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, o.f)(n, "width", !0)
                        : (0, o.f)(n, "height", !0);
                    else {
                      let t = i(l, "width"),
                        s = i(l, "padding-left"),
                        r = i(l, "padding-right"),
                        a = i(l, "margin-left"),
                        o = i(l, "margin-right"),
                        d = l.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + a + o;
                      else {
                        let { clientWidth: i, offsetWidth: l } = n;
                        e = t + s + r + a + o + (l - i);
                      }
                    }
                    a && (n.style.transform = a),
                      d && (n.style.webkitTransform = d),
                      s.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (l - (s.slidesPerView - 1) * y) / s.slidesPerView),
                      s.roundLengths && (e = Math.floor(e)),
                      p[r] &&
                        (p[r].style[t.getDirectionLabel("width")] = `${e}px`);
                  p[r] && (p[r].swiperSlideSize = e),
                    v.push(e),
                    s.centeredSlides
                      ? ((T = T + e / 2 + E / 2 + y),
                        0 === E && 0 !== r && (T = T - l / 2 - y),
                        0 === r && (T = T - l / 2 - y),
                        0.001 > Math.abs(T) && (T = 0),
                        s.roundLengths && (T = Math.floor(T)),
                        x % s.slidesPerGroup == 0 && f.push(T),
                        m.push(T))
                      : (s.roundLengths && (T = Math.floor(T)),
                        (x - Math.min(t.params.slidesPerGroupSkip, x)) %
                          t.params.slidesPerGroup ==
                          0 && f.push(T),
                        m.push(T),
                        (T = T + e + y)),
                    (t.virtualSize += e + y),
                    (E = e),
                    (x += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, l) + w),
                a &&
                  d &&
                  ("slide" === s.effect || "coverflow" === s.effect) &&
                  (r.style.width = `${t.virtualSize + y}px`),
                s.setWrapperSize &&
                  (r.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + y
                  }px`),
                C && t.grid.updateWrapperSize(e, f),
                !s.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < f.length; i += 1) {
                  let r = f[i];
                  s.roundLengths && (r = Math.floor(r)),
                    f[i] <= t.virtualSize - l && e.push(r);
                }
                (f = e),
                  Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) >
                    1 && f.push(t.virtualSize - l);
              }
              if (c && s.loop) {
                let e = v[0] + y;
                if (s.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        s.slidesPerGroup
                    ),
                    r = e * s.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === s.slidesPerGroup && f.push(f[f.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === f.length && (f = [0]), 0 !== y)) {
                let e =
                  t.isHorizontal() && a
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                p.filter(
                  (e, t) => !s.cssMode || !!s.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = `${y}px`;
                });
              }
              if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (y || 0);
                });
                let t = (e -= y) - l;
                f = f.map((e) => (e <= 0 ? -g : e > t ? t + w : e));
              }
              if (s.centerInsufficientSlides) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (y || 0);
                }),
                  (e -= y);
                let t =
                  (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < l) {
                  let i = (l - e - t) / 2;
                  f.forEach((e, t) => {
                    f[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: f,
                  slidesGrid: m,
                  slidesSizesGrid: v,
                }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
              ) {
                (0, o.s)(r, "--swiper-centered-offset-before", `${-f[0]}px`),
                  (0, o.s)(
                    r,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - v[v.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (h !== u && t.emit("slidesLengthChange"),
                f.length !== b &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== S && t.emit("slidesGridLengthChange"),
                s.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !c &&
                  !s.cssMode &&
                  ("slide" === s.effect || "fade" === s.effect))
              ) {
                let e = `${s.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                h <= s.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                s = [],
                r = i.virtual && i.params.virtual.enabled,
                n = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let l = (e) =>
                r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    s.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !r) break;
                    s.push(l(e));
                  }
              } else s.push(l(i.activeIndex));
              for (t = 0; t < s.length; t += 1)
                if (void 0 !== s[t]) {
                  let e = s[t].offsetHeight;
                  n = e > n ? e : n;
                }
              (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: s, snapGrid: r } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let n = -e;
              s && (n = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let l = t.spaceBetween;
              "string" == typeof l && l.indexOf("%") >= 0
                ? (l = (parseFloat(l.replace("%", "")) / 100) * this.size)
                : "string" == typeof l && (l = parseFloat(l));
              for (let e = 0; e < i.length; e += 1) {
                let a = i[e],
                  o = a.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (n + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (a.swiperSlideSize + l),
                  c =
                    (n -
                      r[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (a.swiperSlideSize + l),
                  p = -(n - o),
                  h = p + this.slidesSizesGrid[e],
                  f = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                  m =
                    (p >= 0 && p < this.size - 1) ||
                    (h > 1 && h <= this.size) ||
                    (p <= 0 && h >= this.size);
                m &&
                  (this.visibleSlides.push(a),
                  this.visibleSlidesIndexes.push(e)),
                  u(a, m, t.slideVisibleClass),
                  u(a, f, t.slideFullyVisibleClass),
                  (a.progress = s ? -d : d),
                  (a.originalProgress = s ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: s,
                  isBeginning: r,
                  isEnd: n,
                  progressLoop: l,
                } = this,
                a = r,
                o = n;
              if (0 === i) (s = 0), (r = !0), (n = !0);
              else {
                s = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  l = 1 > Math.abs(e - this.maxTranslate());
                (r = t || s <= 0),
                  (n = l || s >= 1),
                  t && (s = 0),
                  l && (s = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  s = this.slidesGrid[t],
                  r = this.slidesGrid[i],
                  n = this.slidesGrid[this.slidesGrid.length - 1],
                  a = Math.abs(e);
                (l = a >= s ? (a - s) / n : (a + n - r) / n) > 1 && (l -= 1);
              }
              Object.assign(this, {
                progress: s,
                progressLoop: l,
                isBeginning: r,
                isEnd: n,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                r && !a && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                ((a && !r) || (o && !n)) && this.emit("fromEdge"),
                this.emit("progress", s);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: s, params: r, slidesEl: n, activeIndex: l } = this,
                a = this.virtual && r.virtual.enabled,
                d = this.grid && r.grid && r.grid.rows > 1,
                c = (e) =>
                  (0, o.e)(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
              if (a) {
                if (r.loop) {
                  let t = l - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = c(`[data-swiper-slide-index="${t}"]`));
                } else e = c(`[data-swiper-slide-index="${l}"]`);
              } else
                d
                  ? ((e = s.filter((e) => e.column === l)[0]),
                    (i = s.filter((e) => e.column === l + 1)[0]),
                    (t = s.filter((e) => e.column === l - 1)[0]))
                  : (e = s[l]);
              e &&
                !d &&
                ((i = (0, o.p)(e, `.${r.slideClass}, swiper-slide`)[0]),
                r.loop && !i && (i = s[0]),
                (t = (0, o.q)(e, `.${r.slideClass}, swiper-slide`)[0]),
                r.loop),
                s.forEach((s) => {
                  p(s, s === e, r.slideActiveClass),
                    p(s, s === i, r.slideNextClass),
                    p(s, s === t, r.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let s = this,
                r = s.rtlTranslate ? s.translate : -s.translate,
                {
                  snapGrid: n,
                  params: l,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: d,
                } = s,
                c = e,
                u = (e) => {
                  let t = e - s.virtual.slidesBefore;
                  return (
                    t < 0 && (t = s.virtual.slides.length + t),
                    t >= s.virtual.slides.length &&
                      (t -= s.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t;
                    let { slidesGrid: i, params: s } = e,
                      r = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : r >= i[e] && r < i[e + 1] && (t = e + 1)
                        : r >= i[e] && (t = e);
                    return (
                      s.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(s)),
                n.indexOf(r) >= 0)
              )
                t = n.indexOf(r);
              else {
                let e = Math.min(l.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / l.slidesPerGroup);
              }
              if (
                (t >= n.length && (t = n.length - 1), c === a && !s.params.loop)
              ) {
                t !== d && ((s.snapIndex = t), s.emit("snapIndexChange"));
                return;
              }
              if (
                c === a &&
                s.params.loop &&
                s.virtual &&
                s.params.virtual.enabled
              ) {
                s.realIndex = u(c);
                return;
              }
              let p = s.grid && l.grid && l.grid.rows > 1;
              if (s.virtual && l.virtual.enabled && l.loop) i = u(c);
              else if (p) {
                let e = s.slides.filter((e) => e.column === c)[0],
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)),
                  (i = Math.floor(t / l.grid.rows));
              } else if (s.slides[c]) {
                let e = s.slides[c].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : c;
              } else i = c;
              Object.assign(s, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: a,
                activeIndex: c,
              }),
                s.initialized && m(s),
                s.emit("activeIndexChange"),
                s.emit("snapIndexChange"),
                (s.initialized || s.params.runCallbacksOnInit) &&
                  (o !== i && s.emit("realIndexChange"), s.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let s = this.params,
                r = e.closest(`.${s.slideClass}, swiper-slide`);
              !r &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !r &&
                    e.matches &&
                    e.matches(`.${s.slideClass}, swiper-slide`) &&
                    (r = e);
                });
              let n = !1;
              if (r) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === r) {
                    (n = !0), (i = e);
                    break;
                  }
              }
              if (r && n)
                (this.clickedSlide = r),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        r.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              s.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: s,
                wrapperEl: r,
              } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let n = (0, o.j)(r, e);
              return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: s,
                  wrapperEl: r,
                  progress: n,
                } = this,
                l = 0,
                a = 0;
              this.isHorizontal() ? (l = i ? -e : e) : (a = e),
                s.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? l : a),
                s.cssMode
                  ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -l : -a)
                  : s.virtualTranslate ||
                    (this.isHorizontal()
                      ? (l -= this.cssOverflowAdjustment())
                      : (a -= this.cssOverflowAdjustment()),
                    (r.style.transform = `translate3d(${l}px, ${a}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, s, r) {
              let n;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
              let l = this,
                { params: a, wrapperEl: d } = l;
              if (l.animating && a.preventInteractionOnTransition) return !1;
              let c = l.minTranslate(),
                u = l.maxTranslate();
              if (
                ((n = s && e > c ? c : s && e < u ? u : e),
                l.updateProgress(n),
                a.cssMode)
              ) {
                let e = l.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -n;
                else {
                  if (!l.support.smoothScroll)
                    return (
                      (0, o.r)({
                        swiper: l,
                        targetPosition: -n,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -n, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, r),
                      l.emit("transitionEnd")))
                  : (l.setTransition(t),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, r),
                      l.emit("transitionStart")),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.wrapperEl.removeEventListener(
                              "transitionend",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            (l.animating = !1),
                            i && l.emit("transitionEnd"));
                        }),
                      l.wrapperEl.addEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                v({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  v({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, s, r) {
              let n;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let l = this,
                a = e;
              a < 0 && (a = 0);
              let {
                params: d,
                snapGrid: c,
                slidesGrid: u,
                previousIndex: p,
                activeIndex: h,
                rtlTranslate: f,
                wrapperEl: m,
                enabled: v,
              } = l;
              if (
                (!v && !s && !r) ||
                l.destroyed ||
                (l.animating && d.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = l.params.speed);
              let g = Math.min(l.params.slidesPerGroupSkip, a),
                w = g + Math.floor((a - g) / l.params.slidesPerGroup);
              w >= c.length && (w = c.length - 1);
              let b = -c[w];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < u.length; e += 1) {
                  let t = -Math.floor(100 * b),
                    i = Math.floor(100 * u[e]),
                    s = Math.floor(100 * u[e + 1]);
                  void 0 !== u[e + 1]
                    ? t >= i && t < s - (s - i) / 2
                      ? (a = e)
                      : t >= i && t < s && (a = e + 1)
                    : t >= i && (a = e);
                }
              if (
                l.initialized &&
                a !== h &&
                ((!l.allowSlideNext &&
                  (f
                    ? b > l.translate && b > l.minTranslate()
                    : b < l.translate && b < l.minTranslate())) ||
                  (!l.allowSlidePrev &&
                    b > l.translate &&
                    b > l.maxTranslate() &&
                    (h || 0) !== a))
              )
                return !1;
              if (
                (a !== (p || 0) && i && l.emit("beforeSlideChangeStart"),
                l.updateProgress(b),
                (n = a > h ? "next" : a < h ? "prev" : "reset"),
                (f && -b === l.translate) || (!f && b === l.translate))
              )
                return (
                  l.updateActiveIndex(a),
                  d.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  "slide" !== d.effect && l.setTranslate(b),
                  "reset" !== n &&
                    (l.transitionStart(i, n), l.transitionEnd(i, n)),
                  !1
                );
              if (d.cssMode) {
                let e = l.isHorizontal(),
                  i = f ? b : -b;
                if (0 === t) {
                  let t = l.virtual && l.params.virtual.enabled;
                  t &&
                    ((l.wrapperEl.style.scrollSnapType = "none"),
                    (l._immediateVirtual = !0)),
                    t &&
                    !l._cssModeVirtualInitialSet &&
                    l.params.initialSlide > 0
                      ? ((l._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    t &&
                      requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ""),
                          (l._immediateVirtual = !1);
                      });
                } else {
                  if (!l.support.smoothScroll)
                    return (
                      (0, o.r)({
                        swiper: l,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                l.setTransition(t),
                l.setTranslate(b),
                l.updateActiveIndex(a),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, s),
                l.transitionStart(i, n),
                0 === t
                  ? l.transitionEnd(i, n)
                  : l.animating ||
                    ((l.animating = !0),
                    l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (e) {
                        l &&
                          !l.destroyed &&
                          e.target === this &&
                          (l.wrapperEl.removeEventListener(
                            "transitionend",
                            l.onSlideToWrapperTransitionEnd
                          ),
                          (l.onSlideToWrapperTransitionEnd = null),
                          delete l.onSlideToWrapperTransitionEnd,
                          l.transitionEnd(i, n));
                      }),
                    l.wrapperEl.addEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, s) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let r = this;
              if (r.destroyed) return;
              void 0 === t && (t = r.params.speed);
              let n = r.grid && r.params.grid && r.params.grid.rows > 1,
                l = e;
              if (r.params.loop) {
                if (r.virtual && r.params.virtual.enabled)
                  l += r.virtual.slidesBefore;
                else {
                  let e;
                  if (n) {
                    let t = l * r.params.grid.rows;
                    e = r.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    )[0].column;
                  } else e = r.getSlideIndexByData(l);
                  let t = n
                      ? Math.ceil(r.slides.length / r.params.grid.rows)
                      : r.slides.length,
                    { centeredSlides: i } = r.params,
                    a = r.params.slidesPerView;
                  "auto" === a
                    ? (a = r.slidesPerViewDynamic())
                    : ((a = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                      i && a % 2 == 0 && (a += 1));
                  let o = t - e < a;
                  if (
                    (i && (o = o || e < Math.ceil(a / 2)),
                    s &&
                      i &&
                      "auto" !== r.params.slidesPerView &&
                      !n &&
                      (o = !1),
                    o)
                  ) {
                    let s = i
                      ? e < r.activeIndex
                        ? "prev"
                        : "next"
                      : e - r.activeIndex - 1 < r.params.slidesPerView
                      ? "next"
                      : "prev";
                    r.loopFix({
                      direction: s,
                      slideTo: !0,
                      activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === s ? r.realIndex : void 0,
                    });
                  }
                  if (n) {
                    let e = l * r.params.grid.rows;
                    l = r.slides.filter(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    )[0].column;
                  } else l = r.getSlideIndexByData(l);
                }
              }
              return (
                requestAnimationFrame(() => {
                  r.slideTo(l, t, i, s);
                }),
                r
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                { enabled: r, params: n, animating: l } = s;
              if (!r || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let a = n.slidesPerGroup;
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
              let o = s.activeIndex < n.slidesPerGroupSkip ? 1 : a,
                d = s.virtual && n.virtual.enabled;
              if (n.loop) {
                if (l && !d && n.loopPreventsSliding) return !1;
                if (
                  (s.loopFix({ direction: "next" }),
                  (s._clientLeft = s.wrapperEl.clientLeft),
                  s.activeIndex === s.slides.length - 1 && n.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      s.slideTo(s.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return n.rewind && s.isEnd
                ? s.slideTo(0, e, t, i)
                : s.slideTo(s.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                {
                  params: r,
                  snapGrid: n,
                  slidesGrid: l,
                  rtlTranslate: a,
                  enabled: o,
                  animating: d,
                } = s;
              if (!o || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let c = s.virtual && r.virtual.enabled;
              if (r.loop) {
                if (d && !c && r.loopPreventsSliding) return !1;
                s.loopFix({ direction: "prev" }),
                  (s._clientLeft = s.wrapperEl.clientLeft);
              }
              function u(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = u(a ? s.translate : -s.translate),
                h = n.map((e) => u(e)),
                f = n[h.indexOf(p) - 1];
              if (void 0 === f && r.cssMode) {
                let e;
                n.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = l.indexOf(f)) < 0 && (m = s.activeIndex - 1),
                  "auto" === r.slidesPerView &&
                    1 === r.slidesPerGroup &&
                    r.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - s.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                r.rewind && s.isBeginning)
              ) {
                let r =
                  s.params.virtual && s.params.virtual.enabled && s.virtual
                    ? s.virtual.slides.length - 1
                    : s.slides.length - 1;
                return s.slideTo(r, e, t, i);
              }
              return r.loop && 0 === s.activeIndex && r.cssMode
                ? (requestAnimationFrame(() => {
                    s.slideTo(m, e, t, i);
                  }),
                  !0)
                : s.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, s) {
              if (
                (void 0 === t && (t = !0),
                void 0 === s && (s = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let r = this.activeIndex,
                n = Math.min(this.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / this.params.slidesPerGroup),
                a = this.rtlTranslate ? this.translate : -this.translate;
              if (a >= this.snapGrid[l]) {
                let e = this.snapGrid[l];
                a - e > (this.snapGrid[l + 1] - e) * s &&
                  (r += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[l - 1];
                a - e <= (this.snapGrid[l] - e) * s &&
                  (r -= this.params.slidesPerGroup);
              }
              return (
                (r = Math.min(
                  (r = Math.max(r, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(r, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: s } = t,
                r =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex,
                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - r / 2 ||
                      n > t.slides.length - t.loopedSlides + r / 2
                      ? (t.loopFix(),
                        (n = t.getSlideIndex(
                          (0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, o.n)(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - r
                    ? (t.loopFix(),
                      (n = t.getSlideIndex(
                        (0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, o.n)(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: s } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let r = t.grid && i.grid && i.grid.rows > 1,
                n = i.slidesPerGroup * (r ? i.grid.rows : 1),
                l = t.slides.length % n != 0,
                a = r && t.slides.length % i.grid.rows != 0,
                d = (e) => {
                  for (let s = 0; s < e; s += 1) {
                    let e = t.isElement
                      ? (0, o.c)("swiper-slide", [i.slideBlankClass])
                      : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              l
                ? i.loopAddBlankSlides
                  ? (d(n - (t.slides.length % n)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, o.t)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : a &&
                  (i.loopAddBlankSlides
                    ? (d(i.grid.rows - (t.slides.length % i.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, o.t)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, o.e)(s, `.${i.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: i.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: s,
                  setTranslate: r,
                  activeSlideIndex: n,
                  byController: l,
                  byMousewheel: a,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: c,
                  allowSlidePrev: u,
                  allowSlideNext: p,
                  slidesEl: h,
                  params: f,
                } = d,
                { centeredSlides: m } = f;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && f.virtual.enabled)
              ) {
                i &&
                  (f.centeredSlides || 0 !== d.snapIndex
                    ? f.centeredSlides && d.snapIndex < f.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = u),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let v = f.slidesPerView;
              "auto" === v
                ? (v = d.slidesPerViewDynamic())
                : ((v = Math.ceil(parseFloat(f.slidesPerView, 10))),
                  m && v % 2 == 0 && (v += 1));
              let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup,
                w = g;
              w % g != 0 && (w += g - (w % g)),
                (w += f.loopAdditionalSlides),
                (d.loopedSlides = w);
              let b = d.grid && f.grid && f.grid.rows > 1;
              c.length < v + w
                ? (0, o.t)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : b &&
                  "row" === f.grid.fill &&
                  (0, o.t)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let S = [],
                y = [],
                T = d.activeIndex;
              void 0 === n
                ? (n = d.getSlideIndex(
                    c.filter((e) => e.classList.contains(f.slideActiveClass))[0]
                  ))
                : (T = n);
              let E = "next" === s || !s,
                x = "prev" === s || !s,
                C = 0,
                P = 0,
                M = b ? Math.ceil(c.length / f.grid.rows) : c.length,
                O =
                  (b ? c[n].column : n) +
                  (m && void 0 === r ? -v / 2 + 0.5 : 0);
              if (O < w) {
                C = Math.max(w - O, g);
                for (let e = 0; e < w - O; e += 1) {
                  let t = e - Math.floor(e / M) * M;
                  if (b) {
                    let e = M - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1)
                      c[t].column === e && S.push(t);
                  } else S.push(M - t - 1);
                }
              } else if (O + v > M - w) {
                P = Math.max(O - (M - 2 * w), g);
                for (let e = 0; e < P; e += 1) {
                  let t = e - Math.floor(e / M) * M;
                  b
                    ? c.forEach((e, i) => {
                        e.column === t && y.push(i);
                      })
                    : y.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                x &&
                  S.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.prepend(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                E &&
                  y.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.append(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === f.slidesPerView
                  ? d.updateSlides()
                  : b &&
                    ((S.length > 0 && x) || (y.length > 0 && E)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                f.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (S.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[T],
                      t = d.slidesGrid[T + C] - e;
                    a
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(T + Math.ceil(C), 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (r) {
                    let e = b ? S.length / f.grid.rows : S.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (y.length > 0 && E) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[T],
                      t = d.slidesGrid[T - P] - e;
                    a
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(T - P, 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = b ? y.length / f.grid.rows : y.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = u),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !l)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: s,
                  setTranslate: r,
                  activeSlideIndex: n,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === f.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          f.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = w.bind(this)),
                (this.onTouchMove = b.bind(this)),
                (this.onTouchEnd = S.bind(this)),
                (this.onDocumentTouchStart = C.bind(this)),
                e.cssMode && (this.onScroll = E.bind(this)),
                (this.onClick = T.bind(this)),
                (this.onLoad = x.bind(this)),
                P(this, "on");
            },
            detachEvents: function () {
              P(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: s, el: r } = e,
                n = s.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              let a = (l in n ? n[l] : void 0) || e.originalParams,
                d = M(e, s),
                c = M(e, a),
                u = e.params.grabCursor,
                p = a.grabCursor,
                h = s.enabled;
              d && !c
                ? (r.classList.remove(
                    `${s.containerModifierClass}grid`,
                    `${s.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (r.classList.add(`${s.containerModifierClass}grid`),
                  ((a.grid.fill && "column" === a.grid.fill) ||
                    (!a.grid.fill && "column" === s.grid.fill)) &&
                    r.classList.add(`${s.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                u && !p ? e.unsetGrabCursor() : !u && p && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === a[t]) return;
                  let i = s[t] && s[t].enabled,
                    r = a[t] && a[t].enabled;
                  i && !r && e[t].disable(), !i && r && e[t].enable();
                });
              let f = a.direction && a.direction !== s.direction,
                m = s.loop && (a.slidesPerView !== s.slidesPerView || f),
                v = s.loop;
              f && i && e.changeDirection(), (0, o.u)(e.params, a);
              let g = e.params.enabled,
                w = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                h && !g ? e.disable() : !h && g && e.enable(),
                (e.currentBreakpoint = l),
                e.emit("_beforeBreakpoint", a),
                i &&
                  (m
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !v && w
                    ? (e.loopCreate(t), e.updateSlides())
                    : v && !w && e.loopDestroy()),
                e.emit("breakpoint", a);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let s = !1,
                r = (0, a.a)(),
                n = "window" === t ? r.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: n * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                let { point: n, value: a } = l[e];
                "window" === t
                  ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = n)
                  : a <= i.clientWidth && (s = n);
              }
              return s || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: s, device: r } = this,
                n = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((s) => {
                            e[s] && i.push(t + s);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: r.android },
                    { ios: r.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n), s.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        L = {};
      class _ {
        constructor() {
          let e, t;
          for (var i = arguments.length, s = Array(i), r = 0; r < i; r++)
            s[r] = arguments[r];
          1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
            t || (t = {}),
            (t = (0, o.u)({}, t)),
            e && !t.el && (t.el = e);
          let l = (0, a.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            l.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              l.querySelectorAll(t.el).forEach((i) => {
                let s = (0, o.u)({}, t, { el: i });
                e.push(new _(s));
              }),
              e
            );
          }
          let u = this;
          (u.__swiper__ = !0),
            (u.support = d()),
            (u.device = c({ userAgent: t.userAgent })),
            (u.browser =
              (n ||
                (n = (function () {
                  let e = (0, a.a)(),
                    t = c(),
                    i = !1;
                  function s() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (s()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, s] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && s < 2);
                    }
                  }
                  let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    n = s(),
                    l = n || (r && t.ios);
                  return {
                    isSafari: i || n,
                    needPerspectiveFix: i,
                    need3dFix: l,
                    isWebView: r,
                  };
                })()),
              n)),
            (u.eventsListeners = {}),
            (u.eventsAnyListeners = []),
            (u.modules = [...u.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              u.modules.push(...t.modules);
          let p = {};
          u.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: u,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    s = e[t];
                  if (
                    "object" != typeof s ||
                    null === s ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    "navigation" === t &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].prevEl &&
                      !i[t].nextEl &&
                      (i[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].el &&
                      (i[t].auto = !0),
                    !(t in i && "enabled" in s))
                  ) {
                    (0, o.u)(p, e);
                    return;
                  }
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    (0, o.u)(p, e);
                }),
              on: u.on.bind(u),
              once: u.once.bind(u),
              off: u.off.bind(u),
              emit: u.emit.bind(u),
            });
          });
          let h = (0, o.u)({}, O, p);
          return (
            (u.params = (0, o.u)({}, h, L, t)),
            (u.originalParams = (0, o.u)({}, u.params)),
            (u.passedParams = (0, o.u)({}, t)),
            u.params &&
              u.params.on &&
              Object.keys(u.params.on).forEach((e) => {
                u.on(e, u.params.on[e]);
              }),
            u.params && u.params.onAny && u.onAny(u.params.onAny),
            Object.assign(u, {
              enabled: u.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === u.params.direction,
              isVertical: () => "vertical" === u.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: u.params.allowSlideNext,
              allowSlidePrev: u.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: u.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: u.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            u.emit("_swiper"),
            u.params.init && u.init(),
            u
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            r = (0, o.h)(s[0]);
          return (0, o.h)(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            s = (this.maxTranslate() - i) * e + i;
          this.translateTo(s, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: s,
              slidesGrid: r,
              slidesSizesGrid: n,
              size: l,
              activeIndex: a,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = s[a] ? Math.ceil(s[a].swiperSlideSize) : 0;
            for (let i = a + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += Math.ceil(s[i].swiperSlideSize)),
                (o += 1),
                t > l && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (o += 1), t > l && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < s.length; e += 1)
              (t ? r[e] + n[e] - r[a] < l : r[e] - r[a] < l) && (o += 1);
          else for (let e = a - 1; e >= 0; e -= 1) r[a] - r[e] < l && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: s } = t;
          function r() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (s.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && h(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
          )
            r(), s.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
              t.isEnd &&
              !s.centeredSlides
            ) {
              let i =
                t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || r();
          }
          s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let s = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            r =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(s())
                : (0, o.e)(i, s())[0];
          return (
            !r &&
              t.params.createElements &&
              ((r = (0, o.c)("div", t.params.wrapperClass)),
              i.append(r),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                r.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: r,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : r,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() ||
                "rtl" === (0, o.o)(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() ||
                  "rtl" === (0, o.o)(i, "direction")),
              wrongRTL: "-webkit-box" === (0, o.o)(r, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? h(t, e)
                : e.addEventListener("load", (e) => {
                    h(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: s, el: r, wrapperEl: n, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r && "string" != typeof r && r.removeAttribute("style"),
                n && n.removeAttribute("style"),
                l &&
                  l.length &&
                  l.forEach((e) => {
                    e.classList.remove(
                      s.slideVisibleClass,
                      s.slideFullyVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (0, o.v)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.u)(L, e);
        }
        static get extendedDefaults() {
          return L;
        }
        static get defaults() {
          return O;
        }
        static installModule(e) {
          _.prototype.__modules__ || (_.prototype.__modules__ = []);
          let t = _.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => _.installModule(e))
              : _.installModule(e),
            _
          );
        }
      }
      Object.keys(k).forEach((e) => {
        Object.keys(k[e]).forEach((t) => {
          _.prototype[t] = k[e][t];
        });
      }),
        _.use([
          function (e) {
            let { swiper: t, on: i, emit: s } = e,
              r = (0, a.a)(),
              n = null,
              l = null,
              o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n = new ResizeObserver((e) => {
                    l = r.requestAnimationFrame(() => {
                      let { width: i, height: s } = t,
                        r = i,
                        n = s;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: s,
                          target: l,
                        } = e;
                        (l && l !== t.el) ||
                          ((r = s ? s.width : (i[0] || i).inlineSize),
                          (n = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (r !== i || n !== s) && o();
                    });
                  })).observe(t.el);
              },
              c = () => {
                l && r.cancelAnimationFrame(l),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
              },
              u = () => {
                t && !t.destroyed && t.initialized && s("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                d();
                return;
              }
              r.addEventListener("resize", o),
                r.addEventListener("orientationchange", u);
            }),
              i("destroy", () => {
                c(),
                  r.removeEventListener("resize", o),
                  r.removeEventListener("orientationchange", u);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: r } = e,
              n = [],
              l = (0, a.a)(),
              d = function (e, i) {
                void 0 === i && (i = {});
                let s = new (l.MutationObserver || l.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      r("observerUpdate", e[0]);
                      return;
                    }
                    let i = function () {
                      r("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame
                      ? l.requestAnimationFrame(i)
                      : l.setTimeout(i, 0);
                  }
                );
                s.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList: void 0 === i.childList || i.childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(s);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              s("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      let A = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function I(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function z(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : I(t[i]) && I(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : z(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function D(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function N(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function j(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function G(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let V = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function F(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function $(e, t) {
        return "undefined" == typeof window
          ? (0, l.useEffect)(e, t)
          : (0, l.useLayoutEffect)(e, t);
      }
      let R = (0, l.createContext)(null),
        H = (0, l.createContext)(null),
        W = (0, l.forwardRef)(function (e, t) {
          var i;
          let {
              className: s,
              tag: r = "div",
              wrapperTag: n = "div",
              children: a,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            c = !1,
            [u, p] = (0, l.useState)("swiper"),
            [h, f] = (0, l.useState)(null),
            [m, v] = (0, l.useState)(!1),
            g = (0, l.useRef)(!1),
            w = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            S = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            T = (0, l.useRef)(null),
            E = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            C = (0, l.useRef)(null),
            {
              params: P,
              passedParams: M,
              rest: k,
              events: L,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                s = {},
                r = {};
              z(i, O), (i._emitClasses = !0), (i.init = !1);
              let n = {},
                l = A.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((a) => {
                  void 0 !== e[a] &&
                    (l.indexOf(a) >= 0
                      ? I(e[a])
                        ? ((i[a] = {}),
                          (r[a] = {}),
                          z(i[a], e[a]),
                          z(r[a], e[a]))
                        : ((i[a] = e[a]), (r[a] = e[a]))
                      : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a]
                      ? t
                        ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                        : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (n[a] = e[a]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: r, rest: n, events: s }
              );
            })(d),
            { slides: R, slots: W } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                l.Children.toArray(e).forEach((e) => {
                  if (F(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let s = (function e(t) {
                      let i = [];
                      return (
                        l.Children.toArray(t).forEach((t) => {
                          F(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    s.length > 0
                      ? s.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(a),
            q = () => {
              v(!m);
            };
          Object.assign(P.on, {
            _containerClasses(e, t) {
              p(t);
            },
          });
          let Y = () => {
            Object.assign(P.on, L), (c = !0);
            let e = { ...P };
            if (
              (delete e.wrapperClass,
              (b.current = new _(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = R;
              let e = {
                cache: !1,
                slides: R,
                renderExternal: f,
                renderExternalUpdate: !1,
              };
              z(b.current.params.virtual, e),
                z(b.current.originalParams.virtual, e);
            }
          };
          w.current || Y(), b.current && b.current.on("_beforeBreakpoint", q);
          let X = () => {
              !c &&
                L &&
                b.current &&
                Object.keys(L).forEach((e) => {
                  b.current.on(e, L[e]);
                });
            },
            U = () => {
              L &&
                b.current &&
                Object.keys(L).forEach((e) => {
                  b.current.off(e, L[e]);
                });
            };
          return (
            (0, l.useEffect)(() => () => {
              b.current && b.current.off("_beforeBreakpoint", q);
            }),
            (0, l.useEffect)(() => {
              !g.current &&
                b.current &&
                (b.current.emitSlidesClasses(), (g.current = !0));
            }),
            $(() => {
              if ((t && (t.current = w.current), w.current))
                return (
                  b.current.destroyed && Y(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: s,
                      prevEl: r,
                      paginationEl: n,
                      scrollbarEl: l,
                      swiper: a,
                    } = e;
                    D(t) &&
                      s &&
                      r &&
                      ((a.params.navigation.nextEl = s),
                      (a.originalParams.navigation.nextEl = s),
                      (a.params.navigation.prevEl = r),
                      (a.originalParams.navigation.prevEl = r)),
                      N(t) &&
                        n &&
                        ((a.params.pagination.el = n),
                        (a.originalParams.pagination.el = n)),
                      j(t) &&
                        l &&
                        ((a.params.scrollbar.el = l),
                        (a.originalParams.scrollbar.el = l)),
                      a.init(i);
                  })(
                    {
                      el: w.current,
                      nextEl: T.current,
                      prevEl: E.current,
                      paginationEl: x.current,
                      scrollbarEl: C.current,
                      swiper: b.current,
                    },
                    P
                  ),
                  o && !b.current.destroyed && o(b.current),
                  () => {
                    b.current &&
                      !b.current.destroyed &&
                      b.current.destroy(!0, !1);
                  }
                );
            }, []),
            $(() => {
              X();
              let e = (function (e, t, i, s, r) {
                let n = [];
                if (!t) return n;
                let l = (e) => {
                  0 > n.indexOf(e) && n.push(e);
                };
                if (i && s) {
                  let e = s.map(r),
                    t = i.map(r);
                  e.join("") !== t.join("") && l("children"),
                    s.length !== i.length && l("children");
                }
                return (
                  A.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (I(e[i]) && I(t[i])) {
                          let s = Object.keys(e[i]),
                            r = Object.keys(t[i]);
                          s.length !== r.length
                            ? l(i)
                            : (s.forEach((s) => {
                                e[i][s] !== t[i][s] && l(i);
                              }),
                              r.forEach((s) => {
                                e[i][s] !== t[i][s] && l(i);
                              }));
                        } else e[i] !== t[i] && l(i);
                      }
                    }),
                  n
                );
              })(M, S.current, R, y.current, (e) => e.key);
              return (
                (S.current = M),
                (y.current = R),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      s,
                      r,
                      n,
                      l,
                      a,
                      o,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: u,
                        changedParams: p,
                        nextEl: h,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: v,
                      } = e,
                      g = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: w,
                        pagination: b,
                        navigation: S,
                        scrollbar: y,
                        virtual: T,
                        thumbs: E,
                      } = d;
                    p.includes("thumbs") &&
                      u.thumbs &&
                      u.thumbs.swiper &&
                      w.thumbs &&
                      !w.thumbs.swiper &&
                      (t = !0),
                      p.includes("controller") &&
                        u.controller &&
                        u.controller.control &&
                        w.controller &&
                        !w.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        u.pagination &&
                        (u.pagination.el || v) &&
                        (w.pagination || !1 === w.pagination) &&
                        b &&
                        !b.el &&
                        (s = !0),
                      p.includes("scrollbar") &&
                        u.scrollbar &&
                        (u.scrollbar.el || m) &&
                        (w.scrollbar || !1 === w.scrollbar) &&
                        y &&
                        !y.el &&
                        (r = !0),
                      p.includes("navigation") &&
                        u.navigation &&
                        (u.navigation.prevEl || f) &&
                        (u.navigation.nextEl || h) &&
                        (w.navigation || !1 === w.navigation) &&
                        S &&
                        !S.prevEl &&
                        !S.nextEl &&
                        (n = !0);
                    let x = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (w[e].prevEl = void 0),
                            (w[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (w[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    p.includes("loop") &&
                      d.isElement &&
                      (w.loop && !u.loop
                        ? (l = !0)
                        : !w.loop && u.loop
                        ? (a = !0)
                        : (o = !0)),
                      g.forEach((e) => {
                        if (I(w[e]) && I(u[e]))
                          Object.assign(w[e], u[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in u[e] &&
                              !u[e].enabled &&
                              x(e);
                        else {
                          let t = u[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && x(e)
                            : (w[e] = u[e]);
                        }
                      }),
                      g.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        w.controller &&
                        w.controller.control &&
                        (d.controller.control = w.controller.control),
                      p.includes("children") && c && T && w.virtual.enabled
                        ? ((T.slides = c), T.update(!0))
                        : p.includes("virtual") &&
                          T &&
                          w.virtual.enabled &&
                          (c && (T.slides = c), T.update(!0)),
                      p.includes("children") && c && w.loop && (o = !0),
                      t && E.init() && E.update(!0),
                      i && (d.controller.control = w.controller.control),
                      s &&
                        (d.isElement &&
                          (!v || "string" == typeof v) &&
                          ((v = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          v.part.add("pagination"),
                          d.el.appendChild(v)),
                        v && (w.pagination.el = v),
                        b.init(),
                        b.render(),
                        b.update()),
                      r &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (w.scrollbar.el = m),
                        y.init(),
                        y.updateSize(),
                        y.setTranslate()),
                      n &&
                        (d.isElement &&
                          ((h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (h.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            h.part.add("button-next"),
                            d.el.appendChild(h)),
                          (f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (f.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            f.part.add("button-prev"),
                            d.el.appendChild(f))),
                        h && (w.navigation.nextEl = h),
                        f && (w.navigation.prevEl = f),
                        S.init(),
                        S.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = u.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = u.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(u.direction, !1),
                      (l || o) && d.loopDestroy(),
                      (a || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: b.current,
                    slides: R,
                    passedParams: M,
                    changedParams: e,
                    nextEl: T.current,
                    prevEl: E.current,
                    scrollbarEl: C.current,
                    paginationEl: x.current,
                  }),
                () => {
                  U();
                }
              );
            }),
            $(() => {
              V(b.current);
            }, [h]),
            l.createElement(
              r,
              B({ ref: w, className: G(`${u}${s ? ` ${s}` : ""}`) }, k),
              l.createElement(
                H.Provider,
                { value: b.current },
                W["container-start"],
                l.createElement(
                  n,
                  {
                    className: (void 0 === (i = P.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  W["wrapper-start"],
                  P.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let s = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          r = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: n, to: a } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let e = o; e < d; e += 1)
                          e >= n && e <= a && c.push(t[s(e)]);
                        return c.map((t, i) =>
                          l.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(b.current, R, h)
                    : R.map((e, t) =>
                        l.cloneElement(e, {
                          swiper: b.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  W["wrapper-end"]
                ),
                D(P) &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("div", {
                      ref: E,
                      className: "swiper-button-prev",
                    }),
                    l.createElement("div", {
                      ref: T,
                      className: "swiper-button-next",
                    })
                  ),
                j(P) &&
                  l.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar",
                  }),
                N(P) &&
                  l.createElement("div", {
                    ref: x,
                    className: "swiper-pagination",
                  }),
                W["container-end"]
              )
            )
          );
        });
      W.displayName = "Swiper";
      let q = (0, l.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: s,
            className: r = "",
            swiper: n,
            zoom: a,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...u
          } = void 0 === e ? {} : e,
          p = (0, l.useRef)(null),
          [h, f] = (0, l.useState)("swiper-slide"),
          [m, v] = (0, l.useState)(!1);
        function g(e, t, i) {
          t === p.current && f(i);
        }
        $(() => {
          if (
            (void 0 !== c && (p.current.swiperSlideIndex = c),
            t && (t.current = p.current),
            p.current && n)
          ) {
            if (n.destroyed) {
              "swiper-slide" !== h && f("swiper-slide");
              return;
            }
            return (
              n.on("_slideClass", g),
              () => {
                n && n.off("_slideClass", g);
              }
            );
          }
        }),
          $(() => {
            n && p.current && !n.destroyed && f(n.getSlideClasses(p.current));
          }, [n]);
        let w = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0,
          },
          b = () => ("function" == typeof s ? s(w) : s);
        return l.createElement(
          i,
          B(
            {
              ref: p,
              className: G(`${h}${r ? ` ${r}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                v(!0);
              },
            },
            u
          ),
          a &&
            l.createElement(
              R.Provider,
              { value: w },
              l.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof a ? a : void 0,
                },
                b(),
                o &&
                  !m &&
                  l.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !a &&
            l.createElement(
              R.Provider,
              { value: w },
              b(),
              o &&
                !m &&
                l.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      q.displayName = "SwiperSlide";
    },
  },
]);
