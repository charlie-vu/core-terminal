'use client';
import { useEffect } from 'react';
import useScreenStore from '@/app/store/screen';

export default function ScreenListener() {
    const updateDimensions = useScreenStore((state) => state.updateDimensions);

    useEffect(() => {
        // Update dimensions on mount
        updateDimensions();

        // Add event listener to update dimensions on resize
        window.addEventListener('resize', updateDimensions);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [updateDimensions]);

    return null; // This component doesn't need to render anything
};
