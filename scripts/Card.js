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
    this._element = this.getTemplate();
    this._setEventListeners();
}

_setEventListeners () {
  this.element
  querySelector('card__like-button')
  .addEventListener('click', this._likeButton)

  this.element
  .querySelector('card__delete-button')
  .addEventListener('click', this._deleteButton)

  this.element
  .querySelector('popup__image')
  .addEventListener('click', this._popupImage)
}

_handleLikeIcon() {
this._element
querySelector('card__like-button')
.classList.toggle('card__like-button_is-active')
}

_handleDeleteCard() {
this._element
querySelector('card__delete-button')
.classList.toggle('card__delete-button_is-active')
}
_handlePreviewPicture() {
this._element
querySelector('popup__image')
.classList.toggle('popup__image_is-active')
}

generateCard() {
this._element = this.getTemplate();
this._setEventListeners();
this._formElement.querySelector('.card__image').style.backgroundImage = `url(${this.link})`;
this._formElement.querySelector('.card__title').textContent = this.text;
}

}

export default Card;