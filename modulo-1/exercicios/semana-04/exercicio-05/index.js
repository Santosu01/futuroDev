const requestNumber = (message) => {
  const value = parseInt(prompt(message));

  if (isNaN(value)) {
    alert("Valor inválido. Por favor, insira um número.");
    return requestNumber(message);
  }

  return value;
};

const sum = () => {
  const a = requestNumber("Informe o primeiro número:");
  const b = requestNumber("Informe o segundo número:");

  alert(`O resultado de ${a} + ${b} é: ${a + b}`);
};

const subtract = () => {
  const a = requestNumber("Informe o primeiro número:");
  const b = requestNumber("Informe o segundo número:");

  alert(`O resultado de ${a} - ${b} é: ${a - b}`);
};

const evenNumbersCount = (value) => {
  let count = 0;
  let evenCount = 0;

  while (count <= value) {
    if (count > 0 && count % 2 == 0) {
      evenCount += 1;
    }

    count += 1;
  }

  return evenCount;
};

const oddNumbersCount = (value) => {
  let oddCount = 0;
  for (let i = 1; i <= value; i++) {
    if (i % 2 !== 0) {
      oddCount += 1;
    }
  }

  return oddCount;
};

const primeNumbersCount = (value) => {
  if (value <= 1) {
    return 0;
  }

  let count = 0;
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      count += 1;
    }
  }

  return count;
};

const countEvenNumbers = () => {
  const a = requestNumber("Informe o número:");

  alert(`O número ${a} tem ${evenNumbersCount(a)} números pares.`);
};

const countOddNumbers = () => {
  const a = requestNumber("Informe o número:");

  alert(`O número ${a} tem ${oddNumbersCount(a)} números ímpares.`);
};

const countPrimeNumbers = () => {
  const a = requestNumber("Informe o número:");

  alert(`O número ${a} tem ${primeNumbersCount(a)} números primos.`);
};

const showMenu = () => {
  let option;

  do {
    option = parseInt(
      prompt(
        "=== MENU ===\n" +
          "[1] Somar dois números;\n" +
          "[2] Subtrair dois números;\n" +
          "[3] Buscar quantidade números pares;\n" +
          "[4] Buscar quantidade números impares;\n" +
          "[5] Buscar quantidade números primos;\n" +
          "[6] Sair." +
          "\n\n" +
          "Informe uma opção:"
      )
    );

    switch (option) {
      case 1:
        sum();
        break;
      case 2:
        subtract();
        break;
      case 3:
        countEvenNumbers();
        break;
      case 4:
        countOddNumbers();
        break;
      case 5:
        countPrimeNumbers();
        break;

      default:
        break;
    }
  } while (option !== 6);
};

showMenu();
