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
const editPopup = document.querySelector('.edit-popup');
const editForm = document.querySelector('.edit-form');
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.form__close-button');
const nameInput = editForm.querySelector('.form__input_name');
const jobInput = editForm.querySelector('.form__input_job');
const elements = document.querySelector('.elements');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.add-popup');
const addForm = document.querySelector('.add-form');
const closeAddButton = document.querySelector('.add-form__close-button');
const inputPlace = document.querySelector('.form__input_place');
const inputLink = document.querySelector('.form__input_link');
const popupPic = document.querySelector('.popup-pic');
const popupPicPhoto = document.querySelector('.popup-pic__photo');
const popupPicText = document.querySelector('.popup-pic__text');
const popupPicCloseButton = document.querySelector('.popup-pic__close-button');

//загрузить 6 карточек
function createNewElements(item) {
  const template = document.querySelector('#element').content.cloneNode(true);
  template.querySelector('.element__pic').src = item.link;
  template.querySelector('.element__text').textContent = item.name;
  template.querySelector('.element__pic').alt = item.name;
  template.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_pressed');
  });
  template.querySelector('.element__delete-button').addEventListener('click', function(evt){
    evt.target.closest('.element').remove();
  });
  template.querySelector('.element__pic').addEventListener('click', function (evt) {
    popupPicPhoto.src = evt.target.src;
    popupPicText.textContent = evt.target.alt;
    popupPic.classList.add('popup_opened');
    popupPicCloseButton.addEventListener('click', function() {
      popupPic.classList.remove('popup_opened');
    });
  });
  elements.append(template); 
}

//загрузить 1 карточку
function createNewElement() {
  const template = document.querySelector('#element').content.cloneNode(true);
  template.querySelector('.element__pic').src = inputLink.value;
  template.querySelector('.element__text').textContent = inputPlace.value;
  template.querySelector('.element__pic').alt = inputPlace.value;
  template.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_pressed');
  });
  template.querySelector('.element__delete-button').addEventListener('click', function(evt){
    evt.target.closest('.element').remove();
  });
  template.querySelector('.element__pic').addEventListener('click', function (evt) {
    popupPicPhoto.src = evt.target.src;
    popupPicText.textContent = evt.target.alt;
    popupPic.classList.add('popup_opened');
    popupPicCloseButton.addEventListener('click', function() {
      popupPic.classList.remove('popup_opened');
    });
  });
  elements.prepend(template); 
}

//открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//попап для редактирования имени и профессии
editButton.addEventListener('click', function(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
  closeEditButton.addEventListener('click', function(){
    closePopup(editPopup);
  });
});

//отправка попапа с именем и профессией
editForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
});

//попап с названием и ссылкой фото
addButton.addEventListener('click', function() {
  openPopup(addPopup);
  closeAddButton.addEventListener('click', function () {
    closePopup(addPopup);
  });
});

//отправка попапа с названием и ссылкой фото
addForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  createNewElement();
  closePopup(addPopup);
});

//обход массива
initialCards.forEach(createNewElements);

