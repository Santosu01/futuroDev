//variaveis

let option = "0";

console.log("APLICAÇÃO FUTURO DEV!!");

function monitorName() {
  console.log("O nome do nosso monitor é VANDERLEI!!!");
}

do {
  console.log(option);
  console.log("[1] Qual o nosso curso?");
  console.log("[2] Que módulo estamos?");
  console.log("[3] Quem é o nosso mentor?");
  console.log("[4] Quem é o nosso monitor?");
  console.log("[5] Sair");

  option = prompt("Escolha a opção desejada: ");

  switch (Number(option)) {
    case 1:
      console.log("FuturoDEV (Joinville +TEC)");
      break;
    case 2:
      console.log("Modulo 1 Front-End (HTML/CSS/JS e React)");
      break;
    case 3:
      console.log("O mentor do nosso modulo atualmente é o Otto!");
      break;
    case 4:
      monitorName();
      break;
    case 5:
      console.log("Finalizando a aplicação....");
      break;

    default:
      console.log("Opção inválida!!!");
      break;
  }

  console.log(Number(option) !== 5);
  console.log(option + "+" + 5 + " = " + Number(option) + 5);
} while (Number(option) !== 5);
