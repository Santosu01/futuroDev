const employeeName = "Marcio santos";
const employeeSector = "Operacional";
const hourLyRate = 50;
const hoursWorked = 300;
const maxHours = 220;

const getSalaryByHours = (hours, excessHours) => {
  if (excessHours) {
    return hours * hourLyRate + excessHours * hourLyRate * 2;
  }

  return hours * hourLyRate;
};

const getSalaryBySector = (salaryAmount, hours, thereIsNoOvertime) => {
  if (employeeSector === "Administrativo") {
    return salaryAmount + salaryAmount * 0.1;
  } else if (thereIsNoOvertime) {
    const amount = hours * hourLyRate;

    return amount + amount * 0.25;
  } else {
    return salaryAmount;
  }
};

const getSalary = () => {
  const thereIsNoOvertime = employeeSector === "Gerência";
  const hours = hoursWorked >= maxHours ? maxHours : hoursWorked;
  const excessHours =
    thereIsNoOvertime || hoursWorked <= maxHours ? 0 : hoursWorked - maxHours;
  const salaryAmount = getSalaryByHours(hours, excessHours);
  const salaryResult = getSalaryBySector(
    salaryAmount,
    hours,
    thereIsNoOvertime
  );

  const formattedSalaryResult = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(salaryResult);

  return `O funcionário, do setor ${employeeSector}, ${employeeName} teve ${hours} horas trabalhadas e ${excessHours} horas extras. Seu salário mensal foi de ${formattedSalaryResult}`;
};

console.log(getSalary());
