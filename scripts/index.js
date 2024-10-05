const initialCards = [
    { name: 'Karachi', link: 'https://tinyurl.com/ybwpy867' },
    { name: 'Islamabad', link: 'https://tinyurl.com/mryp5wmp' },
    { name: 'Lahore', link: 'https://tinyurl.com/yeywsd4p' },
    { name: 'Multan', link: 'https://tinyurl.com/494k4dnk' },
    { name: 'Peshawar', link: 'https://tinyurl.com/msmcp42f' },
    { name: 'Abbottabad ', link: 'https://tinyurl.com/52mc289t' }
]

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