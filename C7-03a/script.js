const fadeInElements = document.querySelectorAll('.fade-in');

const Options = {
    root: null,
    rootMargin: "0px",
    thershold: 0.1
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }        
    });
};

const observer = new IntersectionObserver(callback, Options);

fadeInElements.forEach(el => observer.observe(el));