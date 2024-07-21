export const gallery = document.querySelector('.gallery-list');

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  const formattedTags = tags.split(', ').join(', ');
  return `<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href='${largeImageURL}'>
  <img class="gallery-image" src='${webformatURL}' data-source=${largeImageURL} alt='${formattedTags}'>
  </a>
  </div>

  <div class="img-data">
  
  <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${likes}</span>
  </div>


   <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${views}</span>
  </div>


  <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${comments}</span>
  </div>

  <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${downloads}</span>
  </div>

  </div>

  </li>`;
}

export function createListMarkup(liArray) {
  return liArray.map(createMarkup).join('');
}
