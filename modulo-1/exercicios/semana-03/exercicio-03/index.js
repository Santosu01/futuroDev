const employeeName = "Marcio santos";
const employeeSector = "TI";
const hourLyRate = 50;
const hoursWorked = 300;
const maxHours = 220;

const getSalary = () => {
  if (hoursWorked > maxHours) {
    const excessHours = hoursWorked - maxHours;

    return maxHours * hourLyRate + excessHours * hourLyRate * 2;
  } else {
    return hoursWorked * hourLyRate;
  }
};

console.log(getSalary());
