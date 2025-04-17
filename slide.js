
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function updateSlides(slides, currentIndex) {
    slides.forEach((slide, index) => {
        const slideInside = slide.querySelector(".slide-content");
        if (index === currentIndex) {
            // Active slide
            slide.setAttribute("aria-hidden", "false");
            slide.style.zIndex = "10";

        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            // Previous slide
            slide.setAttribute("aria-hidden", "true");
            slide.style.zIndex = "11";
            slide.classList.add("push-right");
            slideInside?.classList.add("push-left");
        } else if (index === (currentIndex + 1 + slides.length) % slides.length) {
            //next slide
            slide.style.zIndex = "9";
            slide.classList.remove("push-right")
            slideInside.classList.remove("push-left")
        }
        else {
            // Other slides (hidden)
            slide.setAttribute("aria-hidden", "true");
            slide.style.zIndex = "0";


        }
    });
}

function slidesTimer(slides) {
    setTimeout(() => {
        //set back to 0 when cycle the whole array
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides(slides, currentIndex);
        slidesTimer(slides);
    }, 3000);
}

//initalize

slidesTimer(slides);
