import { useEffect, useState } from "react";

export type Point = { x: number; y: number };

export function useMousePosition(): Point {
    const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 });

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return mousePosition;
}
