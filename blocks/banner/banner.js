export default function decorate(block) {
  // Outer banner block
  block.classList.add('banner', 'position-relative');

  // Add background image styles
  const pictureEl = block.querySelector('picture');
  if (pictureEl) {
    pictureEl.classList.add('banner__img-container', 'h-100', 'position-absolute', 'top-0', 'start-0', 'w-100');

    const img = pictureEl.querySelector('img');
    if (img) {
      img.classList.add('banner__img-container--img', 'w-100', 'h-100', 'object-fit-cover');
      img.setAttribute('loading', 'lazy');
    }
  }

  // Create banner__details
  const detailsWrapper = document.createElement('div');
  detailsWrapper.classList.add('banner__details', 'z-1', 'position-relative');

  const titleContainer = block.querySelector('h2')?.parentElement?.parentElement;
  const ctaContainer = block.querySelector('.button-container')?.parentElement;

  if (titleContainer) {
    const titleEl = titleContainer.querySelector('h2');
    if (titleEl) {
      titleEl.classList.add('banner__details--title', 'fvs-light');
    }
    detailsWrapper.appendChild(titleContainer);
  }

  if (ctaContainer) {
    ctaContainer.classList.add('banner__details--cta');
    detailsWrapper.appendChild(ctaContainer);
  }

  block.appendChild(detailsWrapper);
}
