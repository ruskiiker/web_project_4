import PopUp from "./Popup.js";

class PopupWithForm extends PopUp {
  constructor({
    popupSelector,
    handleFormSubmit
  }) {  
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = popupSelector.querySelector('.popup__form');    
    const fields = Array.from(popupSelector.querySelectorAll('.popup__input')); 
    this._fields = fields
  }

  _getInputValues() {
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
      this._handleFormSubmit(this._getInputValues());
    }); 
  }

}

export default PopupWithForm;