class Card {
    constructor(data, cardSelector) {
        this._text = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    };

_getTemplate( {
    const template = document
    .querySelector(this._cardSelector)
    .content.querySelector('.card')
    .cloneNode(true);

    this._element = template;
};

_setEventListeners () {
    this._element
    .querySelector('.card__like-button');
    .addEventListener('click', () => this._handleLikeIcon.());
    
    this._element
    .querySelector('.card__delete-button');
    .addEventListener('click', () => this._handleDeleteCard.());

    this._element
    .querySelector('.card__image');
    .addEventListener('click', () =>  this._handlePreviewPicture.());
};

_handleLikeIcon() {
this._element
querySelector('card__like-button');
.classList.toggle('card__like-button_is-active');
}

_handleDeleteCard() {

}

_handlePreviewPicture() {
    
}


generateCard() {
this._element = this.getTemplate();
this._setEventListeners();
this._formElement.querySelector('.card_image').style.backgroundImage = `url(${this.link})`;
this._formElement.querySelector('.card_title').textContent = this.text;
}


export default Card;