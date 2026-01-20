const primaryPassword = document.querySelector("#password");
const primaryError = document.querySelector(
  ".form__field:has(#password) .form__error",
);

const secondaryPassword = document.querySelector("#passwordC");
const secondaryError = document.querySelector(
  ".form__field:has(#passwordC) .form__error",
);

function validatePrimaryPassword() {
  const isValid = primaryPassword.checkValidity();

  if (!isValid) {
    primaryError.classList.add("show");
  } else {
    primaryError.classList.remove("show");
  }
}

function validateSecondaryPassword() {
  const isValid = primaryPassword.value === secondaryPassword.value;

  if (!isValid) {
    secondaryError.classList.add("show");
  } else {
    secondaryError.classList.remove("show");
  }
}

primaryPassword.addEventListener("input", validatePrimaryPassword);
secondaryPassword.addEventListener("input", validateSecondaryPassword);
