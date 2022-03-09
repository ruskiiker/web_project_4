import PopUp from './Popup.js';

class PopupWithImage extends PopUp {

  constructor({popupSelector, image, caption}) {
    super(popupSelector);
    this._image = image;
    this._caption = caption;
    this._imageElement = document.querySelector(".popup__image")
    this._captionElement = document.querySelector(".popup__image-caption")
  }

setPopupImage(image, caption) {
  this._image = image;
  this._caption = caption;
}

  open(image, caption) {
    this._imageElement.src = image
    this._captionElement.textContent = caption    
    super.open();
  }

}

export default PopupWithImage;