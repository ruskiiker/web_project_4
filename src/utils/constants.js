/*-----------------------------------------------------------------------------------------*
 *                             Index of variables declarations
 *-----------------------------------------------------------------------------------------*/

// HTML Images.
export const logoImage = document.getElementById('logo');
export const avatarImage = document.getElementById('avatar');

// Popup elements.
export const popups = document.getElementsByClassName('popup');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputProfession = document.querySelector('.popup__input_type_description');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupImage = document.querySelector('.popup_type_image');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const popupClose = document.querySelector('.popup__close');
export const addCardButton = document.getElementById('button__add-card');


export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
};

// Profile elements.
export const name = document.querySelector('.profile__title');
export const profession = document.querySelector('.profile__description');