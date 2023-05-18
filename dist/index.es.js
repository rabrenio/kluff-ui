import ue, { memo as Mo, useState as nt, useRef as er, useMemo as zn, useEffect as et, useCallback as Vt, useLayoutEffect as Io } from "react";
import { LoadingButton as No } from "@mui/lab";
import { Dialog as Bo, DialogTitle as Lo, DialogContent as zo, DialogContentText as Uo, DialogActions as Wo, Button as Yo, IconButton as Go, InputLabel as Ko, Popover as Vo, CircularProgress as Ho, FormControlLabel as qo, Radio as Jo, FormControl as Xo, FormLabel as Zo, RadioGroup as Qo, Box as ea, createTheme as Un } from "@mui/material";
import { Link as ra } from "react-router-dom";
import { ArrowBack as ta } from "@mui/icons-material";
import { DataGrid as na } from "@mui/x-data-grid";
import { generateUtilityClass as oa } from "@mui/base";
import aa from "@emotion/styled";
import "@emotion/react";
var Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zt = { exports: {} }, Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function ia() {
  if (ln)
    return Sr;
  ln = 1;
  var e = ue, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, d, p) {
    var g, _ = {}, h = null, F = null;
    p !== void 0 && (h = "" + p), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (g in d)
      n.call(d, g) && !s.hasOwnProperty(g) && (_[g] = d[g]);
    if (l && l.defaultProps)
      for (g in d = l.defaultProps, d)
        _[g] === void 0 && (_[g] = d[g]);
    return { $$typeof: r, type: l, key: h, ref: F, props: _, _owner: a.current };
  }
  return Sr.Fragment = t, Sr.jsx = u, Sr.jsxs = u, Sr;
}
var Fr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function sa() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ue, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), A = Symbol.iterator, v = "@@iterator";
    function m(i) {
      if (i === null || typeof i != "object")
        return null;
      var y = A && i[A] || i[v];
      return typeof y == "function" ? y : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(i) {
      {
        for (var y = arguments.length, T = new Array(y > 1 ? y - 1 : 0), $ = 1; $ < y; $++)
          T[$ - 1] = arguments[$];
        Y("error", i, T);
      }
    }
    function Y(i, y, T) {
      {
        var $ = R.ReactDebugCurrentFrame, J = $.getStackAddendum();
        J !== "" && (y += "%s", T = T.concat([J]));
        var V = T.map(function(G) {
          return String(G);
        });
        V.unshift("Warning: " + y), Function.prototype.apply.call(console[i], console, V);
      }
    }
    var L = !1, b = !1, ge = !1, Te = !1, Pe = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function q(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === s || Pe || i === a || i === p || i === g || Te || i === F || L || b || ge || typeof i == "object" && i !== null && (i.$$typeof === h || i.$$typeof === _ || i.$$typeof === u || i.$$typeof === l || i.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Ce || i.getModuleId !== void 0));
    }
    function ye(i, y, T) {
      var $ = i.displayName;
      if ($)
        return $;
      var J = y.displayName || y.name || "";
      return J !== "" ? T + "(" + J + ")" : T;
    }
    function Re(i) {
      return i.displayName || "Context";
    }
    function me(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var y = i;
            return Re(y) + ".Consumer";
          case u:
            var T = i;
            return Re(T._context) + ".Provider";
          case d:
            return ye(i, i.render, "ForwardRef");
          case _:
            var $ = i.displayName || null;
            return $ !== null ? $ : me(i.type) || "Memo";
          case h: {
            var J = i, V = J._payload, G = J._init;
            try {
              return me(G(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var he = Object.assign, ve = 0, be, Oe, $e, Me, E, C, B;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function D() {
      {
        if (ve === 0) {
          be = console.log, Oe = console.info, $e = console.warn, Me = console.error, E = console.group, C = console.groupCollapsed, B = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ve++;
      }
    }
    function z() {
      {
        if (ve--, ve === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: he({}, i, {
              value: be
            }),
            info: he({}, i, {
              value: Oe
            }),
            warn: he({}, i, {
              value: $e
            }),
            error: he({}, i, {
              value: Me
            }),
            group: he({}, i, {
              value: E
            }),
            groupCollapsed: he({}, i, {
              value: C
            }),
            groupEnd: he({}, i, {
              value: B
            })
          });
        }
        ve < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = R.ReactCurrentDispatcher, j;
    function M(i, y, T) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (J) {
            var $ = J.stack.trim().match(/\n( *(at )?)/);
            j = $ && $[1] || "";
          }
        return `
` + j + i;
      }
    }
    var U = !1, N;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      N = new pe();
    }
    function x(i, y) {
      if (!i || U)
        return "";
      {
        var T = N.get(i);
        if (T !== void 0)
          return T;
      }
      var $;
      U = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = P.current, P.current = null, D();
      try {
        if (y) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Fe) {
              $ = Fe;
            }
            Reflect.construct(i, [], G);
          } else {
            try {
              G.call();
            } catch (Fe) {
              $ = Fe;
            }
            i.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            $ = Fe;
          }
          i();
        }
      } catch (Fe) {
        if (Fe && $ && typeof Fe.stack == "string") {
          for (var W = Fe.stack.split(`
`), Ee = $.stack.split(`
`), ce = W.length - 1, fe = Ee.length - 1; ce >= 1 && fe >= 0 && W[ce] !== Ee[fe]; )
            fe--;
          for (; ce >= 1 && fe >= 0; ce--, fe--)
            if (W[ce] !== Ee[fe]) {
              if (ce !== 1 || fe !== 1)
                do
                  if (ce--, fe--, fe < 0 || W[ce] !== Ee[fe]) {
                    var Se = `
` + W[ce].replace(" at new ", " at ");
                    return i.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", i.displayName)), typeof i == "function" && N.set(i, Se), Se;
                  }
                while (ce >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        U = !1, P.current = V, z(), Error.prepareStackTrace = J;
      }
      var ze = i ? i.displayName || i.name : "", Vr = ze ? M(ze) : "";
      return typeof i == "function" && N.set(i, Vr), Vr;
    }
    function _e(i, y, T) {
      return x(i, !1);
    }
    function w(i) {
      var y = i.prototype;
      return !!(y && y.isReactComponent);
    }
    function we(i, y, T) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return x(i, w(i));
      if (typeof i == "string")
        return M(i);
      switch (i) {
        case p:
          return M("Suspense");
        case g:
          return M("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case d:
            return _e(i.render);
          case _:
            return we(i.type, y, T);
          case h: {
            var $ = i, J = $._payload, V = $._init;
            try {
              return we(V(J), y, T);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Xe = {}, Ir = R.ReactDebugCurrentFrame;
    function rr(i) {
      if (i) {
        var y = i._owner, T = we(i.type, i._source, y ? y.type : null);
        Ir.setExtraStackFrame(T);
      } else
        Ir.setExtraStackFrame(null);
    }
    function tr(i, y, T, $, J) {
      {
        var V = Function.call.bind(Ie);
        for (var G in i)
          if (V(i, G)) {
            var W = void 0;
            try {
              if (typeof i[G] != "function") {
                var Ee = Error(($ || "React class") + ": " + T + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              W = i[G](y, G, $, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              W = ce;
            }
            W && !(W instanceof Error) && (rr(J), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", T, G, typeof W), rr(null)), W instanceof Error && !(W.message in Xe) && (Xe[W.message] = !0, rr(J), I("Failed %s type: %s", T, W.message), rr(null));
          }
      }
    }
    var br = Array.isArray;
    function He(i) {
      return br(i);
    }
    function Ne(i) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, T = y && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return T;
      }
    }
    function Nr(i) {
      try {
        return Er(i), !1;
      } catch {
        return !0;
      }
    }
    function Er(i) {
      return "" + i;
    }
    function Br(i) {
      if (Nr(i))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(i)), Er(i);
    }
    var Ze = R.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _r, xr, or;
    or = {};
    function Lr(i) {
      if (Ie.call(i, "ref")) {
        var y = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function zr(i) {
      if (Ie.call(i, "key")) {
        var y = Object.getOwnPropertyDescriptor(i, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function ht(i, y) {
      if (typeof i.ref == "string" && Ze.current && y && Ze.current.stateNode !== y) {
        var T = me(Ze.current.type);
        or[T] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', me(Ze.current.type), i.ref), or[T] = !0);
      }
    }
    function gt(i, y) {
      {
        var T = function() {
          _r || (_r = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        T.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function We(i, y) {
      {
        var T = function() {
          xr || (xr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        T.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var ar = function(i, y, T, $, J, V, G) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: i,
        key: y,
        ref: T,
        props: G,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function yt(i, y, T, $, J) {
      {
        var V, G = {}, W = null, Ee = null;
        T !== void 0 && (Br(T), W = "" + T), zr(y) && (Br(y.key), W = "" + y.key), Lr(y) && (Ee = y.ref, ht(y, J));
        for (V in y)
          Ie.call(y, V) && !nr.hasOwnProperty(V) && (G[V] = y[V]);
        if (i && i.defaultProps) {
          var ce = i.defaultProps;
          for (V in ce)
            G[V] === void 0 && (G[V] = ce[V]);
        }
        if (W || Ee) {
          var fe = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          W && gt(G, fe), Ee && We(G, fe);
        }
        return ar(i, W, Ee, J, $, Ze.current, G);
      }
    }
    var ir = R.ReactCurrentOwner, Ur = R.ReactDebugCurrentFrame;
    function Ye(i) {
      if (i) {
        var y = i._owner, T = we(i.type, i._source, y ? y.type : null);
        Ur.setExtraStackFrame(T);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Ge;
    Ge = !1;
    function Tr(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function Le() {
      {
        if (ir.current) {
          var i = me(ir.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function vt(i) {
      {
        if (i !== void 0) {
          var y = i.fileName.replace(/^.*[\\\/]/, ""), T = i.lineNumber;
          return `

Check your code at ` + y + ":" + T + ".";
        }
        return "";
      }
    }
    var Wr = {};
    function bt(i) {
      {
        var y = Le();
        if (!y) {
          var T = typeof i == "string" ? i : i.displayName || i.name;
          T && (y = `

Check the top-level render call using <` + T + ">.");
        }
        return y;
      }
    }
    function Yr(i, y) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var T = bt(y);
        if (Wr[T])
          return;
        Wr[T] = !0;
        var $ = "";
        i && i._owner && i._owner !== ir.current && ($ = " It was passed a child from " + me(i._owner.type) + "."), Ye(i), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, $), Ye(null);
      }
    }
    function Gr(i, y) {
      {
        if (typeof i != "object")
          return;
        if (He(i))
          for (var T = 0; T < i.length; T++) {
            var $ = i[T];
            Tr($) && Yr($, y);
          }
        else if (Tr(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var J = m(i);
          if (typeof J == "function" && J !== i.entries)
            for (var V = J.call(i), G; !(G = V.next()).done; )
              Tr(G.value) && Yr(G.value, y);
        }
      }
    }
    function Be(i) {
      {
        var y = i.type;
        if (y == null || typeof y == "string")
          return;
        var T;
        if (typeof y == "function")
          T = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === _))
          T = y.propTypes;
        else
          return;
        if (T) {
          var $ = me(y);
          tr(T, i.props, "prop", $, i);
        } else if (y.PropTypes !== void 0 && !Ge) {
          Ge = !0;
          var J = me(y);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(i) {
      {
        for (var y = Object.keys(i.props), T = 0; T < y.length; T++) {
          var $ = y[T];
          if ($ !== "children" && $ !== "key") {
            Ye(i), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Ye(null);
            break;
          }
        }
        i.ref !== null && (Ye(i), I("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    function Kr(i, y, T, $, J, V) {
      {
        var G = q(i);
        if (!G) {
          var W = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = vt(J);
          Ee ? W += Ee : W += Le();
          var ce;
          i === null ? ce = "null" : He(i) ? ce = "array" : i !== void 0 && i.$$typeof === r ? (ce = "<" + (me(i.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof i, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, W);
        }
        var fe = yt(i, y, T, J, V);
        if (fe == null)
          return fe;
        if (G) {
          var Se = y.children;
          if (Se !== void 0)
            if ($)
              if (He(Se)) {
                for (var ze = 0; ze < Se.length; ze++)
                  Gr(Se[ze], i);
                Object.freeze && Object.freeze(Se);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gr(Se, i);
        }
        return i === n ? Et(fe) : Be(fe), fe;
      }
    }
    function _t(i, y, T) {
      return Kr(i, y, T, !0);
    }
    function xt(i, y, T) {
      return Kr(i, y, T, !1);
    }
    var Tt = xt, qe = _t;
    Fr.Fragment = n, Fr.jsx = Tt, Fr.jsxs = qe;
  }()), Fr;
}
process.env.NODE_ENV === "production" ? zt.exports = ia() : zt.exports = sa();
var oe = zt.exports;
const ca = ({
  open: e,
  title: r,
  body: t,
  cancelText: n = "Cancel",
  confirmText: a = "Confirm",
  onClose: s,
  onConfirm: u
}) => {
  const [l, d] = nt(!1);
  return /* @__PURE__ */ oe.jsxs(Bo, { open: e, onClose: s, children: [
    r && /* @__PURE__ */ oe.jsx(Lo, { children: r }),
    /* @__PURE__ */ oe.jsx(zo, { children: /* @__PURE__ */ oe.jsx(Uo, { children: t }) }),
    /* @__PURE__ */ oe.jsxs(Wo, { children: [
      /* @__PURE__ */ oe.jsx(
        Yo,
        {
          variant: "text",
          color: "inherit",
          disabled: l,
          onClick: s,
          children: n
        }
      ),
      /* @__PURE__ */ oe.jsx(
        No,
        {
          variant: "text",
          color: "inherit",
          loading: l,
          onClick: async () => {
            try {
              d(!0), await u(), s();
            } finally {
              d(!1);
            }
          },
          children: a
        }
      )
    ] })
  ] });
}, Zs = Mo(ca);
function Qs(e) {
  return /* @__PURE__ */ oe.jsx(Go, { ...e, color: "inherit", LinkComponent: ra, children: /* @__PURE__ */ oe.jsx(ta, {}) });
}
function ot() {
  return (ot = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
function Yn(e, r) {
  if (e == null)
    return {};
  var t, n, a = {}, s = Object.keys(e);
  for (n = 0; n < s.length; n++)
    r.indexOf(t = s[n]) >= 0 || (a[t] = e[t]);
  return a;
}
function Ut(e) {
  var r = er(e), t = er(function(n) {
    r.current && r.current(n);
  });
  return r.current = e, t.current;
}
var gr = function(e, r, t) {
  return r === void 0 && (r = 0), t === void 0 && (t = 1), e > t ? t : e < r ? r : e;
}, kr = function(e) {
  return "touches" in e;
}, Wt = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, pn = function(e, r, t) {
  var n = e.getBoundingClientRect(), a = kr(r) ? function(s, u) {
    for (var l = 0; l < s.length; l++)
      if (s[l].identifier === u)
        return s[l];
    return s[0];
  }(r.touches, t) : r;
  return { left: gr((a.pageX - (n.left + Wt(e).pageXOffset)) / n.width), top: gr((a.pageY - (n.top + Wt(e).pageYOffset)) / n.height) };
}, mn = function(e) {
  !kr(e) && e.preventDefault();
}, Ht = ue.memo(function(e) {
  var r = e.onMove, t = e.onKey, n = Yn(e, ["onMove", "onKey"]), a = er(null), s = Ut(r), u = Ut(t), l = er(null), d = er(!1), p = zn(function() {
    var F = function(m) {
      mn(m), (kr(m) ? m.touches.length > 0 : m.buttons > 0) && a.current ? s(pn(a.current, m, l.current)) : v(!1);
    }, A = function() {
      return v(!1);
    };
    function v(m) {
      var R = d.current, I = Wt(a.current), Y = m ? I.addEventListener : I.removeEventListener;
      Y(R ? "touchmove" : "mousemove", F), Y(R ? "touchend" : "mouseup", A);
    }
    return [function(m) {
      var R = m.nativeEvent, I = a.current;
      if (I && (mn(R), !function(L, b) {
        return b && !kr(L);
      }(R, d.current) && I)) {
        if (kr(R)) {
          d.current = !0;
          var Y = R.changedTouches || [];
          Y.length && (l.current = Y[0].identifier);
        }
        I.focus(), s(pn(I, R, l.current)), v(!0);
      }
    }, function(m) {
      var R = m.which || m.keyCode;
      R < 37 || R > 40 || (m.preventDefault(), u({ left: R === 39 ? 0.05 : R === 37 ? -0.05 : 0, top: R === 40 ? 0.05 : R === 38 ? -0.05 : 0 }));
    }, v];
  }, [u, s]), g = p[0], _ = p[1], h = p[2];
  return et(function() {
    return h;
  }, [h]), ue.createElement("div", ot({}, n, { onTouchStart: g, onMouseDown: g, className: "react-colorful__interactive", ref: a, onKeyDown: _, tabIndex: 0, role: "slider" }));
}), at = function(e) {
  return e.filter(Boolean).join(" ");
}, qt = function(e) {
  var r = e.color, t = e.left, n = e.top, a = n === void 0 ? 0.5 : n, s = at(["react-colorful__pointer", e.className]);
  return ue.createElement("div", { className: s, style: { top: 100 * a + "%", left: 100 * t + "%" } }, ue.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: r } }));
}, xe = function(e, r, t) {
  return r === void 0 && (r = 0), t === void 0 && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, Gn = function(e) {
  var r = e.s, t = e.v, n = e.a, a = (200 - r) * t / 100;
  return { h: xe(e.h), s: xe(a > 0 && a < 200 ? r * t / 100 / (a <= 100 ? a : 200 - a) * 100 : 0), l: xe(a / 2), a: xe(n, 2) };
}, Yt = function(e) {
  var r = Gn(e);
  return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, $t = function(e) {
  var r = Gn(e);
  return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
}, ua = function(e) {
  var r = e.h, t = e.s, n = e.v, a = e.a;
  r = r / 360 * 6, t /= 100, n /= 100;
  var s = Math.floor(r), u = n * (1 - t), l = n * (1 - (r - s) * t), d = n * (1 - (1 - r + s) * t), p = s % 6;
  return { r: xe(255 * [n, l, u, u, d, n][p]), g: xe(255 * [d, n, n, l, u, u][p]), b: xe(255 * [u, u, d, n, n, l][p]), a: xe(a, 2) };
}, fa = function(e) {
  var r = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
  return r ? la({ r: Number(r[1]) / (r[2] ? 100 / 255 : 1), g: Number(r[3]) / (r[4] ? 100 / 255 : 1), b: Number(r[5]) / (r[6] ? 100 / 255 : 1), a: r[7] === void 0 ? 1 : Number(r[7]) / (r[8] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
}, la = function(e) {
  var r = e.r, t = e.g, n = e.b, a = e.a, s = Math.max(r, t, n), u = s - Math.min(r, t, n), l = u ? s === r ? (t - n) / u : s === t ? 2 + (n - r) / u : 4 + (r - t) / u : 0;
  return { h: xe(60 * (l < 0 ? l + 6 : l)), s: xe(s ? u / s * 100 : 0), v: xe(s / 255 * 100), a };
}, da = ue.memo(function(e) {
  var r = e.hue, t = e.onChange, n = at(["react-colorful__hue", e.className]);
  return ue.createElement("div", { className: n }, ue.createElement(Ht, { onMove: function(a) {
    t({ h: 360 * a.left });
  }, onKey: function(a) {
    t({ h: gr(r + 360 * a.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": xe(r), "aria-valuemax": "360", "aria-valuemin": "0" }, ue.createElement(qt, { className: "react-colorful__hue-pointer", left: r / 360, color: Yt({ h: r, s: 100, v: 100, a: 1 }) })));
}), pa = ue.memo(function(e) {
  var r = e.hsva, t = e.onChange, n = { backgroundColor: Yt({ h: r.h, s: 100, v: 100, a: 1 }) };
  return ue.createElement("div", { className: "react-colorful__saturation", style: n }, ue.createElement(Ht, { onMove: function(a) {
    t({ s: 100 * a.left, v: 100 - 100 * a.top });
  }, onKey: function(a) {
    t({ s: gr(r.s + 100 * a.left, 0, 100), v: gr(r.v - 100 * a.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + xe(r.s) + "%, Brightness " + xe(r.v) + "%" }, ue.createElement(qt, { className: "react-colorful__saturation-pointer", top: 1 - r.v / 100, left: r.s / 100, color: Yt(r) })));
}), ma = function(e, r) {
  if (e === r)
    return !0;
  for (var t in e)
    if (e[t] !== r[t])
      return !1;
  return !0;
}, ha = function(e, r) {
  return e.replace(/\s/g, "") === r.replace(/\s/g, "");
};
function ga(e, r, t) {
  var n = Ut(t), a = nt(function() {
    return e.toHsva(r);
  }), s = a[0], u = a[1], l = er({ color: r, hsva: s });
  et(function() {
    if (!e.equal(r, l.current.color)) {
      var p = e.toHsva(r);
      l.current = { hsva: p, color: r }, u(p);
    }
  }, [r, e]), et(function() {
    var p;
    ma(s, l.current.hsva) || e.equal(p = e.fromHsva(s), l.current.color) || (l.current = { hsva: s, color: p }, n(p));
  }, [s, e, n]);
  var d = Vt(function(p) {
    u(function(g) {
      return Object.assign({}, g, p);
    });
  }, []);
  return [s, d];
}
var ya = typeof window < "u" ? Io : et, va = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, hn = /* @__PURE__ */ new Map(), ba = function(e) {
  ya(function() {
    var r = e.current ? e.current.ownerDocument : document;
    if (r !== void 0 && !hn.has(r)) {
      var t = r.createElement("style");
      t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, hn.set(r, t);
      var n = va();
      n && t.setAttribute("nonce", n), r.head.appendChild(t);
    }
  }, []);
}, Ea = function(e) {
  var r = e.className, t = e.hsva, n = e.onChange, a = { backgroundImage: "linear-gradient(90deg, " + $t(Object.assign({}, t, { a: 0 })) + ", " + $t(Object.assign({}, t, { a: 1 })) + ")" }, s = at(["react-colorful__alpha", r]), u = xe(100 * t.a);
  return ue.createElement("div", { className: s }, ue.createElement("div", { className: "react-colorful__alpha-gradient", style: a }), ue.createElement(Ht, { onMove: function(l) {
    n({ a: l.left });
  }, onKey: function(l) {
    n({ a: gr(t.a + l.left) });
  }, "aria-label": "Alpha", "aria-valuetext": u + "%", "aria-valuenow": u, "aria-valuemin": "0", "aria-valuemax": "100" }, ue.createElement(qt, { className: "react-colorful__alpha-pointer", left: t.a, color: $t(t) })));
}, _a = function(e) {
  var r = e.className, t = e.colorModel, n = e.color, a = n === void 0 ? t.defaultColor : n, s = e.onChange, u = Yn(e, ["className", "colorModel", "color", "onChange"]), l = er(null);
  ba(l);
  var d = ga(t, a, s), p = d[0], g = d[1], _ = at(["react-colorful", r]);
  return ue.createElement("div", ot({}, u, { ref: l, className: _ }), ue.createElement(pa, { hsva: p, onChange: g }), ue.createElement(da, { hue: p.h, onChange: g }), ue.createElement(Ea, { hsva: p, onChange: g, className: "react-colorful__last-control" }));
}, xa = { defaultColor: "rgba(0, 0, 0, 1)", toHsva: fa, fromHsva: function(e) {
  var r = ua(e);
  return "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + r.a + ")";
}, equal: ha }, Ta = function(e) {
  return ue.createElement(_a, ot({}, e, { colorModel: xa }));
};
function Ca() {
  const [e, r] = nt(null), t = Vt(() => r(null), []);
  return zn(
    () => ({
      anchorEl: e,
      setAnchorEl: r,
      handleClose: t
    }),
    [e]
  );
}
const Oa = {
  horizontal: "left",
  vertical: "bottom"
};
function ec({
  label: e,
  value: r,
  onChange: t
}) {
  const { anchorEl: n, setAnchorEl: a, handleClose: s } = Ca();
  return /* @__PURE__ */ oe.jsxs("div", { children: [
    e && /* @__PURE__ */ oe.jsx(Ko, { children: e }),
    /* @__PURE__ */ oe.jsx(
      "div",
      {
        role: "button",
        className: "w-[30px] h-[30px] rounded-sm border-3 border-white",
        style: {
          backgroundColor: r
        },
        onClick: (u) => a(u.currentTarget)
      }
    ),
    /* @__PURE__ */ oe.jsx(
      Vo,
      {
        anchorEl: n,
        open: !!n,
        anchorOrigin: Oa,
        onClose: s,
        children: /* @__PURE__ */ oe.jsx(Ta, { color: r, onChange: t })
      }
    )
  ] });
}
function je() {
  return je = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, je.apply(this, arguments);
}
function it(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function mr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Kn(e) {
  if (!mr(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Kn(e[t]);
  }), r;
}
function Ke(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return mr(e) && mr(r) && Object.keys(r).forEach((a) => {
    a !== "__proto__" && (mr(r[a]) && a in e && mr(e[a]) ? n[a] = Ke(e[a], r[a], t) : t.clone ? n[a] = mr(r[a]) ? Kn(r[a]) : r[a] : n[a] = r[a]);
  }), n;
}
var Gt = { exports: {} }, Zr = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Sa() {
  if (gn)
    return Z;
  gn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function Y(b) {
    if (typeof b == "object" && b !== null) {
      var ge = b.$$typeof;
      switch (ge) {
        case r:
          switch (b = b.type, b) {
            case d:
            case p:
            case n:
            case s:
            case a:
            case _:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case g:
                case A:
                case F:
                case u:
                  return b;
                default:
                  return ge;
              }
          }
        case t:
          return ge;
      }
    }
  }
  function L(b) {
    return Y(b) === p;
  }
  return Z.AsyncMode = d, Z.ConcurrentMode = p, Z.ContextConsumer = l, Z.ContextProvider = u, Z.Element = r, Z.ForwardRef = g, Z.Fragment = n, Z.Lazy = A, Z.Memo = F, Z.Portal = t, Z.Profiler = s, Z.StrictMode = a, Z.Suspense = _, Z.isAsyncMode = function(b) {
    return L(b) || Y(b) === d;
  }, Z.isConcurrentMode = L, Z.isContextConsumer = function(b) {
    return Y(b) === l;
  }, Z.isContextProvider = function(b) {
    return Y(b) === u;
  }, Z.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  }, Z.isForwardRef = function(b) {
    return Y(b) === g;
  }, Z.isFragment = function(b) {
    return Y(b) === n;
  }, Z.isLazy = function(b) {
    return Y(b) === A;
  }, Z.isMemo = function(b) {
    return Y(b) === F;
  }, Z.isPortal = function(b) {
    return Y(b) === t;
  }, Z.isProfiler = function(b) {
    return Y(b) === s;
  }, Z.isStrictMode = function(b) {
    return Y(b) === a;
  }, Z.isSuspense = function(b) {
    return Y(b) === _;
  }, Z.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === p || b === s || b === a || b === _ || b === h || typeof b == "object" && b !== null && (b.$$typeof === A || b.$$typeof === F || b.$$typeof === u || b.$$typeof === l || b.$$typeof === g || b.$$typeof === m || b.$$typeof === R || b.$$typeof === I || b.$$typeof === v);
  }, Z.typeOf = Y, Z;
}
var Q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function Fa() {
  return yn || (yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function Y(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === p || x === s || x === a || x === _ || x === h || typeof x == "object" && x !== null && (x.$$typeof === A || x.$$typeof === F || x.$$typeof === u || x.$$typeof === l || x.$$typeof === g || x.$$typeof === m || x.$$typeof === R || x.$$typeof === I || x.$$typeof === v);
    }
    function L(x) {
      if (typeof x == "object" && x !== null) {
        var _e = x.$$typeof;
        switch (_e) {
          case r:
            var w = x.type;
            switch (w) {
              case d:
              case p:
              case n:
              case s:
              case a:
              case _:
                return w;
              default:
                var we = w && w.$$typeof;
                switch (we) {
                  case l:
                  case g:
                  case A:
                  case F:
                  case u:
                    return we;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var b = d, ge = p, Te = l, Pe = u, Ce = r, q = g, ye = n, Re = A, me = F, he = t, ve = s, be = a, Oe = _, $e = !1;
    function Me(x) {
      return $e || ($e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(x) || L(x) === d;
    }
    function E(x) {
      return L(x) === p;
    }
    function C(x) {
      return L(x) === l;
    }
    function B(x) {
      return L(x) === u;
    }
    function O(x) {
      return typeof x == "object" && x !== null && x.$$typeof === r;
    }
    function D(x) {
      return L(x) === g;
    }
    function z(x) {
      return L(x) === n;
    }
    function P(x) {
      return L(x) === A;
    }
    function j(x) {
      return L(x) === F;
    }
    function M(x) {
      return L(x) === t;
    }
    function U(x) {
      return L(x) === s;
    }
    function N(x) {
      return L(x) === a;
    }
    function pe(x) {
      return L(x) === _;
    }
    Q.AsyncMode = b, Q.ConcurrentMode = ge, Q.ContextConsumer = Te, Q.ContextProvider = Pe, Q.Element = Ce, Q.ForwardRef = q, Q.Fragment = ye, Q.Lazy = Re, Q.Memo = me, Q.Portal = he, Q.Profiler = ve, Q.StrictMode = be, Q.Suspense = Oe, Q.isAsyncMode = Me, Q.isConcurrentMode = E, Q.isContextConsumer = C, Q.isContextProvider = B, Q.isElement = O, Q.isForwardRef = D, Q.isFragment = z, Q.isLazy = P, Q.isMemo = j, Q.isPortal = M, Q.isProfiler = U, Q.isStrictMode = N, Q.isSuspense = pe, Q.isValidElementType = Y, Q.typeOf = L;
  }()), Q;
}
var vn;
function Vn() {
  return vn || (vn = 1, process.env.NODE_ENV === "production" ? Zr.exports = Sa() : Zr.exports = Fa()), Zr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Dt, bn;
function Ra() {
  if (bn)
    return Dt;
  bn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var u = {}, l = 0; l < 10; l++)
        u["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(u).map(function(g) {
        return u[g];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        p[g] = g;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Dt = a() ? Object.assign : function(s, u) {
    for (var l, d = n(s), p, g = 1; g < arguments.length; g++) {
      l = Object(arguments[g]);
      for (var _ in l)
        r.call(l, _) && (d[_] = l[_]);
      if (e) {
        p = e(l);
        for (var h = 0; h < p.length; h++)
          t.call(l, p[h]) && (d[p[h]] = l[p[h]]);
      }
    }
    return d;
  }, Dt;
}
var jt, En;
function Jt() {
  if (En)
    return jt;
  En = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jt = e, jt;
}
var Mt, _n;
function Hn() {
  return _n || (_n = 1, Mt = Function.call.bind(Object.prototype.hasOwnProperty)), Mt;
}
var It, xn;
function wa() {
  if (xn)
    return It;
  xn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Jt(), t = {}, n = Hn();
    e = function(s) {
      var u = "Warning: " + s;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function a(s, u, l, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in s)
        if (n(s, g)) {
          var _;
          try {
            if (typeof s[g] != "function") {
              var h = Error(
                (d || "React class") + ": " + l + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            _ = s[g](u, g, d, l, null, r);
          } catch (A) {
            _ = A;
          }
          if (_ && !(_ instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in t)) {
            t[_.message] = !0;
            var F = p ? p() : "";
            e(
              "Failed " + l + " type: " + _.message + (F ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, It = a, It;
}
var Nt, Tn;
function Aa() {
  if (Tn)
    return Nt;
  Tn = 1;
  var e = Vn(), r = Ra(), t = Jt(), n = Hn(), a = wa(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return Nt = function(l, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function _(E) {
      var C = E && (p && E[p] || E[g]);
      if (typeof C == "function")
        return C;
    }
    var h = "<<anonymous>>", F = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: I(),
      arrayOf: Y,
      element: L(),
      elementType: b(),
      instanceOf: ge,
      node: q(),
      objectOf: Pe,
      oneOf: Te,
      oneOfType: Ce,
      shape: Re,
      exact: me
    };
    function A(E, C) {
      return E === C ? E !== 0 || 1 / E === 1 / C : E !== E && C !== C;
    }
    function v(E, C) {
      this.message = E, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function m(E) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, B = 0;
      function O(z, P, j, M, U, N, pe) {
        if (M = M || h, N = N || j, pe !== t) {
          if (d) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _e = M + ":" + j;
            !C[_e] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[_e] = !0, B++);
          }
        }
        return P[j] == null ? z ? P[j] === null ? new v("The " + U + " `" + N + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new v("The " + U + " `" + N + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : E(P, j, M, U, N);
      }
      var D = O.bind(null, !1);
      return D.isRequired = O.bind(null, !0), D;
    }
    function R(E) {
      function C(B, O, D, z, P, j) {
        var M = B[O], U = be(M);
        if (U !== E) {
          var N = Oe(M);
          return new v(
            "Invalid " + z + " `" + P + "` of type " + ("`" + N + "` supplied to `" + D + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return m(C);
    }
    function I() {
      return m(u);
    }
    function Y(E) {
      function C(B, O, D, z, P) {
        if (typeof E != "function")
          return new v("Property `" + P + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var j = B[O];
        if (!Array.isArray(j)) {
          var M = be(j);
          return new v("Invalid " + z + " `" + P + "` of type " + ("`" + M + "` supplied to `" + D + "`, expected an array."));
        }
        for (var U = 0; U < j.length; U++) {
          var N = E(j, U, D, z, P + "[" + U + "]", t);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return m(C);
    }
    function L() {
      function E(C, B, O, D, z) {
        var P = C[B];
        if (!l(P)) {
          var j = be(P);
          return new v("Invalid " + D + " `" + z + "` of type " + ("`" + j + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(E);
    }
    function b() {
      function E(C, B, O, D, z) {
        var P = C[B];
        if (!e.isValidElementType(P)) {
          var j = be(P);
          return new v("Invalid " + D + " `" + z + "` of type " + ("`" + j + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(E);
    }
    function ge(E) {
      function C(B, O, D, z, P) {
        if (!(B[O] instanceof E)) {
          var j = E.name || h, M = Me(B[O]);
          return new v("Invalid " + z + " `" + P + "` of type " + ("`" + M + "` supplied to `" + D + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return m(C);
    }
    function Te(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), u;
      function C(B, O, D, z, P) {
        for (var j = B[O], M = 0; M < E.length; M++)
          if (A(j, E[M]))
            return null;
        var U = JSON.stringify(E, function(pe, x) {
          var _e = Oe(x);
          return _e === "symbol" ? String(x) : x;
        });
        return new v("Invalid " + z + " `" + P + "` of value `" + String(j) + "` " + ("supplied to `" + D + "`, expected one of " + U + "."));
      }
      return m(C);
    }
    function Pe(E) {
      function C(B, O, D, z, P) {
        if (typeof E != "function")
          return new v("Property `" + P + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var j = B[O], M = be(j);
        if (M !== "object")
          return new v("Invalid " + z + " `" + P + "` of type " + ("`" + M + "` supplied to `" + D + "`, expected an object."));
        for (var U in j)
          if (n(j, U)) {
            var N = E(j, U, D, z, P + "." + U, t);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return m(C);
    }
    function Ce(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var C = 0; C < E.length; C++) {
        var B = E[C];
        if (typeof B != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $e(B) + " at index " + C + "."
          ), u;
      }
      function O(D, z, P, j, M) {
        for (var U = [], N = 0; N < E.length; N++) {
          var pe = E[N], x = pe(D, z, P, j, M, t);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && U.push(x.data.expectedType);
        }
        var _e = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new v("Invalid " + j + " `" + M + "` supplied to " + ("`" + P + "`" + _e + "."));
      }
      return m(O);
    }
    function q() {
      function E(C, B, O, D, z) {
        return he(C[B]) ? null : new v("Invalid " + D + " `" + z + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return m(E);
    }
    function ye(E, C, B, O, D) {
      return new v(
        (E || "React class") + ": " + C + " type `" + B + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function Re(E) {
      function C(B, O, D, z, P) {
        var j = B[O], M = be(j);
        if (M !== "object")
          return new v("Invalid " + z + " `" + P + "` of type `" + M + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var U in E) {
          var N = E[U];
          if (typeof N != "function")
            return ye(D, z, P, U, Oe(N));
          var pe = N(j, U, D, z, P + "." + U, t);
          if (pe)
            return pe;
        }
        return null;
      }
      return m(C);
    }
    function me(E) {
      function C(B, O, D, z, P) {
        var j = B[O], M = be(j);
        if (M !== "object")
          return new v("Invalid " + z + " `" + P + "` of type `" + M + "` " + ("supplied to `" + D + "`, expected `object`."));
        var U = r({}, B[O], E);
        for (var N in U) {
          var pe = E[N];
          if (n(E, N) && typeof pe != "function")
            return ye(D, z, P, N, Oe(pe));
          if (!pe)
            return new v(
              "Invalid " + z + " `" + P + "` key `" + N + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(B[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var x = pe(j, N, D, z, P + "." + N, t);
          if (x)
            return x;
        }
        return null;
      }
      return m(C);
    }
    function he(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(he);
          if (E === null || l(E))
            return !0;
          var C = _(E);
          if (C) {
            var B = C.call(E), O;
            if (C !== E.entries) {
              for (; !(O = B.next()).done; )
                if (!he(O.value))
                  return !1;
            } else
              for (; !(O = B.next()).done; ) {
                var D = O.value;
                if (D && !he(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ve(E, C) {
      return E === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function be(E) {
      var C = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ve(C, E) ? "symbol" : C;
    }
    function Oe(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var C = be(E);
      if (C === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function $e(E) {
      var C = Oe(E);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function Me(E) {
      return !E.constructor || !E.constructor.name ? h : E.constructor.name;
    }
    return F.checkPropTypes = a, F.resetWarningCache = a.resetWarningCache, F.PropTypes = F, F;
  }, Nt;
}
var Bt, Cn;
function ka() {
  if (Cn)
    return Bt;
  Cn = 1;
  var e = Jt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Bt = function() {
    function n(u, l, d, p, g, _) {
      if (_ !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, Bt;
}
if (process.env.NODE_ENV !== "production") {
  var Pa = Vn(), $a = !0;
  Gt.exports = Aa()(Pa.isElement, $a);
} else
  Gt.exports = ka()();
var Da = Gt.exports;
const Rr = /* @__PURE__ */ Wn(Da);
function yr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var Kt = { exports: {} }, ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function ja() {
  if (On)
    return ee;
  On = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), A;
  A = Symbol.for("react.module.reference");
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var R = m.$$typeof;
      switch (R) {
        case e:
          switch (m = m.type, m) {
            case t:
            case a:
            case n:
            case p:
            case g:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case u:
                case d:
                case h:
                case _:
                case s:
                  return m;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  return ee.ContextConsumer = u, ee.ContextProvider = s, ee.Element = e, ee.ForwardRef = d, ee.Fragment = t, ee.Lazy = h, ee.Memo = _, ee.Portal = r, ee.Profiler = a, ee.StrictMode = n, ee.Suspense = p, ee.SuspenseList = g, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(m) {
    return v(m) === u;
  }, ee.isContextProvider = function(m) {
    return v(m) === s;
  }, ee.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ee.isForwardRef = function(m) {
    return v(m) === d;
  }, ee.isFragment = function(m) {
    return v(m) === t;
  }, ee.isLazy = function(m) {
    return v(m) === h;
  }, ee.isMemo = function(m) {
    return v(m) === _;
  }, ee.isPortal = function(m) {
    return v(m) === r;
  }, ee.isProfiler = function(m) {
    return v(m) === a;
  }, ee.isStrictMode = function(m) {
    return v(m) === n;
  }, ee.isSuspense = function(m) {
    return v(m) === p;
  }, ee.isSuspenseList = function(m) {
    return v(m) === g;
  }, ee.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === a || m === n || m === p || m === g || m === F || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === _ || m.$$typeof === s || m.$$typeof === u || m.$$typeof === d || m.$$typeof === A || m.getModuleId !== void 0);
  }, ee.typeOf = v, ee;
}
var re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function Ma() {
  return Sn || (Sn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), A = !1, v = !1, m = !1, R = !1, I = !1, Y;
    Y = Symbol.for("react.module.reference");
    function L(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === t || w === a || I || w === n || w === p || w === g || R || w === F || A || v || m || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === _ || w.$$typeof === s || w.$$typeof === u || w.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === Y || w.getModuleId !== void 0));
    }
    function b(w) {
      if (typeof w == "object" && w !== null) {
        var we = w.$$typeof;
        switch (we) {
          case e:
            var Ie = w.type;
            switch (Ie) {
              case t:
              case a:
              case n:
              case p:
              case g:
                return Ie;
              default:
                var Xe = Ie && Ie.$$typeof;
                switch (Xe) {
                  case l:
                  case u:
                  case d:
                  case h:
                  case _:
                  case s:
                    return Xe;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var ge = u, Te = s, Pe = e, Ce = d, q = t, ye = h, Re = _, me = r, he = a, ve = n, be = p, Oe = g, $e = !1, Me = !1;
    function E(w) {
      return $e || ($e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(w) {
      return Me || (Me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(w) {
      return b(w) === u;
    }
    function O(w) {
      return b(w) === s;
    }
    function D(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }
    function z(w) {
      return b(w) === d;
    }
    function P(w) {
      return b(w) === t;
    }
    function j(w) {
      return b(w) === h;
    }
    function M(w) {
      return b(w) === _;
    }
    function U(w) {
      return b(w) === r;
    }
    function N(w) {
      return b(w) === a;
    }
    function pe(w) {
      return b(w) === n;
    }
    function x(w) {
      return b(w) === p;
    }
    function _e(w) {
      return b(w) === g;
    }
    re.ContextConsumer = ge, re.ContextProvider = Te, re.Element = Pe, re.ForwardRef = Ce, re.Fragment = q, re.Lazy = ye, re.Memo = Re, re.Portal = me, re.Profiler = he, re.StrictMode = ve, re.Suspense = be, re.SuspenseList = Oe, re.isAsyncMode = E, re.isConcurrentMode = C, re.isContextConsumer = B, re.isContextProvider = O, re.isElement = D, re.isForwardRef = z, re.isFragment = P, re.isLazy = j, re.isMemo = M, re.isPortal = U, re.isProfiler = N, re.isStrictMode = pe, re.isSuspense = x, re.isSuspenseList = _e, re.isValidElementType = L, re.typeOf = b;
  }()), re;
}
process.env.NODE_ENV === "production" ? Kt.exports = ja() : Kt.exports = Ma();
var Fn = Kt.exports;
const Ia = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Na(e) {
  const r = `${e}`.match(Ia);
  return r && r[1] || "";
}
function qn(e, r = "") {
  return e.displayName || e.name || Na(e) || r;
}
function Rn(e, r, t) {
  const n = qn(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Ba(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return qn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Fn.ForwardRef:
          return Rn(e, e.render, "ForwardRef");
        case Fn.Memo:
          return Rn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Pr(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : yr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function La(e, r) {
  const t = aa(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const a = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${a})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${a})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const za = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Ua = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function Wa(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...a
  } = e, s = Ua(r), u = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t})`;
  }
  function d(h) {
    return `@media (max-width:${(typeof r[h] == "number" ? r[h] : h) - n / 100}${t})`;
  }
  function p(h, F) {
    const A = u.indexOf(F);
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t}) and (max-width:${(A !== -1 && typeof r[u[A]] == "number" ? r[u[A]] : F) - n / 100}${t})`;
  }
  function g(h) {
    return u.indexOf(h) + 1 < u.length ? p(h, u[u.indexOf(h) + 1]) : l(h);
  }
  function _(h) {
    const F = u.indexOf(h);
    return F === 0 ? l(u[1]) : F === u.length - 1 ? d(u[F]) : p(h, u[u.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: u,
    values: s,
    up: l,
    down: d,
    between: p,
    only: g,
    not: _,
    unit: t,
    ...a
  };
}
const Ya = {
  borderRadius: 4
}, Ga = Ya, Ka = process.env.NODE_ENV !== "production" ? Rr.oneOfType([Rr.number, Rr.string, Rr.object, Rr.array]) : {}, Je = Ka;
function $r(e, r) {
  return r ? Ke(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, wn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xt[e]}px)`
};
function Ve(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const s = n.breakpoints || wn;
    return r.reduce((u, l, d) => (u[s.up(s.keys[d])] = t(r[d]), u), {});
  }
  if (typeof r == "object") {
    const s = n.breakpoints || wn;
    return Object.keys(r).reduce((u, l) => {
      if (Object.keys(s.values || Xt).indexOf(l) !== -1) {
        const d = s.up(l);
        u[d] = t(r[l], l);
      } else {
        const d = l;
        u[d] = r[d];
      }
      return u;
    }, {});
  }
  return t(r);
}
function Va(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, a) => {
    const s = e.up(a);
    return n[s] = {}, n;
  }, {})) || {};
}
function Ha(e, r) {
  return e.reduce((t, n) => {
    const a = t[n];
    return (!a || Object.keys(a).length === 0) && delete t[n], t;
  }, r);
}
function st(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((a, s) => a && a[s] ? a[s] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, a) => n && n[a] != null ? n[a] : null, e);
}
function rt(e, r, t, n = t) {
  let a;
  return typeof e == "function" ? a = e(t) : Array.isArray(e) ? a = e[t] || n : a = st(e, t) || n, r && (a = r(a, n, e)), a;
}
function te(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: a
  } = e, s = (u) => {
    if (u[r] == null)
      return null;
    const l = u[r], d = u.theme, p = st(d, n) || {};
    return Ve(u, l, (_) => {
      let h = rt(p, a, _);
      return _ === h && typeof _ == "string" && (h = rt(p, a, `${r}${_ === "default" ? "" : Pr(_)}`, _)), t === !1 ? h : {
        [t]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Je
  } : {}, s.filterProps = [r], s;
}
function qa(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Ja = {
  m: "margin",
  p: "padding"
}, Xa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, An = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Za = qa((e) => {
  if (e.length > 2)
    if (An[e])
      e = An[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Ja[r], a = Xa[t] || "";
  return Array.isArray(a) ? a.map((s) => n + s) : [n + a];
}), ct = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ut = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qa = [...ct, ...ut];
function jr(e, r, t, n) {
  var a;
  const s = (a = st(e, r, !1)) != null ? a : t;
  return typeof s == "number" ? (u) => typeof u == "string" ? u : (process.env.NODE_ENV !== "production" && typeof u != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${u}.`), s * u) : Array.isArray(s) ? (u) => typeof u == "string" ? u : (process.env.NODE_ENV !== "production" && (Number.isInteger(u) ? u > s.length - 1 && console.error([`MUI: The value provided (${u}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${u} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), s[u]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Jn(e) {
  return jr(e, "spacing", 8, "spacing");
}
function Mr(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ei(e, r) {
  return (t) => e.reduce((n, a) => (n[a] = Mr(r, t), n), {});
}
function ri(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const a = Za(t), s = ei(a, n), u = e[t];
  return Ve(e, u, s);
}
function Xn(e, r) {
  const t = Jn(e.theme);
  return Object.keys(e).map((n) => ri(e, r, n, t)).reduce($r, {});
}
function le(e) {
  return Xn(e, ct);
}
le.propTypes = process.env.NODE_ENV !== "production" ? ct.reduce((e, r) => (e[r] = Je, e), {}) : {};
le.filterProps = ct;
function de(e) {
  return Xn(e, ut);
}
de.propTypes = process.env.NODE_ENV !== "production" ? ut.reduce((e, r) => (e[r] = Je, e), {}) : {};
de.filterProps = ut;
process.env.NODE_ENV !== "production" && Qa.reduce((e, r) => (e[r] = Je, e), {});
function ti(e = 8) {
  if (e.mui)
    return e;
  const r = Jn({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const u = r(s);
    return typeof u == "number" ? `${u}px` : u;
  }).join(" "));
  return t.mui = !0, t;
}
function ft(...e) {
  const r = e.reduce((n, a) => (a.filterProps.forEach((s) => {
    n[s] = a;
  }), n), {}), t = (n) => Object.keys(n).reduce((a, s) => r[s] ? $r(a, r[s](n)) : a, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, a) => Object.assign(n, a.propTypes), {}) : {}, t.filterProps = e.reduce((n, a) => n.concat(a.filterProps), []), t;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const ni = te({
  prop: "border",
  themeKey: "borders",
  transform: Ue
}), oi = te({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ue
}), ai = te({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ue
}), ii = te({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ue
}), si = te({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ue
}), ci = te({
  prop: "borderColor",
  themeKey: "palette"
}), ui = te({
  prop: "borderTopColor",
  themeKey: "palette"
}), fi = te({
  prop: "borderRightColor",
  themeKey: "palette"
}), li = te({
  prop: "borderBottomColor",
  themeKey: "palette"
}), di = te({
  prop: "borderLeftColor",
  themeKey: "palette"
}), lt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = jr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Mr(r, n)
    });
    return Ve(e, e.borderRadius, t);
  }
  return null;
};
lt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Je
} : {};
lt.filterProps = ["borderRadius"];
ft(ni, oi, ai, ii, si, ci, ui, fi, li, di, lt);
const dt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = jr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Mr(r, n)
    });
    return Ve(e, e.gap, t);
  }
  return null;
};
dt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Je
} : {};
dt.filterProps = ["gap"];
const pt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = jr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Mr(r, n)
    });
    return Ve(e, e.columnGap, t);
  }
  return null;
};
pt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Je
} : {};
pt.filterProps = ["columnGap"];
const mt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = jr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Mr(r, n)
    });
    return Ve(e, e.rowGap, t);
  }
  return null;
};
mt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Je
} : {};
mt.filterProps = ["rowGap"];
const pi = te({
  prop: "gridColumn"
}), mi = te({
  prop: "gridRow"
}), hi = te({
  prop: "gridAutoFlow"
}), gi = te({
  prop: "gridAutoColumns"
}), yi = te({
  prop: "gridAutoRows"
}), vi = te({
  prop: "gridTemplateColumns"
}), bi = te({
  prop: "gridTemplateRows"
}), Ei = te({
  prop: "gridTemplateAreas"
}), _i = te({
  prop: "gridArea"
});
ft(dt, pt, mt, pi, mi, hi, gi, yi, vi, bi, Ei, _i);
function hr(e, r) {
  return r === "grey" ? r : e;
}
const xi = te({
  prop: "color",
  themeKey: "palette",
  transform: hr
}), Ti = te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: hr
}), Ci = te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: hr
});
ft(xi, Ti, Ci);
function ke(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Oi = te({
  prop: "width",
  transform: ke
}), Zt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, a, s;
      return {
        maxWidth: ((n = e.theme) == null || (a = n.breakpoints) == null || (s = a.values) == null ? void 0 : s[t]) || Xt[t] || ke(t)
      };
    };
    return Ve(e, e.maxWidth, r);
  }
  return null;
};
Zt.filterProps = ["maxWidth"];
const Si = te({
  prop: "minWidth",
  transform: ke
}), Fi = te({
  prop: "height",
  transform: ke
}), Ri = te({
  prop: "maxHeight",
  transform: ke
}), wi = te({
  prop: "minHeight",
  transform: ke
});
te({
  prop: "size",
  cssProperty: "width",
  transform: ke
});
te({
  prop: "size",
  cssProperty: "height",
  transform: ke
});
const Ai = te({
  prop: "boxSizing"
});
ft(Oi, Zt, Si, Fi, Ri, wi, Ai);
const ki = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ue
  },
  borderTop: {
    themeKey: "borders",
    transform: Ue
  },
  borderRight: {
    themeKey: "borders",
    transform: Ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ue
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: lt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: hr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: hr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: hr
  },
  // spacing
  p: {
    style: de
  },
  pt: {
    style: de
  },
  pr: {
    style: de
  },
  pb: {
    style: de
  },
  pl: {
    style: de
  },
  px: {
    style: de
  },
  py: {
    style: de
  },
  padding: {
    style: de
  },
  paddingTop: {
    style: de
  },
  paddingRight: {
    style: de
  },
  paddingBottom: {
    style: de
  },
  paddingLeft: {
    style: de
  },
  paddingX: {
    style: de
  },
  paddingY: {
    style: de
  },
  paddingInline: {
    style: de
  },
  paddingInlineStart: {
    style: de
  },
  paddingInlineEnd: {
    style: de
  },
  paddingBlock: {
    style: de
  },
  paddingBlockStart: {
    style: de
  },
  paddingBlockEnd: {
    style: de
  },
  m: {
    style: le
  },
  mt: {
    style: le
  },
  mr: {
    style: le
  },
  mb: {
    style: le
  },
  ml: {
    style: le
  },
  mx: {
    style: le
  },
  my: {
    style: le
  },
  margin: {
    style: le
  },
  marginTop: {
    style: le
  },
  marginRight: {
    style: le
  },
  marginBottom: {
    style: le
  },
  marginLeft: {
    style: le
  },
  marginX: {
    style: le
  },
  marginY: {
    style: le
  },
  marginInline: {
    style: le
  },
  marginInlineStart: {
    style: le
  },
  marginInlineEnd: {
    style: le
  },
  marginBlock: {
    style: le
  },
  marginBlockStart: {
    style: le
  },
  marginBlockEnd: {
    style: le
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: dt
  },
  rowGap: {
    style: mt
  },
  columnGap: {
    style: pt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ke
  },
  maxWidth: {
    style: Zt
  },
  minWidth: {
    transform: ke
  },
  height: {
    transform: ke
  },
  maxHeight: {
    transform: ke
  },
  minHeight: {
    transform: ke
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Zn = ki;
function Pi(...e) {
  const r = e.reduce((n, a) => n.concat(Object.keys(a)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function $i(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Di() {
  function e(t, n, a, s) {
    const u = {
      [t]: n,
      theme: a
    }, l = s[t];
    if (!l)
      return {
        [t]: n
      };
    const {
      cssProperty: d = t,
      themeKey: p,
      transform: g,
      style: _
    } = l;
    if (n == null)
      return null;
    if (p === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const h = st(a, p) || {};
    return _ ? _(u) : Ve(u, n, (A) => {
      let v = rt(h, g, A);
      return A === v && typeof A == "string" && (v = rt(h, g, `${t}${A === "default" ? "" : Pr(A)}`, A)), d === !1 ? v : {
        [d]: v
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: a,
      theme: s = {}
    } = t || {};
    if (!a)
      return null;
    const u = (n = s.unstable_sxConfig) != null ? n : Zn;
    function l(d) {
      let p = d;
      if (typeof d == "function")
        p = d(s);
      else if (typeof d != "object")
        return d;
      if (!p)
        return null;
      const g = Va(s.breakpoints), _ = Object.keys(g);
      let h = g;
      return Object.keys(p).forEach((F) => {
        const A = $i(p[F], s);
        if (A != null)
          if (typeof A == "object")
            if (u[F])
              h = $r(h, e(F, A, s, u));
            else {
              const v = Ve({
                theme: s
              }, A, (m) => ({
                [F]: m
              }));
              Pi(v, A) ? h[F] = r({
                sx: A,
                theme: s
              }) : h = $r(h, v);
            }
          else
            h = $r(h, e(F, A, s, u));
      }), Ha(_, h);
    }
    return Array.isArray(a) ? a.map(l) : l(a);
  }
  return r;
}
const Qn = Di();
Qn.filterProps = ["sx"];
const eo = Qn;
function ro(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: a,
    shape: s = {},
    ...u
  } = e, l = Wa(t), d = ti(a);
  let p = Ke({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...Ga,
      ...s
    }
  }, u);
  return p = r.reduce((g, _) => Ke(g, _), p), p.unstable_sxConfig = {
    ...Zn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, p.unstable_sx = function(_) {
    return eo({
      sx: _,
      theme: this
    });
  }, p;
}
function kn(e) {
  return e.length === 0;
}
function to(e) {
  const {
    variant: r,
    ...t
  } = e;
  let n = r || "";
  return Object.keys(t).sort().forEach((a) => {
    a === "color" ? n += kn(n) ? e[a] : Pr(e[a]) : n += `${kn(n) ? a : Pr(a)}${Pr(e[a].toString())}`;
  }), n;
}
function ji(e) {
  return Object.keys(e).length === 0;
}
function Mi(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Ii = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, Ni = (e, r) => {
  let t = [];
  r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants);
  const n = {};
  return t.forEach((a) => {
    const s = to(a.props);
    n[s] = a.style;
  }), n;
}, Bi = (e, r, t, n) => {
  var a, s;
  const {
    ownerState: u = {}
  } = e, l = [], d = t == null || (a = t.components) == null || (s = a[n]) == null ? void 0 : s.variants;
  return d && d.forEach((p) => {
    let g = !0;
    Object.keys(p.props).forEach((_) => {
      u[_] !== p.props[_] && e[_] !== p.props[_] && (g = !1);
    }), g && l.push(r[to(p.props)]);
  }), l;
};
function Qr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Li = ro(), zi = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function wr({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return ji(r) ? e : r[t] || r;
}
function Ui(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Li,
    rootShouldForwardProp: n = Qr,
    slotShouldForwardProp: a = Qr
  } = e, s = (u) => eo({
    ...u,
    theme: wr({
      ...u,
      defaultTheme: t,
      themeId: r
    })
  });
  return s.__mui_systemSx = !0, (u, l = {}) => {
    za(u, (L) => L.filter((b) => !(b != null && b.__mui_systemSx)));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: g,
      skipSx: _,
      overridesResolver: h,
      ...F
    } = l, A = g !== void 0 ? g : p && p !== "Root" || !1, v = _ || !1;
    let m;
    process.env.NODE_ENV !== "production" && d && (m = `${d}-${zi(p || "Root")}`);
    let R = Qr;
    p === "Root" ? R = n : p ? R = a : Mi(u) && (R = void 0);
    const I = La(u, {
      shouldForwardProp: R,
      label: m,
      ...F
    }), Y = (L, ...b) => {
      const ge = b ? b.map((q) => typeof q == "function" && q.__emotion_real !== q ? (ye) => q({
        ...ye,
        theme: wr({
          ...ye,
          defaultTheme: t,
          themeId: r
        })
      }) : q) : [];
      let Te = L;
      d && h && ge.push((q) => {
        const ye = wr({
          ...q,
          defaultTheme: t,
          themeId: r
        }), Re = Ii(d, ye);
        if (Re) {
          const me = {};
          return Object.entries(Re).forEach(([he, ve]) => {
            me[he] = typeof ve == "function" ? ve({
              ...q,
              theme: ye
            }) : ve;
          }), h(q, me);
        }
        return null;
      }), d && !A && ge.push((q) => {
        const ye = wr({
          ...q,
          defaultTheme: t,
          themeId: r
        });
        return Bi(q, Ni(d, ye), ye, d);
      }), v || ge.push(s);
      const Pe = ge.length - b.length;
      if (Array.isArray(L) && Pe > 0) {
        const q = new Array(Pe).fill("");
        Te = [...L, ...q], Te.raw = [...L.raw, ...q];
      } else
        typeof L == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        L.__emotion_real !== L && (Te = (q) => L({
          ...q,
          theme: wr({
            ...q,
            defaultTheme: t,
            themeId: r
          })
        }));
      const Ce = I(Te, ...ge);
      if (process.env.NODE_ENV !== "production") {
        let q;
        d && (q = `${d}${p || ""}`), q === void 0 && (q = `Styled(${Ba(u)})`), Ce.displayName = q;
      }
      return u.muiName && (Ce.muiName = u.muiName), Ce;
    };
    return I.withConfig && (Y.withConfig = I.withConfig), Y;
  };
}
function no(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function Wi(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, a) => a < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function vr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return vr(Wi(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : yr(9, e));
  let n = e.substring(r + 1, e.length - 1), a;
  if (t === "color") {
    if (n = n.split(" "), a = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : yr(10, a));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: t,
    values: n,
    colorSpace: a
  };
}
function Qt(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((a, s) => s < 3 ? parseInt(a, 10) : a) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Yi(e) {
  e = vr(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, a = r[2] / 100, s = n * Math.min(a, 1 - a), u = (p, g = (p + t / 30) % 12) => a - s * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let l = "rgb";
  const d = [Math.round(u(0) * 255), Math.round(u(8) * 255), Math.round(u(4) * 255)];
  return e.type === "hsla" && (l += "a", d.push(r[3])), Qt({
    type: l,
    values: d
  });
}
function Pn(e) {
  e = vr(e);
  let r = e.type === "hsl" || e.type === "hsla" ? vr(Yi(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function $n(e, r) {
  const t = Pn(e), n = Pn(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Gi(e, r) {
  if (e = vr(e), r = no(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Qt(e);
}
function Ki(e, r) {
  if (e = vr(e), r = no(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Qt(e);
}
function Vi(e, r) {
  return je({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const Hi = {
  black: "#000",
  white: "#fff"
}, Dr = Hi, qi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ji = qi, Xi = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, sr = Xi, Zi = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, cr = Zi, Qi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Ar = Qi, es = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ur = es, rs = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, fr = rs, ts = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, lr = ts, ns = ["mode", "contrastThreshold", "tonalOffset"], Dn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Dr.white,
    default: Dr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Lt = {
  text: {
    primary: Dr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Dr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function jn(e, r, t, n) {
  const a = n.light || n, s = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Ki(e.main, a) : r === "dark" && (e.dark = Gi(e.main, s)));
}
function os(e = "light") {
  return e === "dark" ? {
    main: ur[200],
    light: ur[50],
    dark: ur[400]
  } : {
    main: ur[700],
    light: ur[400],
    dark: ur[800]
  };
}
function as(e = "light") {
  return e === "dark" ? {
    main: sr[200],
    light: sr[50],
    dark: sr[400]
  } : {
    main: sr[500],
    light: sr[300],
    dark: sr[700]
  };
}
function is(e = "light") {
  return e === "dark" ? {
    main: cr[500],
    light: cr[300],
    dark: cr[700]
  } : {
    main: cr[700],
    light: cr[400],
    dark: cr[800]
  };
}
function ss(e = "light") {
  return e === "dark" ? {
    main: fr[400],
    light: fr[300],
    dark: fr[700]
  } : {
    main: fr[700],
    light: fr[500],
    dark: fr[900]
  };
}
function cs(e = "light") {
  return e === "dark" ? {
    main: lr[400],
    light: lr[300],
    dark: lr[700]
  } : {
    main: lr[800],
    light: lr[500],
    dark: lr[900]
  };
}
function us(e = "light") {
  return e === "dark" ? {
    main: Ar[400],
    light: Ar[300],
    dark: Ar[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ar[500],
    dark: Ar[900]
  };
}
function fs(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, a = it(e, ns), s = e.primary || os(r), u = e.secondary || as(r), l = e.error || is(r), d = e.info || ss(r), p = e.success || cs(r), g = e.warning || us(r);
  function _(v) {
    const m = $n(v, Lt.text.primary) >= t ? Lt.text.primary : Dn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = $n(v, m);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${m} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const h = ({
    color: v,
    name: m,
    mainShade: R = 500,
    lightShade: I = 300,
    darkShade: Y = 700
  }) => {
    if (v = je({}, v), !v.main && v[R] && (v.main = v[R]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : yr(11, m ? ` (${m})` : "", R));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : yr(12, m ? ` (${m})` : "", JSON.stringify(v.main)));
    return jn(v, "light", I, n), jn(v, "dark", Y, n), v.contrastText || (v.contrastText = _(v.main)), v;
  }, F = {
    dark: Lt,
    light: Dn
  };
  return process.env.NODE_ENV !== "production" && (F[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Ke(je({
    // A collection of common colors.
    common: je({}, Dr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: u,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Ji,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: _,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, F[r]), a);
}
const ls = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ds(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Mn = {
  textTransform: "uppercase"
}, In = '"Roboto", "Helvetica", "Arial", sans-serif';
function ps(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = In,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: u = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: d = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: p = 16,
    // Apply the CSS properties to all the variants.
    allVariants: g,
    pxToRem: _
  } = t, h = it(t, ls);
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof p != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const F = a / 14, A = _ || ((R) => `${R / p * F}rem`), v = (R, I, Y, L, b) => je({
    fontFamily: n,
    fontWeight: R,
    fontSize: A(I),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: Y
  }, n === In ? {
    letterSpacing: `${ds(L / I)}em`
  } : {}, b, g), m = {
    h1: v(s, 96, 1.167, -1.5),
    h2: v(s, 60, 1.2, -0.5),
    h3: v(u, 48, 1.167, 0),
    h4: v(u, 34, 1.235, 0.25),
    h5: v(u, 24, 1.334, 0),
    h6: v(l, 20, 1.6, 0.15),
    subtitle1: v(u, 16, 1.75, 0.15),
    subtitle2: v(l, 14, 1.57, 0.1),
    body1: v(u, 16, 1.5, 0.15),
    body2: v(u, 14, 1.43, 0.15),
    button: v(l, 14, 1.75, 0.4, Mn),
    caption: v(u, 12, 1.66, 0.4),
    overline: v(u, 12, 2.66, 1, Mn)
  };
  return Ke(je({
    htmlFontSize: p,
    pxToRem: A,
    fontFamily: n,
    fontSize: a,
    fontWeightLight: s,
    fontWeightRegular: u,
    fontWeightMedium: l,
    fontWeightBold: d
  }, m), h, {
    clone: !1
    // No need to clone deep
  });
}
const ms = 0.2, hs = 0.14, gs = 0.12;
function se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ms})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hs})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${gs})`].join(",");
}
const ys = ["none", se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], vs = ys, bs = ["duration", "easing", "delay"], Es = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, _s = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Nn(e) {
  return `${Math.round(e)}ms`;
}
function xs(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Ts(e) {
  const r = je({}, Es, e.easing), t = je({}, _s, e.duration);
  return je({
    getAutoHeightDuration: xs,
    create: (a = ["all"], s = {}) => {
      const {
        duration: u = t.standard,
        easing: l = r.easeInOut,
        delay: d = 0
      } = s, p = it(s, bs);
      if (process.env.NODE_ENV !== "production") {
        const g = (h) => typeof h == "string", _ = (h) => !isNaN(parseFloat(h));
        !g(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !_(u) && !g(u) && console.error(`MUI: Argument "duration" must be a number or a string but found ${u}.`), g(l) || console.error('MUI: Argument "easing" must be a string.'), !_(d) && !g(d) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(p).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(p).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((g) => `${g} ${typeof u == "string" ? u : Nn(u)} ${l} ${typeof d == "string" ? d : Nn(d)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Cs = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Os = Cs, Ss = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Fs(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: a = {},
    typography: s = {}
  } = e, u = it(e, Ss);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : yr(18));
  const l = fs(n), d = ro(e);
  let p = Ke(d, {
    mixins: Vi(d.breakpoints, t),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: vs.slice(),
    typography: ps(l, s),
    transitions: Ts(a),
    zIndex: je({}, Os)
  });
  if (p = Ke(p, u), p = r.reduce((g, _) => Ke(g, _), p), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], _ = (h, F) => {
      let A;
      for (A in h) {
        const v = h[A];
        if (g.indexOf(A) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = oa("", A);
            console.error([`MUI: The \`${F}\` component increases the CSS specificity of the \`${A}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[A] = {};
        }
      }
    };
    Object.keys(p.components).forEach((h) => {
      const F = p.components[h].styleOverrides;
      F && h.indexOf("Mui") === 0 && _(F, h);
    });
  }
  return p;
}
const Rs = Fs(), ws = Rs, As = (e) => Qr(e) && e !== "classes", ks = Ui({
  defaultTheme: ws,
  rootShouldForwardProp: As
}), Ps = ks, $s = Ps(na)(({ theme: e }) => ({
  border: `1px solid ${e.palette.divider}`,
  "& .MuiDataGrid-columnHeaders": {
    borderBottom: `1px solid ${e.palette.divider}`
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${e.palette.divider}`
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${e.palette.divider}`
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none"
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: `1px solid ${e.palette.divider}`
  },
  "& .MuiDataGrid-cell": {
    color: e.palette.mode === "light" ? "rgba(0,0,0,.85)" : "rgba(255,255,255,0.85)",
    "& .MuiDataGrid-colCell, .MuiDataGrid-cell": {
      borderRight: `1px solid ${e.palette.divider}`
    },
    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
      borderBottom: `1px solid ${e.palette.divider}`
    },
    "& .MuiDataGrid-cell": {
      color: e.palette.divider
    }
  }
})), Ds = [5];
function rc({
  autoHeight: e = !0,
  checkboxSelection: r = !0,
  disableSelectionOnClick: t = !0,
  pageSize: n = 10,
  rowsPerPageOptions: a = Ds,
  ...s
}) {
  return /* @__PURE__ */ oe.jsx(
    $s,
    {
      ...s,
      pageSize: n,
      rowsPerPageOptions: a,
      autoHeight: e,
      checkboxSelection: r,
      disableSelectionOnClick: t
    }
  );
}
function tc(e) {
  return /* @__PURE__ */ oe.jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ oe.jsx(Ho, { ...e }) });
}
function js(e) {
  return /* @__PURE__ */ oe.jsx(qo, { ...e, control: /* @__PURE__ */ oe.jsx(Jo, { className: "py-3" }) });
}
function nc({
  label: e,
  required: r,
  options: t,
  className: n = "",
  direction: a = "vertical",
  ...s
}) {
  return /* @__PURE__ */ oe.jsxs(Xo, { className: "flexf lex-col", children: [
    e && /* @__PURE__ */ oe.jsx(Zo, { required: r, children: e }),
    /* @__PURE__ */ oe.jsx(
      Qo,
      {
        ...s,
        className: `${n} ${a === "horizontal" ? "!flex-row" : ""}`,
        children: t.map((u) => /* @__PURE__ */ oe.jsx(
          js,
          {
            value: u.value,
            label: u.label
          },
          u.value
        ))
      }
    )
  ] });
}
function oc({ children: e, ...r }) {
  return /* @__PURE__ */ oe.jsx("div", { ...r, role: "tabpanel", children: /* @__PURE__ */ oe.jsx(ea, { className: "h-full p-24", children: e }) });
}
var tt = { exports: {} };
tt.exports;
(function(e, r) {
  var t = 200, n = "__lodash_hash_undefined__", a = 800, s = 16, u = 9007199254740991, l = "[object Arguments]", d = "[object Array]", p = "[object AsyncFunction]", g = "[object Boolean]", _ = "[object Date]", h = "[object Error]", F = "[object Function]", A = "[object GeneratorFunction]", v = "[object Map]", m = "[object Number]", R = "[object Null]", I = "[object Object]", Y = "[object Proxy]", L = "[object RegExp]", b = "[object Set]", ge = "[object String]", Te = "[object Undefined]", Pe = "[object WeakMap]", Ce = "[object ArrayBuffer]", q = "[object DataView]", ye = "[object Float32Array]", Re = "[object Float64Array]", me = "[object Int8Array]", he = "[object Int16Array]", ve = "[object Int32Array]", be = "[object Uint8Array]", Oe = "[object Uint8ClampedArray]", $e = "[object Uint16Array]", Me = "[object Uint32Array]", E = /[\\^$.*+?()[\]{}|]/g, C = /^\[object .+?Constructor\]$/, B = /^(?:0|[1-9]\d*)$/, O = {};
  O[ye] = O[Re] = O[me] = O[he] = O[ve] = O[be] = O[Oe] = O[$e] = O[Me] = !0, O[l] = O[d] = O[Ce] = O[g] = O[q] = O[_] = O[h] = O[F] = O[v] = O[m] = O[I] = O[L] = O[b] = O[ge] = O[Pe] = !1;
  var D = typeof Xr == "object" && Xr && Xr.Object === Object && Xr, z = typeof self == "object" && self && self.Object === Object && self, P = D || z || Function("return this")(), j = r && !r.nodeType && r, M = j && !0 && e && !e.nodeType && e, U = M && M.exports === j, N = U && D.process, pe = function() {
    try {
      var o = M && M.require && M.require("util").types;
      return o || N && N.binding && N.binding("util");
    } catch {
    }
  }(), x = pe && pe.isTypedArray;
  function _e(o, c, f) {
    switch (f.length) {
      case 0:
        return o.call(c);
      case 1:
        return o.call(c, f[0]);
      case 2:
        return o.call(c, f[0], f[1]);
      case 3:
        return o.call(c, f[0], f[1], f[2]);
    }
    return o.apply(c, f);
  }
  function w(o, c) {
    for (var f = -1, S = Array(o); ++f < o; )
      S[f] = c(f);
    return S;
  }
  function we(o) {
    return function(c) {
      return o(c);
    };
  }
  function Ie(o, c) {
    return o == null ? void 0 : o[c];
  }
  function Xe(o, c) {
    return function(f) {
      return o(c(f));
    };
  }
  var Ir = Array.prototype, rr = Function.prototype, tr = Object.prototype, br = P["__core-js_shared__"], He = rr.toString, Ne = tr.hasOwnProperty, Nr = function() {
    var o = /[^.]+$/.exec(br && br.keys && br.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Er = tr.toString, Br = He.call(Object), Ze = RegExp(
    "^" + He.call(Ne).replace(E, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), nr = U ? P.Buffer : void 0, _r = P.Symbol, xr = P.Uint8Array, or = nr ? nr.allocUnsafe : void 0, Lr = Xe(Object.getPrototypeOf, Object), zr = Object.create, ht = tr.propertyIsEnumerable, gt = Ir.splice, We = _r ? _r.toStringTag : void 0, ar = function() {
    try {
      var o = Ot(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), yt = nr ? nr.isBuffer : void 0, ir = Math.max, Ur = Date.now, Ye = Ot(P, "Map"), Ge = Ot(Object, "create"), Tr = function() {
    function o() {
    }
    return function(c) {
      if (!Qe(c))
        return {};
      if (zr)
        return zr(c);
      o.prototype = c;
      var f = new o();
      return o.prototype = void 0, f;
    };
  }();
  function Le(o) {
    var c = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++c < f; ) {
      var S = o[c];
      this.set(S[0], S[1]);
    }
  }
  function vt() {
    this.__data__ = Ge ? Ge(null) : {}, this.size = 0;
  }
  function Wr(o) {
    var c = this.has(o) && delete this.__data__[o];
    return this.size -= c ? 1 : 0, c;
  }
  function bt(o) {
    var c = this.__data__;
    if (Ge) {
      var f = c[o];
      return f === n ? void 0 : f;
    }
    return Ne.call(c, o) ? c[o] : void 0;
  }
  function Yr(o) {
    var c = this.__data__;
    return Ge ? c[o] !== void 0 : Ne.call(c, o);
  }
  function Gr(o, c) {
    var f = this.__data__;
    return this.size += this.has(o) ? 0 : 1, f[o] = Ge && c === void 0 ? n : c, this;
  }
  Le.prototype.clear = vt, Le.prototype.delete = Wr, Le.prototype.get = bt, Le.prototype.has = Yr, Le.prototype.set = Gr;
  function Be(o) {
    var c = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++c < f; ) {
      var S = o[c];
      this.set(S[0], S[1]);
    }
  }
  function Et() {
    this.__data__ = [], this.size = 0;
  }
  function Kr(o) {
    var c = this.__data__, f = Fe(c, o);
    if (f < 0)
      return !1;
    var S = c.length - 1;
    return f == S ? c.pop() : gt.call(c, f, 1), --this.size, !0;
  }
  function _t(o) {
    var c = this.__data__, f = Fe(c, o);
    return f < 0 ? void 0 : c[f][1];
  }
  function xt(o) {
    return Fe(this.__data__, o) > -1;
  }
  function Tt(o, c) {
    var f = this.__data__, S = Fe(f, o);
    return S < 0 ? (++this.size, f.push([o, c])) : f[S][1] = c, this;
  }
  Be.prototype.clear = Et, Be.prototype.delete = Kr, Be.prototype.get = _t, Be.prototype.has = xt, Be.prototype.set = Tt;
  function qe(o) {
    var c = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++c < f; ) {
      var S = o[c];
      this.set(S[0], S[1]);
    }
  }
  function i() {
    this.size = 0, this.__data__ = {
      hash: new Le(),
      map: new (Ye || Be)(),
      string: new Le()
    };
  }
  function y(o) {
    var c = qr(this, o).delete(o);
    return this.size -= c ? 1 : 0, c;
  }
  function T(o) {
    return qr(this, o).get(o);
  }
  function $(o) {
    return qr(this, o).has(o);
  }
  function J(o, c) {
    var f = qr(this, o), S = f.size;
    return f.set(o, c), this.size += f.size == S ? 0 : 1, this;
  }
  qe.prototype.clear = i, qe.prototype.delete = y, qe.prototype.get = T, qe.prototype.has = $, qe.prototype.set = J;
  function V(o) {
    var c = this.__data__ = new Be(o);
    this.size = c.size;
  }
  function G() {
    this.__data__ = new Be(), this.size = 0;
  }
  function W(o) {
    var c = this.__data__, f = c.delete(o);
    return this.size = c.size, f;
  }
  function Ee(o) {
    return this.__data__.get(o);
  }
  function ce(o) {
    return this.__data__.has(o);
  }
  function fe(o, c) {
    var f = this.__data__;
    if (f instanceof Be) {
      var S = f.__data__;
      if (!Ye || S.length < t - 1)
        return S.push([o, c]), this.size = ++f.size, this;
      f = this.__data__ = new qe(S);
    }
    return f.set(o, c), this.size = f.size, this;
  }
  V.prototype.clear = G, V.prototype.delete = W, V.prototype.get = Ee, V.prototype.has = ce, V.prototype.set = fe;
  function Se(o, c) {
    var f = Rt(o), S = !f && Ft(o), H = !f && !S && on(o), ne = !f && !S && !H && sn(o), ae = f || S || H || ne, K = ae ? w(o.length, String) : [], ie = K.length;
    for (var De in o)
      (c || Ne.call(o, De)) && !(ae && // Safari 9 has enumerable `arguments.length` in strict mode.
      (De == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      H && (De == "offset" || De == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ne && (De == "buffer" || De == "byteLength" || De == "byteOffset") || // Skip index properties.
      tn(De, ie))) && K.push(De);
    return K;
  }
  function ze(o, c, f) {
    (f !== void 0 && !Jr(o[c], f) || f === void 0 && !(c in o)) && Ct(o, c, f);
  }
  function Vr(o, c, f) {
    var S = o[c];
    (!(Ne.call(o, c) && Jr(S, f)) || f === void 0 && !(c in o)) && Ct(o, c, f);
  }
  function Fe(o, c) {
    for (var f = o.length; f--; )
      if (Jr(o[f][0], c))
        return f;
    return -1;
  }
  function Ct(o, c, f) {
    c == "__proto__" && ar ? ar(o, c, {
      configurable: !0,
      enumerable: !0,
      value: f,
      writable: !0
    }) : o[c] = f;
  }
  var oo = vo();
  function Hr(o) {
    return o == null ? o === void 0 ? Te : R : We && We in Object(o) ? bo(o) : Oo(o);
  }
  function en(o) {
    return Cr(o) && Hr(o) == l;
  }
  function ao(o) {
    if (!Qe(o) || To(o))
      return !1;
    var c = At(o) ? Ze : C;
    return c.test(wo(o));
  }
  function io(o) {
    return Cr(o) && an(o.length) && !!O[Hr(o)];
  }
  function so(o) {
    if (!Qe(o))
      return Co(o);
    var c = nn(o), f = [];
    for (var S in o)
      S == "constructor" && (c || !Ne.call(o, S)) || f.push(S);
    return f;
  }
  function rn(o, c, f, S, H) {
    o !== c && oo(c, function(ne, ae) {
      if (H || (H = new V()), Qe(ne))
        co(o, c, ae, f, rn, S, H);
      else {
        var K = S ? S(St(o, ae), ne, ae + "", o, c, H) : void 0;
        K === void 0 && (K = ne), ze(o, ae, K);
      }
    }, cn);
  }
  function co(o, c, f, S, H, ne, ae) {
    var K = St(o, f), ie = St(c, f), De = ae.get(ie);
    if (De) {
      ze(o, f, De);
      return;
    }
    var Ae = ne ? ne(K, ie, f + "", o, c, ae) : void 0, Or = Ae === void 0;
    if (Or) {
      var kt = Rt(ie), Pt = !kt && on(ie), fn = !kt && !Pt && sn(ie);
      Ae = ie, kt || Pt || fn ? Rt(K) ? Ae = K : Ao(K) ? Ae = ho(K) : Pt ? (Or = !1, Ae = lo(ie, !0)) : fn ? (Or = !1, Ae = mo(ie, !0)) : Ae = [] : ko(ie) || Ft(ie) ? (Ae = K, Ft(K) ? Ae = Po(K) : (!Qe(K) || At(K)) && (Ae = Eo(ie))) : Or = !1;
    }
    Or && (ae.set(ie, Ae), H(Ae, ie, S, ne, ae), ae.delete(ie)), ze(o, f, Ae);
  }
  function uo(o, c) {
    return Fo(So(o, c, un), o + "");
  }
  var fo = ar ? function(o, c) {
    return ar(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Do(c),
      writable: !0
    });
  } : un;
  function lo(o, c) {
    if (c)
      return o.slice();
    var f = o.length, S = or ? or(f) : new o.constructor(f);
    return o.copy(S), S;
  }
  function po(o) {
    var c = new o.constructor(o.byteLength);
    return new xr(c).set(new xr(o)), c;
  }
  function mo(o, c) {
    var f = c ? po(o.buffer) : o.buffer;
    return new o.constructor(f, o.byteOffset, o.length);
  }
  function ho(o, c) {
    var f = -1, S = o.length;
    for (c || (c = Array(S)); ++f < S; )
      c[f] = o[f];
    return c;
  }
  function go(o, c, f, S) {
    var H = !f;
    f || (f = {});
    for (var ne = -1, ae = c.length; ++ne < ae; ) {
      var K = c[ne], ie = S ? S(f[K], o[K], K, f, o) : void 0;
      ie === void 0 && (ie = o[K]), H ? Ct(f, K, ie) : Vr(f, K, ie);
    }
    return f;
  }
  function yo(o) {
    return uo(function(c, f) {
      var S = -1, H = f.length, ne = H > 1 ? f[H - 1] : void 0, ae = H > 2 ? f[2] : void 0;
      for (ne = o.length > 3 && typeof ne == "function" ? (H--, ne) : void 0, ae && _o(f[0], f[1], ae) && (ne = H < 3 ? void 0 : ne, H = 1), c = Object(c); ++S < H; ) {
        var K = f[S];
        K && o(c, K, S, ne);
      }
      return c;
    });
  }
  function vo(o) {
    return function(c, f, S) {
      for (var H = -1, ne = Object(c), ae = S(c), K = ae.length; K--; ) {
        var ie = ae[o ? K : ++H];
        if (f(ne[ie], ie, ne) === !1)
          break;
      }
      return c;
    };
  }
  function qr(o, c) {
    var f = o.__data__;
    return xo(c) ? f[typeof c == "string" ? "string" : "hash"] : f.map;
  }
  function Ot(o, c) {
    var f = Ie(o, c);
    return ao(f) ? f : void 0;
  }
  function bo(o) {
    var c = Ne.call(o, We), f = o[We];
    try {
      o[We] = void 0;
      var S = !0;
    } catch {
    }
    var H = Er.call(o);
    return S && (c ? o[We] = f : delete o[We]), H;
  }
  function Eo(o) {
    return typeof o.constructor == "function" && !nn(o) ? Tr(Lr(o)) : {};
  }
  function tn(o, c) {
    var f = typeof o;
    return c = c ?? u, !!c && (f == "number" || f != "symbol" && B.test(o)) && o > -1 && o % 1 == 0 && o < c;
  }
  function _o(o, c, f) {
    if (!Qe(f))
      return !1;
    var S = typeof c;
    return (S == "number" ? wt(f) && tn(c, f.length) : S == "string" && c in f) ? Jr(f[c], o) : !1;
  }
  function xo(o) {
    var c = typeof o;
    return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? o !== "__proto__" : o === null;
  }
  function To(o) {
    return !!Nr && Nr in o;
  }
  function nn(o) {
    var c = o && o.constructor, f = typeof c == "function" && c.prototype || tr;
    return o === f;
  }
  function Co(o) {
    var c = [];
    if (o != null)
      for (var f in Object(o))
        c.push(f);
    return c;
  }
  function Oo(o) {
    return Er.call(o);
  }
  function So(o, c, f) {
    return c = ir(c === void 0 ? o.length - 1 : c, 0), function() {
      for (var S = arguments, H = -1, ne = ir(S.length - c, 0), ae = Array(ne); ++H < ne; )
        ae[H] = S[c + H];
      H = -1;
      for (var K = Array(c + 1); ++H < c; )
        K[H] = S[H];
      return K[c] = f(ae), _e(o, this, K);
    };
  }
  function St(o, c) {
    if (!(c === "constructor" && typeof o[c] == "function") && c != "__proto__")
      return o[c];
  }
  var Fo = Ro(fo);
  function Ro(o) {
    var c = 0, f = 0;
    return function() {
      var S = Ur(), H = s - (S - f);
      if (f = S, H > 0) {
        if (++c >= a)
          return arguments[0];
      } else
        c = 0;
      return o.apply(void 0, arguments);
    };
  }
  function wo(o) {
    if (o != null) {
      try {
        return He.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Jr(o, c) {
    return o === c || o !== o && c !== c;
  }
  var Ft = en(function() {
    return arguments;
  }()) ? en : function(o) {
    return Cr(o) && Ne.call(o, "callee") && !ht.call(o, "callee");
  }, Rt = Array.isArray;
  function wt(o) {
    return o != null && an(o.length) && !At(o);
  }
  function Ao(o) {
    return Cr(o) && wt(o);
  }
  var on = yt || jo;
  function At(o) {
    if (!Qe(o))
      return !1;
    var c = Hr(o);
    return c == F || c == A || c == p || c == Y;
  }
  function an(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= u;
  }
  function Qe(o) {
    var c = typeof o;
    return o != null && (c == "object" || c == "function");
  }
  function Cr(o) {
    return o != null && typeof o == "object";
  }
  function ko(o) {
    if (!Cr(o) || Hr(o) != I)
      return !1;
    var c = Lr(o);
    if (c === null)
      return !0;
    var f = Ne.call(c, "constructor") && c.constructor;
    return typeof f == "function" && f instanceof f && He.call(f) == Br;
  }
  var sn = x ? we(x) : io;
  function Po(o) {
    return go(o, cn(o));
  }
  function cn(o) {
    return wt(o) ? Se(o, !0) : so(o);
  }
  var $o = yo(function(o, c, f) {
    rn(o, c, f);
  });
  function Do(o) {
    return function() {
      return o;
    };
  }
  function un(o) {
    return o;
  }
  function jo() {
    return !1;
  }
  e.exports = $o;
})(tt, tt.exports);
var Ms = tt.exports;
const Bn = /* @__PURE__ */ Wn(Ms), dr = {
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
}, pr = {
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
}, Is = {
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
}, Ln = Is, X = {
  primary: "rgb(17, 24, 39)",
  secondary: "rgb(107, 114, 128)",
  disabled: "rgb(149, 156, 169)"
}, k = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(148, 163, 184)",
  disabled: "rgb(156, 163, 175)"
}, Ns = {
  default: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: X,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)"
      },
      primary: {
        light: "#64748b",
        main: "#1e293b",
        dark: "#0f172a",
        contrastText: k.primary
      },
      secondary: {
        light: "#818cf8",
        main: "#4f46e5",
        dark: "#3730a3",
        contrastText: k.primary
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
      text: k,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)"
      },
      primary: {
        light: "#64748b",
        main: "#334155",
        dark: "#0f172a",
        contrastText: k.primary
      },
      secondary: {
        light: "#818cf8",
        main: "#4f46e5",
        dark: "#3730a3",
        contrastText: k.primary
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
      text: X,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)"
      },
      primary: {
        light: dr[200],
        main: dr[500],
        dark: dr[800],
        contrastText: k.primary
      },
      secondary: {
        light: pr[100],
        main: pr[500],
        dark: pr[900],
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#b3d1d1",
        main: "#006565",
        dark: "#003737",
        contrastText: k.primary
      },
      secondary: {
        light: "#ffecc0",
        main: "#FFBE2C",
        dark: "#ff9910",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#fdf3da",
        main: "#f8d683",
        dark: "#f3bc53",
        contrastText: X.primary
      },
      secondary: {
        light: "#FADCB3",
        main: "#F3B25F",
        dark: "#ec9339",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#D9C8CE",
        main: "#80485B",
        dark: "#50212F",
        contrastText: k.primary
      },
      secondary: {
        light: "#FFE3BF",
        main: "#FFB049",
        dark: "#FF8619",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#CDCCE8",
        main: "#5854B1",
        dark: "#2D2988",
        contrastText: k.primary
      },
      secondary: {
        light: "#F8EBF2",
        main: "#E7BDD3",
        dark: "#D798B7",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#C2C7F1",
        main: "#3543D0",
        dark: "#161EB3",
        contrastText: k.primary
      },
      secondary: {
        light: "#B3F1FE",
        main: "#00CFFD",
        dark: "#00B2FC",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#BBE2DA",
        main: "#1B9E85",
        dark: "#087055",
        contrastText: k.primary
      },
      secondary: {
        light: "#FFD0C1",
        main: "#FF6231",
        dark: "#FF3413",
        contrastText: k.primary
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
      text: X,
      primary: {
        light: "#BFC4E6",
        main: "#2A3BAB",
        dark: "#0F1980",
        contrastText: k.primary
      },
      secondary: {
        light: "#C2ECF0",
        main: "#33C1CD",
        dark: "#149EAE",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#D2EFF2",
        main: "#68C8D5",
        dark: "#3AA7BA",
        contrastText: X.primary
      },
      secondary: {
        light: "#FFF2C6",
        main: "#FED441",
        dark: "#FDB91C",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#D3C0CD",
        main: "#6B2C57",
        dark: "#3C102C",
        contrastText: k.primary
      },
      secondary: {
        light: "#FDEAC9",
        main: "#F9B84B",
        dark: "#F59123",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#C6C9CD",
        main: "#404B57",
        dark: "#1C232C",
        contrastText: k.primary
      },
      secondary: {
        light: "#FEEDC7",
        main: "#FCC344",
        dark: "#FAA11F",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#C4C4C4",
        main: "#3A3A3A",
        dark: "#181818",
        contrastText: k.primary
      },
      secondary: {
        light: "#EFEFED",
        main: "#CBCAC3",
        dark: "#ACABA1",
        contrastText: X.primary
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
      text: X,
      primary: {
        light: "#FFFAF6",
        main: "#FFEDE2",
        dark: "#FFE0CF",
        contrastText: X.primary
      },
      secondary: {
        light: "#DBD8F7",
        main: "#887CE3",
        dark: "#584CD0",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#C2C2C3",
        main: "#323338",
        dark: "#131417",
        contrastText: k.primary
      },
      secondary: {
        light: "#B8E1D9",
        main: "#129B7F",
        dark: "#056D4F",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#C9CACE",
        main: "#4B4F5A",
        dark: "#23262E",
        contrastText: k.primary
      },
      secondary: {
        light: "#F8F5F2",
        main: "#E6DED5",
        dark: "#D5C8BA",
        contrastText: X.primary
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
      text: k,
      primary: {
        light: "#C2C8D2",
        main: "#354968",
        dark: "#16213A",
        contrastText: k.primary
      },
      secondary: {
        light: "#F4CFCA",
        main: "#D55847",
        dark: "#C03325",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#CECADF",
        main: "#5A4E93",
        dark: "#2E2564",
        contrastText: k.primary
      },
      secondary: {
        light: "#B3EBD6",
        main: "#00BC77",
        dark: "#009747",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#CCD7E2",
        main: "#56789D",
        dark: "#2B486F",
        contrastText: k.primary
      },
      secondary: {
        light: "#D7D3ED",
        main: "#796CC4",
        dark: "#493DA2",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#FFC7CE",
        main: "#FF445D",
        dark: "#FF1F30",
        contrastText: k.primary
      },
      secondary: {
        light: "#B4E3FB",
        main: "#05A2F3",
        dark: "#0175EA",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "FFECC5",
        main: "#FEBE3E",
        dark: "#FD991B",
        contrastText: X.primary
      },
      secondary: {
        light: "#FFC8C7",
        main: "#FE4644",
        dark: "#FD201F",
        contrastText: X.primary
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
      text: k,
      primary: {
        light: "#BEBFC8",
        main: "#252949",
        dark: "#0D0F21",
        contrastText: k.primary
      },
      secondary: {
        light: "#CBD7FE",
        main: "#5079FC",
        dark: "#2749FA",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#BCC8CD",
        main: "#204657",
        dark: "#0B202C",
        contrastText: k.primary
      },
      secondary: {
        light: "#B3EBC5",
        main: "#00BD3E",
        dark: "#00981B",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#C3C2D2",
        main: "#36336A",
        dark: "#16143C",
        contrastText: k.primary
      },
      secondary: {
        light: "#D6CEFC",
        main: "#765CF5",
        dark: "#4630EE",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#BFB7BF",
        main: "#2A0F29",
        dark: "#0F040F",
        contrastText: k.primary
      },
      secondary: {
        light: "#D9B9C3",
        main: "#801737",
        dark: "#500716",
        contrastText: k.primary
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
      text: k,
      primary: {
        light: "#CCC3C8",
        main: "#543847",
        dark: "#291720",
        contrastText: k.primary
      },
      secondary: {
        light: "#DFB8BD",
        main: "#BE717A",
        dark: "#99424A",
        contrastText: X.primary
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
      text: k,
      primary: {
        light: dr[200],
        main: dr[700],
        dark: dr[800],
        contrastText: k.primary
      },
      secondary: {
        light: pr[100],
        main: pr[500],
        dark: pr[900],
        contrastText: X.primary
      },
      background: {
        paper: Ln[700],
        default: Ln[900]
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c"
      }
    }
  }
}, Bs = {
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
        root: ({ theme: e }) => ({
          boxShadow: "none",
          "& :not(:first-child):not(:last-child)": {
            borderRadius: 0,
            borderRight: `1px solid ${e.palette.primary.dark}`
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
}, Ls = {
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
function zs(e) {
  const r = Un(e);
  return {
    border: (t = 1) => ({
      borderWidth: t,
      borderStyle: "solid",
      borderColor: r.palette.divider
    }),
    borderLeft: (t = 1) => ({
      borderLeftWidth: t,
      borderStyle: "solid",
      borderColor: r.palette.divider
    }),
    borderRight: (t = 1) => ({
      borderRightWidth: t,
      borderStyle: "solid",
      borderColor: r.palette.divider
    }),
    borderTop: (t = 1) => ({
      borderTopWidth: t,
      borderStyle: "solid",
      borderColor: r.palette.divider
    }),
    borderBottom: (t = 1) => ({
      borderBottomWidth: t,
      borderStyle: "solid",
      borderColor: r.palette.divider
    })
  };
}
function Us(e = "dark", r = "ltr") {
  const t = Bn(
    {},
    Bs,
    Ns[e],
    Ls
  );
  return Un(
    Bn({}, t, {
      mixins: zs(t),
      direction: r
    })
  );
}
const ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Us
}, Symbol.toStringTag, { value: "Module" }));
function ic(e = !1) {
  const [r, t] = nt(e), n = Vt(() => t((a) => !a), []);
  return {
    isOpen: r,
    setOpen: t,
    toggle: n
  };
}
export {
  Zs as AlertDialog,
  Qs as BackButton,
  ec as ColorPicker,
  rc as DataGrid,
  tc as LoadingIndicator,
  js as RadioButton,
  nc as RadioButtonGroup,
  oc as TabPanel,
  ac as themesConfig,
  Ca as useMenuState,
  ic as useToggle
};
