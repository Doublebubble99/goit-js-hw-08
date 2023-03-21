import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
function createGalleryMarkup(object) {
  return object
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>`;
    })
    .join('');
}
const allImages = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', allImages);
let gallery = new SimpleLightbox('.gallery a');
console.dir(gallery);
console.log(galleryItems);
