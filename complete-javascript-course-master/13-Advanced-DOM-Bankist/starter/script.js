'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//nav
const nav = document.querySelector('.nav');

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

btnScrollTo.addEventListener('click', function (e) {
  section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());

  console.log('current scrroll (x/y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //nowadays view
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////
// Page navegation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//eventdelgation
// 1. add event listener to a comon parent element
//2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  //Matchin strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//events delagation to my tabs buttons, I need to attach the event to the common parent element, so doing that, would be a btter performance bc I avoid to call the same event the multiplie times that I clicked in my target

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //closest parent with that class

  //guard claus, when nothing is click relating to the closest parent with that class, execute to the function
  if (!clicked) return;

  //eliminar de todos los tabs la clase active, efecto que se baja cuando se activa la clase del otro boton que se le dio click, y para que se muestre
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  //cuando se le de click, activa la clases
  clicked.classList.add('operations__tab--active');

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; //valor que se esta pasando el maouse
    //select siblings
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation

// const initialCoords = section1.getBoundingClientRect();

// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //the nav is going to apper the height before I finish the header section
});
headerObserver.observe(header);

//reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  //unobserve, the sections r not going to be observe so the class is going to be removed
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//azy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //Replace src with data-src target, elemetn that being intersect
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px', //to avoid the lazy loading and tell the browser before 200px start charging the images
});

imgTargets.forEach(img => imgObserver.observe(img));

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
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log('lINK', e.target, e.currentTarget);
//   //strop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log('Container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log('Nav', e.target, e.currentTarget);
// });

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //elements that are inside of the h1
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'blue';

// //going upwars --> selecting parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //closest parent element
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways: sibling

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) {
//     el.style.transfom = 'scale(0.5)';
//   }
// });
