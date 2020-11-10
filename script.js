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
const cardTemplate = document.querySelector('#element').content;


//создать карточку
function createNewElement(item) {
  const card = cardTemplate.cloneNode(true);
  const cardPic = card.querySelector('.element__pic');
  const cardText = card.querySelector('.element__text');
  const cardLikeBtn = card.querySelector('.element__like-button');
  const cadrDeleteBtn = card.querySelector('.element__delete-button');

  cardPic.src = item.link;
  cardText.textContent = item.name;
  cardPic.alt = item.name;

  cardLikeBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_pressed');
  });
  
  cadrDeleteBtn.addEventListener('click', function(evt){
    evt.target.closest('.element').remove();
  });
  
  cardPic.addEventListener('click', function (evt) {
    popupPicPhoto.src = evt.target.src;
    popupPicText.textContent = evt.target.alt;
    openPopup(popupPic);
    popupPicCloseButton.addEventListener('click', function() {
      popupPic.classList.remove('popup_opened');
    });
  });
  
  return card; 
}

//открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открыть попап с инпутами для редактирования имени и профессии
editButton.addEventListener('click', function(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
  closeEditButton.addEventListener('click', function(){
    closePopup(editPopup);
  });
});

//редактировать имя и профессию
editForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
});

//открыть попап с инпутами для ввода имени и ссылки фото
addButton.addEventListener('click', function() {
  openPopup(addPopup);
  closeAddButton.addEventListener('click', function () {
    closePopup(addPopup);
  });
});

//добавить 6 карточек из массива
initialCards.forEach(item => {
  elements.append(createNewElement(item));
});

//добавить карточку с помощью попапа
addForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const elementArray = [{name:`${inputPlace.value}`, link:`${inputLink.value}`}];
  elementArray.forEach(item => {
      elements.prepend(createNewElement(item));
    });
  closePopup(addPopup);
});