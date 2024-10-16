import { create } from 'zustand';

// Zustand store for screen width and height
const useScreenStore = create((set) => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    updateDimensions: () =>
        set({
            width: window.innerWidth,
            height: window.innerHeight,
        }),
}));

export default useScreenStore;