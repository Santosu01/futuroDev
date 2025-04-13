const employeeName = "Marcio santos";
const employeeSector = "Administrativo";
const hourLyRate = 50;
const hoursWorked = 300;
const maxHours = 220;

const getSalaryByHours = () => {
  if (hoursWorked > maxHours) {
    const excessHours = hoursWorked - maxHours;

    return maxHours * hourLyRate + excessHours * hourLyRate * 2;
  }

  return hoursWorked * hourLyRate;
};

const getSalaryBySector = (salaryAmount) => {
  if (employeeSector === "Administrativo") {
    return salaryAmount + salaryAmount * 0.1;
  } else if (employeeSector === "Gerência") {
    const hours = hoursWorked > maxHours ? maxHours : hoursWorked;
    const amount = hours * hourLyRate;

    return amount + amount * 0.25;
  } else {
    return salaryAmount;
  }
};

const getSalary = () => {
  const salaryAmount = getSalaryByHours();

  return getSalaryBySector(salaryAmount);
};

console.log(getSalary());
