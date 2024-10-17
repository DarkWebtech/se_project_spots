const initialCards = [
    { name: 'Karachi', link: 'https://tinyurl.com/ybwpy867' },
    { name: 'Islamabad', link: 'https://tinyurl.com/35vsffsh' },
    { name: 'Lahore', link: 'https://tinyurl.com/yeywsd4p' },
    { name: 'Multan', link: 'https://tinyurl.com/494k4dnk' },
    { name: 'Peshawar', link: 'https://tinyurl.com/msmcp42f' },
    { name: 'Abbottabad', link: 'https://tinyurl.com/52mc289t' }
];

let template = document.querySelector("template");

function getCardElement(data) {
    let cardElement = template.content.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardElement.querySelector(".card__title").textContent = data.name;

    return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
    let cardElement = getCardElement(initialCards[i]);
    let cardsList = document.querySelector(".cards__list");
    cardsList.appendChild(cardElement);
}

let profileEditBtn = document.querySelector(".profile__edit-btn");
let editModal = document.querySelector("#edit-modal");

function openModal() {
    editModal.classList.add("modal_opened");
    modalNameInput.value = profileName.textContent;
    modalDescriptionInput.value = profileDescription.textContent;
}

profileEditBtn.addEventListener("click", openModal);

function closeModal() {
    editModal.classList.remove("modal_opened");
}

let modalCloseBtn = document.querySelector(".modal__close-btn");
modalCloseBtn.addEventListener("click", closeModal);

let profileName = document.querySelector(".profile__name");
let modalNameInput = document.querySelector("#name");

let profileDescription = document.querySelector(".profile__description");
let modalDescriptionInput = document.querySelector("#description");

function handleProfileFormSubmit(event) {
    event.preventDefault();

    profileName.textContent = modalNameInput.value;
    profileDescription.textContent = modalDescriptionInput.value;

    closeModal();
}

let modalForm = document.querySelector(".modal__form");
modalForm.addEventListener("submit", handleProfileFormSubmit);
