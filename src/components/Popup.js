class PopUp {
  constructor(popupSelector) {
    this._popupElement = popupSelector;
    this._handleEscKey = this._handleEscKey.bind(this);
  }

  _handleEscKey(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('popup')) {
        document.querySelector('.popup_active')?.classList.remove('popup_active');
        evt.stopPropagation();
      }
    });

    const closeButton = this._popupElement.querySelector('.popup__close');
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  open() {
    this._popupElement.classList.add('popup_active');
    document.addEventListener('keyup', this._handleEscKey);
  }

  close() {
    this._popupElement.classList.remove('popup_active');
    document.removeEventListener('keyup', this._handleEscKey);
  }
}

export default PopUp;