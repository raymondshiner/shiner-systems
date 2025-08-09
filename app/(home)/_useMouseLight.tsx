"use client";

import { useEffect, useState } from "react";

type Point = { x: number; y: number };

/**
 * MouseLight component renders a positioned div that follows the user's cursor.
 * Separated from the page for clarity and reusability.
 */
export function MouseLight() {
    const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
    const SIZE = 140; // keep in sync with .mouse-light width/height

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handle);
        return () => window.removeEventListener("mousemove", handle);
    }, []);

    return (
        <div
            className="mouse-light"
            style={{ left: pos.x - SIZE / 2, top: pos.y - SIZE / 2 }}
        />
    );
}

/**
 * Optional hook if raw position is needed elsewhere.
 */
export function useMouseLightPosition() {
    const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
    useEffect(() => {
        if (typeof window === "undefined") return;
        const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handle);
        return () => window.removeEventListener("mousemove", handle);
    }, []);
    return pos;
}
