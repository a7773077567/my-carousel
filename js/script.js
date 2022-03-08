const buttons = document.querySelectorAll("[data-carousel-button]");
let moving = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!moving) {
      disableInteraction();
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      console.log("8:offset ", offset);
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
      console.log("12:slides ", slides);
      const activeSlide = slides.querySelector("[data-active]");
      console.log("14:activeSlide", activeSlide);
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      console.log("16:newIndex ", newIndex);
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex > slides.children.length - 1) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    }
  });
});

function disableInteraction() {
  moving = true;
  setTimeout(() => {
    moving = false;
  }, 300);
}
