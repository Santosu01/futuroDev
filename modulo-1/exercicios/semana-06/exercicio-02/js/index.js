let generatedWord = {};

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

const wordKeysContainer = getElementById("word-content-keys");

const createWordEmptyElement = () => {
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

createWordEmptyElement();
