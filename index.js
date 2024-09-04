// opens/closes modal window for 

const Button = document.querySelectorAll('.first-section-button');
const Backdrop = document.querySelector('.modal-window-container');

Button.forEach(button => {
  button.addEventListener('click', toggleModal);
});

Backdrop.addEventListener('click', (e) => {
  const closeButton = e.target.closest(".modal-window-close-button");
  const submitButton = e.target.closest(".modal-window-send-button");
  
  if (closeButton || submitButton) {
    toggleModal();
  }
});

function toggleModal() {
  Backdrop.classList.toggle("is-open");
};