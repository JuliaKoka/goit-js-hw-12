import { fetchImageName } from './js/pixabay-api';
import { gallery } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loadingIndicator = document.querySelector('.loader');

let searchQuery = '';
let page = 1;
let lightbox;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

function handleSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.elements['user-input'].value;
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please fill in the form',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });
    return;
  }

  gallery.innerHTML = '';
  page = 1;
  fetchNewPage();

  form.reset();
}

function handleLoadMore() {
  page += 1;
  fetchNewPage();
}

function fetchNewPage() {
  loadingIndicator.classList.remove('is-hidden');

  fetchImageName(searchQuery, page).finally(() => {
    loadingIndicator.classList.add('is-hidden');

    if (lightbox) {
      lightbox.destroy();
    }

    lightbox = new SimpleLightbox('.gallery-list a', {
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();

    getBoundingClientRect();
  });
}

function getBoundingClientRect() {
  if (page > 1) {
    const { height: heightOfElement } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({
      top: heightOfElement * 2,
      behavior: 'smooth',
    });
    // console.log(heightOfElement);
  }
}
