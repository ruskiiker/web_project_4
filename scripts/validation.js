const showInputError = (input, formElement, { errorClass, inputErrorClass }) => {
    const errorSpan = formElement.querySelector(`#${input.id}-error`);
    // Add error message/class
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
    input.classList.add(inputErrorClass);
};

const hideInputError = (input, formElement, { errorClass, inputErrorClass }) => {
    const errorSpan = formElement.querySelector(`#${input.id}-error`);
    // Add error message/class
    errorSpan.textContent = '';
    errorSpan.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, input, settings) => {
    if (input.validity.valid) {
        return hideInputError(input, formElement, settings);
    } else {
        // Not valid.
        return showInputError(input, formElement, settings);
    }
};

const hasValidInput = (inputList) =>
    inputList.every((input) => input.validity.valid);

const toggleButton = (inputList, buttonElement, settings) => {
    if (hasValidInput(inputList)) {
        // Make button enabled.
        buttonElement.disabled = false;
        buttonElement.classList.remove(settings.inactiveButtonClass);
    } else {
        // Make button disabled.
        buttonElement.disabled = true;
        buttonElement.classList.add(settings.inactiveButtonClass);
    }
};

const setEventListeners = (formElement, settings) => {
    const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener('input', (evt) => {
            // Check validity.
            checkInputValidity(formElement, input, settings);
            // Toggle the button.
            toggleButton(inputList, submitButton, settings);
        });
    });
};

const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) =>
            evt.preventDefault());
        // Grab each one of the inputs.
        setEventListeners(formElement, settings);
    });
};

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonCLass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_active",
});