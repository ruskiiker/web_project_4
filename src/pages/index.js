/*-----------------------------------------------------------------------------------------*
 *                                         Modules
 *-----------------------------------------------------------------------------------------*/

import './index.css';
import logoSrc from '../images/logo.svg';
import avatarSrc from '../images/avatar.png';
import initialCards from '../utils/initial-cards.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { logoImage, avatarImage, popups, inputName, inputProfession, popupEdit, popupAdd, 
  popupImage, editButton, addButton, popupClose, addCardButton, settings, name, profession } from '../utils/constants.js';

/*-----------------------------------------------------------------------------------------*
 *                                         Images
 *-----------------------------------------------------------------------------------------*/

logoImage.src = logoSrc;
avatarImage.src = avatarSrc;

/*-----------------------------------------------------------------------------------------*
 *                                         Profile
 *-----------------------------------------------------------------------------------------*/

const userInfo = new UserInfo({
  name: name,
  profession: profession
});

const userData = userInfo.getUserInfo();
name.textContent = userData.name;
inputName.value = userData.name;
profession.textContent = userData.profession;  
inputProfession.value = userData.profession;

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


placeCards.renderItems(initialCards)

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
  addCardButton.disabled = true;
  addCardButton.classList.add('popup__button_disabled'); 
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