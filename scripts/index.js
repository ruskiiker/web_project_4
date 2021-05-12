// Variables
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-caption');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const modalEditClose = document.querySelector('.popup__close_type_edit');
const modalAddClose = document.querySelector('.popup__close_type_add');
const modalImageClose = document.querySelector('.popup__close_type_image');
const inputs = document.querySelectorAll('.popup__input');
const title = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__description');
const captionInput = document.querySelector('.popup__input_type_caption');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const linkInput = document.querySelector('.popup__input_type_link');
const editForm = document.querySelector('.popup_type_edit');
const addForm = document.querySelector('.popup_type_add');
const cardList = document.querySelector('.places__list');
const card = document.querySelector('.card');

editButton.addEventListener('click', activateEditModal);
addButton.addEventListener('click', activateAddModal);
modalEditClose.addEventListener('click', closeEditProfile);
modalAddClose.addEventListener('click', closeAddProfile);
modalImageClose.addEventListener('click', closeImageProfile);
editForm.addEventListener('submit', saveProfile);
addForm.addEventListener('submit', saveAddCard);

const profile = {
  name: title.textContent,
  about: aboutMe.textContent,
};

const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];

const places__list = document.querySelector('.places__list');

// Functions
function renderCard(card, wrapper) { 
  wrapper.prepend(createCard(card));
  /// Prepend the card element to the <ul class=".places-list"> (wrapper).
}

initialCards.forEach((card) => {
  renderCard(card, cardList); 
  // CardList also = <ul class=".places-list">.
});

function createCard(card) {
  // Reference the template element.
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card'); 
  // Create the card element.
  const cardElement = cardTemplate.cloneNode(true); 
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardTitle.textContent = card.name;
  cardImage.style.backgroundImage = `url(${card.link})`;

  deleteButton.addEventListener('click', () => {
    const listItem = deleteButton.closest('.card');
    listItem.remove();
  });

  likeButton.addEventListener('click', event => {
    event.target.classList.toggle('card__like-button_is-active');
  });

  cardImage.addEventListener('click', () => {

    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupImageTitle.textContent = card.name;

    activateImageModal(popupImage);
  });

  return cardElement;
}

function saveProfile(event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closeEditProfile();
}

function saveAddCard(event) {
  event.preventDefault();
  const card = {
    name: captionInput.value,
    link: linkInput.value
  }
  renderCard(card, cardList);
  closeAddProfile();
  captionInput.value = ''
  linkInput.value = ''
}

function editProfile() {
  nameInput.value = profile.name;
  jobInput.value = profile.about;
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
}

function closeEditProfile() {  
  console.log('AA');
  closePopup(popupEdit)
}

function closeAddProfile() {
  console.log('A');
  closePopup(popupAdd)
}

function closeImageProfile() {
  closePopup(popupTypeImage)
}

function openPopup(popup) {
  popup.classList.add('popup_active');
}

function activateEditModal() {
  openPopup(popupEdit);
  editProfile();
}

function activateAddModal() {
  openPopup(popupAdd);
}

function activateImageModal() {
  openPopup(popupTypeImage);
}