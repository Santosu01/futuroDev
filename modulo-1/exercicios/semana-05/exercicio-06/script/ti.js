const button = document.querySelector("button");

const getInput = () => {
  return document.getElementById("number-field");
};

const getInputValue = () => {
  const input = getInput();

  if (input) {
    return input.value;
  }

  return undefined;
};

const clearInput = () => {
  const input = getInput();

  if (input) {
    input.value = "";
  }
};

const convertNumber = (e) => {
  e.preventDefault();
  const inputValue = getInputValue();

  if (!inputValue) {
    return alert("Informe um numéro.");
  } else if (Number.isNaN(Number(inputValue))) {
    return alert("Informe um numero valido!");
  } else if (!Number.isInteger(Number(inputValue))) {
    return alert("O valor deve ser um número inteiro.");
  }

  const convertedBinaryNumber = Number(inputValue).toString(2);

  clearInput();

  alert(`O valor binário do numero ${inputValue} é: ${convertedBinaryNumber}`);
};

button?.addEventListener("click", (e) => {
  convertNumber(e);
});
