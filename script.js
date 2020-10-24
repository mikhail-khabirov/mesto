let editButton = document.querySelector('.profile__edit-button');
let popupWindow = document.querySelector('.popup');
let closeButton = document.querySelector('.form__close-button');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_name');
let jobInput = formElement.querySelector('.form__input_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function showPopup() {
  popupWindow.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popupWindow.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  closePopup();
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);





