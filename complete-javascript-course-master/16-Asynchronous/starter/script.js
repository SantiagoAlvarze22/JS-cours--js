'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// ///////////////////////////////////////

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();

// //   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); //to get data

// //   request.send(); //sed the request to the url

// //   request.addEventListener('load', function () {
// //     console.log(this.responseText);

// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `
// //   <article class="country">
// //     <img class="country__img" src="${data.flag}" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name}</h3>
// //       <h4 class="country__region">${data.region}</h4>
// //       <p class="country__row"><span>👫</span>${(
// //         +data.population / 1000000
// //       ).toFixed(1)} people</p>
// //       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //     </div>
// //   </article>
// //   `;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('portugal');

// const getCountryAndeNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); //to get data

//   request.send(); //sed the request to the url

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country
//     renderCountry(data);

//     //get neighbour country
//     const [neighbour] = data.borders;

//     if (!neighbour) return;
//     //AJAX call country 1
//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`); //to get data

//     request2.send(); //send the request to the url

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndeNeighbour('portugal');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//(With promises)
//  const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); //to get data
// //   request.send(); //sed the request to the url

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(res => {
//       // console.log(res);
//       return res.json();
//     })
//     .then(data => {
//       // console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    // console.log(res);
    if (!res.ok) {
      throw new Error(`${errorMsg} (${res.status})`);
    }
    return res.json();
  });
};

const getCountryData = function (country) {
  //country1
  //throw makes that the  promise is immediately reject
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = 'hey';

      //country 2
      if (!neighbour) throw new Error('No neighbour found'); //se lanza este error y lo tomo como err.message en mi catch
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    // .then(res => res.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} ;) `); //handling errors
      renderError(`Something went wrong ${err.message} try again`); //err.message es todo el mensaje de error conformado en el thrwn error
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); //function that always need to happen it doesn't matter if the promise is fullfiled or rejected
};

btn.addEventListener('click', function () {
  getCountryData('colombia');
});
// getCountryData('australia');
