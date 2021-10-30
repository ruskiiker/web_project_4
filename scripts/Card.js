import { openPopup, handleEscKey } from './utils.js';

// Opens image popup, adds Escape key event listener.
function openImagePopup(popup, link, text) {
   popup.querySelector('.popup__image').src = link;
   popup.querySelector('.popup__image').alt = 'Image preview';
   popup.querySelector('.popup__image-caption').textContent = text;
   popup.classList.add('popup_active');
   openPopup(popup);
}

class Card {

   constructor(data, cardSelector) {
      this._text = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
   };

   _getTemplate() {
      return document
         .querySelector(this._cardSelector)
         .content.querySelector('.card')
         .cloneNode(true)
   }

   getView() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.card__image').style.backgroundImage = `url(${this._link})`;
      this._element.querySelector('.card__title').textContent = this._text;
      return this._element;
   }

   _deleteButton() {
      this._element.remove();
   }

   _likeButton() {
      this._element
         .querySelector('.card__like-button-button')
         .classList.toggle('.card__like-button_is-active')
   }

   _popupImage(link, text) {
      const popup = document.querySelector('.popup_type_image')
      openImagePopup(popup, link, text)
   }

   _setEventListeners() {
      this._element
         .querySelector('.card__like-button')
         .addEventListener('click', this._likeButton)

      this._element
         .querySelector('.card__delete-button')
         .addEventListener('click', () => {
            this._deleteButton()
         });

      this._element
         .querySelector('.card__image')
         .addEventListener('click', () => {
            this._popupImage(this._link, this._text)
         });
   }

}

export default Card;