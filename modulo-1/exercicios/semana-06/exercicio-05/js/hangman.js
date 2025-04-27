let generatedWord = {};
let isLoose = false;
const buttons = document.querySelectorAll(".button-key");

const wrongKeys = [];
const correctKeys = [];
const bodyParts = [
  "head",
  "middle",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];

const words = [
  { name: "abacaxi", type: "fruta" },
  { name: "banana", type: "fruta" },
  { name: "cachorro", type: "animal" },
  { name: "dente", type: "parte do corpo" },
  { name: "elefante", type: "animal" },
  { name: "foguete", type: "objeto" },
  { name: "guitarra", type: "instrumento" },
  { name: "hipopotamo", type: "animal" },
  { name: "internet", type: "tecnologia" },
  { name: "jacare", type: "animal" },
  { name: "kiwi", type: "fruta" },
  { name: "leopardo", type: "animal" },
  { name: "montanha", type: "natureza" },
  { name: "navio", type: "transporte" },
  { name: "ocelote", type: "animal" },
  { name: "pipoca", type: "comida" },
  { name: "quadro", type: "objeto" },
  { name: "rato", type: "animal" },
  { name: "sapato", type: "objeto" },
  { name: "tigre", type: "animal" },
  { name: "uva", type: "fruta" },
  { name: "violao", type: "instrumento" },
  { name: "wolverine", type: "personagem" },
  { name: "xadrez", type: "jogo" },
  { name: "yeti", type: "criatura" },
  { name: "zebra", type: "animal" },
  { name: "foca", type: "animal" },
  { name: "lobo", type: "animal" },
  { name: "urso", type: "animal" },
  { name: "galo", type: "animal" },
];

const generateWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const getElementById = (id) => {
  return document.getElementById(id);
};

const createWordEmptyElement = () => {
  const wordKeysContainer = getElementById("word-content-keys");
  generatedWord = generateWord();
  const keys = generatedWord?.name?.split("") ?? [];

  const hintContent = getElementById("hint");

  if (hintContent) {
    hintContent.textContent = generatedWord?.type ?? "--------";
  }

  keys.forEach((_key) => {
    const newElement = document.createElement("div");
    wordKeysContainer.appendChild(newElement);
  });
};

const hasKeyInWord = (value) => {
  return generatedWord?.name
    ?.split("")
    .some((key) => key.toLowerCase() === value.toLowerCase());
};

const showWrongKeys = (key) => {
  const wrongKeysContainer = getElementById("wrong-keys");

  wrongKeys.push(key);

  const newElement = document.createElement("div");
  newElement.textContent = key;
  wrongKeysContainer.appendChild(newElement);
};

const disableAllButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const showFeedback = () => {
  const resetButton = getElementById("button-reset");
  const feedbackElement = getElementById("feedback");
  const feedbackTextElement = getElementById("feedback-text");
  const feedbackSelectedWord = getElementById("selected-word");

  if (feedbackTextElement) {
    feedbackTextElement.textContent = !isLoose
      ? "Parabéns você acertou!!, a palavra era:"
      : "Você perdeu, tente novamente. a palavra era:";
  }

  if (feedbackSelectedWord) {
    feedbackSelectedWord.textContent = generatedWord.name;
  }

  if (feedbackElement) {
    feedbackElement.classList.remove("hide");
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      location.reload();
    });
  }
};

const showCorrectKey = (selectKey) => {
  const wordKeysContainer = getElementById("word-content-keys");
  const children = wordKeysContainer.children;
  const generatedKeys = generatedWord?.name?.split("") ?? [];

  generatedKeys.forEach((key, index) => {
    if (key.toLowerCase() === selectKey.toLowerCase()) {
      children[index].innerHTML = key;

      correctKeys.push(key);

      if (generatedKeys.length === correctKeys.length) {
        disableAllButtons();
        isLoose = false;

        showFeedback();
      }
    }
  });
};

const showHangmanParts = () => {
  const bodyPart = bodyParts[wrongKeys.length - 1];

  if (bodyPart) {
    const element = getElementById(bodyPart);

    element.classList.remove("hide");

    if (wrongKeys.length === bodyParts.length) {
      const eyesElement = getElementById("eyes");

      eyesElement.classList.remove("hide");

      disableAllButtons();
      isLoose = true;

      showFeedback();
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (hasKeyInWord(buttonValue)) {
      button.classList.add("button-success");

      showCorrectKey(buttonValue);
    } else {
      button.classList.add("button-error");

      showWrongKeys(buttonValue);
      showHangmanParts();
    }

    button.disabled = true;
  });
});

createWordEmptyElement();
