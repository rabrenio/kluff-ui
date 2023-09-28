import { useState as n, useCallback as o, useMemo as u } from "react";
function a() {
  const [e, t] = n(null), l = o(() => t(null), []);
  return u(
    () => ({
      anchorEl: e,
      setAnchorEl: t,
      handleClose: l
    }),
    [e]
  );
}
export {
  a as default
};
//# sourceMappingURL=useMenuState.js.map
