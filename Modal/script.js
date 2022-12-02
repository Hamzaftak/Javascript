"use strict";

// Define variables

const showModalbtns = document.querySelectorAll(".show-modal");
const closeModalbtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const openModal = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
for (let i = 0; i < showModalbtns.length; i++) {
  showModalbtns[i].addEventListener("click", openModal);
}
closeModalbtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
  }
});

/*for (let i = 0; i < showModalbtns.length; i++) {
  console.log(showModalbtns[i].textContent);
}*/
