document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;

    let lastScroll = 0;
    let currentScroll = 0;

    const smoothScroll = () => {
        lastScroll += (currentScroll - lastScroll) * 0.1; 
        html.scrollTop = lastScroll;

        if (Math.abs(currentScroll - lastScroll) > 0.5) {
            requestAnimationFrame(smoothScroll);
        }
    };

    document.addEventListener("scroll", () => {
        currentScroll = html.scrollTop;
        requestAnimationFrame(smoothScroll);
    });
});
