let popup = document.querySelector('.popup');
let dwForm = document.querySelector('.dialogue-window__form-x'); // dw = dialogue window
let dwformInputs = document.querySelectorAll('.dialogue-window__form-element');
let editdwForm = document.querySelector('dialogue-window__form');
let personName = document.querySelector('.profile__title');
let personNameInput = document.querySelector('.dialogue-window__form-element_input_title');
let personDescription = document.querySelector('.profile__subtitle');
let personDescriptionInput = document.querySelector('.dialogue-window__form-element_input_subtitle');
let profile = {};

let clickedLike = document.querySelector('.elements__card-like');
clickedLike.style.backgroundImage = "url('../../../images/like-black.svg'";

let dwForm = document.querySelector('.profile__container-icon');
dwForm.addEventListener('click', activatedw);

let dwX = document.querySelector('.modal__form-x');
dwX.addEventListener('click', closeProfile);

let editdwForm = document.querySelector('.dialogue-window__form');
editdwForm.addEventListener('submit', saveProfile);

function updateProfile() {
  profile = {
    name: personName.textContent,
    about: personDescription.textContent,
  };
}

function editProfile() {
  updateProfile();
  personNameInput.value = profile.name;
  personDescriptionInput.value = profile.about;
}

function closeProfile() {
  popup.classList.remove("popup_active");
}

function saveProfile(evt) {
  evt.preventDefault();
  personName.textContent = personNameInput.value;
  personDescription.textContent = personDescriptionInput.value;
  updateProfile();
  closeProfile();
}

function activatedw() {
  popup.classList.add("popup_active");
  editProfile();
}