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

console.log(primeCount(10));
