class FormValidator {
    constructor(settings, formElement) {
    /* Attaching classes and selectors from the object Settings
    to reference within methods in this file. */
this._inputSelector = settings.inputSelector;
this._submitButtonSelector = settings._submitButtonSelector;
this._inactiveButtonClass = settings._inactiveButtonClass;
this._inputErrorClass = settings.inputErrorClass;
this._errorClass = settings.errorClass;
this._popupElement = _popupElement;
this._formElement = this.popupElement.querySelector(this._formSelector);
    }    

    const editFormValidator = new FormValidator(settings, editForm);
    const addFormValidator = new FormValidator(settings, addForm);

    _showInputError = (formElement, input) => {
        const errorSpan = formElement.querySelector(`#${input.id}-error`);
        // Add error message/class
        errorSpan.textContent = input.validationMessage;
        errorSpan.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    };

    _hideInputError = (formElement, input) => {
        const errorSpan = this._formElement.querySelector(`#${input.id}-error`);
        // Add error message/class
        errorSpan.textContent = '';
        errorSpan.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    };

    _checkInputValidity = (formElement, input, settings) => {
        if (input.validity.valid) {
            return hideInputError(input, formElement, settings);
        } else {
            // Not valid.
            return showInputError(input, formElement, settings);
        }
    };

    _hasValidInput = (inputList) =>
    inputList.every((input) => input.validity.valid);

    _toggleButton = (inputList, buttonElement, settings) => {
        if (this._hasValidInput(inputList)) {
            // Make button enabled.
            buttonElement.disabled = false;
            buttonElement.classList.remove(this._inactiveButtonClass);
        } else {
            // Make button disabled.
            buttonElement.disabled = true;
            buttonElement.classList.add(this._inactiveButtonClass);
        }
    };
    
    _setEventListeners () {
        const inputList = [...formElement.querySelectorAll(this._inputSelector)];
        const submitButton = formElement.querySelector(this._submitButtonSelector);
        inputList.forEach((input) => {
            input.addEventListener('input', (evt) => {
                // Check validity.
                this._checkInputValidity(formElement, input, settings);
                // Toggle the button.
                this._toggleButton(inputList, submitButton, settings);
            });
        });
    }

// Method implementing the form validation.
enableValidation() {
    this._formElement.addEventListener('submit', event => {       
        evt.preventDefault(); 
    });
        this._setEventListeners();
};

export default FormValidator;