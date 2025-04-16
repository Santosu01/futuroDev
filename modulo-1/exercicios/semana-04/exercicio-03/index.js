const oddCount = (value) => {
  let oddCount = 0;
  for (let i = 1; i <= value; i++) {
    if (i % 2 !== 0) {
      oddCount += 1;
    }
  }

  return oddCount;
};

console.log(oddCount(10));
