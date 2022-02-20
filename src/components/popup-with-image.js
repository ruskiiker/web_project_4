import popUp from './popup.js';

class PopupWithImage extends popUp {

  constructor({popupSelector, image, caption}) {
    super(popupSelector);
    this._image = image;
    this._caption = caption;
  }

setPopupImage(image, caption) {
  this._image = image;
  this._caption = caption;
}

  open() {
    document.querySelector(".popup__image").src = this._image
    document.querySelector(".popup__image-caption").textContent = this._caption    
    super.open();
  }

  close() {   
    super.close();
  }

}

export default PopupWithImage;