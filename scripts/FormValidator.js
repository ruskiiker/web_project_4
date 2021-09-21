class FormValidator {

    constructor(settings, formElement) {
    /* Attaching classes and selectors from the object Settings
    to reference within methods in this file. */
this._inputSelector = settings.inputSelector;
this._submitButtonSelector = settings.submitButtonSelector;
this._inactiveButtonClass = settings.inactiveButtonClass;
this._inputErrorClass = settings.inputErrorClass;
this._errorClass = settings.errorClass;
this._form = formElement;
    }    
 
    _setEventListeners () {
        this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);

        inputList.forEach((input) => {
            input.addEventListener('input', (evt) => {
                // Check validity.
                this._checkInputValidity(this._form, input, settings);
                // Toggle the button.
                this._toggleButton(inputList, submitButton, settings);
            });
        });
    }

    _showInputError = (formElement, input) => {
        const errorSpan = this._form.querySelector(`#${input.id}-error`);
        // Add error message/class
        errorSpan.textContent = input.validationMessage;
        errorSpan.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    };

    _hideInputError = (formElement, input) => {
        const errorSpan = this._form.querySelector(`#${input.id}-error`);
        // Add error message/class
        errorSpan.textContent = '';
        errorSpan.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    };

    _checkInputValidity = (formElement, input, settings) => {
        if (input.validity.valid) {
            return hideInputError(input, this._form, settings);
        } else {
            // Not valid.
            return showInputError(input, this._form, settings);
        }
    };

    _hasValidInput = (inputList) =>
    inputList.every((input) => input.validity.valid);

    _toggleButton = (inputList, buttonElement, settings) => {
        if (this._hasValidInput(inputList)) {
            // Make button enabled.
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        } else {
            // Make button disabled.
            this._buttonElement.disabled = true;
            this._buttonElement.classList.add(this._inactiveButtonClass);
        }
    };   

// Method implementing the form validation.
enableValidation() {
    this._form.addEventListener('submit', evt => {       
        evt.preventDefault(); 
    });
        this._setEventListeners();
};

}

const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addForm);
addFormValidator.enableValidation();

export default FormValidator;