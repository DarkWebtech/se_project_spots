const initialCards = [
    { name: 'Karachi', link: 'https://tinyurl.com/ybwpy867' },
    { name: 'Islamabad', link: 'https://tinyurl.com/35vsffsh' },
    { name: 'Lahore', link: 'https://tinyurl.com/yeywsd4p' },
    { name: 'Multan', link: 'https://tinyurl.com/494k4dnk' },
    { name: 'Peshawar', link: 'https://tinyurl.com/msmcp42f' },
    { name: 'Abbottabad ', link: 'https://tinyurl.com/52mc289t' }
]


let template = document.querySelector("template");

function getCardElement(data) {
    let cardElement = template.content.cloneNode(true);
    cardElement.querySelector(".card__image").src = data.link;
    cardElement.querySelector(".card__image").alt = data.name;
    cardElement.querySelector(".card__title").textContent = data.name;

    return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
    let cardElement = getCardElement(initialCards[i]);
    let cards__list = document.querySelector(".cards__list");
    cards__list.appendChild(cardElement);
}

let profile__edit_btn = document.querySelector(".profile__edit-btn");

let edit_modal = document.querySelector("#edit-modal");

function openModal() {
    edit_modal.classList.add("modal__opened");
}

profile__edit_btn.addEventListener("click", openModal);

function closeModal () {
    edit_modal.classList.remove("modal__opened");
}

let modal__close_btn = document.querySelector(".modal__close-btn");

modal__close_btn.addEventListener("click", closeModal);

let profile__name = document.querySelector(".profile__name");
let modal__NameInput = document.querySelector("#name");
modal__NameInput.value = profile__name.textContent;


let profile__description = document.querySelector(".profile__description");
let modal__DescriptionInput = document.querySelector("#description");
modal__DescriptionInput.value = profile__description.textContent;


function formSubmit(event) {
    event.preventDefault();

    profile__name.textContent = modal__NameInput.value;
    profile__description.textContent = modal__DescriptionInput.value;

    edit_modal.classList.remove("modal__opened");
}

let modal__form = document.querySelector(".modal__form");
modal__form.addEventListener("submit", formSubmit);