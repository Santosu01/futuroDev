#### Números pares

##### Conceito

Um número par é um número inteiro que é divisível por 2, ou seja, quando você divide ele por 2, o resto da divisão é zero.

##### Código

```
const evenCount = (value) => {
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
```

##### Explicação

- Foi criado uma função de nome **evenCount**.
- Foi declarado uma variavel **count** para incrementação a cada volta no loop, a ser declarado em seguida, e, usada como verificação e parada do loop.
- Foi declarado uma variavel **let evenCount** para registro quantitativo de numeros pares entre 0 e o numero informado.
- Em seguida, foi criado a estrutura de loop com **while** que roda enquanto o **count** for menor ou igual a zero.
- Dentro do loop foi adicionado uma condicional que verifica se o numero da vez é maior que zero e, é verificado tambem se o mesmo não tem "resto" em divisão por 2, se o resultado for zero então é par.
- No final a função criada retorna a quantidade de numeros pares entre zero e o numero informado.

#### Números primos

##### Conceito

Um número primo é um número maior que 1 que só pode ser dividido por 1 e por ele mesmo sem deixar resto

##### Código

```
const primeCount = (value) => {
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
```

##### Explicação

- Foi criada uma função chama **_primeCount_**.
- No inicio da função é verificado se o numero informado é menor ou igual a 1, caso seja então o resultado retornado será 0.
- Caso o valor informado seja maior que zero então é declarado uma variável **count** para registro e controle do loop **for**.
- Em seguida é criado um loop **for** que roda enquanto o index de controle for menor ou igual ao valor informado.
- Dentro do loop **for** foi adicionado uma condicional que verifica se a divisão entre o valor informado e o index de controle é igual a zero.
- Caso seja zero então a variavel count é incrementada.
- No final a função retornará a quantidade de numeros primos registrado na variavel **count**.
