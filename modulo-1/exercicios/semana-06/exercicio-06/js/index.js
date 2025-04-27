const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const inputElement = document.querySelector("input");
  const inputValue = inputElement?.value;

  if (!inputValue) {
    return alert("Preencha o campo Nome/apelido");
  }

  localStorage.setItem("nickname", inputValue);
  inputElement.value = "";
  window.location.href = "./pages/hangman.html";
});
