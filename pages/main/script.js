"use strict";
const pet1 = {
  name: "Jennifer",
  img: "../../assets/images/jennifer.png",
  type: "Dog",
  breed: "Labrador",
  description:
    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  age: "2 months",
  inoculations: ["none"],
  diseases: ["none"],
  parasites: ["none"],
};
const pet2 = {
  name: "Sophia",
  img: "../../assets/images/sophia.png",
  type: "Dog",
  breed: "Shih tzu",
  description:
    "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  age: "1 month",
  inoculations: ["parvovirus"],
  diseases: ["none"],
  parasites: ["none"],
};
const pet3 = {
  name: "Woody",
  img: "../../assets/images/woody.png",
  type: "Dog",
  breed: "Golden Retriever",
  description:
    "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  age: "3 years 6 months",
  inoculations: ["adenovirus", "distemper"],
  diseases: ["right back leg mobility reduced"],
  parasites: ["none"],
};
const pet4 = {
  name: "Scarlett",
  img: "../../assets/images/scarlett.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description:
    "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  age: "3 months",
  inoculations: ["parainfluenza"],
  diseases: ["none"],
  parasites: ["none"],
};
const pet5 = {
  name: "Katrine",
  img: "../../assets/images/katrine.png",
  type: "Cat",
  breed: "British Shorthair",
  description:
    "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  age: "6 months",
  inoculations: ["panleukopenia"],
  diseases: ["none"],
  parasites: ["none"],
};
const pet6 = {
  name: "Timmy",
  img: "../../assets/images/timmy.png",
  type: "Cat",
  breed: "British Shorthair",
  description:
    "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  age: "2 years 3 months",
  inoculations: ["calicivirus", "viral rhinotracheitis"],
  diseases: ["kidney stones"],
  parasites: ["none"],
};
const pet7 = {
  name: "Freddie",
  img: "../../assets/images/freddie.png",
  type: "Cat",
  breed: "British Shorthair",
  description:
    "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  age: "2 months",
  inoculations: ["rabies"],
  diseases: ["none"],
  parasites: ["none"],
};
const pet8 = {
  name: "Charly",
  img: "../../assets/images/charly.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description:
    "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  age: "8 years",
  inoculations: ["bordetella bronchiseptica", "leptospirosis"],
  diseases: ["deafness", "blindness"],
  parasites: ["lice", "fleas"],
};

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
const cards = Array.prototype.slice.call(document.querySelectorAll(".card"));

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
  // console.log(array);
  return array;
}

// SLIDER
const slider = function () {
  const btnLeft = document.querySelector("#btn-left");
  const btnRight = document.querySelector("#btn-right");
  const carousel = document.querySelector(".slider__carousel");

  let slidesArray = Array.prototype.slice.call(
    document.querySelectorAll(".slider__slide")
  );

  let pets = [];
  // let i = 0;

  // Select pets for show
  let cardsInSlide;
  if (document.documentElement.clientWidth > 1279) {
    cardsInSlide = 3;
  } else if (document.documentElement.clientWidth < 768) {
    cardsInSlide = 2;
  } else {
    cardsInSlide = 2;
  }

  let l = 0;
  let r = 0;
  let pets1 = petsJSON.slice(0, petsJSON.length / 2);
  let pets2 = petsJSON.slice(petsJSON.length / 2, petsJSON.length);
  const turnCount = (i) => {
    if (i === 0) {
      i++;
      return i;
    } else {
      i--;
      return i;
    }
  };
  const petsSelect = function (i) {
    let petsInSlide = [];
    // console.log(i);
    if (i === 0) {
      let petsFirst = [];
      pets1.forEach((pet) => {
        petsFirst.push(pet.name);
      });
      petsFirst = shuffle(petsFirst);
      petsFirst.length = cardsInSlide;
      // console.log(petsFirst);
      for (let i = 0; i < petsFirst.length; i++) {
        petsJSON.forEach((pet) => {
          if (pet.name === petsFirst[i]) {
            petsInSlide.push(pet);
          }
        });
      }
      // i++;
      // console.log(petsInSlide);
      return petsInSlide;
    } else {
      let petsSecond = [];
      pets2.forEach((pet) => {
        petsSecond.push(pet.name);
      });
      petsSecond = shuffle(petsSecond);
      petsSecond.length = cardsInSlide;
      // console.log(petsSecond);
      for (let i = 0; i < petsSecond.length; i++) {
        petsJSON.forEach((pet) => {
          if (pet.name === petsSecond[i]) {
            petsInSlide.push(pet);
          }
        });
      }
      // i--;
      // console.log(petsInSlide);
      return petsInSlide;
    }
  };

  const cardsGenerate = (cards) => {
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
  <a href="javascript:void(0)" class="card--btn">Learn more</a>
  </div>`;
    }
    return cards;
  };

  const createSlide = (i) => {
    let slide = document.createElement("div");
    slide.className = "slider__slide";
    if (document.documentElement.clientWidth < 768) {
      slide.innerHTML = `<div class="card card--1"></div>`;
    }
    if (
      document.documentElement.clientWidth > 767 &&
      document.documentElement.clientWidth < 1280
    ) {
      slide.innerHTML = `<div class="card card--1"></div>
                          <div class="card card--2"></div>`;
    }
    if (document.documentElement.clientWidth > 1279) {
      // console.log(1);
      slide.innerHTML = `<div class="card card--1"></div>
<div class="card card--2"></div>
<div class="card card--3"></div>`;
      // cardsInSlide = 3;
    }

    // console.log(slide.querySelectorAll(".card"));
    let cardsInSlide = Array.prototype.slice.call(
      slide.querySelectorAll(".card")
    );
    // console.log(cardsInSlide);
    pets = petsSelect(i);
    // i = turnCount(i);
    cardsGenerate(cardsInSlide);
    return slide;
  };

  const addSlideToEnd = (slide) => {
    const theFirstChild = carousel.firstChild;
    carousel.appendChild(slide);
    slide.className = "slider__slide";
    // theFirstChild.remove();
    slidesArray.push(slide);
  };
  const addSlideToStart = (slide) => {
    const theFirstChild = carousel.firstChild;
    // const theLastChild = carousel.lastChild;
    carousel.insertBefore(slide, theFirstChild);
    // theLastChild.remove();
    slidesArray.unshift(slide);
  };
  let currentPosition = 0;
  const setPosition = function (position) {
    carousel.style.transform = `translateX(${currentPosition + position}%)`;
    currentPosition = currentPosition + position;
    return currentPosition;
  };

  // Event handlers
  const firstScreen = (i) => {
    carousel.appendChild(createSlide(1));
    carousel.appendChild(createSlide(0));
    carousel.appendChild(createSlide(1));
  };
  firstScreen(l);
  const slide = document.querySelector(".slider__slide");
  const slideWidth = parseInt(getComputedStyle(slide).width) / 10;
  // console.log(slideWidth);
  let positionLeft = slideWidth;
  const moveRight = function () {
    carousel.style.left = `-${positionLeft + slideWidth}rem`;
    positionLeft = positionLeft + slideWidth;
    carousel.style.transform = `translateX(${currentPosition + 100}%)`;
    currentPosition = currentPosition + 100;
  };
  btnLeft.addEventListener("click", () => {
    moveRight();
    const newSlide = createSlide(l);
    addSlideToStart(newSlide);
    l = turnCount(l);
    console.log(l);
    return l;
    // console.log(currentPosition);
    // cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  });
  btnRight.addEventListener("click", () => {
    const newSlide = createSlide(r);
    addSlideToEnd(newSlide);
    setPosition(-100);
    r = turnCount(r);
    console.log(r);
    return r;
    // cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  });
};
slider();

// Burger

const burger = function () {
  const burgerIcon = document.querySelector(".burger-nav");
  const nav = document.querySelector("header");
  const burgerMenu = document.querySelector(".burger__menu");
  const overlay = document.querySelector(".overlay");
  const burgerBtn = burgerMenu.querySelector(".burger__btn");
  const container = document.querySelector(".container");
  const links = burgerMenu.querySelectorAll(".burger__link-item");

  const hideLogo = () => {
    nav.classList.add("invisible");
    overlay.classList.remove("hidden");
    container.style.overflowY = "hidden";
  };

  const showLogo = () => {
    nav.classList.remove("invisible");
    overlay.classList.add("hidden");
    container.style.overflowY = "visible";
  };

  const hideMenu = () => {
    burgerMenu.classList.remove("transition-out");
    burgerMenu.classList.add("hidden");
  };

  const openMenu = () => {
    burgerMenu.removeEventListener("animationend", hideMenu);
    if (burgerMenu.classList.contains("inactive")) {
      hideLogo();
      burgerMenu.classList.remove("hidden");
      burgerMenu.classList.remove("inactive");
      burgerIcon.style.transform = "rotate(-90deg)";
      // burgerBtn.style.transform = "rotate(-90deg)";
      burgerMenu.classList.add("transition-in");
      burgerIcon.removeEventListener("click", openMenu);
      burgerIcon.addEventListener("click", closeMenu);
    }
  };
  const closeMenu = () => {
    if (!burgerMenu.classList.contains("inactive")) {
      showLogo();
      burgerIcon.style.transform = "rotate(0deg)";
      // burgerBtn.style.transform = "rotate(0deg)";
      burgerMenu.classList.remove("transition-in");
      burgerMenu.classList.add("inactive");
      burgerMenu.classList.add("transition-out");
      burgerMenu.addEventListener("animationend", hideMenu);
      burgerIcon.removeEventListener("click", closeMenu);
      burgerIcon.addEventListener("click", openMenu);
    }
  };

  burgerIcon.addEventListener("click", openMenu);

  // burgerBtn.addEventListener("click", closeMenu);

  overlay.addEventListener("click", closeMenu);
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
};

burger();

// Modal
const modal = function () {
  const container = document.querySelector(".container");
  const overlay = document.querySelector(".modal__overlay");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal__wrapper");
  const modalBtn = modal.querySelector(".btn-close");

  const sliderBtnRight = document.querySelector("#btn-right");
  const sliderBtnLeft = document.querySelector("#btn-left");
  let cards;

  const getCards = () => {
    cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
    return cards;
  };
  getCards();
  // console.log(cards);
  sliderBtnRight.addEventListener("click", getCards);
  sliderBtnLeft.addEventListener("click", getCards);
  // const sliderBtn =

  const hidePage = () => {
    overlay.classList.remove("hidden");
    container.style.overflowY = "hidden";
  };

  const showPage = () => {
    overlay.classList.add("hidden");
    container.style.overflowY = "visible";
  };

  const getPet = () => {
    const target = event.currentTarget;
    const petName = target.querySelector("h4").textContent;
    let petObj;
    petsJSON.forEach((pet) => {
      if (pet.name === petName) {
        petObj = pet;
      }
    });
    // console.log(petObj);
    return petObj;
  };

  const createModal = () => {
    let pet = getPet();
    let inoculations = pet.inoculations.join(", ");
    let diseases = pet.diseases.join(", ");
    let parasites = pet.parasites.join(", ");
    modalContent.innerHTML = `
    <div class="modal__img--container">
    <img
      src="${pet.img}"
      alt="${pet.name}"
      class="modal__img"
    />
    </div>
    <div class="modal__content">
    <h3>${pet.name}</h3>
    <h4>${pet.type} - ${pet.breed}</h4>
    <p>
    ${pet.description}
    </p>
    <ul>
      <li>
        <span>Age: </span>
        ${pet.age}
      </li>
      <li>
        <span>Inoculations: </span>
        ${inoculations}
      </li>
      <li>
        <span>Diseases: </span>
        ${diseases}
      </li>
      <li>
        <span>Parasites: </span>
        ${parasites}
      </li>
    </ul>
  </div>`;
  };

  const showModal = () => {
    modal.classList.remove("hidden");
    modal.classList.remove("inactive");
    createModal();
    hidePage();
  };

  const hideModal = () => {
    if (!modal.classList.contains("inactive")) {
      modal.classList.add("hidden");
      modal.classList.add("inactive");
      showPage();
    }
  };
  const addModal = () => {
    // console.log(cards);
    cards.forEach((card) => {
      card.addEventListener("click", showModal);
    });
  };
  addModal();
  sliderBtnRight.addEventListener("click", addModal);
  sliderBtnLeft.addEventListener("click", addModal);

  // cards.forEach((card) => card.addEventListener("click", createModal));
  modalBtn.addEventListener("click", hideModal);
  overlay.addEventListener("click", hideModal);
};
modal();

////////////////////////////////////////////////////////////////////////

// const pushPetsToSelected = () => {
//   let petsSelected = Array.prototype.slice.call(
//     document.querySelectorAll(".card--header")
//   );
//   let pets = [];
//   for (let i = 0; i < petsSelected.length; i++) {
//     let pet = petsSelected[i].innerHTML;
//     pets.push(pet);
//   }
//   return pets;
// };
// let selectedPets = pushPetsToSelected();
// console.log(selectedPets);

// let petsNotSelected = petsJSON.filter(
//   (pet) => !selectedPets.includes(pet.name)
// );
// console.log(petsNotSelected);

// const petsNew = function () {
//   let petsInNewSlide = [];
//   while (petsInNewSlide.length < 3) {
//     let n = Math.trunc(Math.random() * petsJSON.length - 1);
//     if (!petsInNewSlide.includes(petsNotSelected[n])) {
//       petsInNewSlide.push(petsNotSelected[n]);
//     }
//   }
//   console.log(petsInNewSlide);
//   return petsInNewSlide;
// };

// petsNew();
