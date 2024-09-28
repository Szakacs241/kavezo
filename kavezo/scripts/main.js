document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.querySelector("h2");
    welcomeMessage.style.opacity = 0;

    setTimeout(() => {
        welcomeMessage.style.transition = "opacity 2s";
        welcomeMessage.style.opacity = 1;
    }, 500);
});

