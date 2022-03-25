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
import {
  logoImage,
  avatarImage,
  inputName,
  inputProfession,
  popupEdit,
  popupAdd,
  popupImage,
  editButton,
  addButton,
  addCardButton,
  settings,
  name,
  profession
} from '../utils/constants.js';

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

/*-----------------------------------------------------------------------------------------*
 *                                           Cards
 *-----------------------------------------------------------------------------------------*/
// Sets the cards' template.
const cardSelector = '#card-template';

const popupWithImage = new PopupWithImage({
  popupSelector: popupImage
})

popupWithImage.setEventListeners();

const handleOpenPopup = (link, text) => {
  popupWithImage.open(link, text);
}

const createNewCard = (data) => {
  const card = new Card(data, cardSelector, handleOpenPopup);
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

const handleFormEdit = (values) => {
  userInfo.setUserInfo(values.name, values.description);
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
  popupElement: popupAdd,
  handleFormSubmit: handleFormAdd
})
const editPopupPreview = new PopupWithForm({
  popupElement: popupEdit,
  handleFormSubmit: handleFormEdit
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

/*-----------------------------------------------------------------------------------------*
 *                                     Form validation
 *-----------------------------------------------------------------------------------------*/

const editFormValidator = new FormValidator(settings, popupEdit);
const addFormValidator = new FormValidator(settings, popupAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();