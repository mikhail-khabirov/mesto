const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const submitButton = document.querySelector('.form__submit-button');
const closeEditButton = document.querySelector('.form__close-button');
const popupWindow = document.querySelector('.popup');
const formTitle = document.querySelector('.form__title');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_name');
const jobInput = formElement.querySelector('.form__input_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const contentPage = document.querySelector('.content')
const popupTemplate = document.querySelector('#popup').content;
const popupEdit = popupTemplate.cloneNode(true);
contentPage.append(popupEdit);
const popupEditWindow = document.querySelector('.popup-edit');
const closeAddButton = popupEditWindow.querySelector('.form__close-button');
const placeInput = popupEditWindow.querySelector('.form__input_place');
const linkInput = popupEditWindow.querySelector('.form__input_link');
const addForm = popupEditWindow.querySelector('.form');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;
const element = elementTemplate.cloneNode(true);
const likePic = element.querySelector('.element__like-button-pic');
const popupPicElement = document.querySelector('#popup-pic').content;
const popupPic = popupPicElement.cloneNode(true);
const popupPicObject = popupPic.querySelector('.popup');
contentPage.append(popupPicObject); 
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function showEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupWindow.classList.add('popup_opened');
};

function closeEditPopup() {
  popupWindow.classList.remove('popup_opened');
};

function showAddPopup() {
  popupEditWindow.classList.add('popup_opened');
};

function closeAddPopup() {
  popupEditWindow.classList.remove('popup_opened');
};

function editFormSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeEditPopup();
};


function addFormSubmitHandler (evt) {
  evt.preventDefault();
  const elements = document.querySelector('.elements');
  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__text').textContent = placeInput.value;
  element.querySelector('.element__pic').src = linkInput.value;
  const likeButton = element.querySelector('.element__like-button');

  likeButton.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    evt.target.classList.toggle('element__like-button_pressed');
  });

  const deleteButton = element.querySelector('.element__delete-button');
  
  deleteButton.addEventListener('click', function(  ) {
    const nearElement = deleteButton.closest('.element');
    nearElement.remove();
  });
  
  const elementPic = element.querySelector('.element__pic');
  elementPic.addEventListener('click', function(evt) {
    popupPicObject.querySelector('.popup-pic__photo').src = evt.target.src;
    popupPicObject.querySelector('.popup-pic__text').textContent = evt.target.alt;
    popupPicObject.classList.add('popup_opened');
    const popupPicCloseButton = popupPicObject.querySelector('.popup-pic__close-button');

    popupPicCloseButton.addEventListener('click', function () {
      popupPicObject.classList.remove('popup_opened');
    })
  });

  elements.prepend(element);

  closeAddPopup();
};

initialCards.forEach(function (item) {
  const elements = document.querySelector('.elements');
  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__text').textContent = item.name;
  element.querySelector('.element__pic').src = item.link;
  const likeButton = element.querySelector('.element__like-button');
  element.querySelector('.element__pic').alt = item.name;

  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_pressed');
  });
  
  const deleteButton = element.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function() {
    
    const nearElement = deleteButton.closest('.element');

    nearElement.remove();
  });


  const elementPic = element.querySelector('.element__pic');
  elementPic.addEventListener('click', function(evt) {
    popupPicObject.querySelector('.popup-pic__photo').src = evt.target.src;
    popupPicObject.querySelector('.popup-pic__text').textContent = evt.target.alt;
    popupPicObject.classList.add('popup_opened'); 
    const popupPicCloseButton = popupPicObject.querySelector('.popup-pic__close-button');
    popupPicCloseButton.addEventListener('click', function () {
      popupPicObject.classList.remove('popup_opened');
    });
  });
  
  elements.append(element);
});

editButton.addEventListener('click', showEditPopup);
closeEditButton.addEventListener('click', closeEditPopup);
closeAddButton.addEventListener('click', closeAddPopup);
formElement.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);
addButton.addEventListener('click', showAddPopup);






