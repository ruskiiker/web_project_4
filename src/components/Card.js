class Card {
  constructor(data, cardSelector, handleOpenPopup) {
    this._text = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleOpenPopup = handleOpenPopup;
    this._element = this._getTemplate();
    this._cardLikeButton = this._element.querySelector('.card__like-button');
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
  }

  getView() {
    this._setEventListeners();
    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.card__title').textContent = this._text;
    return this._element;
  }

  _deleteButton() {
    this._element.remove();
  }

  _likeButton() {
    this._cardLikeButton.classList.toggle('card__like-button_is-active');
  }

  _handleCardClick() {
    this._handleOpenPopup(this._link, this._text);
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
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