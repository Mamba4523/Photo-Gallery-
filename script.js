window.onload = initializeGallery;

function initializeGallery() {
    console.log("Gallery initialized");
    const images = document.querySelectorAll(".gallery img");

    // Add tabindex and event listeners
    for (let img of images) {
        img.setAttribute("tabindex", "0");

        // Mouse events
        img.addEventListener("mouseover", () => {
            console.log(`Mouse entered: ${img.alt}`);
        });
        img.addEventListener("mouseleave", () => {
            console.log(`Mouse left: ${img.alt}`);
        });

        // Focus events
        img.addEventListener("focus", () => {
            console.log(`Focused on: ${img.alt}`);
            img.style.borderColor = "green";
        });
        img.addEventListener("blur", () => {
            console.log(`Blurred from: ${img.alt}`);
            img.style.borderColor = "transparent";
        });
    }
}