document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay = `${index * 0.15}s`; 
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            rootMargin: "0px 0px -10% 0px", 
            threshold: 0.1, 
        }
    );

    document.querySelectorAll(".about-me, .timeline-item, .Lang-icon").forEach((el) => observer.observe(el));
});
