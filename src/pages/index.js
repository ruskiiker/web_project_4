/*-----------------------------------------------------------------------------------------*
 *                                         Modules
 *-----------------------------------------------------------------------------------------*/

import './index.css';
import logoSrc from '../images/logo.svg';
import avatarSrc from '../images/avatar.png';
import initialCards from '../components/initial-cards.js';
import FormValidator from '../components/form-validator.js';
import Card from '../components/card.js';
import PopupWithForm from '../components/popup-with-form.js';
import PopupWithImage from '../components/popup-with-image.js';
import Section from '../components/section.js';
import UserInfo from '../components/user-info.js';

/*-----------------------------------------------------------------------------------------*
 *                             Index of variables declarations
 *-----------------------------------------------------------------------------------------*/

// HTML Images.
const logoImage = document.getElementById('logo');
logoImage.src = logoSrc;
const avatarImage = document.getElementById('avatar');
avatarImage.src = avatarSrc;

// Popup elements.
const popups = document.getElementsByClassName('popup');
const inputName = document.querySelector('.popup__input_type_name');
const inputProfession = document.querySelector('.popup__input_type_description');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
export const popupImage = document.querySelector('.popup_type_image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelector('.popup__close');

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
};

// Profile elements.
const name = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__description');

/*-----------------------------------------------------------------------------------------*
 *                                         Profile
 *-----------------------------------------------------------------------------------------*/

const userInfo = new UserInfo({
  name: 'Stepan O. Makarov',
  profession: 'Vice Admiral and Commander'
});
const userData = userInfo.getUserInfo();
name.textContent = userData.name;
profession.textContent = userData.profession;

/*-----------------------------------------------------------------------------------------*
 *                                         Popups
 *-----------------------------------------------------------------------------------------*/

// Closes popup with 'x' button.
popupClose.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup')) {
    this.classList.remove('popup_active');
  }
});

// Closes popups with outer click.
for (let i = 0; i < popups.length; i++) {
  popups[i].addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
      this.classList.remove('popup_active');
      evt.stopPropagation();
    }
  });
}

/*-----------------------------------------------------------------------------------------*
 *                                           Cards
 *-----------------------------------------------------------------------------------------*/
// Sets the cards' template.
const cardSelector = '#card-template';

const createNewCard = (data) => {
  const card = new Card(data, cardSelector);
  placeCards.addItem(card.getView());
  return card;
};

const placeCards = new Section({
  renderer: (item) => {
    createNewCard(item);
  },
  containerSelector: 'places__list',
});

initialCards.forEach((cardData) => {
  createNewCard(cardData);
});

const handleFormEdit = () => {
  userInfo.setUserInfo(inputName.value, inputProfession.value);
  const userData = userInfo.getUserInfo();
  name.textContent = userData.name;
  profession.textContent = userData.profession;
  editPopupPreview.close()
};

const handleFormAdd = (data) => {
  createNewCard(data);
  addPopupPreview.close();
};

/*-----------------------------------------------------------------------------------------*
 *                                     Classes
 *-----------------------------------------------------------------------------------------*/

const addPopupPreview = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: handleFormAdd
})
const editPopupPreview = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: handleFormEdit
})

const imagePopupPreview = new PopupWithImage({
  popupSelector: popupImage
})

/*-----------------------------------------------------------------------------------------*
 *                                     Event listeners
 *-----------------------------------------------------------------------------------------*/

addButton.addEventListener('click', () => {
  addPopupPreview.open()
});
editButton.addEventListener('click', () => {
  editPopupPreview.open()
});

addPopupPreview.setEventListeners();
editPopupPreview.setEventListeners();
imagePopupPreview.setEventListeners();

/*-----------------------------------------------------------------------------------------*
 *                                     Form validation
 *-----------------------------------------------------------------------------------------*/

const editFormValidator = new FormValidator(settings, popupEdit);
const addFormValidator = new FormValidator(settings, popupAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();