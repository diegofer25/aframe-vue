(function(e) {
  function t(t) {
    for (
      var n, s, a = t[0], u = t[1], c = t[2], p = 0, f = [];
      p < a.length;
      p++
    )
      (s = a[p]), r[s] && f.push(r[s][0]), (r[s] = 0);
    for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
    l && l(t);
    while (f.length) f.shift()();
    return i.push.apply(i, c || []), o();
  }
  function o() {
    for (var e, t = 0; t < i.length; t++) {
      for (var o = i[t], n = !0, a = 1; a < o.length; a++) {
        var u = o[a];
        0 !== r[u] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = s((s.s = o[0]))));
    }
    return e;
  }
  var n = {},
    r = { app: 0 },
    i = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, o) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (s.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (s.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            o,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return o;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/");
  var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var c = 0; c < a.length; c++) t(a[c]);
  var l = u;
  i.push([0, "chunk-vendors"]), o();
})({
  0: function(e, t, o) {
    e.exports = o("56d7");
  },
  "56d7": function(e, t, o) {
    "use strict";
    o.r(t);
    o("cadf"), o("551c"), o("f751"), o("097d");
    var n = o("2b0e"),
      r = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("div", { attrs: { id: "app" } }, [o("router-view")], 1);
      },
      i = [],
      s = o("2877"),
      a = {},
      u = Object(s["a"])(a, r, i, !1, null, null, null),
      c = u.exports,
      l = o("8c4f"),
      p = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("div", { staticClass: "home" }, [
          o(
            "ul",
            e._l(e.lessons, function(t) {
              return o(
                "li",
                { key: t },
                [
                  o("router-link", {
                    attrs: { to: t },
                    domProps: { textContent: e._s(t) }
                  })
                ],
                1
              );
            }),
            0
          )
        ]);
      },
      f = [],
      d = {
        name: "home",
        data: function() {
          return { lessons: ["basic-scene"] };
        }
      },
      m = d,
      v = Object(s["a"])(m, p, f, !1, null, null, null),
      b = v.exports,
      h = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "div",
          { staticClass: "main-scene" },
          [
            o(
              "a-scene",
              [
                o("a-assets", [
                  o("img", {
                    attrs: {
                      id: "box-texture",
                      src: "https://i.imgur.com/mYmmbrp.jpg"
                    }
                  }),
                  o("img", {
                    attrs: {
                      id: "sky-texture",
                      src:
                        "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
                    }
                  }),
                  o("img", {
                    attrs: {
                      id: "ground-texture",
                      src: "https://cdn.aframe.io/a-painter/images/floor.jpg"
                    }
                  })
                ]),
                o("va-box", { attrs: { options: e.boxOptions } }),
                o("a-sky", { attrs: { src: "#sky-texture" } }),
                o("va-plane", { attrs: { options: e.planeOptions } }),
                o("va-light", { attrs: { options: e.lightOptions } }),
                o("va-sound", { attrs: { options: e.soundOptions } }),
                o("a-entity", {
                  attrs: {
                    text: "value: Hello, A-Frame!; color: #BBB",
                    position: "-0 2 -5",
                    scale: "10 10 10"
                  }
                }),
                o("a-camera", [o("a-cursor", { attrs: { color: "white" } })], 1)
              ],
              1
            )
          ],
          1
        );
      },
      g = [],
      y = o("bd86"),
      x = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("a-box", {
          ref: "a-box",
          attrs: {
            color: e.options.color,
            position: e.options.position,
            rotation: e.options.rotation,
            scale: e.options.scale,
            src: e.options.src,
            animation: e.options.animation,
            animation__mouseenter: e.options["animation__mouseenter"],
            animation__mouseleave: e.options["animation__mouseleave"]
          },
          on: {
            mouseenter: function(t) {
              var o = t.target;
              return e.$emit("mouseenter", o.object3D);
            },
            mouseleave: function(t) {
              var o = t.target;
              return e.$emit("mouseleave", o.object3D);
            }
          }
        });
      },
      _ = [],
      j = {
        name: "av-box",
        props: {
          options: {
            type: Object,
            default: function() {
              return {};
            },
            required: !0
          },
          mouseenter: { type: Function, default: function() {} },
          mouseleave: { type: Function, default: function() {} }
        },
        mounted: function() {
          var e = this;
          e.$nextTick(function() {
            e.mouseenter &&
              e.$refs["a-box"].addEventListener("mouseenter", function(t) {
                var o = t.target;
                e.mouseenter(o.object3D);
              }),
              e.mouseleave &&
                e.$refs["a-box"].addEventListener("mouseleave", function(t) {
                  var o = t.target;
                  e.mouseleave(o.object3D);
                });
          });
        }
      },
      O = j,
      w = Object(s["a"])(O, x, _, !1, null, null, null),
      k = w.exports,
      $ = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("a-plane", {
          attrs: {
            src: e.options.src,
            rotation: e.options.rotation,
            width: e.options.width,
            height: e.options.height,
            repeat: e.options.repeat
          }
        });
      },
      E = [],
      P = {
        name: "va-plane",
        props: {
          options: {
            type: Object,
            default: function() {
              return {};
            },
            required: !0
          }
        }
      },
      S = P,
      q = Object(s["a"])(S, $, E, !1, null, null, null),
      B = q.exports,
      D = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("a-light", {
          attrs: {
            type: e.options.type,
            intensity: e.options.intensity,
            position: e.options.position,
            color: e.options.color
          }
        });
      },
      F = [],
      A = {
        name: "va-light",
        props: {
          options: {
            type: Object,
            default: function() {
              return {};
            },
            required: !0
          }
        }
      },
      C = A,
      M = Object(s["a"])(C, D, F, !1, null, null, null),
      T = M.exports,
      L = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("a-sound", {
          attrs: {
            src: "src: url(" + e.options.src + ")",
            autoplay: !!e.options.autoplay,
            loop: !!e.options.loop,
            position: e.options.position,
            volume: e.options.volume || 1
          }
        });
      },
      N = [],
      z = {
        name: "va-sound",
        props: {
          options: {
            type: Object,
            default: function() {
              return {};
            },
            required: !0
          }
        }
      },
      J = z,
      H = Object(s["a"])(J, L, N, !1, null, null, null),
      Y = H.exports,
      G = {
        name: "main-scene",
        components: { vaBox: k, vaPlane: B, vaLight: T, vaSound: Y },
        data: function() {
          var e;
          return {
            boxOptions: ((e = {
              src: "#box-texture",
              position: "0 2 -5",
              rotation: "0 45 45",
              scale: "2 2 2",
              animation: {
                property: "object3D.position.y",
                to: 2.2,
                dir: "alternate",
                dur: 2e3,
                loop: !0
              }
            }),
            Object(y["a"])(e, "animation__mouseenter", {
              property: "scale",
              to: "2.3 2.3 2.3",
              dur: 500,
              startEvents: "mouseenter"
            }),
            Object(y["a"])(e, "animation__mouseleave", {
              property: "scale",
              to: "2 2 2",
              dur: 300,
              startEvents: "mouseleave"
            }),
            e),
            planeOptions: {
              src: "#ground-texture",
              rotation: "-90 0 0",
              width: 30,
              height: 30,
              repeat: "10 10"
            },
            lightOptions: { type: "point", intensity: 1, position: "2 4 4" },
            soundOptions: {
              src: "/assets/sounds/backgroundnoise.wav",
              autoplay: !0,
              position: "-3 1 -4",
              loop: !0
            }
          };
        }
      },
      I = G,
      K = Object(s["a"])(I, h, g, !1, null, "4c9dec1e", null),
      Q = K.exports;
    n["a"].use(l["a"]);
    var R = new l["a"]({
        mode: "history",
        base: "/",
        routes: [
          { path: "/", name: "home", component: b },
          { path: "/basic-scene", name: "basic-scene", component: Q }
        ]
      }),
      U = o("2f62");
    n["a"].use(U["a"]);
    var V = new U["a"].Store({ state: {}, mutations: {}, actions: {} }),
      W = o("9483");
    Object(W["a"])("".concat("/", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(e) {
        console.error("Error during service worker registration:", e);
      }
    });
    var X = function(e, t, o) {
        return void 0 !== e && void 0 !== t && void 0 !== o
          ? { x: e, y: t, z: o }
          : { x: e, y: t };
      },
      Z = function(e) {
        e.prototype.$xyz = X;
      };
    n["a"].use(Z),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        router: R,
        store: V,
        render: function(e) {
          return e(c);
        }
      }).$mount("#app");
  }
});
//# sourceMappingURL=app.0385768b.js.map
