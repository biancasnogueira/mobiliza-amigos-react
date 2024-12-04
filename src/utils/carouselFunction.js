export function initializeCarousel(gallerySelector, controlsSelector, itemClass) {
  const controls = document.querySelectorAll(controlsSelector);
  const gallery = document.querySelector(gallerySelector);
  const items = document.querySelectorAll(`.${itemClass}`);

  if (!gallery || controls.length === 0 || items.length === 0) {
    console.error("Carousel elements not found");
    return;
  }

  let currentItem = 0;
  const maxItems = items.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      const isLeft = e.target.closest("button").classList.contains("arrow-left");

      currentItem = isLeft
        ? (currentItem - 1 + maxItems) % maxItems
        : (currentItem + 1) % maxItems;

      const offset = -currentItem * 265; // Ajuste a largura conforme necessário
      gallery.style.transform = `translateX(${offset}px)`;

      items.forEach((item) => item.classList.remove("current-item"));
      items[currentItem].classList.add("current-item");
    });
  });
}
