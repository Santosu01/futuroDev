const employeeName = "Marcio santos";
const employeeSector = "Administrativo";
const hourLyRate = 50;
const hoursWorked = 300;
const maxHours = 220;

const getSalary = () => {
  let salaryAmount = hoursWorked * hourLyRate;
  if (hoursWorked > maxHours) {
    const excessHours = hoursWorked - maxHours;

    salaryAmount = maxHours * hourLyRate + excessHours * hourLyRate * 2;
  }

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

console.log(getSalary());
