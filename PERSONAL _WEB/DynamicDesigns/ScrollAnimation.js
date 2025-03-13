document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay = `${index * 0.15}s`; // Subtle stagger
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Ensures animation runs only once
                }
            });
        },
        {
            rootMargin: "0px 0px -10% 0px", // Triggers slightly before entering viewport
            threshold: 0.1, // Starts when at least 10% of the element is visible
        }
    );

    document.querySelectorAll(".about-me, .timeline-item, .Lang-icon").forEach((el) => observer.observe(el));
});
