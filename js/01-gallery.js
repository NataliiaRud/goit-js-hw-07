import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsImages = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></div>`
  )
  .join("");
galleryItemsImages.insertAdjacentHTML("beforeend", galleryMarkup);

galleryItemsImages.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const currentImage = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(`<img src="${currentImage}" width="1280"/>`, {
    onShow: (instance) => {
      document.addEventListener("keydown", closeImage);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", closeImage);
    },
  });
  instance.show();
  function closeImage(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
