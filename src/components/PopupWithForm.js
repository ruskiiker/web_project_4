import PopUp from "./Popup.js";

class PopupWithForm extends PopUp {
  constructor({
    popupElement,
    handleFormSubmit
  }) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = popupElement.querySelector('.popup__form');
    const fields = Array.from(popupElement.querySelectorAll('.popup__input'));
    this._fields = fields
  }

  getInputValues() {
    const data = {};
    this._fields.forEach(input => {
      data[input.name] = input.value;
    });
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
    });
  }

  close() {
    this._form.reset();
    super.close();
  }

}

export default PopupWithForm;