import PopUp from './Popup.js';

class PopupWithImage extends PopUp {

  constructor({popupSelector}) {
    super(popupSelector);
    this._imageElement = document.querySelector(".popup__image")
    this._captionElement = document.querySelector(".popup__image-caption")
  }

  open(image, caption) {
    this._imageElement.src = image
    this._imageElement.alt = caption
    this._captionElement.textContent = caption    
    super.open();
  }  

}

export default PopupWithImage;