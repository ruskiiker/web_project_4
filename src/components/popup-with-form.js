import popUp from "./popup.js";

class PopupWithForm extends popUp {
  constructor({
    popupSelector,
    handleFormSubmit
  }) {  
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._handleFormSubmit = handleFormSubmit;
    this._form = popupSelector.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputList = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
    const data = {};
    inputList.forEach(input => {
      data[input.name] = input.value;
    });
    return data;
  }

  open() {
    super.open();
  }

  setEventListeners() {   
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    }); 
  }

  close() {
    this._form.reset();
    super.close();
  }

}

export default PopupWithForm;