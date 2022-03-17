class PopUp {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscKey = this._handleEscKey.bind(this);
  }

  _handleEscKey(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close();
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