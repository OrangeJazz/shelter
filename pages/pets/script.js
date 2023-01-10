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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    shown: 0,
  },
];

// Pagination
const pagination = () => {
  const btnRight = document.querySelector("#btn-right");
  const btnRightAll = document.querySelector("#btn-rightAll");
  const btnLeft = document.querySelector("#btn-left");
  const btnLeftAll = document.querySelector("#btn-leftAll");
  const btnPage = document.querySelector(".pages__btn--num");

  let slideOnPage;
  if (document.documentElement.clientWidth > 1279) {
    slideOnPage = 8;
  } else if (document.documentElement.clientWidth < 768) {
    slideOnPage = 3;
  } else {
    slideOnPage = 6;
  }
  let maxPageNumber = 48 / slideOnPage;
  let currentPageNumber = parseInt(btnPage.innerHTML);
  const setNextPage = () => {
    currentPageNumber++;
    btnPage.innerHTML = currentPageNumber;
    // console.log(currentPageNumber);
    btnLeft.classList.remove("btn--disabled");
    btnLeft.addEventListener("click", setPrevPage);
    btnLeftAll.classList.remove("btn--disabled");
    btnLeftAll.addEventListener("click", setFirstPage);
    if (currentPageNumber === maxPageNumber) {
      btnRight.classList.add("btn--disabled");
      btnRight.removeEventListener("click", setNextPage);
      btnRightAll.classList.add("btn--disabled");
      btnRightAll.removeEventListener("click", setLastPage);
    }
  };

  const setPrevPage = () => {
    currentPageNumber--;
    btnPage.innerHTML = currentPageNumber;
    // console.log(currentPageNumber);
    btnRight.classList.remove("btn--disabled");
    btnRight.addEventListener("click", setNextPage);
    btnRightAll.classList.remove("btn--disabled");
    btnRightAll.addEventListener("click", setLastPage);
    if (currentPageNumber === 1) {
      btnLeft.classList.add("btn--disabled");
      btnLeft.removeEventListener("click", setPrevPage);
      btnLeftAll.classList.add("btn--disabled");
      btnLeftAll.removeEventListener("click", setFirstPage);
    }
  };

  const setFirstPage = () => {
    btnPage.innerHTML = 1;
    currentPageNumber = 1;
    btnRight.classList.remove("btn--disabled");
    btnRight.addEventListener("click", setNextPage);
    btnRightAll.classList.remove("btn--disabled");
    btnRightAll.addEventListener("click", setLastPage);
    btnLeft.classList.add("btn--disabled");
    btnLeft.removeEventListener("click", setPrevPage);
    btnLeftAll.classList.add("btn--disabled");
    btnLeftAll.removeEventListener("click", setFirstPage);
  };
  const setLastPage = () => {
    btnPage.innerHTML = maxPageNumber;
    currentPageNumber = maxPageNumber;
    btnRight.classList.add("btn--disabled");
    btnRight.removeEventListener("click", setNextPage);
    btnRightAll.classList.add("btn--disabled");
    btnRightAll.removeEventListener("click", setLastPage);
    btnLeft.classList.remove("btn--disabled");
    btnLeft.addEventListener("click", setPrevPage);
    btnLeftAll.classList.remove("btn--disabled");
    btnLeftAll.addEventListener("click", setFirstPage);
  };

  btnRight.addEventListener("click", setNextPage);
  btnRightAll.addEventListener("click", setLastPage);

  // Create card

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function cutArr(array, partSize) {
    let subarray = [];
    for (let i = 0; i < Math.ceil(array.length / partSize); i++) {
      subarray[i] = array.slice(i * partSize, i * partSize + partSize);
    }
    return subarray;
  }

  // let pets = petsJSON.sort(() => Math.random() - 0.5);
  const getTheGallary = () => {
    let gallary = [];

    let cardsOnPage;
    if (document.documentElement.clientWidth > 1279) {
      cardsOnPage = 8;
    } else if (document.documentElement.clientWidth < 768) {
      cardsOnPage = 3;
    } else {
      cardsOnPage = 6;
    }
    // console.log(cardsOnPage);
    while (gallary.length < 48) {
      gallary.push(...petsJSON);
    }
    gallary = cutArr(gallary, cardsOnPage);
    gallary.forEach((page) => {
      page = shuffle(page);
    });

    // while (gallary.length < maxPageNumber) {
    //   let pets = [...shuffle(petsJSON)];
    //   gallary.push(pets);
    // }
    return gallary;
  };
  let petsGallary = getTheGallary();
  // console.log(petsGallary);

  let cardsOnPage;
  if (document.documentElement.clientWidth > 1279) {
    cardsOnPage = Array.prototype.slice.call(
      document.querySelectorAll(".card")
    );
  } else if (document.documentElement.clientWidth < 768) {
    cardsOnPage = Array.prototype.slice.call(
      document.querySelectorAll(".card-phone")
    );
  } else {
    cardsOnPage = Array.prototype.slice.call(
      document.querySelectorAll(".card-tablet")
    );
  }
  const cardsGenerate = (cards, pets) => {
    for (let i = 0; i < cardsOnPage.length; i++) {
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
  // console.log(cardsOnPage);

  let page = parseInt(btnPage.innerHTML) - 1;
  const setCardsFromGallaryNext = () => {
    if (!btnRight.classList.contains("btn--disabled")) {
      if (page >= 0 && page < maxPageNumber) {
        page++;
        // console.log(page);
        const pets = petsGallary[page];

        cardsGenerate(cardsOnPage, pets);
      }
    } else {
      const pets = petsGallary[maxPageNumber - 1];
      page = maxPageNumber - 1;
      // console.log(page);
      cardsGenerate(cardsOnPage, pets);
    }
  };
  const setCardsFromGallaryPrev = () => {
    if (!btnLeft.classList.contains("btn--disabled")) {
      if (page >= 0 && page < maxPageNumber) {
        page--;
        // console.log(page);
        const pets = petsGallary[page];
        cardsGenerate(cardsOnPage, pets);
      }
    } else {
      const pets = petsGallary[0];
      page = 0;
      // console.log(page);
      cardsGenerate(cardsOnPage, pets);
    }
  };
  const setCardsFromGallaryFirst = () => {
    const pets = petsGallary[0];
    page = 0;
    // console.log(pets);
    // console.log(cardsOnPage);
    cardsGenerate(cardsOnPage, pets);
  };
  const setCardsFromGallaryLast = () => {
    const pets = petsGallary[maxPageNumber - 1];
    page = maxPageNumber - 1;
    // console.log(page);
    cardsGenerate(cardsOnPage, pets);
  };
  setCardsFromGallaryFirst();
  btnRight.addEventListener("click", setCardsFromGallaryNext);
  btnRightAll.addEventListener("click", setCardsFromGallaryLast);
  btnLeft.addEventListener("click", setCardsFromGallaryPrev);
  btnLeftAll.addEventListener("click", setCardsFromGallaryFirst);
};
pagination();

// Burger;

const burger = function () {
  const burgerIcon = document.querySelector(".burger-nav--pets");
  const nav = document.querySelector("header");
  const burgerMenu = document.querySelector(".burger__menu--pets");
  const overlay = document.querySelector(".overlay");
  const burgerBtn = burgerMenu.querySelector(".burger__btn--pets");
  const container = document.querySelector(".container");
  const links = burgerMenu.querySelectorAll(".burger__item--pets");

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
  // let cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  const sliderBtnRight = document.querySelector("#btn-right");
  const sliderBtnLeft = document.querySelector("#btn-left");
  let cards;

  const getCards = () => {
    cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
    return cards;
  };
  getCards();

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

  // cards.forEach((card) => card.addEventListener("click", createModal));
  modalBtn.addEventListener("click", hideModal);
  overlay.addEventListener("click", hideModal);
};
modal();
