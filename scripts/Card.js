// Opens popup, adds Escape key event listener.
function openPopup(popup, link, text) { 
    popup.querySelector('.popup__image').src = link;
    popup.querySelector('.popup__image-caption').innerHTML = text;   
    popup.classList.add('popup_active'); 
    document.addEventListener('keydown',
      handleEscKey) 
  } 
  
  // Closes popup, removes Escape key event listener.
  function closePopup(popup) { 
    popup.classList.remove('popup_active'); 
    document.removeEventListener('keydown',
      handleEscKey) 
  } 
  
  // Closes the active popup when pressing Escape.
  function handleEscKey(evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_active'));
    }
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

 _deleteButton () {
this.closest('.card').remove();
 } 

 _likeButton () {
   this.classList.toggle('card__like-button_is-active'); 
} 

_popupImage(evt) {
   const popup = document.querySelector('.popup_type_image')
   openPopup(popup, evt.currentTarget.link, evt.currentTarget.text)  
} 

 _setEventListeners () {
    this._element
    .querySelector('.card__like-button')
    .addEventListener('click', this._likeButton)

    this._element
    .querySelector('.card__delete-button')
    .addEventListener('click', this._deleteButton)

    const imageCard = this._element.querySelector('.card__image')
    imageCard.addEventListener('click', this._popupImage)
    imageCard.link = this._link;
    imageCard.text = this._text;
 }

 _handleDeleteCard() {
    this._element
    .querySelector('.card__delete-button')
    .classList.toggle('.card__delete-button_is-active')
 }

_handlePreviewPicture() {
    this._element
    .querySelector('.popup__image')
    .classList.toggle('.popup__image_is-active')
 }

}

export default Card;