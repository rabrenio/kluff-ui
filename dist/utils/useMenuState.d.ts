/// <reference types="react" />
export default function useMenuState<T = HTMLElement>(): {
    anchorEl: T | null;
    setAnchorEl: import("react").Dispatch<import("react").SetStateAction<T | null>>;
    handleClose: () => void;
};
