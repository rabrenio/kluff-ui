/// <reference types="react" />
export default function useMenuState(): {
    anchorEl: HTMLElement | null;
    setAnchorEl: import("react").Dispatch<import("react").SetStateAction<HTMLElement | null>>;
    handleClose: () => void;
};
