class FormValidator {

    constructor(settings, formElement) {
    /* Attaching classes and selectors from the object Settings
    to reference within methods in this file. */
    this._formElements          = settings.formSelector;
    this._inputList             = settings.inputSelector;
    this._submitButtonSelector  = settings.submitButtonSelector;
    this._inactiveButtonClass   = settings.inactiveButtonClass;
    this._inputErrorClass       = settings.inputErrorClass;
    this._errorClass            = settings.errorClass;
    this._form                  = formElement;    
    }     

    _showInputError = (input, formElement, { errorClass, inputErrorClass }) => {  
        const errorSpan = formElement.querySelector(`#${input.id}-error`); 
        // Add error message/class
        errorSpan.textContent = input.validationMessage;
        errorSpan.classList.add(errorClass);
        input.classList.add(inputErrorClass);
    };

    _hideInputError = (input, formElement, { errorClass, inputErrorClass } ) => {
        const errorSpan = formElement.querySelector(`#${input.id}-error`);
        // Add error message/class
        errorSpan.textContent = '';
        errorSpan.classList.remove(errorClass);
        input.classList.remove(inputErrorClass);
    };

    _checkInputValidity = (input, formElement, settings) => {      
        if (input.validity.valid) {
            return this._hideInputError(input, formElement, settings);
        } else {
            // Not valid.
            return this._showInputError(input, formElement, settings);
        }
    };

    _hasValidInput = (inputList) => {  
        console.log(inputList.every((input) => { input.validity.valid}));   
   return inputList.every((input) => { 
       console.log(input);
    console.log("validity", input.validity.valid);
        input.validity.valid});      
    };

    _toggleButton = (inputList, buttonElement, settings) => {   
        if (this._hasValidInput(inputList)) {  
            // Make button enabled.
            buttonElement.disabled = false;
            buttonElement.classList.remove(this._inactiveButtonClass);
        } else {
            // Make button disabled.
            console.log("no valid");
            buttonElement.disabled = true;
            buttonElement.classList.add(this._inactiveButtonClass);
        }
    };   

    _setEventListeners = (formElement, settings) => { 
        const inputList = [...formElement.querySelectorAll(this._inputList)]; 
        const submitButton = formElement.querySelector(this._submitButtonSelector); 
        inputList.forEach((input) => { 
            input.addEventListener('input', (evt) => { 
                // Check validity. 
                this._checkInputValidity(input, formElement, settings); 
                // Toggle the button. 
                this._toggleButton(inputList, submitButton, settings); 
            }); 
        }); 
    }; 
    
// Method implementing the form validation.
    enableValidation = (settings) => {     
        const formElements = [...document.querySelectorAll(settings.formSelector)]; 
        formElements.forEach((formElement) => { 
            formElement.addEventListener('submit', (evt) => 
                evt.preventDefault()); 
            // Grab each one of the inputs. 
            this._setEventListeners(formElement, settings); 
        }); 
    }; 

}

export default FormValidator; 