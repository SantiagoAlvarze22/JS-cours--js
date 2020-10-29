'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//functions

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  // if (e.key === 'ESCAPE') {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // }
};

//addEventslisteners
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// window.addEventListener('keydown', closeModal);

document.addEventListener('keydown', function () {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
