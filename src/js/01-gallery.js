// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

createMarkup(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function createMarkup(array) {
  const markup = array.reduce((acc, item) => {
    const { preview, original, description } = item;
    acc += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    return acc;
  }, '');

  gallery.insertAdjacentHTML('beforeend', markup);
}
