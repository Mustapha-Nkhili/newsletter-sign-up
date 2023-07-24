const signUpForm = document.querySelector("body > .container");
const successMessage = document.querySelector(".message-container");
const form = document.querySelector("form");
const subEmail = document.querySelector("form #subEmail");
const subBtn = document.querySelector("form #subscribeBtn");
const errorContainer = document.createElement("p");
const dismissBtn = document.querySelector(".message-container #dismissBtn");

subBtn.addEventListener("click", (event) => {
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailRegExp.test(subEmail.value)) {
    addColorsAndRemoveError();
    showSuccessMessage(subEmail.value);
  } else {
    event.preventDefault();
    showError("valid email required");
  }
});

subEmail.addEventListener("input", () => {
  if (subEmail.value === "") {
    addColorsAndRemoveError();
  }
});

dismissBtn.addEventListener("click", () => {
  successMessage.remove();
  signUpForm.classList.add("active");
});

function addColorsAndRemoveError() {
  errorContainer.remove();
  subEmail.classList.remove("email-error");
}

function showError(errorMessage) {
  errorContainer.remove();
  errorContainer.className = "invalid-email";

  errorContainer.textContent = errorMessage;
  subEmail.classList.add("email-error");

  subEmail.parentElement.prepend(errorContainer);
}

function showSuccessMessage(email) {
  document.querySelector(".message-container span.email").textContent = email;
  signUpForm.classList.remove("active");
  successMessage.classList.add("active");
}
