const input = document.getElementById("input");
const Form = document.getElementById("form");
const email_error = document.getElementById("email_error");

const inputData = input.addEventListener("input", function (event) {
  console.log(event.target.value);
});

Form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputData = input.value.trim(); // Trim whitespace from input value
  email_error.style.display = "inline";
  if (!inputData.includes("@gmail.com")) {
    // If input value does not contain "@gmail.com"
    input.classList.add("error");

    // Display custom error message
  } else if (inputData.includes("@gmail.com")) {
    email_error.style.display = "none";
    input.classList.remove("error");
    window.location.href = "subscribe.html";
    localStorage.setItem("email", inputData);
  }
});
