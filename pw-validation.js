// Get references to the password fields and the error message element
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("password-confirm");
const passwordMatchError = document.getElementById("passwordMatchError");

// Add an input event listener to the confirm password field
confirmPasswordField.addEventListener("input", function () {
  const password = passwordField.value;
  const confirmPassword = this.value; // 'this' refers to the confirm password field

  if (password === confirmPassword) {
    passwordMatchError.textContent = ""; // Passwords match, clear error message
  } else {
    passwordMatchError.textContent = "Passwords do not match.";
  }
});