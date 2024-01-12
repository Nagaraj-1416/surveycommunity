import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show/hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add scroll event listener
    useEffect(() => {
        console.log("$$$");
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}
            onClick={scrollToTop}
            title="Go to top"
        >
            Clik
        </button>
    );
};

export default ScrollToTopButton;
