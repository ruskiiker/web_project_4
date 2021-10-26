/*-----------------------------------------------------------------------------------------* 
 *                                         Modules                                           
 *-----------------------------------------------------------------------------------------*/ 
 
import initialCards from './initial-cards.js'; 
import { openPopup, closePopup } from './utils.js'; 
import FormValidator from './FormValidator.js'; 
import Card from './Card.js'; 
 
/*-----------------------------------------------------------------------------------------* 
 *                             Index of variables declarations                               
 *-----------------------------------------------------------------------------------------*/ 
 
// Popup elements. 
const popups = document.getElementsByClassName('popup'); 
const popupEdit = document.querySelector('.popup_type_edit'); 
const popupAdd = document.querySelector('.popup_type_add'); 
const popupTypeImage = document.querySelector('.popup_type_image'); 
const editButton = document.querySelector('.profile__edit-button'); 
const addButton = document.querySelector('.profile__add-button'); 
const modalEditClose = document.querySelector('.popup__close_type_edit'); 
const modalAddClose = document.querySelector('.popup__close_type_add'); 
const modalImageClose = document.querySelector('.popup__close_type_image'); 
 
const settings = { 
  formSelector: ".popup__form", 
  inputSelector: ".popup__input", 
  submitButtonSelector: ".popup__button", 
  inactiveButtonClass: "popup__button_disabled", 
  inputErrorClass: "popup__input_type_error", 
  errorClass: "popup__error_active", 
}; 
 
// Profile elements. 
const title = document.querySelector('.profile__title'); 
const aboutMe = document.querySelector('.profile__description'); 
const captionInput = document.querySelector('.popup__input_type_caption'); 
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_description'); 
const linkInput = document.querySelector('.popup__input_type_link'); 
const editForm = document.querySelector('.popup_type_edit'); 
const addPopup = document.querySelector('.popup_type_add'); 
const cardList = document.querySelector('.places__list'); 
const addForm = document.querySelector('.popup__form_type_add');

/*-----------------------------------------------------------------------------------------* 
 *                                         Profile                                           
 *-----------------------------------------------------------------------------------------*/ 
 
const profile = { 
    name: title.textContent, 
    about: aboutMe.textContent, 
}; 
 
function saveProfile(event) { 
  event.preventDefault(); 
  title.textContent = nameInput.value; 
  aboutMe.textContent = jobInput.value; 
  profile.name = nameInput.value;
  profile.about = jobInput.value;
  closeEditProfilePopup(); 
} 
 
function fillEditProfilePopupInputs() { 
  nameInput.value = profile.name; 
  jobInput.value = profile.about; 
} 
 
/*-----------------------------------------------------------------------------------------* 
 *                                         Popups                                            
 *-----------------------------------------------------------------------------------------*/ 
 
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
 
/*-----------------------------------------------------------------------------------------* 
 *                                           Cards                                           
 *-----------------------------------------------------------------------------------------*/ 
 // Sets the cards' template. 
const cardSelector = '#card-template';

// Prepend the card element to the <ul class=".places-list"> (wrapper).  
const renderCard = (data, wrap) => {
  const card = new Card(data, cardSelector);
  wrap.prepend(card.getView()); 
};

// CardList = <ul class=".places-list">. 
initialCards.forEach((data) => {  
  renderCard(data, cardList)
});

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
 
/*-----------------------------------------------------------------------------------------* 
 *                                     Event listeners                                       
 *-----------------------------------------------------------------------------------------*/  
 
editButton.addEventListener('click', openEditCardPopup); 
addButton.addEventListener('click', openAddCardPopup); 
modalEditClose.addEventListener('click', closeEditProfilePopup); 
modalAddClose.addEventListener('click', closeAddProfile); 
modalImageClose.addEventListener('click', closeImageProfile); 
editForm.addEventListener('submit', saveProfile); 
addPopup.addEventListener('submit', saveAddCard); 
 
/*-----------------------------------------------------------------------------------------* 
 *                                     Form validation                                      
 *-----------------------------------------------------------------------------------------*/ 
 
const editFormValidator = new FormValidator(settings, popupEdit); 
const addFormValidator  = new FormValidator(settings, popupAdd); 
 
editFormValidator.enableValidation(); 
addFormValidator.enableValidation(); 