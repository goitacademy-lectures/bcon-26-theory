(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    checkbox: document.querySelector("input[type='checkbox']"),
    btn: document.querySelector("button[type='submit']"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.checkbox.addEventListener("click", (event) => {
    const checkbox = event.target;

    if (checkbox.checked) {
      refs.btn.disabled = false;
    } else {
      refs.btn.disabled = true;
    }
  });
})();
