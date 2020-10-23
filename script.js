let editButton = document.querySelector('.profile__edit-button');
let popupWindow = document.querySelector('.popup');
let closeButton = document.querySelector('.form__close-button');

function showPopup() {
  popupWindow.classList.add('popup_opened');
}

editButton.addEventListener('click', showPopup);

function closePopup() {
  popupWindow.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.form');



function formSubmitHandler (evt) {
  evt.preventDefault();

  
  let nameInput = formElement.querySelector('.form__input-name');
  let jobInput = formElement.querySelector('.form__input-job');
  

  let nameInputText = nameInput.value;
  let jobInputText = jobInput.value;

  let porfileName = document.querySelector('.profile__name');
  let profileJob = document.querySelector('.profile__job');

  porfileName.textContent = nameInputText;
  profileJob.textContent = jobInputText;

}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);





