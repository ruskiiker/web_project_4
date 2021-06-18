enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonCLass: "button_inactive",
    inputErrorClass: "popup_input_type_error",
    errorClass: "popup__input-error_active",
});

const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach(formElement) => {
    formEl.addEventListener('submit', (evt) => evt.preventDefault());
    // Grab each one of the inputs.
    setEventListeners(formElement, settings);
});
};

const showInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error");
    // Add error message/class
    errorSpan.textContent = input.validationMessage;
    input.classList.add(errorClass);
};

const hideInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error");
    // Add error message/class
    errorSpan.textContent = '';
    input.classList.remove(errorClass);
};

const checkInputValidity = (formElement, input, settings) => {
    console.log(input.validity.valid);
    if (input.validity.valid) {
        hideInputError(input, formElement, settings);
    } else {
        // Not valid.
        showInputError(input, formElement, settings);
    }
};

const hasValidInputs = (inputList) =>
    inputList.every((input) => input.validity.valid === true);

const toggleButton = (inputList, button, settings) => {
    if hasValidInputs(inputList)) {
        // Make button enabled.
        button.disabled = false;
    } else {
        // make button disabled.
        button.disabled = true;
        button.classList.add(settings.inactiveButtonCLass);
    }
}

const setEventListeners = (formElement, settings) => {
    const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach(input) => {
    input.addEventListener('input', (evt) => {
        // Check validity.
        checkInputValidity(formElement, input, settings);
        // Toggle the button.
        toggleButton(inputList, submitButton, settings);
    });
};