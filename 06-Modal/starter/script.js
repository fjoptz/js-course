'use strict';

const modalSelector = document.querySelector('.modal');
const modalSelectorOverlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const openModal = () => {
  modalSelector.classList.remove('hidden');
  modalSelectorOverlay.classList.remove('hidden');
};
const hideModal = () => {
  modalSelector.classList.add('hidden');
  modalSelectorOverlay.classList.add('hidden');
};

for (const element of btnsShowModal) {
  element.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', hideModal);
modalSelectorOverlay.addEventListener('click', hideModal);

document.addEventListener('keydown', event => {
  if (!modalSelector.classList.contains('hidden')) {
    event.key === 'Escape' && hideModal();
  }
});
