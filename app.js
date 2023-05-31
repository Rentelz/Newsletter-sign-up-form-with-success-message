const input = document.getElementById("input");
const button = document.querySelector(".submit-btn");

let inputValue = input.value;

const successEmailShow = document.querySelector(".success-Email");

button.addEventListener("click", function () {
  let inputValue = input.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  console.log(inputValue);
  console.log(emailRegex.test(inputValue)); // Use emailRegex instead of emailRegax

  if (!emailRegex.test(inputValue)) {
    // input.style.display.color = "red";
    document.querySelector(".email-error").style.display = "block";
    input.style.color = "red";
    input.style.borderColor = "red";
  } else {
    successEmailShow.textContent = inputValue;

    document.querySelector(".container").style.display = "none";
    document.querySelector(".success-container").style.display = "block";
  }
});

const dismissBtn = document.querySelector(".btn-dismiss");

dismissBtn.addEventListener("click", function () {
  location.reload();
});
