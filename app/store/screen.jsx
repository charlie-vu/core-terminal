import { create } from 'zustand';

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

// Zustand store for screen width and height
const useScreenStore = create((set) => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    gt: {},
    updateDimensions: () => {
        const type = {}
        Object.keys(breakpoints).forEach(key => {
            type[key] = window.innerWidth > breakpoints[key];
        });
        return set({
            width: window.innerWidth,
            height: window.innerHeight,
            gt: type
        })
    }
}));

export default useScreenStore;