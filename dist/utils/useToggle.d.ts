/// <reference types="react" />
export default function useToggle(initiallyOpen?: boolean): {
    isOpen: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    toggle: () => void;
};
