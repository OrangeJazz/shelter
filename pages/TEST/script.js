"use strict";
const petsJSON = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
    shown: 0,
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
    shown: 0,
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
    shown: 0,
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
    shown: 0,
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
    shown: 0,
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
    shown: 0,
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
    shown: 0,
  },
  {
    name: "Charly",

    img: "../../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
    shown: 0,
  },
];

let petsFirst = petsJSON.splice(0, petsJSON.length / 2);
let petsSecond = petsJSON.splice(petsJSON.length / 2, petsJSON.length - 1);
console.log(petsFirst);
console.log(petsSecond);
// const petsSelect = function () {
//   let petsInSlide = [];

//   for (let i = 0; petsInSlide.length < cardsInSlide; i++) {
//     let n = Math.trunc(Math.random() * petsJSON.length / 2 - 1);
//   }
//   return petsInSlide;
// };

// SLIDER
/*
const slides = document.querySelector(".slider__slide--container");
const btnLeft = document.querySelector(".slider__arrow--left");
const btnRight = document.querySelector(".slider__arrow--right");


let pets = [];
let currentPosition = 0;
let slidesArray = [];
const slideHtmlContent = `<div class="card card--1"></div>
<div class="card card--2"></div>
<div class="card card--3"></div>`;

function createSlide(parent, content) {
  let el = document.createElement("div");
  el.className = "slider__slide";
  el.innerHTML = content;
  parent.insertBefore(el);
  return el;
}
function makeActive {

}
function createSlideBack(parent, content) {
  let el = document.createElement("div");
  el.className = "slider__slide";
  el.innerHTML = content;
  parent.appendChild(el);
  return el;
}
for (let i = 1; i < 3; i++) {
  slidesArray.push(createSlide(slides, slideHtmlContent));
}

const cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
// console.log(cards);

//Generate slide

// Select pets for show
const petsSelect = function () {
  let pets = [];
  let count = 0;
  while (count < 6) {
    let n = Math.trunc(Math.random() * 8) + 1;
    if (petsJSON[n]?.shown == 0) {
      pets.push(petsJSON[n]);
      petsJSON[n].shown = 1;
      count++;
    }
  }

  petsJSON.forEach((pet) => {
    if (pet.shown == 1) pet.shown = 0;
  });

  pets.forEach((pet) => {
    pet.shown = 1;
  });
  return pets;
};

//Card generetion
const cardGenerate = function () {
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = `
      <div class="card__img--container">
      <img
        src="${pets[i].img}"
        alt="${pets[i].name} photo"
        class="card__img"
      />
    </div>
    <h4 class="card--header">${pets[i].name}</h4>
    <a href="" class="card--btn">Learn more</a>
    `;
  }
};

const setPosition = function (position) {
  currentPosition = position;
  slidesArray.forEach((i) => {
    i.style.transform = `translateX(${position}%)`;
  });
};

pets = petsSelect();
cardGenerate();

/*

const nextSlide = () => {
  pets = petsSelect();
  cardGenerate();
  // goToSlide();
  // console.log(pets);
};
const prevSlide = () => {
  pets = petsSelect();
  cardGenerate();

  // console.log("prevSlide");
};*/

// Event handlers
/*
btnLeft.onclick = () => {
  setPosition(currentPosition + 100);
};
btnRight.onclick = () => {
  slidesArray.push(createSlide(slides, slideHtmlContent));
  // let pets = petsSelect();
  cardGenerate();
  setPosition(currentPosition - 100);
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") setPosition(currentPosition + 100);
  e.key === "ArrowLeft" && setPosition(currentPosition - 100);
});

*/
