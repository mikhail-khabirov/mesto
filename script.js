const editButton = document.querySelector('.profile__edit-button'),
      addButton = document.querySelector('.profile__add-button'),
      submitButton = document.querySelector('.form__submit-button'),
      closeEditButton = document.querySelector('.form__close-button'),
      popupWindow = document.querySelector('.popup'),
      formTitle = document.querySelector('.form__title'),
      formElement = document.querySelector('.form'),
      nameInput = formElement.querySelector('.form__input_name'),
      jobInput = formElement.querySelector('.form__input_job'),
      profileName = document.querySelector('.profile__name'),
      profileJob = document.querySelector('.profile__job'),
      contentPage = document.querySelector('.content'),      
      popupEditWindow = document.querySelector('.popup-edit'),
      closeAddButton = popupEditWindow.querySelector('.form__close-button'),
      placeInput = popupEditWindow.querySelector('.form__input_place'),
      linkInput = popupEditWindow.querySelector('.form__input_link'),
      addForm = popupEditWindow.querySelector('.form'),
      elements = document.querySelector('.elements'),
      popupPicObject = document.querySelector('.popup-pic'),
      popupPicCloseButton = popupPicObject.querySelector('.popup-pic__close-button'),
      initialCards = [
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

//добавить лайк
function addLike(likeButton) {
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_pressed');
  });
}

//удалить карточку
function deleteCard(deleteButton) {
  deleteButton.addEventListener('click', function() {
    const nearElement = deleteButton.closest('.element');
    nearElement.remove();
  });
}

//показать попап картинку
function showElementPic(elementPic) {
  elementPic.addEventListener('click', function(evt) {
    popupPicObject.querySelector('.popup-pic__photo').src = evt.target.src;
    popupPicObject.querySelector('.popup-pic__text').textContent = evt.target.alt;
    popupPicObject.classList.add('popup_opened');
  });
}

//закрыть попап картинку
function closeElementPic(popupPicCloseButton) {
  popupPicCloseButton.addEventListener('click', function () {
    popupPicObject.classList.remove('popup_opened');
  });
}


//загрузить 6 карточек
initialCards.forEach(function (item) {
  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.cloneNode(true);
  const elementNew = element.querySelector('.element');
  const elementText = element.querySelector('.element__text');
  const elementPic = element.querySelector('.element__pic');
  const likeButton = element.querySelector('.element__like-button');
  const deleteButton = element.querySelector('.element__delete-button');
  const popupPicObject = document.querySelector('.popup-pic');
  const popupPicCloseButton = popupPicObject.querySelector('.popup-pic__close-button');


  element.querySelector('.element__text').textContent = item.name;
  element.querySelector('.element__pic').src = item.link;
  element.querySelector('.element__pic').alt = item.name;
  

  addLike(likeButton);
  deleteCard(deleteButton);
  showElementPic(elementPic);
  closeElementPic(popupPicCloseButton);

  elements.append(elementNew);
  
});

//открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открыть попап для редактирования имени и профессии
function showEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupWindow);
}

//закрыть попап для редактирования имени и професии
function closeEditPopup() {
  closePopup(popupWindow);
}

//открыть попап для добавления карточки
function showAddPopup() {
  openPopup(popupEditWindow);
}

//закрыть попап для добавления карточки
function closeAddPopup() {
  closePopup(popupEditWindow);
}

//редактировать имя и профессию
function editFormSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeEditPopup();
}

//добавить новую карточку
function addFormSubmitHandler (evt) {
  evt.preventDefault();

  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.cloneNode(true);
  const elementNew = element.querySelector('.element');
  const elementText = element.querySelector('.element__text');
  const elementPic = element.querySelector('.element__pic');
  const likeButton = element.querySelector('.element__like-button');
  const deleteButton = element.querySelector('.element__delete-button');
  const popupPicObject = document.querySelector('.popup-pic');
  const popupPicCloseButton = popupPicObject.querySelector('.popup-pic__close-button');
  const popupPicText = popupPicObject.querySelector('.popup-pic__text');
  const placeInput = popupEditWindow.querySelector('.form__input_place');
  const linkInput = popupEditWindow.querySelector('.form__input_link');
 
  
  elementText.textContent = placeInput.value;
  elementPic.src = linkInput.value;
  
  
  elementPic.addEventListener('click', function(evt) {
    popupPicObject.querySelector('.popup-pic__photo').src = evt.target.src;
    popupPicObject.querySelector('.popup-pic__text').textContent = placeInput.value;
    popupPicObject.classList.add('popup_opened');
  });

  addLike(likeButton);
  deleteCard(deleteButton);
  closeElementPic(popupPicCloseButton);
  elements.prepend(elementNew);
  closeAddPopup();
  
}

editButton.addEventListener('click', showEditPopup);
closeEditButton.addEventListener('click', closeEditPopup);
addButton.addEventListener('click', showAddPopup);
closeAddButton.addEventListener('click', closeAddPopup);
formElement.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);



















