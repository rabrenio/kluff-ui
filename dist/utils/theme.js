import { g as Te, c as H } from "../_commonjsHelpers-10dfc225.js";
import { createTheme as Or } from "@mui/material";
var L = { exports: {} };
L.exports;
(function(m, h) {
  var u = 200, G = "__lodash_hash_undefined__", Sr = 800, wr = 16, rr = 9007199254740991, tr = "[object Arguments]", Mr = "[object Array]", Pr = "[object AsyncFunction]", jr = "[object Boolean]", Ir = "[object Date]", Rr = "[object Error]", er = "[object Function]", zr = "[object GeneratorFunction]", Hr = "[object Map]", Lr = "[object Number]", Gr = "[object Null]", ar = "[object Object]", Ur = "[object Proxy]", Nr = "[object RegExp]", Wr = "[object Set]", $r = "[object String]", Kr = "[object Undefined]", qr = "[object WeakMap]", Vr = "[object ArrayBuffer]", Jr = "[object DataView]", Xr = "[object Float32Array]", Yr = "[object Float64Array]", Zr = "[object Int8Array]", Qr = "[object Int16Array]", rt = "[object Int32Array]", tt = "[object Uint8Array]", et = "[object Uint8ClampedArray]", at = "[object Uint16Array]", nt = "[object Uint32Array]", it = /[\\^$.*+?()[\]{}|]/g, ot = /^\[object .+?Constructor\]$/, dt = /^(?:0|[1-9]\d*)$/, f = {};
  f[Xr] = f[Yr] = f[Zr] = f[Qr] = f[rt] = f[tt] = f[et] = f[at] = f[nt] = !0, f[tr] = f[Mr] = f[Vr] = f[jr] = f[Jr] = f[Ir] = f[Rr] = f[er] = f[Hr] = f[Lr] = f[ar] = f[Nr] = f[Wr] = f[$r] = f[qr] = !1;
  var nr = typeof H == "object" && H && H.Object === Object && H, ct = typeof self == "object" && self && self.Object === Object && self, A = nr || ct || Function("return this")(), ir = h && !h.nodeType && h, E = ir && !0 && m && !m.nodeType && m, or = E && E.exports === ir, U = or && nr.process, dr = function() {
    try {
      var r = E && E.require && E.require("util").types;
      return r || U && U.binding && U.binding("util");
    } catch {
    }
  }(), cr = dr && dr.isTypedArray;
  function ft(r, t, e) {
    switch (e.length) {
      case 0:
        return r.call(t);
      case 1:
        return r.call(t, e[0]);
      case 2:
        return r.call(t, e[0], e[1]);
      case 3:
        return r.call(t, e[0], e[1], e[2]);
    }
    return r.apply(t, e);
  }
  function lt(r, t) {
    for (var e = -1, a = Array(r); ++e < r; )
      a[e] = t(e);
    return a;
  }
  function st(r) {
    return function(t) {
      return r(t);
    };
  }
  function ut(r, t) {
    return r == null ? void 0 : r[t];
  }
  function pt(r, t) {
    return function(e) {
      return r(t(e));
    };
  }
  var gt = Array.prototype, ht = Function.prototype, S = Object.prototype, N = A["__core-js_shared__"], w = ht.toString, F = S.hasOwnProperty, fr = function() {
    var r = /[^.]+$/.exec(N && N.keys && N.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }(), lr = S.toString, mt = w.call(Object), Ft = RegExp(
    "^" + w.call(F).replace(it, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), M = or ? A.Buffer : void 0, sr = A.Symbol, ur = A.Uint8Array, pr = M ? M.allocUnsafe : void 0, gr = pt(Object.getPrototypeOf, Object), hr = Object.create, yt = S.propertyIsEnumerable, bt = gt.splice, b = sr ? sr.toStringTag : void 0, P = function() {
    try {
      var r = K(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }(), Ct = M ? M.isBuffer : void 0, mr = Math.max, xt = Date.now, Fr = K(A, "Map"), D = K(Object, "create"), Tt = function() {
    function r() {
    }
    return function(t) {
      if (!x(t))
        return {};
      if (hr)
        return hr(t);
      r.prototype = t;
      var e = new r();
      return r.prototype = void 0, e;
    };
  }();
  function C(r) {
    var t = -1, e = r == null ? 0 : r.length;
    for (this.clear(); ++t < e; ) {
      var a = r[t];
      this.set(a[0], a[1]);
    }
  }
  function vt() {
    this.__data__ = D ? D(null) : {}, this.size = 0;
  }
  function kt(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  function _t(r) {
    var t = this.__data__;
    if (D) {
      var e = t[r];
      return e === G ? void 0 : e;
    }
    return F.call(t, r) ? t[r] : void 0;
  }
  function At(r) {
    var t = this.__data__;
    return D ? t[r] !== void 0 : F.call(t, r);
  }
  function Et(r, t) {
    var e = this.__data__;
    return this.size += this.has(r) ? 0 : 1, e[r] = D && t === void 0 ? G : t, this;
  }
  C.prototype.clear = vt, C.prototype.delete = kt, C.prototype.get = _t, C.prototype.has = At, C.prototype.set = Et;
  function y(r) {
    var t = -1, e = r == null ? 0 : r.length;
    for (this.clear(); ++t < e; ) {
      var a = r[t];
      this.set(a[0], a[1]);
    }
  }
  function Dt() {
    this.__data__ = [], this.size = 0;
  }
  function Bt(r) {
    var t = this.__data__, e = j(t, r);
    if (e < 0)
      return !1;
    var a = t.length - 1;
    return e == a ? t.pop() : bt.call(t, e, 1), --this.size, !0;
  }
  function Ot(r) {
    var t = this.__data__, e = j(t, r);
    return e < 0 ? void 0 : t[e][1];
  }
  function St(r) {
    return j(this.__data__, r) > -1;
  }
  function wt(r, t) {
    var e = this.__data__, a = j(e, r);
    return a < 0 ? (++this.size, e.push([r, t])) : e[a][1] = t, this;
  }
  y.prototype.clear = Dt, y.prototype.delete = Bt, y.prototype.get = Ot, y.prototype.has = St, y.prototype.set = wt;
  function T(r) {
    var t = -1, e = r == null ? 0 : r.length;
    for (this.clear(); ++t < e; ) {
      var a = r[t];
      this.set(a[0], a[1]);
    }
  }
  function Mt() {
    this.size = 0, this.__data__ = {
      hash: new C(),
      map: new (Fr || y)(),
      string: new C()
    };
  }
  function Pt(r) {
    var t = R(this, r).delete(r);
    return this.size -= t ? 1 : 0, t;
  }
  function jt(r) {
    return R(this, r).get(r);
  }
  function It(r) {
    return R(this, r).has(r);
  }
  function Rt(r, t) {
    var e = R(this, r), a = e.size;
    return e.set(r, t), this.size += e.size == a ? 0 : 1, this;
  }
  T.prototype.clear = Mt, T.prototype.delete = Pt, T.prototype.get = jt, T.prototype.has = It, T.prototype.set = Rt;
  function v(r) {
    var t = this.__data__ = new y(r);
    this.size = t.size;
  }
  function zt() {
    this.__data__ = new y(), this.size = 0;
  }
  function Ht(r) {
    var t = this.__data__, e = t.delete(r);
    return this.size = t.size, e;
  }
  function Lt(r) {
    return this.__data__.get(r);
  }
  function Gt(r) {
    return this.__data__.has(r);
  }
  function Ut(r, t) {
    var e = this.__data__;
    if (e instanceof y) {
      var a = e.__data__;
      if (!Fr || a.length < u - 1)
        return a.push([r, t]), this.size = ++e.size, this;
      e = this.__data__ = new T(a);
    }
    return e.set(r, t), this.size = e.size, this;
  }
  v.prototype.clear = zt, v.prototype.delete = Ht, v.prototype.get = Lt, v.prototype.has = Gt, v.prototype.set = Ut;
  function Nt(r, t) {
    var e = J(r), a = !e && V(r), o = !e && !a && Tr(r), c = !e && !a && !o && kr(r), l = e || a || o || c, i = l ? lt(r.length, String) : [], s = i.length;
    for (var g in r)
      (t || F.call(r, g)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
      (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      o && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      c && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
      Cr(g, s))) && i.push(g);
    return i;
  }
  function W(r, t, e) {
    (e !== void 0 && !z(r[t], e) || e === void 0 && !(t in r)) && $(r, t, e);
  }
  function Wt(r, t, e) {
    var a = r[t];
    (!(F.call(r, t) && z(a, e)) || e === void 0 && !(t in r)) && $(r, t, e);
  }
  function j(r, t) {
    for (var e = r.length; e--; )
      if (z(r[e][0], t))
        return e;
    return -1;
  }
  function $(r, t, e) {
    t == "__proto__" && P ? P(r, t, {
      configurable: !0,
      enumerable: !0,
      value: e,
      writable: !0
    }) : r[t] = e;
  }
  var $t = ne();
  function I(r) {
    return r == null ? r === void 0 ? Kr : Gr : b && b in Object(r) ? ie(r) : se(r);
  }
  function yr(r) {
    return B(r) && I(r) == tr;
  }
  function Kt(r) {
    if (!x(r) || fe(r))
      return !1;
    var t = Y(r) ? Ft : ot;
    return t.test(he(r));
  }
  function qt(r) {
    return B(r) && vr(r.length) && !!f[I(r)];
  }
  function Vt(r) {
    if (!x(r))
      return le(r);
    var t = xr(r), e = [];
    for (var a in r)
      a == "constructor" && (t || !F.call(r, a)) || e.push(a);
    return e;
  }
  function br(r, t, e, a, o) {
    r !== t && $t(t, function(c, l) {
      if (o || (o = new v()), x(c))
        Jt(r, t, l, e, br, a, o);
      else {
        var i = a ? a(q(r, l), c, l + "", r, t, o) : void 0;
        i === void 0 && (i = c), W(r, l, i);
      }
    }, _r);
  }
  function Jt(r, t, e, a, o, c, l) {
    var i = q(r, e), s = q(t, e), g = l.get(s);
    if (g) {
      W(r, e, g);
      return;
    }
    var p = c ? c(i, s, e + "", r, t, l) : void 0, O = p === void 0;
    if (O) {
      var Z = J(s), Q = !Z && Tr(s), Er = !Z && !Q && kr(s);
      p = s, Z || Q || Er ? J(i) ? p = i : me(i) ? p = te(i) : Q ? (O = !1, p = Zt(s, !0)) : Er ? (O = !1, p = re(s, !0)) : p = [] : Fe(s) || V(s) ? (p = i, V(i) ? p = ye(i) : (!x(i) || Y(i)) && (p = oe(s))) : O = !1;
    }
    O && (l.set(s, p), o(p, s, a, c, l), l.delete(s)), W(r, e, p);
  }
  function Xt(r, t) {
    return pe(ue(r, t, Ar), r + "");
  }
  var Yt = P ? function(r, t) {
    return P(r, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Ce(t),
      writable: !0
    });
  } : Ar;
  function Zt(r, t) {
    if (t)
      return r.slice();
    var e = r.length, a = pr ? pr(e) : new r.constructor(e);
    return r.copy(a), a;
  }
  function Qt(r) {
    var t = new r.constructor(r.byteLength);
    return new ur(t).set(new ur(r)), t;
  }
  function re(r, t) {
    var e = t ? Qt(r.buffer) : r.buffer;
    return new r.constructor(e, r.byteOffset, r.length);
  }
  function te(r, t) {
    var e = -1, a = r.length;
    for (t || (t = Array(a)); ++e < a; )
      t[e] = r[e];
    return t;
  }
  function ee(r, t, e, a) {
    var o = !e;
    e || (e = {});
    for (var c = -1, l = t.length; ++c < l; ) {
      var i = t[c], s = a ? a(e[i], r[i], i, e, r) : void 0;
      s === void 0 && (s = r[i]), o ? $(e, i, s) : Wt(e, i, s);
    }
    return e;
  }
  function ae(r) {
    return Xt(function(t, e) {
      var a = -1, o = e.length, c = o > 1 ? e[o - 1] : void 0, l = o > 2 ? e[2] : void 0;
      for (c = r.length > 3 && typeof c == "function" ? (o--, c) : void 0, l && de(e[0], e[1], l) && (c = o < 3 ? void 0 : c, o = 1), t = Object(t); ++a < o; ) {
        var i = e[a];
        i && r(t, i, a, c);
      }
      return t;
    });
  }
  function ne(r) {
    return function(t, e, a) {
      for (var o = -1, c = Object(t), l = a(t), i = l.length; i--; ) {
        var s = l[r ? i : ++o];
        if (e(c[s], s, c) === !1)
          break;
      }
      return t;
    };
  }
  function R(r, t) {
    var e = r.__data__;
    return ce(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
  }
  function K(r, t) {
    var e = ut(r, t);
    return Kt(e) ? e : void 0;
  }
  function ie(r) {
    var t = F.call(r, b), e = r[b];
    try {
      r[b] = void 0;
      var a = !0;
    } catch {
    }
    var o = lr.call(r);
    return a && (t ? r[b] = e : delete r[b]), o;
  }
  function oe(r) {
    return typeof r.constructor == "function" && !xr(r) ? Tt(gr(r)) : {};
  }
  function Cr(r, t) {
    var e = typeof r;
    return t = t ?? rr, !!t && (e == "number" || e != "symbol" && dt.test(r)) && r > -1 && r % 1 == 0 && r < t;
  }
  function de(r, t, e) {
    if (!x(e))
      return !1;
    var a = typeof t;
    return (a == "number" ? X(e) && Cr(t, e.length) : a == "string" && t in e) ? z(e[t], r) : !1;
  }
  function ce(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  function fe(r) {
    return !!fr && fr in r;
  }
  function xr(r) {
    var t = r && r.constructor, e = typeof t == "function" && t.prototype || S;
    return r === e;
  }
  function le(r) {
    var t = [];
    if (r != null)
      for (var e in Object(r))
        t.push(e);
    return t;
  }
  function se(r) {
    return lr.call(r);
  }
  function ue(r, t, e) {
    return t = mr(t === void 0 ? r.length - 1 : t, 0), function() {
      for (var a = arguments, o = -1, c = mr(a.length - t, 0), l = Array(c); ++o < c; )
        l[o] = a[t + o];
      o = -1;
      for (var i = Array(t + 1); ++o < t; )
        i[o] = a[o];
      return i[t] = e(l), ft(r, this, i);
    };
  }
  function q(r, t) {
    if (!(t === "constructor" && typeof r[t] == "function") && t != "__proto__")
      return r[t];
  }
  var pe = ge(Yt);
  function ge(r) {
    var t = 0, e = 0;
    return function() {
      var a = xt(), o = wr - (a - e);
      if (e = a, o > 0) {
        if (++t >= Sr)
          return arguments[0];
      } else
        t = 0;
      return r.apply(void 0, arguments);
    };
  }
  function he(r) {
    if (r != null) {
      try {
        return w.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  function z(r, t) {
    return r === t || r !== r && t !== t;
  }
  var V = yr(function() {
    return arguments;
  }()) ? yr : function(r) {
    return B(r) && F.call(r, "callee") && !yt.call(r, "callee");
  }, J = Array.isArray;
  function X(r) {
    return r != null && vr(r.length) && !Y(r);
  }
  function me(r) {
    return B(r) && X(r);
  }
  var Tr = Ct || xe;
  function Y(r) {
    if (!x(r))
      return !1;
    var t = I(r);
    return t == er || t == zr || t == Pr || t == Ur;
  }
  function vr(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= rr;
  }
  function x(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  function B(r) {
    return r != null && typeof r == "object";
  }
  function Fe(r) {
    if (!B(r) || I(r) != ar)
      return !1;
    var t = gr(r);
    if (t === null)
      return !0;
    var e = F.call(t, "constructor") && t.constructor;
    return typeof e == "function" && e instanceof e && w.call(e) == mt;
  }
  var kr = cr ? st(cr) : qt;
  function ye(r) {
    return ee(r, _r(r));
  }
  function _r(r) {
    return X(r) ? Nt(r, !0) : Vt(r);
  }
  var be = ae(function(r, t, e) {
    br(r, t, e);
  });
  function Ce(r) {
    return function() {
      return r;
    };
  }
  function Ar(r) {
    return r;
  }
  function xe() {
    return !1;
  }
  m.exports = be;
})(L, L.exports);
var ve = L.exports;
const Dr = /* @__PURE__ */ Te(ve), k = {
  50: "#e5e6e8",
  100: "#bec1c5",
  200: "#92979f",
  300: "#666d78",
  400: "#464e5b",
  500: "#252f3e",
  600: "#212a38",
  700: "#1b2330",
  800: "#161d28",
  900: "#0d121b",
  A100: "#5d8eff",
  A200: "#2a6aff",
  A400: "#004af6",
  A700: "#0042dd",
  contrastDefaultColor: "light"
}, _ = {
  50: "#e4fafd",
  100: "#bdf2fa",
  200: "#91e9f7",
  300: "#64e0f3",
  400: "#43daf1",
  500: "#22d3ee",
  600: "#1eceec",
  700: "#19c8e9",
  800: "#14c2e7",
  900: "#0cb7e2",
  A100: "#ffffff",
  A200: "#daf7ff",
  A400: "#a7ecff",
  A700: "#8de6ff",
  contrastDefaultColor: "dark"
}, ke = {
  50: "#eceff1",
  100: "#cfd8dc",
  200: "#b0bec5",
  300: "#90a4ae",
  400: "#78909c",
  500: "#607d8b",
  600: "#546e7a",
  700: "#455a64",
  800: "#37474f",
  900: "#263238",
  A100: "#cfd8dc",
  A200: "#b0bec5",
  A400: "#78909c",
  A700: "#455a64"
}, Br = ke, d = {
  primary: "rgb(17, 24, 39)",
  secondary: "rgb(107, 114, 128)",
  disabled: "rgb(149, 156, 169)"
}, n = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(148, 163, 184)",
  disabled: "rgb(156, 163, 175)"
}, _e = {
  default: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)"
      },
      primary: {
        light: "#64748b",
        main: "#1e293b",
        dark: "#0f172a",
        contrastText: n.primary
      },
      secondary: {
        light: "#818cf8",
        main: "#4f46e5",
        dark: "#3730a3",
        contrastText: n.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#f1f5f9"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  defaultDark: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)"
      },
      primary: {
        light: "#64748b",
        main: "#334155",
        dark: "#0f172a",
        contrastText: n.primary
      },
      secondary: {
        light: "#818cf8",
        main: "#4f46e5",
        dark: "#3730a3",
        contrastText: n.primary
      },
      background: {
        paper: "#fff",
        default: "#111827"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  legacy: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)"
      },
      primary: {
        light: k[200],
        main: k[500],
        dark: k[800],
        contrastText: n.primary
      },
      secondary: {
        light: _[100],
        main: _[500],
        dark: _[900],
        contrastText: d.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#f6f7f9"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light1: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#b3d1d1",
        main: "#006565",
        dark: "#003737",
        contrastText: n.primary
      },
      secondary: {
        light: "#ffecc0",
        main: "#FFBE2C",
        dark: "#ff9910",
        contrastText: d.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#F0F7F7"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light2: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#fdf3da",
        main: "#f8d683",
        dark: "#f3bc53",
        contrastText: d.primary
      },
      secondary: {
        light: "#FADCB3",
        main: "#F3B25F",
        dark: "#ec9339",
        contrastText: d.primary
      },
      background: {
        paper: "#FAFBFD",
        default: "#FFFFFF"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light3: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#D9C8CE",
        main: "#80485B",
        dark: "#50212F",
        contrastText: n.primary
      },
      secondary: {
        light: "#FFE3BF",
        main: "#FFB049",
        dark: "#FF8619",
        contrastText: d.primary
      },
      background: {
        paper: "#FFF0DF",
        default: "#FAFAFE"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light4: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#CDCCE8",
        main: "#5854B1",
        dark: "#2D2988",
        contrastText: n.primary
      },
      secondary: {
        light: "#F8EBF2",
        main: "#E7BDD3",
        dark: "#D798B7",
        contrastText: d.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#F6F7FB"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light5: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#C2C7F1",
        main: "#3543D0",
        dark: "#161EB3",
        contrastText: n.primary
      },
      secondary: {
        light: "#B3F1FE",
        main: "#00CFFD",
        dark: "#00B2FC",
        contrastText: d.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#F7FAFF"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light6: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#BBE2DA",
        main: "#1B9E85",
        dark: "#087055",
        contrastText: n.primary
      },
      secondary: {
        light: "#FFD0C1",
        main: "#FF6231",
        dark: "#FF3413",
        contrastText: n.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#F2F8F1"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light7: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#BFC4E6",
        main: "#2A3BAB",
        dark: "#0F1980",
        contrastText: n.primary
      },
      secondary: {
        light: "#C2ECF0",
        main: "#33C1CD",
        dark: "#149EAE",
        contrastText: d.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#EDF0F6"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light8: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#D2EFF2",
        main: "#68C8D5",
        dark: "#3AA7BA",
        contrastText: d.primary
      },
      secondary: {
        light: "#FFF2C6",
        main: "#FED441",
        dark: "#FDB91C",
        contrastText: d.primary
      },
      background: {
        paper: "#FAF6F3",
        default: "#FFFFFF"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light9: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#D3C0CD",
        main: "#6B2C57",
        dark: "#3C102C",
        contrastText: n.primary
      },
      secondary: {
        light: "#FDEAC9",
        main: "#F9B84B",
        dark: "#F59123",
        contrastText: d.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#FAFAFE"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light10: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#C6C9CD",
        main: "#404B57",
        dark: "#1C232C",
        contrastText: n.primary
      },
      secondary: {
        light: "#FEEDC7",
        main: "#FCC344",
        dark: "#FAA11F",
        contrastText: d.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#F5F4F6"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  light11: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#C4C4C4",
        main: "#3A3A3A",
        dark: "#181818",
        contrastText: n.primary
      },
      secondary: {
        light: "#EFEFED",
        main: "#CBCAC3",
        dark: "#ACABA1",
        contrastText: d.primary
      },
      background: {
        paper: "#EFEEE7",
        default: "#FAF8F2"
      },
      error: {
        light: "#F7EAEA",
        main: "#EBCECE",
        dark: "#E3B9B9"
      }
    }
  },
  light12: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: d,
      primary: {
        light: "#FFFAF6",
        main: "#FFEDE2",
        dark: "#FFE0CF",
        contrastText: d.primary
      },
      secondary: {
        light: "#DBD8F7",
        main: "#887CE3",
        dark: "#584CD0",
        contrastText: n.primary
      },
      background: {
        paper: "#FFFFFF",
        default: "#FCF8F5"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#C2C2C3",
        main: "#323338",
        dark: "#131417",
        contrastText: n.primary
      },
      secondary: {
        light: "#B8E1D9",
        main: "#129B7F",
        dark: "#056D4F",
        contrastText: n.primary
      },
      background: {
        paper: "#262526",
        default: "#1E1D1E"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#C9CACE",
        main: "#4B4F5A",
        dark: "#23262E",
        contrastText: n.primary
      },
      secondary: {
        light: "#F8F5F2",
        main: "#E6DED5",
        dark: "#D5C8BA",
        contrastText: d.primary
      },
      background: {
        paper: "#31343E",
        default: "#2A2D35"
      },
      error: {
        light: "#F7EAEA",
        main: "#EBCECE",
        dark: "#E3B9B9"
      }
    }
  },
  dark3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#C2C8D2",
        main: "#354968",
        dark: "#16213A",
        contrastText: n.primary
      },
      secondary: {
        light: "#F4CFCA",
        main: "#D55847",
        dark: "#C03325",
        contrastText: n.primary
      },
      background: {
        paper: "#23354E",
        default: "#1B2A3F"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark4: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#CECADF",
        main: "#5A4E93",
        dark: "#2E2564",
        contrastText: n.primary
      },
      secondary: {
        light: "#B3EBD6",
        main: "#00BC77",
        dark: "#009747",
        contrastText: n.primary
      },
      background: {
        paper: "#22184B",
        default: "#180F3D"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark5: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#CCD7E2",
        main: "#56789D",
        dark: "#2B486F",
        contrastText: n.primary
      },
      secondary: {
        light: "#D7D3ED",
        main: "#796CC4",
        dark: "#493DA2",
        contrastText: n.primary
      },
      background: {
        paper: "#465261",
        default: "#232931"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark6: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#FFC7CE",
        main: "#FF445D",
        dark: "#FF1F30",
        contrastText: n.primary
      },
      secondary: {
        light: "#B4E3FB",
        main: "#05A2F3",
        dark: "#0175EA",
        contrastText: n.primary
      },
      background: {
        paper: "#2F3438",
        default: "#25292E"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark7: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "FFECC5",
        main: "#FEBE3E",
        dark: "#FD991B",
        contrastText: d.primary
      },
      secondary: {
        light: "#FFC8C7",
        main: "#FE4644",
        dark: "#FD201F",
        contrastText: d.primary
      },
      background: {
        paper: "#2A2E32",
        default: "#212529"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark8: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#BEBFC8",
        main: "#252949",
        dark: "#0D0F21",
        contrastText: n.primary
      },
      secondary: {
        light: "#CBD7FE",
        main: "#5079FC",
        dark: "#2749FA",
        contrastText: n.primary
      },
      background: {
        paper: "#2D3159",
        default: "#202441"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark9: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#BCC8CD",
        main: "#204657",
        dark: "#0B202C",
        contrastText: n.primary
      },
      secondary: {
        light: "#B3EBC5",
        main: "#00BD3E",
        dark: "#00981B",
        contrastText: n.primary
      },
      background: {
        paper: "#1C1E27",
        default: "#15171E"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark10: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#C3C2D2",
        main: "#36336A",
        dark: "#16143C",
        contrastText: n.primary
      },
      secondary: {
        light: "#D6CEFC",
        main: "#765CF5",
        dark: "#4630EE",
        contrastText: n.primary
      },
      background: {
        paper: "#2D2A5D",
        default: "#26244E"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark11: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#BFB7BF",
        main: "#2A0F29",
        dark: "#0F040F",
        contrastText: n.primary
      },
      secondary: {
        light: "#D9B9C3",
        main: "#801737",
        dark: "#500716",
        contrastText: n.primary
      },
      background: {
        paper: "#200D1F",
        default: "#2D132C"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  dark12: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: "#CCC3C8",
        main: "#543847",
        dark: "#291720",
        contrastText: n.primary
      },
      secondary: {
        light: "#DFB8BD",
        main: "#BE717A",
        dark: "#99424A",
        contrastText: d.primary
      },
      background: {
        paper: "#4D4351",
        default: "#27141F"
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  },
  greyDark: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: n,
      primary: {
        light: k[200],
        main: k[700],
        dark: k[800],
        contrastText: n.primary
      },
      secondary: {
        light: _[100],
        main: _[500],
        dark: _[900],
        contrastText: d.primary
      },
      background: {
        paper: Br[700],
        default: Br[900]
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  }
}, Ae = {
  typography: {
    fontFamily: [
      "Inter var",
      "Roboto",
      '"Helvetica"',
      "Arial",
      "sans-serif"
    ].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: !0
      },
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    },
    MuiLoadingButton: {
      defaultProps: {
        size: "small",
        variant: "contained"
      },
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "contained"
      },
      styleOverrides: {
        root: {
          textTransform: "none"
        },
        sizeMedium: {
          height: 40,
          minHeight: 40,
          maxHeight: 40
        },
        contained: {
          boxShadow: "none",
          "&:hover, &:focus": {
            boxShadow: "none"
          }
        }
      }
    },
    MuiButtonGroup: {
      defaultProps: {
        size: "small",
        variant: "contained"
      },
      styleOverrides: {
        root: ({ theme: m }) => ({
          boxShadow: "none",
          "& > :first-child": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          "& > :last-child": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          "& > :not(:last-child)": {
            borderRight: `1px solid ${m.palette.primary.dark}`
          },
          "& > :not(:first-child):not(:last-child)": {
            borderRadius: 0
          }
        })
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        },
        rounded: {
          borderRadius: 4
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 8
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiInputLabel: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiSelect: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiOutlinedInput: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          minHeight: 40,
          lineHeight: 1
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          "&:before, &:after": {
            display: "none"
          }
        }
      }
    },
    MuiSlider: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiCheckbox: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiRadio: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { color: "text.secondary" },
          style: {
            color: "text.secondary"
          }
        }
      ]
    }
  }
}, Ee = {
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    body1: {
      fontSize: "1.4rem"
    },
    body2: {
      fontSize: "1.4rem"
    }
  }
};
function De(m) {
  const h = Or(m);
  return {
    border: (u = 1) => ({
      borderWidth: u,
      borderStyle: "solid",
      borderColor: h.palette.divider
    }),
    borderLeft: (u = 1) => ({
      borderLeftWidth: u,
      borderStyle: "solid",
      borderColor: h.palette.divider
    }),
    borderRight: (u = 1) => ({
      borderRightWidth: u,
      borderStyle: "solid",
      borderColor: h.palette.divider
    }),
    borderTop: (u = 1) => ({
      borderTopWidth: u,
      borderStyle: "solid",
      borderColor: h.palette.divider
    }),
    borderBottom: (u = 1) => ({
      borderBottomWidth: u,
      borderStyle: "solid",
      borderColor: h.palette.divider
    })
  };
}
function Se(m = "dark", h = "ltr") {
  const u = Dr(
    {},
    Ae,
    _e[m],
    Ee
  );
  return Or(
    Dr({}, u, {
      mixins: De(u),
      direction: h
    })
  );
}
export {
  Se as default
};
//# sourceMappingURL=theme.js.map
