// =========================
// SCROLL REVEAL
// =========================

const elements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .about-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});

