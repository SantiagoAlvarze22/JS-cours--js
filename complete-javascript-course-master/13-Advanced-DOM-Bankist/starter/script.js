'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());

  console.log('current scrroll (x/y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling the s1coords is relative to the viewport and not to the document, what I do it just addiotion the current height the the top coord, and is now accorrding to the html document, absolute position relative to the document
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //nowadays view
  section1.scrollIntoView({ behavior: 'smooth' });
});

//slecting elemetns
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
// .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improving functionality and analytics';
// message.innerHTML = `We use cookies for improving functionality and analytics <button class="btn btn--close-cookie">Got it" </button>`;

// header.prepend(message);
// // header.append(message);

// // header.append(message.cloneNode(true));

// //inseert elementes as a sibling, after or
// // header.before(message);
// header.after(message);

// //delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);

// //consult the properties that has the message element
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// //cambiar propiedades que tengo
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes, standard properties
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// //setting attributes
// logo.alt = 'beatiful minimalist logo';

// //non-standard it doesn't work
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

// console.log(logo.src);

// //relative path
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data attributes, converting the data set propeties in camelcase
// console.log(logo.dataset.versionNumber);

// //classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// //don't use this bc it would overwrite all the logo classes
// logo.className = 'jonas';

// const alertH1 = function (e) {
//   alert('addEvenlistener: grea your are reading and heading');

//   //The event only can listen once, bc everytime that I click, I run it and automaclly delete it

//   //after an amount of time I wan to delete it
//   setTimeout(() => {
//     //The event only can listen once, bc everytime that I click, I run it and automaclly delete it
//     h1.removeEventListener('mouseenter', alertH1);
//   }, 3000);
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('addEvenlistener: grea your are reading and heading');
// };

//random color rgb(255,255,255);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(0, 255);
  console.log('lINK', e.target, e.currentTarget);
  //strop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(0, 255);
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor(0, 255);
    console.log('Nav', e.target, e.currentTarget);
  },
  true
);
