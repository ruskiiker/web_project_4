import '../pages/index.css';
import cards from './cards.js';
import validation from './cards.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

// Variables
const popups = document.getElementsByClassName('popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupActive = document.querySelector('.popup_active');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-caption');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const modalEditClose = document.querySelector('.popup__close_type_edit');
const modalAddClose = document.querySelector('.popup__close_type_add');
const modalImageClose = document.querySelector('.popup__close_type_image');
const inputs = document.querySelectorAll('.popup__input');
const title = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__description');
const captionInput = document.querySelector('.popup__input_type_caption');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const linkInput = document.querySelector('.popup__input_type_link');
const editForm = document.querySelector('.popup_type_edit');
const addForm = document.querySelector('.popup_type_add');
const cardList = document.querySelector('.places__list');
const card = document.querySelector('.card');

const profile = {
  name: title.textContent,
  about: aboutMe.textContent,
};

// Functions
function renderCard(card, wrapper) {
  wrapper.prepend(createCard(card));
  /// Prepend the card element to the <ul class=".places-list"> (wrapper).
}

initialCards.forEach((card) => {
  renderCard(card, cardList);
  // CardList also = <ul class=".places-list">.
});

function createCard(card) {
  // Reference the template element.
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
  // Create the card element.
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardTitle.textContent = card.name;
  cardImage.style.backgroundImage = `url(${card.link})`;
  cardImage.alt = card.name;

  deleteButton.addEventListener('click', () => {
    const listItem = deleteButton.closest('.card');
    listItem.remove();
  });

  likeButton.addEventListener('click', event => {
    event.target.classList.toggle('card__like-button_is-active');
  });

  cardImage.addEventListener('click', () => {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupImageTitle.textContent = card.name;
    openImagePopup(popupImage);
  });
  return cardElement;
}

function saveProfile(event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closeEditProfilePopup();
}

function saveAddCard(event) {
  event.preventDefault();
  const card = {
    name: captionInput.value,
    link: linkInput.value
  }
  renderCard(card, cardList);
  closeAddProfile();
  addForm.reset();
}

function fillEditProfilePopupInputs() {
  nameInput.value = profile.name;
  jobInput.value = profile.about;
}

// Opens popup, adds Escape key event listener.
function openPopup(popup) { 
  popup.classList.add('popup_active'); 
  document.addEventListener('keydown',
    handleEscKey) 
} 

// Closes popup, removes Escape key event listener.
function closePopup(popup) { 
  popup.classList.remove('popup_active'); 
  document.removeEventListener('keydown',
    handleEscKey) 
} 

// Closes the active popup when pressing Escape.
function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_active'));
  }
}

// Opens edit popup.
function openEditCardPopup() {
  openPopup(popupEdit);
  fillEditProfilePopupInputs();
}

// Opens add popup.
function openAddCardPopup() {
  openPopup(popupAdd);
}

//Opens image popup.
function openImagePopup() {
  openPopup(popupTypeImage);
}

// Closes edit popup.
function closeEditProfilePopup() {
  closePopup(popupEdit)
}

// Closes add popup.
function closeAddProfile() {
  closePopup(popupAdd)
}

// Closes image popup.
function closeImageProfile() {
  closePopup(popupTypeImage)
}

// Closes popups with outer click.
for (let i = 0; i < popups.length; i++) {
  popups[i].addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
      this.classList.remove('popup_active');
      evt.stopPropagation();
    }
  });
}

editButton.addEventListener('click', openEditCardPopup);
addButton.addEventListener('click', openAddCardPopup);
modalEditClose.addEventListener('click', closeEditProfilePopup);
modalAddClose.addEventListener('click', closeAddProfile);
modalImageClose.addEventListener('click', closeImageProfile);
editForm.addEventListener('submit', saveProfile);
addForm.addEventListener('submit', saveAddCard);

editformValidator.enableValidation();
cardformValidator.enableValidation();