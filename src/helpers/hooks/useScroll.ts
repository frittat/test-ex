import { useState, useEffect } from "react";

export default function useScroll() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsScrolled(window.scrollY !== 0);
        }

        window.addEventListener("scroll", handleResize);
        return () => window.removeEventListener("scroll", handleResize);
    }, []);

    return { isScrolled };
}
