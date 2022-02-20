import PopupWithImage from '../components/popup-with-image.js';
import {popupImage} from '../pages/index';

class Card {
  constructor(data, cardSelector) {
    this._text = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
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
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_is-active');
  }
  
  _handleCardClick() {
    const popupWithImage = new PopupWithImage({popupSelector: popupImage, image: this._link, caption: this._text});
    popupWithImage.open();
}

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._likeButton();
    });

    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._deleteButton();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick()
    });
  }
}

export default Card;