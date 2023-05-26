const hamburder_btn = document.querySelector(".hamburger-btn");
const mobile_nav = document.querySelector(".nav-bar-overlay");
const x_btn = document.querySelector(".bi-x-circle-fill");

hamburder_btn.addEventListener("click", function openNav() {
  mobile_nav.classList.add("nav-bar-active");
});

x_btn.addEventListener("click", function closeNav() {
  mobile_nav.classList.remove("nav-bar-active");
});

const inquire_btn = document.querySelectorAll(".inquire-btn");
const form_message = document.querySelector("textarea");
inquire_btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector(".contact-us-wrap").scrollIntoView();
    const packageCard = btn.closest(".package-card");
    const packageTitle = packageCard.querySelector(".package-title h3");
    const packageTitleText = packageTitle.innerText;
    var message =
      "Hello,\nI would like to inquire about the " +
      packageTitleText +
      " package, can you please contact me on the email, or phone number submitted.";
    
    form_message.value = message;
    validateMessage();
  });
});

let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isPhoneNumberValid = false;
let isMessageValid = false;

// first name validation
const firstNameInput = document.getElementById("first-name");
function validateFirstName() {
  const firstName = firstNameInput.value;
  const errorElement = firstNameInput.nextElementSibling;

  if (!/^[a-zA-Z]+$/.test(firstName)) {
    errorElement.style.display = "block";
    errorElement.textContent = "Invalid first name. It must contain only alphabetical characters.";
    isFirstNameValid = false;
  } else {
    errorElement.style.display = "none";
    isFirstNameValid = true;
  }

  validateInputs();
}
firstNameInput.addEventListener("input", validateFirstName);

// last name validation
const lastNameInput = document.getElementById("last-name");
function validateLastName() {
  const lastName = lastNameInput.value;
  const errorElement = lastNameInput.nextElementSibling;

  if (!/^[a-zA-Z]+$/.test(lastName)) {
    errorElement.style.display = "block";
    errorElement.textContent = "Invalid last name. It must contain only alphabetical characters.";
    isLastNameValid = false;
  } else {
    errorElement.style.display = "none";
    isLastNameValid = true;
  }

  validateInputs();
}
lastNameInput.addEventListener("input", validateLastName);

// email validation
const emailInput = document.getElementById("email");
function validateEmail() {
  const email = emailInput.value;
  const errorElement = emailInput.nextElementSibling;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorElement.style.display = "block";
    errorElement.textContent = "Invalid email address.";
    isEmailValid = false;
  } else {
    errorElement.style.display = "none";
    isEmailValid = true;
  }

  validateInputs();
}
emailInput.addEventListener("input", validateEmail);

// Phone number validation
const phoneInput = document.getElementById("phone");
function validatePhoneNumber() {
  const phoneNumber = phoneInput.value;
  const errorElement = phoneInput.nextElementSibling;

  if (!/^\+961 \d{8}$/.test(phoneNumber)) {
    errorElement.style.display = "block";
    errorElement.textContent = "Phone number must be in the format +961 01234567.";
    isPhoneNumberValid = false;
  } else {
    errorElement.style.display = "none";
    isPhoneNumberValid = true;
  }

  validateInputs();
}
phoneInput.addEventListener("input", validatePhoneNumber);

// message validation
const messageInput = document.getElementById("message");
function validateMessage() {
  const message = messageInput.value;
  const errorElement = messageInput.nextElementSibling;

  if (message.length < 25 || message.length === 0) {
    errorElement.style.display = "block";
    errorElement.textContent = "Message must not be empty and should have at least 25 characters.";
    isMessageValid = false;
  } else {
    errorElement.style.display = "none";
    isMessageValid = true;
  }

  validateInputs();
}
messageInput.addEventListener("input", validateMessage);

const submitBtn = document.querySelector(".submit-btn");
submitBtn.disabled = true;

function validateInputs() {
  submitBtn.disabled = !(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneNumberValid && isMessageValid);
}
