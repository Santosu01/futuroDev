const employeeName = "Marcio santos";
const employeeSector = "TI";
const hourLyRate = 50;
const hoursWorked = 300;

const getSalary = () => {
  return hoursWorked * hourLyRate;
};

console.log(getSalary());
