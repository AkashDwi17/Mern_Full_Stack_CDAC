const form = document.getElementById("feedbackForm");
const alertContainer = document.getElementById("alert-container");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const categoryInput = document.getElementById("category");
const feedbackInput = document.getElementById("feedback");
const charCount = document.getElementById("charCount");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const categoryError = document.getElementById("categoryError");
const ratingError = document.getElementById("ratingError");
const feedbackError = document.getElementById("feedbackError");

const stars = document.querySelectorAll("#starRating i");
let rating = 0;

//  Star Rating Click Event
stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = parseInt(star.dataset.value);
    stars.forEach((s, index) => {
      if (index < rating) {
        s.classList.remove("fa-regular");
        s.classList.add("fa-solid", "text-warning");
      } else {
        s.classList.add("fa-regular");
        s.classList.remove("fa-solid", "text-warning");
      }
    });
  });
});

//  Live Character Counter
feedbackInput.addEventListener("input", () => {
  const length = feedbackInput.value.length;
  charCount.textContent = `${length} / 300`;
});

//  Form Validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  categoryError.textContent = "";
  ratingError.textContent = "";
  feedbackError.textContent = "";
  alertContainer.innerHTML = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Category validation
  if (categoryInput.value === "") {
    categoryError.textContent = "Please select a category.";
    valid = false;
  }

  // Rating validation
  if (rating === 0) {
    ratingError.textContent = "Please select a rating.";
    valid = false;
  }

  // Feedback validation
  if (feedbackInput.value.trim().length < 30) {
    feedbackError.textContent = "Feedback must be at least 30 characters.";
    valid = false;
  }

  if (!valid) {
    showAlert("Please correct the errors and try again.", "danger");
    return;
  }

  // Save feedback to localStorage (Bonus)
  const feedbackData = {
    name: nameInput.value,
    email: emailInput.value,
    category: categoryInput.value,
    rating: rating,
    feedback: feedbackInput.value,
  };
  localStorage.setItem("productFeedback", JSON.stringify(feedbackData));

  showAlert("Thank you! Your feedback has been submitted.", "success");
  form.reset();
  charCount.textContent = "0 / 300";
  stars.forEach((s) => s.classList.replace("fa-solid", "fa-regular"));
  rating = 0;
});

function showAlert(message, type) {
  const alertHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
  alertContainer.innerHTML = alertHTML;
}
