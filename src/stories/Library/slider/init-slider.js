// SwiperJS has a hard time understanding how to deal with keyboard focus and
// setting the slider positioning.
// Because we have items with very different widths, and we use "auto" for
// the actual movement, the focus goes out of sync with the visual visibility.
// This function is called when the swiper is initialized.
// We listen on focus within the item wrapper, and when we detect it, we
// calculate our own transform value, overwriting SwiperJS.
function swiperWrapperEventInit(swiperWrapper) {
  swiperWrapper.addEventListener("focusin", () => {
    const activeSlide = swiperWrapper.querySelector(".swiper-slide-active");

    if (!activeSlide) {
      return;
    }

    let currentSibling = activeSlide;
    let translateWidth = 0;
    let sideMargins = 0;

    // Finding all previous siblings.
    while (currentSibling.previousSibling) {
      currentSibling = currentSibling.previousSibling;

      // Offset width only gives us the 'inner' width. We also need to get
      // the side margins.
      const style = getComputedStyle(currentSibling);
      sideMargins =
        parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);

      // Set a new translate width, used in transform.
      translateWidth -= currentSibling.offsetWidth + sideMargins;
    }

    // Calculate a new translate value, for pulling the slider.
    // We add half of the latest known sidemargin, so the active slide doesn't
    // go flush against the screen.
    // eslint-disable-next-line no-param-reassign
    swiperWrapper.style.transform = `translate3d(${Math.floor(
      translateWidth + sideMargins / 2
    )}px, 0, 0)`;
  });
}

// Initialize the Swiper library, when the page is ready.
window.addEventListener("load", () => {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
  const swiperInit = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: "5%",
    freeMode: true,
    centeredSlidesBounds: false,
    on: {
      init: (swiper) => {
        const swiperWrapper = swiper.el.querySelector(".swiper-wrapper");
        swiperWrapperEventInit(swiperWrapper);
      },
    },
    a11y: {
      slideRole: "listitem",
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 82,
      },
    },
  });
});
