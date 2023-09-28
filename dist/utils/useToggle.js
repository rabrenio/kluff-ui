import { useState as a, useCallback as l } from "react";
function r(t = !1) {
  const [s, e] = a(t), o = l(() => e((n) => !n), []);
  return {
    isOpen: s,
    setOpen: e,
    toggle: o
  };
}
export {
  r as default
};
//# sourceMappingURL=useToggle.js.map
